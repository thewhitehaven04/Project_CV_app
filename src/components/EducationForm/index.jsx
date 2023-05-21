import React, { Component } from 'react';
import FormBlock from '../FormBlock';
import NamedInput from '../NamedInput';
import style from './../../styles/educationForm.css';

/**
 * @typedef {Object} EducationFormProps
 * @property {String} educationType
 * @property {Institution[]} institutions
 */

/**
 * @typedef {Object} Institution
 * @property {String} name
 * @property {String} displayName
 */

/**
 * @class
 * @extends {Component<EducationFormProps>}
 */
class EducationForm extends Component {
  render() {
    return (
      <FormBlock name={this.props.educationType}>
        <div className="date-range">
          <NamedInput name="From" type="date" required={true}></NamedInput>
          <NamedInput name="To" type="date" required={true}></NamedInput>
        </div>
        <label className='select__flex'>
          Institution:
          <select name="institution">
            {this.props.institutions.map((institution) => {
              return (
                <option value={institution.name} key={institution.name}>
                  {institution.displayName}
                </option>
              );
            })}
          </select>
        </label>
      </FormBlock>
    );
  }
}

export default EducationForm;
