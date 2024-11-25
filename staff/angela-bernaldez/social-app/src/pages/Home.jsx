import useUserData from "../hooks/useUserData"
import { useEffect, useState } from "react"
import logic from "../logic"
import { Errors } from "social-common"

function Home({ noche }) {

  const [username, setUsername] = useState(null);

  useEffect(() => {
    logic.getAuthUsername()
      .then((user) => setUsername(user.username))
      .catch((error) => { throw new Errors.ServerError(`whoops: ${error.message}`) })
  }, [])

  const [user, setUser] = useUserData();
  return (
    <main className="text-3xl">
      {username ? `Hola ${username}` : `¿Y tu quién eres?`}
    </main>
  )
}

export default Home