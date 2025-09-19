import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export const fireLoginApi = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const fireSignupApi = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
};

export const fireLogoutApi = async () => {
    await signOut(auth);
};