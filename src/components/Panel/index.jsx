import React, { useState } from 'react';
import Navigation from '../Navigation';
import Button from '../Button';
import { Link } from 'react-router-dom';
import PhotoBox from '../PhotoBox';
import photoBox from '../PhotoBox/photoBox.json';

const Panel = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const togglePanelVisibility = () => {
    setIsPanelVisible(!isPanelVisible);
  }

  return (
    <div className="panel">
      <Button onClick={togglePanelVisibility} />
      {isPanelVisible && (
        <>
            <Navigation />

            <div>
                {photoBox.map((item, index) => (
                    <PhotoBox 
                    key={index}
                    name={item.name}
                    avatar={item.avatar}
                    />
                ))}
            </div>
            
            <Link to="/"><Button icon="chevron-left" text="Go back" /></Link>
        </>
      )}
    </div>
  );
}

export default Panel;
