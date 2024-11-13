curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzE1MDMzMjQ2NzQiLCJpYXQiOjE3MzE1MjYwMjB9.dLjJn9ajRdQkFQu9LD82lDx3Gq_GCS5vzIPhhWuEPbs" \
    -d '{"password":"9876543210"}' -v