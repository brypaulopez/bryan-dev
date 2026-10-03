import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "../styles/resume.css";

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const ResumeContent = () => {
  const [numPages, setNumPages] = useState<number>(0);

  const resumePath = `${import.meta.env.BASE_URL}Bryan-Lopez-Resume.pdf`;

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume-content">
      {/* Header */}
      <div className="resume-header">
        <div>
          <span className="resume-eyebrow">MY RESUME</span>

          <h2>Experience, skills & background.</h2>

          {numPages > 0 && (
            <span className="resume-page-count">
              {numPages} PAGE{numPages !== 1 ? "S" : ""}
            </span>
          )}
          <a
            href={`${import.meta.env.BASE_URL}Bryan-Lopez-Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download"
          >
            OPEN PDF ↗
          </a>
        </div>
      </div>
      {/* Actual PDF pages */}
      <div className="resume-document">
        <Document
          file={resumePath}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.error("PDF LOAD ERROR:", error);
          }}
          loading={<div className="resume-loading">Loading resume...</div>}
          error={<div className="resume-error">Unable to load resume.</div>}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div className="resume-page" key={`page_${index + 1}`}>
              <Page
                pageNumber={index + 1}
                width={900}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />

              <span className="resume-page-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default ResumeContent;
