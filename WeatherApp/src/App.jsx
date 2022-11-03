import React, { useEffect, useState } from 'react'
import './App.css'
import Weather from './Components/Weather'
import Search from './Components/Search'
import TodayStatus from './Components/TodayStatus'
import Today from './Components/Today'
import { kelvinToCelsius, kelvinToFahrenheit } from './utils/tempConvert'
import { getNextDaysInfo } from './utils/dates'

function App() {
    const [city, setCity] = useState('')

    const [temperature, setTemperature] = useState(0)
    const [scale, setScale] = useState('celsius')

    const [iconWeather, setIconWeather] = useState('')
    const [timeZone, setTimeZone] = useState(0)
    const [weatherName, setWeatherName] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windSpeed, setWindSpeed] = useState(0)
    const [visibility, setVisibility] = useState(0)
    const [pressure, setPressure] = useState(0)
    const [maxTomorrowWeather, setMaxTomorrowWeather] = useState(0)
    const [minTomorrowWeather, setMinTomorrowWeather] = useState(0)
    const [searchCity, setSearchCity] = useState('New York')
    const [weatherNameTomorrow, setWeatherNameTomorrow] = useState('')
    const [dayNumberTomorrow, setdayNumberTomorrow] = useState(0)
    const [weekNumberTomorrow, setWeekNumberTomorrow] = useState(0)
    const [secondWeather, setSecondWeather] = useState('')
    const [secondDateNumber, setSecondDateNumber] = useState('')
    const [secondWeekName, setSecondWeekName] = useState('')
    const [secondMinCelsius, setSecondMinCelsius] = useState(0)
    const [secondMaxCelsius, setSecondMaxCelsius] = useState(0)
    const [thirdDayName, setThirdDayName] = useState('')
    const [thirdDayNumber, setThirdDayNumber] = useState('')
    const [thirdWeatherName, setThirdWeatherName] = useState('')
    const [thirdMinCelsius, setThirdMinCelsius] = useState(0)
    const [thirdMaxCelsius, setThirdMaxCelsius] = useState(0)

    const initialURL = `http://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=ec11c748879d669b48c60f6aab8f67d1&` // URL API

    function dataAPI(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                getNextDaysInfo(data)

                setCity(data.city.name)
                setIconWeather(data.list[0].weather[0].main)
                setTimeZone(data.city.timezone)
                setTemperature(data.list[0].main.temp)
                setWeatherName(data.list[0].weather[0].main)
                setHumidity(data.list[0].main.humidity)
                setWindSpeed(data.list[0].wind.speed)
                setVisibility(data.list[0].visibility)
                setPressure(data.list[0].main.pressure)
                setMaxTomorrowWeather(parseInt(data.list[1].main.temp_max))
                setMinTomorrowWeather(parseInt(data.list[1].main.temp_min))
                setWeatherNameTomorrow(data.list[8].weather[0].main)
                setdayNumberTomorrow(new Date(data.list[0].dt_txt).getDate())
                setWeekNumberTomorrow(new Date(data.list[0].dt_txt).getDay())
                setSecondWeather(data.list[9].weather[0].main)
                setSecondDateNumber(new Date(data.list[9].dt_txt).getDate())
                setSecondWeekName(new Date(data.list[9].dt_txt).getDay())
                setSecondMinCelsius(parseInt(data.list[9].main.temp_min))
                setSecondMaxCelsius(parseInt(data.list[9].main.temp_max))
                setThirdDayName(new Date(data.list[17].dt_txt).getDay())
                setThirdDayNumber(new Date(data.list[17].dt_txt).getDate())
                setThirdWeatherName(data.list[17].weather[0].main)
                setThirdMinCelsius(parseInt(data.list[17].main.temp_min))
                setThirdMaxCelsius(parseInt(data.list[17].main.temp_max))
            })
    } // esta funcion agarra la URL API, lo convierte a json y lo imprime en consola

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
                    temperature={temperature}
                    weatherName={weatherName}
                    scale={scale}
                    searchCity={searchCity}
                />
            </div>
            <div className='container-body'>
                <div className='buttons'>
                    <h1 className='titulo'>ClimaApp</h1>
                    <div className='container-centiheit'>
                        <button className='centigradus' onClick={() => setScale('celsius')}>
                            °C
                        </button>
                        <button className='fahrenheit' onClick={() => setScale('fahrenheit')}>
                            °F
                        </button>
                    </div>
                </div>
                <Search setSearchCity={setSearchCity} searchCity={searchCity} />
                <Weather
                    maxTomorrowWeather={maxTomorrowWeather}
                    minTomorrowWeather={minTomorrowWeather}
                    weatherNameTomorrow={weatherNameTomorrow}
                    dayNumberTomorrow={dayNumberTomorrow}
                    weekNumberTomorrow={weekNumberTomorrow}
                    secondDateNumber={secondDateNumber}
                    secondWeather={secondWeather}
                    secondMaxCelsius={secondMaxCelsius}
                    secondWeekName={secondWeekName}
                    secondMinCelsius={secondMinCelsius}
                    thirdDayName={thirdDayName}
                    thirdDayNumber={thirdDayNumber}
                    thirdWeatherName={thirdWeatherName}
                    thirdMinCelsius={thirdMinCelsius}
                    thirdMaxCelsius={thirdMaxCelsius}
                />
                <h2>Clima de Hoy</h2>
                <TodayStatus humidity={humidity} windSpeed={windSpeed} visibility={visibility} pressure={pressure} />
            </div>
        </div>
    )
}

export default App
