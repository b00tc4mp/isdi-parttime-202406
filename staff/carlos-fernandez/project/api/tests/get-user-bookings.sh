TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDAzNTU3NmE2MWNiNmVkODBiMjU1MCIsImlhdCI6MTc0MjIzMjI5MH0.9KhXuCDEzLDht-wnj2Q_kIYSxNBJwJKg4jzShdYrSlE"


# Comando curl para obtener los perros del usuario
curl -X GET "http://localhost:4444/users/me/mybookings" \
  -H "Authorization: Bearer ${TOKEN}" \
  -v