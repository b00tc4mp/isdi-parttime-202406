curl -X PATCH http://localhost:4321/users/password \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzEwODk1NTgwOTMiLCJpYXQiOjE3MzI0NzU5MTZ9.JusE3JoneODsd-IPT-pM5HmdtKlWEkCnDdPyEUfi4WM" \
    -d '{"old-password":"123456789", "new-password": "00000000"}' -v