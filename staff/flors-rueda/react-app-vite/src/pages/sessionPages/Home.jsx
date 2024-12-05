import { useEffect, useState } from "react"
import logic from "../../logic"
import { Link } from "react-router"

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        try {
            logic.getAllPublicPosts()
                .then((_posts) => {
                    setPosts(_posts);
                })
                .catch((error) => {
                    alert(error);
                })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        <h1>Home</h1>
        <ul>
            {posts.length > 0 && posts.map((post) => {
                return <li key={post.id}>
                    <Link className="text-2xl" to={`/profile/${post.author.username}`}>{post.author.username}</Link>
                    <p>{post.content}</p>
                </li>
            })}
        </ul>
    </div>
}

export default Home