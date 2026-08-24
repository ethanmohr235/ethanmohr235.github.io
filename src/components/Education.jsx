import { education } from "../data/content.js";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-label">Education</div>
        <div className="education-card">
          <div>
            <h3>{education.school}</h3>
            <div className="degree">
              {education.degree} &mdash; {education.focus}
            </div>
            <div className="meta">
              {education.gpa} &middot; {education.dates}
            </div>
            <div className="honors">{education.honors.join(" · ")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
