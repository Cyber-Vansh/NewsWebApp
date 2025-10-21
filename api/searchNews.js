export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  const NEWS_API_KEY = process.env.NEWS_API_KEY;
  const { q } = req.query;

  if (!q) return res.status(400).json({ error: "Query parameter missing" });

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&language=en&apiKey=${NEWS_API_KEY}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch search results" });
  }
}
