import registerUser from "./registerUser.js";
import storage from "../db/storage.js";

registerUser("percy", "15-11-2019", "perritobonito@mail.com", "palitos");

console.log(storage.users);
