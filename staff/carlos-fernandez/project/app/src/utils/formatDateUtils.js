// Formatear la fecha de nacimiento (si existe)
export const formatDate = (dateString) => {
  if (!dateString) return "Fecha no disponible";
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
