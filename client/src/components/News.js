import React, { useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
const key = "145de5d4edc08b6889cadbec82cc4470";
// const key = process.env.NEWS_API_KEY;
const News = () => {
  const [news, setNews] = React.useState([]);

  const fetchNews = async () => {
    try {
      console.log("key:", key);
      const res = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${key}&languages=en,-de`
      );
      console.log(res.data.data[0].description.length);
      let arr = [];
      for (let i = 0; i < 3; i++) {
        arr.push(res.data.data[i]);
      }
      setNews(arr);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news" style={{ padding: "1rem" }}>
      <h1>News</h1>
      <div className="list-group">
        {news.map((item, index) => (
          <a
            target="_blank"
            href={item.url}
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div className="flexx">
                <i id="icons" className="fa fa-rss"></i>
                <h3 className="mb-0">{item.title}</h3>
              </div>
              <hr />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
