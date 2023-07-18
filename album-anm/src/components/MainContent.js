import React, { useState } from 'react'
import AnimeCard from './AnimeCard';
import main from './main.css'
function MainContent(props) {
  const [visible,setVisible]=useState(10);
  const [count,setCount]=useState(0);

  const LoadMore = () => {
    setVisible(visible+10);
    setCount(count+10);
  }
  const Negate = () => {
    setVisible(visible-10);
    setCount(count-10);
      
  }

  const Back = () => {
    setVisible(visible-10);
    setCount(count-10);
    
  }
  
    return (
   <main>
          
          <div className="container2"> 
          <div className='main-head'>
          
        <img 
          src={require('../Images/ARV.png')} 
          alt="logo" 
          width="200" height="100" 
          
           >
            
          </img>
          </div>

             <div className='word'>        
                 <h1>SEARCH YOUR ANIME</h1> 
            
           
            
            <form 
            className="search-box"
            onSubmit={props.HandleSearch}> 
          
                
                    <input 
                    type = "search"
                    placeholder = "Search for Anime"
                    required
                    value = {props.search}
                    onChange={e=> props.SetSearch(e.target.value
                      )}/>
            </form>
            </div>
            </div>
            
          
     
        <div className='animeList'>
        
          {props.animeList.slice(count,visible).map(anime =>(
            <AnimeCard
                anime={anime}
                key={anime.mal_id}/>)
          
          )}
          </div>
          {visible<props.animeList.length && (
            <button className='next'   onClick={LoadMore}>NEXT</button>
          )}
          
          {visible<props.animeList.length && visible> 0 && (
            <button  className='negate'     onClick={Negate}>BACK</button>
            
          )}

           

          {visible>props.animeList.length && (
            <button  className='backk'        onClick={Back}>LAST RECORD so GO BACK</button>
          )}

    
          
          
          
          
        
    </main>

    )
}

export default MainContent