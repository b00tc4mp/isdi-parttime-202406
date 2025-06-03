curl -X PATCH http://localhost:4321/users/weather-data \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDIxMzkzOX0.BDrZJgnb0DhKJKZElS_0ocgQRCVvkBUeF7QljiKo5ok" \
    -d '{
        "locationData": {
          "name": "Imaginary location",
          "latitude": 30.99,
          "longitude": 2.05,
          "altitude": 64,
          "isCurrentLocation": false
        },
        "weatherData": {
          "current": {
            "temperature": 22.5,
            "wind_speed": 5.1
          },
          "current_units": {
            "temperature": "°C",
            "wind_speed": "km/h"
          },
          "daily": {
            "temperature_max": [25, 26, 27],
            "temperature_min": [15, 14, 13]
          },
          "daily_units": {
            "temperature_max": "°C",
            "temperature_min": "°C"
          }
        }
      }' -v