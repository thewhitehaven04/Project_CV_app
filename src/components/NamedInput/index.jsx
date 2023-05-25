import React from 'react';
import { Component } from 'react';
import style from './../../styles/namedInput.css';
import { toCamelCase } from '../../utils/strings';

/**
 * @typedef {Object} NamedInputProps
 * @property {String} name
 * @property {String} type
 * @property {Boolean} [disabled]
 * @property {Boolean} [required]
 * @property {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} [inputProps]
 */

/**
 * @class
 * @extends {Component<NamedInputProps>}
 */
export default class NamedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { required, name, type, disabled, inputProps } = this.props;

    return (
      <div className="named-input__flex">
        <label
          className={
            'named-input__flex' + (required ? ' named-input__required' : '')
          }
        >
          {name}:
        </label>
        {disabled ? (
          <span>{this.state.value}</span>
        ) : (
          <input
            {...inputProps}
            type={type}
            name={toCamelCase(name)}
            id={toCamelCase(name)}
            onChange={this.handleChange}
            value={this.state.value}
            className='named-input'
            required={true}
          ></input>
        )}
      </div>
    );
  }
}
