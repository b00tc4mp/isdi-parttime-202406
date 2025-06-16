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
