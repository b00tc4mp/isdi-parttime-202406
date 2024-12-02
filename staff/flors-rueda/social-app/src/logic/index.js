import registerUser from "./registerUser.js";
import userAuth from "./userAuth.js";
import isUserLoggedIn from "./isUserLoggedIn.js";
import logout from "./logout.js";
import getAuthUsername from "./getAuthUsername.js";
import updateUsername from "./updateUsername.js";
import updateEmail from "./updateEmail.js";
import updatePassword from "./updatePassword.js";
import deleteUser from "./deleteUser.js"
import createPost from "./createPost.js";
import getAllPublicPosts from "./getAllPublicPosts.js";
import getAllUsers from "./getAllUsers.js";
import updateAvatar from "./updateAvatar.js";
import updateBio from "./updateBio.js";
import toggleLike from "./toggleLike.js";
import createComment from "./createComment.js";
import toggleFollow from "./toggleFollow.js";

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
  getAllPublicPosts,
  getAllUsers,
  updateAvatar,
  updateBio,
  toggleLike,
  createComment,
  toggleFollow
};

export default logic;
