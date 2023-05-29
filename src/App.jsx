import './App.css';
import React, { useState } from 'react';
import CVHeader from './components/Header';
import GeneralFormBlock from './components/GeneralForm';
import EducationFormBlock from './components/EducationForm';
import {
  SCHOOL_INSTITUTIONS,
  TERTIARY_EDUCATION_INSTITUTIONS,
} from './data/institutions';
import JobExperienceFormBlock from './components/JobExperience';
import SkillsBlock from './components/SkillsBlock';

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Object.fromEntries([...new FormData(e.target).entries()]));
    setIsEditing(false);
  };

  const handleEdit = (e) => {
    setIsEditing(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} method="POST" encType="text/plain">
        <CVHeader isEditing={isEditing} handleEdit={handleEdit} />
        <GeneralFormBlock disabled={!isEditing} />
        <EducationFormBlock
          educationType="Primary/Secondary education"
          institutions={SCHOOL_INSTITUTIONS}
        />
        <EducationFormBlock
          educationType="Tertiary education"
          institutions={TERTIARY_EDUCATION_INSTITUTIONS}
        />
        <JobExperienceFormBlock />
        <SkillsBlock />
      </form>
    </div>
  );
}

export default App;
