import { fetchWeatherApi } from 'openmeteo'

// URL for the OpenMeteo weather API
const url = "https://api.open-meteo.com/v1/forecast"

// Function to fetch weather data from the API (assuming a `fetchWeatherApi` implementation)

async function getWeatherData(url, params) {
  const responses = await fetchWeatherApi(url, params)

  // Function to create time ranges (assuming Array.from is available)
  function range(start, stop, step) {
    return Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
  }

  // Assuming only the first location needs processing (adjust for multiple locations)
  const response = responses[0]

  // Extract timezone and location information
  const utcOffsetSeconds = response.utcOffsetSeconds()
  const timezone = response.timezone()
  const timezoneAbbreviation = response.timezoneAbbreviation()
  const latitude = response.latitude()
  const longitude = response.longitude()

  console.log('latitude', latitude)
  console.log('longitude', longitude)
  

  // Extract current weather data (assuming response structure and `current` method are valid)
  const current = response.current()
  const hourly = response.hourly()

  console.log(hourly)

  // Ensure compatibility with JavaScript variable naming and indexing
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + (utcOffsetSeconds)) * 1000),
      temperature2m: current.variables[0].value, // Access variables directly by index
      precipitation: current.variables[1].value,  // Access variables directly by index
    },
  };

  return weatherData
}


// Example usage:
(async () => {
  const params = {
    "latitude": 40.4165,
    "longitude": -3.7026,
    "current": ["temperature_2m", "precipitation"],
    "forecast_days": 14
  };
  const weatherData = await getWeatherData(url, params)
  console.log(weatherData);
})()

