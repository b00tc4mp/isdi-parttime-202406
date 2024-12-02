import { useEffect, useState } from "react";
import { withPermissions } from "../hocs";
import logic from "../logic";
import { Errors } from "social-common";
import { useModalError } from "../context/ModalContext";
import PostCard from "../components/PostCard";

function Profile() {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);
  const openModalError = useModalError();
  const [stamp, setStamp] = useState(Date.now());

  useEffect(() => {
    try {
      logic.getAuthUsername()
        .then((_username) => {
          setUsername(_username)
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
      openModalError(error)
    }
  }, [])

  useEffect(() => {
    try {
      logic.getAllPublicPosts()
        .then((_posts) => {
          setPosts(_posts)
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
      openModalError(error)
    }
  }, [stamp])

  return (
    <main className="text-3xl min-h-screen px-8 pt-3 pb-5">
      {username ? `Hola ${username}` : `¿Y tu quién eres?`}
      <section className="flex flex-col gap-5 w-full pt-10">
        {
          posts.length > 0 && posts.map((post) => {    //onNewComment = () =>{ setStamp(Date.now()) }
            return <PostCard key={post.id} post={post} onNewComment={() => setStamp(Date.now())} />
          })
        }
      </section>
    </main>
  );
}

export default withPermissions(Profile);
