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
    <main className="min-h-screen flex justify-center items-center gap-16 px-16 shadow-box">
      {/* Primera sección: centrada verticalmente */}
      <section className="flex flex-col gap-10 w-1/3">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Editar Nombre de Usuario</h1>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={onSubmitUsername}
          >
            <label htmlFor="username">Elige tu nuevo nombre:</label>
            <input
              className="w-full input input-bordered input-ghost glass"
              id="username"
              type="text"
              placeholder="Introduce tu nuevo nombre"
            />
            <button type="submit" className="btn btn-secondary mt-2">
              Guardar Nombre
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Editar Avatar</h1>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={onSubmitAvatar}
          >
            <label htmlFor="avatar">Elige tu nuevo avatar:</label>
            <input
              className="w-full input input-bordered input-ghost glass"
              id="avatar"
              type="url"
              placeholder="URL del avatar"
            />
            <button type="submit" className="btn btn-secondary mt-2">
              Guardar Avatar
            </button>
          </form>
        </div>
      </section>

      {/* Segunda sección: a la derecha y centrada */}
      <section className="flex flex-col justify-center w-1/3">
        <h1 className="text-2xl font-semibold text-center">Editar Bio</h1>
        <form className="flex flex-col gap-2" onSubmit={onSubmitBio}>
          <label htmlFor="bio">Elige tu nueva bio:</label>
          <textarea
            placeholder="Cuenta tu vida"
            className="textarea textarea-bordered bg-gray-800"
            id="bio"
          />
          <button type="submit" className="btn btn-secondary mt-2">
            Guardar Bio
          </button>
        </form>
      </section>
    </main>
  );
}

export default withPermissions(ProfileSettings);
