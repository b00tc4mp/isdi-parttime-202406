curl -X DELETE http://localhost:4321/users \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MzE1Mjg2MTE1NTkiLCJpYXQiOjE3MzE1OTgxNjl9.7G0B_0AUDltB8YA2MDH_UOzfXy1jl8w_ZsCbIwNCSXk" \
    -d '{"password":"123456789"}' -v     