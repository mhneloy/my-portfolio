import PropTypes from "prop-types";
import { createContext, useRef } from "react";

export const AuthContext = createContext(null);
const ContextProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const authInfo = {
    aboutRef,
    experienceRef,
    projectRef,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
ContextProvider.propTypes = {
  children: PropTypes.element,
};
