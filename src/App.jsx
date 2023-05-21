import './App.css';
import React, { Component } from 'react';
import GeneralData from './components/FormBlock';
import CVHeader from './components/Header';
import NamedInput from './components/NamedInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(Object.fromEntries([...new FormData(e.target).entries()]));

    this.setState({
      isEditing: false,
    });
  };

  handleEdit = (e) => {
    this.setState({
      isEditing: false,
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} method="POST" encType="text/plain">
          <CVHeader
            isEditing={this.state.isEditing}
            handleEdit={() => {
              console.log('handle');
            }}
          ></CVHeader>
          <GeneralData name="General">
            <NamedInput
              inputType="text"
              name="First name"
              required={true}
              disabled={!this.state.isEditing}
            ></NamedInput>
            <NamedInput
              inputType="text"
              name="Last name"
              required={true}
              disabled={!this.state.isEditing}
            ></NamedInput>
            <NamedInput
              inputType="email"
              name="Email"
              disabled={!this.state.isEditing}
            ></NamedInput>
            <NamedInput
              inputType="tel"
              name="Phone"
              disabled={!this.state.isEditing}
            ></NamedInput>
          </GeneralData>
        </form>
      </div>
    );
  }
}

export default App;
