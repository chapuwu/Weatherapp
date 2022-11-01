import React from 'react'
import './AirPressure.css'

export default function AirPressure({ pressure }) {
    return (
        <div className='air-pressure'>
            <p>Air Pressure</p>
            <h1>{pressure} hPa</h1>
        </div>
    )
}
