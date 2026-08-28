import { useState } from "react";
import { featuredProject } from "../data/content.js";
import GraphMotif from "./GraphMotif.jsx";
import Lightbox from "./Lightbox.jsx";
import graphOverview from "../assets/monoss/graph-overview.png";
import graphDetail from "../assets/monoss/graph-detail.png";

const screenshots = [
  { src: graphOverview, alt: "MonOSS graph view showing motes and relationships across a garden" },
  { src: graphDetail, alt: "MonOSS detail panel showing a mote's properties and relationships" },
];

export default function FeaturedProject() {
  const p = featuredProject;
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="work">
      <div className="container">
        <div className="section-label">Featured Project</div>
        <div className="project-card">
          <GraphMotif className="motif motif-top-right" />
          <GraphMotif className="motif motif-bottom-left" />

          <div className="project-card-content">
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

            <div className="screenshot-row">
              {screenshots.map((shot) => (
                <button
                  key={shot.src}
                  className="screenshot-button"
                  onClick={() => setLightbox(shot)}
                  aria-label={`Enlarge: ${shot.alt}`}
                >
                  <img src={shot.src} alt={shot.alt} />
                </button>
              ))}
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
      </div>

      <Lightbox
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
