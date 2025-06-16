curl -X POST http://localhost:4321/users/auth \
    -H "Content-Type: application/json" \
    -d '{"email":"kata@mail.com", "password": "123456789"}' -v