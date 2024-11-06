import { createContext, useContext, useState } from "react";
// import { useUpdate } from "react-use";

const Context = createContext(null);

function Provider({ children }) {
  // 'user' | 'visitor'
  const [role, setRole] = useState(
    sessionStorage.getItem("token") ? "user" : "visitor"
  );

  const refreshRole = () =>
    setRole(sessionStorage.getItem("token") ? "user" : "visitor");

  return (
    <>
      <Context.Provider value={{ role, refreshRole }}>
        {children}
      </Context.Provider>
    </>
  );
}

export const useRole = () => {

  const { role, refreshRole } = useContext(Context);

  return { role, refreshRole };
};

const RoleContext = {
  Context,
  Provider,
  useRole,
};

export default RoleContext;