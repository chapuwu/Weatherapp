import './App.css'
import Weather from './Components/Weather'
import Search from './Components/Search'
import TodayStatus from './Components/TodayStatus'
import Today from './Components/Today'

function App() {
    return (
        <div className='App'>
            <div className='container-today'>
                <Today />
            </div>
            <div className='container-body'>
                <div className='buttons'>
                    <h1 className='titulo'>ClimaApp</h1>
                    <div className='container-centiheit'>
                        <button className='centigradus'>°C</button>
                        <button className='fahrenheit'>°F</button>
                    </div>
                </div>
                <Search />
                <Weather />
                <h2>Clima de Hoy</h2>
                <TodayStatus />
            </div>
        </div>
    )
}

export default App
