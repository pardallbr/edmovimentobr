export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({ error: "Credenciais nao configuradas" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(500).json({ error: data.error_message || "Erro na Google API" });
    }

    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

    return res.status(200).json({
      rating: data.result.rating,
      total: data.result.user_ratings_total,
    });
  } catch (error) {
    return res.status(500).json({ error: "Falha na requisicao" });
  }
}
