curl -X POST http://localhost:4444/users/pets \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTc4N2UwNzYzNzQ5OTY5ODNkYWM3YyIsImlhdCI6MTczOTAzMjU2N30.B2b0524dlE-1PhyVe1uP1Or80bEjI_DTq7TWK69xam0" \
    -H "Content-Type: application/json" \
    -d '{"dogData": {"chip": "102546893210740", "dogName": "Pepin", "breed": "Salchicha", "birthDate": "2013-08-21", "sociability": true, "disease": "none", "allergy": "none"}}' -v
