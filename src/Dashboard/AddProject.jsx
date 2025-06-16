import { useForm } from "react-hook-form";
import { FaGithub, FaLink, FaUser, FaClock, FaCode } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import formLottie from "./form.json";
import Lottie from "lottie-react";
import axios from "axios";
import { useState } from "react";
import useAxiosSecure from "../useHooks/useAxiosSecure";
import useContextHooks from "../useHooks/useContextHooks";

const AddProject = () => {
  const { user } = useContextHooks();
  const [imageurl, setImageUrl] = useState(null);
  const axiosInstance = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = data;
    formData.projectImage = imageurl;
    formData.email = user.email;

    // send to backend here
    axiosInstance
      .post("/projectData", formData)
      .then((res) => console.log(res.data));
    reset();
  };

  // image upload
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imgBB_api_key
        }`,
        formData
      )
      .then((res) => setImageUrl(res.data.data.display_url))
      .catch((err) => console.log("Image upload failed: ", err));
    console.log(formData);
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
            <label className="label text-white">Project Image</label>
            <input
              {...register("projectImage", { required: true })}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input file-input-bordered file-input-success w-full bg-gray-800 text-white border border-brand file:bg-brand placeholder:text-gray-400"
            />
            {errors.projectImage && (
              <p className="text-sm text-red-400 mt-1">
                Project image is required
              </p>
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
              value="Md Mahmudul Hassan"
              readOnly
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
