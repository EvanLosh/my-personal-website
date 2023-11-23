import React from "react"
import contents from "../data/contents.js"



function DisplaySelectedContent() {
    return (
        <div id="DisplaySelectedContent">DisplaySelectedContent
            <h2>{contents[0].title}</h2>
            <p>{contents[0].body}</p>

        </div>
    )
}

export default DisplaySelectedContent