// LanguageContext.tsx
//
// The language context provides English and French translations for the entire site.
//
// This revision restructures the site from a consulting practice site into an executive
// governance leadership platform. Donald Daglo is now positioned as the governance leader
// behind the platform, while institutional gravitas is preserved through the writing voice
// and the framing of the work.
//
// The information architecture has changed. Six content pages have become five: Home,
// About, Insights, Advisory Work, and Contact. The About page consolidates the previous
// Philosophy, Approach, and Foundation pages into a single substantive page organized
// into four clearly defined sections.
//
// Daglo & Co. with the ampersand is now used consistently throughout the site as the
// firm name, replacing "Daglo and Co." which was the previous prose form.

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, { en: string; fr: string }> = {
  // Navigation labels for the new five-page architecture.
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.insights": { en: "Insights", fr: "Perspectives" },
  "nav.advisory": { en: "Advisory Work", fr: "Travail consultatif" },
  "nav.contact": { en: "Contact", fr: "Contact" },

  // Homepage hero now introduces Donald Daglo as the governance leader.
  "home.eyebrow": {
    en: "Donald Daglo · Governance Leadership Platform",
    fr: "Donald Daglo · Plateforme de leadership en gouvernance",
  },
  "home.hero.line1": { en: "The castle has", fr: "Le château est" },
  "home.hero.line2": { en: "already fallen.", fr: "déjà tombé." },
  "home.hero.tagline": {
    en: "Counsel for the decisions that define you.",
    fr: "Conseil pour les décisions qui vous définissent.",
  },
  "home.hero.intro": {
    en: "A governance-minded executive working with boards and senior leadership on enterprise risk, resilience, Zero Trust, and decisions made under uncertainty.",
    fr: "Un dirigeant orienté gouvernance qui travaille avec les conseils d'administration et la direction générale sur le risque d'entreprise, la résilience, le Zero Trust et les décisions prises dans l'incertitude.",
  },
  "home.hero.cta": { en: "Begin", fr: "Commencer" },

  // Governance thesis section on the homepage.
  "home.thesis.eyebrow": { en: "Governance Thesis", fr: "Thèse de gouvernance" },
  "home.thesis.heading": {
    en: "Governance is not paperwork.",
    fr: "La gouvernance n'est pas de la paperasse.",
  },
  "home.thesis.body": {
    en: "Governance is the discipline of seeing reality clearly, making decisions under pressure, and deciding where an organization is willing to place Trust. Daglo & Co. exists to provide counsel to boards and executives navigating that responsibility in environments where the old governance models can no longer keep up.",
    fr: "La gouvernance est la discipline de voir la réalité clairement, de prendre des décisions sous pression et de décider où une organisation accepte de placer sa Confiance. Daglo & Co. existe pour conseiller les conseils d'administration et les dirigeants qui assument cette responsabilité dans des environnements où les anciens modèles de gouvernance ne suffisent plus.",
  },

  // The Four Pillars framework on the homepage, preserved as you requested.
  "home.pillars.eyebrow": { en: "The Four Pillars", fr: "Les quatre piliers" },
  "home.pillars.heading": {
    en: "One operating system.",
    fr: "Un système d'exploitation unifié.",
  },
  "home.pillars.intro": {
    en: "Most boards treat governance, risk, and leadership as separate functions. They are not. They form a unified operating system in which every decision about trust cascades throughout the enterprise.",
    fr: "La plupart des conseils traitent la gouvernance, le risque et le leadership comme des fonctions distinctes. Ils ne le sont pas. Ils forment un système d'exploitation unifié dans lequel chaque décision sur la confiance se propage à travers l'entreprise.",
  },
  "home.pillar1.title": { en: "See clearly", fr: "Voir clairement" },
  "home.pillar1.desc": {
    en: "Boards receive sanitized reports after risk has already matured. True governance begins with seeing the terrain as it is, which builds confidence in decision-making.",
    fr: "Les conseils reçoivent des rapports filtrés après que le risque a déjà mûri. La véritable gouvernance commence par voir le terrain tel qu'il est, ce qui renforce la confiance dans la prise de décision.",
  },
  "home.pillar2.title": { en: "Verify Trust", fr: "Vérifier la Confiance" },
  "home.pillar2.desc": {
    en: "Why are we implicitly trusting something we have not verified? The answer determines where the next failure will originate. Every implicit trust relationship is an exposure until it is examined and made explicit.",
    fr: "Pourquoi accordons-nous implicitement notre confiance à quelque chose que nous n'avons pas vérifié ? La réponse détermine d'où viendra le prochain échec. Chaque relation de confiance implicite est une exposition tant qu'elle n'a pas été examinée et rendue explicite.",
  },
  "home.pillar3.title": { en: "Adapt under pressure", fr: "S'adapter sous pression" },
  "home.pillar3.desc": {
    en: "Risk no longer moves linearly. Governance must operate at the speed of the environment, fostering resilience and confidence in handling rapid changes.",
    fr: "Le risque ne se déplace plus de manière linéaire. La gouvernance doit fonctionner à la vitesse de l'environnement, en favorisant la résilience et la confiance dans la gestion des changements rapides.",
  },
  "home.pillar4.title": {
    en: "Survive contested terrain",
    fr: "Survivre en terrain contesté",
  },
  "home.pillar4.desc": {
    en: "Governance must hold under stress, not collapse to compliance theater. The enterprise must be built to function when assumptions fail. Resilience is engineered into the structure rather than added through emergency measures.",
    fr: "La gouvernance doit tenir sous la pression, et non s'effondrer en théâtre de conformité. L'entreprise doit être construite pour fonctionner lorsque les hypothèses échouent. La résilience est intégrée à la structure plutôt qu'ajoutée par des mesures d'urgence.",
  },

  // About preview section on the homepage that introduces Donald and links to the
  // full About page. This is one of the new sections that supports the executive
  // platform positioning.
  "home.about.eyebrow": { en: "About Donald Daglo", fr: "À propos de Donald Daglo" },
  "home.about.heading": {
    en: "A governance voice shaped by federal leadership, enterprise risk, and the discipline of decisions made under uncertainty.",
    fr: "Une voix de gouvernance forgée par le leadership fédéral, le risque d'entreprise et la discipline des décisions prises dans l'incertitude.",
  },
  "home.about.body": {
    en: "U.S. Air Force veteran. Federal data leader. Founder of Lumeva LLC. Practitioner depth in enterprise risk, Zero Trust strategy, data governance, and the kind of judgment that holds when assumptions fail. Studied at Columbia, INSEAD, and through governance frameworks developed by COSO, NACD, and Forrester.",
    fr: "Vétéran de l'U.S. Air Force. Leader fédéral des données. Fondateur de Lumeva LLC. Expertise de praticien en risque d'entreprise, stratégie Zero Trust, gouvernance des données et dans le type de jugement qui tient lorsque les hypothèses échouent. Formé à Columbia, à l'INSEAD et à travers les cadres de gouvernance développés par COSO, NACD et Forrester.",
  },
  "home.about.cta": { en: "Read More", fr: "En savoir plus" },

  // Approach preview section on the homepage.
  "home.approach.eyebrow": { en: "The Approach", fr: "L'approche" },
  "home.approach.heading": {
    en: "Enterprise risk as terrain.",
    fr: "Le risque d'entreprise comme terrain.",
  },
  "home.approach.p1": {
    en: "I think about risk the way a geospatial intelligence analyst thinks about contested terrain. You must understand the movement, timing, life pattern, dependencies, chokepoints, and the adversary's likely path.",
    fr: "Je pense au risque comme un analyste de renseignement géospatial pense à un terrain contesté. Il faut comprendre le mouvement, le rythme, le schéma d'activité, les dépendances, les points de passage critiques et la trajectoire probable de l'adversaire.",
  },
  "home.approach.p2": {
    en: "In enterprise terms, that means understanding how data flows, where access is overextended, where third-party exposure exists, and where a single failure could cascade across the organization.",
    fr: "En termes d'entreprise, cela signifie comprendre comment les données circulent, où les accès sont trop étendus, où existe l'exposition aux tiers, et où une seule défaillance pourrait se propager à travers toute l'organisation.",
  },
  "home.approach.cta": { en: "About the Practice", fr: "À propos de la pratique" },

  // Advisory work preview section on the homepage.
  "home.advisory.eyebrow": { en: "Advisory Work", fr: "Travail consultatif" },
  "home.advisory.heading": {
    en: "Selective advisory work. Strategic counsel.",
    fr: "Travail consultatif sélectif. Conseil stratégique.",
  },
  "home.advisory.intro": {
    en: "I work with a limited number of boards, executives, and leadership teams navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can keep pace with.",
    fr: "Je travaille avec un nombre limité de conseils d'administration, de dirigeants et d'équipes de direction confrontés à la complexité, à des actifs de grande valeur, à des données sensibles et à des risques qui évoluent plus vite que les modèles de gouvernance traditionnels.",
  },
  "home.advisory.cta": { en: "How I Work", fr: "Comment je travaille" },
  "home.advisory1.title": {
    en: "Board governance advisory",
    fr: "Conseil en gouvernance d'entreprise",
  },
  "home.advisory1.desc": {
    en: "Strategic governance dialogue with boards and committees navigating complex environments.",
    fr: "Dialogue stratégique de gouvernance avec les conseils et comités évoluant dans des environnements complexes.",
  },
  "home.advisory2.title": {
    en: "Enterprise risk strategy",
    fr: "Stratégie de risque d'entreprise",
  },
  "home.advisory2.desc": {
    en: "Designing governance structures that see risk clearly before it matures.",
    fr: "Concevoir des structures de gouvernance qui voient clairement le risque avant qu'il ne mûrisse.",
  },
  "home.advisory3.title": {
    en: "Governance architecture",
    fr: "Architecture de gouvernance",
  },
  "home.advisory3.desc": {
    en: "AI governance, data governance, and emerging technology risk frameworks.",
    fr: "Gouvernance de l'IA, gouvernance des données et cadres de risque des technologies émergentes.",
  },
  "home.advisory4.title": {
    en: "Executive counsel",
    fr: "Conseil exécutif",
  },
  "home.advisory4.desc": {
    en: "Trusted counsel to leaders navigating high-consequence decisions under pressure.",
    fr: "Conseil de confiance pour les dirigeants confrontés à des décisions à fortes conséquences sous pression.",
  },

  // Closing call to action on the homepage.
  "home.cta.heading": { en: "Begin a conversation.", fr: "Engager une conversation." },
  "home.cta.intro": {
    en: "Tell me what your organization is navigating. I will respond with a thoughtful next step.",
    fr: "Dites-moi ce que votre organisation traverse. Je répondrai avec une prochaine étape réfléchie.",
  },

  // About page. This is the new substantive page that consolidates Philosophy,
  // Approach, and Foundation into four clearly defined sections.
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.hero": {
    en: "Governance leadership shaped by federal service, enterprise risk, and the discipline of consequential decisions.",
    fr: "Un leadership de gouvernance forgé par le service fédéral, le risque d'entreprise et la discipline des décisions conséquentes.",
  },

  // Section 1: Background and Leadership Perspective.
  "about.bg.eyebrow": { en: "Background & Leadership Perspective", fr: "Parcours et perspective de leadership" },
  "about.bg.heading": {
    en: "The lens that informs the work.",
    fr: "Le regard qui éclaire le travail.",
  },
  "about.bg.p1": {
    en: "Donald Daglo is a governance-minded executive whose leadership perspective is shaped by U.S. Air Force service, federal data and security leadership, and the founding of Lumeva LLC, an advisory and government contracting firm operating at the intersection of enterprise risk, governance architecture, and cybersecurity.",
    fr: "Donald Daglo est un dirigeant orienté gouvernance dont la perspective de leadership est forgée par le service dans l'U.S. Air Force, le leadership fédéral en matière de données et de sécurité, et la fondation de Lumeva LLC, un cabinet de conseil et de contrats gouvernementaux opérant à l'intersection du risque d'entreprise, de l'architecture de gouvernance et de la cybersécurité.",
  },
  "about.bg.p2": {
    en: "Military service shaped how I think about risk appetite, command judgment, and the discipline of operating with incomplete information. Federal leadership added the depth of stewarding mission-critical data and security in high-consequence environments. That perspective informs how I work with boards and executives on enterprise risk, governance structures, and the question that defines every executive conversation: where is the organization placing trust, and is that trust still warranted?",
    fr: "Le service militaire a façonné ma façon de penser l'appétit pour le risque, le jugement de commandement et la discipline d'opérer avec une information incomplète. Le leadership fédéral a ajouté la profondeur de la gestion de données et de la sécurité essentielles à la mission dans des environnements à fortes conséquences. Cette perspective éclaire la façon dont je travaille avec les conseils et les dirigeants sur le risque d'entreprise, les structures de gouvernance et la question qui définit chaque conversation exécutive : où l'organisation place-t-elle sa confiance, et cette confiance est-elle toujours justifiée ?",
  },
  "about.bg.p3": {
    en: "What I bring to boards and senior leadership is the combination of practitioner depth and governance judgment. The technical understanding of how enterprises actually fail, paired with the executive perspective on how governance must be designed to hold under stress. That combination is rare, and it is the foundation of every advisory conversation I take on.",
    fr: "Ce que j'apporte aux conseils et à la direction générale, c'est la combinaison de la profondeur du praticien et du jugement de gouvernance. La compréhension technique de la façon dont les entreprises échouent réellement, associée à la perspective exécutive sur la façon dont la gouvernance doit être conçue pour tenir sous la pression. Cette combinaison est rare, et c'est le fondement de chaque conversation consultative que j'accepte.",
  },

  // Section 2: Governance Thesis (formerly Philosophy).
  "about.thesis.eyebrow": { en: "Governance Thesis", fr: "Thèse de gouvernance" },
  "about.thesis.heading": {
    en: "Governance is not paperwork.",
    fr: "La gouvernance n'est pas de la paperasse.",
  },
  "about.thesis.lead": {
    en: "Governance is the discipline of seeing reality clearly, making decisions under pressure, and deciding where an organization is willing to place Trust.",
    fr: "La gouvernance est la discipline de voir la réalité clairement, de prendre des décisions sous pression et de décider où une organisation accepte de placer sa Confiance.",
  },
  "about.thesis.intro": {
    en: "This is not a metaphor. It is the actual work of governance at the board level and the executive level in environments where compliance frameworks were designed for a slower, more predictable world. The organizations that survive contested terrain are the ones that understand governance, risk, and leadership as a single operating system rather than three separate functions.",
    fr: "Ce n'est pas une métaphore. C'est le travail réel de la gouvernance au niveau du conseil et au niveau exécutif dans des environnements où les cadres de conformité ont été conçus pour un monde plus lent et plus prévisible. Les organisations qui survivent en terrain contesté sont celles qui comprennent la gouvernance, le risque et le leadership comme un système d'exploitation unique plutôt que comme trois fonctions distinctes.",
  },
  "about.thesis.p1.eyebrow": { en: "First Principle", fr: "Premier principe" },
  "about.thesis.p1.heading": { en: "One operating system.", fr: "Un système d'exploitation unifié." },
  "about.thesis.p1.body1": {
    en: "Most boards treat governance, risk, and leadership as separate functions. They are not. They form a unified operating system in which every decision about trust cascades throughout the enterprise.",
    fr: "La plupart des conseils traitent la gouvernance, le risque et le leadership comme des fonctions distinctes. Ils ne le sont pas. Ils forment un système d'exploitation unifié dans lequel chaque décision sur la confiance se propage à travers l'entreprise.",
  },
  "about.thesis.p1.body2": {
    en: "When a board approves a vendor relationship, that decision is simultaneously a governance act, a risk act, and a leadership act. Treating these as separate workstreams creates seams where exposure accumulates. The work is to design the organization so the three move together.",
    fr: "Lorsqu'un conseil approuve une relation avec un fournisseur, cette décision est simultanément un acte de gouvernance, un acte de risque et un acte de leadership. Les traiter comme des flux de travail distincts crée des coutures où l'exposition s'accumule. Le travail consiste à concevoir l'organisation pour que les trois avancent ensemble.",
  },
  "about.thesis.p1.quote": {
    en: "Why are we implicitly trusting something we have not verified?",
    fr: "Pourquoi accordons-nous implicitement notre confiance à quelque chose que nous n'avons pas vérifié ?",
  },
  "about.thesis.p1.body3": {
    en: "This question shifts boardroom focus from compliance to proactive risk verification. It engages leaders to identify vulnerabilities and ensure trust is grounded only in proven reality, not inherited assumptions. The strongest boards make this question a standing item on the agenda rather than an exception triggered by incidents.",
    fr: "Cette question déplace l'attention du conseil de la conformité vers la vérification proactive du risque. Elle engage les dirigeants à identifier les vulnérabilités et à s'assurer que la confiance est fondée uniquement sur une réalité prouvée, et non sur des hypothèses héritées. Les conseils les plus solides font de cette question un point permanent à l'ordre du jour plutôt qu'une exception déclenchée par les incidents.",
  },
  "about.thesis.p2.eyebrow": { en: "Second Principle", fr: "Deuxième principe" },
  "about.thesis.p2.heading": {
    en: "Risk no longer moves linearly.",
    fr: "Le risque ne se déplace plus de manière linéaire.",
  },
  "about.thesis.p2.body1": {
    en: "Cyber incidents become supply chain disruptions become regulatory disclosures become market confidence crises in the same week. In contested environments, geography, logistics, data, cyber, and adversary intent are all part of the same battlespace.",
    fr: "Les incidents cyber deviennent des perturbations de la chaîne d'approvisionnement, qui deviennent des divulgations réglementaires, qui deviennent des crises de confiance des marchés, le tout dans la même semaine. Dans les environnements contestés, la géographie, la logistique, les données, le cyber et l'intention de l'adversaire font tous partie du même espace de bataille.",
  },
  "about.thesis.p2.body2": {
    en: "Boards that still process risk as a quarterly review cycle are operating on a clock that no longer matches the speed of events. The work is to build governance machinery that can see, decide, and act inside the timeframe of the actual environment.",
    fr: "Les conseils qui traitent encore le risque comme un cycle de révision trimestriel fonctionnent sur une horloge qui ne correspond plus à la vitesse des événements. Le travail consiste à construire une machinerie de gouvernance capable de voir, décider et agir dans le délai de l'environnement réel.",
  },
  "about.thesis.p3.eyebrow": { en: "Closing Principle", fr: "Principe de conclusion" },
  "about.thesis.p3.heading": {
    en: "Trust is not a control. Verification is.",
    fr: "La Confiance n'est pas un contrôle. La vérification, si.",
  },
  "about.thesis.p3.body1": {
    en: "Compliance frameworks ask whether the right policies exist. Governance asks whether the policies actually hold under pressure. Those are different questions and they produce different organizations.",
    fr: "Les cadres de conformité demandent si les bonnes politiques existent. La gouvernance demande si les politiques tiennent réellement sous pression. Ce sont des questions différentes et elles produisent des organisations différentes.",
  },
  "about.thesis.p3.body2": {
    en: "The enterprises that survive contested terrain are not the ones with the most comprehensive policy library. They are the ones whose leaders have built the discipline to verify rather than assume, to see rather than report, and to act inside the timing of the environment rather than the timing of the calendar.",
    fr: "Les entreprises qui survivent en terrain contesté ne sont pas celles qui ont la bibliothèque de politiques la plus complète. Ce sont celles dont les dirigeants ont bâti la discipline de vérifier plutôt que de supposer, de voir plutôt que de rapporter, et d'agir dans le rythme de l'environnement plutôt que dans celui du calendrier.",
  },

  // Section 3: How I Think About Enterprise Risk (formerly Approach / GEOINT).
  "about.risk.eyebrow": { en: "How I Think About Enterprise Risk", fr: "Comment je pense au risque d'entreprise" },
  "about.risk.heading": {
    en: "Enterprise risk as contested terrain.",
    fr: "Le risque d'entreprise comme terrain contesté.",
  },
  "about.risk.p1": {
    en: "Traditional governance is backward-looking. Boards receive sanitized reports after risk has already matured, see compliance dashboards and red-yellow-green charts, but often miss the actual terrain the organization is operating in.",
    fr: "La gouvernance traditionnelle regarde en arrière. Les conseils reçoivent des rapports filtrés après que le risque a déjà mûri, voient des tableaux de bord de conformité et des graphiques rouge-jaune-vert, mais manquent souvent le terrain réel sur lequel opère l'organisation.",
  },
  "about.risk.p2": {
    en: "I think about risk the way a geospatial intelligence analyst thinks about contested terrain. You must understand the movement, timing, life pattern, dependencies, chokepoints, and the adversary's likely path.",
    fr: "Je pense au risque comme un analyste de renseignement géospatial pense à un terrain contesté. Il faut comprendre le mouvement, le rythme, le schéma d'activité, les dépendances, les points de passage critiques et la trajectoire probable de l'adversaire.",
  },
  "about.risk.p3": {
    en: "In enterprise terms, that means understanding how data flows, where access is overextended, where third-party exposure exists, where geopolitical instability affects the mission, and where a single failure could cascade across the organization.",
    fr: "En termes d'entreprise, cela signifie comprendre comment les données circulent, où les accès sont trop étendus, où existe l'exposition aux tiers, où l'instabilité géopolitique affecte la mission, et où une seule défaillance pourrait se propager à travers toute l'organisation.",
  },
  "about.risk.boards.eyebrow": { en: "What Boards Must See", fr: "Ce que les conseils doivent voir" },
  "about.risk.boards.heading": { en: "The board should know.", fr: "Le conseil devrait savoir." },
  "about.risk.boards.intro": {
    en: "Four questions that should be standing items on the governance agenda, not exceptions triggered by incidents.",
    fr: "Quatre questions qui devraient être des points permanents à l'ordre du jour de la gouvernance, et non des exceptions déclenchées par les incidents.",
  },
  "about.risk.t1.label": { en: "Movement", fr: "Mouvement" },
  "about.risk.t1.title": { en: "What assets matter most", fr: "Quels actifs comptent le plus" },
  "about.risk.t1.body": {
    en: "Not every asset is equally valuable to the mission. Real governance requires clarity about which assets carry the most weight and where the loss of any one would create a disproportionate impact.",
    fr: "Tous les actifs n'ont pas la même valeur pour la mission. La véritable gouvernance exige de la clarté sur les actifs qui pèsent le plus et sur ceux dont la perte créerait un impact disproportionné.",
  },
  "about.risk.t2.label": { en: "Dependencies", fr: "Dépendances" },
  "about.risk.t2.title": { en: "Who can reach them", fr: "Qui peut y accéder" },
  "about.risk.t2.body": {
    en: "Access maps reveal trust assumptions. The organizations that have mapped their actual access patterns rather than their policy intentions are the ones prepared for contested operations.",
    fr: "Les cartographies d'accès révèlent les hypothèses de confiance. Les organisations qui ont cartographié leurs schémas d'accès réels plutôt que leurs intentions de politique sont celles qui sont préparées aux opérations contestées.",
  },
  "about.risk.t3.label": { en: "Conditions", fr: "Conditions" },
  "about.risk.t3.title": { en: "Under what conditions", fr: "Dans quelles conditions" },
  "about.risk.t3.body": {
    en: "Access that is acceptable under normal operations may be unacceptable under stress. The governance work is to design access that holds under the actual conditions the organization will face.",
    fr: "Un accès acceptable en opérations normales peut être inacceptable sous pression. Le travail de gouvernance consiste à concevoir des accès qui tiennent dans les conditions réelles auxquelles l'organisation sera confrontée.",
  },
  "about.risk.t4.label": { en: "Cascade", fr: "Cascade" },
  "about.risk.t4.title": {
    en: "What happens if assumptions fail",
    fr: "Que se passe-t-il si les hypothèses échouent",
  },
  "about.risk.t4.body": {
    en: "Every governance structure rests on assumptions. The question is whether the board has explicitly identified those assumptions and stress-tested what happens when each one fails.",
    fr: "Chaque structure de gouvernance repose sur des hypothèses. La question est de savoir si le conseil a explicitement identifié ces hypothèses et testé sous contrainte ce qui se passe lorsque chacune échoue.",
  },
  "about.risk.zt.eyebrow": { en: "Zero Trust as Governance", fr: "Zero Trust comme gouvernance" },
  "about.risk.zt.heading": {
    en: "Beyond the cybersecurity framework.",
    fr: "Au-delà du cadre de cybersécurité.",
  },
  "about.risk.zt.p1": {
    en: "Zero Trust is not just a cybersecurity framework; it is a governance philosophy that applies verification and trust principles across all enterprise functions, including board decisions and risk management.",
    fr: "Le Zero Trust n'est pas seulement un cadre de cybersécurité ; c'est une philosophie de gouvernance qui applique les principes de vérification et de confiance à toutes les fonctions de l'entreprise, y compris les décisions du conseil et la gestion du risque.",
  },
  "about.risk.zt.p2": {
    en: "The cybersecurity industry has adopted Zero Trust as a technical architecture. That work matters. But the deeper opportunity is to apply the same discipline at the board level, where decisions about partnerships, vendors, geographies, and strategic exposure benefit from the same rigor of never assume, always verify.",
    fr: "L'industrie de la cybersécurité a adopté le Zero Trust comme architecture technique. Ce travail importe. Mais l'opportunité plus profonde est d'appliquer la même discipline au niveau du conseil, où les décisions sur les partenariats, les fournisseurs, les zones géographiques et l'exposition stratégique bénéficient de la même rigueur : ne jamais supposer, toujours vérifier.",
  },

  // Section 4: Frameworks and Credentials (formerly Foundation).
  "about.cred.eyebrow": { en: "Frameworks & Credentials", fr: "Cadres et qualifications" },
  "about.cred.heading": {
    en: "Built for board-level judgment.",
    fr: "Conçu pour le jugement au niveau du conseil.",
  },
  "about.cred.intro": {
    en: "The frameworks below reflect a disciplined approach to helping leaders make decisions under complexity, uncertainty, and operational pressure. Each one shapes how I approach governance, risk, and the work of strategic counsel.",
    fr: "Les cadres ci-dessous reflètent une approche disciplinée pour aider les dirigeants à prendre des décisions dans la complexité, l'incertitude et la pression opérationnelle. Chacun façonne mon approche de la gouvernance, du risque et du travail de conseil stratégique.",
  },
  "about.cred1.name": {
    en: "COSO Enterprise Risk Management",
    fr: "COSO Gestion du risque d'entreprise",
  },
  "about.cred1.ctx": {
    en: "Enterprise risk discipline grounded in strategy, performance, governance, and organizational resilience.",
    fr: "Discipline de risque d'entreprise ancrée dans la stratégie, la performance, la gouvernance et la résilience organisationnelle.",
  },
  "about.cred2.name": {
    en: "National Association of Corporate Directors",
    fr: "National Association of Corporate Directors",
  },
  "about.cred2.ctx": {
    en: "Director credentials through the National Association of Corporate Directors.",
    fr: "Qualifications d'administrateur via la National Association of Corporate Directors.",
  },
  "about.cred3.name": {
    en: "Columbia University & INSEAD",
    fr: "Columbia University et INSEAD",
  },
  "about.cred3.ctx": {
    en: "Graduate and executive education spanning enterprise risk management, strategy, leadership, and enterprise-level decision-making.",
    fr: "Formation supérieure et exécutive couvrant la gestion du risque d'entreprise, la stratégie, le leadership et la prise de décision au niveau de l'entreprise.",
  },
  "about.cred4.name": {
    en: "Forrester Zero Trust Strategist",
    fr: "Forrester Zero Trust Strategist",
  },
  "about.cred4.ctx": {
    en: "Zero Trust strategy applied beyond technical architecture to governance, data, vendors, access, and enterprise risk.",
    fr: "Stratégie Zero Trust appliquée au-delà de l'architecture technique à la gouvernance, aux données, aux fournisseurs, aux accès et au risque d'entreprise.",
  },
  "about.cred5.name": {
    en: "Fellow of Information Privacy",
    fr: "Fellow of Information Privacy",
  },
  "about.cred5.ctx": {
    en: "Privacy and information governance expertise supporting responsible data use, regulatory awareness, and trust-based leadership.",
    fr: "Expertise en protection de la vie privée et en gouvernance de l'information soutenant un usage responsable des données, une conscience réglementaire et un leadership fondé sur la confiance.",
  },
  "about.cred.closing": {
    en: "Together, these frameworks support a governance perspective built for boards, executives, and organizations navigating enterprise risk, cyber resilience, data governance, regulatory complexity, and strategic uncertainty across both public and private-sector environments.",
    fr: "Ensemble, ces cadres soutiennent une perspective de gouvernance conçue pour les conseils, les dirigeants et les organisations qui composent avec le risque d'entreprise, la cyber-résilience, la gouvernance des données, la complexité réglementaire et l'incertitude stratégique dans les environnements des secteurs public et privé.",
  },

  // Advisory Work page. Renamed from Engagement with executive counsel language.
  "advisory.eyebrow": { en: "Advisory Work", fr: "Travail consultatif" },
  "advisory.hero": {
    en: "How I work with boards, executives, and leadership teams.",
    fr: "Comment je travaille avec les conseils, les dirigeants et les équipes de direction.",
  },
  "advisory.intro.eyebrow": { en: "Approach to the Work", fr: "Approche du travail" },
  "advisory.intro.heading": {
    en: "Selective advisory work. Strategic counsel.",
    fr: "Travail consultatif sélectif. Conseil stratégique.",
  },
  "advisory.intro.p1": {
    en: "I take on a limited number of advisory engagements at any given time. The work is focused on boards, executives, and leadership teams navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can keep pace with.",
    fr: "J'accepte un nombre limité de mandats consultatifs à tout moment. Le travail est axé sur les conseils d'administration, les dirigeants et les équipes de direction confrontés à la complexité, à des actifs de grande valeur, à des données sensibles et à des risques qui évoluent plus vite que les modèles de gouvernance traditionnels.",
  },
  "advisory.intro.p2": {
    en: "This is not retainer-based consulting designed to maximize hours. It is strategic counsel designed to support governance dialogue, board judgment, and high-consequence decisions in moments when judgment matters most. Engagements are scoped, confidential, and structured around clear deliverables.",
    fr: "Ce n'est pas du conseil sous forme de provision conçu pour maximiser les heures. C'est un conseil stratégique conçu pour soutenir le dialogue de gouvernance, le jugement du conseil et les décisions à fortes conséquences aux moments où le jugement compte le plus. Les mandats sont cadrés, confidentiels et structurés autour de livrables clairs.",
  },
  "advisory.types.eyebrow": { en: "Four Areas of Work", fr: "Quatre domaines de travail" },
  "advisory.types.heading": { en: "How I engage.", fr: "Comment j'interviens." },
  "advisory.t1.title": { en: "Board governance advisory", fr: "Conseil en gouvernance d'entreprise" },
  "advisory.t1.desc": {
    en: "Strategic governance dialogue with boards and committees navigating contested environments. Moving the conversation from compliance to risk verification, from reporting to judgment. Preparing directors for environments where traditional governance models cannot keep pace. Sessions are designed to develop board perspective, not to add another layer of reporting.",
    fr: "Dialogue stratégique de gouvernance avec les conseils et comités évoluant dans des environnements contestés. Faire passer la conversation de la conformité à la vérification du risque, du reporting au jugement. Préparer les administrateurs aux environnements où les modèles de gouvernance traditionnels ne suffisent plus. Les séances sont conçues pour développer la perspective du conseil, et non pour ajouter une couche supplémentaire de reporting.",
  },
  "advisory.t2.title": { en: "Enterprise risk strategy", fr: "Stratégie de risque d'entreprise" },
  "advisory.t2.desc": {
    en: "Designing governance structures that see risk clearly before it matures. Working with executive teams to move organizations from compliance leadership to strategic leadership, where risk thinking informs how the enterprise actually operates rather than how it reports. Building resilience into operations rather than adding it after incidents.",
    fr: "Concevoir des structures de gouvernance qui voient clairement le risque avant qu'il ne mûrisse. Travailler avec les équipes de direction pour faire passer les organisations d'un leadership de conformité à un leadership stratégique, où la pensée du risque informe le fonctionnement réel de l'entreprise plutôt que la façon dont elle rend compte. Intégrer la résilience aux opérations plutôt que de l'ajouter après les incidents.",
  },
  "advisory.t3.title": { en: "Governance architecture", fr: "Architecture de gouvernance" },
  "advisory.t3.desc": {
    en: "AI governance, data governance, and emerging technology risk frameworks. Building governance architecture for territories where the old models do not apply. The work addresses how to govern technologies that change faster than policies can be drafted, with structures that hold under the pressure of actual use.",
    fr: "Gouvernance de l'IA, gouvernance des données et cadres de risque des technologies émergentes. Construire une architecture de gouvernance pour des territoires où les anciens modèles ne s'appliquent pas. Le travail traite de la manière de gouverner des technologies qui changent plus vite que les politiques ne peuvent être rédigées, avec des structures qui tiennent sous la pression de l'usage réel.",
  },
  "advisory.t4.title": { en: "Executive counsel", fr: "Conseil exécutif" },
  "advisory.t4.desc": {
    en: "Trusted counsel for senior leaders navigating high-consequence decisions under pressure and incomplete information. Working alongside executives in the moments where the consequences of a single decision can cascade across the organization. Cyber risk, data risk, third-party exposure, geopolitical disruption, and the kinds of strategic questions that benefit from an outside perspective grounded in governance discipline.",
    fr: "Conseil de confiance pour les hauts dirigeants confrontés à des décisions à fortes conséquences sous pression et avec une information incomplète. Travailler aux côtés des dirigeants dans les moments où les conséquences d'une seule décision peuvent se propager à travers toute l'organisation. Risque cyber, risque sur les données, exposition aux tiers, perturbation géopolitique et les types de questions stratégiques qui bénéficient d'une perspective extérieure ancrée dans la discipline de gouvernance.",
  },
  "advisory.commit.eyebrow": { en: "Operating Discipline", fr: "Discipline opérationnelle" },
  "advisory.commit.heading": {
    en: "Four commitments that govern the work.",
    fr: "Quatre engagements qui régissent le travail.",
  },
  "advisory.commit.intro": {
    en: "Every engagement is subject to four standing commitments. These hold whether the conversation is about board governance, enterprise risk, AI strategy, or data exposure in contested environments.",
    fr: "Chaque mandat est soumis à quatre engagements permanents. Ceux-ci tiennent que la conversation porte sur la gouvernance du conseil, le risque d'entreprise, la stratégie d'IA ou l'exposition des données en environnements contestés.",
  },
  "advisory.c1.name": { en: "Never assume", fr: "Ne jamais supposer" },
  "advisory.c1.statement": {
    en: "Governance should challenge inherited assumptions before the environment does.",
    fr: "La gouvernance devrait remettre en question les hypothèses héritées avant que l'environnement ne le fasse.",
  },
  "advisory.c1.expansion": {
    en: "Every governance structure rests on assumptions that were true when the organization was smaller, slower, or less exposed. The board's work is to surface those assumptions while they can still be revised in a meeting, not after a crisis has revised them.",
    fr: "Chaque structure de gouvernance repose sur des hypothèses qui étaient vraies lorsque l'organisation était plus petite, plus lente ou moins exposée. Le travail du conseil consiste à faire émerger ces hypothèses pendant qu'elles peuvent encore être révisées en réunion, et non après qu'une crise les ait révisées.",
  },
  "advisory.c2.name": { en: "Verify what matters", fr: "Vérifier ce qui compte" },
  "advisory.c2.statement": {
    en: "Trust is not a control. Verification is.",
    fr: "La Confiance n'est pas un contrôle. La vérification, si.",
  },
  "advisory.c2.expansion": {
    en: "A policy is not a control. A check that is actually performed is a control. The discipline is to know the difference and to build the organization around what actually holds under stress, rather than what is documented to hold in the audit binder.",
    fr: "Une politique n'est pas un contrôle. Une vérification réellement effectuée est un contrôle. La discipline consiste à connaître la différence et à construire l'organisation autour de ce qui tient réellement sous pression, plutôt que de ce qui est documenté comme tenant dans le classeur d'audit.",
  },
  "advisory.c3.name": { en: "Reduce hidden exposure", fr: "Réduire l'exposition cachée" },
  "advisory.c3.statement": {
    en: "Implicit Trust should be surfaced, tested, and converted into deliberate decisions.",
    fr: "La Confiance implicite doit être mise au jour, testée et convertie en décisions délibérées.",
  },
  "advisory.c3.expansion": {
    en: "Every implicit trust relationship across data, vendors, geographies, and partnerships exposes the organization without its knowing. The work is to convert those relationships into explicit decisions that the board has actually made.",
    fr: "Chaque relation de confiance implicite à travers les données, les fournisseurs, les zones géographiques et les partenariats expose l'organisation sans qu'elle le sache. Le travail consiste à convertir ces relations en décisions explicites que le conseil a réellement prises.",
  },
  "advisory.c4.name": { en: "Make risk visible", fr: "Rendre le risque visible" },
  "advisory.c4.statement": {
    en: "Boards cannot govern what they cannot see.",
    fr: "Les conseils ne peuvent pas gouverner ce qu'ils ne voient pas.",
  },
  "advisory.c4.expansion": {
    en: "Most boards cannot see what actually matters. The work is to build the visibility machinery that enables governance to act on actual conditions rather than reported ones. Visibility is treated as critical infrastructure, not as a reporting function.",
    fr: "La plupart des conseils ne peuvent pas voir ce qui compte réellement. Le travail consiste à construire la machinerie de visibilité qui permet à la gouvernance d'agir sur les conditions réelles plutôt que sur celles qui sont rapportées. La visibilité est traitée comme une infrastructure critique, et non comme une fonction de reporting.",
  },
  "advisory.cta.heading": { en: "Begin a conversation.", fr: "Engager une conversation." },
  "advisory.cta.intro": {
    en: "Tell me what your organization is navigating. I will respond with a thoughtful next step.",
    fr: "Dites-moi ce que votre organisation traverse. Je répondrai avec une prochaine étape réfléchie.",
  },
  "advisory.cta.link": { en: "How Engagements Begin", fr: "Comment commencent les mandats" },

  // Insights page repositioned as Donald's governance writing and strategic thinking.
  "insights.eyebrow": { en: "Insights", fr: "Perspectives" },
  "insights.hero": {
    en: "Governance writing and strategic thinking.",
    fr: "Écrits de gouvernance et réflexion stratégique.",
  },
  "insights.intro.eyebrow": {
    en: "A Three-Part Executive Series",
    fr: "Une série exécutive en trois parties",
  },
  "insights.intro.heading": {
    en: "On governance, cyber risk, data, and security in a contested world.",
    fr: "Sur la gouvernance, le risque cyber, les données et la sécurité dans un monde contesté.",
  },
  "insights.intro.body": {
    en: "These essays examine the decisions leaders must make as Trust erodes, data becomes the true center of gravity, and global competition reshapes the security environment. They are written for boards, executives, security leaders, and policymakers who need to govern in the face of uncertainty.",
    fr: "Ces essais examinent les décisions que les dirigeants doivent prendre alors que la Confiance s'érode, que les données deviennent le véritable centre de gravité et que la concurrence mondiale redessine l'environnement de sécurité. Ils sont écrits pour les conseils, les dirigeants, les responsables de la sécurité et les décideurs publics qui doivent gouverner face à l'incertitude.",
  },
  "insights.pipeline.eyebrow": { en: "The Pipeline", fr: "En préparation" },
  "insights.pipeline.heading": {
    en: "Three briefings in development.",
    fr: "Trois briefings en préparation.",
  },
  "insights.a1.label": {
    en: "Zero Trust / Cyber Strategy",
    fr: "Zero Trust / Stratégie cyber",
  },
  "insights.a1.title": {
    en: "The Castle Has Fallen: Why Trust is the most dangerous word in cybersecurity.",
    fr: "Le château est tombé : pourquoi la Confiance est le mot le plus dangereux en cybersécurité.",
  },
  "insights.a1.desc": {
    en: "The old perimeter model is gone. This article argues that Trust has become one of the most dangerous assumptions in cybersecurity and that Zero Trust is no longer just a technical framework. It is a leadership mandate.",
    fr: "L'ancien modèle de périmètre n'existe plus. Cet article soutient que la Confiance est devenue l'une des hypothèses les plus dangereuses en cybersécurité et que le Zero Trust n'est plus seulement un cadre technique. C'est un mandat de leadership.",
  },
  "insights.a1.status": { en: "Coming soon", fr: "Bientôt disponible" },
  "insights.a2.label": {
    en: "Data Governance / Enterprise Risk",
    fr: "Gouvernance des données / Risque d'entreprise",
  },
  "insights.a2.title": {
    en: "Data is the New Fuel: Why protecting data is the only security strategy that matters.",
    fr: "Les données sont le nouveau carburant : pourquoi protéger les données est la seule stratégie de sécurité qui compte.",
  },
  "insights.a2.desc": {
    en: "Data is now the real attack surface. This article explores why protecting systems is no longer enough, and why boards must treat data governance, access, classification, and visibility as a core enterprise strategy.",
    fr: "Les données constituent désormais la véritable surface d'attaque. Cet article explore pourquoi protéger les systèmes ne suffit plus, et pourquoi les conseils doivent traiter la gouvernance, l'accès, la classification et la visibilité des données comme une stratégie centrale d'entreprise.",
  },
  "insights.a2.status": { en: "Forthcoming", fr: "À venir" },
  "insights.a3.label": {
    en: "Geopolitics / National Security",
    fr: "Géopolitique / Sécurité nationale",
  },
  "insights.a3.title": {
    en: "The Digital Frontline: Security in a connected, contested world.",
    fr: "La ligne de front numérique : la sécurité dans un monde connecté et contesté.",
  },
  "insights.a3.desc": {
    en: "Security is no longer confined to networks, borders, or organizations. This article connects cyber risk, geopolitical instability, African security dynamics, and the global threat landscape into one strategic picture.",
    fr: "La sécurité n'est plus confinée aux réseaux, aux frontières ou aux organisations. Cet article relie le risque cyber, l'instabilité géopolitique, les dynamiques de sécurité africaines et le paysage mondial des menaces en une seule vision stratégique.",
  },
  "insights.a3.status": { en: "Forthcoming", fr: "À venir" },
  "insights.closing": {
    en: "The future of governance will belong to leaders who can connect cyber risk, data, geopolitical pressure, and operational execution into one picture.",
    fr: "L'avenir de la gouvernance appartiendra aux dirigeants capables de relier le risque cyber, les données, la pression géopolitique et l'exécution opérationnelle en une seule vision.",
  },
  "insights.follow.eyebrow": { en: "Follow the Writing", fr: "Suivre les publications" },
  "insights.follow.heading": {
    en: "New briefings are announced on LinkedIn.",
    fr: "Les nouveaux briefings sont annoncés sur LinkedIn.",
  },
  "insights.follow.body": {
    en: "To receive notifications as each article in the series publishes, connect on LinkedIn.",
    fr: "Pour recevoir des notifications à la parution de chaque article de la série, connectez-vous sur LinkedIn.",
  },
  "insights.follow.cta": { en: "Connect on LinkedIn", fr: "Se connecter sur LinkedIn" },

  // Contact page. The form and arc of engagement remain functional.
  "contact.eyebrow": { en: "Contact", fr: "Contact" },
  "contact.hero": { en: "Begin a conversation.", fr: "Engager une conversation." },
  "contact.begin.eyebrow": { en: "How We Begin", fr: "Comment nous commençons" },
  "contact.begin.heading": {
    en: "Conversations begin with an email.",
    fr: "Les conversations commencent par un courriel.",
  },
  "contact.begin.p1": {
    en: "I take on a limited number of advisory engagements at any given time. The work is focused on boards, executives, and leadership teams navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can keep pace with.",
    fr: "J'accepte un nombre limité de mandats consultatifs à tout moment. Le travail est axé sur les conseils d'administration, les dirigeants et les équipes de direction confrontés à la complexité, à des actifs de grande valeur, à des données sensibles et à des risques qui évoluent plus vite que les modèles de gouvernance traditionnels.",
  },
  "contact.begin.p2": {
    en: "If you are navigating a governance question that the standard frameworks do not address, write to me. I will respond with a thoughtful next step.",
    fr: "Si vous traversez une question de gouvernance que les cadres standards ne traitent pas, écrivez-moi. Je répondrai avec une prochaine étape réfléchie.",
  },
  "contact.form.eyebrow": { en: "Send a Message", fr: "Envoyer un message" },
  "contact.form.heading": { en: "Write to me directly.", fr: "Écrivez-moi directement." },
  "contact.form.name": { en: "Name", fr: "Nom" },
  "contact.form.name.placeholder": { en: "Your full name", fr: "Votre nom complet" },
  "contact.form.email": { en: "Email", fr: "Courriel" },
  "contact.form.email.placeholder": { en: "your.email@example.com", fr: "votre.courriel@exemple.com" },
  "contact.form.message": { en: "Message", fr: "Message" },
  "contact.form.message.placeholder": {
    en: "Tell me what you are navigating",
    fr: "Dites-moi ce que vous traversez",
  },
  "contact.form.submit": { en: "Submit", fr: "Envoyer" },
  "contact.form.submitting": { en: "Sending...", fr: "Envoi en cours..." },
  "contact.form.success": {
    en: "Thank you. Your message has been received. I will respond personally with a thoughtful next step.",
    fr: "Merci. Votre message a été reçu. Je répondrai personnellement avec une prochaine étape réfléchie.",
  },
  "contact.form.error": {
    en: "There was an error sending your message. Please try again or email donald@daglo.co directly.",
    fr: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou écrire directement à donald@daglo.co.",
  },
  "contact.form.required": { en: "Required", fr: "Obligatoire" },
  "contact.arc.eyebrow": { en: "What to Expect", fr: "À quoi s'attendre" },
  "contact.arc.heading": { en: "The arc of an engagement.", fr: "L'arc d'un mandat." },
  "contact.arc.intro": {
    en: "Every engagement follows a deliberate three-stage arc designed to ensure both sides are aligned before substantive work begins.",
    fr: "Chaque mandat suit un arc délibéré en trois étapes conçu pour s'assurer que les deux parties sont alignées avant que le travail substantiel ne commence.",
  },
  "contact.s1.title": { en: "Initial response", fr: "Réponse initiale" },
  "contact.s1.desc": {
    en: "I respond personally to every inquiry. The first message acknowledges what you have written and proposes how to continue without automated intake forms or sales pipelines.",
    fr: "Je réponds personnellement à chaque demande. Le premier message accuse réception de ce que vous avez écrit et propose comment poursuivre sans formulaires d'admission automatisés ni pipelines commerciaux.",
  },
  "contact.s2.title": { en: "Exploratory conversation", fr: "Conversation exploratoire" },
  "contact.s2.desc": {
    en: "If the situation appears to be a fit, we schedule a conversation to understand what your organization is navigating. The conversation is exploratory. No engagement is presumed.",
    fr: "Si la situation semble correspondre, nous planifions une conversation pour comprendre ce que votre organisation traverse. La conversation est exploratoire. Aucun mandat n'est présumé.",
  },
  "contact.s3.title": { en: "Scoped proposal", fr: "Proposition cadrée" },
  "contact.s3.desc": {
    en: "When the work makes sense for both sides, I propose a scoped engagement with clear deliverables and a defined arc. Engagements are designed to develop board judgment, not to accumulate billable hours.",
    fr: "Lorsque le travail a du sens pour les deux parties, je propose un mandat cadré avec des livrables clairs et un arc défini. Les mandats sont conçus pour développer le jugement du conseil, et non pour accumuler des heures facturables.",
  },
  "contact.paths.eyebrow": { en: "Connect", fr: "Se connecter" },
  "contact.paths.heading": { en: "Two paths forward.", fr: "Deux voies à suivre." },
  "contact.paths.email.label": { en: "Direct Email", fr: "Courriel direct" },
  "contact.paths.email.desc": {
    en: "For governance inquiries and engagement discussions.",
    fr: "Pour les demandes de gouvernance et les discussions de mandat.",
  },
  "contact.paths.li.label": { en: "Professional Network", fr: "Réseau professionnel" },
  "contact.paths.li.link": { en: "Connect on LinkedIn", fr: "Se connecter sur LinkedIn" },
  "contact.paths.li.desc": {
    en: "For ongoing thinking on governance, risk, and leadership.",
    fr: "Pour une réflexion continue sur la gouvernance, le risque et le leadership.",
  },

  // Footer.
  "footer.pillars": {
    en: "Governance · Risk · Leadership",
    fr: "Gouvernance · Risque · Leadership",
  },
  "footer.tagline": {
    en: "Counsel for the decisions that define you.",
    fr: "Conseil pour les décisions qui vous définissent.",
  },
  "footer.copyright": {
    en: "© 2026 Daglo & Co. All rights reserved.",
    fr: "© 2026 Daglo & Co. Tous droits réservés.",
  },

  // Newsletter.
  "newsletter.eyebrow": { en: "Field Notes Newsletter", fr: "Bulletin Notes de terrain" },
  "newsletter.heading": {
    en: "Receive each article when it publishes.",
    fr: "Recevez chaque article dès sa parution.",
  },
  "newsletter.intro": {
    en: "Sign up to receive forthcoming articles by email, along with occasional updates. I do not share email addresses and I do not send marketing.",
    fr: "Inscrivez-vous pour recevoir les articles à venir par courriel, ainsi que des mises à jour occasionnelles. Je ne partage pas les adresses courriel et n'envoie pas de contenu marketing.",
  },
  "newsletter.email.placeholder": { en: "your.email@example.com", fr: "votre.courriel@exemple.com" },
  "newsletter.consent": {
    en: "I would like to receive articles and occasional updates by email.",
    fr: "Je souhaite recevoir les articles et les mises à jour occasionnelles par courriel.",
  },
  "newsletter.submit": { en: "Subscribe", fr: "S'abonner" },
  "newsletter.submitting": { en: "Subscribing...", fr: "Abonnement en cours..." },
  "newsletter.success": {
    en: "Thank you. Your subscription has been received. You will hear from me when the first article publishes.",
    fr: "Merci. Votre abonnement a été reçu. Vous aurez de mes nouvelles à la parution du premier article.",
  },
  "newsletter.error": {
    en: "There was an error processing your subscription. Please try again.",
    fr: "Une erreur s'est produite lors du traitement de votre abonnement. Veuillez réessayer.",
  },

  // Accessibility panel.
  "a11y.title": { en: "Accessibility Adjustments", fr: "Réglages d'accessibilité" },
  "a11y.subtitle": { en: "Customize your reading experience.", fr: "Personnalisez votre expérience de lecture." },
  "a11y.language": { en: "Language", fr: "Langue" },
  "a11y.english": { en: "English", fr: "Anglais" },
  "a11y.french": { en: "French", fr: "Français" },
  "a11y.content": { en: "Content", fr: "Contenu" },
  "a11y.fontsize": { en: "Font Size", fr: "Taille de police" },
  "a11y.lineheight": { en: "Line Height", fr: "Hauteur de ligne" },
  "a11y.default": { en: "Default", fr: "Par défaut" },
  "a11y.readable": { en: "Readable Font", fr: "Police lisible" },
  "a11y.color": { en: "Color", fr: "Couleur" },
  "a11y.highcontrast": { en: "High Contrast", fr: "Contraste élevé" },
  "a11y.monochrome": { en: "Monochrome", fr: "Monochrome" },
  "a11y.reset": { en: "Reset Settings", fr: "Réinitialiser" },
  "a11y.close": { en: "Close", fr: "Fermer" },
  "a11y.open": { en: "Open accessibility panel", fr: "Ouvrir le panneau d'accessibilité" },
  "a11y.theme": { en: "Theme & Display", fr: "Thème et affichage" },
  "a11y.align": { en: "Align Text", fr: "Aligner le texte" },
  "a11y.alignleft": { en: "Left Align", fr: "Aligner à gauche" },
  "a11y.aligncenter": { en: "Center Align", fr: "Centrer" },
  "a11y.fontweight": { en: "Font Weight", fr: "Graisse de police" },
  "a11y.bigcursor": { en: "Big Cursor", fr: "Grand curseur" },
  "a11y.lightcontrast": { en: "Light Contrast", fr: "Contraste clair" },
  "a11y.dark": { en: "Dark Mode", fr: "Mode sombre" },
  "a11y.letterspacing": { en: "Letter Spacing", fr: "Espacement des lettres" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("daglo-language");
      if (saved === "en" || saved === "fr") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Silent fallback.
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("daglo-language", lang);
    } catch {
      // Silent fallback.
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
