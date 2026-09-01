export const profile = {
  name: "Ethan Mohr",
  role: "Mechanical Engineering — Nuclear Engineering Focus",
  school: "Colorado School of Mines",
  location: "Erie, CO",
  email: "ethanmohr2000@gmail.com",
  linkedin: "https://linkedin.com/in/ethanmohr235",
  github: "https://github.com/ethanmohr235",
  tagline:
    "Mechanical engineering student building computational tools for reactor physics — and, on the side, software that has nothing to do with reactors at all.",
  bio: [
    "I'm an undergraduate at Colorado School of Mines studying mechanical engineering with a nuclear engineering focus, graduating May 2028. My coursework and research center on reactor physics and scientific computing — right now that means developing real-time reactor analysis techniques using the fission matrix method.",
    "Outside of coursework, I like building things end to end: I taught myself OpenMC to run my own reactor optimization studies, and more recently spent three weeks designing and building MonOSS, a from-scratch knowledge graph and simulation engine, as a personal software project.",
  ],
};

export const featuredProject = {
  name: "MonOSS",
  fullName: "Monist Organization and Simulation System",
  summary:
    "A personal knowledge graph engine, built from scratch in Python, on the premise that every piece of information — a person, a task, a meeting, an idea — can be represented as one flexible object type connected by typed relationships. It has since grown from a single graph editor into a small suite of six desktop apps sharing that one graph.",
  description:
    "MonOSS models everything as a mote: an object with free-form properties, linked to other motes through explicit, typed relationships rather than hidden references. The graph itself lives in Monarch, but the same underlying data now also opens as a notes editor, a calendar, a task board, a bulk-edit table, and a simulation workbench — six independent windows reading and writing one shared garden live, rather than six apps with their own copies of the data. The most involved piece is the simulation layer: a rule is just a mote carrying an equation, and the solver determines a mote's declared \"free\" properties from the properties around it in the graph — with full unit tracking, provenance recorded for every computed value, and a pluggable registry of solver backends.",
  stats: [
    { value: "~50,000", label: "lines of code" },
    { value: "141", label: "commits in 4 weeks" },
    { value: "45", label: "automated test suites" },
    { value: "6", label: "desktop apps, one shared graph" },
  ],
  highlights: [
    "Designed the core graph data model — motes, typed relationships, and a query layer — persisted to SQLite behind a layered repository/service architecture shared by every app in the suite.",
    "Grew a single graph editor into six independent desktop windows — Monarch, Mora, Monastery, Momentum, Monolith, and Motion — that all read and write the same garden live, each specialized for a different way of working with it (see below).",
    "Built a rule-based simulation engine: equations attached to relationships solve for a mote's free properties through a pluggable solver registry, with units, provenance, and a scrubbable run timeline in Motion.",
    "Exposed the whole graph through a CLI and a Model Context Protocol (MCP) server, so an LLM agent can read and edit gardens directly alongside the desktop apps.",
  ],
  apps: [
    {
      name: "Monarch",
      role: "The graph",
      description:
        "The original window: an interactive node graph of motes and relationships, with species/folder legends and saved views.",
    },
    {
      name: "Mora",
      role: "The notes",
      description:
        "A plain-text note editor built around .modoc, a small notation for annotating motes inline, with a searchable note switcher.",
    },
    {
      name: "Monastery",
      role: "The calendar",
      description:
        "A calendar over every dated mote in the garden, with drag-and-drop event editing and recurring series.",
    },
    {
      name: "Momentum",
      role: "The tasks",
      description:
        "A task board, week planner, and timer that discovers status/priority/estimate properties per garden and schedules against Monastery's calendar.",
    },
    {
      name: "Monolith",
      role: "The table",
      description:
        "A spreadsheet-style view for comparing and bulk-editing many motes at once, with a per-row undo token instead of a confirmation dialog.",
    },
    {
      name: "Motion",
      role: "The simulator",
      description:
        "A dedicated workbench for scenarios, solvers, and rule authoring, with a scrubbable timeline over simulation runs.",
    },
  ],
  stack: [
    "Python",
    "SQLite",
    "pywebview",
    "JavaScript",
    "MCP",
    "NumPy",
    "CoolProp",
  ],
  links: {
    github: "",
  },
};

export const research = [
  {
    title: "Undergraduate Researcher — Computational Reactor Physics",
    org: "Colorado School of Mines, Mechanical Engineering Dept.",
    dates: "2026 – Present",
    location: "Golden, CO",
    description:
      "Developing real-time techniques for reactor analysis using the fission matrix method, working closely with graduate students and reviewing the surrounding literature.",
    bullets: [
      "Studying and extending the OpenMC source code to support fission-matrix-based analysis.",
      "Presents progress during weekly computational reactor physics research meetings.",
    ],
    tags: ["Reactor Physics", "OpenMC", "MCNP", "Monte Carlo", "Python"],
  },
  {
    title: "Undergraduate Researcher — Quantum Materials Discovery",
    org: "Colorado School of Mines, Physics Dept.",
    dates: "2025 – 2026",
    location: "Golden, CO",
    description:
      "Designed and executed XRD/SEM workflows to characterize Kagome metallic lattices, and partnered with a Bay Area startup to train ML models predicting superconducting material properties.",
    bullets: [
      "Contributed to the discovery of tens of new crystal compounds with novel quantum properties, including superconductivity and charge density waves.",
      "Generated and analyzed diffraction data to identify structural phase stability.",
    ],
    tags: ["Materials Science", "XRD", "SEM", "Machine Learning"],
  },
];

export const experience = [
  {
    title: "Treasurer",
    org: "ASME — Colorado School of Mines Chapter",
    dates: "2024 – 2026",
    description:
      "Managed procurement and budgeting for a 250+ member organization with a $40k+ operating budget.",
  },
  {
    title: "Teaching Assistant, Physics 200 (E&M)",
    org: "Colorado School of Mines, Physics Dept.",
    dates: "2025 – Present",
    description:
      "Mentored 100+ students in electricity and magnetism through problem-solving sessions and concept reviews.",
  },
  {
    title: "Engineering Teaching Fellow",
    org: "Generation Teach",
    dates: "Summer 2026",
    description:
      "Taught fifth-grade students elementary engineering skills during a five-week summer camp.",
  },
];

export const skills = [
  {
    category: "Technical",
    items: ["Python", "OpenMC", "MCNP", "SolidWorks", "Onshape", "bash", "Linux", "C++"],
  },
  {
    category: "Engineering",
    items: [
      "Reactor Physics",
      "Thermodynamics",
      "Electromagnetics",
      "Design & Manufacturing",
      "GD&T",
      "Scientific Computing",
    ],
  },
  {
    category: "Lab",
    items: ["SEM", "XRD", "EDS", "Centrifugation", "Sample Preparation"],
  },
  {
    category: "Other",
    items: ["Technical Presentations", "Teaching", "Project Management"],
  },
];

export const education = {
  school: "Colorado School of Mines",
  degree: "B.S. Mechanical Engineering",
  focus: "Nuclear Engineering focus area",
  gpa: "3.94 GPA",
  dates: "Graduating May 2028",
  honors: ["National Merit Scholar", "Tau Beta Pi Member", "SolidWorks CAD Design Professional"],
};
