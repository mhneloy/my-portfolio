import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaLock } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";

const SignIn = () => {
  const [eye, setEye] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const handleEye = () => {
    setEye(!eye);
  };
  return (
    <div>
      <div className="flex justify-center items-center  min-h-[calc(100vh-84px)] bg-hero-animate">
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
                  className="input input-bordered  w-full pl-10 focus:outline-none"
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
                  type={`${eye === true ? "text" : "password"}`}
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
                  } right-3 text-xl top-1/2 transform -translate-y-1/2 text-gray-400 hover:cursor-pointer `}
                  onClick={handleEye}
                >
                  <FaEye />
                </div>
                <div
                  className={`${
                    eye === false ? "absolute" : "hidden"
                  } right-3 top-1/2 text-xl transform -translate-y-1/2 text-gray-400 hover:cursor-pointer  `}
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
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
