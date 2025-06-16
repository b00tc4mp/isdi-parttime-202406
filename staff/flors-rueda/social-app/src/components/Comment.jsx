function Comment({ comment }) {

    return <div className="flex flex-row gap-1 justify-start items-center w-full">
        <div className="avatar">
            <div className="w-6 h-6 rounded-xl">
                <img src={comment.author.avatar} />
            </div>
        </div>
        <p className="text-accent text-sm">{comment.author.username}</p>
        <p className="text-sm">{comment.comment}</p>
        <p className="text-sm pl-5">{`${new Date(comment.createdAt).toLocaleTimeString()}, ${new Date(comment.createdAt).toLocaleDateString()}`}</p>
    </div>
}

export default Comment