import React from 'react'
import './Weather.css'
import hail from '../icons/hail.svg'
import heavycloud from '../icons/heavycloud.svg'
import heavyrain from '../icons/heavyrain.svg'
import showers from '../icons/showers.svg'
import sleet from '../icons/sleet.svg'
import WeatherHTML from './WeatherHTML'

export default function Weather({ nextDays }) {
    return (
        <div className='container-lastdays'>
            {}
            {/* <WeatherHTML
                month={month}
                maxTomorrowWeather={maxTomorrowWeather}
                minTomorrowWeather={minTomorrowWeather}
                weatherNameTomorrow={weatherNameTomorrow}
                dayNumberTomorrow={dayNumberTomorrow}
                weekNumberTomorrow={weekNumberTomorrow}
            />
            <WeatherHTML
                month={month}
                maxTomorrowWeather={secondMaxCelsius}
                minTomorrowWeather={secondMinCelsius}
                weatherNameTomorrow={secondWeather}
                dayNumberTomorrow={secondDateNumber}
                weekNumberTomorrow={secondWeekName}
            />
            <WeatherHTML
                month={month}
                maxTomorrowWeather={thirdMaxCelsius}
                minTomorrowWeather={thirdMinCelsius}
                weatherNameTomorrow={thirdWeatherName}
                dayNumberTomorrow={thirdDayNumber}
                weekNumberTomorrow={thirdDayName}
            /> */}
        </div>
    )
}
