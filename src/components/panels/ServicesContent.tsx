import "../styles/services.css";

const ServicesContent = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      tag: "FRONTEND + FULL STACK",
      description:
        "Modern, responsive websites and web applications designed around usability, performance, and maintainable code.",
      technologies: ["React", "TypeScript", "PHP", "Laravel", "MySQL"],
    },
    {
      number: "02",
      title: "Application Development",
      tag: "WEB + MOBILE + DESKTOP",
      description:
        "Applications that connect interfaces, APIs, databases, devices, and services into a complete working system.",
      technologies: ["React Native", "Android", "Kotlin", "Ionic", "Electron"],
    },
    {
      number: "03",
      title: "Backend & APIs",
      tag: "LOGIC + DATA",
      description:
        "Backend services and APIs that handle business logic, data, authentication, integrations, and communication between systems.",
      technologies: ["Laravel", "Node.js", "REST APIs", "MySQL", "Firebase"],
    },
    {
      number: "04",
      title: "Project Management",
      tag: "PLAN → BUILD → DELIVER",
      description:
        "Technical project coordination that connects requirements, people, priorities, documentation, and development.",
      technologies: [
        "Planning",
        "Requirements",
        "Documentation",
        "Coordination",
        "Delivery",
      ],
    },
    {
      number: "05",
      title: "System Integration",
      tag: "CONNECTING TECHNOLOGY",
      description:
        "Connecting different systems and services so they can communicate reliably and work together as one workflow.",
      technologies: [
        "RabbitMQ",
        "Docker",
        "Firebase",
        "Cloudflare",
        "Webhooks",
      ],
    },
    {
      number: "06",
      title: "Technical Problem Solving",
      tag: "DEBUG → UNDERSTAND → FIX",
      description:
        "Investigating technical problems from the application layer down to APIs, databases, devices, networking, and deployment.",
      technologies: [
        "Debugging",
        "Troubleshooting",
        "Performance",
        "Deployment",
        "Optimization",
      ],
    },
  ];

  return (
    <div className="services-content">
      {/* --------------------------------
          HEADER
      -------------------------------- */}

      <section className="services-header">
        <div>
          <span className="services-eyebrow">WHAT I CAN DO</span>

          <h2>
            Turning ideas into
            <span> working systems.</span>
          </h2>
        </div>

        <p>
          From interfaces and APIs to project coordination and system
          integration, I work across different parts of the development process
          to help turn an idea into something people can actually use.
        </p>
      </section>

      {/* --------------------------------
          SERVICE GRID
      -------------------------------- */}

      <section className="services-list">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <div className="service-top">
              <span className="service-number">{service.number}</span>
              <span className="service-tag">{service.tag}</span>
            </div>

            <div className="service-body">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-technologies">
                {service.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <span className="service-arrow">↗</span>
          </article>
        ))}
      </section>

      {/* --------------------------------
          WORKFLOW
      -------------------------------- */}

      <section className="services-workflow">
        <div className="workflow-heading">
          <span className="services-eyebrow">HOW I APPROACH A PROJECT</span>

          <h3>
            Understand first.
            <br />
            Build with purpose.
          </h3>
        </div>

        <div className="workflow-steps">
          <div className="workflow-step">
            <span>01</span>

            <div>
              <h4>Understand</h4>
              <p>
                Learn the problem, the users, the requirements, and what the
                project is actually trying to accomplish.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>02</span>

            <div>
              <h4>Plan</h4>
              <p>
                Break the project into manageable pieces, identify priorities,
                and determine the technical approach.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>03</span>

            <div>
              <h4>Build</h4>
              <p>
                Develop the solution while keeping the code, architecture, and
                user experience maintainable.
              </p>
            </div>
          </div>

          <div className="workflow-step">
            <span>04</span>

            <div>
              <h4>Improve</h4>
              <p>
                Test, troubleshoot, refine, and improve the result based on real
                usage and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------
          CLOSING
      -------------------------------- */}

      <section className="services-closing">
        <span className="services-eyebrow">LET'S BUILD</span>

        <h3>
          Got an idea?
          <br />
          Let's turn it into something real.
        </h3>

        <p>
          Whether it's a website, application, internal tool, API, or a larger
          technology project, I enjoy figuring out how the pieces fit together
          and building a practical solution.
        </p>
      </section>
    </div>
  );
};

export default ServicesContent;
