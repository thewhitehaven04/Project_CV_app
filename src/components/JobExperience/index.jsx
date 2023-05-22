import { Component } from 'react';
import NamedInput from '../NamedInput';
import React from 'react';
import FormBlock from '../FormBlock';
import style from './../../styles/jobExperience.css';

/**
 * @typedef {Object} JobExperienceProps
 * @property {String} disabled
 */

class JobExperienceForm extends Component {
  render() {
    return (
      <FormBlock name="Job experience">
        <div className='date-range'>
          <NamedInput
            name="From"
            type="date"
            disabled={this.props.disabled}
          ></NamedInput>
          <NamedInput
            name="To"
            type="date"
            disabled={this.props.disabled}
          ></NamedInput>
        </div>
        <NamedInput
          name="Company name"
          type="text"
          required={true}
        ></NamedInput>
        <NamedInput name="Position" type="text" required={true}></NamedInput>
        <div className="textarea__flex">
          <label htmlFor="responsibility">Job Responsibilities:</label>
          <textarea name="responsibility" maxLength={1000} rows={4}></textarea>
        </div>
      </FormBlock>
    );
  }
}

export default JobExperienceForm;
