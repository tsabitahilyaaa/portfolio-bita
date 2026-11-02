"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react"

const projects = [
  { title: "CV Atmobrass Jaya", type: "Featured · Web Application Development", projectTitle: "Pengembangan Sistem Forecasting Penjualan dan Rekomendasi Produk Berbasis Website Menggunakan Machine Learning", description: "Developed a web-based business platform featuring product management, online ordering, and an integrated checkout system. The application integrates XGBoost for sales forecasting and Content-Based Filtering for personalized product recommendations. My primary contributions focused on web application development, database management, and implementing the product recommendation system.", role: "Web Application Developer · Database Management · Content-Based Filtering", tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Python", "XGBoost", "Content-Based Filtering"], featured: true, link: "https://github.com/tsabitahilyaaa/atmobrass-jaya", image: "/atmobrass.png" },
  { title: "Online Exam Management Application", type: "Frontend Development", description: "A digital platform to create exam schedules, monitor ongoing tests, and generate participant score summaries efficiently and securely.", image: "/ujian.png", tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"], link: "https://github.com/tsabitahilyaaa/aplikasi-ujian-online" },
  { title: "Personal Portfolio Website", type: "UI/UX Designer & Frontend Developer", description: "A personal branding website that showcases Tsabitah's design and development skills through an engaging, elegant portfolio layout.", image: "/portow.png", tags: ["Figma", "HTML", "CSS"], link: "https://github.com/tsabitahilyaaa/portfolio-bita" },
  { title: "SELIN — Online Exam System", type: "UI/UX Design", description: "A comprehensive online examination platform with real-time monitoring, automated grading, and detailed analytics for educational institutions.", image: "/selin.png", tags: ["Figma"], link: "https://www.figma.com/design/0Jd7QQOBU7W8hSSSYwznfX/Untitled?node-id=0-1&p=f&t=IKfcMeOHUdUI9Jjp-0" },
  { title: "Bookstown App", type: "Mobile UI/UX Design", description: "A modern book discovery and reading tracking application with social features, personalized recommendations, and reading progress tracking.", image: "/bookstown.jpg", tags: ["Figma"], link: "https://www.figma.com/proto/jSxqhm7VsGQWisEW9Q5KWB/SuperShy_BooksTown?node-id=25-3&p=f&t=rt4mLa4rPCoZnWrN-0&scaling=scale-down&content-scaling=fixed&page-id=25%3A2&starting-point-node-id=25%3A3" },
]

const certificates = [
  { title: "MikroTik Certificate", issuer: "MikroTik", date: "2026", preview: "/mikrotik.jpg", file: "/mikrotik.pdf" },
  { title: "TEPPS (Test of English Proficiency for Polines Students)", issuer: "UPA Bahasa Politeknik Negeri Semarang", date: "Score: 500 · 2026", preview: "/TEPPS.jpg", file: "/TEPPS.pdf" },
  { title: "Internship Certificate", issuer: "RS Sarkies 'Aisyiyah Kudus", date: "2025", preview: "/sertif-magang.jpg", file: "/sertif-magang.pdf" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", date: "2025", preview: "/cisco.png", file: "/cisco.pdf" },
  { title: "Staff Bidang Pengabdian Masyarakat", issuer: "Himpunan Mahasiswa Teknik Elektro (HME) Polines", date: "2024 – 2025", preview: "/sertif-hme.jpg", file: "/sertif-hme.pdf"},
  { title: "Database Programming with SQL", issuer: "Oracle Academy", date: "2024", preview: "/oracle1.png", file: "/oracle1.pdf" },
  { title: "Career Essentials in Generative AI", issuer: "Microsoft and LinkedIn", date: "2024", preview: "/ai.png", file: "/ai.pdf" },
  { title: "Database Design", issuer: "Oracle Academy", date: "2024", preview: "/oracle2.png", file: "/oracle2.pdf" },
  { title: "Bronze Award", issuer: "Indonesia National Science Enterprise Challenge", date: "2020", preview: "/inasec.png", file: "/inasec.pdf" },
]

const tools = ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Python", "Git / GitHub", "Next.js", "TypeScript", "Figma", "Tailwind CSS"]
const socials = [
  { label: "Email", value: "tsabitahhilyatul@gmail.com", href: "mailto:tsabitahhilyatul@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/tsabitah-hilyatul-aulia-474329335", href: "https://linkedin.com/in/tsabitah-hilyatul-aulia-474329335", icon: Linkedin },
  { label: "WhatsApp", value: "Start a conversation", href: "https://wa.me/6285876038296", icon: MessageCircle },
  { label: "Instagram", value: "@tsabitahily", href: "https://instagram.com/tsabitahily", icon: Instagram },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      const current = ["home", "about", "education", "experience", "projects", "leadership", "skills", "certificates", "contact"].find((id) => {
        const element = document.getElementById(id)
        return element && window.scrollY + 180 >= element.offsetTop && window.scrollY + 180 < element.offsetTop + element.offsetHeight
      })
      if (current) setActive(current)
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY * 0.08}px`)
    }
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"))
    }, { threshold: 0.12 })
    document.querySelectorAll("section > *:not(.section-label), .project-card, .certificate-card").forEach((element) => revealObserver.observe(element))
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      revealObserver.disconnect()
    }
  }, [])

  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }) }
  const nav = ["about", "education", "experience", "projects", "leadership", "skills", "certificates", "contact"]

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <button className="wordmark" onClick={() => go("home")}><span>Bita's</span> Portfolio</button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {nav.map((item) => <button key={item} className={active === item ? "active" : ""} onClick={() => go(item)}>{item}</button>)}
          <a className="nav-cta" href="mailto:tsabitahhilyatul@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero section-pad">
        <div className="eyebrow"><span className="status-dot" /> Available for opportunities <span className="hero-year">2026</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="kicker">Hello, I&apos;m Bita — an informatics graduate</p>
            <h1>Building digital<br /><em>solutions with purpose.</em></h1>
            <p className="hero-lede">Informatics graduate passionate about building meaningful applications and solving real-world problems through technology.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => go("projects")}>Explore my work <ArrowDownRight size={17} /></button><button className="text-link" onClick={() => go("about")}>More about me <ChevronRight size={16} /></button></div>
          </div>
          <div className="hero-portrait"><div className="portrait-frame"><Image src="/fotoportoneew.png" alt="Tsabitah Hilyatul Aulia" width={560} height={680} priority /></div><div className="portrait-note">D3 Teknik Informatika<br />Politeknik Negeri Semarang</div><div className="floating-mark"><Sparkles size={18} /> Web<br />Developer</div></div>
        </div>
        <div className="hero-bottom"><span>01 — 09</span><span>Scroll to explore <ArrowDownRight size={16} /></span><span className="hero-rule" /></div>
      </section>

      <section id="about" className="section-pad about-section"><div className="section-label">01 / About me</div><div className="two-col"><div><h2>I care about the details that make a product <em>feel right.</em></h2></div><div className="body-copy"><p>I'm Tsabitah Hilyatul Aulia, but you can call me Bita. I'm an Informatics graduate with a strong interest in application development, software engineering, and web development.</p><p>I enjoy turning ideas and real-world problems into functional, user-focused digital solutions. I'm passionate about learning, problem-solving, and creating applications that are both practical and meaningful.</p><p>I'm an adaptable and detail-oriented individual who enjoys collaborating, exploring new challenges, and continuously growing as a developer.</p><div className="contact-row">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon size={17} /> {label}</a>)}</div></div></div></section>

      <section id="education" className="dark-section section-pad"><div className="section-label light">02 / Education</div><div className="education-row"><div><p className="kicker light-text">Politeknik Negeri Semarang</p><h2>D3 Teknik<br /><em>Informatika</em></h2></div><div className="education-meta"><span>2023 — 2026</span><strong>3.77<span>/4.00</span></strong><p>GPA</p></div></div><div className="photo-strip education-photo-strip" aria-label="Graduation and college memories"><figure><Image src="/fotowisuda1.jpg" alt="Tsabitah at Politeknik Negeri Semarang" fill sizes="(max-width: 800px) 100vw, 50vw" /></figure><figure><Image src="/fotowisuda2.jpg" alt="College memory" fill sizes="(max-width: 800px) 100vw, 50vw" /></figure><figure><Image src="/fotowisuda3.jpg" alt="Campus memory" fill sizes="(max-width: 800px) 100vw, 50vw" /></figure></div></section>

      <section id="experience" className="section-pad experience-section"><div className="section-label">03 / Internship & experience</div><div className="experience-grid"><div><p className="kicker">Aug — Dec 2025</p><h2>IT Intern at<br /><em>RS Sarkies &apos;Aisyiyah Kudus</em></h2><p className="body-copy intro">A hands-on experience in improving a hospital website through thoughtful interface design and responsive frontend development. I helped create cleaner layouts, enhance usability, and ensure a consistent experience across desktop and mobile devices.</p></div><div className="case-notes" style={{ marginTop: "40px" }}><div><span>Role</span><strong>IT Intern</strong></div><div><span>Focus</span><strong>Frontend Development · Responsive Design</strong></div><div><span>Contribution</span><strong>Redesigned public-facing pages and admin interfaces to improve visual consistency, accessibility, and usability.</strong></div><div><span>Technologies</span><strong>Laravel · Bootstrap</strong></div></div></div><div className="photo-strip" aria-label="Internship documentation" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px", marginTop: "32px" }}><figure style={{ position: "relative", height: "320px", margin: 0, overflow: "hidden", borderRadius: "12px" }}><Image src="/fotointern1.png" alt="Dokumentasi magang di RS Sarkies 'Aisyiyah Kudus" fill sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: "cover" }} /></figure><figure style={{ position: "relative", height: "320px", margin: 0, overflow: "hidden", borderRadius: "12px" }}><Image src="/fotointern2.jpg" alt="Dokumentasi kedua magang di RS Sarkies 'Aisyiyah Kudus" fill sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: "cover" }} /></figure></div></section>

      <section id="projects" className="section-pad project-section"><div className="section-label">04 / Selected work</div><div className="section-heading"><h2>Projects with a point<br /><em>of view.</em></h2><p>Selected work across web development, product thinking, and interface design. Each one is a chance to make something more useful.</p></div><div className="project-grid">{projects.map((project) => <article key={project.title} className={`project-card ${project.featured ? "featured" : ""}`}><a href={project.link} target={project.link !== "#" ? "_blank" : undefined} rel="noreferrer" className="project-visual"><Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} /><span className="view-icon"><ExternalLink size={17} /></span></a><div className="project-info"><p className="project-type">{project.type}</p><h3 className="project-title">{project.title}</h3>{project.projectTitle && (<p className="project-subtitle" style={{ marginTop: "24px" }}>Final Project: <em>{project.projectTitle}</em></p>)}<p>{project.description}</p>{project.role && <p className="role"><span>My role</span> {project.role}</p>}<div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="leadership" className="soft-section section-pad"><div className="section-label">05 / Leadership & organization</div><div className="story-grid"><div><h2>Work is better when we <em>show up for each other.</em></h2></div><div><p className="body-copy">Beyond code, I&apos;ve learned how to listen, communicate, and take responsibility as part of a team. My experience in Himpunan Mahasiswa Elektro Polines shaped the way I approach collaboration: be prepared, be clear, and make room for others.</p><div className="org-card"><Users size={22} /><div><p>Himpunan Mahasiswa Elektro Polines</p><strong>Staff, Community Service Division</strong><span>May 2024 — May 2025</span></div></div></div></div><div className="org-gallery" aria-label="Organization and committee photos"><figure><Image src="/hme1.jpg" alt="Tsabitah at Politeknik Negeri Semarang" fill sizes="(max-width: 700px) 100vw, 25vw" /></figure><figure><Image src="/hme4.jpg" alt="Portfolio and campus memory" fill sizes="(max-width: 700px) 100vw, 25vw" /></figure><figure><Image src="/hme3.jpg" alt="Digital project collaboration" fill sizes="(max-width: 700px) 100vw, 25vw" /></figure><figure><Image src="/hme22.png" alt="Creative project memory" fill sizes="(max-width: 700px) 100vw, 25vw" /></figure></div></section>

      <section id="skills" className="section-pad skills-section"><div className="section-label">06 / Tools & technologies</div><div className="skills-layout"><div><h2>Curious by nature.<br /><em>Practical by craft.</em></h2><p className="body-copy">A growing toolkit for building dependable, considered digital products.</p></div><div className="tool-cloud">{tools.map((tool, index) => <span key={tool} className={index < 4 ? "primary-tool" : ""}>{tool}</span>)}</div></div></section>

      <section id="certificates" className="soft-section section-pad"><div className="section-label">07 / Certificates</div><div className="section-heading"><h2>Always learning,<br /><em>always moving.</em></h2><p>Credentials and milestones that mark the things I&apos;ve chosen to learn along the way.</p></div><div className="certificate-grid">{certificates.map((cert) => <a key={cert.title} href={cert.file !== "#" ? cert.file : undefined} target={cert.file !== "#" ? "_blank" : undefined} rel="noreferrer" className="certificate-card"><div className="certificate-image"><Image src={cert.preview} alt={`${cert.title} certificate`} fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div><p>{cert.issuer}</p><h3>{cert.title}</h3><span>{cert.date} <ArrowUpRight size={14} /></span></div></a>)}</div></section>

      <section id="contact" className="contact-section section-pad"><div className="section-label light">08 / Let&apos;s connect</div><h2><span>Have something</span><br /><em>in mind?</em></h2><p>Whether you&apos;re hiring, collaborating, or simply want to say hello — I&apos;d love to hear from you.</p><div className="contact-grid">{socials.map(({ label, value, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon size={20} /><span><small>{label}</small>{value}</span><ArrowUpRight size={18} /></a>)}</div></section>

      <footer><span>© {new Date().getFullYear()} Tsabitah Hilyatul Aulia</span><span>Informatics Graduate · Web Developer</span><button onClick={() => go("home")}>Back to top <ArrowUpRight size={15} /></button></footer>
    </main>
  )
}

