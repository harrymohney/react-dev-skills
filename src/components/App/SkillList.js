import SkillListItem from './SkillListItem';

export default function SkillList({ skills }) {
  return (
    <ul className="SkillList">
      {skills.map((skill, index) => (
        <SkillListItem key={index} skill={skill} />
      ))}
    </ul>
  );
}
