import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const TimeLine = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerStyle = {
    maxHeight: '80vh',
    height: '30vh',
    overflowY: 'auto'
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('/api/timelineData')
        .then(response => response.json())
        .then(data => {
          setTimelineData(data);
          setIsLoading(false);
        })
        .catch(error => console.error('Error:', error));
    }, 2000);
  }, []);

  return (

    <div className="timeline" style={containerStyle}>
      {isLoading ? (
        <div className="loading"><FontAwesomeIcon icon={faSpinner} spinPulse /></div>
      ) : (
        <>
          {timelineData.map((event, index) => (
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
       </>
      )}
    </div>
  );
};

export default TimeLine;
