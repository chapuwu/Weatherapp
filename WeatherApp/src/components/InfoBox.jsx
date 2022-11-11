import './InfoBox.css'

export default function InfoBox({ title, info }) {
    return (
        <div className='info-box'>
            <h2 className='info-box-title'>{title}</h2>
            <p className='info-box-text'>{info}</p>
        </div>
    )
}
