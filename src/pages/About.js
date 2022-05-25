import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    let navigate = useNavigate()

    return (
        <div>
            <div>About</div>
            <button onClick={() => { navigate("/") }}>Home</button>
        </div>
    )
}

export default About