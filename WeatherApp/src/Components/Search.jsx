import React from 'react'
import './Search.css'
import lupa from '../icons/lupa.svg'

export default function Search({ setSearchCity, searchCity }) {
    return (
        <div className='container-search'>
            <div className='search'>
                <input
                    type='text'
                    spellCheck='false'
                    placeholder='City, example: San Francisco'
                    onChange={(e) => setSearchCity(e.target.value)}
                    value={searchCity}
                />
                <img src={lupa} alt='' />
            </div>
        </div>
    )
}
