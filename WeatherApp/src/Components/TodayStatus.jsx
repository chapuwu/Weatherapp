import React from 'react'
import './TodayStatus.css'
import Wind from './Wind'
import Humidity from './Humidity'
import Visibility from './Visibility'
import AirPressure from './AirPressure'

export default function TodayStatus({ humidity, windSpeed, visibility, pressure }) {
    return (
        <div className='container-today-status'>
            <div className='today-status'>
                <Wind className='a' windSpeed={windSpeed} />
                <Humidity className='b' humidity={humidity} />
                <Visibility className='c' visibility={visibility} />
                <AirPressure className='d' pressure={pressure} />
            </div>
        </div>
    )
}
