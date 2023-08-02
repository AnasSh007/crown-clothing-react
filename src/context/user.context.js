import React, { useState, createContext, useEffect } from "react";
import { auth, createUserDocumentFromAuth } from "../utils/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        // console.log("printing user from authstatechanged in context = ", user);
      }
      setCurrentUser(user);
      return unsub;
    });
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
