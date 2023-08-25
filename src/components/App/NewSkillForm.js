import React, { useState } from 'react';

import './NewSkillForm.css';

export default function NewSkillForm({ addSkill }) {
  const initialFormState = {
    name: '',
    level: 3,
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSkill(formState);
    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Skill</label>
      <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
      <label>Level</label>
      <select name="level" value={formState.level} onChange={handleInputChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
