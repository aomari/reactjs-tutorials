import React from 'react'
import { useNavigate } from "react-router-dom"
import './styles.css'

function Home() {
    const navigator = useNavigate()

    return (
        <div className='App'>
            <div className='tutorial-section'>
                <button onClick={() => {
                    navigator("/Firestore")
                }}>
                    Firestore
                </button>
            </div>

            <div className='tutorial-section'>
                <button onClick={() => {
                    navigator("/Authentication")
                }}>
                    Firebase Authentication
                </button>
            </div>

            <div className='tutorial-section'>
                <button onClick={() => {
                    navigator("/GoogleAuth")
                }}>
                    FB Goofle Auth
                </button>
            </div>

            <div className='tutorial-section'>
                <button onClick={() => {
                    navigator("/UploadImages")
                }}>
                    Upload Images
                </button>
            </div>
        </div>
    )
}

export default Home