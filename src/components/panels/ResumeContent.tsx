import "../styles/resume.css";

const ResumeContent = () => {
  const resumePath = `${import.meta.env.BASE_URL}Bryan-Lopez-Resume.pdf`;

  const resumePage1 = `${import.meta.env.BASE_URL}resume/resume-page-1.png`;
  const resumePage2 = `${import.meta.env.BASE_URL}resume/resume-page-2.png`;

  return (
    <div className="resume-content">
      {/* Header */}
      <div className="resume-header">
        <div>
          <span className="resume-eyebrow">MY RESUME</span>

          <h2>Experience, skills & background.</h2>

          <span className="resume-page-count">02 PAGES</span>

          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download"
          >
            OPEN PDF ↗
          </a>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="resume-document">
        {/* Page 01 */}
        <div className="resume-page">
          <img
            src={resumePage1}
            alt="Bryan Lopez Resume — Page 1"
            className="resume-page-image"
          />

          <span className="resume-page-number">01</span>
        </div>

        {/* Page 02 */}
        <div className="resume-page">
          <img
            src={resumePage2}
            alt="Bryan Lopez Resume — Page 2"
            className="resume-page-image"
          />

          <span className="resume-page-number">02</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
