import React, { useEffect } from 'react'
import './Today.css'
import heavyRain from '../icons/heavyrain.svg'
import cloud from '../icons/lightcloud.svg'
import rain from '../icons/lightrain.svg'
import clear from '../icons/clear.svg'
import thunderstorm from '../icons/thunderstorm.svg'
import showers from '../icons/showers.svg'
import hail from '../icons/hail.svg'
import heavycloud from '../icons/heavycloud.svg'
import snow from '../icons/snow.svg'

const icons = {
    Rain: rain,
    Clouds: cloud,
    Clear: clear,
    Thunderstorm: thunderstorm,
    Snow: snow,
}

const weekName = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

export default function Today({ month, city, celsius, weatherName, dayNumber, celsiusOrFahrenheit, weekDay }) {
    return (
        <div className='container'>
            <div className='today'>
                <img src={icons[weatherName]} alt='' />
                <div className='grados2'>
                    <h1>{celsius}</h1>
                    {celsiusOrFahrenheit ? <p>°F</p> : <p>°C</p>}
                </div>
                <div>
                    <p className='clima-hoy'>{weatherName}</p>
                </div>
                <div className='dia-hoy'>
                    <p>Hoy,</p>
                    <p>
                        {weekName[weekDay]} {dayNumber} {month}
                    </p>
                </div>
                <div className='ciudad-hoy'>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    )
}
