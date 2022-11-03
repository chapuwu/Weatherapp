export const kelvinToCelsius = (kelvin) => kelvin - 273.15

export const kelvinToFahrenheit = (kelvin) => kelvinToCelsius(kelvin) * 1.8 + 32
