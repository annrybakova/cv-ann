import React, { useEffect, useState } from 'react';
import { connect,  useDispatch } from 'react-redux';
import { fetchSkillsData } from '../../thunks'
import { setSkillsData } from '../../actions'
import Button from '../Button';
import EditPanel from './skills-editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
  fetchSkillsData: () => dispatch(fetchSkillsData())
});

const Skills = ({skillsData}) => {
  const dispatch = useDispatch();
  const[editPanel, setEditPanel]=useState(false);

  const toggleEditSkillsVisibility = () => {
    setEditPanel(!editPanel);
  }

  useEffect(() => {
    const localSkillsData = localStorage.getItem('skillsData');
    if (localSkillsData) {
      dispatch(setSkillsData(JSON.parse(localSkillsData)));
    } else {
    fetchSkillsData()
    }
  }, [dispatch]);

  return (
    <>
      <Button className='skills-btn' icon={<FontAwesomeIcon icon={faPenToSquare} />} text=" Edit skills" onClick={toggleEditSkillsVisibility}/>
      {editPanel &&
        <EditPanel/>
      }
      <div className='skill-graph'>
        {skillsData.map((skill, index) => (
          <SkillBar key={index} type={skill.type} level={skill.level} />
        ))}
        <Scale />
        <ScaleName />
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);