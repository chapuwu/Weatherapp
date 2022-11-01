import React from 'react'
import './Visibility.css'

export default function Visibility({ visibility }) {
    return (
        <div className='visibility'>
            <p>Visibilidad</p>
            <h1>{visibility} km</h1>
        </div>
    )
}
