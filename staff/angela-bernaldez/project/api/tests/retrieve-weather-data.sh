curl -X POST http://localhost:4321/users/weather-data/ \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDIxMzkzOX0.BDrZJgnb0DhKJKZElS_0ocgQRCVvkBUeF7QljiKo5ok" \
    -d '{
    "locationData": {
        "name": "Imaginary location", 
        "latitude": 30.99, 
        "longitude": 2.05
    }}' -v

