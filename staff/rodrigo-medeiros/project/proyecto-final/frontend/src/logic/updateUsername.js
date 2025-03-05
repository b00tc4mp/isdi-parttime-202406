// updateUsername.js
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

  const { username } = req.body;

  try {
    logic
      .updateUsername(userId, username)
      .then(() => res.status(200).send())
      .catch((error) => next(error));
  } catch (error) {
    next(error);
  }
};
