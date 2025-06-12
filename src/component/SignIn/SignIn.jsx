import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaLock, FaGithub } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../ShareComponent/AuthContext/ContextProvider";

const SignIn = () => {
  const [eye, setEye] = useState(false);
  const { singInUser, successToast, errorToast } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    singInUser(email, password)
      .then((result) => {
        console.log(result);
        successToast("Successfully Login");
      })
      .catch(() => errorToast("Email or Passwrod is wrong"));
    reset();
  };

  const handleEye = () => {
    setEye(!eye);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-84px)] bg-hero-animate">
        <div className="w-full max-w-md p-8 spacey-4 shadow-lg bg-transparent border-2 border-solid border-brand rounded-xl">
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10 focus:outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-none pl-10"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <div
                  className={`${
                    eye === true ? "absolute" : "hidden"
                  } right-3 text-xl top-1/2 transform -translate-y-1/2 text-gray-400 hover:cursor-pointer`}
                  onClick={handleEye}
                >
                  <FaEye />
                </div>
                <div
                  className={`${
                    eye === false ? "absolute" : "hidden"
                  } right-3 top-1/2 text-xl transform -translate-y-1/2 text-gray-400 hover:cursor-pointer`}
                  onClick={handleEye}
                >
                  <PiEyeClosedFill />
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn bg-[#7cf03d] text-[#1f242d] text-[16px] font-semibold hover:shadow-[0_0_10px_#7cf03d] hover:bg-transparent hover:text-[#7cf03d] w-full"
              >
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="btn text-[#7cf03d] border-[#7cf03d] text-[16px] font-semibold hover:shadow-[0_0_10px_#7cf03d] bg-transparent hover:bg-transparent hover:scale-105 w-full flex items-center gap-3 justify-center"
              >
                <FcGoogle className="text-xl" />
                Continue with Google
              </button>

              <button
                type="button"
                className="btn text-[#7cf03d] border-[#7cf03d] text-[16px] font-semibold hover:shadow-[0_0_10px_#7cf03d] bg-transparent hover:bg-transparent hover:scale-105 w-full flex items-center gap-3 justify-center"
              >
                <FaGithub className="text-xl" />
                Continue with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
