import logic from "../logic/index.js";

export default (req, res, next) => {
  const userId = req.id;
  const { petId } = req.params;
  console.info("HANDLER user id: ", userId);
  console.info("HANDLER petId: ", petId);
  try {
    logic
      .deleteDog(petId, userId)
      .then(() =>
        res.status(200).send({ message: "Mascota eliminada correctamente" })
      )
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
