curl -X POST http://localhost:4321/locations/676d2fc251e575dc812fb568/ \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OGQ2ODFlZmM0MGVmYTY0MjFmYTg5ZiIsImlhdCI6MTc0MDE2MTE3N30.MWYQbReOykhdzDTiiTU0GigtzGsPS3STzfWZyWelQ4o" \
    -d '{
          "name": "Asssjsjjjj", 
          "latitude": 30.99, 
          "longitude": 2.05, 
          "altitude": 64, 
          "isCurrentLocation": false
        }' -v

# no me funciona el test