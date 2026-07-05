import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Microscope,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const portfolioPdf = '/Tanjim_Ahmed_Portfolio.pdf'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const quickStats = [
  { value: '11th', label: 'Semester' },
  { value: '3rd', label: 'Journal Review' },
  { value: '3+', label: 'Certificates' },
  { value: 'RTL', label: 'Core Focus' },
]

const skills = [
  {
    title: 'Semiconductor & VLSI',
    icon: Cpu,
    items: [
      'RTL Design',
      'VLSI Design',
      'SystemVerilog',
      'Digital Logic Design',
      'Design Verification Basics',
      'IC Physical Design Basics',
      'Analog Design Basics',
      'RTL to GDS-II Flow',
    ],
  },
  {
    title: 'Programming',
    icon: Rocket,
    items: ['Python', 'C', 'C++', 'MATLAB Practice'],
  },
  {
    title: 'Simulation & Research Tools',
    icon: Microscope,
    items: ['SCAPS-1D', 'Silvaco TCAD', 'MATLAB', 'Device-level Simulation'],
  },
  {
    title: 'Research Areas',
    icon: BookOpen,
    items: [
      'Perovskite Solar Cells',
      'Lead-free Solar Cell Modeling',
      'Semiconductor Device Simulation',
      'Photovoltaic Performance Optimization',
      'Semiconductor Materials',
      'Semantic Communication',
    ],
  },
]

const researchPoints = [
  {
    title: 'Research Topic',
    text: 'Eco-friendly high-efficiency double absorber perovskite solar cell using Cs2TiBr6 and La2NiMnO6 through SCAPS-1D modeling.',
  },
  {
    title: 'Measured Parameters',
    text: 'The work investigates photovoltaic performance parameters including PCE, Voc, Jsc, and FF for optimized solar cell architecture.',
  },
  {
    title: 'Contribution',
    text: 'Conceptualization, data curation, formal analysis, software-based simulation support, resources, and manuscript review/editing.',
  },
]

const projects = [
  {
    title: 'RTL-based Vending Machine Design',
    status: 'Ongoing',
    description:
      'A SystemVerilog RTL project focused on digital logic design, finite state machine implementation, datapath thinking, and simulation-based validation.',
    tags: ['RTL', 'FSM', 'SystemVerilog'],
  },
  {
    title: 'RISC-V Processor RTL Flow',
    status: 'Academic',
    description:
      'Processor design practice covering instruction flow, datapath, hazard-free pipeline concept, simulation, synthesis, and physical design exploration.',
    tags: ['Processor', 'Datapath', 'PnR'],
  },
  {
    title: 'MAC Verification Environment',
    status: 'Verification',
    description:
      'Verification practice for multiply-accumulate operation using driver, monitor, transaction, coverage, assertions, and simulation-oriented checking.',
    tags: ['Verification', 'Assertions', 'Coverage'],
  },
  {
    title: 'ALU-based Multiplier',
    status: 'RTL Practice',
    description:
      'Digital design project using registers, ALU operations, control signals, finite state machine sequencing, and waveform-based debugging.',
    tags: ['ALU', 'FSM', 'Registers'],
  },
  {
    title: 'Polynomial Evaluator',
    status: 'Datapath',
    description:
      'Datapath and FSM-based implementation of polynomial evaluation with a focus on clock-by-clock operation and pipelined design understanding.',
    tags: ['Datapath', 'Pipeline', 'FSM'],
  },
  {
    title: 'Semiconductor Device Modeling',
    status: 'Research',
    description:
      'Simulation-driven study of photovoltaic device behavior, lead-free absorber materials, device optimization, and performance analysis.',
    tags: ['SCAPS-1D', 'PV', 'Simulation'],
  },
]

const certificates = [
  {
    title: 'RTL to GDS-II Workshop',
    organization: 'ProV Logic',
    date: '13–14 June 2026',
    image: '/certificates/provlogic-rtl-to-gdsii.png',
    description:
      '2-day workshop on VLSI Physical Design Flow and complete RTL-to-GDSII design methodology.',
  },
  {
    title: 'Industrial Training Program',
    organization: 'ULKASEMI Pvt. Limited',
    date: 'Issued: 21 May 2026',
    image: '/certificates/ulkasemi-industrial-training.png',
    description:
      '9-day industrial training covering Design Verification, Analog Design, IC Physical Design, Foundry Technologies, IC Mask Design, CV Writing, Interview Skills, Presentation Skills, and Public Speaking.',
  },
  {
    title: 'VLSI Design & Semiconductor Industry Workshop',
    organization: 'ChipXpert Technologies Private Limited',
    date: '30–31 May 2026',
    image: '/certificates/chipxpert-vlsi-workshop.png',
    description:
      'Two-day workshop focused on VLSI Design and Semiconductor Industry fundamentals.',
  },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950 shadow-glow transition group-hover:scale-105">
            TA
          </span>
          <span>
            <span className="block text-sm font-black text-white">Tanjim Ahmed</span>
            <span className="block text-xs text-slate-400">EEE • RTL • VLSI</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={portfolioPdf}
          download
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
        >
          <Download size={16} /> PDF
        </a>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-200" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={portfolioPdf} download className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-black text-slate-950">
              Download Portfolio PDF
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero-grid bg-[length:42px_42px] pt-32 md:pt-40">
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.12fr_.88fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <Sparkles size={16} /> EEE Undergraduate • RTL Design • VLSI • Semiconductor Research
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Building clean RTL designs and exploring <span className="text-gradient">semiconductor devices</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Tanjim Ahmed, an 11th-semester EEE student at American International University-Bangladesh with strong interests in RTL design, VLSI, SystemVerilog, device-level simulation, SCAPS-1D, and lead-free perovskite solar cell research.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-btn">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#certificates" className="secondary-btn">
              View Certificates
            </a>
          </div>
        </div>

        <div className="gradient-border rounded-[2rem] bg-slate-900/80 p-1 shadow-glow">
          <div className="rounded-[1.85rem] border border-white/10 bg-slate-950/95 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-slate-400">Portfolio Snapshot</p>
                <h2 className="mt-1 text-3xl font-black text-white">Tanjim Ahmed</h2>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-cyan-300 text-2xl font-black text-slate-950">TA</div>
            </div>

            <div className="mt-6 space-y-4">
              <InfoLine label="University" value="American International University-Bangladesh" />
              <InfoLine label="Department" value="Electrical and Electronic Engineering" />
              <InfoLine label="Core Focus" value="RTL Design, VLSI, SystemVerilog, SCAPS-1D" />
              <InfoLine label="Research Status" value="Journal manuscript under 3rd review" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {quickStats.map((item) => (
                <Stat key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoLine({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/[0.045] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-slate-100">{value}</p>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center">
      <p className="text-2xl font-black text-cyan-300">{value}</p>
      <p className="mt-1 text-xs font-semibold text-slate-400">{label}</p>
    </div>
  )
}

function SectionHeader({ kicker, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="About Me"
        title="A semiconductor-focused EEE undergraduate"
        description="My academic interest connects RTL-based digital design, VLSI learning, device-level simulation, photovoltaic modeling, and semiconductor research."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h3 className="text-2xl font-black text-white">Professional Summary</h3>
          <div className="mt-5 space-y-4 text-slate-300 leading-8">
            <p>
              I am an 11th-semester Electrical and Electronic Engineering student at American International University-Bangladesh. I have a strong interest in the semiconductor field, especially RTL design, VLSI, SystemVerilog, and device-level simulation.
            </p>
            <p>
              I am currently working on digital design projects using RTL and SystemVerilog. I am also involved in research related to photovoltaic systems, semiconductor device modeling, and communication.
            </p>
            <p>
              My research work focuses on SCAPS-1D-based solar cell simulation, lead-free perovskite materials, and performance optimization of high-efficiency photovoltaic devices. Along with semiconductor and VLSI interests, I have programming knowledge in Python, C, and C++.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="icon-box">
            <GraduationCap size={30} />
          </div>
          <h3 className="mt-5 text-2xl font-black text-white">Education</h3>
          <p className="mt-4 text-slate-300 leading-7">American International University-Bangladesh</p>
          <p className="mt-2 text-sm font-bold text-cyan-200">Department of Electrical and Electronic Engineering</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Academic Standing</p>
            <p className="mt-1 font-bold text-white">11th Semester</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-alt py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Technical Skills"
          title="Tools and concepts I work with"
          description="A focused skill set for digital design, VLSI learning, programming, simulation, and research-oriented semiconductor analysis."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.title} className="card group transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                <div className="flex items-center gap-4">
                  <div className="icon-box group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-xl font-black text-white">{skill.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="Research Experience"
        title="Lead-free perovskite solar cell simulation"
        description="Research work focused on eco-friendly high-efficiency double absorber perovskite solar cells using SCAPS-1D modeling."
      />

      <div className="gradient-border rounded-[2rem] bg-slate-900/80 p-1 shadow-soft">
        <div className="rounded-[1.85rem] bg-slate-950 p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
            <div>
              <div className="inline-flex rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-200">
                Journal manuscript under 3rd review
              </div>
              <h3 className="mt-6 text-3xl font-black text-white">Researcher — Perovskite Solar Cell Simulation</h3>
              <p className="mt-5 leading-8 text-slate-300">
                The paper investigates a lead-free double absorber solar cell architecture and reports optimized photovoltaic parameters. The work combines simulation-based analysis with semiconductor material and device-performance optimization.
              </p>
            </div>

            <div className="space-y-4">
              {researchPoints.map((point) => (
                <ResearchPoint key={point.title} title={point.title} text={point.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResearchPoint({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <h4 className="font-black text-cyan-200">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-alt py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Projects"
          title="RTL, verification, datapath, and simulation work"
          description="Projects are arranged to present a strong digital design profile: RTL development, FSM design, datapath design, testbench development, verification thinking, and waveform-based debugging."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card flex min-h-[300px] flex-col transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">{project.status}</span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certificates() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setSelected(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="certificates" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="Training & Certificates"
        title="Verified learning in VLSI and semiconductor design"
        description="Certificates are included as visual proof of industrial training, VLSI workshop participation, and RTL-to-GDSII learning. Click any certificate to view it larger."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="card overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
            <button
              type="button"
              className="group block w-full bg-slate-900 p-3 text-left"
              onClick={() => setSelected(certificate)}
              aria-label={`View ${certificate.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </button>

            <div className="p-6">
              <div className="mb-4 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">
                {certificate.date}
              </div>
              <h3 className="text-xl font-black text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm font-bold text-cyan-100">{certificate.organization}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{certificate.description}</p>
              <button type="button" onClick={() => setSelected(certificate)} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-300 hover:text-cyan-100">
                View Certificate <ExternalLink size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

function CertificateModal({ certificate, onClose }) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950 p-4 shadow-soft">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-900/90 p-2 text-white transition hover:bg-cyan-300 hover:text-slate-950"
          aria-label="Close certificate preview"
        >
          <X size={22} />
        </button>
        <div className="mb-4 pr-14">
          <h3 className="text-xl font-black text-white">{certificate.title}</h3>
          <p className="mt-1 text-sm font-semibold text-cyan-200">{certificate.organization} • {certificate.date}</p>
        </div>
        <div className="max-h-[76vh] overflow-auto rounded-2xl bg-white p-2">
          <img src={certificate.image} alt={`${certificate.title} certificate`} className="mx-auto h-auto w-full object-contain" />
        </div>
      </div>
    </div>
  )
}

function TrainingSummary() {
  return (
    <section className="section-alt py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Professional Development"
          title="Industry training translated into portfolio strength"
          description="These training experiences strengthen my understanding of semiconductor design flow, IC design domains, verification basics, and professional communication."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <TrainingCard
            icon={BriefcaseBusiness}
            title="ULKASEMI Industrial Training"
            text="9-day industrial training covering Design Verification, Analog Design, IC Physical Design, Foundry Technologies, IC Mask Design, CV Writing, Interview Skills, Presentation Skills, and Public Speaking."
          />
          <TrainingCard
            icon={Award}
            title="ChipXpert VLSI Workshop"
            text="Two-day VLSI Design and Semiconductor Industry workshop by ChipXpert Technologies Private Limited."
          />
          <TrainingCard
            icon={ShieldCheck}
            title="ProV Logic RTL to GDS-II"
            text="Workshop exposure to VLSI Physical Design Flow and complete RTL-to-GDSII methodology."
          />
        </div>
      </div>
    </section>
  )
}

function TrainingCard({ icon: Icon, title, text }) {
  return (
    <div className="card">
      <div className="icon-box">
        <Icon size={28} />
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title mt-3">Let&apos;s connect for RTL, VLSI, and semiconductor research opportunities</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
          Replace these placeholders with your real email, LinkedIn, GitHub, and phone number before publishing the website.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href="mailto:your.email@example.com" className="contact-card">
            <Mail size={19} /> Email
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-card">
            <ExternalLink size={19} /> LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-card">
            <ExternalLink size={19} /> GitHub
          </a>
          <a href="tel:+8800000000000" className="contact-card">
            <Phone size={19} /> Phone
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a href={portfolioPdf} download className="primary-btn">
            Download Portfolio PDF <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Tanjim Ahmed. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and Vite.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Certificates />
        <TrainingSummary />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
