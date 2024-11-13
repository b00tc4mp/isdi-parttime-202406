import storage from "../db/sync-storage.js";
import updateUsername from "./updateUsername.js";

updateUsername(1731089558093, "jackson");

console.log(storage.users);
