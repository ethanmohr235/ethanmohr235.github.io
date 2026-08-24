import { featuredProject } from "../data/content.js";

export default function FeaturedProject() {
  const p = featuredProject;

  return (
    <section id="work">
      <div className="container">
        <div className="section-label">Featured Project</div>
        <div className="project-card">
          <div className="project-title">
            <h3>{p.name}</h3>
            <span className="project-subtitle">{p.fullName}</span>
          </div>
          <p className="summary">{p.summary}</p>
          <p>{p.description}</p>

          <div className="stat-row">
            {p.stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="value">{s.value}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>

          <ul>
            {p.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="screenshot-placeholder">
            Screenshot of the MonOSS graph UI goes here — drop image files into
            src/assets/monoss/ and reference them here.
          </div>

          <div className="tag-row">
            {p.stack.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>

          {p.links.github ? (
            <div className="project-links">
              <a href={p.links.github} target="_blank" rel="noreferrer">
                View on GitHub &rarr;
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
