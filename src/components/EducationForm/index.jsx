import React, { Component } from 'react';
import FormBlock from '../FormBlock';
import NamedInput from '../NamedInput';
import style from './../../styles/educationForm.css';
import NamedSelect from '../NamedSelect';

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
class EducationFormBlock extends Component {
  render() {
    return (
      <FormBlock name={this.props.educationType}>
        <div className="date-range">
          <NamedInput name="From" type="date" required={true}></NamedInput>
          <NamedInput name="To" type="date" required={true}></NamedInput>
        </div>
        <NamedSelect
          name={this.props.educationType}
          data={this.props.institutions}
        ></NamedSelect>
      </FormBlock>
    );
  }
}

export default EducationFormBlock;
