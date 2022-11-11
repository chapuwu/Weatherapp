import React from 'react'
import './Today.css'
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/tempConvert'
import { formatDate } from '../utils/dates'
import getWeatherIcon from '../utils/getWeatherIcon'

export default function Today({ city, temperature, weatherName, scale }) {
    if (temperature === undefined) {
        return null
    }

    return (
        <div className='today'>
            <img src={getWeatherIcon(weatherName)} alt='' />
            <p className='degrees'>
                {scale === 'celsius'
                    ? Math.round(kelvinToCelsius(temperature))
                    : Math.round(kelvinToFahrenheit(temperature))}
                <span>{scale === 'celsius' ? '°C' : '°F'}</span>
            </p>
            <p className='weather-name'>{weatherName}</p>
            <p className='today-date'>{formatDate(new Date())}</p>
            <p className='today-city'>{city}</p>
        </div>
    )
}
