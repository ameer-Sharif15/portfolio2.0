import {   useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    // e.preventDefault();
    setLoading(true)
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData, // This is an object, so we must use send() instead of sendForm()
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false)
    // Clear form after submission
        },
        (error) => {
          console.log("Failed to send message.", error.text);
          setLoading(false)
          setFormData({ name: "", email: "", message: "" });
        }
      );
  };
  return (
    <div id='contact' className='w-full h-screen px-8 md:px-0 py-4 overflow-hidden flex flex-col gap-8 items-center justify-center'>
      <h1 className="text-4xl md:text-6xl text-gold font-bold">Contact Me</h1>
      <div   className="md:w-2/4 w-full px-4 md:px-8 py-8 rounded-xl border border-gold flex flex-col gap-4" data-aos="zoom-in">
        <input 
         type="text" data-aos="zoom-in-left" placeholder="Name" className="w-full border py-4 rounded-lg text-white px-2 border-gold bg-transparent " 
         value={formData.name}
         name="name"
         onChange={handleChange}
         />
        <input 
         value={formData.email}
         name="email"
         onChange={handleChange}
        type="email" data-aos="zoom-in-right" placeholder="Email" className="w-full border py-4 rounded-lg text-white px-2 border-gold bg-transparent " />
        <textarea 
         value={formData.message}
         onChange={handleChange}
        name="message" data-aos="zoom-out-up" rows={8} placeholder="Message....." className="w-full rounded-lg border py-4 text-white px-2 border-gold bg-transparent "></textarea>
        <button data-aos="fade-down"  onClick={sendEmail} className="bg-gold border-2 hover:bg-transparent hover:border-gold hover:text-gold border-primary py-4 rounded-xl">{loading ? 'Sending.....' : 'Send'}</button>
      </div>
    </div>
  )
}

export default Contact