import { useState, useEffect } from "react";
import "./SpaceFeed.css";

function SpaceFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/"
        );

        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (articles.length === 0) {
    return <h2 className="loading">No articles available.</h2>;
  }

  return (
    <div className="space-feed">
      <h1 className="feed-title">SPACE FEED</h1>

      {articles.map((article) => (
        <div className="article" key={article.id}>
          <img
            src={article.image_url}
            alt={article.title}
            className="article-image"
          />

          <div className="article-content">
            <h2>{article.title}</h2>

            <p className="summary">
              {article.summary.length > 200
                ? article.summary.slice(0, 200) + "..."
                : article.summary}
            </p>

            <div className="article-info">
              <span>{article.news_site}</span>

              <span>
                {new Date(article.published_at).toLocaleDateString()}
              </span>
            </div>

            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="read-more"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpaceFeed;