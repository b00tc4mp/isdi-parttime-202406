curl -X PATCH http://localhost:4321/users/password \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer 1731501840876" \
    -d '{"old-password":"123456789", "new-password": "9876543210"}' -v