import { useContext, useEffect, useState } from "react";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ShareComponent/AuthContext/ContextProvider";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  console.log(user.email);
  const [profile, setprofile] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5050/profileDetails?email=${user.email}`, {
      withCredentials: true,
    }).then((res) => {
      setprofile(res.data);
    });
  }, [user.email]);

  console.log(profile.photo);
  const handleEdit = () => {
    navigate("/dashboard/edit-profile");
  };

  const handleSignOut = () => {
    logOut();
    navigate("/signIn");
  };

  return (
    <div className="min-h-[calc(100vh-84px)] flex items-center justify-center bg-transparent px-4 py-8">
      <div className="border border-[#7cf03d] rounded-2xl p-8 w-full max-w-lg text-white bg-transparent backdrop-blur-sm shadow-xl">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image */}
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-[#7cf03d] ring-offset-base-100 ring-offset-2">
              <img src={profile.photo} alt="Md Mahmudul Hassan" />
            </div>
          </div>

          {/* Name and Designation */}
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="text-sm text-gray-300 tracking-wide">
            {profile.designation}
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
