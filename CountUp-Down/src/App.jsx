  import React, { useEffect, useState } from 'react'

  const App = () => {
  const [timer , setTimer] = useState(0)
  const [count , setCount] = useState(false)

  const handleIncrement = () =>{
  
    if(!count){
      setCount(true)
    }

  }

  useEffect(()=>{
   if(count){
    const time = setInterval(()=>{
      setTimer((prev)=>{

        if(prev === 10){
          setCount(false)
        }

        if(prev < 10 && count){
          console.log("Inc prev",prev)
          setCount(false)
         
          return prev + 1
        }
        else if (prev > 0){
          return prev - 1
        }
       
      })
    },1000)
   }
  })


    

    return (
      <div>
      <div>
        <h1>Count : {timer}</h1>
        <button onClick={handleIncrement}>{count ? "Running..." : "Start"}</button>
      </div>
      
        
      </div>
    )
  }

  export default App
