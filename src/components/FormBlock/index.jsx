import { Component } from 'react';
import React from 'react';
import style from './../../styles/formBlock.css';

/**
 * @typedef {Object} FormBlockProps 
 * @property {String} name
 * @property {{
 *  displayName: String, 
 *  handleClick: function(): void
 * }[]
 * } buttons 
 */

/**
 * @class
 * @augments Component<FormBlockProps>
 */
class FormBlock extends Component {
  render() {
    return (
      <fieldset className="form-block">
        <div className="form-block__header">
          <legend>
            <h2>{this.props.name}</h2>
          </legend>
          {!!this.props.buttons && (
            <div className="form-block__header-buttons">
              {this.props.buttons.map((b) => {
                return (
                  <button type="button" onClick={b.handleClick}>
                    {b.displayName}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        {this.props.children}
      </fieldset>
    );
  }
}

export default FormBlock;
