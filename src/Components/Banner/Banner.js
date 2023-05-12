
import "./Banner.css"
import { useEffect, useState } from "react";
import axios from '../../axios';
import {API_KEY , ImageUrl} from "../../constants/constants";


function Banner() {
 const [movie, setMovie] = useState()

useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
     var slide = Math.floor(Math.random() * (19 - 0) + 0)
     setMovie(response.data.results[slide]);
  
  })
}, [])


  return (
    <div style={{backgroundImage: `url(${movie ? ImageUrl+movie.backdrop_path : ""})` }} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My List </button>
        </div>
        <div className='descreption'>
          {movie ? movie.overview : ""}
        </div>
        </div>
<div className="fade_bottom"> </div>

    </div>
  )
}

export default Banner