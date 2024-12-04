import registerUser from "./registerUser.js";
import getOneUser from "./getOneUser.js";
import getUsers from "./getUsers.js";
import deleteUser from "./deleteUser.js";
import updateEmail from "./updateEmail.js";
import updatePassword from "./updatePassword.js";
import updateUsername from "./updateUsername.js";
import authenticateUser from "./authenticateUser.js";
import getAuthUser from "./getAuthUser.js";
import createPost from "./createPost.js";
import getAllPublicPosts from "./getAllPublicPosts.js";
import updateAvatar from "./updateAvatar.js";
import updateBio from "./updateBio.js";
import toggleLike from "./toggleLike.js";
import createComment from "./createComment.js";
import toggleFollow from "./toggleFollow.js";
import getAllFollowingPosts from "./getAllFollowingPosts.js";
import getAllPostsByOneUser from "./getAllPostsByOneUser.js";
import getPost from "./getPost.js";
import deletePost from "./deletePost.js";
import updatePost from "./updatePost.js";

export default {
    registerUser,
    getOneUser,
    getUsers,
    deleteUser,
    updateEmail,
    updatePassword,
    updateUsername,
    updateAvatar,
    updateBio,
    authenticateUser,
    getAuthUser,
    createPost,
    getAllPublicPosts,
    toggleLike,
    createComment,
    toggleFollow,
    getAllFollowingPosts,
    getAllPostsByOneUser,
    getPost,
    deletePost,
    updatePost
}