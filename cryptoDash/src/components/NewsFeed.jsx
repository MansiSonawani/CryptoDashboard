import axios from "axios";
import { useEffect } from "react";



const NewsFeed =async () => {
  useEffect(() => {

   

    const options = {
      method: 'GET',
      url: 'https://h-crypto-news.p.rapidapi.com/cryptonews',
      headers: {
        'X-RapidAPI-Key': '4ca78aa6d4mshb107fc4a6741de5p14414cjsnb496ba7048a9',
        'X-RapidAPI-Host': 'h-crypto-news.p.rapidapi.com'
      }
    };

    try {
      const response = axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  },[])
  

}
  
  export default NewsFeed
  