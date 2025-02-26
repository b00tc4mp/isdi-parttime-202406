#!/bin/bash

# Base URL del servicio de eventos
BASE_URL="http://localhost:4321/events"

# Variable global para almacenar el token
export AUTH_TOKEN=""

# Función para autenticar usuario y obtener token
auth_user() {
  echo "Creando usuario para el test..."
  curl -s -X POST "http://localhost:4321/users" \
    -H "Content-Type: application/json" \
    -d '{"username": "EventsTest","email": "events@test.com","password": "Panda.123","repeatPassword": "Panda.123"}' > /dev/null
  
  echo "Usuario creado..."
  echo "Autenticando usuario..."
  RESPONSE=$(curl -s -X POST "http://localhost:4321/users/auth" \
    -H "Content-Type: application/json" \
    -d '{"email": "events@test.com","password": "Panda.123"}')

  TOKEN=$(echo "$RESPONSE" | grep -o '"token":"[^"]*"' | cut -d '"' -f 4)

  if [ -z "$TOKEN" ]; then
    echo "Error: No se obtuvo el token. Revise las credenciales."
  else
    export AUTH_TOKEN="Bearer $TOKEN"
    echo "Token obtenido correctamente."
  fi
  echo "\n--- Usuario autenticado ---\n"
}

# Función para crear un evento
create_event() {
  echo "Creando un evento..."
  curl -s -X POST "$BASE_URL/users/" \
    -H "Authorization: $AUTH_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"eventName": "Crisis Agorafobia","startDateTime": "2025-01-21T10:00:00Z","duration": 60,"color": "#FF5733","category": "Ansiedad"}'
  echo "\n--- Evento creado ---\n"
}

# Función para obtener todos los eventos
get_all_events() {
  echo "Obteniendo todos los eventos..."
  curl -s -X GET "$BASE_URL/" \
    -H "Authorization: $AUTH_TOKEN"
  echo "\n--- Lista de eventos obtenida ---\n"
}

# Función para obtener un evento por ID
get_event_by_id() {
  read -p "Ingrese el ID del evento: " EVENT_ID
  echo "Obteniendo evento con ID: $EVENT_ID..."
  curl -s -X GET "$BASE_URL/$EVENT_ID" \
    -H "Authorization: $AUTH_TOKEN"
  echo "\n--- Evento obtenido ---\n"
}

# Función para obtener eventos del usuario autenticado
get_events_by_user() {
  echo "Obteniendo eventos del usuario autenticado..."
  curl -s -X GET "$BASE_URL/users/user" \
    -H "Authorization: $AUTH_TOKEN"
  echo "\n--- Eventos del usuario obtenidos ---\n"
}

# Función para actualizar un evento
update_event() {
  read -p "Ingrese el ID del evento a actualizar: " EVENT_ID
  echo "Actualizando evento con ID: $EVENT_ID..."
  curl -s -X PUT "$BASE_URL/$EVENT_ID" \
    -H "Authorization: $AUTH_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"eventName": "Terapia grupal","startDateTime": "2025-01-22T15:00:00Z","duration": 90,"color": "#33FF57","category": "Otro"}'
  echo "\n--- Evento actualizado ---\n"
}

# Función para eliminar un evento
delete_event() {
  read -p "Ingrese el ID del evento a eliminar: " EVENT_ID
  echo "Eliminando evento con ID: $EVENT_ID..."
  curl -s -X DELETE "$BASE_URL/$EVENT_ID" \
    -H "Authorization: $AUTH_TOKEN"
  echo "\n--- Evento eliminado ---\n"
}

# Menú interactivo para pruebas
while true; do
  echo "----------------------------------------"
  echo "          MENU DE PRUEBAS"
  echo "----------------------------------------"
  echo "1. Autenticar usuario"
  echo "2. Crear un evento"
  echo "3. Obtener todos los eventos"
  echo "4. Obtener un evento por ID"
  echo "5. Obtener eventos del usuario autenticado"
  echo "6. Actualizar un evento"
  echo "7. Eliminar un evento"
  echo "8. Salir"
  echo "----------------------------------------"
  read -p "Seleccione una opción: " OPTION

  case $OPTION in
    1) auth_user ;;
    2) create_event ;;
    3) get_all_events ;;
    4) get_event_by_id ;;
    5) get_events_by_user ;;
    6) update_event ;;
    7) delete_event ;;
    8)
      echo "Saliendo..."
      exit 0
      ;;
    *) echo "Opción no válida. Intente nuevamente." ;;
  esac
  echo "\n"
done
