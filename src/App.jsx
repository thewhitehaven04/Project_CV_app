import './App.css';
import React, { Component } from 'react';
import CVHeader from './components/Header';
import GeneralFormBlock from './components/GeneralForm';
import EducationFormBlock from './components/EducationForm';
import { TERTIARY_EDUCATION_INSTITUTIONS } from './data/institutions';
import JobExperienceFormBlock from './components/JobExperience';

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
      isEditing: true,
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
          <GeneralFormBlock disabled={disabled}></GeneralFormBlock>
          <EducationFormBlock
            educationType="Primary/Secondary education"
            institutions={TERTIARY_EDUCATION_INSTITUTIONS}
          ></EducationFormBlock>
          <EducationFormBlock
            educationType="Tertiary education"
            institutions={TERTIARY_EDUCATION_INSTITUTIONS}
          ></EducationFormBlock>
          <JobExperienceFormBlock></JobExperienceFormBlock>
        </form>
      </div>
    );
  }
}

export default App;
