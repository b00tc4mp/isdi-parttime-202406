function Comment({ comment }) {
  return (
    <div className="flex flex-row gap-1 justify-start items-center w-full">
      <div className="avatar">
        <div className="w-6 h-6 rounded-xl">
          <img src="https://printler.com/media/photo/174893-2.jpg" />
        </div>
      </div>
      <p className="text-accent text-sm">{`post.author.username`}</p>
      <p className="text-sm">Aquí iran los comentarios</p>
      <p className="text-sm pl-5">{`${new Date().toLocaleTimeString()}, ${new Date().toLocaleDateString()}`}</p>
    </div>
  );
}

export default Comment;
