curl -X POST http://localhost:4321/users/auth \
    -H "Content-Type: application/json" \
    -d '{"email": "carmen@gmail.com", "password": "12345678"}' -v