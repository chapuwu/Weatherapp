import { useState } from 'react'
import './Search.css'
import lupa from '../icons/lupa.svg'

export default function Search({ handleSearch }) {
    const [searchCity, setSearchCity] = useState('')

    function handleKeyDown(event) {
        if (event.key === 'Enter' && searchCity !== '') {
            handleSearch(searchCity)
        }
    }

    function handleButtonClick() {
        if (searchCity !== '') {
            handleSearch(searchCity)
        }
    }

    return (
        <div className='search-container'>
            <input
                type='text'
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                spellCheck='false'
                placeholder='City, example: San Francisco'
                onKeyDown={handleKeyDown}
            />
            <img src={lupa} alt='' onClick={handleButtonClick} />
        </div>
    )
}
