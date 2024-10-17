import React, { useRef } from 'react';
import './ContactMe.css'; // CSS file for custom styling
import emailjs from '@emailjs/browser';
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_13hkunt', 'template_mnv7mmw', form.current, {
        publicKey: 'ia8x1hcGu--J0TG1L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-container py-lg-5" id='contact'>
      <h2>Contact Me</h2>
      <p>Please fill out the form below to discuss any work opportunities.</p>

      <form className="contact-form py-lg-5" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your name" className="input-field" name='from_name' />
        <input type="email" placeholder="Your Email" className="input-field" name='from_email'/>
        <textarea placeholder="Your Message" className="input-field" name='message'></textarea>
        <button type="submit" value='send' className="submit-btn">Submit</button>
      </form>

      <div className="social-icons">
        <a href="#" className="icon facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" className="icon twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" className="icon youtube"><i className="fab fa-youtube"></i></a>
        <a href="#" className="icon instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default ContactMe;
