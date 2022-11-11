import React, { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import Search from './components/Search'
import TodayStatus from './components/TodayStatus'
import Today from './components/Today'
import ScalePicker from './components/ScalePicker'
import { kelvinToCelsius, kelvinToFahrenheit } from './utils/tempConvert'
import { getNextDaysInfo } from './utils/dates'

function App() {
    // user input
    const [scale, setScale] = useState('celsius')

    // api response
    const [todayInfo, setTodayInfo] = useState({})
    const [nextDaysInfo, setNextDaysInfo] = useState([])

    function handleSearch(searchCity) {
        const apiUrl = new URL('http://api.openweathermap.org/data/2.5/forecast')
        apiUrl.searchParams.append('appid', 'ec11c748879d669b48c60f6aab8f67d1')
        apiUrl.searchParams.append('q', searchCity)

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                const today = data.list[0]

                setTodayInfo({
                    city: data.city.name,
                    temperature: today.main.temp,
                    weatherName: today.weather[0].main,
                    humidity: today.main.humidity,
                    windSpeed: today.wind.speed,
                    visibility: today.visibility,
                    pressure: today.main.pressure,
                })

                setNextDaysInfo(getNextDaysInfo(data))
            })
    }

    useEffect(() => {
        // on mount, fetch new york by default
        handleSearch('New York')
    }, [])

    return (
        <div className='App'>
            <Today
                city={todayInfo.city}
                temperature={todayInfo.temperature}
                weatherName={todayInfo.weatherName}
                scale={scale}
            />
            <main>
                <header className='header'>
                    <h1 className='logo'>ClimaApp</h1>
                    <ScalePicker scale={scale} setScale={setScale} />
                </header>
                <Search handleSearch={handleSearch} />
                <Weather nextDaysInfo={nextDaysInfo} scale={scale} />
                <h2 className='weather-today-title'>Hoy</h2>
                <TodayStatus
                    humidity={todayInfo.humidity}
                    windSpeed={todayInfo.windSpeed}
                    visibility={todayInfo.visibility}
                    pressure={todayInfo.pressure}
                />
            </main>
        </div>
    )
}

export default App
