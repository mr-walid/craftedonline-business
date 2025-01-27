import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/Contact.css';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMailUnread } from 'react-icons/io';
import { MdWatchLater } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_7ggdwtd',
        'template_d46d60r',
        {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: formData.message,
        },
        'KIF851QQZtbCf_y2E'
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Your message has been sent!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send your message. Please try again.');
        }
      );
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    });
  };

  return (
    <div class='contact_section'>
      <div class='contact_container'>
        <div className='contact_form'>
          <h1>Contact Us</h1>
          <h3>Get in Touch </h3>
          <form onSubmit={sendEmail}>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type='text'
              name='number'
              placeholder='Your Phone Number'
              value={formData.number}
              onChange={handleChange}
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div class='contact_info'>
          <h2>Contact info</h2>
          <div class='location'>
            <CiLocationOn className='icon' />
            <p>1234 Street Name, City Name, United States</p>
          </div>
          <div class='phone'>
            <FaPhoneAlt className='icon' />
            <p>+21265388499</p>
          </div>
          <div class='mail'>
            <IoIosMailUnread className='icon' />
            <p>Example.contact@gmail.com</p>
          </div>
          <div class='time'>
            <MdWatchLater className='icon' />
            <p>Alwayse opened</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
