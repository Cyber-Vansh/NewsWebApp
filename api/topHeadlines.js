export const config = {
  runtime: "nodejs20", // 👈 forces Node runtime (so process.env works)
};

export default async function handler(req, res) {
  const NEWS_API_KEY = process.env.NEWS_API_KEY;

  if (!NEWS_API_KEY) {
    return res.status(500).json({ error: "Missing NEWS_API_KEY in environment" });
  }

  const categories = [
    "general",
    "technology",
    "business",
    "sports",
    "health",
    "entertainment",
    "science",
  ];

  try {
    const requests = categories.map((category) =>
      fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=20&apiKey=${NEWS_API_KEY}`
      )
        .then((r) => r.json())
        .catch((err) => {
          console.error(`Error fetching ${category}:`, err);
          return null;
        })
    );

    const responses = await Promise.all(requests);
    res.status(200).json(responses);
  } catch (err) {
    console.error("TopHeadlines API error:", err);
    res.status(500).json({ error: err.message });
  }
}
