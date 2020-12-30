import React from "react"


function Checkbox(){
    const text_element = "0.0"
    return (
        <div>
            <input type = "checkbox"></input>
            <p>{text_element}</p>
        </div>
    )
}

function MainContent(){
    return (
        <div>
            <p>I am text</p>
            <main>
                <Checkbox/>
            </main>
        </div>
    )
}

export default MainContent