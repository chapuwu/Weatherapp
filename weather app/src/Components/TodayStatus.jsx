import React from 'react'
import './TodayStatus.css'
import Wind from './Wind'
import Humidity from './Humidity'
import Visibility from './Visibility'
import AirPressure from './AirPressure'

export default function TodayStatus() {
    return (
        <div className='container-today-status'>
            <div className='today-status'>
                <Wind className='a' />
                <Humidity className='b' />
                <Visibility className='c' />
                <AirPressure className='d' />
            </div>
        </div>
    )
}
