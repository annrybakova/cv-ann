import React, { useState } from 'react';
import {addSkill} from '../../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    skillsData: state.skillsData
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addSkill: (type,level) => dispatch(addSkill(type,level))
  });

function EditPanel({ addSkill }) {

    const [error, setError] = useState({
        skillName: '',
        skillRange: '',
    });

    const [formData, setFormData] = useState({
        skillName: '',
        skillRange: '',
    });

    const [isFormDirty, setIsFormDirty] = useState(false);

    const handleChange = (e) => {
        setIsFormDirty(true);
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'skillName') {
            setError(prev => ({
                ...prev,
                skillName: value.trim() === '' ? "Skill name is a required field" : ""
            }));
        }

        if (name === 'skillRange') {
            const parsedValue = parseInt(value, 10);

            if (isNaN(parsedValue)) {
                setError(prev => ({
                    ...prev,
                    skillRange: "Skill range must be a 'number' type"
                }));
            } else if (parsedValue < 10) {
                setError(prev => ({
                    ...prev,
                    skillRange: "Skill range must be greater than or equal to 10"
                }));
            } else if (parsedValue > 100) {
                setError(prev => ({
                    ...prev,
                    skillRange: "Skill range must be less than or equal to 100"
                }));
            } else {
                setError(prev => ({
                    ...prev,
                    skillRange: ""
                }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.skillName.trim()) {
            errors.skillName = "Skill name is a required field";
        }
        if (!formData.skillRange || error.skillRange) {
            errors.skillRange = true;
        }

        setError({ ...errors });

        if (!errors.skillName && !errors.skillRange) {
            addSkill(formData.skillName, formData.skillRange);
            setFormData({
                skillName: '',
                skillRange: '',
            });
            
            // alert(`Form submitted:${JSON.stringify(formData, null, 2)}`);
        }
    }

    const isButtonDisabled = !isFormDirty || !!error.skillName || !!error.skillRange || !formData.skillName || !formData.skillRange;

    return (
        <div className='skills-form'>
            <form className='form'>
                <div>
                    <label>{'Skill name '}</label>
                    <input className={error.skillName ? 'error' : 'block'}
                        type={'text'} name={'skillName'} placeholder={'Enter skill name'}
                        value={formData.skillName} onChange={handleChange} />
                    {error.skillName && <div className="error-message">{error.skillName}</div>}
                </div>
                <div>
                    <label>{'Skill range '}</label>
                    <input className={error.skillRange ? 'error' : 'block'}
                        type={'number'} name={'skillRange'} placeholder={'Enter skill range'}
                        value={formData.skillRange} onChange={handleChange} />
                    {error.skillRange && <div className="error-message">{error.skillRange}</div>}
                </div>
                <button className={`form-button ${isButtonDisabled ? 'disabled' : ''}`}
                    type="button" onClick={handleSubmit} disabled={!isFormDirty}>
                Add skill</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPanel);
