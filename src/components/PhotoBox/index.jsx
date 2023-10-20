import React from 'react';

const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className="photo-box">
      <img src={avatar} alt={name} />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default PhotoBox;
