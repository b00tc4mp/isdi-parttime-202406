curl -X POST http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -d '{"email":"gatito@mail.com","password":"123456789", "username":"gatito", "date-of-birth":"10/10/1998"}' -v

