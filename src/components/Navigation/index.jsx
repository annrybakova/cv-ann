import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap, faPaperPlane, faBriefcase, faPen, faGem, faComment  } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, { threshold: 1 });
  
    const sectionIds = ['aboutMe', 'education', 'experience', 'skills', 'portfolio', 'contact', 'feedback'];
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  
    return () => {
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  

  return (
    <nav>
      <ul className='list-svg'>
        <li className={activeItem === 'aboutMe' ? 'active' : ''} onClick={() => handleItemClick('aboutMe')}><FontAwesomeIcon icon={faUser} /></li>
        <li className={activeItem === 'education' ? 'active' : ''} onClick={() => handleItemClick('education')}><FontAwesomeIcon icon={faGraduationCap} /></li>
        <li className={activeItem === 'experience' ? 'active' : ''} onClick={() => handleItemClick('experience')}><FontAwesomeIcon icon={faPen} /></li>
        <li className={activeItem === 'skills' ? 'active' : ''} onClick={() => handleItemClick('skills')}><FontAwesomeIcon icon={faGem} /></li>
        <li className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleItemClick('portfolio')}><FontAwesomeIcon icon={faBriefcase} /></li>
        <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}><FontAwesomeIcon icon={faPaperPlane} /></li>
        <li className={activeItem === 'feedback' ? 'active' : ''} onClick={() => handleItemClick('feedback')}><FontAwesomeIcon icon={faComment} /></li>
      </ul>
      <ul className='list'>
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
