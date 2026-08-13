const experience = [
  {
    period: "Jul 2026 — Present",
    role: "Doctoral Student",
    organization: "UM6P College of Computing",
    logo: "/logos/um6p-computing.jpg",
    logoAlt: "UM6P College of Computing logo",
    location: "On-site · Morocco",
    summary:
      "Doctoral research in cybersecurity for cyber-physical and industrial control systems, with a focus on intelligent intrusion detection for SCADA and photovoltaic environments.",
    topics: ["Cyber-Physical Systems", "ICS / SCADA", "IDS", "ML / DL", "PV Systems"],
  },
  {
    period: "Oct 2025 — Jul 2026",
    role: "Pre-Doctoral Fellow",
    organization: "UM6P College of Computing",
    logo: "/logos/um6p-computing.jpg",
    logoAlt: "UM6P College of Computing logo",
    location: "On-site · Morocco",
    summary:
      "Prepared the foundation for doctoral work across industrial cybersecurity, resilient sensing, data-driven detection, and secure energy infrastructure.",
    topics: ["Industrial Cybersecurity", "Research", "Detection Systems"],
  },
  {
    period: "Feb 2025 — Jul 2025",
    role: "Cybersecurity Research Assistant",
    organization: "Green Energy Park",
    logo: "/logos/green-energy-park.jpg",
    logoAlt: "Green Energy Park logo",
    location: "Internship · Benguerir · On-site",
    summary:
      "Contributed to applied cybersecurity research in a renewable-energy experimentation environment, connecting security analysis with operational energy systems.",
    topics: ["Energy Systems", "Cybersecurity Research", "Risk Analysis"],
  },
  {
    period: "Jul 2024 — Oct 2024",
    role: "Cybersecurity Analyst",
    organization: "AREF · Regional Academy of Education and Training",
    logo: null,
    logoAlt: "",
    location: "Internship · Agadir · On-site",
    summary:
      "Secured the Tarsheed platform, a system dedicated to managing energy resources in educational institutions, through security assessment and risk-focused improvements.",
    topics: ["Cybersecurity", "Security Risk", "Platform Security"],
  },
  {
    period: "Jul 2024 — Sep 2024",
    role: "Software Automation Engineer",
    organization: "EBTIKARWEB",
    logo: "/logos/ebtikarweb.jpg",
    logoAlt: "EBTIKARWEB logo",
    location: "Internship · Agadir · Hybrid",
    summary:
      "Designed an autonomous astrophotography pipeline using N.I.N.A., Python, REST APIs, scheduling, rules-based target planning, and equipment safety automation.",
    topics: ["Python", "REST APIs", "Automation", "Safety Systems"],
  },
  {
    period: "Jun 2023 — Aug 2023",
    role: "Software Engineer",
    organization: "Lecourt Consulting",
    logo: null,
    logoAlt: "",
    location: "Internship · Agadir · On-site",
    summary:
      "Contributed to a web application simplifying the process of starting a business in France, delivering responsive interfaces through an agile team workflow.",
    topics: ["Web Engineering", "JavaScript", "Agile"],
  },
];

const education = [
  {
    period: "Oct 2025 — Present",
    school: "UM6P — University Mohammed VI Polytechnic",
    degree: "Doctor of Philosophy · PhD",
    note: "Cybersecurity of cyber-physical and industrial control systems",
    logo: "/logos/um6p.jpg",
    logoAlt: "University Mohammed VI Polytechnic logo",
  },
  {
    period: "Jul 2023 — Jul 2024",
    school: "Holberton School",
    degree: "Associate's degree · Computer Software Engineering",
    note: "Systems foundations, backend engineering, and collaborative software delivery",
    logo: "/logos/holberton.jpg",
    logoAlt: "Holberton School logo",
  },
  {
    period: "Oct 2020 — Oct 2025",
    school: "École Polytechnique d’Agadir",
    degree: "Cybersecurity Engineer · Computer Science",
    note: "Cybersecurity, software engineering, networks, and applied computer science",
    logo: "/logos/polytechnique-agadir.jpg",
    logoAlt: "École Polytechnique d’Agadir logo",
  },
];

const researchAreas = [
  {
    number: "01",
    title: "Cyber-Physical Systems",
    text: "Security at the boundary between computation, sensing, control, and physical processes.",
  },
  {
    number: "02",
    title: "ICS & SCADA",
    text: "Resilience and threat detection for industrial automation and supervisory control environments.",
  },
  {
    number: "03",
    title: "Intelligent IDS",
    text: "Machine-learning and deep-learning methods for detecting anomalous and malicious behavior.",
  },
  {
    number: "04",
    title: "PV Systems",
    text: "Cybersecurity for photovoltaic infrastructure and data-driven renewable-energy operations.",
  },
];

const skills = [
  "Cyber-Physical Systems",
  "Industrial Control Systems",
  "SCADA",
  "Intrusion Detection",
  "Machine Learning",
  "Deep Learning",
  "PV Systems",
  "Cybersecurity Risk",
  "Python",
  "C / C++",
  "Linux",
  "Network Security",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Saad Aiddi, home">
          Saad Aiddi<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>
        <a
          className="header-contact"
          href="https://www.linkedin.com/in/saad-aiddi/"
          target="_blank"
          rel="noreferrer"
        >
          Contact <Arrow />
        </a>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="kicker">Cybersecurity researcher · Morocco</p>
            <h1>Securing systems<br />that touch the <em>physical world.</em></h1>
            <p className="hero-intro">
              I&apos;m Saad Aiddi, a doctoral student at UM6P College of Computing.
              My research focuses on cyber-physical systems, industrial control
              systems, and intelligent intrusion detection for SCADA and
              photovoltaic infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">View experience</a>
              <a
                className="button secondary"
                href="https://github.com/saad484"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>

          <aside className="hero-profile" aria-label="Profile summary">
            <img src="/saad-aiddi.jpeg" alt="Saad Aiddi" width="460" height="460" />
            <div className="profile-meta">
              <p>Current position</p>
              <strong>Doctoral Student</strong>
              <span>UM6P College of Computing</span>
            </div>
          </aside>
        </section>

        <section className="section research" id="research">
          <div className="section-title">
            <p className="kicker">Research focus</p>
            <h2>Cybersecurity for connected, controlled environments.</h2>
          </div>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <article key={area.title}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-aside">
            <p className="kicker">Experience</p>
            <h2>Research and engineering in context.</h2>
            <p>
              A path from software delivery and automation to applied
              cybersecurity and doctoral research.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.role}-${item.organization}`}>
                <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <div className="entry-heading">
                    {item.logo && (
                      <img
                        className="organization-logo"
                        src={item.logo}
                        alt={item.logoAlt}
                        width="56"
                        height="56"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <h3>{item.role}</h3>
                      <p className="organization">{item.organization}</p>
                      <p className="location">{item.location}</p>
                    </div>
                  </div>
                  <p className="summary">{item.summary}</p>
                  <ul aria-label={`${item.role} skills`}>
                    {item.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education" id="education">
          <div className="section-title">
            <p className="kicker">Education</p>
            <h2>Academic foundation.</h2>
          </div>
          <div className="education-list">
            {education.map((item, index) => (
              <article key={item.school}>
                <span className="education-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="education-heading">
                  <img
                    className="education-logo"
                    src={item.logo}
                    alt={item.logoAlt}
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  <div>
                    <p className="education-period">{item.period}</p>
                    <h3>{item.school}</h3>
                    <p className="degree">{item.degree}</p>
                    <p className="education-note">{item.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" aria-labelledby="skills-title">
          <div className="section-title">
            <p className="kicker">Areas & tools</p>
            <h2 id="skills-title">Focused across security, intelligence, and control.</h2>
          </div>
          <ul>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>

        <section className="contact">
          <p className="kicker">Contact</p>
          <h2>Research, industry, or a difficult systems problem?</h2>
          <p>
            I&apos;m open to conversations around cyber-physical security,
            industrial systems, intelligent detection, and applied research.
          </p>
          <div className="contact-links">
            <a
              className="button primary"
              href="https://www.linkedin.com/in/saad-aiddi/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
            <a
              className="button secondary"
              href="https://github.com/saad484"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <Arrow />
            </a>
          </div>
        </section>
      </div>

      <footer>
        <a className="brand" href="#top">Saad Aiddi<span>.</span></a>
        <p>Cybersecurity researcher · Doctoral student</p>
        <p>Morocco · 2026</p>
      </footer>
    </main>
  );
}
