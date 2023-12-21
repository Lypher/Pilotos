import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.styles.css'


export default function Landing() {
    const navigate = useNavigate()

    return (
        <div className='container' >
            <button className='driversBtn' onClick={() => navigate('/home')}>
                Drivers
            </button>
        </div>
    )
}
