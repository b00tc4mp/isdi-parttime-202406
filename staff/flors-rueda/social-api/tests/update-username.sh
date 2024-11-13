curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer 1731501840876" \
    -d '{"username":"newme"}' -v