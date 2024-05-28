import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">About</h1>
                    <p className="py-6">Tell us what you are making.<span className='text-2xl'> 😁</span></p>
                    <button onClick={goBack} className="btn btn-primary">Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default About