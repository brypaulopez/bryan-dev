import { useState, useEffect } from "react";
import "../styles/blog.css";

type BlogPost = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string[];
};

const posts: BlogPost[] = [
  {
    date: "September 2026",
    category: "DEVELOPMENT",
    title: "From Building Features to Building Systems",
    excerpt:
      "What working across web applications, mobile apps, APIs, and infrastructure taught me about looking at software as a whole system.",
    readTime: "4 MIN READ",
    content: [
      "Early in my development journey, I naturally focused on the feature in front of me. A button needed to work, an API needed to return data, or a screen needed to look right.",
      "Working on larger systems changed that perspective. A feature rarely exists on its own. It usually depends on a database, an API, authentication, external services, background processes, deployment, and sometimes even physical hardware.",
      "Projects involving RabbitMQ, Electron, mobile applications, GIS, monitoring systems, and POS hardware pushed me to think beyond individual components. I started asking what happens before a request reaches the application, what happens after it leaves, and where failures can occur along the way.",
      "That systems mindset is something I continue to carry into both development and project management. Good software is not only about making one part work. It is about understanding how the parts work together.",
    ],
  },

  {
    date: "August 2026",
    category: "PROJECT MANAGEMENT",
    title: "The Difference Between Building and Delivering",
    excerpt:
      "Development taught me how to build software. Project management taught me to think about what happens before, during, and after the build.",
    readTime: "4 MIN READ",
    content: [
      "Moving between development and project management gave me two different perspectives on the same problem.",
      "As a developer, I naturally think about implementation: requirements, architecture, code, APIs, databases, debugging, and deployment. As a project manager, the questions become broader: What are we actually trying to accomplish? What does the client need? What depends on what? What information is missing?",
      "The two perspectives complement each other. Technical knowledge helps me communicate with developers and understand technical risks, while project management helps me step back and understand the reason behind the work.",
      "I have learned that delivering software is not simply finishing tasks. It is creating enough clarity for a team to move in the same direction and making sure the final result solves the problem it was intended to solve.",
    ],
  },

  {
    date: "July 2026",
    category: "LEARNING",
    title: "Why I Keep Learning Across the Stack",
    excerpt:
      "React, TypeScript, PHP, Laravel, Android, Kotlin, Node.js, databases, Docker, and more. Here's why I don't see learning as choosing only one technology.",
    readTime: "3 MIN READ",
    content: [
      "Technology changes quickly, so I have never wanted my learning to stop at one framework.",
      "My development experience has taken me from frontend applications to backend APIs, databases, Android applications, desktop applications, infrastructure, and hardware integrations. Each area introduced a different way of thinking.",
      "Learning React helped me understand component-driven interfaces. Laravel and PHP gave me a stronger understanding of backend architecture. Kotlin and Android introduced mobile development and hardware interaction. Electron showed me how web technologies can be used to build desktop applications.",
      "The goal is not to know every technology. The goal is to understand enough of the stack to ask better questions, solve problems more effectively, and continue learning whatever a project requires.",
    ],
  },

  {
    date: "June 2026",
    category: "ENGINEERING",
    title: "When Software Meets the Physical World",
    excerpt:
      "From emergency monitoring to POS systems and digital displays, some of the most interesting software problems happen outside the browser.",
    readTime: "4 MIN READ",
    content: [
      "Some of the projects I have worked on made me realize that software does not always end at a screen.",
      "I have worked with systems involving water-level sensors, emergency monitoring, CCTV integrations, mobile devices, POS hardware, Bluetooth printers, mini PCs, and digital displays.",
      "These projects introduce a different kind of complexity. A software feature may depend on a physical device being connected, a sensor sending information, a network being available, or a printer responding correctly.",
      "Those experiences made debugging more interesting because the problem is not always inside the code. Sometimes the software is behaving correctly and the real issue is somewhere between the device, network, API, hardware, or user.",
      "That is one of the reasons I enjoy technical problem solving. It requires understanding the whole environment instead of looking at only one piece.",
    ],
  },
];

type BlogContentProps = {
  onCaseStudyModalChange?: (isOpen: boolean) => void;
};

const BlogContent = ({ onCaseStudyModalChange }: BlogContentProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    onCaseStudyModalChange?.(selectedPost !== null);
  }, [selectedPost, onCaseStudyModalChange]);

  useEffect(() => {
    return () => {
      onCaseStudyModalChange?.(false);
    };
  }, [onCaseStudyModalChange]);

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-content">
      {/* Header */}
      <header className="blog-header">
        <div>
          <span className="blog-eyebrow">THE BLOG</span>

          <h2>Notes from the build.</h2>
        </div>

        <p className="blog-intro">
          Thoughts on development, systems, project management, problem-solving,
          and the things I continue learning along the way.
        </p>
      </header>

      {/* Posts */}
      <section className="blog-posts">
        {posts.map((post, index) => (
          <article className="blog-post" key={post.title}>
            <div className="blog-post-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="blog-post-date">{post.date}</div>

            <div className="blog-post-main">
              <span className="blog-post-category">{post.category}</span>

              <h3>{post.title}</h3>

              <p>{post.excerpt}</p>

              <button
                className="blog-read"
                onClick={() => setSelectedPost(post)}
              >
                <span>READ ARTICLE</span>
                <span>↗</span>
              </button>
            </div>

            <div className="blog-post-time">{post.readTime}</div>
          </article>
        ))}
      </section>

      {/* Bottom statement */}
      <section className="blog-footer">
        <span>ALWAYS BUILDING. ALWAYS LEARNING.</span>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="blog-modal" onClick={closePost}>
          <div
            className="blog-modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="blog-modal-close"
              onClick={closePost}
              aria-label="Close article"
            >
              ×
            </button>

            <div className="blog-modal-header">
              <span>{selectedPost.category}</span>

              <p>{selectedPost.date}</p>

              <h3>{selectedPost.title}</h3>

              <small>{selectedPost.readTime}</small>
            </div>

            <div className="blog-modal-body">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="blog-modal-footer">
              <span>BRYAN LOPEZ</span>

              <button onClick={closePost}>CLOSE ARTICLE ×</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
