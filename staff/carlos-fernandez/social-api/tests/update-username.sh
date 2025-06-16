curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2NkZDZiMGE4OTRlZWY0ZjkyYjMxZiIsImlhdCI6MTczMjA0MzI4N30.Sx6ETY-YxiM_EotKEcUcxsUsGfuzdEn-8OXbTvViEkA" \
    -d '{"username":"newme"}' -v