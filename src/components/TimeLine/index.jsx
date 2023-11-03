import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setEducationData } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => ({
  educationData: state.educationData
});

const mapDispatchToProps = (dispatch) => ({
  setEducationData: (data) => dispatch(setEducationData(data))
});


const TimeLine = ({ educationData, setEducationData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerStyle = {
    maxHeight: '80vh',
    height: '30vh',
    overflowY: 'auto'
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('/api/education')
        .then(response => response.json())
        .then(data => {
          setEducationData(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setIsLoading(false);
          setError(error)
        });
    }, 2000);
  }, [setEducationData]);

  if (error) {
    return <div className="timeline" style={{color: 'red'}}>Something went wrong: Please review your server connection <br /> Error: {error.message}</div>;
  }

  return (
    <div className="timeline" style={containerStyle}>
      {isLoading ? (
        <div className="loading"><FontAwesomeIcon icon={faSpinner} spinPulse /></div>
      ) : (
        <>
          {educationData.map((event, index) => (
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

// export default TimeLine;
export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
