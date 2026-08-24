import { profile } from "../data/content.js";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">About</div>
        <div className="about">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
