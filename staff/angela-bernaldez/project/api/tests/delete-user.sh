curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQyNjRkMDlkNWZkODQ5M2Y5OTY2MyIsImlhdCI6MTczNTIwNjUwMH0.XqEMqmcLJFqdfia8pswk66iNAzq2noYxQvBtSLiX0aQ" \
    -d '{"password":"123456789"}' -v