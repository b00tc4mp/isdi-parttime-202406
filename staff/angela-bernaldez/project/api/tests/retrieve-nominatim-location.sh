curl -X POST http://localhost:4321/users/nominatim-locations/ \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDIxMzkzOX0.BDrZJgnb0DhKJKZElS_0ocgQRCVvkBUeF7QljiKo5ok" \
    -d '{"locationString": "Brighton"}' -v