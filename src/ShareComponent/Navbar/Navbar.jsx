import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-blue-500">
            Nuzhat&apos;s Portfolio
          </h1>
          <nav className="flex space-x-4">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
            <a href="/projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
