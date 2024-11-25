import useUserData from "../hooks/useUserData"
import { useEffect, useState } from "react"
import logic from "../logic"
import { Errors } from "social-common"
import { useModalError } from "../context/ModalContext"

function Home({ noche }) {

  const openModalError = useModalError()

  const [username, setUsername] = useState(null);

  useEffect(() => {
    try {
      logic.getAuthUsername()
        .then((_username) => setUsername(_username))
        .catch((error) => { openModalError(error) })
    } catch (error) {
      openModalError(error)
    }
  }, [])

  const [user, setUser] = useUserData();
  return (
    <main className="text-3xl full-view">
      {username ? `Hola ${username}` : `¿Y tu quién eres?`}
    </main>
  )
}

export default Home