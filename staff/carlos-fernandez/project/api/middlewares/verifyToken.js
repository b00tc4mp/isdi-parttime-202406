import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.authorization;
  //console.log(token);
  const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
  //console.log(id);
  req.id = id;

  next();
};
