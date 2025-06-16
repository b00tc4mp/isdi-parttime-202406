curl -X POST http://localhost:4321/comments/post/67477d3fa4f387fed51e8855 \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDc3ZDNmYTRmMzg3ZmVkNTFlODgzZSIsImlhdCI6MTczMjczODQ0Mn0.KpjpI_vS6rDpVc5vnRrVUgFp3A-t7unWowey1Gx3CX8"\
    -d '{"comment":"ejemplo de comment"}' -v