curl -X POST http://localhost:4321/posts \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2NmMjkyMTgwYjlmNTdkN2U2Y2MyYSIsImlhdCI6MTczMjEzMTA5N30.EXJ9bZISbhAKPEPrfvOQoQ_0OKjv4a9iHJuklCUuZp4" \
    -d '{"content": "primera publicación yeeeei"}' -v