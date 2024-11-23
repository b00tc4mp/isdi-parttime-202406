curl -X PATCH http://localhost:4321/users/password \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzE1MDMzMjQ2NzQiLCJpYXQiOjE3MzE1MjYwMjB9.dLjJn9ajRdQkFQu9LD82lDx3Gq_GCS5vzIPhhWuEPbs" \
    -d '{"old-password":"123456789", "new-password": "9876543210"}' -v