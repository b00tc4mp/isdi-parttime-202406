import Swal from "sweetalert2";

export const ConfirmationModal = async ({
  title = "¿Estás seguro?",
  text = "Cerrarás tu sesión.",
  confirmButtonText = "Sí, salir",
  cancelButtonText = "Cancelar",
}) => {
  const modal = Swal.fire({
    title,
    text,
    confirmButtonText,
    cancelButtonText,
    showCancelButton: true,
    width: 600,
    padding: "3em",
    color: "rgb(235, 63, 115, 0.821)",
    background: "rgb(253, 204, 225)",
    backdrop: `
      rgba(243, 236, 217, 0.5)
      url("https://i.gifer.com/XZ9.gif")
      fixed
      top center
      no-repeat
    `,
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

export default ConfirmationModal;
