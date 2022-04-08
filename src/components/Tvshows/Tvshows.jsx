import axios from 'axios'
import React, { useEffect,useState } from 'react'
import styles from './Tvshowes.module.css';


export default function Home() {
  
  let[TrendingTV,setTrendingTV]=useState([]);
  let BaseImageUrl="https://image.tmdb.org/t/p/original/";
  async function gettypedata(type,callback){
    let{data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=24266227bd3c1173d7ed55cb145e2843`)
    callback(data.results);
  }
  useEffect(()=>{
    
    
    
    gettypedata("tv",setTrendingTV);
  },[])
  return (<>
  
    

<div className='row'>

<div className='col-md-4 d-flex align-items-center'>

<div className='w-100'>
  <div className={styles.border}></div>
  <h2>Trending</h2>
  <h2>TV</h2>
  <h2>To watch now</h2>
  <p className='secondcolor'>The Trending TV:</p><div className={styles.border}></div>
  </div>
</div>
{TrendingTV.map((tv,index)=>
<div className='col-md-3'>
<div className='movie'>
<h2 className='mt-3'>{tv.name}</h2>
<img className='w-100 mb-3' src={BaseImageUrl+tv.poster_path}  />
</div>
</div>)}
</div></>
    
  )
}
