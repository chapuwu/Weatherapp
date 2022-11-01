import React, { useEffect, useState } from 'react'
import './App.css'
import Weather from './Components/Weather'
import Search from './Components/Search'
import TodayStatus from './Components/TodayStatus'
import Today from './Components/Today'

function App() {
    const [city, setCity] = useState('')
    const [iconWeather, setIconWeather] = useState('')
    const [celsius, setCelsius] = useState(0)
    const [timeZone, setTimeZone] = useState(0)
    const [weatherName, setWeatherName] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windSpeed, setWindSpeed] = useState(0)
    const [visibility, setVisibility] = useState(0)
    const [pressure, setPressure] = useState(0)
    const [maxTomorrowWeather, setMaxTomorrowWeather] = useState(0)
    const [minTomorrowWeather, setMinTomorrowWeather] = useState(0)
    const [dayNumber, setDayNumber] = useState(0)
    const [searchCity, setSearchCity] = useState('')
    const [celsiusOrFahrenheit, setCelsiusOrFahrenheit] = useState(false)
    const [tomorrow, setTomorrow] = useState('')
    const [weatherNameTomorrow, setWeatherNameTomorrow] = useState('')

    const initialURL = `http://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=ec11c748879d669b48c60f6aab8f67d1&units=metric` // URL API

    function dataAPI(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCity(data.city.name)
                setIconWeather(data.list[0].weather[0].main)
                setTimeZone(data.city.timezone)
                setCelsius(parseInt(data.list[0].main.temp))
                setWeatherName(data.list[0].weather[0].main)
                setHumidity(data.list[0].main.humidity)
                setWindSpeed(data.list[0].wind.speed)
                setVisibility(data.list[0].visibility)
                setPressure(data.list[0].main.pressure)
                setMaxTomorrowWeather(parseInt(data.list[1].main.temp_max))
                setMinTomorrowWeather(parseInt(data.list[1].main.temp_min))
                setDayNumber(data.list[0].dt_txt.slice(8, 10))
                setTomorrow(data.list[8].weather.main)
                setWeatherNameTomorrow(data.list[8].weather[0].main)
            })
    } // esta funcion agarra la URL API, lo convierte a json y lo imprime en consola

    function celsiusToFahrenheit() {
        setCelsiusOrFahrenheit(!false)
        const fahrenheit = parseInt(celsius * 1.8)
        const fahrenheitFinal = parseInt(fahrenheit + 32)
        setCelsius(fahrenheitFinal)
    }

    function fahrenheitToCelsius() {
        setCelsiusOrFahrenheit(!true)
        const centigrado = parseInt(celsius - 32)
        const centigradoFinal = parseInt(centigrado / 1.8)
        setCelsius(centigradoFinal)
    }

    useEffect(() => {
        dataAPI(initialURL)
    }, [searchCity]) // para renderizar la informacion de la API

    return (
        <div className='App'>
            <div className='container-today'>
                <Today
                    iconWeather={iconWeather}
                    city={city}
                    timezone={timeZone}
                    celsius={celsius}
                    weatherName={weatherName}
                    dayNumber={dayNumber}
                    setCelsiusOrFahrenheit={setCelsiusOrFahrenheit}
                    celsiusOrFahrenheit={celsiusOrFahrenheit}
                    searchCity={searchCity}
                />
            </div>
            <div className='container-body'>
                <div className='buttons'>
                    <h1 className='titulo'>ClimaApp</h1>
                    <div className='container-centiheit'>
                        <button
                            className='centigradus'
                            onClick={() => {
                                fahrenheitToCelsius()
                            }}>
                            °C
                        </button>
                        <button
                            className='fahrenheit'
                            onClick={() => {
                                celsiusToFahrenheit()
                            }}>
                            °F
                        </button>
                    </div>
                </div>
                <Search setSearchCity={setSearchCity} searchCity={searchCity} />
                <Weather
                    maxTomorrowWeather={maxTomorrowWeather}
                    minTomorrowWeather={minTomorrowWeather}
                    weatherNameTomorrow={weatherNameTomorrow}
                />
                <h2>Clima de Hoy</h2>
                <TodayStatus humidity={humidity} windSpeed={windSpeed} visibility={visibility} pressure={pressure} />
            </div>
        </div>
    )
}

export default App
