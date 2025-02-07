import PropTypes from "prop-types";
import { projects } from "../../constants";
const Modal = ({ projectId, closeModal }) => {
  console.log(projects);
  const singleProject = projects.find((project) => project.id === projectId);
  const {
    name,
    image,
    description,
    live_link,
    source_code_link,
    technologies,
  } = singleProject;
  console.log(singleProject);
  console.log(image);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal" open>
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={image}
              alt={name}
              className="w-full h-96 object-contain"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>
              <h3 className="text-xl font-bold text-black">Technologies</h3>
              <ul>
                <li>
                  <span className="text-gray-800">Front-End:</span>{" "}
                  {technologies.Front_end}
                </li>
                <li>
                  <span className="text-gray-800">State Management:</span>{" "}
                  {technologies.State_Management}{" "}
                </li>
                <li>
                  <span className="text-gray-800">Animations:</span>{" "}
                  {technologies.Animations}
                </li>
                <li>
                  <span className="text-gray-800">Authentication:</span>{" "}
                  {technologies.Authentication}{" "}
                </li>
                <li>
                  {" "}
                  <span className="text-gray-800">Date Management:</span>{" "}
                  {technologies.Date_Management}{" "}
                </li>
                <li>
                  <span className="text-gray-800">Payment:</span>{" "}
                  {technologies.Payment}
                </li>
              </ul>
              <div className="flex items-center justify-start gap-5 mt-4">
                <a href={live_link} target="_blank">
                  <button className=" bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Live Link
                  </button>
                </a>
                <a
                  href={source_code_link}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  projectId: PropTypes.any,
  closeModal: PropTypes.func,
};
