curl -X POST http://localhost:4321/users/nominatim-locations/ \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWJiZmY2Mjk4NThkNDVjYmI3MTM4OCIsImlhdCI6MTczODI2MDUxM30.fJFw6iT77ZzwxZUCLwcTvYo-IjNHIEjbC8TzSoJdix8" \
    -d '{"locationString": "Brighton"}' -v