/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import getEmerContByUser from "../logic/getEmergencyContactsByUser";
import RegisterEmergencyContact from "./Forms/contactForm";
import deleteEmergencyContactById from "../logic/deleteEmergencyContact";

const EmergencyContactsDropdown = () => {
  const [contacts, setContacts] = useState([]);
  const [openContact, setOpenContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null); // Contacto a eliminar
  const { userId } = useAuth();
  const navigate = useNavigate();

  const fetchContacts = async () => {
    try {
      const response = await getEmerContByUser(userId);
      setContacts(response);
    } catch (err) {
      console.error("No hay contactos", err.message);
      setContacts([]); // Limpia los contactos si hay error
    }
  };

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }
    fetchContacts();
  }, [userId, navigate]);

  const toggleCollapse = (contactId) => {
    setOpenContact(openContact === contactId ? null : contactId);
  };

  const handleDelete = async () => {
    if (contactToDelete) {
      try {
        await deleteEmergencyContactById(contactToDelete.contactId);
        fetchContacts();
      } catch (err) {
        console.error("Error al eliminar contacto", err);
      }
    }
    setShowModal(false); // Cerrar el modal
  };

  const openModal = (contact) => {
    setContactToDelete(contact);
    setShowModal(true);
  };

  const ContactList = ({ contacts }) => (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto my-4">
      {contacts
        .slice() // Crear copia del array para no mutar el original
        .sort((a, b) => a.contactName.localeCompare(b.contactName)) // Orden alfabético
        .map((contact) => (
          <div
            key={contact.contactId}
            tabIndex={0}
            className={`collapse collapse-plus border border-base-300 bg-base-200 ${
              openContact === contact.contactId ? "collapse-open" : ""
            }`}
          >
            <div
              className="collapse-title text-xl font-medium cursor-pointer"
              onClick={() => toggleCollapse(contact.contactId)}
            >
              {contact.contactName}
            </div>
            {openContact === contact.contactId && (
              <div className="collapse-content">
                <div className="flex items-center py-2">
                  <span className="font-semibold w-24">Teléfono:</span>
                  <a href={`tel:${contact.phone}`} className="link link-primary">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center py-2">
                  <span className="font-semibold w-24">Relación:</span>
                  <span className="badge badge-outline badge-lg">
                    {contact.relationship}
                  </span>
                  <button
                    className="ml-4 text-sm text-red-500 hover:text-red-700"
                    onClick={() => openModal(contact)} // Abrir el modal aquí
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );

  return (
    <div className="p-8 w-full flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Lista de Contactos
        </h1>

        <div className="flex justify-center mb-8">
          <RegisterEmergencyContact onContactAdded={fetchContacts} />
        </div>

        {contacts.length > 0 ? (
          <div className="w-full">
            <ContactList contacts={contacts} />
          </div>
        ) : (
          <div className="text-center text-gray-500 w-full">
            No se encontraron contactos de emergencia
          </div>
        )}
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">¿Estás seguro de eliminar este contacto?</h2>
            <div className="flex justify-between">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="btn btn-danger bg-red-400 hover:bg-red-600"
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyContactsDropdown;
