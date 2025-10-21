export default async function handler(req, res) {
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const categories = ["general","technology","business","sports","health","entertainment","science"];

  try {
    const requests = categories.map(category => 
      fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=20&apiKey=${NEWS_API_KEY}`)
        .then(r => r.json())
        .catch(() => null)
    );

    const responses = await Promise.all(requests);
    res.status(200).json(responses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
