import { useState, useMemo } from "react";
import RegisterPetForm from "../../components/forms/RegisterPetForm";
import { useModalError } from "../../context/ModalContext";
import registerPet from "../../logic/registerPet";
import RegisteredDogSuccessfully from "../../components/cards/RegisteredDogSuccessfully";

function MyPets() {
  const [isSuccess, setIsSuccess] = useState(false);
  const openModalError = useModalError();

  const onSubmit = useMemo(
    () => (petData) => {
      try {
        return registerPet(petData)
          .then(() => {
            //Actualizamos estado de "registrado satisfactoriamente"
            setIsSuccess(true);
            console.log("Mascota registrada exitosamente");
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

  return (
    <div>
      {isSuccess && (
        <RegisteredDogSuccessfully onClose={() => setIsSuccess(false)} />
      )}
      <RegisterPetForm onSubmit={onSubmit} />
    </div>
  );
}

export default MyPets;
