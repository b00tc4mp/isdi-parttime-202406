import { useState, useMemo, useEffect } from "react";
import RegisterPetForm from "../../components/forms/RegisterPetForm";
import { useModalError } from "../../context/ModalContext";
import registerPet from "../../logic/registerPet.js";
import getUserDogs from "../../logic/getUserDogs.js";
import { RegisteredDogSuccessfully, NoPetsMessage } from "../../components/";

function MyPets() {
  const [hasPets, setHasPets] = useState(false); // Estado para verificar si hay mascotas
  const [isAddingPet, setIsAddingPet] = useState(false); // Estado para mostrar el formulario
  const [isSuccess, setIsSuccess] = useState(false); // Estado para mostrar el mensaje de éxito
  const [formKey, setFormKey] = useState(0); // Reinicia el formulario
  const openModalError = useModalError();

  useEffect(() => {
    //Llamada para obtener las mascotas del usuario

    const getPets = async () => {
      try {
        const pets = await getUserDogs();
        setHasPets(pets.length > 0); //Actualizamos según si hay mascotas o no
      } catch (error) {
        console.error("Error al cargar las mascotas", err);
        openModalError(err); // Mostramos el modal de error si ocurre algo
      }
    };

    getPets();
  }, [openModalError]);

  const onSubmit = useMemo(
    () => (petData) => {
      try {
        return registerPet(petData)
          .then(() => {
            setIsSuccess(true); // Mostramos el mensaje de éxito
            setIsAddingPet(false); // Hemos registrado mascota, ocultamos el formulario
            setHasPets(true); // Ahora hay mascotas
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

  const handleAddPet = () => {
    setIsAddingPet(true); //Para cambiar el estado a añadir mascota
  };

  return (
    <div>
      {/*
      MENSAJE DE REGISTRO EXITOSO
      */}
      {isSuccess && <RegisteredDogSuccessfully onClose={handleCloseSuccess} />}

      {/*
  NO HAY MASCOTAS Y NO ESTAMOS AÑADIENDO NINGUNA 
      */}
      {!hasPets && !isAddingPet && <NoPetsMessage onAddPet={handleAddPet} />}

      {/*
        NO HAY MASCOTAS Y VAMOS A AÑADIR UNA
        */}
      {!hasPets && isAddingPet && (
        <RegisterPetForm key={formKey} onSubmit={onSubmit} />
      )}

      {/*
      RENDERIZAR LISTA DE MASCOTAS SI EXISTEN
      */}
      <p className="text-center text-2xl mt-8"> TUS MASCOTAS REGISTRADAS:</p>
      <ul className="mt-4">
        <li>Mascota 1</li>
        <li>Mascota 2</li>
      </ul>
    </div>
  );
}

export default MyPets;
