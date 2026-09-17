import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ArticleCard from "./components/ArticleCard";
import MarkdownRenderer from "./components/MarkdownRenderer";
import AnimateText from "./components/AnimateText";
import SocialLinks from "./components/SocialLinks";
import { Arrow, Download } from "./components/Icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaJava,
  FaJira,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDotnet,
  SiTypescript,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiLangchain,
  SiPostgresql,
  SiNeo4J,
  SiPython,
  SiPandas,
  SiFastapi,
  SiFirebase,
  SiDocker,
  SiSelenium,
  SiOpenai,
  SiGraphql,
} from "react-icons/si";

const skills = [
  ["Python", SiPython],
  ["Java", FaJava],
  ["C#", null],
  ["JavaScript", FaJsSquare],
  ["TypeScript", SiTypescript],

  ["React", FaReact],
  ["HTML5", FaHtml5],
  ["CSS3", FaCss3Alt],
  ["Tailwind CSS", SiTailwindcss],

  [".NET", SiDotnet],
  ["FastAPI", SiFastapi],
  ["LangGraph", SiGraphql],
  ["LangChain", SiLangchain],

  ["Pandas", SiPandas],

  ["MySQL", SiMysql],
  ["MongoDB", SiMongodb],
  ["PostgreSQL", SiPostgresql],
  ["Neo4j", SiNeo4J],
  ["Firebase", SiFirebase],

  ["Docker", SiDocker],
  ["Git", FaGitAlt],
  ["Jira", FaJira],
  ["Selenium", SiSelenium],
  ["Postman", SiPostman],
];
const education = [
  [
    "Expected Graduation: June 2027",
    "Bachelor of Software Engineering (Hons)",
    "The Open University of Sri Lanka",
    "",
  ],
  [
    "2013 - 2022",
    "High School & College Education",
    "Ranabima Royal College · Kandy",
    "G.C.E. (O/L) & G.C.E. (A/L)",
  ],
  [
    "2024 -",
    "Chartered Accountancy",
    "Institute of Chartered Accountants of Sri Lanka",
    "Completed Business Level",
  ],
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="hero-intro">
              Hello, I’m Vidura Abeysinghe.{""}
              <span className="greeting-mark" aria-hidden="true">

              </span>
            </p>
            <h1>
              Thoughtful Ideas.
              <br />
              Meaningful<span className="hero-serif"> Solutions.</span>
            </h1>
            <div className="hero-role">
              <AnimateText />
            </div>
            <p className="hero-description">
              Turning ideas into meaningful digital experiences.
              <br className="desktop-break" /> Exploring Software Engineering, Artificial Intelligence and everything in between
            </p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore my work <Arrow />
              </a>
              <a
                className="button button-secondary"
                href="/ViduraAbeysinghe_CV.pdf"
                download
              >
                Download CV <Download />
              </a>
            </div>
            <div className="hero-socials">
              <SocialLinks />
              <span className="social-divider" />
              <span>
                Kandy, Sri Lanka <span className="location-dot">↗</span>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                className="hero-portrait"
                src="/myphoto.png"
                alt="Vidura Abeysinghe"
                width="1000"
                height="1000"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="hero-bottom">
            <span>LEARNER. DEVELOPER. PROBLEM SOLVER</span>
            <a href="#about">
              A little more about me <span>↓</span>
            </a>
          </div>
        </section>

        <section id="about" className="section container about-section">
          <div className="section-side">
            <div className="eyebrow">
              <span>01</span> ABOUT ME
            </div>
            <h2>
              Curiosity is
              <br />
              where it starts<span className="accent">.</span>
            </h2>
            <div className="about-note">
              <span aria-hidden="true">↳</span>
              <p>
                Learn something.
                <br />
                Build something better.
              </p>
            </div>
          </div>
          <div className="about-content">
            <MarkdownRenderer fileName="about" />
            <dl className="personal-details">
              <div>
                <dt>FULL NAME</dt>
                <dd>Vidura Dayan Abeysinghe</dd>
              </div>
              <div>
                <dt>BASED IN</dt>
                <dd>Kandy, Sri Lanka</dd>
              </div>
              <div>
                <dt>EMAIL</dt>
                <dd>
                  <a href="mailto:viduravd@gmail.com">
                    viduravd@gmail.com <Arrow diagonal />
                  </a>
                </dd>
              </div>
              <div>
                <dt>PHONE</dt>
                <dd>
                  <a href="tel:+94718971513">
                    +94 71 8971 513 <Arrow diagonal />
                  </a>
                </dd>
              </div>
              <div>
                <dt>WEBSITE</dt>
                <dd>
                  <a href="https://viduraabeysinghe.netlify.app/">
                    Portfolio <Arrow diagonal />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="skills" className="skills-band">
          <div className="section container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span>02</span> MY SKILLS
                </div>
                <h2>
                  The tools & technologies behind the work<span className="accent">.</span>
                </h2>
              </div>
            </div>
            <div className="skills-grid">
              {skills.map(([name, Icon]) => (
                <div className="skill" key={name}>
                  <span className="skill-icon">
                    {Icon ? (
                      <Icon aria-hidden="true" />
                    ) : (
                      <span aria-hidden="true">C#</span>
                    )}
                  </span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section container education-section experience-section"
        >
          <div className="section-side">
            <div className="eyebrow">
              <span>03</span> WORK EXPERIENCE
            </div>

            <h2>
              Experience in practice<span className="accent">.</span>
            </h2>

            <p>The roles, responsibilities and lessons along the way</p>
          </div>

          <div className="education-list">
            <article className="education-item">
              <span className="education-node" aria-hidden="true" />

              <div className="education-date">
                <span className="experience-period">
                  Sep 2025 - Apr 2026
                </span>
              </div>

              <h3>AI & ML Engineer - Intern</h3>
              <p>Sri Lanka Telecom PLC - Colombo, Sri Lanka <br/></p>

              <ul className="experience-highlights">
                <li>Engineered enterprise conversational AI agents using LangGraph and the OpenAI API, implementing semantic caching to reduce redundant API calls and LLM inference latency.</li>
                <li>Secured LLM pipelines with Guardrails AI through regex matching, SQL validation and state-aware sequence monitoring to mitigate hallucinations and sequence violations.</li>
                <li>Containerized PostgreSQL, Neo4j, ChromaDB and FastAPI services using Docker, alongside automated Python data pipelines supporting enterprise knowledge retrieval and RAG architectures</li>
              </ul>
            </article>
          </div>
        </section>

        <ProjectsSection />

        <section id="education" className="section container education-section">
          <div className="section-side">
            <div className="eyebrow">
              <span>05</span> EDUCATION
            </div>
            <h2>
              Learning never stops<span className="accent">.</span>
            </h2>
            <p>
              Building knowledge through experience.
              <br />
              Staying curious along the way.
            </p>
          </div>
          <div className="education-list">
            {education.map(([date, title, school, detail], index) => (
              <article className="education-item" key={title}>
                <span className="education-node" aria-hidden="true" />
                <div className="education-date">
                  {date}
                  <span>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{school}</p>
                {detail && <span className="education-detail">{detail}</span>}
              </article>
            ))}
          </div>
        </section>

        <section id="medium" className="section container writing-section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span>06</span> BEYOND THE CODE
              </div>
              <h2>
                A space to think out loud<span className="accent">.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://medium.com/@viduravd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me on Medium <Arrow diagonal />
            </a>
          </div>
          <ArticleCard
            title="The History of Sri Lankan Cricket"
            description="Cricket, often referred to as a religion in Sri Lanka, has been a source of national pride and passion for decades. A look back at where it all began."
            image="/historyofslcricArticle.webp"
            link="https://medium.com/@viduravd/the-history-of-sri-lankan-cricket-2d15843ae857"
            date="Jul 22, 2023"
            info="Read the story on Medium"
          />
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="eyebrow">
              <span>07</span> WHAT’S NEXT?
            </div>
            <div className="contact-layout">
              <div>
                <h2>
                  Good things start
                  <br />
                  with a <span className="hero-serif">conversation.</span>
                </h2>
                <p>
                  Have an idea, a project in mind or just want to say hello?
                  <br />
                  I’d love to hear from you.
                </p>
                <a className="contact-email" href="mailto:viduravd@gmail.com">
                  viduravd@gmail.com <Arrow diagonal />
                </a>
              </div>
              <a
                className="contact-circle"
                href="mailto:viduravd@gmail.com"
                aria-label="Send Vidura an email"
              >
                <Arrow diagonal />
              </a>
            </div>
            <div className="contact-bottom">
              <span>
                <span className="status-dot" /> OPEN TO OPPORTUNITIES
              </span>
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a className="brand" href="#home" aria-label="Back to home">
          va<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Vidura Abeysinghe</p>
        <span>Learn. Code. Build.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
