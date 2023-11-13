import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './';


const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    const element = document.getElementsByClassName("content")[0];

    if (element) {
      element.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
      <Button
        className="scroll-btn"
        onClick={scrollToTop} 
        icon={<FontAwesomeIcon icon={faChevronUp}/>}
      />
  );
};

export default ScrollToTopBtn;
