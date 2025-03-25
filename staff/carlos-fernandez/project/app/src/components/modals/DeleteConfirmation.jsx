import Swal from "sweetalert2";

export const DeleteConfirmation = async ({
  title = "¿Estás seguro?",
  text = "Tu mascota se eliminará de la reserva.",
  confirmButtonText = "Sí, eliminar",
  cancelButtonText = "Cancelar",
}) => {
  const modal = Swal.fire({
    title,
    text,
    confirmButtonText,
    cancelButtonText,
    showCancelButton: true,
    width: 450,
    padding: "3em",
    color: "rgb(235, 63, 115, 0.821)",
    background: "rgb(253, 204, 225)",
    backdrop: false,
    customClass: {
      popup: "swal-custom-modal",
    },
  });

  // Add 'modal-open' class to body when modal is shown
  document.body.classList.add("modal-open");

  // Remove 'modal-open' class when modal is closed
  modal.then((result) => {
    document.body.classList.remove("modal-open");
  });

  return modal;
};

export default DeleteConfirmation;
