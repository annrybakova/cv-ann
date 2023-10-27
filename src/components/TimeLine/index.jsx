import React from 'react';

const TimeLine = ({ data }) => {
  const containerStyle = {
    maxHeight: '80vh',
    height: '30vh',
    overflowY: 'auto'
  };

  return (
    <div className="timeline" style={containerStyle}>
      {data.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="event-date">
            <div className="date">
              {event.date}
            </div>
            <div className='event-line'>
              <div className='line'></div>
            </div>
          </div>
          <div className="event-triangle"></div>
          <div className="event-details">
            <h3>{event.title}</h3>
            <p>{event.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
