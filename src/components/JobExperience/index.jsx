import { Component, useState } from 'react';
import NamedInput from '../NamedInput';
import React from 'react';
import FormBlock from '../FormBlock';
import style from './../../styles/jobExperience.css';

/**
 * @typedef {Object} JobExperienceProps
 * @property {Boolean} disabled
 */

/**
 * @param {JobExperienceProps} props
 */
function JobExperience(props) {
  return (
    <article className="job-entry__flex">
      {/* this is cheating: this component should really have no 
        knowledge of CSS classes that belong to FormBlock component */}
      <div className="date-range">
        <NamedInput
          name="From"
          type="date"
          disabled={props.disabled}
        ></NamedInput>
        <NamedInput
          name="To"
          type="date"
          disabled={props.disabled}
        ></NamedInput>
      </div>
      <NamedInput name="Company name" type="text" required={true}></NamedInput>
      <NamedInput name="Position" type="text" required={true}></NamedInput>
      <div className="textarea__flex">
        <label htmlFor="responsibility">Job Responsibilities:</label>
        <textarea name="responsibility" maxLength={1000} rows={4}></textarea>
      </div>
    </article>
  );
}

export default function JobExperienceForm(props) {
  const [jobCount, setJobCount] = useState(1);

  const handleClick = () => setJobCount((prevCount) => prevCount + 1);

  return (
    <FormBlock
      name="Job experience"
      buttons={[{ displayName: 'Add new', handleClick: handleClick }]}
    >
      {Array(jobCount)
        .fill(null)
        .map((_, i) => (
          <JobExperience key={i} disabled={props.disabled}></JobExperience>
        ))}
    </FormBlock>
  );
}
