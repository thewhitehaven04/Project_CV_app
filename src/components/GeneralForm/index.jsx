import React, { Component } from 'react';
import NamedInput from '../NamedInput';
import FormBlock from '../FormBlock';

/**
 * @typedef {Object} GeneralFormProps
 * @property {Boolean} disabled
 */

/**
 * @class 
 * @augments Component<GeneralFormProps>
 */
class GeneralFormBlock extends Component {
  render() {
    return (
      <FormBlock name="General">
        <NamedInput
          name="First name"
          type="text"
          required={true}
          disabled={this.props.disabled}
        ></NamedInput>
        <NamedInput
          name="Last name"
          type="text"
          required={true}
          disabled={this.props.disabled}
        ></NamedInput>
        <NamedInput
          name="Email"
          type="email"
          disabled={this.props.disabled}
        ></NamedInput>
        <NamedInput
          type="tel"
          name="Phone"
          disabled={this.props.disabled}
        ></NamedInput>
      </FormBlock>
    );
  }
}

export default GeneralFormBlock;
