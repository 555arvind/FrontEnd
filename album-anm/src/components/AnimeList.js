import React from 'react'

export const AnimeList = ({animelist}) => {
  return (
    <> {
    animelist ?(
      animelist.map((anime,index) => {
        return (
            <div className='card'>
            <img src="https://cdn.myanimelist.net/images/anime/13/174051.jpg"
            alt='name'>
            </img>
              <div className='anime-info'>
                <h1>naruto</h1>
              </div>
        </div>
            )
      })
    ):"Not found"

}
    
    </>
  )
}
