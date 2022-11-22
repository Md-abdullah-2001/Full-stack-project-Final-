import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";

export const ContextApi = createContext();
const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const logUserIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  // updateuser
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  // authcurrentuser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);
  const infoAll = { loader, createUser, logUserIn, logOut, user, updateUser };
  return <ContextApi.Provider value={infoAll}>{children}</ContextApi.Provider>;
};

export default AuthContext;
