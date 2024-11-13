curl -X PATCH http://localhost:4321/users/email \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer 1731501840876" \
    -d '{"email":"newme@mail.com"}' -v