curl -X POST http://localhost:4321/users/locations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDU2ODA5OX0.RxbxPQPjiPtEQ9uGqbI9LQIo_PKW62rnrMhog8t4CaM" \
    -d '{
      "locationData": {
        "name": "Imaginary location", 
        "latitude": 30.99, 
        "longitude": 2.05, 
        "altitude": 64
      },
      "isCurrentLocation": false
    }' -v
