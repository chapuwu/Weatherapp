import React from 'react'
import formatDate from '../utils/dates'
import getWeatherIcon from '../utils/getWeaherIcon'

export default function NextDayCard({ date, weather, min, max }) {
    return (
        <div>
            <p>{formatDate(date)}</p>
            <img src={getWeatherIcon(weather)} alt='' className='icon' />
            <p className='minimum'>{min}</p>
            <p className='maximum'>{max}</p>
        </div>
    )
}
