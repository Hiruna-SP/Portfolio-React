import React from "react";
import "./Contact.css";
import line from "../../assets/line.png";
import mailicon from "../../assets/mail.png";
import phoneicon from "../../assets/phone-call.png";
import locationicon from "../../assets/location.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "205ff505-5d69-4f25-ad94-46904bd9bbc2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div>
      <div id="contact" className="contact">
        <div className="title">
          <h1>Get in touch</h1>
          <img src={line} alt="line" />
        </div>
        <div className="contact-section">
          <div className="left">
            <h1>Let's Talk</h1>
            <p>
              If you have any questions or just want to say hi, feel free to
              reach out!
            </p>
            <dic className="contact-details">
              <div className="contact-detail">
                <img src={mailicon} alt="mail" /> <p>hirunasp@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={phoneicon} alt="phone" />
                <p>+94 70 257 8236 </p>
              </div>
              <div className="contact-detail">
                <img src={locationicon} alt="location" />{" "}
                <p>Galle, Sri Lanka</p>
              </div>
            </dic>
          </div>
          <form onSubmit={onSubmit} className="right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Type your message here"
            ></textarea>
            <button type="submit" className="submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
