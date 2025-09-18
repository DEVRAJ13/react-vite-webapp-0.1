// import auth from '../firebase';

// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut
// } from "firebase/auth";

// export const registerUser = async (email, password) => {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     return res.user;
// };

// export const loginUser = async (email, password) => {
//     const res = await signInWithEmailAndPassword(auth, email, password);
//     return res.user;
// };

// export const logoutUser = async () => {
//     await signOut(auth);
// };

// authService.jsx
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // import initialized firebase app

const auth = getAuth(app);

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const registerUser = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
};

export const logoutUser = async () => {
    await signOut(auth);
};