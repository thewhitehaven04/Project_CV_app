import { Component } from 'react';
import React from 'react';
import style from './../../styles/formBlock.css';

class FormBlock extends Component {
  render() {
    return (
      <fieldset className="form-block">
        <legend className="form-block__header">
          <h2>{this.props.name}</h2>
        </legend>
        {this.props.children}
      </fieldset>
    );
  }
}

export default FormBlock;
