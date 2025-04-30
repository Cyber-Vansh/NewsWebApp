import "jsr:@supabase/functions-js/edge-runtime.d.ts"

Deno.serve(async (req) => {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const q = searchParams.get("q");

  const NEWS_API_KEY = Deno.env.get("NEWS_API_KEY");

  if (!NEWS_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing News API key" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let url = "";

  if (type === "top-headlines" && category) {
    url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=20&apiKey=${NEWS_API_KEY}`;
  } else if (type === "search" && q) {
    url = `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&language=en&apiKey=${NEWS_API_KEY}`;
  } else {
    return new Response(
      JSON.stringify({ error: "Invalid query parameters" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const externalRes = await fetch(url);
  const data = await externalRes.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // ✅ CORS Fix
    },
  });
});
