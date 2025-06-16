function Alert({ message, onAccept }) {
    return <div className="fixed w-full top-0  flex items-center justify-center alert-background">
        <div className="px-4 py-2 shadow flex justify-around w-full flex-row">
            <h2 className="font-bold pb-2 opacity-100">{message}</h2>

        </div>
    </div>
}

export default Alert