import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="leadership">
      <div className="container">
        <div className="section-label">Leadership &amp; Teaching</div>
        {experience.map((e) => (
          <div className="compact-entry" key={e.title}>
            <div className="entry-head">
              <h3>{e.title}</h3>
              <span className="entry-dates">{e.dates}</span>
            </div>
            <div className="entry-org">{e.org}</div>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
