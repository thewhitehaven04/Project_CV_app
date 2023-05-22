import React from 'react';
import { Component } from 'react';
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
 * @class
 * @augments Component<NamedSelectProps>
 */
class NamedSelect extends Component {
  render() {
    return (
      <label className="select__flex">
        {this.props.name}:
        <select name={toCamelCase(this.props.name)}>
          {this.props.data.map((entry) => {
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
}

export default NamedSelect;
