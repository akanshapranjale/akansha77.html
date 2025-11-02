// import React, { useState } from "react";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const subject = encodeURIComponent(`Contact from ${formData.name}`);
//     const body = encodeURIComponent(formData.message);
//     window.location.href = `mailto:akanshapranjale77@gmail.com?subject=${subject}&body=${body}`;
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Me</h2>
//       <p>Interested in working together? Let’s connect!</p>

//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <button type="submit" className="btn">
//           Send Message
//         </button>
//       </form>

//       <div className="contact-links">
//         <p>
//           Or reach me directly via email:{" "}
//           <a href="mailto:akanshapranjale77@gmail.com">
//             akanshapranjale@example.com
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:akanshapranjale77@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Interested in working together? Let’s connect!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <div className="contact-links">
        <p>
          Or reach me directly via email:{" "}
          <a href="mailto:akanshapranjale77@gmail.com">
            akanshapranjale77@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;

