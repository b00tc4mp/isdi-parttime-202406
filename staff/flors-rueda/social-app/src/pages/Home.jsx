import { useEffect, useState } from "react";
import { withPermissions } from "../hocs";
import logic from "../logic";
import { Errors } from "social-common";
import { useModalError } from "../context/ModalContext";

function Home({ noche }) {
  const [username, setUsername] = useState(null);
  const openModalError = useModalError();

  useEffect(() => {
    try {
      logic.getAuthUsername()
        .then((_username) => setUsername(_username))
        .catch((error) => { openModalError(error) })
    } catch (error) {
      openModalError(error)
    }
  }, [])

  return (
    <main className="text-3xl full-view">
      {username ? `Hola ${username}` : `¿Y tu quién eres?`}
    </main>
  );
}

export default withPermissions(Home);
