

// vamos a usar la libreria axios para hacer llamadas a una api externa

// JSON Return Object
// On success a JSON object will be returned.


function fetchWeatherData(longitude, latitude, variables) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation`
    return fetch(url)
    .then(response => {
        const data = response.data
        if (typeof response.data !== 'object') {
            console.error('La respuesta de la API no es un objeto JSON');
            return
        }
        console.log(data)
    })
    .catch((error) => {
        console.log('Error fetching weather data:', error)
    })
}

async function fetchCityCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    return fetch(url)
    .then(response => {
        const data = response.data.results[0]
        const { longitude, latitude } = data
        // add validators
        console.log('Coordinates obtained successfully')
        // console.log('longitude', longitude)
        // console.log('latitude', latitude)
        return { longitude, latitude }
    })
    .catch((error) => {
        console.log('Error fetching city coordinates:', error)
    })
}

// try to call the function
// it is working now!!!!
//fetchWeatherData(40.4165, -3.7026)

fetchCityCoordinates('Brighton')
    .then(coordinates => {
        if (coordinates) {
            console.log('Latitude:', coordinates.latitude)
            console.log('Longitude:', coordinates.longitude)
            fetchWeatherData(coordinates.longitude, coordinates.latitude);
        } else {
            console.log('No se pudieron obtener las coordenadas')
        }
});

//fetchWeatherData(lat, lon)

// IDEAS:
/*
- SHOW COORDINATES OF THE CITY IN THE FRONT
- SHOW ALTITUDE OF THE CITY IN THE FRONT
*/

// formas de hacer llamadas a APIs
// fetch nativa de javascript
// axios que es una libreria -> deberiamos añadir al README q la estamos usando
// xmlhttprequest 



// poner todo dentro de api
// separar en diferentes carpetas dentro de api
