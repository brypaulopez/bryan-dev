import "../styles/about.css";

const AboutContent = () => {
  return (
    <div className="about-content">
      <section className="about-intro">
        <span className="about-eyebrow">ABOUT ME</span>

        <h2>
          Building things that are
          <span> useful, functional, and meaningful.</span>
        </h2>

        <p className="about-lead">
          I'm Bryan, a developer and project manager with a background in web
          development, software development, and technology-driven projects. I
          enjoy turning ideas into practical digital experiences—from
          applications and websites to systems designed to solve real-world
          problems.
        </p>
      </section>

      <section className="about-section">
        <h3>A little about me</h3>

        <p>
          My journey in technology started with development, where I learned how
          software works from the ground up. Over time, I became interested not
          only in writing code, but also in understanding the bigger picture:
          why something needs to be built, who it is for, and how it can
          actually make someone's work or experience better.
        </p>

        <p>
          That eventually led me into project management and technical
          coordination. Working across both sides of a project has given me a
          different perspective—I can understand technical requirements while
          also thinking about timelines, communication, usability, and the
          people ultimately using the product.
        </p>

        <p>
          I enjoy working on projects where technology has a clear purpose,
          especially when there is an opportunity to learn something new along
          the way.
        </p>
      </section>

      <section className="about-section">
        <h3>What I do</h3>

        <div className="about-grid">
          <div className="about-card">
            <span className="about-card-number">01</span>
            <h4>Web Development</h4>
            <p>
              Building responsive and modern web experiences using technologies
              such as React, TypeScript, PHP, Laravel, and MySQL.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-number">02</span>
            <h4>Software Development</h4>
            <p>
              Experience working with applications, APIs, databases, Android
              development, and systems that connect different technologies
              together.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-number">03</span>
            <h4>Project Management</h4>
            <p>
              Helping turn ideas into organized, actionable projects through
              planning, coordination, documentation, communication, and
              technical understanding.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-number">04</span>
            <h4>Problem Solving</h4>
            <p>
              I enjoy investigating problems, breaking them into smaller pieces,
              and finding practical solutions instead of simply working around
              them.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h3>My experience</h3>

        <p>
          I've worked across different types of technology projects, from
          business applications and web systems to projects involving mapping,
          smart-city technology, data, and connected devices.
        </p>

        <p>
          My development experience includes React and TypeScript, PHP and
          Laravel, MySQL, Node.js, Android development, and hybrid mobile
          technologies. I've also worked with tools and infrastructure such as
          Docker, RabbitMQ, Firebase, Cloudflare, and Nginx.
        </p>

        <p>
          On the project management side, I've worked with distributed teams and
          technology-focused projects involving research, planning, technical
          requirements, data workflows, and product development.
        </p>
      </section>

      <section className="about-section">
        <h3>Currently</h3>

        <p>
          I'm continuing to grow as a developer while expanding my skills in
          cloud technologies, DevOps, automation, and AI-assisted development.
          I'm especially interested in finding ways to combine development and
          project management to build better products from both the technical
          and business perspectives.
        </p>
      </section>

      <section className="about-section about-closing">
        <div>
          <span className="about-eyebrow">BEYOND THE CODE</span>

          <h3>
            Always learning.
            <br />
            Always building.
          </h3>

          <p>
            Technology changes quickly, and that's one of the things I enjoy
            most about this field. There's always another problem to solve,
            another technology to understand, and another idea worth building.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
