curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzE1OTU0NzJ9.96j7DrA_ODHoToVYiLTZvHqSeedPD-1dMmjNYxfS62M" \
    -d '{"username":"newme"}' -v