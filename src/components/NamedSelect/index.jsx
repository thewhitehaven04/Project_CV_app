import React from 'react';
import { toCamelCase } from '../../utils/strings';
import style from './../../styles/namedSelect.css';

/**
 * @typedef SelectData
 * @property {String} name
 * @property {String} displayName
 */

/**
 * @typedef {Object} NamedSelectProps
 * @property {String} name
 * @property {SelectData[]} data
 */

/**
 * @param {NamedSelectProps} props
 */
export default function NamedSelect(props) {
  return (
    <label className="select__flex">
      {props.name}:
      <select name={toCamelCase(props.name)}>
        {props.data.map((entry) => {
          return (
            <option value={entry.name} key={entry.name}>
              {entry.displayName}
            </option>
          );
        })}
      </select>
    </label>
  );
}
