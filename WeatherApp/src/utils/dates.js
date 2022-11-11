export function formatDate(date) {
    const weekDay = date.toLocaleString(navigator.language, { weekday: 'long' })
    const month = date.toLocaleString(navigator.language, { month: 'short' }).toUpperCase()

    return `${weekDay}, ${date.getDate()} ${month}`
}

export function getNextDaysInfo(data) {
    const days = []

    data.list.forEach((item) => {
        if (days.at(-1) && getDay(days.at(-1)[0].dt) === getDay(item.dt)) {
            days.at(-1).push(item)
        } else {
            days.push([item])
        }
    })

    return days.map(getDayInfo)
}

const getDay = (timestamp) => timestamp - (timestamp % 86400)

export function getDayInfo(day) {
    return {
        date: new Date(day[4].dt_txt),
        weather: day[4].weather[0].main,
        min: Math.min(...day.map((d) => d.main.temp_min)),
        max: Math.max(...day.map((d) => d.main.temp_max)),
    }
}
