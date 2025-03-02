////////////////// Actualizar el booking id para sincronizarlo con el creado y que funcione //////////////////

BOOKING_ID="67c4a6bb1ed397715dcc1844"


curl -X PATCH "http://localhost:4444/users/update-booking" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTc4N2UwNzYzNzQ5OTY5ODNkYWM3YyIsImlhdCI6MTczOTk4MjYzOX0.FNCdPHNGjisY6U8bSkPTvPFln2amMgzTomAMM7GokEo" \
    -H "Content-Type: application/json" \
    -d '{"bookingId": "'${BOOKING_ID}'", "dogIds": ["67b471571fd95c0096ad420a"]}' \
    -v