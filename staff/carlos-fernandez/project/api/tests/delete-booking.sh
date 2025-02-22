TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTNiNjBlYjY3NWFlMWM0NmFmNDA5OSIsImlhdCI6MTczODc4MjI3Nn0.QvJXLQfmc3SQKJCvC_ZJKDSYt-oFyaQMvg1iFaRTxkU"
BOOKING_ID="67b99bbc520921faa352652c"
DOG_ID="67b37b306008ccec50d2cd47"

curl -X DELETE "http://localhost:4444/users/delete-booking" \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
        "bookingId": "'"${BOOKING_ID}"'",
        "dogs": ["'"${DOG_ID}"'"]
    }' \
    -v
