curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWIzOTZlNTQxMDBhNGMwMGFjODU5NSIsImlhdCI6MTczNDExOTMwMn0.h9HUcTFf6bAH2XRMvkSwAlxeWRfjVA3pP2tsNB0sJRo" \
    -d '{"password":"123456789"}' -v