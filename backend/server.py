import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from collections.abc import AsyncIterator
import uuid
from datetime import datetime
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
from lib.db import client, db, ensure_indexes

# Startup runs before the yield, shutdown after it.
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    app.state.index_task = asyncio.create_task(ensure_indexes())
    yield
    client.close()

# Create the main app without a prefix
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Rotas existentes
@api_router.get("/")
async def root() -> dict[str, str]:
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate) -> StatusCheck:
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj

@api_router.get("/status", response_model=list[StatusCheck])
async def get_status_checks() -> list[StatusCheck]:
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Rota para avaliações automáticas do Google
@api_router.get("/reviews")
async def get_google_reviews():
    api_key = os.environ.get("GOOGLE_PLACES_API_KEY")
    place_id = os.environ.get("GOOGLE_PLACE_ID")

    if not api_key or not place_id:
        return {"rating": 5.0, "total": 78}

    url = (
        f"https://maps.googleapis.com/maps/api/place/details/json"
        f"?place_id={place_id}&fields=rating,user_ratings_total&key={api_key}"
    )

    try:
        async with httpx.AsyncClient(timeout=10.0) as http_client:
            response = await http_client.get(url)
            data = response.json()

            if data.get("status") == "OK":
                result = data.get("result", {})
                return {
                    "rating": result.get("rating", 5.0),
                    "total": result.get("user_ratings_total", 78)
                }
    except Exception as exc:
        logger.error(f"Erro ao consultar Google Places API: {exc}")

    # Fallback seguro caso haja falha temporária de rede ou quota
    return {"rating": 5.0, "total": 78}

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Include the router only after every API route and app-level configuration is defined.
app.include_router(api_router)
