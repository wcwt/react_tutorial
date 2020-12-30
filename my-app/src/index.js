import React from "react"
import ReactDOM from "react-dom"
import BadgeVisibility from "./comp/Box.js"

function Joke(props){
   return(
      <div>
         <p>Question is {props.question}</p>
         <p>Answer is {props.answer}</p>
      </div>
   )
}

function App(){
   return(
      <div>
         <Joke question = "123" answer = "456"/>
         <BadgeVisibility/>
      </div>
   )
}

ReactDOM.render(<App/>,document.getElementById("root"))
