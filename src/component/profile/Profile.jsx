import { useContext } from "react";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ShareComponent/AuthContext/ContextProvider";

const Profile = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const handleEdit = () => {
    navigate("/dashboard/edit-profile");
  };

  const handleSignOut = () => {
    logOut();
    navigate("/signIn");
  };

  return (
    <div className="min-h-[calc(100vh-84px)] flex items-center justify-center bg-transparent px-4 py-8">
      <div className="border border-[#7cf03d] rounded-2xl p-8 w-full max-w-md text-white bg-transparent backdrop-blur-sm shadow-xl">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image */}
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-[#7cf03d] ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.ibb.co/sqZ2vM1/profile.jpg"
                alt="User profile"
              />
            </div>
          </div>

          {/* Name and Designation */}
          <h2 className="text-2xl font-bold">Md Mahmudul Hassan</h2>
          <p className="text-sm text-gray-300 tracking-wide">
            Full Stack Web Developer
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleEdit}
              className="btn btn-outline btn-sm text-white border-[#7cf03d] hover:bg-[#7cf03d] hover:text-black transition"
            >
              <FaUserEdit className="mr-2" />
              Edit
            </button>
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-sm text-white border-red-600 hover:bg-red-600 hover:text-white transition"
            >
              <FaSignOutAlt className="mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
