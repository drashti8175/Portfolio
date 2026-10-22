export default function Skills({ skillList }) {
  return (
    <section id="skills">
      <h2>My <span>Skills</span></h2>
      <div className="skills-grid">
        {skillList.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
