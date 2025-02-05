import { useState, useMemo, useEffect } from "react";
import RegisterPetForm from "../../components/forms/RegisterPetForm";
import { useModalError } from "../../context/ModalContext";
import registerPet from "../../logic/registerPet.js";
import getUserDogs from "../../logic/getUserDogs.js";
import {
  RegisteredDogSuccessfully,
  NoPetsMessage,
  PetCard,
} from "../../components/";
import AddPets from "../../components/buttons/AddPets.jsx";

function MyPets() {
  const [hasPets, setHasPets] = useState(false); // Estado para verificar si hay mascotas
  const [isAddingPet, setIsAddingPet] = useState(false); // Estado para mostrar el formulario
  const [isSuccess, setIsSuccess] = useState(false); // Estado para mostrar el mensaje de éxito

  const [pets, setPets] = useState([]);
  const openModalError = useModalError();

  const getPets = async () => {
    try {
      const petsData = await getUserDogs();
      setPets(petsData);
      setHasPets(petsData.length > 0); //Actualizamos según si hay mascotas o no
    } catch (error) {
      console.error("Error al cargar las mascotas", err);
      openModalError(err); // Mostramos el modal de error si ocurre algo
    }
  };
  useEffect(() => {
    //Llamada para obtener las mascotas del usuario
    getPets();
  }, [openModalError]);

  const onSubmit = (petData) => {
    try {
      if (!registerPet || typeof registerPet !== "function") {
        throw new Error("registerPet is not a function");
      }
      return registerPet(petData)
        .then(() => {
          setIsSuccess(true);
          setHasPets(true);
          getPets();
        })
        .catch((err) => {
          openModalError(err);
        });
    } catch (error) {
      throw error;
    }
  };
  const handleCloseSuccess = () => {
    setIsSuccess(false);
    // setFormKey((prevKey) => prevKey + 1); // Actualizamos la clave para limpiar el formulario
  };

  const handleAddPet = () => {
    setIsAddingPet(true); //Para cambiar el estado a añadir mascota
  };

  return (
    <>
      <div>
        {/*
      MENSAJE DE REGISTRO EXITOSO
      */}
        {isSuccess && (
          <RegisteredDogSuccessfully onClose={handleCloseSuccess} />
        )}

        {/*
  NO HAY MASCOTAS Y NO ESTAMOS AÑADIENDO NINGUNA 
      */}
        {!hasPets && !isAddingPet && <NoPetsMessage onAddPet={handleAddPet} />}

        {/*
        NO HAY MASCOTAS Y VAMOS A AÑADIR UNA
        */}
        {!hasPets && isAddingPet && <RegisterPetForm onSubmit={onSubmit} />}

        {/*
      RENDERIZAR LISTA DE MASCOTAS SI EXISTEN
      */}
        {hasPets && (
          <div>
            <AddPets onSubmit={onSubmit} />

            <ul className="flex justify-self-center">
              {pets.map((pet) => (
                <li key={pet._id}>
                  <PetCard pet={pet} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default MyPets;
