
import { useState,useEffect } from "react";
import MainContent from "./components/MainContent";
import Style from './components/Style.css'
function App() {
  const [animeList,SetAnimeList] = useState([]);     
  const [search,SetSearch] = useState("");
  const [dAnime,setdAnime] = useState([]);

  const HandleSearch = e => {
    e.preventDefault();
    
    fetchAnime(search);
    
  }
 
   const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&sfw`
    ).then((res) => res.json());
    
    SetAnimeList(temp.data);
    
    

  };

  const getAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/top/anime?filter=airing`
    ).then((res) => res.json());
  
    SetAnimeList(temp.data?.slice(0,5));

    // Initial load to set anime list to the top anime
    SetAnimeList(temp.data);
  };

  useEffect(() => {
    getAnime();
    
  }, []);
  return (
    
       <div className="haeding">
        <div>
         
       </div>
       <div className="content-wrap">
             <MainContent
             HandleSearch={HandleSearch}
             search={search}
             SetSearch = {SetSearch}
             animeList={animeList}
                   />
                   
                          </div>
                          
      </div>
      
      
  );
}

export default App;


