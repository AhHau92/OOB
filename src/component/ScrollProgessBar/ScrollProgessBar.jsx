import React, { useEffect } from 'react';
import './ScrollProgressBar.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollProgressBar = () => {
  useEffect(() => {
    const calcScrollValue = () => {
      const scrollProgress = document.getElementById('progress');
      const progressValue = document.getElementById('progress-value');
      const pos = document.documentElement.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      if (pos > 100) {
        scrollProgress.style.display = 'grid';
      } else {
        scrollProgress.style.display = 'none';
      }

      scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });

      scrollProgress.style.background = `conic-gradient(#6293c4 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    const handleScroll = () => {
      calcScrollValue();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', calcScrollValue);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', calcScrollValue);
    };
  }, []);

  return (
    <>
      <div id="progress">
        <span id="progress-value">
          < AiOutlineArrowUp />
        </span>
      </div>
      
    </>
  );
};

export default ScrollProgressBar;
