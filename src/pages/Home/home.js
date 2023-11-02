import "../../assets/styles/home.css"
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import PhotoBox from '../../components/PhotoBox';
import photoBox from '../../components/PhotoBox/photoBox.json';

const HomePage = () => {
  return (
    <>
      <div className="background"></div>
      <div className="homeContent">
          {photoBox.map((item, index) => (
              <PhotoBox
              key={index}
              name={item.name}
              title={item.title}
              description={item.description}
              avatar={item.avatar}
              />
          ))}

          <Link to="/inner"><Button text="Know more"/></Link>
      </div>
    </>
  );
}

export default HomePage;
