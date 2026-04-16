const roles = [
  {
    role: "Founder & Managing Director",
    bio: "Runs product strategy and client engagements. Still writes production code on flagship releases and reviews every architecture decision before kickoff.",
    icon: "flag",
  },
  {
    role: "Head of Engineering",
    bio: "Owns delivery, code quality, and on-call. Drives the Next.js, React Native, and Node.js stack choices across every EhyaSoft build.",
    icon: "code",
  },
  {
    role: "Head of Product Design",
    bio: "Leads discovery, UX research, and the design system. Ships the interactive prototypes clients sign off on before a single sprint of engineering begins.",
    icon: "design_services",
  },
];

export default function LeadershipTeam() {
  return (
    <section id="team" className="py-12 md:py-24 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Meet the Team
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-600 text-lg">
            A senior-heavy team built around three long-tenure leads. Named
            profiles, photos, and LinkedIn links will publish here once we have
            team member consent on file.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((member) => (
            <article
              key={member.role}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">
                  {member.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {member.role}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
