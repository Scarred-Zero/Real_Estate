import React, { useEffect } from 'react'
import './ScrollUp.css';

const ScrollUp = () => {
    useEffect(() => {
      const handleScroll = () => {
          const scrollUp = document.querySelector('.scrollup');
          if (window.scrollY >= 560) {
              scrollUp.classList.add('show-scroll');
          } else {
              scrollUp.classList.remove('show-scroll');
          }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup event listener on component unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <a href='#' className='scrollup'>
            <i className="fa fa-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default ScrollUp
