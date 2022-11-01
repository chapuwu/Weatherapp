import React from 'react'
import './Weather.css'
import clear from '../icons/clear.svg'
import hail from '../icons/hail.svg'
import heavycloud from '../icons/heavycloud.svg'
import heavyrain from '../icons/heavyrain.svg'
import showers from '../icons/showers.svg'
import sleet from '../icons/sleet.svg'
import snow from '../icons/snow.svg'
import thunderstorm from '../icons/thunderstorm.svg'
import rain from '../icons/lightrain.svg'
import cloud from '../icons/lightcloud.svg'

export default function Weather({ maxTomorrowWeather, minTomorrowWeather, weatherNameTomorrow }) {
    const iconsList = {
        Rain: rain,
        Clouds: cloud,
        Clear: clear,
        Thunderstorm: thunderstorm,
        Snow: snow,
    }

    return (
        <div className='container-lastdays'>
            <div className='weather'>
                <p>Jue, 13 OCT</p>
                <img src={iconsList[weatherNameTomorrow]} alt='' className='icon' />
                <div className='grados'>
                    <p className='maximum'>{maxTomorrowWeather}°C</p>
                    <p className='minimum'>{minTomorrowWeather}°C</p>
                </div>
            </div>
        </div>
    )
}
