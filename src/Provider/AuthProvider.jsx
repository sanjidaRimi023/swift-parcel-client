import React, { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [, setLoading] = useState(true);

  // create user 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
// login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

 const handleUserProfileUpdate = (displayName, photoURL) => {
  return updateProfile(auth.currentUser, {displayName, photoURL});
};



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    handleUserProfileUpdate
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
