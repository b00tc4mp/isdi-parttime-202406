PET_ID="67a3b7c0764aeef3f2d1ab6c"
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTNiNjBlYjY3NWFlMWM0NmFmNDA5OSIsImlhdCI6MTczODc4MjI3Nn0.QvJXLQfmc3SQKJCvC_ZJKDSYt-oFyaQMvg1iFaRTxkU"


curl -X DELETE http://localhost:4444/users/me/pets/delete-dog/${PET_ID} \
    -H "Authorization: Bearer ${TOKEN}" \
    -v

