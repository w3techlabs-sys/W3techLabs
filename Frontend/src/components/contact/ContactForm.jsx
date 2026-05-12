// src/components/contact/ContactForm.jsx

import { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { FaArrowRight } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL;

const ContactForm = ({ title, subtitle }) => {

  /* FORM STATE */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  /* LOADING */
  const [loading, setLoading] = useState(false);

  /* MESSAGE */
  const [responseMessage, setResponseMessage] = useState("");

  /* HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* SUBMIT FORM */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* SIMPLE VALIDATION */
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.phone ||
      !formData.message
    ) {
      setResponseMessage("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        API_URL,
        formData
      );

      if (response.data.success) {
        setResponseMessage(
          "Message sent successfully."
        );

        /* RESET FORM */
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      }

    } catch (error) {
      setResponseMessage(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-box">

      <span className="contact-mini-title">
        • CONTACT US
      </span>

      <h2>{title}</h2>

      <p>{subtitle}</p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="row g-3">

          {/* NAME */}
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* SUBJECT */}
          <div className="col-md-6">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* PHONE */}
          <div className="col-md-6">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* MESSAGE */}
          <div className="col-12">
            <textarea
              rows="6"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

        </div>

        {/* RESPONSE MESSAGE */}
        {responseMessage && (
          <p className="form-message">
            {responseMessage}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="contact-btn"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}

          <span>
            <FaArrowRight />
          </span>
        </button>

      </form>

    </div>
  );
};

export default ContactForm;