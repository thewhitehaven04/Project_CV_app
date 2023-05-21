import React from 'react';
import { Component } from 'react';
import style from './../../styles/header.css';

/**
 * @typedef {Object} HeaderProps
 * @property {Boolean} isEditing
 * @property {function(): void} handleEdit
 */

/**
 * @class
 * @extends {Component<HeaderProps>} 
 */
class CVHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <h1>CV Application</h1>
        <div className="header-controls__inline">
          <button type="submit">Submit</button>
          {!this.props.isEditing && (
            <button type="button" onClick={this.props.handleEdit}>
              Edit
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default CVHeader;
