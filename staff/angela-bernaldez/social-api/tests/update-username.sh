curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzEwODk1NTgwOTMiLCJpYXQiOjE3MzI0NzU5MTZ9.JusE3JoneODsd-IPT-pM5HmdtKlWEkCnDdPyEUfi4WM" \
    -d '{"username":"katita"}' -v
