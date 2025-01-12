curl -X PATCH http://localhost:4444/users/update-phone-number \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWZkZjNmMmI3MWE0ODYwYmMyNTBjNyIsImlhdCI6MTczNjE4NTgzN30.hmCCZSrlgVTQIBJVW6Ywo6LjO9fXyHhh9tQ4Tb5BuEs" \
    -d '{"678654659"}' -v