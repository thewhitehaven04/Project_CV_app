import React from 'react';
import { Component } from 'react';
import style from './../../styles/namedInput.css';

/** @param {String} str */
const toCamelCase = (str) => {
  const spaceSeparatedTokens = str.split(' ');
  const capitals = spaceSeparatedTokens
    .slice(1)
    .map((token) => token.substring(0, 1).toUpperCase() + token.substring(1));
  return spaceSeparatedTokens[0].toLowerCase().concat(...capitals);
};

/**
 * @typedef {Object} NamedInputProps
 * @property {String} name
 * @property {String} inputType
 * @property {Boolean} [disabled]
 * @property {Boolean} [required]
 */

/**
 * @class
 * @extends {Component<NamedInputProps>}
 */
export default class NamedInput extends Component {
  render() {
    const { name, inputType, disabled, required } = this.props;

    return (
      <div className="named-input__flex">
        <label
          className={
            'named-input__flex' + (required ? ' named-input__required' : '')
          }
        >
          {name}:
        </label>
        <input
          type={inputType}
          name={toCamelCase(name)}
          disabled={disabled}
          required={required}
        ></input>
      </div>
    );
  }
}
