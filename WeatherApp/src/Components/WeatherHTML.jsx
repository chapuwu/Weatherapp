import React from 'react'
import rain from '../icons/lightrain.svg'
import cloud from '../icons/lightcloud.svg'
import clear from '../icons/clear.svg'
import thunderstorm from '../icons/thunderstorm.svg'
import snow from '../icons/snow.svg'

export default function WeatherHTML({
    month,
    maxTomorrowWeather,
    minTomorrowWeather,
    weatherNameTomorrow,
    dayNumberTomorrow,
    weekNumberTomorrow,
}) {
    const iconsList = {
        Rain: rain,
        Clouds: cloud,
        Clear: clear,
        Thunderstorm: thunderstorm,
        Snow: snow,
    }

    const weekName = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

    return (
        <div className='weather'>
            <p>
                {weekName[weekNumberTomorrow]}, {dayNumberTomorrow} {month}
            </p>
            <img src={iconsList[weatherNameTomorrow]} alt='' className='icon' />
            <div className='grados'>
                <p className='maximum'>{maxTomorrowWeather}°C</p>
                <p className='minimum'>{minTomorrowWeather}°C</p>
            </div>
        </div>
    )
}
