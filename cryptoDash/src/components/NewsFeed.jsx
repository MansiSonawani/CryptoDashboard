import axios from "axios";
import { useEffect, useState } from "react";


const NewsFeed = () => {
  const [articles, setArticles] = useState(null)
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://h-crypto-news.p.rapidapi.com/cryptonews',
        headers: {
          'X-RapidAPI-Key': '4ca78aa6d4mshb107fc4a6741de5p14414cjsnb496ba7048a9',
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
