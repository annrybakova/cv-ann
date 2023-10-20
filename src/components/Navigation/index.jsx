import React, { useState } from 'react';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav>
      <ul>
        <li className={activeItem === 'aboutMe' ? 'active' : ''} onClick={() => handleItemClick('aboutMe')}>About me</li>
        <li className={activeItem === 'education' ? 'active' : ''} onClick={() => handleItemClick('education')}>Education</li>
        <li className={activeItem === 'experience' ? 'active' : ''} onClick={() => handleItemClick('experience')}>Experience</li>
        <li className={activeItem === 'skills' ? 'active' : ''} onClick={() => handleItemClick('skills')}>Skills</li>
        <li className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleItemClick('portfolio')}>Portfolio</li>
        <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>Contact</li>
        <li className={activeItem === 'feedback' ? 'active' : ''} onClick={() => handleItemClick('feedback')}>Feedback</li>

      </ul>
    </nav>
  );
}

export default Navigation;
