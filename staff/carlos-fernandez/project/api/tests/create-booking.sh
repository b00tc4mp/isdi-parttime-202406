curl -X POST http://localhost:4444/users/booking \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDAzNTU3NmE2MWNiNmVkODBiMjU1MCIsImlhdCI6MTc0MjM4MTgzOH0.zt4ujfSHiedS06Z1I8pv-Yk4kKapd9MSorf-_yu0Hsg" \
    -H "Content-Type: application/json" \
    -d '{"dogs": ["67b471571fd95c0096ad420a", "67c6ef515845db54a80100e1"], "startDate": "2025-03-21", "endDate": "2025-03-22"}' -v