/**
 * 
 * Función (handler)
 * 
 * si detectamos error ejecución del handler -->
 * 
 * si es DuplicatedError res.status(406).send(error.message)
 * si es ExistenceError res.status(404).send(error.message)
 * 
 */

import logic from "../logic/index.js";
import errorHandler from "../middlewares/errorHandler.js";

export default (err, req, res, next) => {
  if (err.name === 'DuplicityError') {
    res.status(406).send(err.message);
  } else {
    next(err);
  }

  if(err.name === 'ExistenceError'){
    res.status(404).send(err.message)
  }
  else{
    next(err)
  }
};