curl -X PATCH http://localhost:4321/users/password \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer 1732452874383" \
    -d '{"old-password":"123456789", "new-password": "00000000"}' -v