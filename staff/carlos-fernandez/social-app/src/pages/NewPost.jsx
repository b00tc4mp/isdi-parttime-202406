import { useNavigate } from "react-router-dom";
import logic from "../logic";
import { useModalError } from "../context/ModalContext";
import { useState } from "react";

function NewPost() {
  const navigate = useNavigate();
  const openModal = useModalError();
  const [images, setImages] = useState([""]);
  const addImageInput = () => {
    setImages([...images, ""]);
  };

  const removeImageInput = () => {
    if (images.length > 1) {
      setImages(images.slice(0, -1));
    }
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const submitPost = (event) => {
    event.preventDefault();

    const visibility = event.target.visibility.value;
    const content = event.target.content.value;

    if (images.length === 1 && images[0] === "") setImages(null);

    try {
      logic
        .createPost(content, images, visibility)
        .then(() => navigate("/home"))
        .catch((error) => openModal(error));
    } catch (error) {
      openModal(error);
    }
  };

  return (
    <div className="min-h-screen px-48 pt-3 pb-5 mt-20">
      <h1 className="5xl">¿En qué estás pensando?</h1>
      <form className="flex flex-col min-w-full gap-2" onSubmit={submitPost}>
        <textarea
          required={true}
          id="content"
          className="textarea textarea-bordered bg-gray-800"
          placeholder="¿a qué saben las nubes?"
        />
        <div className="flex flex-col md:flex-row w-full justify-between">
          <select
            defaultValue={"placeholder"}
            required={true}
            id="visibility"
            className="select select-bordered w-full bg-gray-800 max-w-xs"
          >
            <option value={"placeholder"} disabled>
              Quién puede ver tu post?
            </option>
            <option value="public">Toda la gente</option>
            <option value="followers">Solo mis fans</option>
            <option value="private">Nadie</option>
          </select>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-1 w-64">
              {images.map((image, index) => (
                <input
                  key={index}
                  type="url"
                  value={image}
                  onChange={(event) =>
                    handleImageChange(index, event.target.value)
                  }
                  className="textarea textarea-bordered bg-gray-800"
                  placeholder="Añade el link de una imagen"
                />
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={addImageInput}
                className="btn btn-info"
              >
                Añadir más imágenes
              </button>
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={removeImageInput}
                  className="btn btn-primary"
                >
                  Eliminar imagenes
                </button>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Publicar
        </button>
      </form>
    </div>
  );
}

export default NewPost;
