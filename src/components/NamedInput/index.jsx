import React, { useContext, useState } from 'react';
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
 * @param {NamedInputProps} props
 */
export default function NamedInput(props) {
  const [value, setValue] = useState('');
  const { required, name, type, disabled, inputProps } = props;

  const handleChange = (e) => setValue(e.target.value);

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
        <span>{value !== '' ? value : 'N/A'}</span>
      ) : (
        <input
          {...inputProps}
          type={type}
          name={toCamelCase(name)}
          id={toCamelCase(name)}
          onChange={handleChange}
          value={value}
          className="named-input"
          required={required}
        ></input>
      )}
    </div>
  );
}
