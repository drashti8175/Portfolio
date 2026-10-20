/* ==========================================================================
   DrashtiAI Portfolio - Application Engine
   ========================================================================== */

// --- Default Application Data ---
const DEFAULT_DATA = {
    profile: {
        name: "Drashti Patel",
        title: "AI & Full Stack Developer | Generative AI Enthusiast",
        bio: "I am a highly motivated Computer Engineering student at Chandubhai S. Patel Institute of Technology (CSPIT), CHARUSAT. I build intelligent, secure, and user-centric web applications combining modern full-stack architectures, Generative AI models, cybersecurity mechanisms, and data science workflows to solve real-world challenges.",
        email: "drashtiipatel2006@gmail.com",
        phone: "7990286668",
        address: "Endhal, Navsari, Gujarat, India - 396430",
        github: "https://github.com/drashti8175",
        linkedin: "https://www.linkedin.com/in/drashti-patel-31ba52333/",
        university: "CSPIT, Charotar University of Science and Technology (CHARUSAT)"
    },
    skills: [
        // AI & ML
        { id: "s-granite", name: "IBM Granite Models", category: "ai" },
        { id: "s-genai", name: "Generative AI / LLMs", category: "ai" },
        { id: "s-rag", name: "RAG Systems", category: "ai" },
        { id: "s-prompt", name: "Prompt Engineering", category: "ai" },
        { id: "s-ml", name: "Machine Learning", category: "ai" },
        { id: "s-datascience", name: "Data Science", category: "ai" },
        { id: "s-pandas", name: "Pandas / NumPy", category: "ai" },
        { id: "s-plotly", name: "Plotly Dash", category: "ai" },
        { id: "s-genkit", name: "Genkit (AI)", category: "ai" },
        { id: "s-agents", name: "AI Agents", category: "ai" },
        
        // Programming Languages
        { id: "s-cpp", name: "C++", category: "lang" },
        { id: "s-c", name: "C", category: "lang" },
        { id: "s-python", name: "Python", category: "lang" },
        { id: "s-js", name: "JavaScript", category: "lang" },
        { id: "s-ts", name: "TypeScript", category: "lang" },
        { id: "s-java", name: "Java", category: "lang" },
        { id: "s-php", name: "PHP", category: "lang" },
        
        // Web Development
        { id: "s-react", name: "React.js", category: "web" },
        { id: "s-next", name: "Next.js", category: "web" },
        { id: "s-node", name: "Node.js", category: "web" },
        { id: "s-express", name: "Express.js", category: "web" },
        { id: "s-tailwind", name: "Tailwind CSS", category: "web" },
        { id: "s-socket", name: "Socket.IO", category: "web" },
        { id: "s-jwt", name: "JWT Auth", category: "web" },
        
        // Databases & Tools
        { id: "s-mysql", name: "MySQL", category: "db" },
        { id: "s-mongodb", name: "MongoDB Atlas", category: "db" },
        { id: "s-oracle", name: "Oracle SQL", category: "db" },
        { id: "s-sqlite", name: "SQLite", category: "db" },
        { id: "s-git", name: "Git & GitHub", category: "db" },
        { id: "s-fastapi", name: "FastAPI", category: "db" }
    ],
    projects: [
        {
            title: "RideFair",
            category: "ai",
            tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Plotly Dash", "NYC TLC Data", "Anomaly Detection"],
            desc: "Fare anomaly detector that uses real taxi trip data to estimate a fair fare baseline and flag rides where pricing is unusually high for the distance, duration, pickup time, and route pattern.",
            features: [
                "NYC TLC parquet ingestion with clean raw, processed, and sample dataset stages",
                "Feature engineering for hour, weekday, rush-hour, trip duration, fare per km, and route zones",
                "Baseline regression plus Isolation Forest workflow to compare expected fare vs anomaly score",
                "Dashboard plan with fare checker, surge heatmap, and fare-vs-distance trend explorer"
            ],
            role: "Planned the end-to-end data science workflow, model approach, dashboard design, and portfolio-ready execution roadmap.",
            link: "https://github.com/drashti8175"
        },
        {
            title: "CarbonWise AI",
            category: "ai",
            tech: ["React", "Tailwind CSS", "JavaScript", "Python", "FastAPI", "IBM Granite", "Generative AI", "RAG"],
            desc: "AI-powered sustainability assistant that calculates personal carbon footprint based on lifestyle data and generates personalized reduction recommendations. Created as the capstone during the IBM SkillsBuild internship.",
            features: [
                "Detailed lifestyle estimator (Transportation, energy, food, consumption, waste)",
                "Carbon calculation matrix for accurate CO2 footprint estimation",
                "AI Sustainability Coach powered by IBM Granite LLM",
                "Sustainability score dashboard with visualization charts"
            ],
            role: "Developed the user entry flows, coded carbon calculations, and constructed prompt guidelines for Granite RAG.",
            link: "https://github.com/drashti8175"
        },
        {
            title: "VisionFlow AI",
            category: "ai",
            tech: ["Next.js", "Python", "AI Models", "Speech Processing", "Computer Vision", "Tailwind CSS"],
            desc: "An intelligent screen analysis and productivity system that processes video recordings to automatically transcribe content, extract actionable tasks, and output meeting digests.",
            features: [
                "Screen recording upload and backend video parsing",
                "Whisper-based automatic speech-to-text transcription",
                "GPT-based pipeline to extract schedules and tasks",
                "Visual timeline outlining key meeting changes and activity peaks"
            ],
            role: "Designed front-end transcription editors, built processing API routes, and structured task data extraction.",
            link: "https://github.com/drashti8175"
        },
        {
            title: "PhishGuard AI",
            category: "cybersecurity",
            tech: ["Python", "Machine Learning", "FastAPI", "React", "Cybersecurity APIs", "Tailwind CSS"],
            desc: "An AI-powered cybersecurity threat console that analyzes suspicious URLs and websites, classifies threats using ML, and generates explanatory security scores.",
            features: [
                "Real-time URL threat detection scanner",
                "Supervised Machine Learning model for site classifications",
                "Automated risk scoring metrics and security details",
                "Interactive warning screens explaining threat factors"
            ],
            role: "Collected training datasets, built the classifier model in Python, and coded FastAPI endpoints to run predictions.",
            link: "https://github.com/drashti8175"
        },
        {
            title: "MediCore",
            category: "fullstack",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Socket.IO", "JWT", "Axios"],
            desc: "Developed a full-stack clinic management system to digitize clinical workflows including appointments, queue status, and prescriptions with real-time updates.",
            features: [
                "Role-based control panels (Admin, Doctor, Receptionist, Patient)",
                "Real-time queue tracking using Socket.IO connections",
                "Secure REST API with JWT authorization and hashed passwords",
                "Interactive dashboard presenting patient count and revenue insights"
            ],
            role: "Programmed both backend and frontend, designed MongoDB schemas, and integrated socket events.",
            link: "https://github.com/drashti8175"
        },
        {
            title: "LogicLab",
            category: "ai",
            tech: ["TypeScript", "Next.js", "Tailwind CSS", "Genkit (AI)", "JavaScript"],
            desc: "Interactive educational platform converting natural language descriptions into Boolean expressions and truth tables dynamically.",
            features: [
                "Natural language to Boolean statement translation (via Genkit LLM)",
                "Automatic generating of comprehensive Boolean truth tables",
                "Interactive step-by-step logic simplifier",
                "Export features for truth tables (CSV/Image)"
            ],
            role: "Designed logic calculation formulas, constructed prompt chains, and programmed truth table grids.",
            link: "https://github.com/drashti8175"
        },
        {
            title: "ShopStack",
            category: "dbms",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
            desc: "Full-stack retail inventory database application managing products, sales records, and alerts using complex DBMS attributes.",
            features: [
                "CRUD controls for inventory management and supplier tracking",
                "Relational MySQL triggers for automated inventory levels updates",
                "Optimized SQL Views for low stock alerts and reports",
                "Stored procedures handling safe cart checkouts"
            ],
            role: "Drafted database schemas, wrote relational constraints, and wired up Express backend endpoints.",
            link: "https://github.com/drashti8175"
        }
    ],
    timeline: [
        { year: "2022", title: "10th Board (GSEB)", subtitle: "A B School, Navsari", desc: "Completed school education with 93.00% score." },
        { year: "2024 - 2028", title: "B.Tech Computer Engineering", subtitle: "CSPIT, CHARUSAT University", desc: "Currently pursuing B.Tech. Outstanding academic performance with a 7.43 SGPA (up to Sem 3)." },
        { year: "2025", title: "Milestone: Full-Stack Architect", subtitle: "MediCore & ShopStack", desc: "Built end-to-end full stack clinic manager with WebSockets (MediCore) and relational database system (ShopStack)." },
        { year: "2026", title: "Milestone: AI Developer", subtitle: "PhishGuard AI & VisionFlow AI", desc: "Wrote ML classifiers for threat intelligence and vision algorithms for recording digests." },
        { year: "2026", title: "Data Science Build: RideFair", subtitle: "Fare Anomaly Detection Project", desc: "Designed an end-to-end taxi fare anomaly detector using NYC TLC trip data, regression baselines, Isolation Forest, and a Plotly Dash dashboard roadmap." },
        { year: "May - July 2026", title: "AI for Sustainability Virtual Internship", subtitle: "1M1B + IBM SkillsBuild + AICTE", desc: "Completed formal internship. Learned IBM Granite models, prompt engineering, and built CarbonWise AI." }
    ],
    achievements: [
        { title: "LogicLab Poster Presentation", issuer: "Mathematics Poster Presentation", icon: "fa-solid fa-award" },
        { title: "State Level Participant", issuer: "Indian Science & Engineering Fair (ISEF)", icon: "fa-solid fa-medal" },
        { title: "Algorithmic Toolbox Certification", issuer: "Coursera (UC San Diego & HSE)", icon: "fa-solid fa-certificate" },
        { title: "JavaScript Complete Guide", issuer: "Udemy Certified", icon: "fa-solid fa-certificate" },
        { title: "Software Product Management", issuer: "Coursera (University of Alberta)", icon: "fa-solid fa-certificate" },
        { title: "IBM Data Science Professional Certificate", issuer: "Coursera + IBM (In Progress)", icon: "fa-solid fa-certificate" },
        { title: "Communication Skills at Work", issuer: "FutureLearn (British Council)", icon: "fa-solid fa-certificate" }
    ]
};

// Global Store State
let appState = {};

// --- Initialize State ---
function initDataStore() {
    const saved = localStorage.getItem("drashtiai_store");
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch(e) {
            console.error("Error loading localStorage, resetting to defaults", e);
            appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    } else {
        appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
        localStorage.setItem("drashtiai_store", JSON.stringify(appState));
    }
}

function saveStateToStorage() {
    localStorage.setItem("drashtiai_store", JSON.stringify(appState));
}

function migratePortfolioData() {
    const ibmDataScienceTitle = "IBM Data Science Professional Certificate";
    const hasIbmDataScience = appState.achievements?.some(ach => ach.title === ibmDataScienceTitle);
    let changed = false;

    if (!hasIbmDataScience) {
        appState.achievements.push({
            title: ibmDataScienceTitle,
            issuer: "Coursera + IBM (In Progress)",
            icon: "fa-solid fa-certificate"
        });
        changed = true;
    }

    if (appState.profile) {
        if (!appState.profile.github || appState.profile.github === "https://github.com") {
            appState.profile.github = "https://github.com/drashti8175";
            changed = true;
        }

        if (!appState.profile.linkedin || appState.profile.linkedin === "https://linkedin.com") {
            appState.profile.linkedin = "https://www.linkedin.com/in/drashti-patel-31ba52333/";
            changed = true;
        }

        if (appState.profile.bio && appState.profile.bio.includes("cybersecurity mechanisms to solve real-world challenges.")) {
            appState.profile.bio = appState.profile.bio.replace(
                "cybersecurity mechanisms to solve real-world challenges.",
                "cybersecurity mechanisms, and data science workflows to solve real-world challenges."
            );
            changed = true;
        }
    }

    if (appState.skills && !appState.skills.some(skill => skill.name === "Data Science")) {
        appState.skills.push({ id: "s-datascience", name: "Data Science", category: "ai" });
        changed = true;
    }

    [
        { id: "s-pandas", name: "Pandas / NumPy", category: "ai" },
        { id: "s-plotly", name: "Plotly Dash", category: "ai" }
    ].forEach(skill => {
        if (appState.skills && !appState.skills.some(existing => existing.name === skill.name)) {
            appState.skills.push(skill);
            changed = true;
        }
    });

    const rideFairProject = {
        title: "RideFair",
        category: "ai",
        tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Plotly Dash", "NYC TLC Data", "Anomaly Detection"],
        desc: "Fare anomaly detector that uses real taxi trip data to estimate a fair fare baseline and flag rides where pricing is unusually high for the distance, duration, pickup time, and route pattern.",
        features: [
            "NYC TLC parquet ingestion with clean raw, processed, and sample dataset stages",
            "Feature engineering for hour, weekday, rush-hour, trip duration, fare per km, and route zones",
            "Baseline regression plus Isolation Forest workflow to compare expected fare vs anomaly score",
            "Dashboard plan with fare checker, surge heatmap, and fare-vs-distance trend explorer"
        ],
        role: "Planned the end-to-end data science workflow, model approach, dashboard design, and portfolio-ready execution roadmap.",
        link: "https://github.com/drashti8175"
    };

    if (appState.projects && !appState.projects.some(project => project.title === "RideFair")) {
        appState.projects.unshift(rideFairProject);
        changed = true;
    }

    if (appState.timeline && !appState.timeline.some(event => event.title === "Data Science Build: RideFair")) {
        appState.timeline.splice(Math.max(appState.timeline.length - 1, 0), 0, {
            year: "2026",
            title: "Data Science Build: RideFair",
            subtitle: "Fare Anomaly Detection Project",
            desc: "Designed an end-to-end taxi fare anomaly detector using NYC TLC trip data, regression baselines, Isolation Forest, and a Plotly Dash dashboard roadmap."
        });
        changed = true;
    }

    appState.projects?.forEach(project => {
        if (!project.link || project.link === "https://github.com") {
            project.link = "https://github.com/drashti8175";
            changed = true;
        }
    });

    if (changed) saveStateToStorage();
}

// --- DOM elements ---
const dom = {
    body: document.body,
    themeToggle: document.getElementById("theme-toggle"),
    mobileMenuBtn: document.getElementById("mobile-menu-btn"),
    navMenu: document.getElementById("nav-menu"),
    navLinks: document.querySelectorAll(".nav-link"),
    typewriter: document.getElementById("typewriter-text"),
    skillsLang: document.getElementById("skills-lang-list"),
    skillsAi: document.getElementById("skills-ai-list"),
    skillsWeb: document.getElementById("skills-web-list"),
    skillsDb: document.getElementById("skills-db-list"),
    projectsContainer: document.getElementById("projects-container"),
    projectFilters: document.querySelectorAll(".filter-btn"),
    timelineContainer: document.getElementById("timeline-container"),
    achievementsContainer: document.getElementById("achievements-container"),
    heatmapGrid: document.getElementById("heatmap-grid"),
    
    // AI Chat
    chatForm: document.getElementById("chat-input-form"),
    chatInput: document.getElementById("chat-input-text"),
    chatMessages: document.getElementById("chat-messages"),
    clearChat: document.getElementById("clear-chat"),
    quickQBtns: document.querySelectorAll(".quick-q-btn"),
    saveKeyBtn: document.getElementById("save-api-key"),
    apiKeyInput: document.getElementById("gemini-api-key"),
    keyStatus: document.getElementById("key-status-msg"),

    // Contact
    contactForm: document.getElementById("contact-form"),
    contactStatus: document.getElementById("contact-status-msg"),

    // Admin Modal
    adminTrigger: document.getElementById("admin-trigger"),
    adminModal: document.getElementById("admin-modal"),
    closeModal: document.querySelector(".close-modal"),
    adminAuth: document.getElementById("admin-auth"),
    adminPass: document.getElementById("admin-password"),
    adminLoginBtn: document.getElementById("admin-login-btn"),
    authError: document.getElementById("auth-error-msg"),
    adminDashContent: document.getElementById("admin-dashboard-content"),
    adminTabs: document.querySelectorAll(".tab-btn"),
    adminTabContents: document.querySelectorAll(".tab-content"),
    adminLogoutBtn: document.getElementById("logout-admin-btn"),
    resetFactoryBtn: document.getElementById("reset-factory-btn"),
    
    // Admin Subforms
    editProfileForm: document.getElementById("edit-profile-form"),
    editBio: document.getElementById("edit-bio"),
    editPhone: document.getElementById("edit-phone"),
    editEmail: document.getElementById("edit-email"),
    
    adminProjectsList: document.getElementById("admin-projects-list"),
    addProjectBtn: document.getElementById("add-project-btn"),
    projectForm: document.getElementById("project-form"),
    cancelProjBtn: document.getElementById("cancel-proj-btn"),
    projIndex: document.getElementById("proj-index"),
    projTitle: document.getElementById("proj-title"),
    projCategory: document.getElementById("proj-category"),
    projDesc: document.getElementById("proj-desc"),
    projTech: document.getElementById("proj-tech"),
    projFeatures: document.getElementById("proj-features"),
    projRole: document.getElementById("proj-role"),
    projLink: document.getElementById("proj-link"),
    projFormTitle: document.getElementById("project-form-title"),

    adminSkillsList: document.getElementById("admin-skills-list"),
    addSkillBtn: document.getElementById("add-skill-btn"),
    skillForm: document.getElementById("skill-form"),
    cancelSkillBtn: document.getElementById("cancel-skill-btn"),
    skillName: document.getElementById("skill-name"),
    skillCat: document.getElementById("skill-cat"),

    adminAchList: document.getElementById("admin-ach-list"),
    addAchBtn: document.getElementById("add-ach-btn"),
    achForm: document.getElementById("ach-form"),
    cancelAchBtn: document.getElementById("cancel-ach-btn"),
    achTitle: document.getElementById("ach-title"),
    achIssuer: document.getElementById("ach-issuer"),
    achIcon: document.getElementById("ach-icon"),

    // DrashtiOS
    bootScreen: document.getElementById("boot-screen"),
    enterWorkspace: document.getElementById("enter-workspace"),
    devTerminal: document.getElementById("dev-terminal"),
    terminalClose: document.getElementById("terminal-close"),
    terminalOutput: document.getElementById("terminal-output"),
    terminalForm: document.getElementById("terminal-form"),
    terminalInput: document.getElementById("terminal-input")
};

// Selected skill tracking for interactive filters
let activeFilterSkills = new Set();

/* ==========================================================================
   UI Rendering Pipelines
   ========================================================================== */

function renderAll() {
    renderProfileDetails();
    renderSkills();
    renderProjects("all");
    renderTimeline();
    renderAchievements();
}

function renderProfileDetails() {
    // Bio and Contacts
    const bioText = document.querySelector(".about-text p.lead-text");
    if (bioText) bioText.innerText = appState.profile.bio;
    
    const heroDesc = document.querySelector(".hero-description");
    if (heroDesc) heroDesc.innerText = `Computer Engineering student at CHARUSAT. Building intelligent solutions by integrating Generative AI, Full-Stack technologies, Cybersecurity frameworks, and Data Science workflows.`;

    document.querySelectorAll("a[href^='mailto:']").forEach(emailLink => {
        emailLink.href = `mailto:${appState.profile.email}`;
        if (!emailLink.classList.contains("social-icon")) {
            emailLink.innerText = appState.profile.email;
        }
    });
    const digitsOnlyPhone = appState.profile.phone.replace(/\D/g, "");
    const nationalPhone = digitsOnlyPhone.length > 10 ? digitsOnlyPhone.slice(-10) : digitsOnlyPhone;
    const phoneHref = nationalPhone.length === 10 ? `tel:+91${nationalPhone}` : `tel:${appState.profile.phone}`;
    const phoneLabel = nationalPhone.length === 10 ? `+91 ${nationalPhone.slice(0, 5)} ${nationalPhone.slice(5)}` : appState.profile.phone;
    document.querySelectorAll("a[href^='tel:']").forEach(phoneLink => {
        phoneLink.href = phoneHref;
        if (!phoneLink.classList.contains("social-icon")) {
            phoneLink.innerText = phoneLabel;
        }
    });

    document.querySelectorAll("a[aria-label='GitHub'], .footer-links a").forEach(link => {
        if (link.textContent.includes("GitHub") || link.getAttribute("aria-label") === "GitHub") {
            link.href = appState.profile.github;
        }
    });

    document.querySelectorAll("a[aria-label='LinkedIn'], .footer-links a").forEach(link => {
        if (link.textContent.includes("LinkedIn") || link.getAttribute("aria-label") === "LinkedIn") {
            link.href = appState.profile.linkedin;
        }
    });
    
    const contactLoc = document.querySelector(".contact-detail-item p");
    if (contactLoc) contactLoc.innerText = appState.profile.address;

    // Fill Admin Edit Bio fields
    dom.editBio.value = appState.profile.bio;
    dom.editEmail.value = appState.profile.email;
    dom.editPhone.value = appState.profile.phone;
}

function renderSkills() {
    // Clear list
    dom.skillsLang.innerHTML = "";
    dom.skillsAi.innerHTML = "";
    dom.skillsWeb.innerHTML = "";
    dom.skillsDb.innerHTML = "";

    appState.skills.forEach(skill => {
        const btn = document.createElement("button");
        btn.className = `skill-tag ${activeFilterSkills.has(skill.name) ? 'selected-skill' : ''}`;
        btn.innerText = skill.name;
        btn.dataset.skillName = skill.name;
        
        btn.addEventListener("click", () => {
            toggleSkillHighlight(skill.name);
        });

        if (skill.category === "lang") dom.skillsLang.appendChild(btn);
        else if (skill.category === "ai") dom.skillsAi.appendChild(btn);
        else if (skill.category === "web") dom.skillsWeb.appendChild(btn);
        else if (skill.category === "db") dom.skillsDb.appendChild(btn);
    });
}

function toggleSkillHighlight(skillName) {
    if (activeFilterSkills.has(skillName)) {
        activeFilterSkills.delete(skillName);
    } else {
        activeFilterSkills.add(skillName);
    }
    
    // Re-highlight tags
    document.querySelectorAll(".skill-tag").forEach(tag => {
        if (activeFilterSkills.has(tag.dataset.skillName)) {
            tag.classList.add("selected-skill");
        } else {
            tag.classList.remove("selected-skill");
        }
    });

    applyProjectCardHighlights();
}

function applyProjectCardHighlights() {
    const cards = document.querySelectorAll(".project-card");
    
    if (activeFilterSkills.size === 0) {
        // No skills selected, reset all projects
        cards.forEach(card => {
            card.classList.remove("highlighted-proj");
            card.style.opacity = "1";
        });
        return;
    }

    cards.forEach(card => {
        const cardTech = JSON.parse(card.dataset.techs || "[]");
        // Check intersection
        const matches = cardTech.some(t => activeFilterSkills.has(t));
        
        if (matches) {
            card.classList.add("highlighted-proj");
            card.style.opacity = "1";
        } else {
            card.classList.remove("highlighted-proj");
            card.style.opacity = "0.45";
        }
    });
}

function renderProjects(filterCategory = "all") {
    dom.projectsContainer.innerHTML = "";
    
    const filtered = appState.projects.filter(p => {
        if (filterCategory === "all") return true;
        return p.category === filterCategory;
    });

    if (filtered.length === 0) {
        dom.projectsContainer.innerHTML = `<div class="glass-card" style="grid-column: 1/-1; padding: 2rem; text-align:center; color: var(--text-secondary);">No projects found in this category. Use Admin Panel to add one!</div>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card glass-card";
        card.dataset.techs = JSON.stringify(p.tech);
        
        // Category tag class mapping
        const catClass = `cat-${p.category}`;
        
        // Form features html
        const featuresHtml = p.features.map(f => `<li><i class="fa-solid fa-circle"></i> ${f}</li>`).join("");
        
        // Tech badges
        const techHtml = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");

        card.innerHTML = `
            <div class="project-card-header">
                <span class="proj-cat-badge ${catClass}">${p.category}</span>
                <div class="project-links">
                    ${p.link ? `<a href="${p.link}" target="_blank" title="View Repository"><i class="fa-brands fa-github"></i></a>` : ''}
                    <a href="#ai-assistant" class="query-proj-ai" data-proj="${p.title}" title="Ask AI about this project"><i class="fa-solid fa-robot"></i></a>
                </div>
            </div>
            <h3>${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <ul class="project-features">
                ${featuresHtml}
            </ul>
            <p class="project-role-text">Role: <span>${p.role}</span></p>
            <div class="project-techs">
                ${techHtml}
            </div>
            <div class="project-actions">
                <button class="btn btn-outline ask-proj-btn" data-proj="${p.title}"><i class="fa-solid fa-circle-question"></i> Ask Info</button>
                <a href="#contact" class="btn btn-primary"><i class="fa-solid fa-file-signature"></i> Hire Me</a>
            </div>
        `;

        dom.projectsContainer.appendChild(card);
    });

    // Wire up Ask Info buttons inside project cards
    document.querySelectorAll(".ask-proj-btn, .query-proj-ai").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const projTitle = btn.dataset.proj;
            triggerAiQuestion(`Explain the ${projTitle} project in detail.`);
        });
    });

    // Ensure skill filters carry over if projects list updates
    applyProjectCardHighlights();
}

function renderTimeline() {
    dom.timelineContainer.innerHTML = "";
    
    appState.timeline.forEach((event, idx) => {
        const item = document.createElement("div");
        const direction = idx % 2 === 0 ? "left" : "right";
        item.className = `timeline-event ${direction}`;
        
        item.innerHTML = `
            <div class="timeline-card glass-card">
                <span class="timeline-date">${event.year}</span>
                <h3>${event.title}</h3>
                <h4>${event.subtitle}</h4>
                <p>${event.desc}</p>
            </div>
        `;
        dom.timelineContainer.appendChild(item);
    });
}

function renderAchievements() {
    dom.achievementsContainer.innerHTML = "";
    
    appState.achievements.forEach(ach => {
        const card = document.createElement("div");
        card.className = "ach-card glass-card";
        
        card.innerHTML = `
            <div class="ach-icon-box">
                <i class="${ach.icon || 'fa-solid fa-award'}"></i>
            </div>
            <div class="ach-details">
                <h3>${ach.title}</h3>
                <p>${ach.issuer}</p>
            </div>
        `;
        dom.achievementsContainer.appendChild(card);
    });
}

// Generate a portfolio activity heatmap-style visualization
function generateGithubHeatmap() {
    dom.heatmapGrid.innerHTML = "";
    // Total cells = 28 columns * 7 rows = 196 cells
    const count = 196;
    for (let i = 0; i < count; i++) {
        const cell = document.createElement("div");
        // Random level of commits (0 to 4)
        // Set weights to mimic active dev (more level 1-3, less 4, and some 0s)
        const rand = Math.random();
        let level = 0;
        if (rand > 0.85) level = 4;
        else if (rand > 0.65) level = 3;
        else if (rand > 0.4) level = 2;
        else if (rand > 0.15) level = 1;
        
        cell.className = `heatmap-cell level-${level}`;
        
        // Add random hover title info
        const date = new Date();
        date.setDate(date.getDate() - (count - i));
        const commits = level === 0 ? "No" : level * 2 + Math.floor(Math.random() * 2);
        cell.title = `${commits} commits on ${date.toDateString()}`;
        
        dom.heatmapGrid.appendChild(cell);
    }
}

/* ==========================================================================
   Interactive Animation: Canvas Particles
   ========================================================================== */

function setupCanvasParticles() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const count = Math.min(60, Math.floor((width * height) / 22000)); // Dynamic count
    const connectionDist = 120;
    
    const mouse = { x: null, y: null, active: false };

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Boundary bounce
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse attraction/repulsion
            if (mouse.active) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 180) {
                    // Soft push away
                    const force = (180 - dist) / 1000;
                    this.x -= dx * force * 0.15;
                    this.y -= dy * force * 0.15;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = document.body.classList.contains("light-mode") ? "rgba(59, 130, 246, 0.45)" : "rgba(0, 242, 254, 0.55)";
            ctx.fill();
        }
    }

    // Spawn Particles
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw links
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                
                if (dist < connectionDist) {
                    const alpha = (1 - (dist / connectionDist)) * 0.14;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = document.body.classList.contains("light-mode") 
                        ? `rgba(99, 102, 241, ${alpha})`
                        : `rgba(168, 85, 247, ${alpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.active) {
                const mDist = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
                if (mDist < 160) {
                    const alpha = (1 - (mDist / 160)) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }
    
    animate();

    // Event listeners
    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener("mouseleave", () => {
        mouse.active = false;
    });
}

/* ==========================================================================
   Typewriter Effect
   ========================================================================== */

function initTypewriter() {
    const words = [
        "AI & Full Stack Developer.",
        "Generative AI Enthusiast.",
        "Computer Engineering Student."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            dom.typewriter.innerText = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = 50;
        } else {
            dom.typewriter.innerText = currentWord.substring(0, charIndex + 1);
            charIndex++;
            delay = 120;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400; // Pause before typing next word
        }

        setTimeout(type, delay);
    }

    type();
}

/* ==========================================================================
   DrashtiAI Bot: Local Context QA Engine
   ========================================================================== */

const LOCAL_KB = {
    greetings: [
        "Hello! I am DrashtiAI, a cognitive identity assistant. Ask me anything about Drashti Patel's skills, qualifications, or internship!",
        "Hi there! Feel free to ask me details about Drashti's projects (RideFair, MediCore, LogicLab, CarbonWise AI), certifications, or how to contact her."
    ],
    contact: `You can reach Drashti Patel directly through:
📧 Email: drashtiipatel2006@gmail.com
📞 Phone: +91 79902 86668
📍 Location: Endhal, Navsari, Gujarat, India - 396430
🔗 GitHub: github.com/drashti8175
🔗 LinkedIn: linkedin.com/in/drashti-patel-31ba52333`,
    education: `Drashti Patel is pursuing a Bachelor of Technology (B.Tech) in Computer Engineering at Chandubhai S. Patel Institute of Technology (CSPIT), CHARUSAT University (Changa, Gujarat) for the batch 2024-2028.
📈 She currently maintains an outstanding 7.43 SGPA up to Semester 3.
🎓 She completed her 10th Board GSEB exams in 2022 from A B School, Navsari with 93.00%.`,
    internship: `🌱 AI for Sustainability Virtual Internship
🏢 Organization: 1M1B (One Million for One Billion) in collaboration with IBM SkillsBuild & AICTE.
📅 Duration: May 2026 – July 2026
📝 Scope & Learning: Advanced Generative AI architectures, prompt templates, RAG mechanisms, and IBM Granite Foundation Models.
🏆 Capstone Project: Coded 'CarbonWise AI' carbon footprint tracking assistant using IBM Granite.`,
    projects: {
        ridefair: `🚕 RideFair (Data Science | Anomaly Detection)
- Description: Fare anomaly detector that estimates a fair taxi/cab fare baseline and flags unusually high fares using trip distance, duration, pickup time, weekday, and route patterns.
- Dataset Plan: Start with NYC TLC Yellow Taxi parquet data, then optionally validate with a smaller manually sampled India ride-hailing dataset.
- Technologies: Python, Pandas, NumPy, Scikit-Learn, Plotly Dash, Parquet, anomaly detection.
- Key Elements: Data cleaning, feature engineering, regression fair-fare baseline, Isolation Forest anomaly scoring, fare checker, surge heatmap, and trend explorer dashboard.`,
        carbonwise: `🌍 CarbonWise AI (Generative AI | Sustainability)
- Description: AI sustainability dashboard estimating carbon footprint of daily behaviors and outputting custom reductions.
- Technologies: React, Tailwind CSS, FastAPI, Python, IBM Granite models, Prompt Engineering, RAG.
- Key Elements: Lifestyle forms, carbon calculation formulas, AI-powered coach answers, and score dashboards.`,
        medicore: `🏥 MediCore (Full-Stack Healthcare)
- Description: Comprehensive clinic management suite simplifying appointments, consultations, and prescriptions.
- Technologies: React.js, Node.js, Express.js, MongoDB Atlas, Socket.IO, JWT.
- Key Elements: Real-time patient queue trackers via Sockets, role authorization, prescription generators, admin revenue analytics.`,
        logiclab: `🧪 LogicLab (AI | EduTech)
- Description: Boolean compiler translating natural text constraints into Boolean statements and printing complete truth tables.
- Technologies: TypeScript, Next.js, Tailwind CSS, Genkit (AI), JavaScript.
- Key Elements: Prompt translators, automatic truth table generators, educational exercises, and math summaries.`,
        shopstack: `📦 ShopStack (DBMS | Inventory)
- Description: Retail inventory monitor automating restocking operations using structured databases.
- Technologies: HTML, CSS, JavaScript, Node.js, Express.js, MySQL.
- Key Elements: Automated inventory updates using triggers, alerts via MySQL Views, checkout processes via Stored Procedures.`,
        phishguard: `🛡️ PhishGuard AI (Cybersecurity | ML)
- Description: Anti-phishing defense console grading threat risks of input URLs.
- Technologies: Python, Machine Learning (Scikit-Learn), FastAPI, React.
- Key Elements: Real-time threat classification algorithms, security scoring gauges, malicious factors explanations.`,
        visionflow: `🎥 VisionFlow AI (AI Productivity)
- Description: Video processor identifying tasks, scheduling updates, and extracting highlights from recordings.
- Technologies: Next.js, Python, Whisper Speech Models, Computer Vision, Gemini/GPT APIs.
- Key Elements: Audio transcript generators, task extraction prompts, important moment visual feeds.`
    },
    skills: `Drashti Patel's professional skillset includes:
💻 Languages: C, C++, Java, Python, JavaScript, TypeScript, PHP
🌐 Web Dev: React.js, Next.js, Node.js, Express.js, Tailwind CSS, Socket.IO, JWT
🗄️ Databases: MySQL, Oracle, MongoDB Atlas, SQLite
🤖 AI & ML: Generative AI, RAG Systems, IBM Granite Models, Prompt Engineering, Machine Learning (Scikit-Learn), Pandas/NumPy, Plotly Dash, Genkit AI, Data Science foundations through IBM/Coursera
🛠️ Systems: Windows, Linux, Ubuntu, Git & GitHub`
};

function queryLocalKnowledgeBase(query) {
    const q = query.toLowerCase();
    
    // Greeting checks
    if (/hi|hello|hey|greetings|welcome/.test(q)) {
        return LOCAL_KB.greetings[Math.floor(Math.random() * LOCAL_KB.greetings.length)];
    }
    
    // Contact
    if (/contact|email|phone|call|address|reach|linkedin|github/.test(q)) {
        return LOCAL_KB.contact;
    }
    
    // Education
    if (/education|degree|college|university|charusat|cspit|school|gpa|cgpa|sgpa|marks|10th/.test(q)) {
        return LOCAL_KB.education;
    }

    // Internship
    if (/intern|internship|1m1b|ibm|skillsbuild|aicte/.test(q)) {
        return LOCAL_KB.internship;
    }

    // Project checks
    if (/ridefair|ride fair|fare|cab|taxi|surge|anomaly|tlc/.test(q)) {
        return LOCAL_KB.projects.ridefair;
    }
    if (/carbonwise|carbon|footprint|estimator|sustainability/.test(q)) {
        return LOCAL_KB.projects.carbonwise;
    }
    if (/medicore|clinic|doctor|hospital|patient|queue/.test(q)) {
        return LOCAL_KB.projects.medicore;
    }
    if (/logiclab|truth table|boolean|expression|logical/.test(q)) {
        return LOCAL_KB.projects.logiclab;
    }
    if (/shopstack|inventory|retail|mysql|trigger|stored procedure/.test(q)) {
        return LOCAL_KB.projects.shopstack;
    }
    if (/phishguard|phish|cyber|security|threat|url|malicious/.test(q)) {
        return LOCAL_KB.projects.phishguard;
    }
    if (/visionflow|video|recording|transcription|whisper|meeting/.test(q)) {
        return LOCAL_KB.projects.visionflow;
    }
    if (/project|portfolio|work|code|showcase/.test(q)) {
        return `Drashti has built several highly technical projects:
1. RideFair: Data science fare anomaly detector for unfair surge pricing
2. CarbonWise AI: IBM Granite-based Carbon Footprint Estimator
3. VisionFlow AI: Video screen-capture analyzer for tasks
4. PhishGuard AI: ML classifier detecting web phishing URL threats
5. MediCore: Patient queue & clinic management via Socket.IO
6. LogicLab: Boolean generator using Next.js & Genkit AI
7. ShopStack: SQL triggers-optimized inventory system
Ask me about any specific project for details!`;
    }

    // Skills
    if (/skills|languages|technologies|frameworks|database|python|react|node|c\+\+/.test(q)) {
        return LOCAL_KB.skills;
    }
    
    // Achievements
    if (/achievement|certification|poster|isef|award|coursera|udemy|certificate/.test(q)) {
        return `Drashti's achievements and certifications include:
🏆 Presented LogicLab in Mathematics Poster Presentation
🏅 State-Level participant in Indian Science & Engineering Fair (ISEF)
📜 Algorithmic Toolbox (Coursera - UC San Diego)
📜 JavaScript Complete Guide (Udemy)
📜 Introduction to Software Product Management (Coursera - University of Alberta)
📜 IBM Data Science Professional Certificate (Coursera + IBM - In Progress)
📜 Communication and Interpersonal Skills at Work (FutureLearn - British Council)`;
    }

    // Defaults
    return `Interesting question! I am configured to answer questions regarding Drashti's qualifications, skills, and projects. 
Could you please ask about:
- Her projects (e.g. "Tell me about MediCore")
- Her skills (e.g. "What programming languages does she know?")
- Her educational details or internship at IBM/1M1B.
- Her contact address or email.
(Or activate Advanced Mode with a Gemini API Key to talk to a full conversational LLM model!)`;
}

/* ==========================================================================
   Gemini API Live Integration
   ========================================================================== */

let geminiApiKey = sessionStorage.getItem("gemini_api_key") || localStorage.getItem("gemini_api_key") || "";

function checkSavedApiKey() {
    if (geminiApiKey) {
        dom.apiKeyInput.value = "••••••••••••••••••••••••";
        dom.keyStatus.innerText = "Advanced Mode: Gemini Active";
        dom.keyStatus.className = "key-status success";
        document.querySelector(".chat-model-indicator").innerText = "Gemini 1.5 Flash (Live)";
    }
}

function initDrashtiOS() {
    if (dom.enterWorkspace && dom.bootScreen) {
        dom.enterWorkspace.addEventListener("click", () => {
            dom.bootScreen.classList.add("hidden");
            sessionStorage.setItem("drashtios_boot_seen", "true");
        });

        if (sessionStorage.getItem("drashtios_boot_seen") === "true") {
            dom.bootScreen.classList.add("hidden");
        }
    }

    const openTerminal = () => {
        if (!dom.devTerminal) return;
        dom.devTerminal.classList.add("open");
        dom.devTerminal.setAttribute("aria-hidden", "false");
        if (dom.terminalInput) dom.terminalInput.focus();
    };

    const closeTerminal = () => {
        if (!dom.devTerminal) return;
        dom.devTerminal.classList.remove("open");
        dom.devTerminal.setAttribute("aria-hidden", "true");
    };

    if (dom.terminalClose) {
        dom.terminalClose.addEventListener("click", closeTerminal);
    }

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "`") {
            e.preventDefault();
            if (dom.devTerminal && dom.devTerminal.classList.contains("open")) {
                closeTerminal();
            } else {
                openTerminal();
            }
        }
    });

    const terminalResponses = {
        help: "Available commands: about, projects, skills, contact, resume, github, clear.",
        about: `${appState.profile.name}: ${appState.profile.title}. ${appState.profile.bio}`,
        projects: appState.projects.map((p, idx) => `${idx + 1}. ${p.title} - ${p.category}`).join("<br>"),
        skills: appState.skills.map(s => s.name).join(", "),
        contact: `Email: ${appState.profile.email}<br>Phone: ${appState.profile.phone}<br>GitHub: ${appState.profile.github}<br>LinkedIn: ${appState.profile.linkedin}`,
        resume: "Resume route is ready for a PDF link when you add one.",
        github: appState.profile.github
    };

    if (dom.terminalForm) {
        dom.terminalForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const command = dom.terminalInput.value.trim().toLowerCase();
            if (!command) return;

            if (command === "clear") {
                dom.terminalOutput.innerHTML = "";
                dom.terminalInput.value = "";
                return;
            }

            const response = terminalResponses[command] || `Unknown command: ${command}. Type help.`;
            dom.terminalOutput.insertAdjacentHTML("beforeend", `<p><strong>&gt; ${command}</strong></p><p>${response}</p>`);
            dom.terminalOutput.scrollTop = dom.terminalOutput.scrollHeight;
            dom.terminalInput.value = "";
        });
    }

    const cyberSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "b", "a"];
    let pressedKeys = [];
    document.addEventListener("keydown", (e) => {
        pressedKeys.push(e.key);
        pressedKeys = pressedKeys.slice(-cyberSequence.length);
        if (pressedKeys.join("|").toLowerCase() === cyberSequence.join("|").toLowerCase()) {
            dom.body.classList.toggle("cyber-mode");
            openTerminal();
            dom.terminalOutput.insertAdjacentHTML("beforeend", "<p>Cyber Mode toggled. Loading AI agent interface...</p>");
        }
    });
}

async function queryGeminiAPI(queryText) {
    const systemPrompt = `You are DrashtiAI, the intelligent assistant representing Drashti Patel, an AI & Full Stack Developer who is a Computer Engineering student at CSPIT, CHARUSAT University.
Your task is to answer inquiries from recruiters, colleagues, and visitors using the background facts below.
Answer in a warm, professional, engineering-savvy, and concise manner. Emphasize her projects, skills, and recent IBM SkillsBuild internship.

Here is the exact data about Drashti Patel:
${JSON.stringify(appState, null, 2)}

Instructions:
- Speak on behalf of Drashti's assistant or her representative.
- If they ask basic off-topic things, gently pivot back to her resume, projects, or career.
- Format responses cleanly using bold tags, emojis, and item lists where helpful.`;

    const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

    const requestPayload = {
        contents: [
            {
                role: "user",
                parts: [{ text: queryText }]
            }
        ],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
        generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 350
        }
    };

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestPayload)
        });

        if (!response.ok) {
            throw new Error(`API Error: Status ${response.status}`);
        }

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error("Invalid response format from Gemini");
        }
    } catch(err) {
        console.error("Gemini API call failed, reverting to local KB.", err);
        return `[System Note: Gemini API Call Failed (${err.message}). Falling back to local index engine.]\n\n` + queryLocalKnowledgeBase(queryText);
    }
}

/* ==========================================================================
   Chat Interactions
   ========================================================================== */

function addChatMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${sender === 'user' ? 'user-msg' : 'ai-msg'}`;
    
    const icon = sender === 'user' ? 'fa-solid fa-user' : 'fa-solid fa-robot';
    
    msgDiv.innerHTML = `
        <div class="msg-avatar"><i class="${icon}"></i></div>
        <div class="msg-bubble">
            <p>${text.replace(/\n/g, "<br>")}</p>
        </div>
    `;
    
    dom.chatMessages.appendChild(msgDiv);
    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const indDiv = document.createElement("div");
    indDiv.className = "chat-msg ai-msg typing-indicator-msg";
    indDiv.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="msg-bubble">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    dom.chatMessages.appendChild(indDiv);
    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
    return indDiv;
}

async function handleChatSubmit(e) {
    if (e) e.preventDefault();
    
    const query = dom.chatInput.value.trim();
    if (!query) return;
    
    dom.chatInput.value = "";
    addChatMessage('user', query);
    
    const indicator = addTypingIndicator();
    
    // Simulate thinking delay
    setTimeout(async () => {
        indicator.remove();
        
        let response = "";
        if (geminiApiKey) {
            response = await queryGeminiAPI(query);
        } else {
            response = queryLocalKnowledgeBase(query);
        }
        
        addChatMessage('ai', response);
    }, 800);
}

function triggerAiQuestion(questionText) {
    dom.chatInput.value = questionText;
    // Scroll to chatbot
    document.getElementById("ai-assistant").scrollIntoView({ behavior: "smooth" });
    handleChatSubmit();
}

/* ==========================================================================
   Admin Panel Management
   ========================================================================== */

function renderAdminLists() {
    // 1. Projects
    dom.adminProjectsList.innerHTML = "";
    appState.projects.forEach((p, idx) => {
        const row = document.createElement("div");
        row.className = "admin-item-row";
        row.innerHTML = `
            <div>
                <span class="admin-item-title">${p.title}</span>
                <span class="admin-item-meta">(${p.category})</span>
            </div>
            <div class="admin-item-actions">
                <button class="edit-item-btn" data-idx="${idx}" title="Edit Project"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete-item-btn" data-idx="${idx}" title="Delete Project"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        dom.adminProjectsList.appendChild(row);
    });

    // 2. Skills
    dom.adminSkillsList.innerHTML = "";
    appState.skills.forEach((s, idx) => {
        const row = document.createElement("div");
        row.className = "admin-item-row";
        row.innerHTML = `
            <div>
                <span class="admin-item-title">${s.name}</span>
                <span class="admin-item-meta">(${s.category})</span>
            </div>
            <div class="admin-item-actions">
                <button class="delete-skill-btn" data-idx="${idx}" title="Delete Skill"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        dom.adminSkillsList.appendChild(row);
    });

    // 3. Achievements
    dom.adminAchList.innerHTML = "";
    appState.achievements.forEach((ach, idx) => {
        const row = document.createElement("div");
        row.className = "admin-item-row";
        row.innerHTML = `
            <div>
                <span class="admin-item-title">${ach.title}</span>
                <span class="admin-item-meta">(${ach.issuer})</span>
            </div>
            <div class="admin-item-actions">
                <button class="delete-ach-btn" data-idx="${idx}" title="Delete Achievement"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        dom.adminAchList.appendChild(row);
    });

    // Bind dynamic row actions
    bindAdminListEvents();
}

function bindAdminListEvents() {
    // Delete Project
    document.querySelectorAll(".delete-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.idx);
            if (confirm(`Are you sure you want to delete ${appState.projects[idx].title}?`)) {
                appState.projects.splice(idx, 1);
                saveStateToStorage();
                renderProjects();
                renderAdminLists();
            }
        });
    });

    // Edit Project
    document.querySelectorAll(".edit-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.idx);
            const p = appState.projects[idx];
            
            dom.projIndex.value = idx;
            dom.projTitle.value = p.title;
            dom.projCategory.value = p.category;
            dom.projDesc.value = p.desc;
            dom.projTech.value = p.tech.join(", ");
            dom.projFeatures.value = p.features.join("\n");
            dom.projRole.value = p.role;
            dom.projLink.value = p.link || "";
            
            dom.projFormTitle.innerText = `Edit Project: ${p.title}`;
            dom.projectForm.style.display = "block";
        });
    });

    // Delete Skill
    document.querySelectorAll(".delete-skill-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.idx);
            appState.skills.splice(idx, 1);
            saveStateToStorage();
            renderSkills();
            renderAdminLists();
        });
    });

    // Delete Achievement
    document.querySelectorAll(".delete-ach-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.idx);
            appState.achievements.splice(idx, 1);
            saveStateToStorage();
            renderAchievements();
            renderAdminLists();
        });
    });
}

/* ==========================================================================
   Page Events Setup
   ========================================================================== */

function setupEventListeners() {
    // Theme Toggle
    dom.themeToggle.addEventListener("click", () => {
        dom.body.classList.toggle("light-mode");
        const isLight = dom.body.classList.contains("light-mode");
        dom.themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });

    // Mobile Menu Toggle
    dom.mobileMenuBtn.addEventListener("click", () => {
        dom.navMenu.classList.toggle("open");
        dom.mobileMenuBtn.querySelector("i").classList.toggle("fa-bars");
        dom.mobileMenuBtn.querySelector("i").classList.toggle("fa-xmark");
    });

    // Close Menu on Link Click
    dom.navLinks.forEach(link => {
        link.addEventListener("click", () => {
            dom.navMenu.classList.remove("open");
            dom.mobileMenuBtn.querySelector("i").className = "fa-solid fa-bars";
        });
    });

    // Navbar Scroll Highlight
    window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section");
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                current = sec.getAttribute("id");
            }
        });

        dom.navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.sec === current) {
                link.classList.add("active");
            }
        });
    });

    // Project Category Filtering
    dom.projectFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            dom.projectFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProjects(btn.dataset.filter);
        });
    });

    // Save Gemini API Key
    dom.saveKeyBtn.addEventListener("click", () => {
        const key = dom.apiKeyInput.value.trim();
        if (key === "") {
            geminiApiKey = "";
            sessionStorage.removeItem("gemini_api_key");
            localStorage.removeItem("gemini_api_key");
            dom.keyStatus.innerText = "Key Cleared. Reverted to Local Engine.";
            dom.keyStatus.className = "key-status error";
            document.querySelector(".chat-model-indicator").innerText = "Local Index Engine v1.0.4";
            dom.apiKeyInput.value = "";
        } else {
            geminiApiKey = key;
            localStorage.setItem("gemini_api_key", key);
            dom.keyStatus.innerText = "Key Stored. Advanced Mode Active!";
            dom.keyStatus.className = "key-status success";
            document.querySelector(".chat-model-indicator").innerText = "Gemini 1.5 Flash (Live)";
            dom.apiKeyInput.value = "••••••••••••••••••••••••";
        }
    });

    // Chat Actions
    dom.chatForm.addEventListener("submit", handleChatSubmit);
    dom.clearChat.addEventListener("click", () => {
        dom.chatMessages.innerHTML = `
            <div class="chat-msg ai-msg">
                <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
                <div class="msg-bubble">
                    <p>Console Cleared. Ask me anything about Drashti Patel's professional index!</p>
                </div>
            </div>
        `;
    });

    // Suggested Questions
    dom.quickQBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            triggerAiQuestion(btn.innerText);
        });
    });

    // Contact Form Submit
    dom.contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        dom.contactStatus.innerText = "Sending message securely...";
        dom.contactStatus.className = "contact-status success";

        // Simulated sending process
        setTimeout(() => {
            dom.contactStatus.innerText = "Thank you! Your message has been routed successfully. Drashti will reply shortly.";
            dom.contactStatus.className = "contact-status success";
            dom.contactForm.reset();
            
            setTimeout(() => {
                dom.contactStatus.innerText = "";
            }, 6000);
        }, 1200);
    });

    /* --- Admin Modal Listeners --- */
    
    // Open Modal
    const openModal = () => {
        dom.adminModal.style.display = "block";
        dom.body.style.overflow = "hidden"; // Disable scroll background
        // Clear fields
        dom.adminPass.value = "";
        dom.authError.innerText = "";
    };
    
    dom.adminTrigger.addEventListener("click", openModal);
    
    // Close Modal
    const closeModalFn = () => {
        dom.adminModal.style.display = "none";
        dom.body.style.overflow = "";
    };
    dom.closeModal.addEventListener("click", closeModalFn);
    
    window.addEventListener("click", (e) => {
        if (e.target === dom.adminModal) closeModalFn();
    });

    // Admin Auth
    dom.adminLoginBtn.addEventListener("click", () => {
        const pass = dom.adminPass.value.trim();
        if (pass === "drashtiai") {
            dom.adminAuth.style.display = "none";
            dom.adminDashContent.style.display = "flex";
            renderAdminLists();
        } else {
            dom.authError.innerText = "Invalid Master Code. Please try again.";
        }
    });
    
    dom.adminPass.addEventListener("keypress", (e) => {
        if (e.key === "Enter") dom.adminLoginBtn.click();
    });

    // Admin Tabs Switching
    dom.adminTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            dom.adminTabs.forEach(b => b.classList.remove("active"));
            dom.adminTabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(btn.dataset.tab).classList.add("active");
        });
    });

    // Admin Bio Submit
    dom.editProfileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        appState.profile.bio = dom.editBio.value.trim();
        appState.profile.email = dom.editEmail.value.trim();
        appState.profile.phone = dom.editPhone.value.trim();
        
        saveStateToStorage();
        renderProfileDetails();
        alert("Basic profile details updated successfully!");
    });

    // Show Add Project Form
    dom.addProjectBtn.addEventListener("click", () => {
        dom.projIndex.value = "";
        dom.projectForm.reset();
        dom.projFormTitle.innerText = "Add New Project";
        dom.projectForm.style.display = "block";
    });

    dom.cancelProjBtn.addEventListener("click", () => {
        dom.projectForm.style.display = "none";
    });

    // Save Project Form
    dom.projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const idxVal = dom.projIndex.value;
        const pData = {
            title: dom.projTitle.value.trim(),
            category: dom.projCategory.value.trim(),
            desc: dom.projDesc.value.trim(),
            tech: dom.projTech.value.split(",").map(t => t.trim()).filter(t => t),
            features: dom.projFeatures.value.split("\n").map(f => f.trim()).filter(f => f),
            role: dom.projRole.value.trim(),
            link: dom.projLink.value.trim() || null
        };

        if (idxVal === "") {
            // Add new
            appState.projects.push(pData);
        } else {
            // Update existing
            const idx = parseInt(idxVal);
            appState.projects[idx] = pData;
        }

        saveStateToStorage();
        renderProjects();
        renderAdminLists();
        dom.projectForm.style.display = "none";
    });

    // Show Add Skill Form
    dom.addSkillBtn.addEventListener("click", () => {
        dom.skillForm.reset();
        dom.skillForm.style.display = "block";
    });

    dom.cancelSkillBtn.addEventListener("click", () => {
        dom.skillForm.style.display = "none";
    });

    // Save Skill Form
    dom.skillForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const sData = {
            id: "s-" + Date.now(),
            name: dom.skillName.value.trim(),
            category: dom.skillCat.value
        };

        appState.skills.push(sData);
        saveStateToStorage();
        renderSkills();
        renderAdminLists();
        dom.skillForm.style.display = "none";
    });

    // Show Add Ach Form
    dom.addAchBtn.addEventListener("click", () => {
        dom.achForm.reset();
        dom.achForm.style.display = "block";
    });

    dom.cancelAchBtn.addEventListener("click", () => {
        dom.achForm.style.display = "none";
    });

    // Save Ach Form
    dom.achForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const aData = {
            title: dom.achTitle.value.trim(),
            issuer: dom.achIssuer.value.trim(),
            icon: dom.achIcon.value.trim() || "fa-solid fa-award"
        };

        appState.achievements.push(aData);
        saveStateToStorage();
        renderAchievements();
        renderAdminLists();
        dom.achForm.style.display = "none";
    });

    // Factory Reset
    dom.resetFactoryBtn.addEventListener("click", () => {
        if (confirm("Warning: This will clear all your custom modifications and restore Drashti's default portfolio data. Proceed?")) {
            appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveStateToStorage();
            renderAll();
            renderAdminLists();
            alert("Portfolio reset to default state!");
        }
    });

    // Admin Logout
    dom.logoutAdminBtn.addEventListener("click", () => {
        dom.adminAuth.style.display = "block";
        dom.adminDashContent.style.display = "none";
        closeModalFn();
    });
}

/* ==========================================================================
   Initialization Execution
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initDataStore();
    migratePortfolioData();
    renderAll();
    generateGithubHeatmap();
    setupCanvasParticles();
    initTypewriter();
    checkSavedApiKey();
    initDrashtiOS();
    setupEventListeners();
});
