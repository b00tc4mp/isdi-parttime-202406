import registerUser from "./registerUser.js";
import userAuth from "./userAuth.js";
import isUserLoggedIn from "./isUserLoggedIn.js";
import logout from "./logout.js";
import getAuthUsername from "./getAuthUsername.js";
import updateUsername from "./updateUsername.js";
import updateEmail from "./updateEmail.js";
import updatePassword from "./updatePassword.js";
import deleteUser from "./deleteUser.js";
import createPost from "./createPost.js";
import getAllPosts from "./getAllPosts.js";

const logic = {
  registerUser,
  userAuth,
  isUserLoggedIn,
  logout,
  getAuthUsername,
  updateUsername,
  updateEmail,
  updatePassword,
  deleteUser,
  createPost,
  getAllPosts,
};

export default logic;
