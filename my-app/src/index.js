import React from "react"
import ReactDOM from "react-dom"


function App(){
   const date = new Date()
   const hour = date.getHours()
   let message

   if (hour < 12)
      message = "morning"
   else if (hour >=12 && hour <= 17)
      message = "afternoon"
   else  
      message = "night"
   
   const h1_style = {
      color: "rgb(121, 33, 194)",
      backgroundColor:"rgb(190, 133, 91)" ,
      fontSize: 20
   }
   return (
      <h1 style= {h1_style}>Good {message}</h1>
   )
}

ReactDOM.render(<App/>,document.getElementById("root"))