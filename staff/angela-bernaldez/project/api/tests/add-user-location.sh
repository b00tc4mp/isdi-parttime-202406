curl -X POST http://localhost:4321/locations/676d2fc251e575dc812fb568/ \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQyZmMyNTFlNTc1ZGM4MTJmYjU2OCIsImlhdCI6MTczNTIwODkxNH0.BNkoQBtVM5dFwGM-gzTwo0wTbIYy61yDDbPEFH_ienM" \
    -d '{"name":"Brighton", "latitude": "50.49", "longitude": "0.08", "altitude": "64"}' -v


# necesito encontrar el user id para hacer el post
# con el authenticate user lo que tengo es el token
# creo una logica adicional que me devuelva user info y ahi tenga el id de forma que pueda usarlo 