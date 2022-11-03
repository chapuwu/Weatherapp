import React, { useEffect } from 'react'
import './Today.css'
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/tempConvert'
import { formatDate } from '../utils/dates'
import getWeatherIcon from '../utils/getWeaherIcon'

export default function Today({ city, temperature, weatherName, scale }) {
    return (
        <div className='container'>
            <div className='today'>
                <img src={getWeatherIcon(weatherName)} alt='' />
                <div className='grados2'>
                    <h1>
                        {scale === 'celsius'
                            ? Math.round(kelvinToCelsius(temperature))
                            : Math.round(kelvinToFahrenheit(temperature))}
                    </h1>
                    <p>{scale === 'celsius' ? '°C' : '°F'}</p>
                </div>
                <div>
                    <p className='clima-hoy'>{weatherName}</p>
                </div>
                <div className='dia-hoy'>
                    <p>Hoy,</p>
                    <p>{formatDate(new Date())}</p>
                </div>
                <div className='ciudad-hoy'>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    )
}
