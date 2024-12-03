import { useNavigate } from "react-router-dom";
import { withPermissions } from "../hocs";
import logic from "../logic";
import { useModalError } from "../context/ModalContext";

function ProfileSettings() {
  const navigate = useNavigate();
  const openModalError = useModalError();

  const onSubmitUsername = (event) => {
    event.preventDefault();
    const username = event.target.username.value;

    logic
      .updateUsername(username)
      .then(() => navigate("/home"))
      .catch((error) => openModalError(error));
  };

  const onSubmitAvatar = (event) => {
    event.preventDefault();
    const avatar = event.target.avatar.value;

    logic
      .updateAvatar(avatar)
      .then(() => navigate("/home"))
      .catch((error) => openModalError(error));
  };

  const onSubmitBio = (event) => {
    event.preventDefault();
    const bio = event.target.bio.value;
    logic
      .updateBio(bio)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        openModalError(error);
      });
  };

  return (
    <main className="min-h-screen h-fit pt-6 pb-10 flex flex-col gap-5 shadow-circle">
      <section className="px-72">
        <h1 className="text-2xl font-semibold">Editar Bio</h1>
        <form className="flex flex-col gap-2" onSubmit={onSubmitBio}>
          <label htmlFor="bio">Elige tu nueva bio:</label>
          <textarea
            placeholder="cuenta tu vida"
            className="textarea textarea-bordered bg-gray-800"
            id="bio"
          />
          <button type="submit" className="self-start btn btn-secondary">
            Guardar Bio
          </button>
        </form>
      </section>
      <section className="flex justify-around">
        <div>
          <h1 className="text-2xl font-semibold">Editar Nombre de Usuario</h1>
          <form className="flex flex-col gap-2" onSubmit={onSubmitUsername}>
            <label htmlFor="username">Elige tu nuevo nombre:</label>
            <input
              className="w-80 input input-bordered input-ghost glass flex items-center gap-2 mb-4"
              id="username"
              type="text"
              placeholder="nuevoNombre"
            ></input>
            <button type="submit" className="self-start btn btn-secondary">
              Guardar Nombre
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Editar Avatar</h1>
          <form className="flex flex-col gap-2" onSubmit={onSubmitAvatar}>
            <label htmlFor="email">Elige tu nuevo avatar:</label>
            <input
              className="w-80 input input-bordered input-ghost glass flex items-center gap-2 mb-4"
              id="avatar"
              type="url"
              placeholder="url del avatar"
            ></input>
            <button type="submit" className="self-start btn btn-secondary">
              Guardar Avatar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default withPermissions(ProfileSettings);
