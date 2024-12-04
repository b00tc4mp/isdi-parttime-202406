curl -X PUT http://localhost:4321/posts/674f62330a227376ae18e1b1 \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGRmOWE2OTEwZjBjMWU4YTFlYmIyOCIsImlhdCI6MTczMzE2ODQ5Mn0.ZGvPp_Qo06KGnbOaXLKZqc42A6FhPipQ_0v-WybbWwY" \
    -H "Content-Type: application/json" \
    -d '{"content": "publicación editadatada!!", "visibility": "public", "images": ["https://d2zp5xs5cp8zlg.cloudfront.net/image-86754-800.jpg"]}' -v