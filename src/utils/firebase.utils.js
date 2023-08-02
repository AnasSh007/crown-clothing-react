import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEzYPvXW8mY4TBczjXrU6Qyd-l483Axu8",
  authDomain: "crown-database-decda.firebaseapp.com",
  projectId: "crown-database-decda",
  storageBucket: "crown-database-decda.appspot.com",
  messagingSenderId: "495821934516",
  appId: "1:495821934516:web:064d23cd27502788282ce1",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userRef = doc(db, "users", userAuth.uid);
  const userData = await getDoc(userRef);
  // console.log("user data in createUserDocumentFromAuth()", userData);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("error creating the user ", error.message);
    }
  }
  return userData;
};

export const createUserWithAuth = async (user) =>
  await createUserWithEmailAndPassword(auth, user.email, user.password);
