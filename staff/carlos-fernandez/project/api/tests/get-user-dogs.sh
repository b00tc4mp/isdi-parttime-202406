#!/bin/bash

# Variables de entorno
API_URL="http://localhost:4444"
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWZkZjNmMmI3MWE0ODYwYmMyNTBjNyIsImlhdCI6MTczNzE5Njc5NH0.eE_pSPuIKLfKqgwK8hI2XI_oMB_YfA8OOqzehUmrndw"
USER_ID="675fdf3f2b71a4860bc250c7"  # Reemplaza con un ID de usuario válido

# Comando curl para obtener los perros del usuario
curl -X GET "${API_URL}/users/${USER_ID}/dogs" \
  -H "Authorization: Bearer ${TOKEN}" \
  -v