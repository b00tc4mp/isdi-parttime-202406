curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzE1OTU0NzJ9.96j7DrA_ODHoToVYiLTZvHqSeedPD-1dMmjNYxfS62M" \
    -d '{"password":"9876543210"}' -v     