/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import getEmerContByUser from "../logic/getEmergencyContactsByUser";

const EmergencyContactsDropdown = () => {
  const [contacts, setContacts] = useState([]);
  const { userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const fetchContacts = async () => {
      try {
        const response = await getEmerContByUser(userId);        
       
        setContacts(response);
      } catch (err) {
        console.error("ERROR CAPTURADO:", err);
        setContacts([]); // Limpia los contactos si hay error
      }
    };

    fetchContacts();
  }, [userId, navigate]);

  const ContactList = ({ contacts }) => (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto my-4">
      {contacts.map((contact) => (
        <div
          key={contact.contactId}
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            {contact.contactName}
          </div>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Lista de Contactos</h1>
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <div className="text-center text-gray-500">
          No se encontraron contactos de emergencia
        </div>
      )}
    </div>
  );
};

export default EmergencyContactsDropdown;