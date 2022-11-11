import './ScalePicker.css'

export default function ScalePicker({ scale, setScale }) {
    return (
        <div className='scale-picker-container'>
            <button
                className={`scale-picker-button ${scale === 'celsius' ? 'picker-selected' : ''}`}
                onClick={() => setScale('celsius')}>
                °C
            </button>
            <button
                className={`scale-picker-button ${scale === 'fahrenheit' ? 'picker-selected' : ''}`}
                onClick={() => setScale('fahrenheit')}>
                °F
            </button>
        </div>
    )
}
