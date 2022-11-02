import React from 'react'
import './Weather.css'
import hail from '../icons/hail.svg'
import heavycloud from '../icons/heavycloud.svg'
import heavyrain from '../icons/heavyrain.svg'
import showers from '../icons/showers.svg'
import sleet from '../icons/sleet.svg'
import WeatherHTML from './WeatherHTML'

export default function Weather({
    month,
    maxTomorrowWeather,
    minTomorrowWeather,
    weatherNameTomorrow,
    dayNumberTomorrow,
    weekNumberTomorrow,
}) {
    return (
        <div className='container-lastdays'>
            <WeatherHTML
                month={month}
                maxTomorrowWeather={maxTomorrowWeather}
                minTomorrowWeather={minTomorrowWeather}
                weatherNameTomorrow={weatherNameTomorrow}
                dayNumberTomorrow={dayNumberTomorrow}
                weekNumberTomorrow={weekNumberTomorrow}
            />
        </div>
    )
}
