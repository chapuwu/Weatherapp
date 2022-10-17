import React from 'react'
import './Today.css'
import showers from '../icons/showers.svg'

export default function Today() {
    return (
        <div className='container'>
            <div className='today'>
                <img src={showers} alt='' />
                <div className='grados2'>
                    <h1>20</h1>
                    <p>°C</p>
                </div>
                <div>
                    <p className='clima-hoy'>Lluvioso</p>
                </div>
                <div className='dia-hoy'>
                    <p>Hoy</p>
                    <p>Jueves, 13 OCT</p>
                </div>
                <div className='ciudad-hoy'>
                    <p>China</p>
                </div>
            </div>
        </div>
    )
}
