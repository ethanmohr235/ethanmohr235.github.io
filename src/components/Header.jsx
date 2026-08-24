import { profile } from "../data/content.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
