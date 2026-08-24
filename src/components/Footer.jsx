import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <h2>Get in touch</h2>
        <p>
          I'm looking for opportunities in nuclear engineering, reactor
          physics, and computational/simulation roles. Feel free to reach
          out.
        </p>
        <div className="links">
          <a className="pill primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="pill" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="pill" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="fine-print">
          {profile.name} &middot; {profile.location}
        </div>
      </div>
    </footer>
  );
}
