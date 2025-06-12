import { useForm } from "react-hook-form";
import { FaGithub, FaLink, FaUser, FaClock, FaCode } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import formLottie from "./form.json";
import Lottie from "lottie-react";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // send to backend here
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Lottie Animation */}
      <Lottie animationData={formLottie} className="w-40 h-40" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-transparent border-2 p-8 rounded-xl shadow-lg"
        style={{ borderColor: "#7cf03d" }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#7cf03d" }}
        >
          Submit Your Project
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Name */}
          <div>
            <label className="label text-white">Project Name</label>
            <input
              {...register("projectName", { required: true })}
              type="text"
              placeholder="Awesome Project"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
            {errors.projectName && (
              <span className="text-red-400">Project name is required</span>
            )}
          </div>

          {/* Project Image */}
          <div>
            <label className="label text-white">Project Image URL</label>
            <input
              {...register("projectImage", { required: true })}
              type="url"
              placeholder="https://image.link"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
            {errors.projectImage && (
              <span className="text-red-400">Image URL is required</span>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="label text-white flex items-center gap-2">
              <MdOutlineDescription />
              Project Description
            </label>
            <textarea
              {...register("projectDescription", { required: true })}
              rows="3"
              placeholder="Describe your project..."
              className="textarea textarea-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
            {errors.projectDescription && (
              <span className="text-red-400">Description is required</span>
            )}
          </div>

          {/* GitHub Links */}
          <div>
            <label className="label text-white flex items-center gap-2">
              <FaGithub /> GitHub Client
            </label>
            <input
              {...register("githubClient", { required: true })}
              type="url"
              placeholder="https://github.com/user/client"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
          </div>

          <div>
            <label className="label text-white flex items-center gap-2">
              <FaGithub /> GitHub Server
            </label>
            <input
              {...register("githubServer")}
              type="url"
              placeholder="https://github.com/user/server"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
          </div>

          {/* Live Demo */}
          <div>
            <label className="label text-white flex items-center gap-2">
              <FaLink /> Live Demo
            </label>
            <input
              {...register("liveDemo")}
              type="url"
              placeholder="https://project.live"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
          </div>

          {/* Client and Developer Name */}
          <div>
            <label className="label text-white flex items-center gap-2">
              <FaUser /> Client Name
            </label>
            <input
              {...register("clientName")}
              type="text"
              placeholder="Client's Name"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
          </div>

          <div>
            <label className="label text-white flex items-center gap-2">
              <FaUser /> Developer Name
            </label>
            <input
              {...register("developerName", { required: true })}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
            {errors.developerName && (
              <span className="text-red-400">Developer name is required</span>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="label text-white flex items-center gap-2">
              <FaClock /> Project Duration
            </label>
            <input
              {...register("projectDuration")}
              type="text"
              placeholder="e.g., 2 weeks"
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="label text-white flex items-center gap-2">
              <FaCode /> Technologies
            </label>
            <input
              {...register("technologies", { required: true })}
              type="text"
              placeholder="React, Node, MongoDB, etc."
              className="input input-bordered w-full text-white"
              style={{ borderColor: "#7cf03d" }}
            />
            {errors.technologies && (
              <span className="text-red-400">Required</span>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="btn btn-outline text-white hover:bg-[#7cf03d] hover:text-black"
            style={{ borderColor: "#7cf03d" }}
          >
            Submit Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
