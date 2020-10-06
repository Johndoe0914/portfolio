import React, { useState } from "react";
import { Zoom, Bounce } from "react-reveal";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formdata;

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      return console.log("fields are empptys");
    }

    const form = await axios
      .post("/api/form", { name, email, message })
      .catch((err) => console.log(err));

    if (form.status === 200) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Email has been sent successfully");
    }
  };

  return (
    <div className='contact'>
      <h1>Contact me</h1>
      <h3>Want to work together or have questions please contact me</h3>

      <Zoom>
        <div className='contact__form'>
          <form onSubmit={(e) => onSubmit(e)}>
            <label>Name</label>

            <input
              placeholder='Enter name'
              onChange={(e) => handleChange(e)}
              value={name}
              name='name'
              type='text'
            />

            <label>Email</label>

            <input
              placeholder='Enter your email'
              onChange={(e) => handleChange(e)}
              value={email}
              name='email'
              type='text'
            />

            <label>Message</label>

            <textarea
              placeholder='Enter message'
              onChange={(e) => handleChange(e)}
              value={message}
              name='message'
              type='text'
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </Zoom>
    </div>
  );
};

export default Contact;
