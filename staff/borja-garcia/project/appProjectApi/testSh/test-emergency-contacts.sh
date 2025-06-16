#!/bin/bash

# Base URL del servicio
BASE_URL="http://localhost:4321/emergency-contacts"

# Crear un contacto de emergencia para un usuario
create_contact() {
  USER_ID=$1
  echo "Creando un contacto de emergencia para el usuario con ID: $USER_ID..."
  curl -X POST "$BASE_URL/users/$USER_ID" \
    -H "Content-Type: application/json" \
    -d '{
      "contactName": "John Doe",
      "phone": "+34678901234",
      "relationship": "Amigo"
    }'
  echo -e "\n"
}

# Obtener todos los contactos
get_contacts() {
  echo "Obteniendo todos los contactos de emergencia..."
  curl -X GET "$BASE_URL" -H "Content-Type: application/json"
  echo -e "\n"
}

# Obtener un contacto por ID
get_contact_by_id() {
  CONTACT_ID=$1
  echo "Obteniendo contacto con ID: $CONTACT_ID..."
  curl -X GET "$BASE_URL/$CONTACT_ID" -H "Content-Type: application/json"
  echo -e "\n"
}

# Obtener contactos de emergencia por ID de usuario
get_contacts_by_user() {
  USER_ID=$1
  echo "Obteniendo contactos de emergencia para el usuario con ID: $USER_ID..."
  curl -X GET "$BASE_URL/users/$USER_ID" -H "Content-Type: application/json"
  echo -e "\n"
}

# Actualizar un contacto por ID
update_contact_by_id() {
  CONTACT_ID=$1
  echo "Actualizando contacto con ID: $CONTACT_ID..."
  curl -X PUT "$BASE_URL/$CONTACT_ID" \
    -H "Content-Type: application/json" \
    -d '{
      "contactName": "Jane Doe",
      "phone": "+34678904321",
      "relationship": "Familiar"
    }'
  echo -e "\n"
}

# Eliminar un contacto por ID
delete_contact_by_id() {
  CONTACT_ID=$1
  echo "Eliminando contacto con ID: $CONTACT_ID..."
  curl -X DELETE "$BASE_URL/$CONTACT_ID" -H "Content-Type: application/json"
  echo -e "\n"
}

# Menú interactivo para pruebas
echo "Seleccione la operación a realizar:"
echo "1. Crear un contacto de emergencia"
echo "2. Obtener todos los contactos de emergencia"
echo "3. Obtener contacto por ID"
echo "4. Obtener contactos por ID de usuario"
echo "5. Actualizar un contacto por ID"
echo "6. Eliminar un contacto por ID"
read -p "Ingrese el número de la operación: " OPTION

case $OPTION in
1)
  read -p "Ingrese el ID del usuario: " USER_ID
  create_contact $USER_ID
  ;;
2) get_contacts ;;
3)
  read -p "Ingrese el ID del contacto: " CONTACT_ID
  get_contact_by_id $CONTACT_ID
  ;;
4)
  read -p "Ingrese el ID del usuario: " USER_ID
  get_contacts_by_user $USER_ID
  ;;
5)
  read -p "Ingrese el ID del contacto: " CONTACT_ID
  update_contact_by_id $CONTACT_ID
  ;;
6)
  read -p "Ingrese el ID del contacto: " CONTACT_ID
  delete_contact_by_id $CONTACT_ID
  ;;
*)
  echo "Opción no válida."
  ;;
esac
