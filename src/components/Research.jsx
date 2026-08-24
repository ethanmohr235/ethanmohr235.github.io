import { research } from "../data/content.js";

export default function Research() {
  return (
    <section id="research">
      <div className="container">
        <div className="section-label">Research</div>
        {research.map((r) => (
          <div className="entry" key={r.title}>
            <div className="entry-head">
              <h3>{r.title}</h3>
              <span className="entry-dates">{r.dates}</span>
            </div>
            <div className="entry-org">
              {r.org} &middot; {r.location}
            </div>
            <p>{r.description}</p>
            <ul>
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="tag-row">
              {r.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
