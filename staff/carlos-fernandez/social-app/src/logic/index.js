import registerUser from "./registerUser.js";
import userAuth from "./userAuth.js";
import isUserLoggedIn from "./isUserLoggedIn.js";
import logout from "./logout.js";
import getAuthUsername from "./getAuthUsername.js";
import updateUsername from "./updateUsername.js";

const logic = {
  registerUser,
  userAuth,
  isUserLoggedIn,
  logout,
  getAuthUsername,
  updateUsername,
};

export default logic;
