import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  updateProfile,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase";
import axios from "axios";
// import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateInfo = (name, photo, phoneNumber) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      phoneNumber: phoneNumber,
    });
  };

  const verifyEmail = (user) => {
    return sendEmailVerification(user);
  };

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoader(false);

      if (currentUser) {
        axios
          .post("https://summer-camp-server-pied-alpha.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data.data.token)
            localStorage.setItem("access-token", data.data.token);
            setLoader(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    createUser,
    updateInfo,
    verifyEmail,
    signIn,
    resetPass,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
