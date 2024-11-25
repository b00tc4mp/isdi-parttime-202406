import registerUser from "./registerUser.js";
import storage from "../data/sync-storage.js";

registerUser(
  "              ",
  "15-11-2019",
  "perritobonito@mail.com",
  "palitos"
);

console.log(storage.users);
