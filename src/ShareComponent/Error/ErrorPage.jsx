import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-6xl text-red-500" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-center text-gray-500 mb-6">
          The page you are looking for doesn&apos;t exist or has encountered an
          error.
        </p>
        <div className="text-center">
          <Link to="/" className="btn btn-primary w-full">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
