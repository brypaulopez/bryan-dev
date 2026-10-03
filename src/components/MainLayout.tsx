// src/components/MainLayout.tsx
import { useState, useRef, useEffect } from "react";
import Panel from "./Panel";
import "./styles/main.css";
import { useLocation, useNavigate } from "react-router-dom";

const PANELS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Resume",
  "Blog",
  "Contact",
];

const ROUTES: Record<string, string> = {
  Home: "/",
  About: "/about",
  Services: "/services",
  Portfolio: "/portfolio",
  Resume: "/resume",
  Blog: "/blog",
  Contact: "/contact",
};

const getTitleFromPath = (pathname: string) => {
  if (pathname === "/") return "Home";

  const panel = PANELS.find((title) => ROUTES[title] === pathname);

  return panel || "Home";
};

export default function MainLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /*
   * Keep the expanded panel synchronized with the URL.
   *
   * /
   * /about
   * /services
   * etc.
   */
  useEffect(() => {
    const currentPanel = getTitleFromPath(location.pathname);

    setExpandedPanel(currentPanel);
  }, [location.pathname]);

  /*
   * Navigate to a panel.
   *
   * This changes the URL AND tells React Router to render
   * the corresponding state.
   */
  const handleNavigate = (title: string) => {
    const route = ROUTES[title];

    if (!route) return;

    setIsTransitioning(true);

    navigate(route);

    /*
     * Give the CSS animation time to finish.
     */
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  /*
   * Panel clicked while collapsed.
   *
   * We immediately route to it.
   * The URL becomes the source of truth.
   */
  const handlePanelExpand = (title: string) => {
    if (title === "Home") {
      handleNavigate("Home");
      return;
    }
    handleNavigate(title);
  };

  return (
    <div
      ref={containerRef}
      className={`container ${
        isTransitioning ? "transitioning" : ""
      } ${expandedPanel !== "Home" ? "has-expanded" : ""}`}
    >
      {PANELS.map((title) => (
        <Panel
          key={title}
          title={title}
          isExpanded={expandedPanel === title}
          isHomeFixed={title === "Home"}
          onExpand={handlePanelExpand}
          onNavigate={handleNavigate}
        />
      ))}
    </div>
  );
}
