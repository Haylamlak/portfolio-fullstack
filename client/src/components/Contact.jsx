import { useState } from "react";
import axios from "axios";
import "../styles/Contact.css"



function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
     const res = axios.post(
  "https://portfolio-backend-eumf.onrender.com/api/contact",
  form
)
      setMsg(res.data.msg);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error sending message");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
        <input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <textarea placeholder="Message" name="message" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {msg && <p className="msg">{msg}</p>}
    </section>
  );
}

export default Contact;