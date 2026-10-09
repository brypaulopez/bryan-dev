import AboutContent from "./AboutContent";
import ServicesContent from "./ServicesContent";
import PortfolioContent from "./PortfolioContent";
import ResumeContent from "./ResumeContent";
import BlogContent from "./BlogContent";
import ContactContent from "./ContactContent";

type PanelContentProps = {
  title: string;
  onCaseStudyModalChange?: (isOpen: boolean) => void;
};

export default function PanelContent({
  title,
  onCaseStudyModalChange,
}: PanelContentProps) {
  switch (title) {
    case "About":
      return <AboutContent />;

    case "Services":
      return <ServicesContent />;

    case "Portfolio":
      return (
        <PortfolioContent onCaseStudyModalChange={onCaseStudyModalChange} />
      );

    case "Resume":
      return <ResumeContent />;

    case "Blog":
      return <BlogContent onCaseStudyModalChange={onCaseStudyModalChange} />;

    case "Contact":
      return <ContactContent />;

    default:
      return null;
  }
}
