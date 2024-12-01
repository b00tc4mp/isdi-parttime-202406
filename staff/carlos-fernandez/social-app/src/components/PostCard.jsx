import { useState } from "react";
import Comment from "./Comment";
import logic from "../logic";

function PostCard({ post }) {
  const [isLiked, setLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes.length);
  const [isFollowed, setFollowed] = useState(post.author.isFollowed);

  const onLikeClick = () => {
    try {
      logic
        .toggleLike(post.id)
        .then(() => {
          if (isLiked) setLikes(likes - 1);
          else setLikes(likes + 1);
          setLiked(!isLiked);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  //

  const onFollowClick = () => {
    setFollowed(!isFollowed);
  };

  const onSubmitComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    try {
      logic.createComment(post.id, comment).then(() => {
        //TODO Renderizar de nuevo los commentarios publicados: pista usar useEffect
        event.target.reset();
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article className="card bg-neutral shadow-xl w-full flex-col rounded-md">
      <div className="w-full flex flex-col content-center md:flex-row md:justify-between">
        <div className="card-body items-start flex-col w-full md:w-4/5">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4 justify-center items-center">
              <div className="avatar">
                <div className="w-14 h-14 rounded-xl">
                  <img src={post.author.avatar} />
                </div>
              </div>
              <p className="text-accent">{post.author.username}</p>
            </div>
            <button
              onClick={onFollowClick}
              className={`text-xs rounded-xl btn ${
                isFollowed ? "btn-primary" : "btn-success"
              }`}
            >
              {isFollowed ? "Dejar de seguir" : "Seguir"}
            </button>
          </div>
          <p className="text-2xl pl-16">{post.content}</p>
          <p className="flex gap-1">
            <button
              onClick={onLikeClick}
              className={`text-3xl ${
                isLiked
                  ? "text-pink-600 hover:text-gray-400"
                  : "text-gray-400 hover:text-pink-600"
              }`}
            >
              {" "}
              {isLiked ? "❤" : "♡"}
            </button>
            <span className="font-light text-primary">{likes}</span>
          </p>
          <p className="self-end text-sm">{`${new Date(
            post.createdAt
          ).toLocaleDateString()}`}</p>
        </div>

        {post.images.length > 0 && (
          <figure className="px-10 py-10 md:w-1/4">
            <div className="carousel carousel-vertical items-center w-1/4 md:w-full h-36 rounded-sm">
              {post.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item object-contain h-full"
                  >
                    <img src={image} />
                  </div>
                );
              })}
            </div>
          </figure>
        )}
      </div>

      <div className="collapse -mt-12 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Commentarios</div>
        <div className="collapse-content w-full">
          <Comment />
          {/*TODO: Hay que traerse los comentarios... llegan con el getAllPublicPosts que ya tenemos hecho? Podemos usar populate para rellenar la info del user?*/}
          <form className="flex flex-col gap-2" onSubmit={onSubmitComment}>
            <label htmlFor="comment" className="text-sm pt-7">
              Deja tu comentario:
            </label>
            <textarea
              placeholder="no le faltes al respeto a nadie, imbécil"
              className="textarea textarea-bordered bg-gray-800"
              id="comment"
            />
            <button type="submit" className="self-start btn btn-secondary">
              Enviar commentario
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
