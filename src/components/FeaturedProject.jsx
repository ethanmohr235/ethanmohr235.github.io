import { useState } from "react";
import { featuredProject } from "../data/content.js";
import GraphMotif from "./GraphMotif.jsx";
import Lightbox from "./Lightbox.jsx";
import Carousel from "./Carousel.jsx";
import graphOverview from "../assets/monoss/graph-overview.png";
import graphDetail from "../assets/monoss/graph-detail.png";
import moraNotes from "../assets/monoss/mora-notes.png";
import monolithTable from "../assets/monoss/monolith-table.png";
import motionSimulator from "../assets/monoss/motion-simulator.png";

const screenshots = [
  {
    src: graphOverview,
    alt: "MonOSS graph view showing motes and relationships across a garden",
    caption: "Monarch — whole-garden graph view",
  },
  {
    src: graphDetail,
    alt: "MonOSS detail panel showing a mote's properties and relationships",
    caption: "Monarch — mote detail panel",
  },
  {
    src: moraNotes,
    alt: "Mora note editor showing a plain-text .modoc note with rendered math",
    caption: "Mora — the note editor",
  },
  {
    src: monolithTable,
    alt: "Monolith table view showing motes grouped by species and a relationship matrix",
    caption: "Monolith — the bulk-edit table, with its relationship matrix",
  },
  {
    src: motionSimulator,
    alt: "Motion simulation workbench showing a Rankine cycle rule graph and a run timeline",
    caption: "Motion — simulating a Rankine cycle",
  },
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

            <div className="apps-grid">
              {p.apps.map((app) => (
                <div className="app-card" key={app.name}>
                  <div className="app-card-head">
                    <h4>{app.name}</h4>
                    <span className="app-role">{app.role}</span>
                  </div>
                  <p>{app.description}</p>
                </div>
              ))}
            </div>

            <Carousel slides={screenshots} onEnlarge={setLightbox} />

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
