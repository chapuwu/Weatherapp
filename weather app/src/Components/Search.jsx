import React from 'react'
import './Search.css'
import lupa from '../icons/lupa.svg'

export default function Search() {
    return (
        <div className='container-search'>
            <div className='search'>
                <input type='text' spellCheck='false' placeholder='City, example: San Francisco' />
                <img src={lupa} alt='' />
            </div>
        </div>
    )
}
