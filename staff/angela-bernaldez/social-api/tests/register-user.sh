curl -X POST http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -d '{"email":"perrito@mail.com","password":"123456789", "username":"perrito", "date-of-birth":"10/10/1998"}' -v

