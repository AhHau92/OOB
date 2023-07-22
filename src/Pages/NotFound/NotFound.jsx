// import React from 'react'
import './NotFound.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      once: false
    });
    AOS.refresh();
  }, []);
  return (
    <div>NotFound</div>
  )
}

export default NotFound