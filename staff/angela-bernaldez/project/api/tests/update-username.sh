curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGFmOTk2MDhhYTRhZDgxNGM3NzdlNyIsImlhdCI6MTc0MjQwNDAwNH0.NTVJjUDRNkEeLextvuh_-90vDN6h46UIRCFsO5Sf7Ao" \
    -d '{"new-username":"angelaaaaaa"}' -v