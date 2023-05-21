import React, { Component } from 'react';
import NamedInput from '../NamedInput';
import FormBlock from '../FormBlock';

class GeneralForm extends Component {
  render() {
    return (
      <FormBlock name="General">
        <NamedInput
          name="First name"
          type="text"
          required={true}
          inputProps={{ disabled: this.props.disabled }}
        ></NamedInput>
        <NamedInput
          name="Last name"
          type="text"
          required={true}
          inputProps={{ disabled: this.props.disabled }}
        ></NamedInput>
        <NamedInput
          name="Email"
          type="email"
          inputProps={{ disabled: this.props.disabled }}
        ></NamedInput>
        <NamedInput
          type="tel"
          name="Phone"
          inputProps={{ disabled: this.props.disabled }}
        ></NamedInput>
      </FormBlock>
    );
  }
}

export default GeneralForm;
