curl -X POST http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -d '{"email":"patatas@mail.com","password":"123456789", "username":"patatas", "date-of-birth":"20/07/1995"}' -v