import { L, type Loc } from "./i18n";

export type CatKey = "data" | "ai" | "ds" | "software" | "research" | "entre";

export const categories: { key: CatKey | "all"; label: Loc }[] = [
  { key: "all", label: L("All Projects", "Tous les projets") },
  { key: "data", label: L("Data Engineering", "Data Engineering") },
  { key: "ai", label: L("AI Engineering", "AI Engineering") },
  { key: "ds", label: L("Data Science", "Data Science") },
  { key: "software", label: L("Software & Data Products", "Logiciels & produits data") },
  { key: "research", label: L("Research & NLP", "Recherche & NLP") },
  { key: "entre", label: L("Entrepreneurship & Innovation", "Entrepreneuriat & innovation") },
];

export type ChartBar = { label: string; value: number; highlight?: boolean };

export type Project = {
  slug: string;
  title: Loc;
  short: string;
  cats: CatKey[];
  catLabel: Loc;
  org: Loc;
  period?: string;
  context: Loc;
  problem: Loc;
  solution: Loc;
  contribution: Loc[];
  stack: string[];
  results: Loc[];
  metric?: Loc;
  pipeline: string[];
  decisions: Loc[];
  challenges: Loc[];
  lessons: Loc[];
  next: Loc[];
  related: string[];
  chart?: { title: Loc; metric: string; max: number; bars: ChartBar[] };
  note?: Loc;
  size: "xl" | "lg" | "md";
};

export const projects: Project[] = [
  {
    slug: "intelcia-tech-monitoring-pipeline",
    short: "Intelcia Tech",
    title: L("From fragmented web signals to actionable IT & Data intelligence", "Des signaux web fragmentés à une veille IT & Data exploitable"),
    cats: ["data", "ai", "research"],
    catLabel: L("Data Engineering · NLP · BI", "Data Engineering · NLP · BI"),
    org: L("Intelcia Tech — Internship", "Intelcia Tech — Stage"),
    period: "Jul – Sep 2026",
    context: L(
      "A two-month internship focused on building an automated technology-monitoring platform for IT and Data trends in Morocco and France.",
      "Un stage de deux mois consacré à une plateforme automatisée de veille technologique sur les tendances IT et Data au Maroc et en France.",
    ),
    problem: L(
      "Job offers, technical articles and search trends came from heterogeneous sources, making manual market comparison and skill detection difficult.",
      "Offres d'emploi, articles techniques et tendances de recherche provenaient de sources hétérogènes, rendant difficile la comparaison manuelle des marchés.",
    ),
    solution: L(
      "An end-to-end pipeline covering multi-source collection, normalization, deduplication, entity extraction, automatic classification, orchestration, PostgreSQL storage, dashboards and weekly reporting.",
      "Un pipeline de bout en bout : collecte multi-sources, normalisation, déduplication, extraction d'entités, classification automatique, orchestration, stockage PostgreSQL, dashboards et reporting hebdomadaire.",
    ),
    contribution: [
      L("Developed seven job-offer collectors using official APIs and scraping.", "Développement de sept collecteurs d'offres via API officielles et scraping."),
      L("Built blog and Google Trends collection modules.", "Création des modules de collecte blogs et Google Trends."),
      L("Implemented technology entity extraction with dictionaries and a local LLM fallback.", "Extraction d'entités technologiques par dictionnaires avec repli sur un LLM local."),
      L("Added constrained structured output and anti-hallucination filtering.", "Sorties structurées contraintes et filtrage anti-hallucination."),
      L("Implemented classification and persistent caching.", "Classification et cache persistant."),
      L("Contributed to the PostgreSQL schema, containerized Airflow DAG and dashboard.", "Contribution au schéma PostgreSQL, au DAG Airflow conteneurisé et au dashboard."),
      L("Worked across five development sprints.", "Travail sur cinq sprints de développement."),
    ],
    stack: ["Python", "Selenium", "Scrapy", "Ollama", "Llama 3.2", "Qwen3", "Apache Airflow", "Docker", "PostgreSQL", "Streamlit", "Plotly"],
    results: [
      L("21 database tables", "21 tables en base"),
      L("Seven-page dashboard", "Dashboard de sept pages"),
      L("Automated weekly PDF reporting", "Reporting PDF hebdomadaire automatisé"),
      L("Airflow pipeline with eight tasks executing successfully", "Pipeline Airflow de huit tâches exécuté avec succès"),
    ],
    metric: L("8-task Airflow DAG · 21 tables", "DAG Airflow 8 tâches · 21 tables"),
    pipeline: ["Sources", "Collection", "Data Quality", "Deduplication", "NER & Classification", "PostgreSQL", "Dashboard & Reports"],
    decisions: [
      L("Dictionary matching first, local LLM only as fallback — cheaper, faster and auditable.", "Dictionnaires d'abord, LLM local en repli — moins coûteux, plus rapide et auditable."),
      L("Local models via Ollama rather than a hosted API to keep data in-house.", "Modèles locaux via Ollama plutôt qu'une API externe pour garder les données en interne."),
      L("Airflow in Docker for reproducible, observable orchestration.", "Airflow dans Docker pour une orchestration reproductible et observable."),
    ],
    challenges: [
      L("Heterogeneous source formats and changing page structures.", "Formats hétérogènes et structures de pages changeantes."),
      L("LLM outputs that drift from the expected schema — solved with constrained output and filtering.", "Sorties LLM hors schéma — traitées par sortie contrainte et filtrage."),
      L("Duplicate offers published across platforms.", "Offres dupliquées entre plateformes."),
    ],
    lessons: [
      L("Data quality and deduplication determine the value of every downstream insight.", "La qualité et la déduplication conditionnent la valeur de chaque analyse en aval."),
      L("Caching LLM calls turns an expensive step into a reliable one.", "Mettre en cache les appels LLM rend fiable une étape coûteuse."),
      L("Monitoring matters as much as the pipeline itself.", "Le monitoring compte autant que le pipeline lui-même."),
    ],
    next: [
      L("Add data lineage and freshness alerts.", "Ajouter le lignage des données et des alertes de fraîcheur."),
      L("Evaluate extraction precision on a labeled sample.", "Évaluer la précision de l'extraction sur un échantillon annoté."),
    ],
    related: ["srm-strategic-meters", "darija-ner"],
    note: L("Confidential internal details are intentionally omitted. Diagrams are illustrative.", "Les détails internes confidentiels sont volontairement omis. Les schémas sont illustratifs."),
    size: "xl",
  },
  {
    slug: "srm-strategic-meters",
    short: "SRM Casablanca-Settat",
    title: L("Turning strategic meter data into operational visibility", "Transformer les données de compteurs stratégiques en visibilité opérationnelle"),
    cats: ["data", "ai", "software"],
    catLabel: L("Data Engineering · AI · Full-Stack", "Data Engineering · IA · Full-Stack"),
    org: L("SRM Casablanca-Settat — Internship", "SRM Casablanca-Settat — Stage"),
    period: "Jul – Aug 2025",
    context: L(
      "A two-month internship with the IT and Digital Transformation department of Société Régionale Multiservices Casablanca-Settat.",
      "Un stage de deux mois au sein de la DSI & Transformation Digitale de la Société Régionale Multiservices Casablanca-Settat.",
    ),
    problem: L(
      "Strategic meter-monitoring campaigns needed centralized management, clear indicators, geographic visibility and automated analysis.",
      "Les campagnes de suivi des compteurs stratégiques nécessitaient une gestion centralisée, des indicateurs clairs, une vision géographique et une analyse automatisée.",
    ),
    solution: L(
      "A full-stack web application with a secure REST API, campaign management, analytical dashboards, maps and an automated clustering pipeline.",
      "Une application web full-stack avec API REST sécurisée, gestion des campagnes, dashboards analytiques, cartographie et pipeline de clustering automatisé.",
    ),
    contribution: [
      L("Designed the PostgreSQL data model.", "Conception du modèle de données PostgreSQL."),
      L("Developed FastAPI endpoints with SQLAlchemy and JWT authentication.", "Développement des endpoints FastAPI avec SQLAlchemy et authentification JWT."),
      L("Built the React and TypeScript interface.", "Création de l'interface React et TypeScript."),
      L("Implemented interactive charts, filters, maps and case-management views.", "Graphiques interactifs, filtres, cartes et vues de suivi des dossiers."),
      L("Integrated an Airflow pipeline running in Docker.", "Intégration d'un pipeline Airflow sous Docker."),
      L("Integrated a KMeans-based workflow for strategic meter identification.", "Intégration d'un workflow KMeans d'identification des compteurs stratégiques."),
      L("Contributed to KPI design and API testing.", "Contribution à la conception des KPI et aux tests d'API."),
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "React", "TypeScript", "Tailwind CSS", "Recharts", "Leaflet", "Apache Airflow", "Spark", "Docker", "Postman"],
    results: [L("Working full-stack application with secure API, dashboards and automated clustering pipeline", "Application full-stack fonctionnelle avec API sécurisée, dashboards et pipeline de clustering automatisé")],
    metric: L("End-to-end app + KMeans pipeline", "App complète + pipeline KMeans"),
    pipeline: ["Consumption history", "Processing", "Clustering", "Strategic meters", "Campaign monitoring", "Decision dashboard"],
    decisions: [
      L("FastAPI for typed, documented endpoints with low overhead.", "FastAPI pour des endpoints typés et documentés."),
      L("Unsupervised KMeans since no labeled 'strategic' ground truth existed.", "KMeans non supervisé faute de vérité terrain étiquetée."),
    ],
    challenges: [
      L("Translating business criteria into measurable KPIs.", "Traduire des critères métier en KPI mesurables."),
      L("Keeping map views responsive with many points.", "Garder les cartes fluides avec de nombreux points."),
    ],
    lessons: [
      L("Full-stack work forces you to think about the end user's decisions.", "Le full-stack oblige à penser aux décisions de l'utilisateur final."),
      L("A clean data model makes every later feature simpler.", "Un modèle de données propre simplifie chaque fonctionnalité future."),
    ],
    next: [L("Add cluster quality monitoring over time.", "Suivre la qualité des clusters dans le temps.")],
    related: ["intelcia-tech-monitoring-pipeline", "shopmarket"],
    note: L("No business savings, model accuracy or deployment claims are made. Mockups are illustrative.", "Aucune économie, précision ou mise en production n'est revendiquée. Maquettes illustratives."),
    size: "lg",
  },
  {
    slug: "darija-ner",
    short: "Darija NER",
    title: L("Teaching machines to understand Moroccan Darija", "Apprendre aux machines à comprendre la Darija marocaine"),
    cats: ["ai", "research"],
    catLabel: L("AI Engineering · NLP · Research", "AI Engineering · NLP · Recherche"),
    org: L("Academic research project", "Projet de recherche académique"),
    period: "Mar – Jun 2026",
    context: L(
      "Low-resource language processing addressing spelling variation, Arabic script, Arabizi and French-Arabic code-switching.",
      "Traitement d'une langue peu dotée : variations orthographiques, écriture arabe, Arabizi et alternance français-arabe.",
    ),
    problem: L(
      "Without a suitable annotated corpus, named-entity recognition in Moroccan Darija is hard to train or evaluate.",
      "Sans corpus annoté adapté, la reconnaissance d'entités nommées en Darija est difficile à entraîner et à évaluer.",
    ),
    solution: L(
      "A semi-automated corpus construction and model-evaluation pipeline: collection, preprocessing, LLM-assisted annotation, human validation, training and experiment tracking.",
      "Un pipeline semi-automatisé de construction de corpus et d'évaluation : collecte, prétraitement, annotation assistée par LLM, validation humaine, entraînement et suivi d'expériences.",
    ),
    contribution: [
      L("Cleaned and normalized multilingual text.", "Nettoyage et normalisation de textes multilingues."),
      L("Detected Arabic-script and Arabizi content.", "Détection de l'écriture arabe et de l'Arabizi."),
      L("Designed an enriched schema with 37 entity types.", "Conception d'un schéma enrichi de 37 types d'entités."),
      L("Used LLM pre-annotation and Label Studio for human validation.", "Pré-annotation LLM et validation humaine sous Label Studio."),
      L("Compared rule-based, CRF, BiLSTM-CRF and Transformer approaches.", "Comparaison des approches règles, CRF, BiLSTM-CRF et Transformers."),
      L("Optimized models and handled rare entities; tracked experiments with MLflow.", "Optimisation des modèles, gestion des entités rares, suivi MLflow."),
    ],
    stack: ["Python", "PyTorch", "CRF", "BiLSTM-CRF", "CharCNN", "mBERT", "XLM-R", "DarijaBERT", "Optuna", "Label Studio", "MLflow"],
    results: [
      L("2,105 long texts in the gold corpus", "2 105 textes longs dans le corpus gold"),
      L("49,698 annotated entities", "49 698 entités annotées"),
      L("37 entity types", "37 types d'entités"),
      L("≈0.90 F1 for the best BiLSTM-CRF pipeline on the test set", "≈0,90 F1 pour le meilleur pipeline BiLSTM-CRF sur le test"),
    ],
    metric: L("≈0.90 F1 · 49,698 entities", "≈0,90 F1 · 49 698 entités"),
    pipeline: ["Collection", "Preprocessing", "LLM pre-annotation", "Human validation", "Training", "Evaluation"],
    chart: {
      title: L("Results from this experiment", "Résultats de cette expérience"),
      metric: "F1",
      max: 1,
      bars: [
        { label: "Rules", value: 0.38 },
        { label: "CRF", value: 0.68 },
        { label: "XLM-R + CRF", value: 0.72 },
        { label: "mBERT + CRF", value: 0.74 },
        { label: "DarijaBERT", value: 0.59 },
        { label: "BiLSTM-CRF v2", value: 0.9, highlight: true },
      ],
    },
    decisions: [
      L("LLM pre-annotation + human validation to scale labeling without losing quality.", "Pré-annotation LLM + validation humaine pour passer à l'échelle sans perdre en qualité."),
      L("Character-level features (CharCNN) to absorb spelling variation.", "Features au niveau caractère (CharCNN) pour absorber les variations orthographiques."),
    ],
    challenges: [
      L("Class imbalance across 37 entity types.", "Déséquilibre des classes sur 37 types d'entités."),
      L("Keeping annotation consistent across scripts.", "Cohérence d'annotation entre les écritures."),
    ],
    lessons: [
      L("Corpus quality bounds model quality.", "La qualité du corpus borne la qualité du modèle."),
      L("A smaller well-tuned model can beat larger pretrained ones on niche data.", "Un modèle plus petit bien réglé peut battre de grands modèles pré-entraînés sur des données de niche."),
    ],
    next: [L("Per-entity error analysis and public benchmark release.", "Analyse d'erreurs par entité et publication d'un benchmark.")],
    related: ["darija-ner-app", "arabic-ocr"],
    size: "lg",
  },
  {
    slug: "darija-ner-app",
    short: "Darija NER App",
    title: L("From an NLP model to an interactive language tool", "D'un modèle NLP à un outil linguistique interactif"),
    cats: ["ai", "software", "research"],
    catLabel: L("AI Engineering · Full-Stack", "AI Engineering · Full-Stack"),
    org: L("Academic project", "Projet académique"),
    context: L("Integration of the trained BiLSTM-CRF model into a FastAPI backend and Angular 17 frontend.", "Intégration du modèle BiLSTM-CRF entraîné dans un backend FastAPI et un frontend Angular 17."),
    problem: L("A model in a notebook is not usable by anyone else.", "Un modèle dans un notebook n'est utilisable par personne d'autre."),
    solution: L(
      "A web tool with real-time analysis, Arabic/Arabizi/code-switching support, colored entity highlighting, live statistics, RTL support, and prediction, batch and health endpoints.",
      "Un outil web : analyse en temps réel, support arabe/Arabizi/alternance codique, surlignage coloré, statistiques en direct, RTL, endpoints de prédiction, batch et santé.",
    ),
    contribution: [
      L("Served the model with FastAPI, Pydantic validation and Swagger docs.", "Exposition du modèle via FastAPI, validation Pydantic et docs Swagger."),
      L("Built the Angular 17 interface with highlighting and RTL support.", "Interface Angular 17 avec surlignage et support RTL."),
    ],
    stack: ["Python", "PyTorch", "FastAPI", "Angular 17", "TypeScript", "Swagger UI"],
    results: [L("37 entity types detected; ~29 ms average CPU inference in the documented setup", "37 types d'entités ; ~29 ms d'inférence moyenne sur CPU dans la configuration documentée")],
    metric: L("~29 ms CPU inference", "~29 ms d'inférence CPU"),
    pipeline: ["Text input", "Tokenization", "BiLSTM-CRF", "Entities", "Highlight & stats"],
    decisions: [L("Batch endpoint to amortize model overhead.", "Endpoint batch pour amortir le coût du modèle.")],
    challenges: [L("Mixed LTR/RTL rendering in one text field.", "Rendu mixte LTR/RTL dans un même champ.")],
    lessons: [L("Serving a model surfaces issues evaluation never shows: latency, input validation, UX.", "Servir un modèle révèle ce que l'évaluation ne montre pas : latence, validation, UX.")],
    next: [L("Public hosted demo.", "Démo publique hébergée.")],
    related: ["darija-ner"],
    size: "md",
  },
  {
    slug: "arabic-ocr",
    short: "Arabic HTR",
    title: L("Bridging historical Arabic manuscripts and modern AI", "Relier manuscrits arabes anciens et IA moderne"),
    cats: ["ai", "research"],
    catLabel: L("AI · Computer Vision · Deep Learning", "IA · Vision · Deep Learning"),
    org: L("Academic project — RASM2019", "Projet académique — RASM2019"),
    period: "Mar – Jun 2026",
    context: L("Handwritten text recognition on the RASM2019 historical Arabic dataset.", "Reconnaissance d'écriture manuscrite sur le jeu de données historique RASM2019."),
    problem: L("Historical Arabic manuscripts are difficult to digitize: degraded pages, connected script and scarce data.", "Les manuscrits arabes anciens sont difficiles à numériser : pages dégradées, écriture liée, données rares."),
    solution: L("A CNN feature extractor with a Transformer recognizer, evaluated with CER, WER and token accuracy.", "Un extracteur CNN et un reconnaisseur Transformer, évalués par CER, WER et précision par token."),
    contribution: [
      L("Built the PAGE XML parser.", "Développement du parseur PAGE XML."),
      L("Fixed six critical preprocessing bugs across iterations.", "Correction de six bugs critiques de prétraitement."),
      L("Added CLAHE, PCA-based deskewing and 14+ augmentation techniques.", "Ajout de CLAHE, redressement par PCA et plus de 14 augmentations."),
      L("Applied mixed precision, gradient accumulation and label smoothing.", "Précision mixte, accumulation de gradient et label smoothing."),
    ],
    stack: ["Python", "PyTorch", "CNN", "Transformer", "Albumentations", "RASM2019"],
    results: [
      L("Token accuracy: 45.8% (V1) → 49.7% (V2) → 82.2% (V3)", "Précision token : 45,8 % (V1) → 49,7 % (V2) → 82,2 % (V3)"),
      L("Normalized CER 24.3% on 203 test examples", "CER normalisé 24,3 % sur 203 exemples de test"),
    ],
    metric: L("82.2% token accuracy (V3)", "82,2 % précision token (V3)"),
    pipeline: ["PAGE XML", "Preprocessing", "CNN features", "Transformer", "CER / WER"],
    chart: {
      title: L("Token accuracy across iterations", "Précision token par itération"),
      metric: "%",
      max: 100,
      bars: [
        { label: "V1", value: 45.8 },
        { label: "V2", value: 49.7 },
        { label: "V3", value: 82.2, highlight: true },
      ],
    },
    decisions: [L("Invest in preprocessing before model size.", "Investir dans le prétraitement avant la taille du modèle.")],
    challenges: [L("Silent preprocessing bugs that looked like model failures.", "Bugs silencieux de prétraitement ressemblant à des échecs du modèle.")],
    lessons: [L("Error analysis on inputs often beats architecture changes.", "L'analyse d'erreurs sur les entrées bat souvent les changements d'architecture.")],
    next: [L("Language-model decoding to lower CER.", "Décodage avec modèle de langue pour réduire le CER.")],
    related: ["darija-ner", "farmguard"],
    size: "md",
  },
  {
    slug: "farmguard",
    short: "FarmGuard",
    title: L("AI for more sustainable agriculture", "L'IA pour une agriculture plus durable"),
    cats: ["ai", "entre"],
    catLabel: L("AI · Computer Vision · Social Entrepreneurship", "IA · Vision · Entrepreneuriat social"),
    org: L("Hult Prize — 4-member student team", "Hult Prize — équipe étudiante de 4"),
    period: "Jan – Feb 2026",
    context: L("A student team project for the Hult Prize social entrepreneurship competition.", "Un projet d'équipe étudiante pour la compétition d'entrepreneuriat social Hult Prize."),
    problem: L("Smallholder farmers often detect plant diseases too late.", "Les petits agriculteurs détectent souvent trop tard les maladies des plantes."),
    solution: L("A platform concept combining disease detection, an agricultural chatbot, ESP32 humidity/pH sensors and web/mobile interfaces.", "Un concept de plateforme : détection de maladies, chatbot agricole, capteurs ESP32 humidité/pH, interfaces web/mobile."),
    contribution: [L("Responsible for the plant-disease detection module using CNN models trained on PlantVillage.", "Responsable du module de détection de maladies : CNN entraînés sur PlantVillage.")],
    stack: ["Python", "TensorFlow", "CNN", "FastAPI", "LangChain", "ESP32", "MQTT"],
    results: [L("Working disease-detection module within the team prototype", "Module de détection fonctionnel dans le prototype d'équipe")],
    pipeline: ["Leaf image", "CNN", "Diagnosis", "Chatbot advice"],
    decisions: [L("Transfer-friendly CNNs suited to the PlantVillage dataset.", "CNN adaptés au jeu PlantVillage.")],
    challenges: [L("Lab images differ from real field conditions.", "Les images de laboratoire diffèrent des conditions réelles.")],
    lessons: [L("Social impact projects require thinking about the user before the model.", "Un projet à impact social commence par l'utilisateur, pas le modèle.")],
    next: [L("Test on field photos.", "Tester sur des photos de terrain.")],
    related: ["arabic-ocr"],
    note: L("Team project. No awards, deployment or verified impact are claimed.", "Projet d'équipe. Aucun prix, déploiement ou impact vérifié n'est revendiqué."),
    size: "md",
  },
  {
    slug: "heart-disease-prediction",
    short: "Heart Disease ML",
    title: L("Building interpretable machine learning models", "Construire des modèles de machine learning interprétables"),
    cats: ["ds"],
    catLabel: L("Data Science · Machine Learning", "Data Science · Machine Learning"),
    org: L("Kaggle Playground Series S6E2", "Kaggle Playground Series S6E2"),
    context: L("A Kaggle competition on tabular heart-disease prediction.", "Une compétition Kaggle de prédiction tabulaire de maladies cardiaques."),
    problem: L("Accurate predictions are not enough — the model has to be explainable.", "Prédire juste ne suffit pas — le modèle doit être explicable."),
    solution: L("EDA, preprocessing, feature engineering, comparison of LR, Random Forest, SVM and XGBoost, overfitting checks, permutation importance and SHAP.", "EDA, prétraitement, feature engineering, comparaison LR, Random Forest, SVM et XGBoost, contrôle du surapprentissage, importance par permutation et SHAP."),
    contribution: [L("Full individual workflow from EDA to interpretation.", "Workflow individuel complet de l'EDA à l'interprétation.")],
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "SHAP"],
    results: [L("XGBoost: 88.71% accuracy, 87.96% precision, 86.65% recall, ≈0.95 AUC", "XGBoost : 88,71 % accuracy, 87,96 % précision, 86,65 % rappel, ≈0,95 AUC")],
    metric: L("≈0.95 AUC (XGBoost)", "≈0,95 AUC (XGBoost)"),
    pipeline: ["EDA", "Features", "Model comparison", "SHAP", "Evaluation"],
    chart: {
      title: L("XGBoost evaluation metrics", "Métriques d'évaluation XGBoost"),
      metric: "%",
      max: 100,
      bars: [
        { label: "Accuracy", value: 88.71, highlight: true },
        { label: "Precision", value: 87.96 },
        { label: "Recall", value: 86.65 },
        { label: "AUC×100", value: 95 },
      ],
    },
    decisions: [L("Report several metrics, not just accuracy.", "Rapporter plusieurs métriques, pas seulement l'accuracy.")],
    challenges: [L("Detecting overfitting on a synthetic dataset.", "Détecter le surapprentissage sur un jeu synthétique.")],
    lessons: [L("Interpretation builds trust in a model.", "L'interprétation crée la confiance dans un modèle.")],
    next: [L("Calibration analysis.", "Analyse de calibration.")],
    related: ["darija-ner"],
    note: L("Competition dataset — not a clinically validated diagnostic tool.", "Jeu de données de compétition — pas un outil de diagnostic validé cliniquement."),
    size: "md",
  },
  {
    slug: "shopmarket",
    short: "ShopMarket",
    title: L("An e-commerce platform designed around data", "Une plateforme e-commerce pensée autour de la donnée"),
    cats: ["data", "software", "ai"],
    catLabel: L("Data Engineering · Full-Stack · AI", "Data Engineering · Full-Stack · IA"),
    org: L("Academic project", "Projet académique"),
    context: L("A Java and React e-commerce platform.", "Une plateforme e-commerce Java et React."),
    problem: L("Operational shop workflows and analytical needs usually live in separate tools.", "Les opérations d'une boutique et ses besoins analytiques vivent souvent dans des outils séparés."),
    solution: L("Product management, cart, orders, stock alerts, role-based dashboards, exports, chatbot and semantic search.", "Gestion produits, panier, commandes, alertes de stock, dashboards par rôle, exports, chatbot et recherche sémantique."),
    contribution: [L("Built the platform and its parallel scraping data-collection workflow.", "Développement de la plateforme et du workflow de scraping parallèle.")],
    stack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "React", "TypeScript", "Selenium", "BeautifulSoup", "pandas"],
    results: [L("Five-script parallel scraping achieved >95% data completeness in the documented setup", "Scraping parallèle à cinq scripts : >95 % de complétude dans la configuration documentée")],
    metric: L(">95% data completeness", ">95 % de complétude"),
    pipeline: ["Scrapers ×5", "Cleaning", "MySQL", "Spring API", "React dashboards"],
    decisions: [L("Parallel scrapers to cut collection time.", "Scrapers parallèles pour réduire le temps de collecte.")],
    challenges: [L("Missing fields across sources.", "Champs manquants selon les sources.")],
    lessons: [L("Designing for analytics from day one avoids costly rework.", "Penser analytique dès le départ évite des refontes coûteuses.")],
    next: [L("Recommendation engine.", "Moteur de recommandation.")],
    related: ["srm-strategic-meters", "multichannel-dwh"],
    size: "md",
  },
  {
    slug: "multichannel-dwh",
    short: "MultiMarket DWH",
    title: L("Connecting multichannel data for decision-making", "Relier des données multicanales pour décider"),
    cats: ["data"],
    catLabel: L("Data Engineering · Analytics", "Data Engineering · Analytique"),
    org: L("Academic simulation — MultiMarket", "Simulation académique — MultiMarket"),
    context: L("A simulated multichannel retailer.", "Un distributeur multicanal simulé."),
    problem: L("Orders from several channels need one consistent view.", "Les commandes de plusieurs canaux nécessitent une vue unifiée."),
    solution: L("Python-generated orders, validation and ingestion into MongoDB, aggregation pipelines and KPI dashboards in Streamlit, Plotly and Power BI.", "Commandes générées en Python, validation et ingestion MongoDB, pipelines d'agrégation et KPI sous Streamlit, Plotly et Power BI."),
    contribution: [L("Built the generation, ingestion and analytics layers.", "Développement des couches génération, ingestion et analytique.")],
    stack: ["Python", "MongoDB", "Streamlit", "Plotly", "Power BI"],
    results: [L("End-to-end path from simulated events to decision KPIs", "Chaîne complète des événements simulés aux KPI de décision")],
    pipeline: ["Generate", "Validate", "MongoDB", "Aggregate", "KPIs"],
    decisions: [L("Document store for flexible order schemas.", "Base documentaire pour des schémas flexibles.")],
    challenges: [L("Defining KPIs that mean the same across channels.", "Définir des KPI cohérents entre canaux.")],
    lessons: [L("A KPI is a business decision written as code.", "Un KPI est une décision métier écrite en code.")],
    next: [L("Star-schema comparison.", "Comparaison avec un schéma en étoile.")],
    related: ["shopmarket", "hadoop-movielens"],
    size: "md",
  },
  {
    slug: "hadoop-movielens",
    short: "Hadoop × MovieLens",
    title: L("Distributed analytics at scale", "Analytique distribuée à grande échelle"),
    cats: ["data"],
    catLabel: L("Big Data Engineering", "Big Data Engineering"),
    org: L("Academic project", "Projet académique"),
    context: L("A four-VM Hadoop cluster (1 master, 3 workers) running on MovieLens ml-32m.", "Un cluster Hadoop de quatre VM (1 master, 3 workers) sur MovieLens ml-32m."),
    problem: L("32M ratings exceed comfortable single-machine analysis.", "32 M de notes dépassent une analyse confortable sur une seule machine."),
    solution: L("Hadoop 3.3.6, HDFS replication factor 3 and eleven Python Streaming MapReduce jobs.", "Hadoop 3.3.6, réplication HDFS facteur 3 et onze jobs MapReduce Python Streaming."),
    contribution: [L("Set up the cluster and wrote the MapReduce jobs.", "Mise en place du cluster et écriture des jobs MapReduce.")],
    stack: ["Hadoop 3.3.6", "HDFS", "MapReduce", "Python Streaming", "Linux"],
    results: [L("11 MapReduce jobs on ml-32m across a 4-node cluster", "11 jobs MapReduce sur ml-32m, cluster de 4 nœuds")],
    metric: L("4 nodes · 11 jobs", "4 nœuds · 11 jobs"),
    pipeline: ["HDFS ×3", "Map", "Shuffle", "Reduce", "Results"],
    decisions: [L("Replication factor 3 for fault tolerance.", "Facteur de réplication 3 pour la tolérance aux pannes.")],
    challenges: [L("Cluster networking and configuration.", "Réseau et configuration du cluster.")],
    lessons: [L("Partitioning decides performance in distributed computing.", "Le partitionnement décide des performances en calcul distribué.")],
    next: [L("Port jobs to Spark and compare.", "Porter les jobs vers Spark et comparer.")],
    related: ["multichannel-dwh"],
    size: "md",
  },
];

export const additional: { title: string; desc: Loc; stack: string; team?: boolean; cat: CatKey }[] = [
  { title: "Sales Analytics Desktop", desc: L("Sales analytics desktop application.", "Application desktop d'analyse des ventes."), stack: "Java · JavaFX · MySQL", cat: "software" },
  { title: "Banking Data Analysis", desc: L("Banking data preprocessing and statistical analysis.", "Prétraitement et analyse statistique de données bancaires."), stack: "Python · pandas", cat: "ds" },
  { title: "Clinic Management", desc: L("Clinic management system designed with Merise.", "Gestion de clinique conçue avec Merise."), stack: "Merise · SQL · PHP", cat: "software" },
  { title: "AquaFlow", desc: L("Water-leak detection concept: sensor, AI anomaly detection and alerts. Participated in development.", "Concept de détection de fuites : capteur, détection d'anomalies IA, alertes. Participation au développement."), stack: "IoT · AI", team: true, cat: "entre" },
  { title: "Eco-Watt", desc: L("Electricity-consumption monitoring concept. Participated in development.", "Concept de suivi de consommation électrique. Participation au développement."), stack: "IoT · Data", team: true, cat: "entre" },
  { title: "Hrayfia", desc: L("Artisan marketplace prototype with chatbot and recommendations. Participated in development.", "Prototype de marketplace artisanale avec chatbot et recommandations. Participation au développement."), stack: "Web · AI", team: true, cat: "entre" },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
