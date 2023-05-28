import React, { Component } from 'react';
import FormBlock from '../FormBlock';
import NamedInput from '../NamedInput';
import style from './../../styles/educationForm.css';
import NamedSelect from '../NamedSelect';
import { toCamelCase } from '../../utils/strings';

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
 * @param {EducationFormProps} props
 */
export default function EducationFormBlock(props) {
  return (
    <FormBlock name={props.educationType}>
      <div className="date-range">
        <NamedInput
          name='From'
          type="date"
          required={true}
        ></NamedInput>
        <NamedInput
          name='To'
          type="date"
          required={true}
        ></NamedInput>
      </div>
      <NamedSelect
        name={props.educationType}
        data={props.institutions}
      ></NamedSelect>
    </FormBlock>
  );
}