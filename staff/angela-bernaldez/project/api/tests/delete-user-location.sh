curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDIxMzUxMH0.L-wuCbuz1GsXVApaAzFUQnuZR_Pgi_6If9WZwWcRgO0" \
    -d '{"email": "carmen@gmail.com", "password": "12345678"}' -v