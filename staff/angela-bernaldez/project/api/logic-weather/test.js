import retrieveWeatherData from "./retrieveWeatherData.js"


// Marcar la función como asíncrona
async function getWeatherData() {
    try {
    // Esperar a que retrieveWeatherData resuelva la promesa
    const weatherData = await retrieveWeatherData('678d681efc40efa6421fa89f', { name: 'Brighton', latitude: 50.8214626, longitude: -0.1400561 });

    // Ahora puedes usar los datos
    console.log(weatherData);
    } catch (error) {
    console.error('Error fetching weather data:', error);
    }
}

// Llamar a la función asíncrona
getWeatherData();
  