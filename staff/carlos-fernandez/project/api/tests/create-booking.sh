curl -X POST http://localhost:4444/users/booking \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTc4N2UwNzYzNzQ5OTY5ODNkYWM3YyIsImlhdCI6MTczOTk4MjYzOX0.FNCdPHNGjisY6U8bSkPTvPFln2amMgzTomAMM7GokEo" \
    -H "Content-Type: application/json" \
  -d '{"dogs": ["67b37b306008ccec50d2cd47"], "startDate": "2025-03-01", "endDate": "2025-03-07"}' -v