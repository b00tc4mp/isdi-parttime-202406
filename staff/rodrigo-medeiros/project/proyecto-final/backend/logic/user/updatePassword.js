// updatePassword.js
import logic from "../logic/index.js";

export default (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { "old-password": oldPassword, "new-password": newPassword } = req.body;

  try {
    logic
      .updatePassword(userId, newPassword, oldPassword)
      .then(() => res.status(200).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
