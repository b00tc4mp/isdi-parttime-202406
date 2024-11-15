import { useEffect, useState } from "react";
import { withPermissions } from "../hocs";
import logic from "../logic";
import { Errors } from "social-common";

function Home({ noche }) {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    logic.getAuthUsername()
      .then((user) => setUsername(user.username))
      .catch((error) => { throw new Errors.ServerError(`whoops: ${error.message}`) })
  }, [])

  return (
    <main className="text-3xl">
      {username ? `Hola ${username}` : `¿Y tu quién eres?`}
    </main>
  );
}

export default withPermissions(Home);
