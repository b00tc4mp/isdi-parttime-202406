curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDU2ODA5OX0.RxbxPQPjiPtEQ9uGqbI9LQIo_PKW62rnrMhog8t4CaM" \
    -d '{"password":"123456789"}' -v