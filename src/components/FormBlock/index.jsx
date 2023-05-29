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
 * @param {FormBlockProps} props
 */
export default function FormBlock(props) {
  return (
    <fieldset className="form-block">
      <div className="form-block__header">
        <legend>
          <h2>{props.name}</h2>
        </legend>
        {!!props.buttons && (
          <div className="form-block__header-buttons">
            {props.buttons.map((b) => {
              return (
                <button
                  type="button"
                  onClick={b.handleClick}
                  key={b.displayName}
                >
                  {b.displayName}
                </button>
              );
            })}
          </div>
        )}
      </div>
      {props.children}
    </fieldset>
  );
}