curl -X PATCH http://localhost:4321/users/username \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzE1Mjg2MTE1NTkiLCJpYXQiOjE3MzE1OTgxNjl9.7G0B_0AUDltB8YA2MDH_UOzfXy1jl8w_ZsCbIwNCSXk" \
    -d '{"username":"alcachofa"}' -v