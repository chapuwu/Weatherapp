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

    // TODO: TERMINAR XD
    return days.map()
}

const getDay = (timestamp) => timestamp - (timestamp % 86400)

export function getDayInfo(day) {}
