import axios from "axios";
import { useNavigate } from "react-router-dom";
import useContextHooks from "./useContextHooks";

const axiosInstance = axios.create({
  baseURL: "https://portfolio-server-ten-plum.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContextHooks();
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/signIn");
      }
      return Promise.reject(err);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
