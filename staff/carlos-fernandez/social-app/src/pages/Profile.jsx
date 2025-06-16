import { useEffect, useState } from "react";
import { withPermissions } from "../hocs";
import logic from "../logic";
import { Errors } from "social-common";
import { useModalError } from "../context/ModalContext";
import { useParams } from "react-router-dom";

function Home({ noche }) {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);
  const openModalError = useModalError();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    console.log(id);
    try {
      logic
        .getAuthUsername()
        .then((_username) => {
          setUsername(_username);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      openModalError(error);
    }
  }, []);

  return (
    <main className="text-3xl min-h-screen px-8 pt-3 pb-5">
      {username ? `Hola ${username}` : `¿Y tu quién eres?`}
      <section>
        {posts.length > 0 &&
          posts.map((post, index) => {
            return <article key={index}>{post.content}</article>;
          })}
      </section>
    </main>
  );
}

export default withPermissions(Home);
