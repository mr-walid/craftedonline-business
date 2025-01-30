import React, { useState } from 'react';
// import '../style/Services.css';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FcStatistics } from 'react-icons/fc';
import { FaWordpress } from 'react-icons/fa';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <LiaLaptopCodeSolid className='services_icon' />,
      title: 'Website Building Using Programming Languages',
      text: `Create stunning, high-performing websites tailored to your needs using cutting-edge programming languages and frameworks, ensuring functionality, scalability, and a seamless user experience.`,
    },
    {
      id: 2,
      icon: <FaWordpress className='services_icon' />,
      title: 'WordPress Website Building',
      text: 'Build dynamic and visually captivating websites with WordPress, leveraging its flexibility and extensive plugins to create tailored solutions for businesses of all sizes.',
    },
    {
      id: 3,
      icon: <FcStatistics className='services_icon' />,
      title: 'Social Media Management',
      text: 'Enhance your online presence with expert social media management, including targeted campaigns on Facebook, Instagram, and LinkedIn to boost engagement and drive results.',
    },
  ];

  const toggleText = (id) => {
    setExpandedService((prev) => (prev === id ? null : id));
  };

  return (
    <div className='services'>
      <div className='title'>
        <h1>Our Services</h1>
        <h3>
          "Offering comprehensive solutions, including website development,
          software services, and social media management to drive growth and
          innovation for your organization."
        </h3>
      </div>
      <div className='services_info_container'>
        {services.map(({ id, icon, title, text }) => {
          const isExpanded = expandedService === id;
          return (
            <div
              className='services_info'
              key={id}
            >
              {/* // hgj */}
              {icon}
              <h2>{title}</h2>
              <p>{isExpanded ? text : `${text.substring(0, 100)}...`}</p>
              <button
                onClick={() => toggleText(id)}
                className='view_more_button'
              >
                {isExpanded ? 'View Less' : 'View More'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
