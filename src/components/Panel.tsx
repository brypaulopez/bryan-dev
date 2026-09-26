// src/components/Panel.tsx
import { useState, useRef, type JSX } from "react";

// Icons (replace with lucide-react for production)
const PANEL_ICONS: Record<string, JSX.Element> = {
  Home: <span>🏠</span>,
  About: <span>👤</span>,
  Services: <span>⚙️</span>,
  Portfolio: <span>📁</span>,
  Resume: <span>📄</span>,
  Blog: <span>✍️</span>,
  Contact: <span>📧</span>,
};

const PANEL_MARQUEE: Record<string, string> = {
  Home: "Welcome • Let's create • ",
  About: "Everything about me • My story • My passion • ",
  Services: "Web dev • Design • Consulting • ",
  Portfolio: "My work • Projects • Case studies • ",
  Resume: "Experience • Skills • Education • ",
  Blog: "Latest thoughts • Articles • Tutorials • ",
  Contact: "Get in touch • Let's talk • Hello@me.com • ",
};

type PanelProps = {
  title: string;
  isExpanded: boolean;
  isHomeFixed?: boolean;
  onExpand: (title: string) => void;
  onNavigate: (title: string) => void;
};

export default function Panel({
  title,
  isExpanded,
  isHomeFixed = true,
  onExpand,
  onNavigate,
}: PanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const panelRef = useRef<HTMLElement>(null);

  const icon = PANEL_ICONS[title];
  const marqueeText = PANEL_MARQUEE[title] || `${title} • `;
  const isHome = title === "Home";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent container click

    if (isHome) {
      onNavigate("Home");
      return;
    }

    if (isExpanded) {
      // Already expanded → navigate
      onNavigate(title);
    } else {
      // Expand this panel
      onExpand(title);
    }
  };

  const handleMouseEnter = () => {
    if (!isExpanded && !isHome) {
      setIsHovered(true);
      // Optional: preview expand on hover
      // onExpand(title);
    }
  };

  const handleMouseLeave = () => {
    if (!isExpanded) {
      setIsHovered(false);
    }
  };

  const getBgColor = (title: string) => {
    const colors: Record<string, string> = {
      Home: "#111",
      About: "#6c2bd9",
      Services: "#f97316",
      Portfolio: "#ec4899",
      Resume: "#2563eb",
      Blog: "#fbbf24",
      Contact: "#16a34a",
    };
    return colors[title] || "#333";
  };

  // Calculate flex value
  const getFlexValue = () => {
    if (isHome) return "0 0 80px"; // Fixed sidebar
    if (isExpanded) return "1 1 100%"; // Full width
    if (isHovered) return "2 1 0%"; // Preview hover
    return "1 1 0%"; // Default collapsed
  };

  return (
    <section
      ref={panelRef}
      className={`panel ${title.toLowerCase()} ${isHovered ? "hovered" : ""} ${isExpanded ? "expanded" : ""} ${isHome ? "home-panel" : ""}`}
      id={`${title.toLowerCase()}-panel`}
      style={{
        backgroundColor: getBgColor(title),
        flex: getFlexValue(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Vertical Title (hidden when expanded) */}
      {!isHome && !isExpanded && <h1 className="vertical-text">{title}</h1>}

      {/* Home Panel: Always shows name + icon */}
      {isHome && (
        <div className="home-content">
          <h1 className="home-name">Bryan</h1>
          <span className="home-role">Developer</span>
          <div className="home-icon">{icon}</div>
        </div>
      )}

      {/* Expanded Content - Full screen overlay style */}
      {(isExpanded || isHovered) && !isHome && (
        <div className="panel-expanded-content">
          {/* Background overlay for depth */}
          <div className="panel-overlay" />

          {/* Marquee Text - Top */}
          <div className="marquee-wrapper">
            <div className="marquee-text">
              <span>{marqueeText}</span>
              <span>{marqueeText}</span>
            </div>
          </div>

          {/* Center Content (optional - for future content) */}
          <div className="panel-center">
            <h2 className="panel-heading">{title}</h2>
            {/* <p className="panel-subheading">Click to explore this section</p> */}
          </div>

          {/* Icon at Lower Left */}
          <div className="panel-icon-large">{icon}</div>

          {/* Click hint / Close button */}
          <button className="panel-action-btn">
            {isExpanded ? "Explore Section →" : "Expand"}
          </button>
        </div>
      )}
    </section>
  );
}
