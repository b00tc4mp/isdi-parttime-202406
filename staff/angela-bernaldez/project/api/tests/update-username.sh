curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjY5NWM2YTg4MDBmYjk2NmQwMGNjZSIsImlhdCI6MTc0NDIxMzkzOX0.BDrZJgnb0DhKJKZElS_0ocgQRCVvkBUeF7QljiKo5ok" \
    -d '{"new-username":"carrr"}' -v