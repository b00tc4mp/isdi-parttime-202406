curl -X POST http://localhost:4444/users/pets \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDAzNTU3NmE2MWNiNmVkODBiMjU1MCIsImlhdCI6MTc0MTY5ODQwNn0.WhvwLPeraKXoOj5NqzomJzlXQ1IkU4SHpi9MnRr0egA" \
    -H "Content-Type: application/json" \
    -d '{"dogData": { "chip": "102546893210747", "dogName": "Django", "breed": "Border collie", "birthDate": "2013-08-21", "sociability": true, "disease": "none", "allergy": "none"}}' -v
