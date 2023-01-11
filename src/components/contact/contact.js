import React, { useRef } from "react";
import "../contact/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sdx72nh",
        "template_ashz49t",
        form.current,
        "G6jIF6yf8XkdLvhGa"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent ✅");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="first-container">
      <div className="contact-container" id="contact">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h1 className="contact-h1">Contact Me</h1>
          <input
            className="input"
            id="name"
            type="text"
            required="required"
            name="user_name"
            placeholder="Full Name"
          />
          <input
            className="input"
            id="email"
            type="email"
            required="required"
            name="user_email"
            placeholder="Email I'd"
          />
          <input
            className="input"
            id="mobile"
            name="mobile"
            type="text"
            placeholder="Mobile"
          ></input>
          <textarea
            className="textarea"
            name="message"
            type="submit"
            required="required"
            placeholder="Enter your message here...."
          />

          <input className="input" type="submit" value="send" id="button" />
        </form>
      </div>
      <p className="contact-parah">&#169; Rathan. All right reserved</p>
    </div>
  );
};

export default Contact;
