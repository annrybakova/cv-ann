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

  const navigationItems = [
    { id: 'aboutMe', text: 'About me', icon: faUser },
    { id: 'education', text: 'Education', icon: faGraduationCap },
    { id: 'experience', text: 'Experience', icon: faPen },
    { id: 'skills', text: 'Skills', icon: faGem },
    { id: 'portfolio', text: 'Portfolio', icon: faBriefcase },
    { id: 'contact', text: 'Contact', icon: faPaperPlane },
    { id: 'feedback', text: 'Feedback', icon: faComment }
  ];  

  return (
    <nav>
      <ul className='list-svg'>
        {navigationItems.map(item => (
          <li 
            key={item.id}
            className={activeItem === item.id ? 'active' : ''}
            onClick={() => handleItemClick(item.id)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </li>
        ))}
      </ul>
      <ul className='list'>
        {navigationItems.map(item => (
          <li 
            key={item.id}
            className={activeItem === item.id ? 'active' : ''}
            onClick={() => handleItemClick(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
