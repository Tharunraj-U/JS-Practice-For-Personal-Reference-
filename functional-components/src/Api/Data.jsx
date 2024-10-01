import React, { useEffect, useState } from 'react'
 import "./data.css"
 import Home from './Home';

const Data = () => {
  
let [poke,setPoke]=useState([]);
let [dir,setDir]=useState("left");

const [childData, setChildData] = useState('');

// Callback function to receive data from child
const pokeData = (data) => {
  setChildData(data); // Update state with data received from child
  console.log('Data from child:', data);
};
async function getPokiman() {

    
    try{
       let data= await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
       if(data){
            data= await data.json();
            let pokeman= await Promise.all(
               data.results.map(async (e)=>{
                let img= await fetch(e.url)
                return img.json();
               }) 
            );
            setPoke(pokeman)
            console.log(pokeman);
            
        }
    }
    catch(e){
        console.log(e);
    }
}
useEffect((()=>{
 getPokiman();
}),[])
setInterval(()=>{
  // console.log("hello");
   dir === "left" ?setDir("right"):setDir("left")
  
},9000)
let render=()=>{
  return poke.map((e,i)=>(
        <div className='container2'  key={i}>
       <h6>{e.name.toUpperCase()}</h6>
        <br/>
         <p>Weight:{e.weight}kg {"  "} Height:{e.height}cm</p> 
         <marquee  direction={dir} scrollamount="10"  loop="0" >
          <img src={e.sprites.front_shiny} alt={e.name} />
          </marquee>
          </div>)
      );};



 let renderMy=()=>{
  let newArr=poke.filter((e)=>e.name.toLowerCase().includes(childData.toLowerCase()));



  return newArr.map((e,i)=>(
  
    <div className='container2'  key={i}>
   <h6>{e.name.toUpperCase()}</h6>
    <br/>
     <p>Weight:{e.weight}kg {"  "} Height:{e.height}cm</p> 
     <marquee  direction={dir} scrollamount="10"  loop="0" >
      <img src={e.sprites.front_shiny} alt={e.name} />
      </marquee>
      </div>)
  );
}
 

  return (
    <div className='body'>
      <Home poke={pokeData}/>
    <div className='container' type="circle">
       { childData ? renderMy(): render()}
      </div>
    </div>
  )
}

export default Data
