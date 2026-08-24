import { profile } from "../data/content.js";

export default function Hero() {
  return (
    <section id="top" className="hero no-border">
      <div className="container">
        <div className="eyebrow">{profile.role}</div>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <div className="links">
          <a className="pill primary" href="#work">
            View Work
          </a>
          <a className="pill" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="pill" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="pill" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
