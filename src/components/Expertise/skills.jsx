import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSkillsData } from '../../actions';

const SkillBar = ({ type, level }) => {
  return (
    <div className="skill-bar">
        <div className="skill-level" style={{ width: `${level}%` }}>
            <div className="skill-type">
             {type}
            </div>
        </div>
    </div>
  );
}

const Scale = () => {
    return (
      <div className="scale">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
}

const ScaleName = () => {
    return (
      <div className="scale-name">
        <div>Beginner</div>
        <div>Proficient</div>
        <div></div>
        <div></div>
        <div></div>
        <div>Expert</div>
        <div>Master</div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  skillsData: state.skillsData
});

const mapDispatchToProps = (dispatch) => ({
  setSkillsData: (data) => dispatch(setSkillsData(data))
});

const Skills = ({skillsData, setSkillsData}) => {

  useEffect(() => {
      fetch('/api/skills')
        .then(response => response.json())
        .then(data => {
          setSkillsData(data);
        })
        .catch(error => console.error('Error:', error));
  }, [setSkillsData]);

  return (
    <div className='skill-graph'>
      {skillsData.map((skill, index) => (
        <SkillBar key={index} type={skill.type} level={skill.level} />
      ))}
      <Scale />
      <ScaleName />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);