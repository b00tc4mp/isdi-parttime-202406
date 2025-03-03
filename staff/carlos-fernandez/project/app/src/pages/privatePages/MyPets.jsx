import { useState, useEffect } from "react";
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

  const refreshPets = () => {
    getUserDogs()
      .then((petsData) => {
        setPets(petsData);
        setHasPets(petsData.length > 0);
      })
      .catch((err) => {
        console.error("Error al cargar las mascotas", err);
        throw err;
      });
  };

  useEffect(() => {
    refreshPets(); // Cargar las mascotas al montar el componente
  }, []);

  const onSubmit = (petData) => {
    try {
      if (!registerPet || typeof registerPet !== "function") {
        openModalError(new Error("registerPet is not a function"));
        return;
      }
      return registerPet(petData)
        .then(() => {
          setIsSuccess(true);
          setHasPets(true);
          setIsAddingPet(false);
          refreshPets();
        })
        .catch((err) => {
          console.error("Error en el registro de la mascota:", err);
          openModalError(err);
        });
    } catch (error) {
      throw error;
    }
  };
  const handleCloseSuccess = () => {
    setIsSuccess(false);
  };

  const handleAddPet = () => {
    setIsAddingPet((prev) => {
      return !prev; // Alterna el estado correctamente
    });
  };

  ///////////////////////////////////////////////////// COMPONENTE /////////////////////////////////////////////////////
  return (
    <>
      <div>
        {/* MENSAJE DE REGISTRO EXITOSO */}
        {isSuccess && (
          <RegisteredDogSuccessfully onClose={handleCloseSuccess} />
        )}

        {/* Si hay mascotas, el botón de añadir mascotas SIEMPRE se muestra */}
        {hasPets && (
          <AddPets
            onSubmit={onSubmit}
            onAddPet={handleAddPet}
            isAddingPet={isAddingPet}
          />
        )}

        {/* Si estamos añadiendo una mascota, mostramos el formulario y ocultamos las mascotas */}
        {!hasPets ? (
          isAddingPet ? (
            <RegisterPetForm onSubmit={onSubmit} onCancel={handleAddPet} />
          ) : (
            <NoPetsMessage onAddPet={handleAddPet} />
          )
        ) : (
          <>
            {/* Si no hay mascotas, mostramos el mensaje */}
            {!hasPets ? (
              <NoPetsMessage onAddPet={handleAddPet} />
            ) : (
              <>
                {/* Si NO estamos agregando una mascota, mostramos las PetCards */}
                {!isAddingPet && (
                  <div>
                    <ul className="flex flex-col justify-self-center">
                      {pets.map((pet) => (
                        <li key={pet._id}>
                          <PetCard pet={pet} refreshPets={refreshPets} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default MyPets;
