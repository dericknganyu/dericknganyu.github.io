/**
 * data.js — Site Content Data
 *
 * This is the single file you update to change dynamic content:
 * projects, publications, and talks.
 *
 * Search for "PLACEHOLDER" to find items you need to replace with real data.
 *
 * Structure:
 *   window.SITE_DATA.projects      — project cards on the Projects section
 *   window.SITE_DATA.publications  — publication list on the Publications section
 *   window.SITE_DATA.talks         — talk list on the Talks section
 */

window.SITE_DATA = {

  /* =============================================================
     PROJECTS
     Each object: { title, description, tags[], links{github, paper, demo} }
     Set link values to null to hide that button.
  ============================================================= */
  projects: [
    {
      // PLACEHOLDER — update with real project details
      title: "Physics-Informed Neural Networks for EIT",
      description: "Investigation of physics-informed neural network (PINN) approaches applied to Electrical Impedance Tomography (EIT), framing the forward and inverse problems as PDE-constrained learning tasks.",
      tags: ["PINNs", "Inverse Problems", "EIT", "PyTorch", "Scientific ML"],
      links: { github: null, paper: null, demo: null }
    },
    {
      // PLACEHOLDER — update with real project details
      title: "Deep Learning for Inverse Problems in Imaging",
      description: "Research into learned reconstruction methods for ill-posed inverse problems arising in medical and scientific imaging. Explores regularization strategies informed by network architecture and training data.",
      tags: ["Deep Learning", "Imaging", "Regularization", "Inverse Problems", "Python"],
      links: { github: null, paper: null, demo: null }
    },
    {
      // PLACEHOLDER — update with real project details
      title: "AI for Cross-Function Efficiency at SAP",
      description: "Development and experimentation with AI-driven automation workflows to improve cross-team efficiency in an enterprise cloud environment. Includes prompt engineering, LLM integration, and process analysis.",
      tags: ["Enterprise AI", "Automation", "LLMs", "SAP", "Python"],
      links: { github: null, paper: null, demo: null }
    },
    {
      // PLACEHOLDER — update with real project details
      title: "PDE-Constrained Optimization and Parameter Identification",
      description: "Mathematical framework and numerical methods for identifying unknown parameters in partial differential equation models, with applications in continuum mechanics and material science.",
      tags: ["PDEs", "Optimization", "Parameter ID", "Numerical Methods", "MATLAB"],
      links: { github: null, paper: null, demo: null }
    },
    {
      // PLACEHOLDER — update with real project details
      title: "AI Evaluation and Testing Concepts",
      description: "Conceptual work on evaluation strategies for AI systems in enterprise settings: robustness testing, output quality metrics, and systematic assessment of generative AI outputs.",
      tags: ["AI Evaluation", "Testing", "Quality Metrics", "Enterprise AI"],
      links: { github: null, paper: null, demo: null }
    }
  ],


  /* =============================================================
     PUBLICATIONS
     Each object: { title, authors, venue, year, doi, arxiv, type }
     type: "journal" | "conference" | "preprint"
     Set doi / arxiv to null if not available.

     IMPORTANT: All entries below are PLACEHOLDERS.
     Replace with your real publications.
     To add from BibTeX: extract title, authors, venue, year, doi.
  ============================================================= */
  publications: [
    {
      // PLACEHOLDER — replace with real publication
      title: "[PLACEHOLDER] Deep Learning-Based Reconstruction for Electrical Impedance Tomography",
      authors: "Tanyu, D. N., [Co-authors TBD]",
      venue: "Journal of Computational Physics",
      year: 2024,
      doi: null,   // e.g. "https://doi.org/10.xxxx/xxxxx"
      arxiv: null, // e.g. "https://arxiv.org/abs/2401.xxxxx"
      type: "journal"
    },
    {
      // PLACEHOLDER — replace with real publication
      title: "[PLACEHOLDER] Physics-Informed Neural Networks for Inverse Problems in Continuum Mechanics",
      authors: "Tanyu, D. N., [Co-authors TBD]",
      venue: "Inverse Problems",
      year: 2023,
      doi: null,
      arxiv: null,
      type: "journal"
    },
    {
      // PLACEHOLDER — replace with real publication
      title: "[PLACEHOLDER] Learned Regularization for PDE-Based Parameter Identification",
      authors: "Tanyu, D. N., [Co-authors TBD]",
      venue: "SIAM Journal on Scientific Computing",
      year: 2023,
      doi: null,
      arxiv: null,
      type: "journal"
    },
    {
      // PLACEHOLDER — replace with real publication
      title: "[PLACEHOLDER] Neural Network Approaches to Ill-Posed Inverse Problems",
      authors: "Tanyu, D. N., [Co-authors TBD]",
      venue: "Proceedings of Applied Mathematics and Mechanics (PAMM)",
      year: 2022,
      doi: null,
      arxiv: null,
      type: "conference"
    },
    {
      // PLACEHOLDER — replace with real publication
      title: "[PLACEHOLDER] Scientific Machine Learning for Engineering Applications",
      authors: "Tanyu, D. N., [Co-authors TBD]",
      venue: "arXiv Preprint",
      year: 2024,
      doi: null,
      arxiv: null,
      type: "preprint"
    }
  ],


  /* =============================================================
     TALKS
     Each object: { title, event, location, date, type }
     type: "invited" | "contributed" | "poster" | "workshop"
     date: "YYYY-MM" format for consistent display
  ============================================================= */
  talks: [
    {
      // PLACEHOLDER — replace with real talk details
      title: "[PLACEHOLDER] Physics-Informed Neural Networks for Inverse Problems",
      event: "SIAM Annual Meeting 2024",
      location: "Spokane, WA, USA",
      date: "2024-07",
      type: "contributed"
    },
    {
      // PLACEHOLDER — replace with real talk details
      title: "[PLACEHOLDER] Deep Learning Approaches to EIT Reconstruction",
      event: "Workshop on Inverse Problems and Imaging",
      location: "University of Bremen, Germany",
      date: "2023-11",
      type: "invited"
    },
    {
      // PLACEHOLDER — replace with real talk details
      title: "[PLACEHOLDER] Scientific Machine Learning: Bridging Theory and Practice",
      event: "Applied Mathematics Colloquium",
      location: "ZeTeM, University of Bremen",
      date: "2023-05",
      type: "invited"
    },
    {
      // PLACEHOLDER — replace with real talk details
      title: "[PLACEHOLDER] Parameter Identification in Continuum Mechanics via Neural Networks",
      event: "Annual Conference on Applied Mathematics (GAMM)",
      location: "Dresden, Germany",
      date: "2022-08",
      type: "contributed"
    }
  ]

};
