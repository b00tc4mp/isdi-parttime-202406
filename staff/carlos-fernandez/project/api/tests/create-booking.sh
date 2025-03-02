curl -X POST http://localhost:4444/users/booking \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTc4N2UwNzYzNzQ5OTY5ODNkYWM3YyIsImlhdCI6MTczOTk4MjYzOX0.FNCdPHNGjisY6U8bSkPTvPFln2amMgzTomAMM7GokEo" \
    -H "Content-Type: application/json" \
  -d '{"dogs": ["67b9eb28f9f2fdfd598dcab1", "67b471571fd95c0096ad420a"], "startDate": "2025-03-08", "endDate": "2025-03-09"}' -v