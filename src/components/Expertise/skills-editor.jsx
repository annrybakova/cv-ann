import React from 'react';
import { connect } from 'react-redux';
import { addSkill } from '../../actions';
import { useFormik } from 'formik';

const mapStateToProps = (state) => ({
  skillsData: state.skillsData,
});

const mapDispatchToProps = (dispatch) => ({
  addSkill: (type, level) => dispatch(addSkill(type, level)),
});

function EditPanel({ addSkill }) {
  const formik = useFormik({
    initialValues: {
      skillName: '',
      skillRange: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.skillName.trim()) {
        errors.skillName = 'Skill name is a required field';
      }

      const parsedValue = parseInt(values.skillRange, 10);

      if (isNaN(parsedValue)) {
        errors.skillRange = 'Skill range must be a number';
      } else if (parsedValue < 10) {
        errors.skillRange = 'Skill range must be greater than or equal to 10';
      } else if (parsedValue > 100) {
        errors.skillRange = 'Skill range must be less than or equal to 100';
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addSkill(values.skillName, values.skillRange);
      resetForm();
    },
  });

  return (
    <div className="skills-form">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="skillName">Skill name</label>
          <input
            className="block"
            type="text"
            id="skillName"
            name="skillName"
            placeholder="Enter skill name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skillName}
          />
          {(formik.touched.skillName || formik.errors.skillName) && (
            <div className="error-message">{formik.errors.skillName}</div>
          )}
        </div>
        <div>
          <label htmlFor="skillRange">Skill range</label>
          <input
            className="block"
            type="number"
            id="skillRange"
            name="skillRange"
            placeholder="Enter skill range"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skillRange}
          />
          {(formik.touched.skillRange || formik.errors.skillRange) && (
            <div className="error-message">{formik.errors.skillRange}</div>
          )}
        </div>
        <button
          className={`form-button ${formik.dirty && formik.isValid ? '' : 'disabled'}`}
          type="submit"
          disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}
        >
          Add skill
        </button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPanel);
