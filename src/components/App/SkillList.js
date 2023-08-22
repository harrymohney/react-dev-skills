import React from 'react';
import SkillListItem from './SkillListItem';
import './SkillList.css';

function SkillList({ skills }) {
  return (
    <ul className="SkillList">
      {skills.map((skill, index) => (
        <SkillListItem key={index} skill={skill} />
      ))}
    </ul>
  );
}


export default SkillList;
