import Container from "../../ShareComponent/Container/Container";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_Email_Template_id,
        e.target,
        {
          publicKey: import.meta.env.VITE_Email_public_key,
        }
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          e.target.reset();
        },
        (error) => {
          console.error(error);
        }
      );
  };
  return (
    <Container>
      <section className=" p-8">
        <SectionTitle title={"Contact Me"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <form onSubmit={sendEmail} className="flex flex-col space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="input input-bordered"
              />
              <input
                type="email"
                name="to_name"
                placeholder="Your Email"
                className="input input-bordered"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="textarea textarea-bordered"
                rows="5"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Email
              </button>
            </form>
          </div>

          {/* My Information */}
          <div className="bg-tertiary rounded-lg shadow-lg flex flex-col justify-center items-start space-y-4 p-6">
            <h3 className="text-xl font-semibold text-primary">Contact Info</h3>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">📍</span>
              <p className="text-gray-800">123 Street Name, City, Country</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">📧</span>
              <p className="text-gray-800">your.email@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">📞</span>
              <p className="text-gray-800">+123 456 7890</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-gray-800"
              >
                GitHub
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-green-600 hover:text-green-800"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
