import React, { useRef, useState } from "react";
import "../contact/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const [textAreaCount, setTextAreaCount] = useState(0);

  const recalculate = (e) => {
    console.log("event value:", e);
    setTextAreaCount(e.target.value.length);
  };

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
          setValidated(false);
          e.target.reset();
          setTextAreaCount(0);
        },
        (error) => {
          console.log(error.text);
          alert("Message not send successfully");
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
            required="true"
            name="user_email"
            placeholder="Email I'd"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />

          <input
            className="input"
            id="mobile"
            name="mobile"
            maxLength={12}
            minLength={10}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            type="text"
            placeholder="Mobile"
          ></input>

          <textarea
            className="textarea"
            maxLength={500}
            name="message"
            type="submit"
            required="required"
            placeholder="Enter your message here...."
            onChange={recalculate}
          />
          <p className="count">{`Count: ${textAreaCount} /500 `}</p>
          <input className="input" type="submit" value="send" id="button" />
        </form>
      </div>
      <p className="contact-parah">&#169; Rathan. All right reserved</p>
    </div>
  );
};

export default Contact;
