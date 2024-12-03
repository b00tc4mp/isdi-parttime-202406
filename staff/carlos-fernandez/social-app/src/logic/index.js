import createComment from "./createComment.js";
import createPost from "./createPost.js";
import deleteUser from "./deleteUser.js";
import getAllPublicPosts from "./getAllPublicPosts.js";
import getAllUsers from "./getAllUsers.js";
import getAuthUsername from "./getAuthUsername.js";
import isUserLoggedIn from "./isUserLoggedIn.js";
import logout from "./logout.js";
import registerUser from "./registerUser.js";
import toggleFollow from "./toggleFollow.js";
import toggleLike from "./toggleLike.js";
import updateAvatar from "./updateAvatar.js";
import updateBio from "./updateBio.js";
import updateEmail from "./updateEmail.js";
import updatePassword from "./updatePassword.js";
import updateUsername from "./updateUsername.js";
import userAuth from "./userAuth.js";

const logic = {
  createComment,
  createPost,
  deleteUser,
  getAllPublicPosts,
  getAllUsers,
  getAuthUsername,
  isUserLoggedIn,
  logout,
  registerUser,
  toggleFollow,
  toggleLike,
  updateAvatar,
  updateBio,
  updateEmail,
  updatePassword,
  updateUsername,
  userAuth,
};

export default logic;
