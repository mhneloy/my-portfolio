import PropTypes from "prop-types";
import { createContext, useEffect, useRef, useState } from "react";
import auth from "../../firebase.init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  // login with email & password
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signIn with google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const email = { email: currentUser?.email };
        axios
          .post("https://portfolio-server-ten-plum.vercel.app/jwt", email, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // success toastify
  const successToast = (message) => {
    toast.success(message, { position: "top-right" });
  };
  // error toastify
  const errorToast = (message) => {
    toast.error(message, { position: "top-right" });
  };
  const authInfo = {
    user,
    setUser,
    loading,
    aboutRef,
    experienceRef,
    projectRef,
    singInUser,
    googleSignIn,
    logOut,
    successToast,
    errorToast,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
ContextProvider.propTypes = {
  children: PropTypes.element,
};
