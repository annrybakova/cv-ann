import React, { useState } from 'react';
import Navigation from '../Navigation';
import Button from '../Button';
import { Link } from 'react-router-dom';
import PhotoBox from '../PhotoBox';
import photoBox from '../PhotoBox/photoBox.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Panel = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const togglePanelVisibility = () => {
    setIsPanelVisible(!isPanelVisible);
  }

  return (
    <>
        {isPanelVisible && (
          <>
          <div className="panel">
              {photoBox.map((item, index) => (
                <PhotoBox 
                key={index}
                name={item.name}
                avatar={item.avatar}
                />
              ))}

            <Navigation />
            <div className="inner-btn"> 
              <Link to="/"><Button className="inner-btn" icon={<FontAwesomeIcon icon={faChevronLeft} />} text=" Go back" /></Link>
            </div>
          </div>
          </>
        )}
        <Button className='hide-btn' icon={<FontAwesomeIcon icon={faBurger} />} onClick={togglePanelVisibility}/>
    </>
  );
}

export default Panel;
