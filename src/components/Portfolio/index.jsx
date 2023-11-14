import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Isotope from 'isotope-layout';
import portfolioData from './portfolioData.json'; 
import Info from '../../components/Info';

const Portfolio = ({collapsed}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeItem, setActiveItem] = useState('all');

  const handleItemClick = (item) => {
    setActiveItem(item);
    setActiveTab(item);
  }

  useEffect(() => {
    const grid = document.querySelector('.grid');
    const iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 180
      }
    });

    iso.arrange();
  }, [activeTab]);

  const filteredItems = activeTab === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <div className={`container ${collapsed ? 'collapsed' : null}`}>
      <h2>Portfolio</h2>
      <ul className="portfolio-btn">
        <li className={activeItem === 'all' ? 'active' : 'filter-btn'} onClick={() => handleItemClick('all')}>All</li>/
        <li className={activeItem === 'science' ? 'active' : 'filter-btn'} onClick={() => handleItemClick('science')}>Science</li>/
        <li className={activeItem === 'statisctics' ? 'active' : 'filter-btn'} onClick={() => handleItemClick('statisctics')}>Statisctics</li>/
        <li className={activeItem === 'python' ? 'active' : 'filter-btn'} onClick={() => handleItemClick('python')}>Python</li>
      </ul>
      <div className="grid">
        {filteredItems.map((item, index) => (
          <article className="grid-item" key={index}>
              <div className='img-content'>
                <h3>{item.title}</h3>
                <Info text={<p>{item.description}</p>}/>
                <Link to={item.link}>
                  View resourse
                </Link>
              </div>
              <div className='portfolio-img' style={{backgroundImage: `url(${item.picture})`, backgroundRepeat: 'no-repeat'}}></div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
