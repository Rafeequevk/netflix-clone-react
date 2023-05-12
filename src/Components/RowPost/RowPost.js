import axios from '../../axios'
import React from 'react'
import { useEffect, useState } from 'react'
import "./RowPost.css"
import { ImageUrl, API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube';

function RowPost(props) {
  const [url, setUrl] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((respons) => {
      setMovies(respons.data.results);
    }).catch(err => {
      alert('Error')
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
const handleClick= (id)=>{
console.log(id);
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
 console.log(response.data.results[0]);
 if(response.data.results.length!==0){
  setUrl(response.data.results[0])
 }else{
  console.log("No Videos Found");
 }
    
  })
}
  return (
    <div className='row'> 
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) =>
            <img onClick={()=>handleClick(obj.id)} alt='' className={props.isSmall ? 'smallPoster' : 'poster'} src={`${movies ? ImageUrl + obj.backdrop_path : ""}`}></img>
            
          )
        }
      </div>
      <YouTube videoId={url.key} opts={opts} />
    </div>
  )
}

export default RowPost