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
  ============================================================= */
  publications: [
    {
      title: "Deep Learning Based Reconstruction Methods for Electrical Impedance Tomography",
      authors: "Denker, A., Margotti, F., Ning, J., Knudsen, K., Tanyu, D. N., Jin, B., Hauptmann, A., et al.",
      venue: "Handbook of Numerical Analysis, Vol. 26, pp. 127–175",
      year: 2025,
      doi: "https://doi.org/10.1016/bs.hna.2025.09.003",
      arxiv: "https://arxiv.org/abs/2508.06281",
      type: "book-chapter"
    },
    {
      title: "A Spatial Long-Term Load Forecast Using a Multiple Delineated Machine Learning Approach",
      authors: "Lukong, T. K., Nganyu Tanyu, D., Nkongtchou, Y., Tatietse, T. T., Schulz, D.",
      venue: "Energies, 18(10), 2484",
      year: 2025,
      doi: "https://doi.org/10.3390/en18102484",
      arxiv: null,
      type: "journal"
    },
    {
      title: "Electrical Impedance Tomography: A Fair Comparative Study on Deep Learning and Analytic-Based Approaches",
      authors: "Nganyu Tanyu, D., Ning, J., Hauptmann, A., Jin, B., Maass, P.",
      venue: "In: Data-driven Models in Inverse Problems, De Gruyter, pp. 437–",
      year: 2024,
      doi: "https://doi.org/10.1515/9783111251493",
      arxiv: "https://arxiv.org/abs/2310.18636",
      type: "book-chapter"
    },
    {
      title: "Parameter Identification by Deep Learning of a Material Model for Granular Media",
      authors: "Nganyu Tanyu, D., Michel, I., Rademacher, A., Kuhnert, J., Maass, P.",
      venue: "GEM – International Journal on Geomathematics, 15(1), Article 13",
      year: 2024,
      doi: "https://doi.org/10.1007/s13137-024-00253-0",
      arxiv: "https://arxiv.org/abs/2307.04166",
      type: "journal"
    },
    {
      title: "Deep Learning Methods for Partial Differential Equations and Related Parameter Identification Problems",
      authors: "Nganyu Tanyu, D., Ning, J., Freudenberg, T., Heilenkötter, N., Rademacher, A., et al.",
      venue: "Inverse Problems, 39(10), 103001",
      year: 2023,
      doi: "https://doi.org/10.1088/1361-6420/ace9d4",
      arxiv: "https://arxiv.org/abs/2212.03130",
      type: "journal"
    },
    {
      title: "Long Term Electricity Load Forecast Based on Machine Learning for Cameroon's Power System",
      authors: "Lukong, T. K., Nganyu Tanyu, D., Tatietse, T. T., Schulz, D.",
      venue: "Energy and Environment Research, 12(1), 1–45",
      year: 2022,
      doi: "https://doi.org/10.5539/eer.v12n1p1",
      arxiv: null,
      type: "journal"
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
