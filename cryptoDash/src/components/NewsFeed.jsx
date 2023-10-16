import axios from "axios";
import { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)
  useEffect(() => {
    
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://h-crypto-news.p.rapidapi.com/cryptonews',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'h-crypto-news.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options); // Use 'await' to wait for the response.
        console.log(response.data);
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchData(); // Call the fetchData function inside the useEffect.

  }, []);

  
  console.log(articles);

    
  const First7articles = articles?.slice(0, 7);

  

  return (
    <div className="news-feed">
      <h2>
        News- Feed
      </h2>
      {First7articles?.map((article, index) => (
         <a key={index} href={article.url} >
         <p>{article.title}</p>
       </a>
))}

    </div>
  );
}

export default NewsFeed;
