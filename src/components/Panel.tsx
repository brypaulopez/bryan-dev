// src/components/Panel.tsx
import { useState, useRef, useEffect } from "react";
import PanelContent from "./panels/PanelContent";
import { SOCIAL_LINKS } from "../data/socialLinks";

const NAVIGATION = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Resume",
  "Blog",
  "Contact",
];

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
  onExpand,
  onNavigate,
}: PanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const width = window.innerWidth;
  const marqueeText = PANEL_MARQUEE[title] || `${title} • `;
  const isHome = title === "Home";

  useEffect(() => {
    setIsHovered(false);
  }, [isExpanded]);

  const handleClick = (e: React.MouseEvent, a: string) => {
    e.stopPropagation(); // Prevent container click

    if (isHome) {
      onNavigate("Home");
      return;
    }

    onExpand(title);

    if (a === "Close") {
      onNavigate("Home");
      return;
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
      Home: "#05070A",
      About: "#08111F",
      Services: "#0B1F3A",
      Portfolio: "#123A66",
      Resume: "#1D5A96",
      Blog: "#2F80C9",
      Contact: "#6BB6E8",
    };
    return colors[title] || "#333";
  };

  // Calculate flex value
  const getFlexValue = () => {
    if (isHome) return "0 0 80px";
    if (isExpanded) return "1 1 100%";
    if (isHovered) return "2 1 0%";
    return "1 1 0%";
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
    >
      {/* Vertical Title (hidden when expanded) */}
      {!isHome && !isExpanded && <h1 className="vertical-text">{title}</h1>}

      {/* Home Panel: Always shows name + icon */}
      {isHome && (
        <div
          className="home-content"
          onClick={(e) => handleClick(e, isExpanded ? "Close" : "Expand")}
        >
          <h1 className="home-name">Bryan</h1>

          <span className="home-role">Developer</span>
          {!isExpanded && (
            <nav className="home-navigation">
              {NAVIGATION.map((item) => (
                <button
                  key={item}
                  className="home-navigation-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(item);
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
          <div className="home-navigation-divider" />
          <div className="home-navigation-social">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home-navigation-social-link"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {isExpanded && width > 768 ? (
                  <span>{social.name}</span>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}icons/${social.name}.svg`}
                    className="social-icon"
                    alt={social.name}
                  />
                )}

                <span className="home-navigation-social-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="home-icon">
            <img
              className={isExpanded ? "home-logo-expanded" : "home-logo"}
              src={`${import.meta.env.BASE_URL}bryan-logo.png`}
              alt="Bryan Lopez"
            />
          </div>
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

            {isExpanded && <PanelContent title={title} />}
          </div>

          {/* Click hint / Close button */}
          <button
            className="panel-action-btn"
            onClick={(e) => handleClick(e, isExpanded ? "Close" : "Expand")}
          >
            {isExpanded ? "Close" : "Expand"}
          </button>
        </div>
      )}
    </section>
  );
}
