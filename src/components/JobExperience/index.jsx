import { Component } from 'react';
import NamedInput from '../NamedInput';
import React from 'react';
import FormBlock from '../FormBlock';
import style from './../../styles/jobExperience.css';

/**
 * @typedef {Object} JobExperienceProps
 * @property {Boolean} disabled
 */

/**
 * @class
 * @augments Component<JobExperienceProps>
 */
class JobExperience extends Component {
  render() {
    return (
      <article className="form-block">
        {/* this is cheating: this component should really have no 
        knowledge of CSS classes that belong to FormBlock component */}
        <div className="date-range">
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
      </article>
    );
  }
}

class JobExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobCount: 1,
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return { jobCount: state.jobCount + 1 };
    });
  };

  render() {
    return (
      <FormBlock
        name="Job experience"
        buttons={[{ displayName: 'Add new', handleClick: this.handleClick }]}
      >
        {Array(this.state.jobCount)
          .fill(null)
          .map((_, i) => (
            <JobExperience
              key={i}
              disabled={this.props.disabled}
            ></JobExperience>
          ))}
      </FormBlock>
    );
  }
}

export default JobExperienceForm;
