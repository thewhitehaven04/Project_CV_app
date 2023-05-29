import React  from 'react';
import NamedInput from '../NamedInput';
import FormBlock from '../FormBlock';

/**
 * @typedef {Object} GeneralFormProps
 * @property {Boolean} disabled
 */

/**
 * @param {GeneralFormProps} props
 */
export default function GeneralFormBlock(props) {
  return (
    <FormBlock name="General">
      <NamedInput
        name="First name"
        type="text"
        required={true}
        disabled={props.disabled}
      ></NamedInput>
      <NamedInput
        name="Last name"
        type="text"
        required={true}
        disabled={props.disabled}
      ></NamedInput>
      <NamedInput
        name="Email"
        type="email"
        disabled={props.disabled}
      ></NamedInput>
      <NamedInput
        type="tel"
        name="Phone"
        disabled={props.disabled}
      ></NamedInput>
    </FormBlock>
  );
}
