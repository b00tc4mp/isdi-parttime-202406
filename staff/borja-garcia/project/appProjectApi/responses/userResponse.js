export const userResponse = (...users) => {
  // Verifica si se ha pasado más de un usuario (es decir, un arreglo)
  if (Array.isArray(users[0])) {
    // Si es un arreglo, formatea cada usuario
    return users[0].map((user) => ({
      email: user.email,
      username: user.username,
      userId: user.id
    }));
  }

  // Si no es un arreglo, formatea solo un usuario
  const [user] = users;
  return {
    email: user.email,
    username: user.username,
    userId: user.id
  };
};
