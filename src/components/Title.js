import React from "react"
import MainMenu from "./MainMenu"

function Title() {
    return (
        <div>
            <img class="profile-picture" href="" alt="Profile picture" style={{ float: 'left' }}></img>
            <div style={{ float: 'left' }}>
                <h1>Evan Losh</h1>
                <h3>My personal website</h3>
            </div>
            <MainMenu style={{ float: 'left' }} />
        </div>
    )
}

export default Title