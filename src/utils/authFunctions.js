import firebase from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(firebase);


export const createUser = async (email, password, navigate, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password); 
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log("Registered successfully!");
    navigate("/");
  } catch (err) {
    console.log(err.message);
  }
};


export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
    console.log(err.message);
    console.log(err);
  }
};


export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else { 
      setCurrentUser(false);
    }
  });
};


export const logOut = () => {
  signOut(auth);
};


export const signUpProvider = (navigate) => { 
  const provider = new GoogleAuthProvider(); 
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      console.log("Logged out successfully!");
    })
    .catch((error) => { 
      console.log(error);
    });
};


export const forgotPassword = (email) => { 
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Please check your mail box!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
