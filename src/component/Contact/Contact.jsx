import Container from "../../ShareComponent/Container/Container";
import SectionTitle from "../../ShareComponent/SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ObjectForm = Object.fromEntries(formData.entries());
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", ObjectForm, {
        publicKey: import.meta.env.VITE_Email_public_key,
      })
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending message:", error.text);
        }
      );
  };
  return (
    <Container>
      <section className=" p-8">
        <SectionTitle title={"Contact Me"} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
          <form onSubmit={sendEmail} className="flex w-1/2 flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
            />
            <textarea
              placeholder="Your Message"
              name="textarea"
              className="textarea textarea-bordered"
              rows="5"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Email
            </button>
          </form>
          {/* my information */}
          <div className="w-1/2">my information</div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
