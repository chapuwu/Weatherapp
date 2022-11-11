import rain from '../icons/lightrain.svg'
import cloud from '../icons/lightcloud.svg'
import clear from '../icons/clear.svg'
import thunderstorm from '../icons/thunderstorm.svg'
import snow from '../icons/snow.svg'

const iconsList = {
    Rain: rain,
    Clouds: cloud,
    Clear: clear,
    Thunderstorm: thunderstorm,
    Snow: snow,
}

export default function getWeatherIcon(weather) {
    return iconsList[weather]
}
