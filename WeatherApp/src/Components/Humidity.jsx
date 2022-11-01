import React from 'react'
import './Humidity.css'

export default function Humidity({ humidity }) {
    return (
        <div className='humidity'>
            <p>Humedad</p>
            <h1 className='humidity-date'>{humidity}%</h1>
        </div>
    )
}
