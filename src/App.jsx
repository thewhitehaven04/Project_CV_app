import './App.css';
import React, { Component } from 'react';
import CVHeader from './components/Header';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
import { TERTIARY_EDUCATION_INSTITUTIONS } from './data/institutions';

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
    const disabled = !this.state.isEditing;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} method="POST" encType="text/plain">
          <CVHeader
            isEditing={this.state.isEditing}
            handleEdit={this.handleEdit}
          ></CVHeader>
          <GeneralForm disabled={disabled}></GeneralForm>
          <EducationForm
            educationType="Primary/Secondary education"
            institutions={TERTIARY_EDUCATION_INSTITUTIONS}
          ></EducationForm>
          <EducationForm
            educationType="Tertiary education"
            institutions={TERTIARY_EDUCATION_INSTITUTIONS}
          ></EducationForm>
        </form>
      </div>
    );
  }
}

export default App;
