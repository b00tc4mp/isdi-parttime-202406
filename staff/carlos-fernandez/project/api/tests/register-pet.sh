curl -X POST http://localhost:4444/users/pets \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTNiNjBlYjY3NWFlMWM0NmFmNDA5OSIsImlhdCI6MTczODc4MjI3Nn0.QvJXLQfmc3SQKJCvC_ZJKDSYt-oFyaQMvg1iFaRTxkU" \
    -H "Content-Type: application/json" \
    -d '{"id": "675fdf3f2b71a4860bc250c7", "chip": "102546893210747", "dogName": "Django", "breed": "Border collie", "birthDate": "2013-08-21", "sociability": true, "disease": "none", "allergy": "none"}' -v
