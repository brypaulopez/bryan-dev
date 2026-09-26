import Navbar from "../components/navigation/Navbar";
import "../components/styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">
        <section className="about-hero">
          <span className="about-eyebrow">ABOUT ME</span>

          <h1>
            I build software
            <br />
            that solves problems.
          </h1>

          <p>
            I'm Bryan, a software engineer focused on building modern web
            applications, APIs, and digital experiences.
          </p>
        </section>

        <section className="about-story">
          <h2>My Story</h2>

          <p>
            I'm a developer with experience across frontend, backend, APIs,
            databases, and product development.
          </p>
        </section>
      </main>
    </div>
  );
}
