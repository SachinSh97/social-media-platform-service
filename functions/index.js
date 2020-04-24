const functions = require("firebase-functions");

const app = require("express")();
const {
  getAllScreams,
  postOneScream,
  getScream,
  commentOnScream,
  likeScream,
  unlikeScream,
} = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");
const FBAuth = require("./util/FBAuth");

//Screams route
app.get("/screams", getAllScreams);
//Post one scream
app.post("/scream", FBAuth, postOneScream);
//get screams
app.get("/scream/:screamId", getScream);
//todo delete scream
//todo like a scream
app.get("/scream/:screamId/like", FBAuth, likeScream);
//todo unlike a scream
app.get("/scream/:screamId/unlike", FBAuth, unlikeScream);
//todo comment on scream
app.post("/screams/:screamId/comment", FBAuth, commentOnScream);
//signup route
app.post("/signup", signup);
//signin route
app.post("/login", login);
//upload image
app.post("/user/image", FBAuth, uploadImage);
//addUserDetail route
app.post("/user", FBAuth, addUserDetails);
//getuser details
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
