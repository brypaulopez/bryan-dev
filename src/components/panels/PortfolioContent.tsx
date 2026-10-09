import { useState, useEffect } from "react";
import "../styles/portoflio.css";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  overview: string;
  role: string;
  visual: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Multo",
    category: "GOVERNMENT · GIS · WEB SYSTEM",
    description:
      "A web-based management and GIS platform developed for the Special Action Force to manage operational information, assets, activities, and geographic data.",
    technologies: [
      "React",
      "TypeScript",
      "GIS",
      "APIs",
      "Database",
      "Web Application",
    ],
    overview:
      "Multo serves as a centralized platform for managing operational information. One of its core capabilities is GIS, allowing coordinates received from operations to be encoded and visualized on a map. This gives personnel a clearer geographic view when planning movements, operations, and responses.",
    role: "Worked across the web application and system functionality, including frontend development, API integration, data handling, GIS-related features, and system modules.",
    visual: "gis",
  },

  {
    number: "02",
    title: "San Pedro Smart City",
    category: "MOBILE · IoT · GIS · EMERGENCY RESPONSE",
    description:
      "A citizen-focused mobile platform connecting residents with digital identification, emergency response, and city monitoring systems.",
    technologies: [
      "Mobile App",
      "GIS",
      "IoT",
      "CCTV",
      "OCR",
      "APIs",
      "Real-time Monitoring",
    ],
    overview:
      "The application gives San Pedro citizens access to digital identity and city services while also providing an emergency response channel. An emergency request can transmit the citizen's location to the city's monitoring center, where personnel can review the incident and coordinate the appropriate response.",
    role: "Worked on application functionality, emergency-response flows, monitoring integrations, data visualization, and supporting system integrations.",
    visual: "smart-city",
  },

  {
    number: "03",
    title: "IRIS",
    category: "DESKTOP · ELECTRON · RABBITMQ",
    description:
      "A digital signage and video management system allowing operators to control what content is displayed on connected screens.",
    technologies: [
      "Electron",
      "RabbitMQ",
      "Mini PC",
      "APIs",
      "MinIO",
      "Database",
    ],
    overview:
      "IRIS allows operators to manage advertisements and videos displayed on connected televisions. Content can be scheduled, played in a loop, stopped at a defined time, or triggered immediately when something needs to be shown right away.",
    role: "Worked with the Electron desktop application, communication between the central system and Mini PC players, API integration, and the message-based architecture used to control playback.",
    visual: "iris",
  },

  {
    number: "04",
    title: "Neybors",
    category: "WEB · MOBILE · COMMUNITY PLATFORM",
    description:
      "A customizable community platform designed around the services and operational needs of individual condominium communities.",
    technologies: [
      "React",
      "APIs",
      "Mobile",
      "Web",
      "Back Office",
      "Community Systems",
    ],
    overview:
      "Neybors provides residents with a digital platform for services within their community. Each deployment can be customized around the needs of the specific condominium. The ecosystem also includes Neybors Konek for guards and staff, along with a back-office system for administrators.",
    role: "Worked on web application functionality, interfaces, integrations, and features across the broader Neybors platform.",
    visual: "neybors",
  },

  {
    number: "05",
    title: "Clibase POS",
    category: "ANDROID · KOTLIN · POS",
    description:
      "Android-based point-of-sale development involving mobile interfaces, business workflows, and hardware integration.",
    technologies: [
      "Kotlin",
      "Android",
      "XML",
      "Android Studio",
      "POS",
      "Hardware Integration",
    ],
    overview:
      "Clibase POS is an Android-based point-of-sale system built around the requirements of business operations. The work involved Android application development as well as interaction with POS hardware and peripherals.",
    role: "Worked with Kotlin, Android XML layouts, application functionality, debugging, and POS-related integrations.",
    visual: "pos",
  },

  {
    number: "06",
    title: "MPOS · ForestLake",
    category: "MOBILE · IONIC · ANDROID · BLUETOOTH",
    description:
      "A mobile point-of-sale system involving hybrid mobile development and Bluetooth printer integration.",
    technologies: [
      "Ionic",
      "Capacitor",
      "Cordova",
      "Android",
      "Bluetooth",
      "Thermal Printer",
    ],
    overview:
      "The MPOS project extends point-of-sale functionality into a mobile environment. A major part of the work involved connecting the application with Bluetooth printing hardware and troubleshooting communication between the mobile application and peripheral devices.",
    role: "Worked with Ionic, Capacitor/Cordova, Android integration, Bluetooth communication, and troubleshooting printer-related functionality.",
    visual: "mpos",
  },

  {
    number: "07",
    title: "Clibase Revamp",
    category: "PHP · CODEIGNITER · MYSQL · WEB",
    description:
      "A website modernization project currently in progress, focused on rebuilding and improving the Clibase web experience.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "JavaScript"],
    overview:
      "The Clibase Revamp is an ongoing web development project focused on improving the company's existing website and structure. More project details and visuals will be added as the implementation progresses.",
    role: "Currently working on the website structure, frontend implementation, PHP-based functionality, and integration with the existing project architecture.",
    visual: "website",
  },
];

type PortfolioContentProps = {
  onCaseStudyModalChange?: (isOpen: boolean) => void;
};

const PortfolioContent = ({
  onCaseStudyModalChange,
}: PortfolioContentProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    onCaseStudyModalChange?.(selectedProject !== null);
  }, [selectedProject, onCaseStudyModalChange]);

  useEffect(() => {
    return () => {
      onCaseStudyModalChange?.(false);
    };
  }, [onCaseStudyModalChange]);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-content">
      <header className="portfolio-header">
        <div>
          <span className="portfolio-eyebrow">SELECTED WORK</span>

          <h2>
            Things I've built
            <span> and worked on.</span>
          </h2>
        </div>

        <p>
          A collection of systems and applications spanning web development,
          mobile applications, desktop software, GIS, IoT, integrations, and
          project-based development.
        </p>
      </header>

      <section className="portfolio-projects">
        {projects.map((project) => (
          <article className="portfolio-project" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button
                className="project-button"
                onClick={() => setSelectedProject(project)}
              >
                VIEW CASE STUDY <span>↗</span>
              </button>
            </div>

            <div className={`project-visual visual-${project.visual}`}>
              <div className="visual-inner">
                {project.visual === "gis" && (
                  <>
                    <div className="visual-label">GIS OPERATIONS</div>

                    <div className="map-grid">
                      <span className="map-road road-one" />
                      <span className="map-road road-two" />
                      <span className="map-road road-three" />

                      <span className="map-pin pin-one">●</span>
                      <span className="map-pin pin-two">●</span>
                      <span className="map-pin pin-three">●</span>

                      <div className="map-panel">
                        <small>OPERATION DATA</small>
                        <strong>LOCATION</strong>
                        <span>COORDINATES → MAP</span>
                      </div>
                    </div>
                  </>
                )}

                {project.visual === "smart-city" && (
                  <>
                    <div className="smart-node citizen-node">
                      <small>CITIZEN</small>
                      <strong>Emergency</strong>
                    </div>

                    <div className="smart-line line-a" />

                    <div className="smart-node center-node">
                      <small>NDRRMC</small>
                      <strong>MONITORING</strong>
                    </div>

                    <div className="smart-line line-b" />

                    <div className="smart-node response-node">
                      <small>RESPONSE</small>
                      <strong>DISPATCH</strong>
                    </div>

                    <div className="smart-sensor">
                      <span>WATER LEVEL</span>
                      <strong>MONITORING</strong>
                    </div>
                  </>
                )}

                {project.visual === "iris" && (
                  <>
                    <div className="iris-box iris-admin">
                      <small>CONTROL</small>
                      <strong>IRIS</strong>
                    </div>

                    <span className="iris-arrow">→</span>

                    <div className="iris-box iris-rabbit">
                      <small>MESSAGE</small>
                      <strong>RABBITMQ</strong>
                    </div>

                    <span className="iris-arrow">→</span>

                    <div className="iris-box iris-player">
                      <small>PLAYER</small>
                      <strong>MINI PC</strong>
                    </div>

                    <div className="iris-screen">
                      <span>VIDEO</span>
                    </div>
                  </>
                )}

                {project.visual === "neybors" && (
                  <>
                    <div className="neybors-phone">
                      <div className="phone-top" />
                      <span>NEYBORS</span>
                      <strong>COMMUNITY</strong>
                      <small>Resident App</small>
                    </div>

                    <div className="neybors-connect">↔</div>

                    <div className="neybors-stack">
                      <div>NEYBORS KONEK</div>
                      <div>BACK OFFICE</div>
                      <div>COMMUNITY SERVICES</div>
                    </div>
                  </>
                )}

                {project.visual === "pos" && (
                  <>
                    <div className="pos-terminal">
                      <div className="pos-screen">
                        <span>CLIBASE</span>
                        <strong>₱ 1,250.00</strong>
                        <small>PAYMENT READY</small>
                      </div>
                      <div className="pos-base" />
                    </div>

                    <div className="pos-items">
                      <span>PRODUCT</span>
                      <span>PAYMENT</span>
                      <span>RECEIPT</span>
                    </div>
                  </>
                )}

                {project.visual === "mpos" && (
                  <>
                    <div className="mpos-phone">
                      <small>MPOS</small>
                      <strong>₱ 850.00</strong>
                      <span>PAYMENT COMPLETE</span>
                    </div>

                    <div className="bluetooth-wave">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="printer">
                      <div className="paper">RECEIPT</div>
                      <span>BLUETOOTH PRINTER</span>
                    </div>
                  </>
                )}

                {project.visual === "website" && (
                  <div className="website-browser">
                    <div className="browser-bar">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="website-layout">
                      <span />
                      <strong>CLIBASE</strong>
                      <small>WEBSITE REVAMP</small>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {selectedProject && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div
            className="portfolio-modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close case study"
            >
              ×
            </button>

            <div className="modal-heading">
              <span>{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
            </div>

            <div className={`modal-visual visual-${selectedProject.visual}`}>
              <div className="visual-inner">
                {selectedProject.visual === "gis" && (
                  <div className="modal-architecture">
                    <div>OPERATION COORDINATES</div>
                    <span>↓</span>
                    <div>GIS / DATABASE</div>
                    <span>↓</span>
                    <div>MAP VISUALIZATION</div>
                    <span>↓</span>
                    <div>OPERATION PLANNING</div>
                  </div>
                )}

                {selectedProject.visual === "smart-city" && (
                  <div className="modal-architecture smart-architecture">
                    <div>CITIZEN APP</div>
                    <span>→</span>
                    <div>NDRRMC MONITORING</div>
                    <span>→</span>
                    <div>HUMAN RESPONSE</div>

                    <small>
                      Emergency location → Map alert → Verification → Dispatch →
                      Resolution
                    </small>
                  </div>
                )}

                {selectedProject.visual === "iris" && (
                  <div className="modal-architecture">
                    <div>IRIS CONTROL</div>
                    <span>↓</span>
                    <div>RABBITMQ</div>
                    <span>↓</span>
                    <div>MINI PC + ELECTRON</div>
                    <span>↓</span>
                    <div>DISPLAY / TV</div>
                  </div>
                )}

                {selectedProject.visual === "neybors" && (
                  <div className="modal-architecture">
                    <div>RESIDENT APP</div>
                    <span>↕</span>
                    <div>NEYBORS PLATFORM</div>
                    <span>↕</span>
                    <div>STAFF + BACK OFFICE</div>
                  </div>
                )}

                {selectedProject.visual === "pos" && (
                  <div className="modal-architecture">
                    <div>ANDROID APP</div>
                    <span>↓</span>
                    <div>POS WORKFLOW</div>
                    <span>↓</span>
                    <div>HARDWARE / PERIPHERALS</div>
                  </div>
                )}

                {selectedProject.visual === "mpos" && (
                  <div className="modal-architecture">
                    <div>MOBILE POS</div>
                    <span>↓</span>
                    <div>BLUETOOTH</div>
                    <span>↓</span>
                    <div>THERMAL PRINTER</div>
                  </div>
                )}

                {selectedProject.visual === "website" && (
                  <div className="modal-architecture">
                    <div>PHP / CODEIGNITER</div>
                    <span>↓</span>
                    <div>WEBSITE</div>
                    <span>↓</span>
                    <div>MYSQL</div>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-body">
              <section>
                <span className="modal-label">WHAT IT WAS</span>
                <p>{selectedProject.overview}</p>
              </section>

              <section>
                <span className="modal-label">MY CONTRIBUTION</span>
                <p>{selectedProject.role}</p>
              </section>

              <section>
                <span className="modal-label">TECHNOLOGIES</span>

                <div className="modal-technologies">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioContent;
