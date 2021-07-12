console.log("MAIN.JS CONNECTED");

// Declaring variables from DOM
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const registerPage = document.querySelector("#registerPage");
const registerBtn = document.querySelector("#registerButton");
const registerForm = document.querySelector("#registerForm");

// Login/Logout page variables
const loginButton = document.querySelector("#btn_login");
const loginEmail = document.querySelector("#email1");
const loginPassword = document.querySelector("#password1");
const logoutButton = document.querySelector("#btn_logout");

// Adding gift idea variables
const giftTitle = document.querySelector("#gift_title");
const giftDescription = document.querySelector("#gift_description");

// Adding idea to own wish list or to friend's
const addToWish = document.querySelector("#addtowish");
const addToFriend = document.querySelector("#addtofriend");
const addWishMsg = document.querySelector("#add-wish-msg");
const friendsList = document.querySelector("#friendsList");
const addToDB = document.querySelector("#addToDB");
const logintoadd = document.querySelector("#login-to-add");
const ideaAddedMsg = document.querySelector("#idea-added-msg");

// Adding friends to the list
// Fetching elements from the DOM
const addFriend = document.querySelector("#addFriend");
const friendName = document.querySelector("#friendName");
const friendEvent = document.querySelector("#friendEvent");
const friendDate = document.querySelector("#friendDate");
const addFriendBtn = document.querySelector("#addFriendBtn");
const fetchFriendsBtn = document.querySelector("#fetchFriendsBtn");
const friendEventSelect = document.querySelector("#friendEventSelect");
const createEvent = document.querySelector("#createEvent");
const friendAddBtn = document.querySelector("#friendAddBtn");
const FriendsListfromDB = document.querySelector("#friendsListFromDB");

// Add special event variables
const eventName = document.querySelector("#eventname");
const eventDate = document.querySelector("#eventdate");
const addEventBtn = document.querySelector("#addEventBtn");

const errorLogin = document.querySelector("error-login");

class userInfo {
  constructor(username, email) {
    (this.username = username), (this.email = email);
    // this.id = firebase.auth().currentUser.uid
  }
  literalObject() {
    return { name: this.username, email: this.email }; //makes recognizable for DB
  }
  signUp(email, password) {
    // Create a new account by passing the new user's email address and password to createUserWithEmailAndPassword:

    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
  }

  // DON'T KNOW HOW TO CALL IT - CREATED NEWUSER WITHIN THE EVENT FOR REGISTER SUBMIT, HOW DO I ACCESS IT AFTER?
  signIn(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  // Attach the observer using the onAuthStateChanged method. When a user successfully signs in, you can get information about the user in the observer. NOT WORKING RIGHT NOW - not calling it anywhere...
  state() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
}
