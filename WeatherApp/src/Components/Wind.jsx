import React from 'react'
import './Wind.css'

export default function Wind({ windSpeed }) {
    return (
        <div className='wind'>
            <p className='state-wind'>Estado del viento</p>
            <div className='wind-speed'>
                <h1>{windSpeed} m/s</h1>
            </div>
        </div>
    )
}
