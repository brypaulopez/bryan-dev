// src/components/MainLayout.tsx
import { useState, useRef, useEffect } from "react";
import Panel from "./Panel";
import "./styles/main.css";

const PANELS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Resume",
  "Blog",
  "Contact",
];

export default function MainLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle panel expand/collapse
  const handlePanelExpand = (title: string) => {
    if (title === "Home") return; // Home never expands
    if (expandedPanel === title) {
      // Already expanded → trigger navigation
      handleNavigate(title);
    } else {
      // Expand new panel
      setIsTransitioning(true);
      setExpandedPanel(title);
      setTimeout(() => setIsTransitioning(false), 400); // Match CSS transition
    }
  };

  // Handle navigation after panel is clicked when expanded
  const handleNavigate = (title: string) => {
    // Scroll to section
    const panel = document.getElementById(`${title.toLowerCase()}-panel`);
    if (panel && containerRef.current) {
      containerRef.current.scrollTo({
        left: panel.offsetLeft - 80, // Offset for home sidebar
        behavior: "smooth",
      });
    }
    // Update URL
    window.history.pushState(null, "", `#${title.toLowerCase()}`);

    // Optional: collapse after navigation
    setExpandedPanel(null);
  };

  // Handle hash navigation on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const capitalized = hash.charAt(0).toUpperCase() + hash.slice(1);
    if (PANELS.includes(capitalized) && capitalized !== "Home") {
      setTimeout(() => {
        setExpandedPanel(capitalized);
        handleNavigate(capitalized);
      }, 100);
    }
  }, []);

  // Close expanded panel when clicking outside (on container)
  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current && expandedPanel) {
      setExpandedPanel(null);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`container ${isTransitioning ? "transitioning" : ""} ${expandedPanel ? "has-expanded" : ""}`}
      onClick={handleContainerClick}
    >
      {PANELS.map((title) => (
        <Panel
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
