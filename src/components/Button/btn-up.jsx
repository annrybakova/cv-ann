import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './';


const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    console.log('Clicked!');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <Button
        className="scroll-btn"
        onClick={scrollToTop} 
        icon={<FontAwesomeIcon icon={faChevronUp}/>}
      />
      // <button className="scroll-btn" onClick={scrollToTop}>
      //   {<FontAwesomeIcon icon={faChevronUp}/>}
      // </button>
  );
};

export default ScrollToTopBtn;
