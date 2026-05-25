// LanguageContext.tsx
//
// The language context provides English and French translations for the entire site.
//
// This context wraps the entire application and exposes two values: the current language
// and a function to change it. When the language changes, every component that uses the
// translation function rerenders with the new language. The user's preference is saved
// to localStorage so it persists across page loads and across visits to the site.
//
// The translation strings are organized by page so the structure mirrors how the content
// is laid out in the actual application. Each string has both an English version and a
// French version. The French translations use established French business and governance
// vocabulary that French-speaking executives in France, Quebec, Belgium, and West Africa
// would recognize as professional rather than as machine-translated.

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// The Language type ensures that only the two supported language codes can be used.
type Language = "en" | "fr";

// The LanguageContextType describes the shape of the context value that gets exposed
// to components. The t function is the translation function that components call to get
// the right string for the current language.
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// The translations object is the source of truth for every translatable string on the
// site. Each key holds an object with en and fr versions. This structure makes it easy
// to add new strings later: define the key, provide both translations, and reference the
// key wherever the string appears in the components.
const translations: Record<string, { en: string; fr: string }> = {
  // Navigation labels appear in the header and footer of every page.
  "nav.philosophy": { en: "Philosophy", fr: "Philosophie" },
  "nav.approach": { en: "Approach", fr: "Approche" },
  "nav.engagement": { en: "Engagement", fr: "Engagement" },
  "nav.foundation": { en: "Foundation", fr: "Fondation" },
  "nav.insights": { en: "Insights", fr: "Perspectives" },
  "nav.contact": { en: "Contact", fr: "Contact" },

  // Homepage hero and primary copy.
  "home.eyebrow": { en: "Daglo & Co.", fr: "Daglo & Co." },
  "home.hero.line1": { en: "The castle has", fr: "Le château est" },
  "home.hero.line2": { en: "already fallen.", fr: "déjà tombé." },
  "home.hero.tagline": {
    en: "Counsel for the decisions that define you.",
    fr: "Conseil pour les décisions qui vous définissent.",
  },
  "home.hero.subtext": {
    en: "Build the enterprise that can see, verify, adapt, and survive in contested terrain.",
    fr: "Bâtir l'entreprise qui peut voir, vérifier, s'adapter et survivre en terrain contesté.",
  },
  "home.hero.cta": { en: "Begin", fr: "Commencer" },

  "home.intro.eyebrow": { en: "An Advisory Practice", fr: "Un cabinet de conseil" },
  "home.intro.heading": {
    en: "Governance is not paperwork.",
    fr: "La gouvernance n'est pas de la paperasse.",
  },
  "home.intro.body": {
    en: "Governance is the discipline of seeing reality clearly, making decisions under pressure, and deciding where an organization is willing to place trust. Daglo and Co. provides counsel to boards and executives navigating that responsibility in environments where the old governance models can no longer keep up.",
    fr: "La gouvernance est la discipline de voir la réalité clairement, de prendre des décisions sous pression et de décider où une organisation accepte de placer sa confiance. Daglo and Co. accompagne les conseils d'administration et les dirigeants qui assument cette responsabilité dans des environnements où les anciens modèles de gouvernance ne suffisent plus.",
  },

  "home.pillars.eyebrow": { en: "The Four Pillars", fr: "Les quatre piliers" },
  "home.pillars.heading": {
    en: "One operating system.",
    fr: "Un système d'exploitation unifié.",
  },
  "home.pillars.intro": {
    en: "Most boards treat governance, risk, and leadership as separate functions. They are not. They form a unified operating system where every decision about trust cascades through the enterprise.",
    fr: "La plupart des conseils traitent la gouvernance, le risque et le leadership comme des fonctions distinctes. Ils ne le sont pas. Ils forment un système d'exploitation unifié où chaque décision sur la confiance se propage à travers l'entreprise.",
  },

  "home.pillar1.title": { en: "See clearly", fr: "Voir clairement" },
  "home.pillar1.desc": {
    en: "Boards receive sanitized reports after risk has already matured. Real governance begins with seeing the terrain as it is, not as it was. The discipline of clear-eyed observation is what distinguishes governance from reporting.",
    fr: "Les conseils reçoivent des rapports filtrés après que le risque a déjà mûri. La véritable gouvernance commence par voir le terrain tel qu'il est, et non tel qu'il était. La discipline de l'observation lucide est ce qui distingue la gouvernance du simple reporting.",
  },
  "home.pillar2.title": { en: "Verify trust", fr: "Vérifier la confiance" },
  "home.pillar2.desc": {
    en: "Where are we implicitly trusting something we have not verified? The answer determines where the next failure will originate. Every implicit trust relationship is an exposure surface until it has been examined and made explicit.",
    fr: "Où accordons-nous implicitement notre confiance à quelque chose que nous n'avons pas vérifié ? La réponse détermine d'où viendra le prochain échec. Chaque relation de confiance implicite est une surface d'exposition tant qu'elle n'a pas été examinée et rendue explicite.",
  },
  "home.pillar3.title": { en: "Adapt under pressure", fr: "S'adapter sous pression" },
  "home.pillar3.desc": {
    en: "Risk no longer moves linearly. Cyber incidents become supply chain disruptions become market confidence crises in the same week. Governance machinery must operate at the speed of the actual environment, not the speed of the calendar.",
    fr: "Le risque ne se déplace plus de manière linéaire. Les incidents cyber deviennent des perturbations de chaîne d'approvisionnement qui deviennent des crises de confiance des marchés dans la même semaine. La machinerie de gouvernance doit fonctionner à la vitesse de l'environnement réel, et non à celle du calendrier.",
  },
  "home.pillar4.title": {
    en: "Survive contested terrain",
    fr: "Survivre en terrain contesté",
  },
  "home.pillar4.desc": {
    en: "Governance must hold under stress, not collapse to compliance theater. The enterprise must be built to function when assumptions fail. Resilience is engineered into the structure rather than added through emergency measures.",
    fr: "La gouvernance doit tenir sous la pression, et non s'effondrer en théâtre de conformité. L'entreprise doit être construite pour fonctionner lorsque les hypothèses échouent. La résilience est intégrée à la structure plutôt qu'ajoutée par des mesures d'urgence.",
  },

  "home.approach.eyebrow": { en: "The Approach", fr: "L'approche" },
  "home.approach.heading": {
    en: "Enterprise risk as terrain.",
    fr: "Le risque d'entreprise comme terrain.",
  },
  "home.approach.p1": {
    en: "I think about risk the way a geospatial intelligence analyst thinks about contested terrain. You must understand the movement, the timing, the pattern of life, the dependencies, the chokepoints, and the adversary's likely path.",
    fr: "Je pense au risque comme un analyste de renseignement géospatial pense à un terrain contesté. Il faut comprendre le mouvement, le rythme, le schéma d'activité, les dépendances, les points de passage critiques et la trajectoire probable de l'adversaire.",
  },
  "home.approach.p2": {
    en: "In enterprise terms, that means understanding how data flows, where access is overextended, where third-party exposure exists, and where a single failure could cascade across the organization.",
    fr: "En termes d'entreprise, cela signifie comprendre comment les données circulent, où les accès sont trop étendus, où existe l'exposition aux tiers, et où une seule défaillance pourrait se propager à travers toute l'organisation.",
  },
  "home.approach.cta": { en: "Read the Approach", fr: "Lire l'approche" },

  "home.engage.eyebrow": { en: "How We Engage", fr: "Comment nous intervenons" },
  "home.engage.heading": {
    en: "Limited engagements. Considered counsel.",
    fr: "Mandats limités. Conseil réfléchi.",
  },
  "home.engage.intro": {
    en: "We work with a limited number of boards and executives navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can handle.",
    fr: "Nous travaillons avec un nombre limité de conseils et de dirigeants confrontés à la complexité, à des actifs de grande valeur, à des données sensibles et à des risques qui évoluent plus vite que ne peuvent le gérer les modèles de gouvernance traditionnels.",
  },
  "home.engage.cta": { en: "How Engagements Work", fr: "Comment se déroulent les mandats" },

  "home.engage1.title": { en: "Board governance advisory", fr: "Conseil en gouvernance d'entreprise" },
  "home.engage1.desc": {
    en: "Helping boards and committees understand the terrain they operate in.",
    fr: "Aider les conseils et comités à comprendre le terrain sur lequel ils opèrent.",
  },
  "home.engage2.title": { en: "Enterprise risk strategy", fr: "Stratégie de risque d'entreprise" },
  "home.engage2.desc": {
    en: "Designing governance structures that see risk clearly before it matures.",
    fr: "Concevoir des structures de gouvernance qui voient clairement le risque avant qu'il ne mûrisse.",
  },
  "home.engage3.title": { en: "Governance architecture", fr: "Architecture de gouvernance" },
  "home.engage3.desc": {
    en: "AI governance, data governance, and emerging technology risk frameworks.",
    fr: "Gouvernance de l'IA, gouvernance des données et cadres de risque des technologies émergentes.",
  },
  "home.engage4.title": { en: "Executive counsel", fr: "Conseil exécutif" },
  "home.engage4.desc": {
    en: "Strategic counsel for leaders navigating decisions under pressure.",
    fr: "Conseil stratégique pour les dirigeants qui prennent des décisions sous pression.",
  },

  "home.cta.heading": { en: "Begin a conversation.", fr: "Engager une conversation." },
  "home.cta.intro": {
    en: "Tell us what you are navigating. We will respond with a thoughtful next step.",
    fr: "Dites-nous ce que vous traversez. Nous répondrons avec une prochaine étape réfléchie.",
  },

  // Philosophy page translations.
  "philosophy.eyebrow": { en: "Philosophy", fr: "Philosophie" },
  "philosophy.hero": {
    en: "Governance is not paperwork.",
    fr: "La gouvernance n'est pas de la paperasse.",
  },
  "philosophy.lead": {
    en: "Governance is the discipline of seeing reality clearly, making decisions under pressure, and deciding where an organization is willing to place trust.",
    fr: "La gouvernance est la discipline de voir la réalité clairement, de prendre des décisions sous pression et de décider où une organisation accepte de placer sa confiance.",
  },
  "philosophy.intro": {
    en: "This is not a metaphor. It is the actual work of governance at the board level and the executive level in environments where compliance frameworks were designed for a slower, more predictable world. The organizations that survive contested terrain are the ones that understand governance, risk, and leadership as a single operating system rather than three separate functions.",
    fr: "Ce n'est pas une métaphore. C'est le travail réel de la gouvernance au niveau du conseil et au niveau exécutif dans des environnements où les cadres de conformité ont été conçus pour un monde plus lent et plus prévisible. Les organisations qui survivent en terrain contesté sont celles qui comprennent la gouvernance, le risque et le leadership comme un système d'exploitation unique plutôt que comme trois fonctions distinctes.",
  },
  "philosophy.p1.eyebrow": { en: "First Principle", fr: "Premier principe" },
  "philosophy.p1.heading": { en: "One operating system.", fr: "Un système d'exploitation unifié." },
  "philosophy.p1.body1": {
    en: "Most boards treat governance, risk, and leadership as separate functions. They are not. They form a unified operating system where every decision about trust cascades through the enterprise.",
    fr: "La plupart des conseils traitent la gouvernance, le risque et le leadership comme des fonctions distinctes. Ils ne le sont pas. Ils forment un système d'exploitation unifié où chaque décision sur la confiance se propage à travers l'entreprise.",
  },
  "philosophy.p1.body2": {
    en: "When a board approves a vendor relationship, that decision is simultaneously a governance act, a risk act, and a leadership act. Treating these as separate workstreams creates seams where exposure accumulates. The work is to design the organization so the three move together.",
    fr: "Lorsqu'un conseil approuve une relation avec un fournisseur, cette décision est simultanément un acte de gouvernance, un acte de risque et un acte de leadership. Les traiter comme des flux de travail distincts crée des coutures où l'exposition s'accumule. Le travail consiste à concevoir l'organisation pour que les trois avancent ensemble.",
  },
  "philosophy.p1.quote": {
    en: "Where are we implicitly trusting something we have not verified?",
    fr: "Où accordons-nous implicitement notre confiance à quelque chose que nous n'avons pas vérifié ?",
  },
  "philosophy.p1.body3": {
    en: "This question shifts boardroom focus from compliance to proactive risk verification. It engages leaders to identify vulnerabilities and ensure trust is grounded only in proven reality, not inherited assumptions. The strongest boards make this question a standing item on the agenda rather than an exception triggered by incidents.",
    fr: "Cette question déplace l'attention du conseil de la conformité vers la vérification proactive du risque. Elle engage les dirigeants à identifier les vulnérabilités et à s'assurer que la confiance est fondée uniquement sur une réalité prouvée, et non sur des hypothèses héritées. Les conseils les plus solides font de cette question un point permanent à l'ordre du jour plutôt qu'une exception déclenchée par les incidents.",
  },

  "philosophy.p2.eyebrow": { en: "Second Principle", fr: "Deuxième principe" },
  "philosophy.p2.heading": {
    en: "Risk no longer moves linearly.",
    fr: "Le risque ne se déplace plus de manière linéaire.",
  },
  "philosophy.p2.body1": {
    en: "Cyber incidents become supply chain disruptions become regulatory disclosures become market confidence crises in the same week. In contested environments, geography, logistics, data, cyber, and adversary intent are all part of the same battlespace.",
    fr: "Les incidents cyber deviennent des perturbations de la chaîne d'approvisionnement, qui deviennent des divulgations réglementaires, qui deviennent des crises de confiance des marchés, le tout dans la même semaine. Dans les environnements contestés, la géographie, la logistique, les données, le cyber et l'intention de l'adversaire font tous partie du même espace de bataille.",
  },
  "philosophy.p2.body2": {
    en: "Boards that still process risk as a quarterly review cycle are operating on a clock that no longer matches the speed of events. The work is to build governance machinery that can see, decide, and act inside the timeframe of the actual environment.",
    fr: "Les conseils qui traitent encore le risque comme un cycle de révision trimestriel fonctionnent sur une horloge qui ne correspond plus à la vitesse des événements. Le travail consiste à construire une machinerie de gouvernance capable de voir, décider et agir dans le délai de l'environnement réel.",
  },

  "philosophy.p3.eyebrow": { en: "Closing Principle", fr: "Principe de conclusion" },
  "philosophy.p3.heading": {
    en: "Trust is not a control. Verification is.",
    fr: "La confiance n'est pas un contrôle. La vérification, si.",
  },
  "philosophy.p3.body1": {
    en: "Compliance frameworks ask whether the right policies exist. Governance asks whether the policies actually hold under pressure. Those are different questions and they produce different organizations.",
    fr: "Les cadres de conformité demandent si les bonnes politiques existent. La gouvernance demande si les politiques tiennent réellement sous pression. Ce sont des questions différentes et elles produisent des organisations différentes.",
  },
  "philosophy.p3.body2": {
    en: "The enterprises that survive contested terrain are not the ones with the most comprehensive policy library. They are the ones whose leaders have built the discipline to verify rather than assume, to see rather than report, and to act inside the timing of the environment rather than the timing of the calendar.",
    fr: "Les entreprises qui survivent en terrain contesté ne sont pas celles qui ont la bibliothèque de politiques la plus complète. Ce sont celles dont les dirigeants ont bâti la discipline de vérifier plutôt que de supposer, de voir plutôt que de rapporter, et d'agir dans le rythme de l'environnement plutôt que dans celui du calendrier.",
  },
  "philosophy.p3.cta": { en: "Read the Approach", fr: "Lire l'approche" },

  // Approach page.
  "approach.eyebrow": { en: "Approach", fr: "Approche" },
  "approach.hero": {
    en: "Understanding the terrain.",
    fr: "Comprendre le terrain.",
  },
  "approach.geo.eyebrow": { en: "A GEOINT Perspective", fr: "Une perspective GEOINT" },
  "approach.geo.heading": {
    en: "Enterprise risk as contested terrain.",
    fr: "Le risque d'entreprise comme terrain contesté.",
  },
  "approach.geo.p1": {
    en: "Traditional governance is backward-looking. Boards receive sanitized reports after risk has already matured, see compliance dashboards and red-yellow-green charts, but often miss the actual terrain the organization is operating in.",
    fr: "La gouvernance traditionnelle regarde en arrière. Les conseils reçoivent des rapports filtrés après que le risque a déjà mûri, voient des tableaux de bord de conformité et des graphiques rouge-jaune-vert, mais manquent souvent le terrain réel sur lequel opère l'organisation.",
  },
  "approach.geo.p2": {
    en: "I think about risk the way a geospatial intelligence analyst thinks about contested terrain. You must understand the movement, the timing, the pattern of life, the dependencies, the chokepoints, and the adversary's likely path.",
    fr: "Je pense au risque comme un analyste de renseignement géospatial pense à un terrain contesté. Il faut comprendre le mouvement, le rythme, le schéma d'activité, les dépendances, les points de passage critiques et la trajectoire probable de l'adversaire.",
  },
  "approach.geo.p3": {
    en: "In enterprise terms, that means understanding how data flows, where access is overextended, where third-party exposure exists, where geopolitical instability affects the mission, and where a single failure could cascade across the organization.",
    fr: "En termes d'entreprise, cela signifie comprendre comment les données circulent, où les accès sont trop étendus, où existe l'exposition aux tiers, où l'instabilité géopolitique affecte la mission, et où une seule défaillance pourrait se propager à travers toute l'organisation.",
  },

  "approach.boards.eyebrow": { en: "What Boards Must See", fr: "Ce que les conseils doivent voir" },
  "approach.boards.heading": { en: "The board should know.", fr: "Le conseil devrait savoir." },
  "approach.boards.intro": {
    en: "Four questions that should be standing items on the governance agenda, not exceptions triggered by incidents.",
    fr: "Quatre questions qui devraient être des points permanents à l'ordre du jour de la gouvernance, et non des exceptions déclenchées par les incidents.",
  },
  "approach.terrain1.label": { en: "Movement", fr: "Mouvement" },
  "approach.terrain1.title": { en: "What assets matter most", fr: "Quels actifs comptent le plus" },
  "approach.terrain1.body": {
    en: "Not every asset is equally valuable to the mission. Real governance requires clarity about which assets carry the most weight and where the loss of any one would create disproportionate impact.",
    fr: "Tous les actifs n'ont pas la même valeur pour la mission. La véritable gouvernance exige de la clarté sur les actifs qui pèsent le plus et sur ceux dont la perte créerait un impact disproportionné.",
  },
  "approach.terrain2.label": { en: "Dependencies", fr: "Dépendances" },
  "approach.terrain2.title": { en: "Who can reach them", fr: "Qui peut y accéder" },
  "approach.terrain2.body": {
    en: "Access maps reveal trust assumptions. The organizations that have mapped their actual access patterns rather than their policy intentions are the ones prepared for contested operations.",
    fr: "Les cartographies d'accès révèlent les hypothèses de confiance. Les organisations qui ont cartographié leurs schémas d'accès réels plutôt que leurs intentions de politique sont celles qui sont préparées aux opérations contestées.",
  },
  "approach.terrain3.label": { en: "Conditions", fr: "Conditions" },
  "approach.terrain3.title": { en: "Under what conditions", fr: "Dans quelles conditions" },
  "approach.terrain3.body": {
    en: "Access that is acceptable under normal operations may be unacceptable under stress. The governance work is to design access that holds under the actual conditions the organization will face.",
    fr: "Un accès acceptable en opérations normales peut être inacceptable sous pression. Le travail de gouvernance consiste à concevoir des accès qui tiennent dans les conditions réelles auxquelles l'organisation sera confrontée.",
  },
  "approach.terrain4.label": { en: "Cascade", fr: "Cascade" },
  "approach.terrain4.title": {
    en: "What happens if assumptions fail",
    fr: "Que se passe-t-il si les hypothèses échouent",
  },
  "approach.terrain4.body": {
    en: "Every governance structure rests on assumptions. The question is whether the board has explicitly identified those assumptions and stress-tested what happens when each one fails.",
    fr: "Chaque structure de gouvernance repose sur des hypothèses. La question est de savoir si le conseil a explicitement identifié ces hypothèses et testé sous contrainte ce qui se passe lorsque chacune échoue.",
  },

  "approach.zt.eyebrow": { en: "Zero Trust as Governance", fr: "Zero Trust comme gouvernance" },
  "approach.zt.heading": {
    en: "Beyond the cybersecurity framework.",
    fr: "Au-delà du cadre de cybersécurité.",
  },
  "approach.zt.p1": {
    en: "Zero Trust is not a technology decision. It is a governance philosophy. A way of thinking about trust, verification, and assumptions at every level of the enterprise.",
    fr: "Le Zero Trust n'est pas une décision technologique. C'est une philosophie de gouvernance. Une façon de penser la confiance, la vérification et les hypothèses à chaque niveau de l'entreprise.",
  },
  "approach.zt.p2": {
    en: "The cybersecurity industry has adopted Zero Trust as a technical architecture. That work matters. But the deeper opportunity is to apply the same discipline at the board level, where decisions about partnerships, vendors, geographies, and strategic exposure benefit from the same rigor of never assume, always verify.",
    fr: "L'industrie de la cybersécurité a adopté le Zero Trust comme architecture technique. Ce travail importe. Mais l'opportunité plus profonde est d'appliquer la même discipline au niveau du conseil, où les décisions sur les partenariats, les fournisseurs, les zones géographiques et l'exposition stratégique bénéficient de la même rigueur : ne jamais supposer, toujours vérifier.",
  },

  "approach.commit.eyebrow": { en: "Operating Discipline", fr: "Discipline opérationnelle" },
  "approach.commit.heading": {
    en: "Four commitments that govern the work.",
    fr: "Quatre engagements qui régissent le travail.",
  },
  "approach.commit.intro": {
    en: "Every engagement operates against four standing commitments. These hold whether the conversation is about board governance, enterprise risk, AI strategy, or data exposure in contested environments.",
    fr: "Chaque mandat s'appuie sur quatre engagements permanents. Ceux-ci tiennent que la conversation porte sur la gouvernance du conseil, le risque d'entreprise, la stratégie d'IA ou l'exposition des données en environnements contestés.",
  },

  "approach.c1.name": { en: "Never assume", fr: "Ne jamais supposer" },
  "approach.c1.statement": {
    en: "Governance should challenge inherited assumptions before the environment does.",
    fr: "La gouvernance devrait remettre en question les hypothèses héritées avant que l'environnement ne le fasse.",
  },
  "approach.c1.expansion": {
    en: "Every governance structure rests on assumptions that were true when the organization was smaller, slower, or less exposed. The work of the board is to surface those assumptions while they can still be revised in a meeting, not after they have been revised by a crisis.",
    fr: "Chaque structure de gouvernance repose sur des hypothèses qui étaient vraies lorsque l'organisation était plus petite, plus lente ou moins exposée. Le travail du conseil consiste à faire émerger ces hypothèses pendant qu'elles peuvent encore être révisées en réunion, et non après qu'elles aient été révisées par une crise.",
  },
  "approach.c2.name": { en: "Verify what matters", fr: "Vérifier ce qui compte" },
  "approach.c2.statement": {
    en: "Trust is not a control. Verification is.",
    fr: "La confiance n'est pas un contrôle. La vérification, si.",
  },
  "approach.c2.expansion": {
    en: "A policy is not a control. A check that is actually performed is a control. The discipline is to know the difference and to build the organization around what actually holds under stress, rather than what is documented to hold in the audit binder.",
    fr: "Une politique n'est pas un contrôle. Une vérification réellement effectuée est un contrôle. La discipline consiste à connaître la différence et à construire l'organisation autour de ce qui tient réellement sous pression, plutôt que de ce qui est documenté comme tenant dans le classeur d'audit.",
  },
  "approach.c3.name": { en: "Reduce hidden exposure", fr: "Réduire l'exposition cachée" },
  "approach.c3.statement": {
    en: "Implicit trust should be surfaced, tested, and converted into deliberate decisions.",
    fr: "La confiance implicite doit être mise au jour, testée et convertie en décisions délibérées.",
  },
  "approach.c3.expansion": {
    en: "Every implicit trust relationship across data, vendors, geographies, and partnerships is a place where the organization is exposed without knowing it. The work is to convert those relationships into explicit decisions the board has actually made.",
    fr: "Chaque relation de confiance implicite à travers les données, les fournisseurs, les zones géographiques et les partenariats est un endroit où l'organisation est exposée sans le savoir. Le travail consiste à convertir ces relations en décisions explicites que le conseil a réellement prises.",
  },
  "approach.c4.name": { en: "Make risk visible", fr: "Rendre le risque visible" },
  "approach.c4.statement": {
    en: "Boards cannot govern what they cannot see.",
    fr: "Les conseils ne peuvent pas gouverner ce qu'ils ne voient pas.",
  },
  "approach.c4.expansion": {
    en: "Most boards cannot see what actually matters. The work is to build the visibility machinery that lets governance act on actual conditions rather than reported conditions. Visibility is treated as critical infrastructure, not as a reporting function.",
    fr: "La plupart des conseils ne peuvent pas voir ce qui compte réellement. Le travail consiste à construire la machinerie de visibilité qui permet à la gouvernance d'agir sur les conditions réelles plutôt que sur les conditions rapportées. La visibilité est traitée comme une infrastructure critique, et non comme une fonction de reporting.",
  },
  "approach.commit.cta": { en: "How Engagements Work", fr: "Comment se déroulent les mandats" },

  // Engagement page.
  "engagement.eyebrow": { en: "Engagement", fr: "Engagement" },
  "engagement.hero": { en: "How we engage.", fr: "Comment nous intervenons." },
  "engagement.intro.eyebrow": { en: "Approach to Clients", fr: "Approche client" },
  "engagement.intro.heading": {
    en: "Limited engagements. Considered counsel.",
    fr: "Mandats limités. Conseil réfléchi.",
  },
  "engagement.intro.p1": {
    en: "Daglo and Co. takes on a limited number of engagements at any given time. We work with boards and executives navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can handle.",
    fr: "Daglo and Co. accepte un nombre limité de mandats à tout moment. Nous travaillons avec des conseils et des dirigeants confrontés à la complexité, à des actifs de grande valeur, à des données sensibles et à des risques qui évoluent plus vite que ne peuvent le gérer les modèles de gouvernance traditionnels.",
  },
  "engagement.intro.p2": {
    en: "The work is not a retainer model designed to maximize hours. It is a counsel model designed to maximize judgment in the moments where judgment matters most. Engagements are scoped to address specific governance challenges with clear deliverables and a defined arc.",
    fr: "Le travail n'est pas un modèle de provision conçu pour maximiser les heures. C'est un modèle de conseil conçu pour maximiser le jugement aux moments où le jugement compte le plus. Les mandats sont cadrés pour traiter des défis de gouvernance spécifiques avec des livrables clairs et un arc défini.",
  },

  "engagement.types.eyebrow": { en: "Four Engagement Types", fr: "Quatre types de mandat" },
  "engagement.types.heading": { en: "How we work.", fr: "Comment nous travaillons." },

  "engagement.t1.title": { en: "Board governance advisory", fr: "Conseil en gouvernance d'entreprise" },
  "engagement.t1.desc": {
    en: "Helping boards and committees understand the terrain they actually operate in. Moving the conversation from compliance questions to strategic risk verification. Preparing directors for contested environments where the old governance models cannot keep up. Sessions are designed to develop board judgment, not to add another layer of reporting.",
    fr: "Aider les conseils et comités à comprendre le terrain sur lequel ils opèrent réellement. Faire passer la conversation des questions de conformité à la vérification stratégique du risque. Préparer les administrateurs aux environnements contestés où les anciens modèles de gouvernance ne suffisent plus. Les séances sont conçues pour développer le jugement du conseil, et non pour ajouter une couche supplémentaire de reporting.",
  },
  "engagement.t2.title": { en: "Enterprise risk strategy", fr: "Stratégie de risque d'entreprise" },
  "engagement.t2.desc": {
    en: "Designing governance structures that see risk clearly before it matures. Moving organizations from compliance leadership to strategic leadership, where risk thinking informs how the enterprise actually operates rather than how it reports. Building resilience into operations rather than bolting it on after incidents.",
    fr: "Concevoir des structures de gouvernance qui voient clairement le risque avant qu'il ne mûrisse. Faire passer les organisations d'un leadership de conformité à un leadership stratégique, où la pensée du risque informe le fonctionnement réel de l'entreprise plutôt que la façon dont elle rend compte. Intégrer la résilience aux opérations plutôt que de la rajouter après les incidents.",
  },
  "engagement.t3.title": { en: "Governance architecture", fr: "Architecture de gouvernance" },
  "engagement.t3.desc": {
    en: "AI governance, data governance, and emerging technology risk frameworks. Building governance frameworks for territories where the old models do not apply. The work addresses how to govern technologies that change faster than policies can be drafted, with structures that hold under the pressure of actual use.",
    fr: "Gouvernance de l'IA, gouvernance des données et cadres de risque des technologies émergentes. Construire des cadres de gouvernance pour des territoires où les anciens modèles ne s'appliquent pas. Le travail traite de la manière de gouverner des technologies qui changent plus vite que les politiques ne peuvent être rédigées, avec des structures qui tiennent sous la pression de l'usage réel.",
  },
  "engagement.t4.title": { en: "Executive counsel", fr: "Conseil exécutif" },
  "engagement.t4.desc": {
    en: "Cyber risk, data risk, third-party exposure, geopolitical disruption. Strategic counsel for leaders navigating decisions under pressure and incomplete information. Working alongside executives in the moments where the consequences of a single decision can cascade across the organization.",
    fr: "Risque cyber, risque sur les données, exposition aux tiers, perturbation géopolitique. Conseil stratégique pour les dirigeants qui prennent des décisions sous pression et avec une information incomplète. Travailler aux côtés des dirigeants dans les moments où les conséquences d'une seule décision peuvent se propager à travers toute l'organisation.",
  },

  "engagement.cta.heading": { en: "Begin a conversation.", fr: "Engager une conversation." },
  "engagement.cta.intro": {
    en: "Tell us what you are navigating. We will respond with a thoughtful next step.",
    fr: "Dites-nous ce que vous traversez. Nous répondrons avec une prochaine étape réfléchie.",
  },
  "engagement.cta.link": { en: "How Engagements Begin", fr: "Comment commencent les mandats" },

  // Foundation page.
  "foundation.eyebrow": { en: "Foundation", fr: "Fondation" },
  "foundation.hero": {
    en: "Background and credentials.",
    fr: "Parcours et qualifications.",
  },
  "foundation.bg.eyebrow": { en: "Background", fr: "Parcours" },
  "foundation.bg.heading": {
    en: "The lens that informs the work.",
    fr: "Le regard qui éclaire le travail.",
  },
  "foundation.bg.veteran": { en: "U.S. Air Force veteran.", fr: "Vétéran de l'U.S. Air Force." },
  "foundation.bg.p1rest": {
    en: " Founder of Lumeva LLC, an advisory and government contracting firm working at the intersection of enterprise risk, governance architecture, and cybersecurity. Practitioner depth in Zero Trust strategy, data governance, internal control, and decision-making under uncertainty.",
    fr: " Fondateur de Lumeva LLC, un cabinet de conseil et de contrats gouvernementaux travaillant à l'intersection du risque d'entreprise, de l'architecture de gouvernance et de la cybersécurité. Expertise de praticien en stratégie Zero Trust, gouvernance des données, contrôle interne et prise de décision dans l'incertitude.",
  },
  "foundation.bg.p2": {
    en: "Military service shaped how I think about risk appetite, command judgment, and the discipline of operating with incomplete information. That perspective informs how I work with boards on enterprise risk management, governance structures, and the question that defines every executive conversation: where is the organization placing trust, and is that trust still warranted?",
    fr: "Le service militaire a façonné ma façon de penser l'appétit pour le risque, le jugement de commandement et la discipline d'opérer avec une information incomplète. Cette perspective éclaire la façon dont je travaille avec les conseils sur la gestion du risque d'entreprise, les structures de gouvernance et la question qui définit chaque conversation exécutive : où l'organisation place-t-elle sa confiance, et cette confiance est-elle toujours justifiée ?",
  },

  "foundation.cred.eyebrow": { en: "Foundation of Practice", fr: "Fondation de la pratique" },
  "foundation.cred.heading": {
    en: "Built for board-level judgment.",
    fr: "Conçue pour le jugement au niveau du conseil.",
  },
  "foundation.cred.intro": {
    en: "Daglo and Co. is built on a foundation of enterprise risk, governance, cyber resilience, data protection, and board-level judgment. The credentials below reflect a disciplined approach to helping leaders make decisions under complexity, uncertainty, and operational pressure.",
    fr: "Daglo and Co. repose sur une fondation de risque d'entreprise, de gouvernance, de cyber-résilience, de protection des données et de jugement au niveau du conseil. Les qualifications ci-dessous reflètent une approche disciplinée pour aider les dirigeants à prendre des décisions dans la complexité, l'incertitude et la pression opérationnelle.",
  },
  "foundation.c1.name": {
    en: "COSO Enterprise Risk Management",
    fr: "COSO Gestion du risque d'entreprise",
  },
  "foundation.c1.ctx": {
    en: "Enterprise risk discipline grounded in strategy, performance, governance, and organizational resilience.",
    fr: "Discipline de risque d'entreprise ancrée dans la stratégie, la performance, la gouvernance et la résilience organisationnelle.",
  },
  "foundation.c2.name": {
    en: "National Association of Corporate Directors",
    fr: "National Association of Corporate Directors",
  },
  "foundation.c2.ctx": {
    en: "Director credentials through the National Association of Corporate Directors.",
    fr: "Qualifications d'administrateur via la National Association of Corporate Directors.",
  },
  "foundation.c3.name": {
    en: "INSEAD Executive Education",
    fr: "INSEAD Formation des cadres",
  },
  "foundation.c3.ctx": {
    en: "Global executive education supporting strategy, leadership, and enterprise-level decision-making.",
    fr: "Formation exécutive internationale couvrant la stratégie, le leadership et la prise de décision au niveau de l'entreprise.",
  },
  "foundation.c4.name": {
    en: "Forrester Zero Trust Strategist",
    fr: "Forrester Zero Trust Strategist",
  },
  "foundation.c4.ctx": {
    en: "Zero Trust strategy applied beyond technical architecture to governance, data, vendors, access, and enterprise risk.",
    fr: "Stratégie Zero Trust appliquée au-delà de l'architecture technique à la gouvernance, aux données, aux fournisseurs, aux accès et au risque d'entreprise.",
  },
  "foundation.c5.name": {
    en: "Fellow of Information Privacy",
    fr: "Fellow of Information Privacy",
  },
  "foundation.c5.ctx": {
    en: "Privacy and information governance expertise supporting responsible data use, regulatory awareness, and trust-based leadership.",
    fr: "Expertise en protection de la vie privée et en gouvernance de l'information soutenant un usage responsable des données, une conscience réglementaire et un leadership fondé sur la confiance.",
  },
  "foundation.cred.closing": {
    en: "Together, these credentials support a practice built for boards, executives, and organizations navigating enterprise risk, cyber resilience, data governance, regulatory complexity, and strategic uncertainty across both public and private-sector environments.",
    fr: "Ensemble, ces qualifications soutiennent une pratique conçue pour les conseils, les dirigeants et les organisations qui composent avec le risque d'entreprise, la cyber-résilience, la gouvernance des données, la complexité réglementaire et l'incertitude stratégique dans les environnements des secteurs public et privé.",
  },

  // Insights page.
  "insights.eyebrow": { en: "Forthcoming", fr: "À venir" },
  "insights.hero": { en: "Field notes.", fr: "Notes de terrain." },
  "insights.intro.eyebrow": {
    en: "A Three-Part Executive Series",
    fr: "Une série exécutive en trois parties",
  },
  "insights.intro.heading": {
    en: "On governance, cyber risk, data, and security in a contested world.",
    fr: "Sur la gouvernance, le risque cyber, les données et la sécurité dans un monde contesté.",
  },
  "insights.intro.body": {
    en: "These essays examine the decisions leaders must make as trust erodes, data becomes the true center of gravity, and global competition reshapes the security environment. They are written for boards, executives, security leaders, and policymakers who need to govern through uncertainty.",
    fr: "Ces essais examinent les décisions que les dirigeants doivent prendre alors que la confiance s'érode, que les données deviennent le véritable centre de gravité et que la concurrence mondiale redessine l'environnement de sécurité. Ils sont écrits pour les conseils, les dirigeants, les responsables de la sécurité et les décideurs publics qui doivent gouverner à travers l'incertitude.",
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
    en: "The Castle Has Fallen: Why trust is the most dangerous word in cybersecurity.",
    fr: "Le château est tombé : pourquoi la confiance est le mot le plus dangereux en cybersécurité.",
  },
  "insights.a1.desc": {
    en: "The old perimeter model is gone. This article argues that trust has become one of the most dangerous assumptions in cybersecurity, and that Zero Trust is no longer just a technical framework. It is a leadership mandate.",
    fr: "L'ancien modèle de périmètre n'existe plus. Cet article soutient que la confiance est devenue l'une des hypothèses les plus dangereuses en cybersécurité, et que le Zero Trust n'est plus seulement un cadre technique. C'est un mandat de leadership.",
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
    en: "Data is now the real attack surface. This article explores why protecting systems is no longer enough, and why boards must treat data governance, access, classification, and visibility as core enterprise strategy.",
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
    en: "To receive notifications as each article in the series publishes, connect with the practice on LinkedIn.",
    fr: "Pour recevoir des notifications à la publication de chaque article de la série, connectez-vous au cabinet sur LinkedIn.",
  },
  "insights.follow.cta": { en: "Connect on LinkedIn", fr: "Se connecter sur LinkedIn" },

  // Contact page including the contact form.
  "contact.eyebrow": { en: "Contact", fr: "Contact" },
  "contact.hero": { en: "Begin a conversation.", fr: "Engager une conversation." },
  "contact.begin.eyebrow": { en: "How We Begin", fr: "Comment nous commençons" },
  "contact.begin.heading": {
    en: "Conversations begin with an email.",
    fr: "Les conversations commencent par un courriel.",
  },
  "contact.begin.p1": {
    en: "Daglo and Co. takes on a limited number of engagements at any given time. We work with boards and executives navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can handle.",
    fr: "Daglo and Co. accepte un nombre limité de mandats à tout moment. Nous travaillons avec des conseils et des dirigeants confrontés à la complexité, à des actifs de grande valeur, à des données sensibles et à des risques qui évoluent plus vite que ne peuvent le gérer les modèles de gouvernance traditionnels.",
  },
  "contact.begin.p2": {
    en: "If you are navigating a governance question that the standard frameworks are not answering, write us. We will respond with a thoughtful next step.",
    fr: "Si vous traversez une question de gouvernance à laquelle les cadres standards ne répondent pas, écrivez-nous. Nous répondrons avec une prochaine étape réfléchie.",
  },

  "contact.form.eyebrow": { en: "Send a Message", fr: "Envoyer un message" },
  "contact.form.heading": { en: "Write to us directly.", fr: "Écrivez-nous directement." },
  "contact.form.name": { en: "Name", fr: "Nom" },
  "contact.form.name.placeholder": { en: "Your full name", fr: "Votre nom complet" },
  "contact.form.email": { en: "Email", fr: "Courriel" },
  "contact.form.email.placeholder": { en: "your.email@example.com", fr: "votre.courriel@exemple.com" },
  "contact.form.message": { en: "Message", fr: "Message" },
  "contact.form.message.placeholder": {
    en: "Tell us what you are navigating",
    fr: "Dites-nous ce que vous traversez",
  },
  "contact.form.submit": { en: "Submit", fr: "Envoyer" },
  "contact.form.submitting": { en: "Sending...", fr: "Envoi en cours..." },
  "contact.form.success": {
    en: "Thank you. Your message has been received. We will respond personally with a thoughtful next step.",
    fr: "Merci. Votre message a été reçu. Nous répondrons personnellement avec une prochaine étape réfléchie.",
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
    en: "We respond personally to every inquiry. The first message acknowledges what you have written and proposes how to continue. No automated intake forms or sales pipelines.",
    fr: "Nous répondons personnellement à chaque demande. Le premier message accuse réception de ce que vous avez écrit et propose comment poursuivre. Pas de formulaires d'admission automatisés ni de pipelines commerciaux.",
  },
  "contact.s2.title": { en: "Exploratory conversation", fr: "Conversation exploratoire" },
  "contact.s2.desc": {
    en: "If the situation appears to be a fit, we schedule a conversation to understand what your organization is navigating. The conversation is exploratory. No engagement is presumed.",
    fr: "Si la situation semble correspondre, nous planifions une conversation pour comprendre ce que votre organisation traverse. La conversation est exploratoire. Aucun mandat n'est présumé.",
  },
  "contact.s3.title": { en: "Scoped proposal", fr: "Proposition cadrée" },
  "contact.s3.desc": {
    en: "When the work makes sense for both sides, we propose a scoped engagement with clear deliverables and a defined arc. Engagements are designed to develop board judgment, not to accumulate billable hours.",
    fr: "Lorsque le travail a du sens pour les deux parties, nous proposons un mandat cadré avec des livrables clairs et un arc défini. Les mandats sont conçus pour développer le jugement du conseil, et non pour accumuler des heures facturables.",
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
    en: "© 2026 Daglo and Co. All rights reserved.",
    fr: "© 2026 Daglo and Co. Tous droits réservés.",
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
};

// The LanguageProvider component wraps the entire application and manages the current
// language state. It also handles persistence to localStorage so the user's preference
// survives page refreshes.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // On mount, read the saved language from localStorage and apply it. This runs only
  // on the client because localStorage is not available during server-side rendering.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("daglo-language");
      if (saved === "en" || saved === "fr") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // If localStorage is unavailable for any reason, fall back to English silently.
    }
  }, []);

  // The setLanguage function updates both the state and the localStorage value.
  // It also updates the lang attribute on the HTML element, which is the correct
  // accessibility practice and helps screen readers pronounce the content correctly.
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("daglo-language", lang);
    } catch {
      // Silent fallback if localStorage write fails.
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  // The translation function looks up a key in the translations object and returns
  // the string for the current language. If a key is missing, it returns the key
  // itself, which makes missing translations visible during development.
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

// The useLanguage hook is the API that components use to access the language state.
// It throws an error if used outside of a LanguageProvider, which is the standard
// pattern for context hooks that require provider setup to work correctly.
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
