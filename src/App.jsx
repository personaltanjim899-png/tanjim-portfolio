import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  PlayCircle,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Video,
  X,
} from 'lucide-react'

const cvPdf = '/Tanjim_Ahmed_CV.pdf'
const profileImage = '/media/tanjim-ahmed.webp'
const presentationVideo = '/media/tanjim-video-presentation.mp4'
const videoPoster = '/media/video-poster.jpg'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Video', href: '#video' },
  { label: 'Contact', href: '#contact' },
]

const quickStats = [
  { value: '128/148', label: 'Credits Completed' },
  { value: '9', label: 'VLSI / RTL Sub-projects' },
  { value: '3', label: 'Training Programs' },
  { value: 'Dec 2026', label: 'Expected Graduation' },
]

const education = [
  {
    icon: GraduationCap,
    level: 'Bachelor of Science',
    program: 'Electrical and Electronic Engineering (EEE)',
    institution: 'American International University-Bangladesh (AIUB)',
    period: '2023 - December 2026 (Expected)',
    detail: 'Credits completed: 128 out of 148',
    coursework: ['Digital Logic Design', 'VLSI Design', 'Microprocessor', 'Electronic Devices'],
  },
  {
    icon: School,
    level: 'Higher Secondary Certificate (HSC)',
    program: 'Science',
    institution: 'Rowmari Government College',
    period: 'Completed in 2020',
    detail: 'Higher secondary education with a science background.',
  },
  {
    icon: BookOpen,
    level: 'Secondary School Certificate (SSC)',
    program: 'Science',
    institution: 'Rowmari C. G. Zaman Government High School',
    period: 'Completed in 2018',
    detail: 'Secondary education with a science background.',
  },
]

const skills = [
  {
    title: 'HDL & Programming',
    icon: Rocket,
    items: ['Verilog', 'SystemVerilog', 'C', 'C++', 'Python', 'C-shell Scripting'],
  },
  {
    title: 'EDA & Engineering Tools',
    icon: Cpu,
    items: ['Cadence Xcelium', 'Cadence Genus', 'Cadence Innovus', 'Xilinx Vivado', 'Silvaco TCAD'],
  },
  {
    title: 'Design & Verification',
    icon: ShieldCheck,
    items: [
      'RTL Coding',
      'FSM & Datapath Design',
      'Functional Simulation',
      'Waveform Debugging',
      'Class-based Testbenches',
      'Constrained-random Verification',
      'Assertions',
      'Functional Coverage',
    ],
  },
  {
    title: 'ASIC Flow & Analysis',
    icon: Microscope,
    items: ['Logic Synthesis', 'Place-and-Route', 'Timing Analysis', 'Power Analysis', 'Area Analysis', 'Linux / Ubuntu'],
  },
]

const researchPoints = [
  {
    title: 'Research Topic',
    text: 'Eco-friendly high-efficiency double absorber perovskite solar cell using Cs2TiBr6 and La2NiMnO6 through SCAPS-1D modeling.',
  },
  {
    title: 'Measured Parameters',
    text: 'The work investigates photovoltaic performance parameters including PCE, Voc, Jsc, and FF for an optimized solar-cell architecture.',
  },
  {
    title: 'Contribution',
    text: 'Conceptualization, data curation, formal analysis, simulation support, resources, and manuscript review and editing.',
  },
]

const projects = [
  {
    title: 'Smart Ticket Vending Machine',
    status: 'SystemVerilog',
    description:
      'Designed modular RTL for route validation, fare calculation, cash-denomination checking, payment tracking, invalid-note rejection, change calculation, and cash-inventory management. The design and testbench were simulated and debugged using Cadence Xcelium.',
    tags: ['RTL', 'FSM', 'Xcelium', 'Verification'],
  },
  {
    title: 'ALU Design & Synthesis',
    status: 'RTL / ASIC',
    description:
      'Designed and verified 4-operation and registered 16-operation ALUs with arithmetic, logic, shift and rotate functions, status flags, synchronous reset, and SDC timing constraints.',
    tags: ['ALU', 'Verilog', 'Synthesis', 'SDC'],
  },
  {
    title: '4x4 MAC Verification Environment',
    status: 'Design Verification',
    description:
      'Built a class-based SystemVerilog verification environment using generator, driver, monitor, scoreboard, constrained-random stimulus, assertions, packages, and functional coverage.',
    tags: ['SystemVerilog', 'CRV', 'Assertions', 'Coverage'],
  },
  {
    title: 'RISC-V3 Processor ASIC Flow',
    status: 'Synthesis & PnR',
    description:
      'Synthesized and placed-and-routed a RISC-V3 processor, then developed a hazard-free two-stage pipeline and a branch-enabled version with signed offsets and program-memory loading.',
    tags: ['RISC-V', 'Pipeline', 'Genus', 'Innovus'],
  },
  {
    title: 'Pipelined Polynomial Datapaths',
    status: 'Datapath Design',
    description:
      'Implemented pipelined polynomial-processing datapaths using both parallel and resource-shared architectures, focusing on clock-by-clock operation, throughput, and hardware-resource trade-offs.',
    tags: ['Datapath', 'Pipeline', 'Resource Sharing'],
  },
  {
    title: 'PDK-based Design Analysis',
    status: 'GPDK045 / Sky130',
    description:
      'Performed synthesis, multi-Vt optimization, and PDK-based timing, leakage-power, switching-power, and area analysis across RTL and processor design exercises.',
    tags: ['GPDK045', 'Sky130', 'PPA', 'Multi-Vt'],
  },
]

const certificates = [
  {
    title: 'RTL to GDS-II Workshop',
    organization: 'ProV Logic',
    date: '13-14 June 2026',
    image: '/certificates/provlogic-rtl-to-gdsii.png',
    description: 'Two-day workshop on VLSI physical-design flow and the complete RTL-to-GDSII design methodology.',
  },
  {
    title: 'Industrial Training Program',
    organization: 'ULKASEMI Pvt. Limited',
    date: 'May 2026',
    image: '/certificates/ulkasemi-industrial-training.png',
    description:
      'Nine-day industrial training covering Design Verification, Analog Design, IC Physical Design, Foundry Technologies, IC Mask Design, and professional-development topics.',
  },
  {
    title: 'VLSI Design & Semiconductor Industry Workshop',
    organization: 'ChipXpert Technologies Private Limited',
    date: '30-31 May 2026',
    image: '/certificates/chipxpert-vlsi-workshop.png',
    description: 'Two-day workshop focused on VLSI design and semiconductor-industry fundamentals.',
  },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-cyan-200/30 bg-slate-900 shadow-glow transition group-hover:scale-105">
            <img src={profileImage} alt="Tanjim Ahmed" className="h-full w-full object-cover" />
          </span>
          <span>
            <span className="block text-sm font-black text-white">Tanjim Ahmed</span>
            <span className="block text-xs text-slate-400">EEE • RTL • Design Verification</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>

        <a href={cvPdf} download className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200 md:inline-flex">
          <Download size={16} /> CV
        </a>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-200" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={cvPdf} download className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-black text-slate-950">
              Download CV
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

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <Sparkles size={16} /> EEE Undergraduate • RTL Design • Design Verification • ASIC / VLSI
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Designing digital systems and verifying <span className="text-gradient">silicon-ready RTL</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Tanjim Ahmed, an Electrical and Electronic Engineering undergraduate at AIUB with hands-on experience in RTL design, SystemVerilog verification, logic synthesis, and ASIC physical-design flow.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-btn">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#video" className="secondary-btn">
              <PlayCircle size={18} /> Watch Introduction
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-300" /> Dhaka, Bangladesh</span>
            <span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-cyan-300" /> Expected graduation: December 2026</span>
          </div>
        </div>

        <div className="gradient-border rounded-[2rem] bg-slate-900/80 p-1 shadow-glow">
          <div className="overflow-hidden rounded-[1.85rem] border border-white/10 bg-slate-950/95">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={profileImage}
                alt="Tanjim Ahmed standing in front of a car"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-6 pb-6 pt-24">
                <p className="text-sm font-semibold text-cyan-200">Tanjim Ahmed</p>
                <h2 className="mt-1 text-2xl font-black text-white">RTL Design & Design Verification Aspirant</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-5">
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

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center">
      <p className="text-xl font-black text-cyan-300 md:text-2xl">{value}</p>
      <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">{label}</p>
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
  const focusAreas = [
    'RTL coding and finite-state-machine design',
    'SystemVerilog verification and waveform debugging',
    'Logic synthesis, place-and-route, and PPA analysis',
    'Semiconductor device simulation and photovoltaic research',
  ]

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="About Me"
        title="A semiconductor-focused EEE undergraduate"
        description="My work connects digital design, verification, ASIC implementation, and semiconductor research."
      />

      <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
        <div className="card">
          <h3 className="text-2xl font-black text-white">Professional Summary</h3>
          <div className="mt-5 space-y-4 text-slate-300 leading-8">
            <p>
              I am an Electrical and Electronic Engineering undergraduate at American International University-Bangladesh, expected to graduate in December 2026. I have hands-on experience in RTL design, SystemVerilog verification, logic synthesis, and ASIC physical-design flow.
            </p>
            <p>
              I completed nine VLSI and RTL sub-projects and developed a modular smart ticket vending machine using Cadence Xcelium, Genus, and Innovus. My project work includes ALUs, pipelined datapaths, a class-based verification environment for a 4x4 MAC, and RISC-V3 processor implementation.
            </p>
            <p>
              I am seeking an internship or entry-level opportunity in RTL Design, Design Verification, or Semiconductor / VLSI engineering where I can strengthen my design skills and contribute to practical chip-development work.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="icon-box"><CheckCircle2 size={28} /></div>
          <h3 className="mt-5 text-2xl font-black text-white">Core Focus</h3>
          <div className="mt-5 space-y-4">
            {focusAreas.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section-alt py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Education"
          title="Academic background"
          description="My complete education history, collected from my CV, from secondary education to my current EEE degree."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-300/60 via-purple-400/30 to-transparent md:block" />
          <div className="space-y-6">
            {education.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.level} className="relative md:pl-16">
                  <div className="absolute left-0 top-7 z-10 hidden h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-slate-950 text-cyan-300 shadow-glow md:grid">
                    <Icon size={24} />
                  </div>
                  <div className="card transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">{item.level}</p>
                        <h3 className="mt-2 text-2xl font-black text-white">{item.program}</h3>
                        <p className="mt-2 font-semibold text-slate-200">{item.institution}</p>
                      </div>
                      <span className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-slate-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-5 leading-7 text-slate-400">{item.detail}</p>
                    {item.coursework && (
                      <div className="mt-5">
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-2">
                          {item.coursework.map((course) => <span key={course} className="pill">{course}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="Technical Skills"
        title="Tools and concepts I work with"
        description="A focused technical stack for RTL design, SystemVerilog verification, ASIC implementation, programming, and analysis."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <div key={skill.title} className="card group transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
              <div className="flex items-center gap-4">
                <div className="icon-box group-hover:bg-cyan-300 group-hover:text-slate-950"><Icon size={25} /></div>
                <h3 className="text-xl font-black text-white">{skill.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {skill.items.map((item) => <span key={item} className="pill">{item}</span>)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Research() {
  return (
    <section id="research" className="section-alt py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Research Experience"
          title="Lead-free perovskite solar-cell simulation"
          description="Research focused on eco-friendly, high-efficiency double-absorber perovskite solar cells using SCAPS-1D modeling."
        />
        <div className="gradient-border rounded-[2rem] bg-slate-900/80 p-1 shadow-soft">
          <div className="rounded-[1.85rem] bg-slate-950 p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
              <div>
                <div className="inline-flex rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-200">
                  Journal manuscript under third review
                </div>
                <h3 className="mt-6 text-3xl font-black text-white">Researcher — Perovskite Solar-Cell Simulation</h3>
                <p className="mt-5 leading-8 text-slate-300">
                  The paper investigates a lead-free double-absorber solar-cell architecture and reports optimized photovoltaic parameters. The work combines simulation-based analysis with semiconductor-material and device-performance optimization.
                </p>
              </div>
              <div className="space-y-4">
                {researchPoints.map((point) => <ResearchPoint key={point.title} title={point.title} text={point.text} />)}
              </div>
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
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="Projects"
        title="RTL, verification, datapath, and ASIC work"
        description="Selected work demonstrating RTL development, verification architecture, synthesis, physical design, and PPA analysis."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="card flex min-h-[320px] flex-col transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-black text-white">{project.title}</h3>
              <span className="shrink-0 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">{project.status}</span>
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">{tag}</span>)}
            </div>
          </article>
        ))}
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

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="certificates" className="section-alt py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          kicker="Training & Certificates"
          title="Verified learning in VLSI and semiconductor design"
          description="Click any certificate to view a larger preview."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={certificate.title} className="card overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
              <button type="button" className="group block w-full bg-slate-900 p-3 text-left" onClick={() => setSelected(certificate)} aria-label={`View ${certificate.title}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <img src={certificate.image} alt={`${certificate.title} certificate`} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
              </button>
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">{certificate.date}</div>
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
      </div>
      {selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

function CertificateModal({ certificate, onClose }) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={`${certificate.title} preview`} onClick={onClose}>
      <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950 p-4 shadow-soft" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-slate-900/90 p-2 text-white transition hover:bg-cyan-300 hover:text-slate-950" aria-label="Close certificate preview">
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
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        kicker="Professional Development"
        title="Industry training translated into portfolio strength"
        description="These experiences strengthened my understanding of the semiconductor design flow, IC-design domains, verification practices, and professional communication."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <TrainingCard icon={BriefcaseBusiness} title="ULKASEMI Industrial Training" text="Nine-day industrial training covering Design Verification, Analog Design, IC Physical Design, Foundry Technologies, IC Mask Design, and professional-development topics." />
        <TrainingCard icon={Award} title="ChipXpert VLSI Workshop" text="Two-day VLSI Design and Semiconductor Industry workshop by ChipXpert Technologies Private Limited." />
        <TrainingCard icon={ShieldCheck} title="ProV Logic RTL to GDS-II" text="Workshop exposure to the VLSI physical-design flow and complete RTL-to-GDSII methodology." />
      </div>
    </section>
  )
}

function TrainingCard({ icon: Icon, title, text }) {
  return (
    <div className="card">
      <div className="icon-box"><Icon size={28} /></div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  )
}

function VideoPresentation() {
  return (
    <section id="video" className="section-alt py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          kicker="Video Presentation"
          title="A brief introduction about me"
          description="Watch my personal video presentation to learn about my academic background, technical interests, project experience, and career goals."
        />

        <div className="gradient-border rounded-[2rem] bg-slate-900/80 p-1 shadow-glow">
          <div className="overflow-hidden rounded-[1.85rem] bg-slate-950">
            <div className="relative bg-black">
              <video
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster={videoPoster}
                aria-label="Tanjim Ahmed video presentation"
              >
                <source src={presentationVideo} type="video/mp4" />
                Your browser does not support HTML5 video. You can open the video using the link below.
              </video>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-200">
                  <Video size={15} /> Personal Introduction
                </div>
                <h3 className="mt-4 text-2xl font-black text-white">Meet Tanjim Ahmed</h3>
                <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                  This approximately two-minute presentation summarizes who I am, what I have studied, the engineering work I have completed, and the RTL / Design Verification opportunities I am preparing for.
                </p>
              </div>
              <a href={presentationVideo} target="_blank" rel="noreferrer" className="secondary-btn whitespace-nowrap">
                Open Video <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title mt-3">Let&apos;s connect for RTL, Design Verification, and VLSI opportunities</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
          I am open to internship and entry-level opportunities in RTL Design, Design Verification, ASIC, and Semiconductor / VLSI engineering.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href="mailto:personal.tanjim899@gmail.com" className="contact-card"><Mail size={19} /> Email</a>
          <a href="https://www.linkedin.com/in/tanjim-ahmed-6a6456279" target="_blank" rel="noreferrer" className="contact-card"><Linkedin size={19} /> LinkedIn</a>
          <a href="https://github.com/personaltanjim899-png" target="_blank" rel="noreferrer" className="contact-card"><Github size={19} /> GitHub</a>
          <a href="tel:+8801580597269" className="contact-card"><Phone size={19} /> Phone</a>
        </div>

        <div className="mt-8 flex justify-center">
          <a href={cvPdf} download className="primary-btn">Download CV <Download size={18} /></a>
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
        <Education />
        <Skills />
        <Research />
        <Projects />
        <Certificates />
        <TrainingSummary />
        <VideoPresentation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
