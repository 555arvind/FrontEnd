
import React from 'react'
import Style from './Style.css'
function AnimeCard({anime}) {
    
      return (

      
       
      
        
        <a href={anime?.url} 
        target="_blank" 
        rel="noreferrer" >
          <figure>
          
          <div className="container">
            <div className='Image'>
            
                      <img
                          width ="150"
                          height ="200"
                        src={anime.images.jpg.large_image_url}
                      
                        alt="No"/>
                       </div>

                      <div className='Title'>
                        <h3> {anime.title} </h3>
                      </div>
                                         
                            
                </div>

                    
                    
                    
                    
                    
</figure>

</a>

  
          
      )
  }
  
  export default AnimeCard
  
  