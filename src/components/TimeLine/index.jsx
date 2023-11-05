import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setError, setIsLoading } from '../../actions';
import { fetchEducationData } from '../../thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => ({
  educationData: state.educationData,
  error: state.error,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setError: () => dispatch(setError()),
  setIsLoading: () => dispatch(setIsLoading()),
  fetchEducationData: () => dispatch(fetchEducationData())
});


const TimeLine = ({ educationData, isLoading, error, fetchEducationData }) => {
  const containerStyle = {
    maxHeight: '80vh',
    height: '30vh',
    overflowY: 'auto'
  };

  useEffect(() => {
    setTimeout(() => {
      fetchEducationData();
    }, 2000);
  }, [fetchEducationData]);

  if (error) {
    return <div className="timeline" style={{color: 'red'}}>Something went wrong: Please review your server connection <br /> Error: {error.message}</div>;
  }

  return (
    <div className="timeline" style={containerStyle}>
      {isLoading || (!educationData) ? (
        <div className="loading"><FontAwesomeIcon icon={faSpinner} spinPulse /></div>
      ) : (
        <>
          {educationData
          .slice()
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((event, index) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
