import React from 'react';

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
        {/* <div></div>
        <div className="scale-label"></div>
        <div></div>
        <div></div>
        <div className="scale-label"></div>
        <div></div> */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* <div></div> */}
        {/* <div></div> */}
        {/* <div></div> */}
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

const Skills = ({ skillsData }) => {
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

export default Skills;