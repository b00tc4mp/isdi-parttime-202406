#!/bin/bash
# Base URL del servicio de usuarios
BASE_URL="http://localhost:4321/users"

# Variable global para almacenar el token
export AUTH_TOKEN=""

# Crear un usuario
create_user() {
  echo "Creando un usuario..."
  curl -X POST "$BASE_URL/" \
    -H "Content-Type: application/json" \
    -d "{\"username\": \"UsuarioPrueba\",
         \"email\": \"prueba@example.com\",
         \"password\": \"Panda.123\",
         \"repeatPassword\": \"Panda.123\"}"
  echo -e "\n--- Usuario creado correctamente ---\n"
}

# Autenticar usuario y obtener token
auth_user() {
  echo "Autenticando usuario..."
  RESPONSE=$(curl -s -X POST "$BASE_URL/auth" \
    -H "Content-Type: application/json" \
    -d "{\"email\": \"prueba@example.com\",
         \"password\": \"Panda.123\"}")

  TOKEN=$(echo "$RESPONSE" | node -e '
  let data = "";
  process.stdin.on("data", chunk => data += chunk);
  process.stdin.on("end", () => {
    try {
      console.log(JSON.parse(data).token || "");
    } catch (e) {
      console.log("");
    }
  });')

  if [ -z "$TOKEN" ]; then
    echo "Error: No se obtuvo el token. Revise las credenciales."
  else
    export AUTH_TOKEN="Bearer $TOKEN"
    echo "Token obtenido correctamente."
  fi
  echo -e "\n--- Usuario autenticado ---\n"
}

# Obtener todos los usuarios
get_all_users() {
  echo "Obteniendo todos los usuarios..."
  curl -X GET "$BASE_URL/" \
    -H "Authorization: $AUTH_TOKEN" \
    -H "Content-Type: application/json"
  echo -e "\n--- Lista de usuarios obtenida ---\n"
}

# Obtener usuario por token
get_user_by_token() {
  if [ -z "$AUTH_TOKEN" ]; then
    echo "Token no disponible. Por favor, autentique el usuario primero."
    return
  fi
  echo "Obteniendo usuario a través del token..."
  curl -X GET "$BASE_URL/byId" \
    -H "Authorization: $AUTH_TOKEN" \
    -H "Content-Type: application/json"
  echo -e "\n--- Usuario obtenido ---\n"
}

# Actualizar un usuario por ID
update_user() {
  read -p "Ingrese el ID del usuario a actualizar: " USER_ID
  echo "Actualizando usuario con ID: $USER_ID..."
  curl -X PUT "$BASE_URL/$USER_ID" \
    -H "Authorization: $AUTH_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"email\": \"actualizado@example.com\",
         \"username\": \"UsuarioActualizado\",
         \"password\": \"Godzilla.456\"}"
  echo -e "\n--- Usuario actualizado correctamente ---\n"
}

# Eliminar un usuario por ID
delete_user() {
  read -p "Ingrese el ID del usuario a eliminar: " USER_ID
  echo "Eliminando usuario con ID: $USER_ID..."
  curl -X DELETE "$BASE_URL/$USER_ID" \
    -H "Authorization: $AUTH_TOKEN" \
    -H "Content-Type: application/json"
  echo -e "\n--- Usuario eliminado correctamente ---\n"
}

# Menú interactivo para pruebas
while true; do
  echo "Seleccione la operación a realizar:"
  echo "1. Crear un usuario"
  echo "2. Autenticar usuario"
  echo "3. Obtener todos los usuarios"
  echo "4. Obtener usuario por token"
  echo "5. Actualizar un usuario"
  echo "6. Eliminar un usuario"
  echo "7. Salir"
  read -p "Ingrese el número de la operación: " OPTION

  case $OPTION in
    1) create_user ;;
    2) auth_user ;;
    3) get_all_users ;;
    4) get_user_by_token ;;
    5) update_user ;;
    6) delete_user ;;
    7) echo "Saliendo..."; exit 0 ;;
    *) echo "Opción no válida." ;;
  esac
done
