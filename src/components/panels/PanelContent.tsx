import AboutContent from "./AboutContent";
import ServicesContent from "./ServicesContent";
import PortfolioContent from "./PortfolioContent";
import ResumeContent from "./ResumeContent";
import BlogContent from "./BlogContent";
import ContactContent from "./ContactContent";

type PanelContentProps = {
  title: string;
};

export default function PanelContent({ title }: PanelContentProps) {
  switch (title) {
    case "About":
      return <AboutContent />;

    case "Services":
      return <ServicesContent />;

    case "Portfolio":
      return <PortfolioContent />;

    case "Resume":
      return <ResumeContent />;

    case "Blog":
      return <BlogContent />;

    case "Contact":
      return <ContactContent />;

    default:
      return null;
  }
}
