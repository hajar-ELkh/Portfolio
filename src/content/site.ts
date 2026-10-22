import { L, type Loc } from "./i18n";

export const config = {
  name: "Hajar El Khouchali",
  email: "elkhouchalihajar@gmail.com",
  linkedin: "https://linkedin.com/in/hajar-elkhouchali",
  github: "https://github.com/hajar-ELkh",
  // Set to null to show the "CV not configured" state.
  cvUrl: `${import.meta.env.BASE_URL}cv-hajar-el-khouchali.pdf` as string | null,
};

export const nav = [
  { id: "home", label: L("Home", "Accueil") },
  { id: "projects", label: L("Projects", "Projets") },
  { id: "experience", label: L("Experience", "Expérience") },
  { id: "beyond", label: L("Beyond Code", "Au-delà du code") },
  { id: "about", label: L("About", "À propos") },
  { id: "contact", label: L("Contact", "Contact") },
];

export const ui = {
  connect: L("Let's connect", "Échangeons"),
  explore: L("Explore my work", "Découvrir mes projets"),
  cv: L("Download my CV", "Télécharger mon CV"),
  cvMissing: L("CV not configured yet", "CV pas encore configuré"),
  heroLabel: L("Engineering data. Building intelligence. Creating impact.", "Concevoir la donnée. Bâtir l'intelligence. Créer de l'impact."),
  heroTitle: L("I turn data into intelligence, and ideas into solutions.", "Je transforme la donnée en intelligence, et les idées en solutions."),
  heroBody: L(
    "I'm Hajar El Khouchali, an engineering student specializing in Data and AI. I build data pipelines, machine learning systems and software products while exploring how technology can solve meaningful business and societal problems.",
    "Je suis Hajar El Khouchali, élève ingénieure spécialisée en Data et IA. Je construis des pipelines de données, des systèmes de machine learning et des produits logiciels, en explorant comment la technologie peut résoudre des problèmes métier et sociétaux concrets.",
  ),
  specs: [L("Data Engineering", "Data Engineering"), L("AI Engineering", "AI Engineering"), L("Data Science", "Data Science")],
  projectsLabel: L("The Engineering Playground", "Le terrain de jeu de l'ingénieure"),
  projectsTitle: L("Different problems. One engineering mindset.", "Des problèmes différents. Un même état d'esprit d'ingénieure."),
  search: L("Search projects or technologies…", "Rechercher un projet ou une technologie…"),
  noResults: L("No project matches this search.", "Aucun projet ne correspond à cette recherche."),
  caseStudy: L("Explore case study", "Voir l'étude de cas"),
  myRole: L("My contribution", "Ma contribution"),
  more: L("More projects", "Autres projets"),
  team: L("Team project", "Projet d'équipe"),
  expLabel: L("The Journey", "Le parcours"),
  expTitle: L("Where theory met real systems.", "Là où la théorie rencontre de vrais systèmes."),
  viewProject: L("View related project", "Voir le projet lié"),
  skillsLabel: L("Skills — evidence, not progress bars", "Compétences — des preuves, pas des barres"),
  skillsTitle: L("Pick a skill. See where it was used.", "Choisissez une compétence. Voyez où elle a servi."),
  skillsHint: L("Select a skill to reveal the projects that demonstrate it.", "Sélectionnez une compétence pour voir les projets qui la démontrent."),
  usedIn: L("Used in", "Utilisée dans"),
  notLinked: L("Covered in coursework; no case study linked yet.", "Vue en cours ; pas encore d'étude de cas liée."),
  beyondLabel: L("Beyond Code", "Au-delà du code"),
  beyondTitle: L("Engineering is how I build. Curiosity is how I grow.", "L'ingénierie est ma façon de construire. La curiosité, ma façon de grandir."),
  beyondIntro: L(
    "I'm interested not only in how a solution works, but also in why it should exist, who it serves, how it creates value and what it takes to bring it to life.",
    "Je m'intéresse non seulement à la manière dont une solution fonctionne, mais aussi à pourquoi elle doit exister, à qui elle sert, comment elle crée de la valeur et ce qu'il faut pour la concrétiser.",
  ),
  mapTitle: L("From idea to business — a learning map", "De l'idée à l'entreprise — une carte d'apprentissage"),
  why: L("Why it matters", "Pourquoi c'est important"),
  questions: L("Questions to ask", "Questions à se poser"),
  tools: L("Tools & frameworks", "Outils & cadres"),
  status: L("Learning status", "Statut d'apprentissage"),
  bmcTitle: L("Business Model Canvas — explore the nine blocks", "Business Model Canvas — explorez les neuf blocs"),
  techLink: L("Where engineering meets this choice", "Là où l'ingénierie rejoint ce choix"),
  learningTitle: L("What I am learning beyond code", "Ce que j'apprends au-delà du code"),
  learningBody: L(
    "I want to connect technical execution with product thinking, economic viability, customer needs and sustainable impact. NKHDMLIK.MA is where I practise this — as a learner, not an expert. The statuses above are honest self-assessments and will evolve.",
    "Je veux relier l'exécution technique à la pensée produit, la viabilité économique, les besoins clients et l'impact durable. NKHDMLIK.MA est mon terrain d'exercice — en tant qu'apprenante, pas experte. Les statuts ci-dessus sont des auto-évaluations honnêtes et évolueront.",
  ),
  aboutLabel: L("About", "À propos"),
  aboutTitle: L("Curious by nature. Engineering by choice.", "Curieuse par nature. Ingénieure par choix."),
  insightsLabel: L("Impact & Engineering Insights", "Impact & enseignements"),
  insightsTitle: L("Things I learned by building.", "Ce que j'ai appris en construisant."),
  insightsNote: L("Personal technical reflections drawn from my projects — not validated research or company claims.", "Réflexions techniques personnelles issues de mes projets — ni recherche validée, ni position d'entreprise."),
  read: L("Read", "Lire"),
  close: L("Close", "Fermer"),
  contactLabel: L("Contact", "Contact"),
  contactTitle: L("Have a problem worth solving?", "Un problème qui mérite d'être résolu ?"),
  contactBody: L(
    "I'm always interested in connecting with people who build, experiment, exchange ideas and explore opportunities across Data, AI and technology-driven products.",
    "J'aime échanger avec celles et ceux qui construisent, expérimentent, partagent des idées et explorent des opportunités en Data, IA et produits technologiques.",
  ),
  finalLine: L("Let's connect the dots between data, intelligence and impact.", "Relions les points entre donnée, intelligence et impact."),
  f: {
    name: L("Name", "Nom"),
    email: L("Professional email", "Email professionnel"),
    org: L("Organization (optional)", "Organisation (facultatif)"),
    topic: L("Topic", "Sujet"),
    message: L("Message", "Message"),
    send: L("Compose email", "Rédiger l'email"),
    sendNote: L(
      "This opens your email app with your message pre-filled — nothing is sent until you press send there.",
      "Cela ouvre votre messagerie avec le message pré-rempli — rien n'est envoyé tant que vous n'appuyez pas sur envoyer.",
    ),
    opened: L("Your email app should now be open with the draft. If not, write directly to", "Votre messagerie devrait s'ouvrir avec le brouillon. Sinon, écrivez directement à"),
    errName: L("Please enter your name.", "Veuillez indiquer votre nom."),
    errEmail: L("Please enter a valid email.", "Veuillez indiquer un email valide."),
    errTopic: L("Please choose a topic.", "Veuillez choisir un sujet."),
    errMsg: L("Message should be at least 10 characters.", "Le message doit contenir au moins 10 caractères."),
  },
  topics: [
    L("Data Engineering & AI opportunities", "Opportunités Data Engineering & IA"),
    L("PFE and internship discussions", "PFE et stages"),
    L("Technical collaboration", "Collaboration technique"),
    L("Entrepreneurship and product ideas", "Entrepreneuriat et idées produit"),
    L("Professional networking", "Networking professionnel"),
  ],
  back: L("Back to projects", "Retour aux projets"),
  top: L("Back to top", "Haut de page"),
};

export const credibility = [
  { org: "ENSA Khouribga", role: L("Computer Science & Data Engineering", "Informatique & Ingénierie des Données") },
  { org: "Intelcia Tech", role: L("Data Engineering & NLP", "Data Engineering & NLP") },
  { org: "SRM Casablanca-Settat", role: L("Data Engineering & Full-Stack", "Data Engineering & Full-Stack") },
  { org: "JLM", role: L("Leadership & Entrepreneurship", "Leadership & Entrepreneuriat") },
];

export const experiences = [
  {
    org: "Intelcia Tech",
    dates: L("July – September 2026", "Juillet – Septembre 2026"),
    role: L("Data Engineering & NLP Intern", "Stagiaire Data Engineering & NLP"),
    mission: L(
      "Technology-monitoring pipeline on IT/Data trends in Morocco and France: scraping, data quality, LLM-assisted entity extraction, orchestration, PostgreSQL and decision dashboards.",
      "Pipeline de veille technologique sur les tendances IT/Data au Maroc et en France : scraping, qualité des données, extraction d'entités assistée par LLM, orchestration, PostgreSQL et dashboards décisionnels.",
    ),
    tech: ["Python", "Selenium", "Ollama", "Airflow", "PostgreSQL", "Streamlit"],
    skills: [L("Pipeline design", "Conception de pipelines"), L("LLM integration", "Intégration LLM"), L("Data quality", "Qualité des données")],
    project: "intelcia-tech-monitoring-pipeline",
  },
  {
    org: "SRM Casablanca-Settat",
    dates: L("July – August 2025", "Juillet – Août 2025"),
    role: L("Data Engineering & Full-Stack Development Intern", "Stagiaire Data Engineering & Développement Full-Stack"),
    mission: L(
      "Strategic meter-management application within the IT & Digital Transformation department: secure APIs, automated analytical pipeline and interactive dashboards.",
      "Application de gestion des compteurs stratégiques au sein de la DSI & Transformation Digitale : API sécurisées, pipeline analytique automatisé et dashboards interactifs.",
    ),
    tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Airflow", "Spark", "Docker"],
    skills: [L("Full-stack development", "Développement full-stack"), L("Data modeling", "Modélisation"), L("Clustering", "Clustering")],
    project: "srm-strategic-meters",
  },
];

export const skillClusters: { name: Loc; skills: { name: string; projects: string[] }[] }[] = [
  {
    name: L("Data Engineering", "Data Engineering"),
    skills: [
      { name: "Python", projects: ["intelcia-tech-monitoring-pipeline", "srm-strategic-meters", "darija-ner", "multichannel-dwh"] },
      { name: "SQL", projects: ["srm-strategic-meters", "shopmarket", "intelcia-tech-monitoring-pipeline"] },
      { name: "ETL", projects: ["intelcia-tech-monitoring-pipeline", "multichannel-dwh"] },
      { name: "Web scraping", projects: ["intelcia-tech-monitoring-pipeline", "shopmarket"] },
      { name: "Apache Airflow", projects: ["intelcia-tech-monitoring-pipeline", "srm-strategic-meters"] },
      { name: "Spark", projects: ["srm-strategic-meters"] },
      { name: "Hadoop", projects: ["hadoop-movielens"] },
      { name: "PostgreSQL", projects: ["intelcia-tech-monitoring-pipeline", "srm-strategic-meters"] },
      { name: "MongoDB", projects: ["multichannel-dwh"] },
      { name: "Docker", projects: ["intelcia-tech-monitoring-pipeline", "srm-strategic-meters"] },
    ],
  },
  {
    name: L("AI & Machine Learning", "IA & Machine Learning"),
    skills: [
      { name: "Machine Learning", projects: ["heart-disease-prediction", "srm-strategic-meters"] },
      { name: "Deep Learning", projects: ["darija-ner", "arabic-ocr", "farmguard"] },
      { name: "CNN", projects: ["arabic-ocr", "farmguard"] },
      { name: "Transformers", projects: ["darija-ner", "arabic-ocr"] },
      { name: "NLP / NER", projects: ["darija-ner", "darija-ner-app", "intelcia-tech-monitoring-pipeline"] },
      { name: "LLM integration", projects: ["intelcia-tech-monitoring-pipeline", "darija-ner"] },
      { name: "SHAP", projects: ["heart-disease-prediction"] },
      { name: "Computer vision", projects: ["arabic-ocr", "farmguard"] },
    ],
  },
  {
    name: L("Software Engineering", "Génie logiciel"),
    skills: [
      { name: "FastAPI", projects: ["srm-strategic-meters", "darija-ner-app", "farmguard"] },
      { name: "Spring Boot", projects: ["shopmarket"] },
      { name: "React", projects: ["srm-strategic-meters", "shopmarket"] },
      { name: "Angular", projects: ["darija-ner-app"] },
      { name: "TypeScript", projects: ["srm-strategic-meters", "darija-ner-app", "shopmarket"] },
      { name: "REST APIs & auth", projects: ["srm-strategic-meters", "shopmarket"] },
    ],
  },
  {
    name: L("Data Science", "Data Science"),
    skills: [
      { name: "pandas / NumPy", projects: ["heart-disease-prediction", "shopmarket"] },
      { name: "scikit-learn", projects: ["heart-disease-prediction"] },
      { name: "Feature engineering", projects: ["heart-disease-prediction"] },
      { name: "Evaluation", projects: ["darija-ner", "arabic-ocr", "heart-disease-prediction"] },
      { name: "Visualization", projects: ["multichannel-dwh", "intelcia-tech-monitoring-pipeline"] },
    ],
  },
  {
    name: L("Experimentation & Workflow", "Expérimentation & workflow"),
    skills: [
      { name: "MLflow", projects: ["darija-ner"] },
      { name: "Optuna", projects: ["darija-ner"] },
      { name: "Label Studio", projects: ["darija-ner"] },
      { name: "Git / GitHub", projects: [] },
      { name: "Linux", projects: ["hadoop-movielens"] },
      { name: "Agile", projects: ["intelcia-tech-monitoring-pipeline"] },
    ],
  },
];

export type Status = "Exploring" | "Learning" | "Practicing" | "Applied";
export const statusLabel: Record<Status, Loc> = {
  Exploring: L("Exploring", "J'explore"),
  Learning: L("Learning", "J'apprends"),
  Practicing: L("Practicing", "Je pratique"),
  Applied: L("Applied", "Appliqué"),
};

// Statuses are editable self-assessment placeholders.
export const domains: { name: Loc; why: Loc; q: Loc[]; tools: string; status: Status }[] = [
  { name: L("Problem discovery & customer research", "Découverte du problème & recherche client"), why: L("A product without a real problem has no users.", "Sans vrai problème, un produit n'a pas d'utilisateurs."), q: [L("Who feels this pain most?", "Qui ressent le plus ce problème ?"), L("How do they solve it today?", "Comment le résolvent-ils aujourd'hui ?")], tools: "Interviews · Jobs-to-be-Done · The Mom Test", status: "Practicing" },
  { name: L("Market & competitor analysis", "Analyse du marché & de la concurrence"), why: L("Context tells you whether to enter and how to differ.", "Le contexte dit s'il faut entrer et comment se différencier."), q: [L("Who else serves these users?", "Qui sert déjà ces utilisateurs ?"), L("How big is the reachable market?", "Quelle est la taille du marché atteignable ?")], tools: "TAM/SAM/SOM · Competitor matrix", status: "Learning" },
  { name: L("Business Model Canvas", "Business Model Canvas"), why: L("One page to see how value is created and captured.", "Une page pour voir comment la valeur est créée et captée."), q: [L("Which block is the riskiest assumption?", "Quel bloc est l'hypothèse la plus risquée ?")], tools: "BMC · Lean Canvas", status: "Practicing" },
  { name: L("Value proposition & segments", "Proposition de valeur & segments"), why: L("Different users value different things.", "Des utilisateurs différents valorisent des choses différentes."), q: [L("What gain or relief do we create?", "Quel gain ou soulagement créons-nous ?")], tools: "Value Proposition Canvas · Personas", status: "Learning" },
  { name: L("Product strategy & MVP", "Stratégie produit & MVP"), why: L("The smallest thing that tests the biggest assumption.", "Le plus petit produit qui teste la plus grande hypothèse."), q: [L("What can we cut and still learn?", "Que peut-on retirer et apprendre quand même ?")], tools: "MoSCoW · User story mapping", status: "Practicing" },
  { name: L("Branding & positioning", "Marque & positionnement"), why: L("People choose what they understand and trust.", "On choisit ce que l'on comprend et à quoi on fait confiance."), q: [L("What one sentence describes us?", "Quelle phrase unique nous décrit ?")], tools: "Positioning statement", status: "Exploring" },
  { name: L("Marketing & acquisition", "Marketing & acquisition"), why: L("A great product nobody finds does not exist.", "Un bon produit que personne ne trouve n'existe pas."), q: [L("Which channel reaches our first 100 users?", "Quel canal atteint nos 100 premiers utilisateurs ?")], tools: "AARRR funnel · Content", status: "Exploring" },
  { name: L("Sales & partnerships", "Ventes & partenariats"), why: L("Partners can unlock distribution and trust.", "Les partenaires débloquent distribution et confiance."), q: [L("Who benefits if we succeed?", "Qui gagne si nous réussissons ?")], tools: "Partner mapping", status: "Exploring" },
  { name: L("Financial planning & unit economics", "Planification financière & unit economics"), why: L("Viability decides whether impact can last.", "La viabilité décide si l'impact peut durer."), q: [L("What does one customer cost and bring?", "Que coûte et rapporte un client ?")], tools: "CAC · LTV · Break-even", status: "Learning" },
  { name: L("Legal & business structure", "Juridique & structure"), why: L("Structure protects the project and its people.", "La structure protège le projet et les personnes."), q: [L("Which legal form fits our stage?", "Quelle forme juridique convient à notre stade ?")], tools: "Auto-entrepreneur · SARL (Morocco)", status: "Exploring" },
  { name: L("Operations & automation", "Opérations & automatisation"), why: L("Where engineering directly reduces cost and errors.", "Là où l'ingénierie réduit directement coûts et erreurs."), q: [L("Which manual step repeats the most?", "Quelle tâche manuelle se répète le plus ?")], tools: "Workflow automation · Pipelines", status: "Applied" },
  { name: L("Metrics, experimentation & growth", "Métriques, expérimentation & croissance"), why: L("Measure to learn, not to decorate.", "Mesurer pour apprendre, pas pour décorer."), q: [L("What is our north-star metric?", "Quelle est notre métrique étoile ?")], tools: "A/B tests · Cohorts · Dashboards", status: "Practicing" },
];

export const bmc: { key: string; name: Loc; desc: Loc; tech: Loc }[] = [
  { key: "kp", name: L("Key Partnerships", "Partenaires clés"), desc: L("Who helps us deliver what we can't do alone?", "Qui nous aide à livrer ce que nous ne pouvons pas faire seuls ?"), tech: L("Choosing third-party APIs or platforms is a partnership decision.", "Choisir des API ou plateformes tierces est une décision de partenariat.") },
  { key: "ka", name: L("Key Activities", "Activités clés"), desc: L("What must we do exceptionally well?", "Que devons-nous faire exceptionnellement bien ?"), tech: L("Defines which systems must be most reliable.", "Définit quels systèmes doivent être les plus fiables.") },
  { key: "kr", name: L("Key Resources", "Ressources clés"), desc: L("Which assets make the model work?", "Quels actifs font fonctionner le modèle ?"), tech: L("Data, models and code are resources to protect and maintain.", "Données, modèles et code sont des ressources à protéger.") },
  { key: "vp", name: L("Value Propositions", "Propositions de valeur"), desc: L("What problem do we solve, and why us?", "Quel problème résolvons-nous, et pourquoi nous ?"), tech: L("Every feature should trace back to one value proposition.", "Chaque fonctionnalité doit se rattacher à une proposition de valeur.") },
  { key: "cr", name: L("Customer Relationships", "Relations clients"), desc: L("How do we acquire and keep users?", "Comment acquérir et garder les utilisateurs ?"), tech: L("Self-service vs. assisted shapes UX, chatbots and support tooling.", "Self-service ou assisté façonne l'UX, les chatbots et le support.") },
  { key: "ch", name: L("Channels", "Canaux"), desc: L("How do users find and receive the value?", "Comment les utilisateurs trouvent et reçoivent la valeur ?"), tech: L("Web, mobile or WhatsApp changes the whole architecture.", "Web, mobile ou WhatsApp change toute l'architecture.") },
  { key: "cs", name: L("Customer Segments", "Segments clients"), desc: L("Who exactly are we creating value for?", "Pour qui exactement créons-nous de la valeur ?"), tech: L("Segments drive language support, accessibility and devices.", "Les segments guident langues, accessibilité et appareils.") },
  { key: "co", name: L("Cost Structure", "Structure de coûts"), desc: L("What are the most important costs?", "Quels sont les coûts les plus importants ?"), tech: L("Hosting, model inference and storage are engineering costs.", "Hébergement, inférence et stockage sont des coûts d'ingénierie.") },
  { key: "rs", name: L("Revenue Streams", "Sources de revenus"), desc: L("For what value are users willing to pay?", "Pour quelle valeur les utilisateurs sont-ils prêts à payer ?"), tech: L("Pricing models require metering, billing and analytics.", "Les modèles de prix exigent mesure, facturation et analytique.") },
];

export const aboutTimeline = [
  { year: "2022 – 2024", text: L("Integrated preparatory classes", "Classes préparatoires intégrées") },
  { year: "2024 – 2027", text: L("Engineering studies — Computer Science & Data Engineering, ENSA Khouribga", "Cycle ingénieur — Informatique & Ingénierie des Données, ENSA Khouribga") },
  { year: "2025", text: L("First internship at SRM-CS", "Premier stage à la SRM-CS") },
  { year: "2025 – 2026", text: L("Technical projects, research and leadership at JLM", "Projets techniques, recherche et leadership à la JLM") },
  { year: "2026", text: L("Intelcia Tech internship and NKHDMLIK.MA", "Stage Intelcia Tech et NKHDMLIK.MA") },
];

export const aboutText: Loc[] = [
  L(
    "I'm drawn to AI, data and automation because they turn scattered, complex information into something people can act on. That is the thread running through my projects — from monitoring pipelines to Darija NER.",
    "L'IA, la donnée et l'automatisation m'attirent parce qu'elles transforment une information dispersée et complexe en quelque chose d'exploitable. C'est le fil conducteur de mes projets — des pipelines de veille à la NER en Darija.",
  ),
  L(
    "I'm curious about how different industries work and what different roles see. Utilities, IT services, agriculture, low-resource languages: each taught me that the engineering problem is only part of the real problem.",
    "Je suis curieuse du fonctionnement des différents secteurs et de ce que voient les différents métiers. Énergie, services IT, agriculture, langues peu dotées : chacun m'a appris que le problème technique n'est qu'une partie du vrai problème.",
  ),
  L(
    "I learn continuously and across disciplines, and I want to build meaningful projects with teams and real users.",
    "J'apprends en continu et de manière transversale, et je veux construire des projets utiles avec des équipes et de vrais utilisateurs.",
  ),
];

export const insights: { title: Loc; body: Loc; from: string }[] = [
  {
    title: L("Why data quality comes before AI", "Pourquoi la qualité des données passe avant l'IA"),
    from: "Intelcia · Darija NER",
    body: L(
      "In the monitoring pipeline, the same job offer appeared on several platforms with slightly different titles. Without deduplication every skill count was inflated, and no model downstream could fix that. In Darija NER, inconsistent annotations capped the F1 before any architecture choice mattered. The model learns what the data says — so the data has to say the right thing first.",
      "Dans le pipeline de veille, une même offre apparaissait sur plusieurs plateformes avec des titres légèrement différents. Sans déduplication, chaque comptage de compétences était gonflé, et aucun modèle en aval ne pouvait corriger cela. En NER Darija, des annotations incohérentes plafonnaient le F1 avant même le choix d'architecture. Le modèle apprend ce que disent les données — elles doivent donc d'abord dire la bonne chose.",
    ),
  },
  {
    title: L("Turning an NLP model into an application", "Faire d'un modèle NLP une application"),
    from: "Darija NER App",
    body: L(
      "A trained model is a file. An application needs input validation, a stable API contract, latency budgets, batch endpoints, health checks and an interface that renders mixed right-to-left and left-to-right text. Most of the work was not in the model but around it — and that work is what makes a model usable by someone other than its author.",
      "Un modèle entraîné est un fichier. Une application exige validation des entrées, contrat d'API stable, budget de latence, endpoints batch, health checks et une interface qui affiche un texte mêlant droite-à-gauche et gauche-à-droite. L'essentiel du travail n'était pas dans le modèle mais autour — et c'est ce travail qui le rend utilisable par d'autres.",
    ),
  },
  {
    title: L("Orchestrating multi-source pipelines", "Orchestrer des pipelines multi-sources"),
    from: "Intelcia Tech",
    body: L(
      "Each source fails differently: an API rate-limits, a page changes layout, a trend endpoint times out. Splitting the pipeline into independent Airflow tasks meant one failing collector did not block the others, and retries and logs made failures visible instead of silent.",
      "Chaque source échoue différemment : une API limite le débit, une page change de structure, un endpoint expire. Découper le pipeline en tâches Airflow indépendantes évitait qu'un collecteur défaillant bloque les autres, et les retries et logs rendaient les échecs visibles plutôt que silencieux.",
    ),
  },
  {
    title: L("Evaluation beats a single accuracy number", "L'évaluation vaut mieux qu'un seul chiffre"),
    from: "Heart Disease · Arabic HTR",
    body: L(
      "88.71% accuracy sounds good until you ask about recall. 82.2% token accuracy sounds good until you look at CER. Reporting several metrics, checking for overfitting and reading individual errors told me far more than any single headline score.",
      "88,71 % d'accuracy semble bien jusqu'à ce qu'on regarde le rappel. 82,2 % de précision token semble bien jusqu'à ce qu'on regarde le CER. Rapporter plusieurs métriques, vérifier le surapprentissage et lire les erreurs une à une m'en a appris bien plus qu'un score unique.",
    ),
  },
  {
    title: L("Full-stack work teaches product thinking", "Le full-stack enseigne la pensée produit"),
    from: "SRM-CS · ShopMarket",
    body: L(
      "Building the SRM interface forced me to ask what decision a manager makes when looking at a chart. That question changed the KPIs, the filters and even the data model. Owning both ends of the system makes you design for the person at the end of it.",
      "Construire l'interface SRM m'a obligée à me demander quelle décision prend un manager devant un graphique. Cette question a changé les KPI, les filtres et même le modèle de données. Maîtriser les deux bouts du système oblige à concevoir pour la personne au bout.",
    ),
  },
  {
    title: L("Why entrepreneurship changes how engineers think", "Pourquoi l'entrepreneuriat change la pensée de l'ingénieur"),
    from: "NKHDMLIK.MA · FarmGuard",
    body: L(
      "In a startup context, 'can we build it?' is rarely the hardest question. 'Should we?', 'for whom?' and 'can it sustain itself?' come first. Learning to ask them makes me a better engineer, because it tells me which problems are worth the engineering.",
      "Dans un contexte startup, « peut-on le construire ? » est rarement la question la plus difficile. « Faut-il ? », « pour qui ? » et « est-ce viable ? » viennent d'abord. Apprendre à les poser fait de moi une meilleure ingénieure, car cela dit quels problèmes méritent l'ingénierie.",
    ),
  },
];
