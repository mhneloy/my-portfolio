const Contact = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered"
          rows="5"
        ></textarea>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
