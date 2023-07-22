import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: false
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up">
      Prices
    </div>
  );
};

export default Contact;
