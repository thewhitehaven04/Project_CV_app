import React, { Component } from 'react';
import NamedInput from '../NamedInput';
import FormBlock from '../FormBlock';

class GeneralForm extends Component {
  render() {
    return (
      <FormBlock name="General">
        <NamedInput
          inputType="text"
          name="First name"
          required={true}
          disabled={this.props.disabled}
        ></NamedInput>
        <NamedInput
          inputType="text"
          name="Last name"
          required={true}
          disabled={this.props.disabled}
        ></NamedInput>
        <NamedInput
          inputType="email"
          name="Email"
          disabled={this.props.disabled}
        ></NamedInput>
        <NamedInput
          inputType="tel"
          name="Phone"
          disabled={this.props.disabled}
        ></NamedInput>
      </FormBlock>
    );
  }
}

export default GeneralForm;
