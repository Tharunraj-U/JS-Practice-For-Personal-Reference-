import React from 'react'
import "./Home.css"

import Data from './Data'
const Home = ({poke}) => {

  let render=(e)=>{
    poke(e.target.value)
    console.log(e.target.value);
  }
  return (
    <div className='body1'>
        <div><h1>Pokemon </h1></div>
        <div className='containerForSearchBox'>
           <p>Search your  favorite pokemon</p> 
           <input onChange={(e)=>render(e)}/>
           
           </div>
     
    </div>
  )
}

export default Home
