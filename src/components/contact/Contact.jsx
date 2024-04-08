import React, { useState } from "react";
import Back from "../common/Back";
import img from "../images/pricing.jpg";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await fetch("https://formspree.io/f/xqkrgeqk", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });
      // Reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
