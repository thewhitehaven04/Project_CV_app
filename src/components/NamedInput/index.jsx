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
 * @property {String} type 
 * @property {Boolean} [required] 
 * @property {Object} [inputProps]
 */

/**
 * @class
 * @extends {Component<NamedInputProps>}
 */
export default class NamedInput extends Component {
  render() {
    const { required, name, type, inputProps } = this.props;

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
          {...inputProps}
          type={type}
          name={toCamelCase(name)}
        ></input>
      </div>
    );
  }
}
