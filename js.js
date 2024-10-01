console.log("hello");
false || console.log("my name is tharun");
let a=[1,23,4,34];

let b=a.filter((e)=>{
    return e>20;
});
let dat


// asyncronous function for geting data from api 
async function getdata(){
    const response= await fetch("https://official-joke-api.appspot.com/random_ten");
    console.log("my name is tharun");
    try{
         
        
           dat=await response.json();
           if(dat){
          
          
           console.log(dat)
            let render=document.querySelectorAll(".my");
            render.forEach((render,index)=>{
                render.innerHTML=`<ol>${dat.map((e)=>{
                    let html=`<li><strong style="color:red">${e.setup}</strong><br><p>${e.punchline}</p></li>`
                    return  html;
                }).join('')}`
               
            })
           
        }

        
    }catch(e){
        console.log.apply(e);
    }
}

 function scrollToBottom() {
          const container = document.querySelectorAll('.my');
          container.forEach(container=>{
              container.scrollTop=container.scrollHeight;
          })
        }
