import React from 'react'
import { formatDate } from '../utils/dates'
import getWeatherIcon from '../utils/getWeatherIcon'
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/tempConvert'
import './NextDayCard.css'

export default function NextDayCard({ date, weather, min, max, scale }) {
    const minTemp = scale === 'celsius' ? Math.round(kelvinToCelsius(min)) : Math.round(kelvinToFahrenheit(min))
    const maxTemp = scale === 'celsius' ? Math.round(kelvinToCelsius(max)) : Math.round(kelvinToFahrenheit(max))
    const degrees = scale === 'celsius' ? '°C' : '°F'

    return (
        <div className='next-days-info-card'>
            <p>{formatDate(date)}</p>
            <img src={getWeatherIcon(weather)} alt='' className='icon' />
            <p className='temp'>
                {minTemp}
                <span className='degree-scale'>{degrees}</span>
            </p>
            <p className='temp min'>
                {maxTemp}
                <span className='degree-scale'>{degrees}</span>
            </p>
        </div>
    )
}
