import React from 'react'
import './Weather.css'
import NextDayCard from './NextDayCard'

export default function Weather({ nextDaysInfo, scale }) {
    return (
        <div className='next-days-info-container'>
            {nextDaysInfo.map((day) => (
                <NextDayCard
                    key={day.date}
                    date={day.date}
                    weather={day.weather}
                    min={day.min}
                    max={day.max}
                    scale={scale}
                />
            ))}
        </div>
    )
}
