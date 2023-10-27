import React from 'react';

const Expertise = ({ data }) => {
  return (
    <div className="expertise">
      {data.map((experience, index) => (
        <div key={index} className="experience">
            <div className="place">
            <div className="company">{experience.info.company}</div>
            <div className="date">{experience.date}</div>
          </div>
          <div className="info">
            <div className="job">{experience.info.job}</div>
            <div className="description">{experience.info.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
