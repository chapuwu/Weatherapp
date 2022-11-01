fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ec11c748879d669b48c60f6aab8f67d1') // conectar a la api
    .then((res) => res.json()) // convertir a json
    .then((response) => {
        console.log(response) // imprimirlo en la consola
        console.log(response.city.name)
        console.log(response.city.country)
    })
