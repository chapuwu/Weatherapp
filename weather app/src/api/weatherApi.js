fetch('https://pokeapi.co/api/v2/pokemon/ditto') // conectar a la api
    .then((res) => res.json()) // convertir a json
    .then((response) => {
        console.log(response) // imprimirlo en la consola
    })
