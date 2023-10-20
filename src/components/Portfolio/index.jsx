import React, { useState, useEffect } from 'react';
import Isotope from 'isotope-layout';
import portfolioData from './portfolioData.json'; // Assuming you've created the JSON file as described earlier

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const grid = document.querySelector('.grid');
    const iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 200
      }
    });

    iso.arrange();
  }, [activeTab]);

  const filteredItems = activeTab === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <button onClick={() => setActiveTab('all')}>All</button>
        <button onClick={() => setActiveTab('code')}>Code</button>
        <button onClick={() => setActiveTab('UI')}>UI</button>
      </div>
      <div className="grid">
        {filteredItems.map((item, index) => (
          <div className="grid-item" key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
