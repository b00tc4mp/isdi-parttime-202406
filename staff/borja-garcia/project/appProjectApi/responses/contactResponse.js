export const contactResponse = (...contacts) => {
  // Verifica si se ha pasado más de un usuario (es decir, un arreglo)
  if (Array.isArray(contacts[0])) {
    // Si es un arreglo, formatea cada usuario
    return contacts[0].map((contact) => ({
      contactName: contact.contactName,
      phone: contact.phone,
      relationship: contact.relationship,
      contactId: contact.id
    }));
  }

  // Si no es un arreglo, formatea solo un usuario
  const [contact] = contacts;
  return {
    contactName: contact.contactName,
    phone: contact.phone,
    relationship: contact.relationship,
    contactId: contact.id
  };
};
