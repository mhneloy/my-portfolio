import { useContext } from "react";
import { AuthContext } from "../ShareComponent/AuthContext/ContextProvider";

const useContextHooks = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useContextHooks;
