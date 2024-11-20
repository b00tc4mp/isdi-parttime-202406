import { useNavigate } from "react-router-dom";
import logic from "../logic";
import { useModalError } from "../context/ModalContext";

function NewPost() {
    const navigate = useNavigate();
    const openModal = useModalError();

    const submitPost = (event) => {
        event.preventDefault();

        const content = event.target.content.value;

        try {
            logic.createPost(content)
                .then(() => navigate('/home'))
                .catch(error => openModal(error))
        } catch (error) {
            openModal(error)
        }
    }


    return <div className="min-h-screen px-8 pt-3 pb-5">
        <h1>¿En qué estás pensando?</h1>
        <form className="flex flex-col w-full gap-2" onSubmit={submitPost}>
            <textarea id="content" className="textarea textarea-bordered bg-gray-800" placeholder="¿a qué saben las nubes?" />
            <button type="submit" className="btn btn-secondary">Publicar</button>
        </form>
    </div>

}

export default NewPost