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
   
   return (<h1 style={ {color: "#" } }>Good {message}</h1>)
}

ReactDOM.render(<App/>,document.getElementById("root"))