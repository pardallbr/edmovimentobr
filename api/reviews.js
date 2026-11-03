export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Fallback seguro caso as variáveis ainda não estejam lidas
  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({ rating: 5.0, total: 78 }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === "OK" && data.result) {
      return new Response(
        JSON.stringify({
          rating: data.result.rating || 5.0,
          total: data.result.user_ratings_total || 78,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate',
          },
        }
      );
    }
  } catch (error) {
    // Em caso de falha de rede da Google, retorna o valor seguro sem quebrar
  }

  return new Response(
    JSON.stringify({ rating: 5.0, total: 78 }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
