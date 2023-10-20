import React from 'react';

const Feedback = ({ data }) => {
  return (
    <div className="feedback-list">
      {data.map((item, index) => (
        <div key={index} className="feedback-item">
          <p>{item.feedback}</p>
          <div className="reporter">
            <img src={item.reporter.photoUrl} alt={item.reporter.name} />
            <p>{item.reporter.name}</p>
            <a href={item.reporter.citeUrl} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
