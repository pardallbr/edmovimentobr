import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import json
import urllib.request
from pathlib import Path
from pydantic import BaseModel, Field
from collections.abc import AsyncIterator
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

try:
    from lib.db import client, db, ensure_indexes
except Exception:
    client = None
    db = None
    ensure_indexes = None

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    if ensure_indexes:
        try:
            app.state.index_task = asyncio.create_task(ensure_indexes())
        except Exception:
            pass
    yield
    if client:
        try:
            client.close()
        except Exception:
            pass

app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

@api_router.get("/")
async def root() -> dict[str, str]:
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate) -> StatusCheck:
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    if db is not None:
        await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj

@api_router.get("/status", response_model=list[StatusCheck])
async def get_status_checks() -> list[StatusCheck]:
    if db is not None:
        status_checks = await db.status_checks.find().to_list(1000)
        return [StatusCheck(**status_check) for status_check in status_checks]
    return []

@api_router.get("/reviews")
def get_google_reviews():
    api_key = os.environ.get("GOOGLE_PLACES_API_KEY")
    place_id = os.environ.get("GOOGLE_PLACE_ID")

    if not api_key or not place_id:
        return {"rating": 5.0, "total": 78}

    url = f"https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=rating,user_ratings_total&key={api_key}"

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            if data.get("status") == "OK":
                result = data.get("result", {})
                return {
                    "rating": result.get("rating", 5.0),
                    "total": result.get("user_ratings_total", 78)
                }
    except Exception as exc:
        logging.error(f"Erro ao consultar Google Places: {exc}")

    return {"rating": 5.0, "total": 78}

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

app.include_router(api_router)
