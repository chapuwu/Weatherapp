import InfoBox from './InfoBox'
import './TodayStatus.css'

export default function TodayStatus({ humidity, windSpeed, visibility, pressure }) {
    return (
        <div className='today-status-container'>
            <InfoBox title={'Estado del viento'} info={`${windSpeed} m/s`} />
            <InfoBox title={'Humedad'} info={`${humidity}%`} />
            <InfoBox title={'Visibilidad'} info={`${visibility} km`} />
            <InfoBox title={'Presion atmosférica'} info={`${pressure} hPa`} />
        </div>
    )
}
