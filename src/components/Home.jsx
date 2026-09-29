import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import drashtiPhoto from '../assets/drashti.jpeg';

/* ═══════════════════ DATA ═══════════════════ */

const SKILLS_GROUPED = [
  { category: 'Languages',        icon: '⚡', color: '#f59e0b', items: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'PHP'] },
  { category: 'AI / ML',          icon: '🤖', color: '#e879f9', items: ['LLMs', 'LangGraph', 'Scikit-learn', 'KNN', 'Computer Vision', 'RAG Systems', 'Vector DBs', 'Embeddings'] },
  { category: 'Web & Frameworks', icon: '🌐', color: '#34d399', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Streamlit', 'Vite', 'WebSockets'] },
  { category: 'Databases',        icon: '🗄️', color: '#60a5fa', items: ['MongoDB', 'MySQL', 'Redis', 'SQLite', 'Oracle'] },
  { category: 'Tools & DevOps',   icon: '🔧', color: '#fb7185', items: ['Docker', 'Git', 'GitHub', 'Postman', 'Kaggle', 'LeetCode', 'VS Code'] },
];

const PROJECTS = [
  {
    name: 'KNN Interactive Classroom', tag: 'ML · Deployed', cat: 'AI/ML', color: '#e879f9', icon: '📊',
    desc: 'Interactive ML learning tool with 2D/3D/4D visualizations, real-time KNN predictions, adjustable K values, multiple voting methods, automatic K selection, and custom CSV upload.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly'],
    github: 'https://github.com/drashti8175/KNN-Interactive-Classroom',
    live: 'https://knn-interactive-classroom-lakhurl9uuwb4vttzaardi.streamlit.app/',
  },
  {
    name: 'VisionFlow AI', tag: 'AI · Full Stack · Deployed', cat: 'AI/ML', color: '#a78bfa', icon: '🎬',
    desc: 'AI video understanding platform that converts long-form videos into searchable transcripts, summaries, and structured insights using multimodal AI pipelines.',
    tech: ['Python', 'FastAPI', 'React', 'Next.js', 'Docker', 'Computer Vision', 'LLMs'],
    github: 'https://github.com/drashti8175/VisionFlow-AI',
    live: 'https://visionflow-ai-1.onrender.com/',
  },
  {
    name: 'PhishGuard AI', tag: 'ML · Security · Deployed', cat: 'AI/ML', color: '#fb7185', icon: '🛡️',
    desc: 'ML-based phishing detection system analyzing URL and website characteristics with a complete Scikit-learn pipeline, FastAPI backend, and React frontend.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'React.js', 'MongoDB', 'Docker'],
    github: 'https://github.com/drashti8175/PhishGuard-AI',
    live: 'https://phishguard-ai-frontend.onrender.com',
  },
  {
    name: 'AI Travel Planner', tag: 'AI Agents · LangGraph', cat: 'AI/ML', color: '#34d399', icon: '✈️',
    desc: 'Agentic AI travel planning system using LangGraph that converts natural-language trip requirements into optimized multi-day itineraries with real-time WebSocket streaming and interactive maps.',
    tech: ['LangGraph', 'FastAPI', 'React', 'WebSockets', 'Redis', 'OSRM'],
    github: 'https://github.com/drashti8175/AI-Travel-Planner',
    live: null,
  },
  {
    name: 'LogicLab', tag: 'AI · ISEF · In Progress', cat: 'AI/ML', color: '#fbbf24', icon: '🧠',
    desc: 'Converts natural-language statements into Boolean logic expressions and generates truth tables. Presented at Maths Poster Presentation & Indian Science & Engineering Fair — State Level.',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Genkit AI'],
    github: 'https://github.com/drashti8175/LogicLab',
    live: null,
  },
  {
    name: 'MediCore', tag: 'Full Stack · Sem-4', cat: 'Full Stack', color: '#60a5fa', icon: '🏥',
    desc: 'Full-stack clinic management system with role-based access, JWT auth, real-time queue via Socket.IO, and analytics dashboards for revenue and appointments.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Socket.IO', 'JWT'],
    github: 'https://github.com/drashti8175/FINAL_SGP__PROJECT',
    live: null,
  },
  {
    name: 'ShopStack', tag: 'Full Stack · Sem-4', cat: 'Full Stack', color: '#f97316', icon: '🛒',
    desc: 'Retail inventory management system with MySQL triggers, stored procedures, product/sales/supplier management, and an analytics dashboard for business insights.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/drashti8175/SGP_PROJECT',
    live: null,
  },
  {
    name: 'Student Portfolio', tag: 'React · Vite · Live', cat: 'Full Stack', color: '#34d399', icon: '🌐',
    desc: 'This portfolio — built with React, Vite, Framer Motion, and React Router. Features multi-page routing, GitHub API integration, and a full-stack task manager with Node/Express/MongoDB.',
    tech: ['React.js', 'Vite', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/drashti8175/student-portfolio',
    live: null,
  },
  {
    name: 'SpaceX Falcon 9 Capstone', tag: 'ML · Data Science', cat: 'AI/ML', color: '#60a5fa', icon: '🚀',
    desc: 'IBM Data Science Capstone — predicts Falcon 9 first-stage landing success using classification models. Includes EDA, SQL queries, Folium maps, Plotly Dash dashboard, and Scikit-learn ML pipeline.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Folium', 'SQL', 'Jupyter'],
    github: 'https://github.com/drashti8175/spacex-falcon9-capstone',
    live: null,
  },
  {
    name: 'Clinic Management System', tag: 'Full Stack · HTML/CSS/JS', cat: 'Full Stack', color: '#f97316', icon: '🏥',
    desc: 'Frontend clinic management interface built with HTML, CSS, and JavaScript. Covers patient registration, appointment scheduling, and doctor management with a clean responsive UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/drashti8175/Clinic-Management',
    live: null,
  },
  {
    name: '100 Days 100 Web Projects', tag: 'Web · Challenge · In Progress', cat: 'Full Stack', color: '#a78bfa', icon: '💻',
    desc: '100 mini web projects from basic to intermediate level — covering DOM manipulation, CSS animations, API integrations, games, and UI components. A daily coding challenge series.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/drashti8175/100_days_100_web_project',
    live: null,
  },
];

const STATS = [
  { value: '11+',  label: 'Projects Built' },
  { value: '3',    label: 'Live Deployments' },
  { value: '7.43', label: 'SGPA' },
  { value: '1st',  label: 'Lifelong Learner' },
];

const ACHIEVEMENTS = [
  {
    icon: '🥇', color: '#fbbf24',
    title: '1st Position — Lifelong Learner Award',
    org: 'CSPIT, CHARUSAT — Computer Engineering Dept.',
    desc: 'Ranked 1st in the department for continuous self-driven learning. Recognised for completing multiple certifications and upskilling consistently beyond the classroom.',
  },
  {
    icon: '🎓', color: '#34d399',
    title: 'AI for Sustainability Virtual Internship',
    org: '1M1B · AICTE · IBM SkillsBuild — Sep 2026',
    desc: 'Completed internship covering Responsible AI, UN SDGs, Agentic AI, and RAG systems. Certificate issued on the National Internship Portal.',
  },
  {
    icon: '🔥', color: '#fb7185',
    title: 'LeetCode 50 Days Badge — 2026',
    org: 'LeetCode',
    desc: 'Maintained a 50-day daily problem-solving streak on LeetCode, strengthening DSA, logical thinking, and coding consistency. All solutions on GitHub.',
  },
  {
    icon: '🐍', color: '#60a5fa',
    title: 'Kaggle Python Coder Badge',
    org: 'Kaggle',
    desc: 'Earned the Python Coder badge through hands-on coding practice in Data Science, Machine Learning, and AI problem solving.',
  },
  {
    icon: '📊', color: '#e879f9',
    title: 'Kaggle Pandas Course Completion',
    org: 'Kaggle',
    desc: 'Completed the Pandas course covering DataFrames, data cleaning, grouping, aggregation, missing values, and real-world data analysis.',
  },
];

const TIMELINE = [
  { year: '2024 – Present', icon: '🎓', color: '#34d399', title: 'B.Tech Computer Engineering', org: 'CHARUSAT — CSPIT, Changa', detail: 'SGPA: 7.43 (Sem 3) · Specialising in AI/ML & Full-Stack Development' },
  { year: 'Sep 2026',       icon: '🏢', color: '#e879f9', title: 'AI for Sustainability Internship', org: '1M1B · AICTE · IBM SkillsBuild', detail: 'Responsible AI · UN SDGs · Agentic AI · RAG Systems' },
  { year: '2025',           icon: '🥇', color: '#fbbf24', title: '1st Position — Lifelong Learner', org: 'CSPIT, CHARUSAT', detail: 'Top rank in CE dept. for continuous self-driven learning' },
  { year: '2022',           icon: '📚', color: '#60a5fa', title: '10th Board — 93.00%', org: 'A B School, Navsari', detail: 'Distinction in Science and Mathematics' },
];

const CERTS = [
  { name: 'AI for Sustainability',     issuer: 'IBM SkillsBuild · AICTE',  color: '#34d399', url: 'https://www.linkedin.com/in/drashti-patel-31ba52333/' },
  { name: 'Kaggle Python Coder Badge', issuer: 'Kaggle',                   color: '#fbbf24', url: 'https://www.kaggle.com/' },
  { name: 'Kaggle Pandas Course',      issuer: 'Kaggle',                   color: '#fb7185', url: 'https://www.kaggle.com/' },
  { name: 'LeetCode 50 Days Badge',    issuer: 'LeetCode · 2026',          color: '#f97316', url: 'https://leetcode.com/' },
];

/* ═══════════════════ COMPONENT ═══════════════════ */
export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [projFilter, setProjFilter]       = useState('All');

  useEffect(() => {
    const ids = ['home','skills','projects','achievements','journey','contact'];
    const handler = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const filtered = PROJECTS.filter(p => projFilter === 'All' || p.cat === projFilter);

  return (
    <div className="port">

      {/* ══ NAV ══ */}
      <nav className="port-nav">
        <div className="nav-brand">
          <span className="brand-dot" />
          <span className="brand-text">Drashti Patel</span>
        </div>
        <ul className="nav-menu">
          {[['home','Home'],['skills','Skills'],['projects','Projects'],['achievements','Achievements'],['journey','Journey'],['contact','Contact']].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`nav-link ${activeSection === id ? 'nav-active' : ''}`}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="https://github.com/drashti8175" target="_blank" rel="noreferrer" className="nav-linkedin">
          GitHub ↗
        </a>
      </nav>

      {/* ══ HERO ══ */}
      <section id="home" className="hero">
        <div className="hero-bg-line" />

        <motion.div className="hero-left"
          initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
          <span className="badge-pill"><span className="live-dot" /> Open to Internships & Collaborations</span>
          <h1 className="hero-name">
            Drashti <em>Patel</em>
          </h1>
          <div className="hero-typewriter">
            <TypeAnimation sequence={['AI / Full-Stack Developer',2200,'Machine Learning Engineer',2200,'React & Next.js Builder',2200,'LangGraph Agent Developer',2200,'MERN Stack Engineer',2200]}
              wrapper="span" speed={60} repeat={Infinity} />
          </div>
          <p className="hero-bio">
            Computer Engineering student at <strong>CHARUSAT</strong> — building AI-powered systems,
            deployed ML tools, and full-stack applications. 1st position Lifelong Learner award winner. IBM AI Internship graduate.
          </p>
          <div className="hero-tags">
            {['📍 Navsari, Gujarat','🎓 B.Tech CE · CHARUSAT · 2024–28','✉️ drashtiipatel2006@gmail.com'].map(t => (
              <span key={t} className="htag">{t}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="https://github.com/drashti8175" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
            <a href="https://www.linkedin.com/in/drashti-patel-31ba52333/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            <a href="#projects" className="btn-fill">View Projects</a>
          </div>
          <div className="stats-row">
            {STATS.map(s => (
              <div key={s.label} className="stat-box">
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="hero-right"
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          <div className="photo-wrap">
            <div className="photo-avatar">
              <img src={drashtiPhoto} alt="Drashti Patel"
                onError={e => { e.target.onerror = null; e.target.src = 'https://avatars.githubusercontent.com/drashti8175'; }} />
            </div>
            <div className="photo-chips">
              <span className="chip">🤖 AI Engineer</span>
              <span className="chip">🥇 1st Position</span>
              <span className="chip">🚀 3 Live Apps</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" className="section">
        <motion.div className="sec-header" {...fadeUp()}>
          <div className="sec-tag">Tech Stack</div>
          <h2 className="sec-title">Skills & <span>Technologies</span></h2>
          <p className="sec-sub">From AI/ML pipelines to full-stack web and data science tools.</p>
        </motion.div>
        <div className="skills-categories">
          {SKILLS_GROUPED.map((group, gi) => (
            <motion.div key={group.category} className="skill-group"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: gi * 0.08 }}>
              <div className="skill-group-header" style={{ '--gc': group.color }}>
                <span className="sg-icon">{group.icon}</span>
                <span className="sg-name">{group.category}</span>
              </div>
              <div className="skill-pills">
                {group.items.map(item => (
                  <span key={item} className="skill-pill" style={{ '--gc': group.color }}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" className="section">
        <motion.div className="sec-header" {...fadeUp()}>
          <div className="sec-tag">Work Showcase</div>
          <h2 className="sec-title">All <span>Projects</span></h2>
          <p className="sec-sub">11 projects — AI/ML, Data Science, Full Stack, and deployed applications.</p>
        </motion.div>
        <div className="proj-filters">
          {['All','AI/ML','Full Stack'].map(cat => (
            <button key={cat}
              className={`proj-filter-btn ${projFilter === cat ? 'proj-filter-active' : ''}`}
              onClick={() => setProjFilter(cat)}>{cat}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div key={p.name} className="proj-card"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ '--pc': p.color }}>
                <div className="proj-head">
                  <span className="proj-emoji">{p.icon}</span>
                  <span className="proj-tag">{p.tag}</span>
                </div>
                <h3 className="proj-name">{p.name}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tech">
                  {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div className="proj-actions">
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-btn">GitHub →</a>
                  {p.live
                    ? <a href={p.live} target="_blank" rel="noreferrer" className="proj-live-btn">Live ↗</a>
                    : <span className="proj-wip-btn">In Progress</span>
                  }
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ══ ACHIEVEMENTS ══ */}
      <section id="achievements" className="section">
        <motion.div className="sec-header" {...fadeUp()}>
          <div className="sec-tag">Recognition</div>
          <h2 className="sec-title">Achievements & <span>Milestones</span></h2>
          <p className="sec-sub">Awards, internships, and competitive recognitions.</p>
        </motion.div>
        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={a.title} className="ach-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ '--ac': a.color }}>
              <div className="ach-icon-wrap" style={{ background: a.color + '18', border: `1.5px solid ${a.color}40` }}>
                <span className="ach-icon-lg">{a.icon}</span>
              </div>
              <div className="ach-content">
                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-org" style={{ color: a.color }}>{a.org}</p>
                <p className="ach-desc">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ JOURNEY ══ */}
      <section id="journey" className="section">
        <motion.div className="sec-header" {...fadeUp()}>
          <div className="sec-tag">Background</div>
          <h2 className="sec-title">Education & <span>Journey</span></h2>
        </motion.div>
        <div className="timeline-wrap">
          {TIMELINE.map((item, i) => (
            <motion.div key={item.title} className="tl-item"
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="tl-icon" style={{ background: item.color + '18', border: `2px solid ${item.color}` }}>{item.icon}</div>
              <div className="tl-body" style={{ '--tc': item.color }}>
                <span className="tl-year">{item.year}</span>
                <h3 className="tl-title">{item.title}</h3>
                <p className="tl-org">{item.org}</p>
                <p className="tl-detail">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications — clickable */}
        <motion.div {...fadeUp(0.1)} style={{ marginTop: 72 }}>
          <div className="sec-header" style={{ marginBottom: 32 }}>
            <div className="sec-tag">Credentials</div>
            <h2 className="sec-title" style={{ fontSize: '2rem' }}>Certifications & <span>Badges</span></h2>
            <p className="sec-sub" style={{ marginTop: 8 }}>Click any certificate to view it.</p>
          </div>
          <div className="cert-grid">
            {CERTS.map(c => (
              <a key={c.name} href={c.url} target="_blank" rel="noreferrer"
                className="cert-card cert-clickable" style={{ '--cc': c.color }}>
                <div className="cert-dot-lg" style={{ background: c.color }} />
                <div className="cert-text">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
                <span className="cert-arrow">↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Personal */}
        <motion.div {...fadeUp(0.15)} style={{ marginTop: 72 }}>
          <div className="sec-header" style={{ marginBottom: 32 }}>
            <div className="sec-tag">About Me</div>
            <h2 className="sec-title" style={{ fontSize: '2rem' }}>Personal <span>Profile</span></h2>
          </div>
          <div className="profile-grid">
            <div className="profile-detail-card">
              {[['Date of Birth','14 October 2006'],['Nationality','Indian'],['Gender','Female'],
                ['Languages','Gujarati · Hindi · English'],['Location','Navsari, Gujarat 396430'],
                ['Email','drashtiipatel2006@gmail.com'],['Phone','+91 79902 86668']].map(([k,v]) => (
                <div key={k} className="pd-row">
                  <span className="pd-key">{k}</span>
                  <span className="pd-val">{v}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="journey-sub" style={{ marginBottom: 16 }}>Soft Skills</h3>
              <div className="soft-grid">
                {['Problem Solving','Team Collaboration','Quick Learner','Communication','Attention to Detail','Time Management','Leadership','Adaptability'].map(s => (
                  <div key={s} className="soft-chip">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="section contact-sec">
        <div className="contact-pulse" />
        <motion.div className="sec-header" {...fadeUp()}>
          <div className="sec-tag">Get In Touch</div>
          <h2 className="sec-title">Let's <span>Connect</span></h2>
          <p className="sec-sub">Open to internships, collaborations, and exciting projects.</p>
        </motion.div>
        <motion.div className="contact-grid" {...fadeUp(0.1)}>
          {[
            { icon: '✉️', label: 'Email',    val: 'drashtiipatel2006@gmail.com', href: 'mailto:drashtiipatel2006@gmail.com' },
            { icon: '📞', label: 'Phone',    val: '+91 79902 86668',             href: 'tel:+917990286668' },
            { icon: '💼', label: 'LinkedIn', val: 'drashti-patel-31ba52333',     href: 'https://www.linkedin.com/in/drashti-patel-31ba52333/' },
            { icon: '🐙', label: 'GitHub',   val: 'github.com/drashti8175',      href: 'https://github.com/drashti8175' },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="cc-icon-wrap">{c.icon}</div>
              <div className="cc-text">
                <span className="cc-label">{c.label}</span>
                <span className="cc-val">{c.val}</span>
              </div>
            </a>
          ))}
        </motion.div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="port-footer">
        <div className="footer-inner">
          <p className="footer-copy">Drashti Patel · Computer Engineering · CHARUSAT · 2025</p>
          <div className="footer-links">
            <a href="https://github.com/drashti8175" target="_blank" rel="noreferrer">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/drashti-patel-31ba52333/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>·</span>
            <a href="mailto:drashtiipatel2006@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
