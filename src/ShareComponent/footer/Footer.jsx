import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center p-4">
        <div className="container mx-auto">
          <p>&copy; 2025 Nuzhat. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a href="mailto:nuzhat@example.com">
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
