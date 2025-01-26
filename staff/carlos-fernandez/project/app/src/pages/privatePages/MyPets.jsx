import { useState, useMemo } from "react";
import RegisterPetForm from "../../components/forms/RegisterPetForm";
import { useModalError } from "../../context/ModalContext";
import registerPet from "../../logic/registerPet";
import RegisteredDogSuccessfully from "../../components/cards/RegisteredDogSuccessfully";

function MyPets() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0); // Clave para reiniciar el formulario
  const openModalError = useModalError();

  const onSubmit = useMemo(
    () => (petData) => {
      try {
        return registerPet(petData)
          .then(() => {
            setIsSuccess(true); // Mostramos el mensaje de éxito
          })
          .catch((err) => {
            openModalError(err);
          });
      } catch (error) {
        throw error;
      }
    },
    [openModalError]
  );

  const handleCloseSuccess = () => {
    setIsSuccess(false);
    setFormKey((prevKey) => prevKey + 1); // Actualizamos la clave para limpiar el formulario
  };

  return (
    <div>
      {isSuccess && <RegisteredDogSuccessfully onClose={handleCloseSuccess} />}
      <RegisterPetForm key={formKey} onSubmit={onSubmit} />
    </div>
  );
}

export default MyPets;
