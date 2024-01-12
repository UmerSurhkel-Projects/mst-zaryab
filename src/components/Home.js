import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const quizStart = () => {
        navigate('/quiz');
    }
    return (
        <div className='home-page'>
            <h1>Quiz App</h1>
            <button onClick={quizStart} className='custom-btn'>Start Quiz</button>
        </div>
    )
}

export default Home