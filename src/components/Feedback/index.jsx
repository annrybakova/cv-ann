import React from 'react';

const Feedback = ({ data }) => {
  return (
    <div className="feedback-list">
      {data.map((item, index) => (
        <div key={index} className="feedback-item">
          <p className="feedback-details">{item.feedback}</p>
          <div className="reporter">
            <img src={item.reporter.photoUrl} alt={item.reporter.name} />
            <p>{item.reporter.name},</p>
            <a className="feedback-site" href={item.reporter.citeUrl} target="_blank" rel="noopener noreferrer">
              linkedin account
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
