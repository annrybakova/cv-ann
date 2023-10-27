import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <button 
        className="scroll-btn"
        onClick={scrollToTop}> 
        {<FontAwesomeIcon icon={faChevronUp}/>}
      </button>
  );
};

export default ScrollToTopBtn;
