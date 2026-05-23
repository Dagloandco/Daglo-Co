import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 border-b border-daglo-border sticky top-0 bg-white z-10">
        <div className="text-2xl md:text-3xl font-serif font-semibold text-daglo-navy tracking-widest">
          DAGLO & CO.
        </div>
        <ul className="hidden md:flex gap-8 text-sm tracking-wider uppercase">
          <li><a href="#philosophy" className="text-daglo-muted hover:text-daglo-navy transition">Philosophy</a></li>
          <li><a href="#geoint" className="text-daglo-muted hover:text-daglo-navy transition">Approach</a></li>
          <li><a href="#engagement" className="text-daglo-muted hover:text-daglo-navy transition">Engagement</a></li>
          <li><a href="#credentials" className="text-daglo-muted hover:text-daglo-navy transition">Credentials</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-daglo-navy text-white py-24 md:py-32 px-8 md:px-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6 leading-tight text-white">
          The castle has already fallen.
        </h1>
        <p className="text-daglo-gold text-xl md:text-2xl font-serif italic mb-6">
          Counsel for the decisions that define you.
        </p>
        <p className="text-lg max-w-2xl mx-auto text-daglo-ivory leading-relaxed">
          Build the enterprise that can see, verify, adapt, and survive in contested terrain.
        </p>
      </section>

      {/* Core Philosophy */}
      <section id="philosophy" className="py-20 md:py-28 px-8 md:px-16 bg-white">
        <h2 className="text-4xl font-serif font-semibold text-daglo-navy text-center mb-16">
          Core Philosophy
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Philosophy Statement 1 */}
          <div className="border-l-4 border-daglo-gold pl-8">
            <h3 className="text-2xl font-serif font-semibold text-daglo-navy mb-4">
              Governance is not paperwork.
            </h3>
            <p className="text-base text-daglo-muted leading-relaxed">
              Governance is the discipline of seeing reality clearly, making decisions under pressure, and deciding where an organization is willing to place trust. This directly informs strategic decision-making at the highest levels.
            </p>
          </div>

          {/* Philosophy Statement 2 */}
          <div className="border-l-4 border-daglo-gold pl-8">
            <h3 className="text-2xl font-serif font-semibold text-daglo-navy mb-4">
              One operating system.
            </h3>
            <p className="text-base text-daglo-muted leading-relaxed">
              Most boards treat governance, risk, and leadership as separate functions. They are not. They form a unified operating system where decisions about trust cascade through every level of the enterprise.
            </p>
          </div>

          {/* Philosophy Statement 3 */}
          <div className="border-l-4 border-daglo-gold pl-8">
            <p className="text-2xl font-serif font-semibold text-daglo-gold mb-6 leading-relaxed">
              "Where are we implicitly trusting something we have not verified?"
            </p>
            <p className="text-base text-daglo-muted leading-relaxed">
              This question shifts boardroom focus from compliance to proactive risk verification. It engages leaders to identify vulnerabilities and ensure trust is grounded only in proven reality, not inherited assumptions.
            </p>
          </div>

          {/* Philosophy Statement 4 */}
          <div className="border-l-4 border-daglo-gold pl-8">
            <h3 className="text-2xl font-serif font-semibold text-daglo-navy mb-4">
              Risk no longer moves linearly.
            </h3>
            <p className="text-base text-daglo-muted leading-relaxed">
              Cyber incidents become supply chain disruptions become regulatory disclosures become market confidence crises in the same week. In contested environments, geography, logistics, data, cyber, and adversary intent are part of the same battlespace. Boards must think the same way.
            </p>
          </div>
        </div>
      </section>

      {/* GEOINT Section */}
      <section id="geoint" className="py-20 md:py-28 px-8 md:px-16 bg-daglo-ivory">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-semibold text-daglo-navy text-center mb-12">
            Understanding the Terrain
          </h2>
          <h3 className="text-3xl font-serif font-semibold text-daglo-navy mb-8">
            A GEOINT perspective on enterprise risk
          </h3>
          
          <div className="space-y-6 text-base text-daglo-muted leading-relaxed">
            <p>
              Traditional governance is backward-looking. Boards receive sanitized reports after risk has already matured, see compliance dashboards and red-yellow-green charts, but often miss the terrain.
            </p>
            <p>
              I think about risk like a geospatial intelligence analyst thinks about contested terrain. You must understand the movement, the timing, the pattern of life, the dependencies, the chokepoints, and the adversary's likely path.
            </p>
            <p>
              In enterprise terms, that means understanding how data flows, where access is overextended, where third-party exposure exists, where geopolitical instability affects the mission, and where a single failure could cascade across the organization.
            </p>
            <p className="font-semibold text-daglo-navy">
              The board should know what assets matter most, who can reach them, under what conditions, and what happens if those assumptions fail.
            </p>
          </div>
        </div>
      </section>

      {/* Zero Trust Section */}
      <section className="py-20 md:py-28 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-semibold text-daglo-navy text-center mb-12">
            Zero Trust as Governance Philosophy
          </h2>
          <h3 className="text-3xl font-serif font-semibold text-daglo-navy mb-8">
            Beyond the cybersecurity framework
          </h3>
          
          <p className="text-base text-daglo-muted leading-relaxed mb-8">
            Zero Trust is not a technology decision. It is a governance philosophy—a way of thinking about trust, verification, and decision-making at the enterprise level.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-daglo-ivory border-l-4 border-daglo-gold p-6 rounded">
              <p className="font-semibold text-daglo-navy mb-2">Never assume.</p>
              <p className="text-sm text-daglo-muted">Every inherited assumption about access, authority, and trust should be questioned.</p>
            </div>
            
            <div className="bg-daglo-ivory border-l-4 border-daglo-gold p-6 rounded">
              <p className="font-semibold text-daglo-navy mb-2">Trust is not a control. Verification is.</p>
              <p className="text-sm text-daglo-muted">Verification is the foundation of every decision.</p>
            </div>
            
            <div className="bg-daglo-ivory border-l-4 border-daglo-gold p-6 rounded">
              <p className="font-semibold text-daglo-navy mb-2">Reduce implicit trust.</p>
              <p className="text-sm text-daglo-muted">Make visible what was previously invisible. Force leadership to see the terrain before crisis forces them to fight in it.</p>
            </div>
            
            <div className="bg-daglo-ivory border-l-4 border-daglo-gold p-6 rounded">
              <p className="font-semibold text-daglo-navy mb-2">Make risk visible before it becomes a crisis.</p>
              <p className="text-sm text-daglo-muted">The perimeter model is obsolete. The most dangerous risks are already inside, carrying credentials, moving through pathways organizations never questioned.</p>
            </div>
          </div>

          <p className="text-base text-daglo-muted leading-relaxed">
            Zero Trust governance means leadership operates from verified reality, not inherited assumptions. It means stopping reliance on castle walls and building enterprises that can see, verify, adapt, and survive in contested terrain.
          </p>
        </div>
      </section>

      {/* Engagement Section */}
      <section id="engagement" className="py-20 md:py-28 px-8 md:px-16 bg-daglo-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-semibold text-daglo-navy text-center mb-12">
            How I Engage
          </h2>
          <p className="text-center text-daglo-muted mb-16 text-base">
            I take on a limited number of engagements focused on boards and executives navigating complexity, high-value assets, sensitive data, and risks that move faster than traditional governance models can handle.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-l-4 border-daglo-gold p-8 rounded">
              <h4 className="text-lg font-semibold text-daglo-navy mb-3">Board governance advisory</h4>
              <p className="text-sm text-daglo-muted leading-relaxed">
                Helping boards and committees understand the terrain they operate in. Moving from compliance questions to strategic risk verification. Preparing directors for contested environments.
              </p>
            </div>

            <div className="bg-white border-l-4 border-daglo-gold p-8 rounded">
              <h4 className="text-lg font-semibold text-daglo-navy mb-3">Enterprise risk strategy</h4>
              <p className="text-sm text-daglo-muted leading-relaxed">
                Designing governance structures that see risk clearly before it matures. Moving from compliance leadership to strategic leadership. Building resilience into operations.
              </p>
            </div>

            <div className="bg-white border-l-4 border-daglo-gold p-8 rounded">
              <h4 className="text-lg font-semibold text-daglo-navy mb-3">Governance architecture</h4>
              <p className="text-sm text-daglo-muted leading-relaxed">
                AI governance, data governance, emerging technology risk. Building governance frameworks for territories where the old models do not apply.
              </p>
            </div>

            <div className="bg-white border-l-4 border-daglo-gold p-8 rounded">
              <h4 className="text-lg font-semibold text-daglo-navy mb-3">Executive counsel</h4>
              <p className="text-sm text-daglo-muted leading-relaxed">
                Cyber risk, data risk, third-party exposure, geopolitical disruption. Strategic counsel for leaders navigating decisions under pressure and incomplete information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-20 md:py-28 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-semibold text-daglo-navy text-center mb-16">
            Foundation & Credentials
          </h2>

          <div className="bg-daglo-ivory border-l-4 border-daglo-gold p-8 rounded mb-12">
            <p className="text-base text-daglo-muted leading-relaxed">
              <span className="font-semibold text-daglo-navy">U.S. Air Force veteran.</span> Founder of Lumeva LLC, an advisory and government contracting firm specializing in enterprise risk strategy, governance architecture, and cybersecurity. Deep expertise in enterprise systems, Zero Trust strategy, and decision-making in contested environments.
            </p>
          </div>

          <div className="bg-daglo-ivory border-l-4 border-daglo-gold p-8 rounded mb-12">
            <p className="text-base text-daglo-muted leading-relaxed">
              Military service shaped my perspective on how organizations make decisions under pressure, operate with incomplete information, and maintain resilience in contested terrain. That lens informs how I think about governance, risk, and enterprise strategy in every boardroom conversation.
            </p>
          </div>

          {/* Governance & Risk */}
          <div className="bg-white border border-daglo-border rounded p-8 mb-8">
            <h3 className="text-lg font-semibold text-daglo-navy mb-6 pb-4 border-b-2 border-daglo-gold">
              Governance & Risk Architecture
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CISM</p>
                <p className="text-xs text-daglo-muted">Certified Information Security Manager</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CRISC</p>
                <p className="text-xs text-daglo-muted">Certified in Risk and Information Systems Control</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CGEIT</p>
                <p className="text-xs text-daglo-muted">Certified in the Governance of Enterprise IT</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">AAISM</p>
                <p className="text-xs text-daglo-muted">Assured Information Systems Security Management</p>
              </div>
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="bg-white border border-daglo-border rounded p-8 mb-8">
            <h3 className="text-lg font-semibold text-daglo-navy mb-6 pb-4 border-b-2 border-daglo-gold">
              Privacy, Data & AI Governance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CIPP/US</p>
                <p className="text-xs text-daglo-muted">Certified Information Privacy Professional</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CIPM</p>
                <p className="text-xs text-daglo-muted">Certified Information Privacy Manager</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">AIGP</p>
                <p className="text-xs text-daglo-muted">AI Governance Professional (IAPP)</p>
              </div>
            </div>
          </div>

          {/* Enterprise Architecture */}
          <div className="bg-white border border-daglo-border rounded p-8 mb-8">
            <h3 className="text-lg font-semibold text-daglo-navy mb-6 pb-4 border-b-2 border-daglo-gold">
              Enterprise Architecture & Program Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">AWS Solutions Architect Pro</p>
                <p className="text-xs text-daglo-muted">Cloud architecture and enterprise systems</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">AWS DevOps Engineer Pro</p>
                <p className="text-xs text-daglo-muted">Infrastructure and operational resilience</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">Azure Solutions Architect Expert</p>
                <p className="text-xs text-daglo-muted">Enterprise cloud governance</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">AWS ML Specialty</p>
                <p className="text-xs text-daglo-muted">AI and emerging technology risk</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">PMP</p>
                <p className="text-xs text-daglo-muted">Project Management Professional</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">SAFe SPC</p>
                <p className="text-xs text-daglo-muted">Scaled Agile Framework</p>
              </div>
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-white border border-daglo-border rounded p-8 mb-12">
            <h3 className="text-lg font-semibold text-daglo-navy mb-6 pb-4 border-b-2 border-daglo-gold">
              Security & Compliance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CASP+</p>
                <p className="text-xs text-daglo-muted">CompTIA Advanced Security Practitioner</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">CompTIA Stackable</p>
                <p className="text-xs text-daglo-muted">CSAP, CSAE, CSIE, CNSP, CNVP</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-daglo-navy mb-1">Forrester Zero Trust Strategist</p>
                <p className="text-xs text-daglo-muted">Zero Trust architecture and governance</p>
              </div>
            </div>
          </div>

          {/* Pipeline */}
          <div className="bg-daglo-navy text-white border-l-4 border-daglo-gold p-8 rounded">
            <h3 className="text-xl font-serif font-semibold text-daglo-gold mb-6">
              Credential Pipeline — 2026
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-daglo-gold">NACD Foundation</p>
                <p className="text-sm text-daglo-ivory">June 2026. Formal preparation for board roles and governance responsibility.</p>
              </div>
              <div>
                <p className="font-semibold text-daglo-gold">INSEAD Directors Certification</p>
                <p className="text-sm text-daglo-ivory">Later 2026. Director-level governance expertise from one of the world's top executive education institutions.</p>
              </div>
            </div>
            <p className="text-xs text-daglo-gold italic">
              These credentials signal commitment to formal board-level governance expertise and prepare for director and C-suite advisory roles. Together with the governance and risk foundation above, they position you as a serious governance advisor to boards, executives, and organizations navigating contested terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-daglo-navy text-white py-24 md:py-32 px-8 md:px-16 text-center">
        <h2 className="text-4xl font-serif font-semibold mb-6 text-white">
          Let's talk about your governance challenges.
        </h2>
        <p className="text-lg text-daglo-ivory mb-8">
          Conversations begin with an email.
        </p>
        <a href="mailto:donald@daglo.co" className="inline-block px-8 py-4 border-2 border-daglo-gold text-daglo-gold hover:bg-daglo-gold hover:text-daglo-navy transition-all rounded font-semibold">
          donald@daglo.co
        </a>
      </section>
    </div>
  )
}
