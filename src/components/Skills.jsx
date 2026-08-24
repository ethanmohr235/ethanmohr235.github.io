import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
