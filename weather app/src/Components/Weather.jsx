import React from 'react'
import './Weather.css'
import clear from '../icons/clear.svg'
import hail from '../icons/hail.svg'
import heavycloud from '../icons/heavycloud.svg'
import heavyrain from '../icons/heavyrain.svg'
import lightcloud from '../icons/lightcloud.svg'
import lightrain from '../icons/lightrain.svg'
import showers from '../icons/showers.svg'
import sleet from '../icons/sleet.svg'
import snow from '../icons/snow.svg'
import thunderstorm from '../icons/thunderstorm.svg'

export default function Weather() {
    return (
        <div className='container-lastdays'>
            <div className='weather'>
                <p>Jue, 13 OCT</p>
                <img src={clear} alt='' className='icon' />
                <div className='grados'>
                    <p className='maximum'>20°C</p>
                    <p className='minimum'>12°C</p>
                </div>
            </div>
            <div className='weather'>
                <p>Jue, 20 DIC</p>
                <img src={clear} alt='' className='icon' />
                <div className='grados'>
                    <p className='maximum'>29°C</p>
                    <p className='minimum'>20°C</p>
                </div>
            </div>
            <div className='weather'>
                <p>Jue, 15 OCT</p>
                <img src={clear} alt='' className='icon' />
                <div className='grados'>
                    <p className='maximum'>40°C</p>
                    <p className='minimum'>25°C</p>
                </div>
            </div>
            <div className='weather'>
                <p>Jue, 3 FEB</p>
                <img src={clear} alt='' className='icon' />
                <div className='grados'>
                    <p className='maximum'>60°C</p>
                    <p className='minimum'>40°C</p>
                </div>
            </div>
            <div className='weather'>
                <p>Sab, 15 OCT</p>
                <img src={clear} alt='' className='icon' />
                <div className='grados'>
                    <p className='maximum'>5000°C</p>
                    <p className='minimum'>100°C</p>
                </div>
            </div>
        </div>
    )
}
