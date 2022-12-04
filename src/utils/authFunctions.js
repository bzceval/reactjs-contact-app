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
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

const auth = getAuth(firebase);


export const createUser = async (email, password, navigate, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password); 
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log("Registered successfully!");
    navigate("/");
    toastSuccessNotify("Registered successfully!");
  } catch (error) { 
    toastErrorNotify(error.message);
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
    toastSuccessNotify("Registered successfully!");
    console.log(userCredential);
  } catch (error) {
    toastErrorNotify(error.message);
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
  toastSuccessNotify("Logged out successfully!");
};


export const signUpProvider = (navigate) => { 
  const provider = new GoogleAuthProvider(); 
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
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


// Reset Function
export const passwordReset = (navigate, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      navigate("/login");
      toastWarnNotify("Please check your mail box!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};