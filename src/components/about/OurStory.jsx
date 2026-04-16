export default function OurStory() {
  return (
    <section id="our-story" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Our Story
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              Building the Future, <span className="gradient-text">One Line at a Time</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              EhyaSoft was founded in 2019 as the premium software development division of Ehya Education Services. We started as a small team of passionate developers and now run a senior-heavy studio of roughly 10–25 engineers, designers, and product leads, shipping production software to clients in Pakistan and abroad.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Four flagship products are live in production today: AlifLaila (early-childhood literacy), Ehya Classmate (AI-assisted secondary-school learning), FIELDx AI (poultry diagnostics), and Ittesaal (peer-reviewed academic publishing). Every client engagement is run by people who also ship and operate these products — no hand-offs, no juniors learning on your codebase.
            </p>
            <dl className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-slate-200 py-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Founded</dt>
                <dd className="text-2xl md:text-3xl font-black text-slate-900">2019</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Flagship products</dt>
                <dd className="text-2xl md:text-3xl font-black text-slate-900">4</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Team size</dt>
                <dd className="text-2xl md:text-3xl font-black text-slate-900">10–25</dd>
              </div>
            </dl>
            {/* Quote Card */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">lightbulb</span>
              </div>
              <div>
                <p className="text-slate-700 italic leading-relaxed">
                  &ldquo;Great software is not just about code — it&rsquo;s about understanding people, solving real problems, and creating experiences that inspire.&rdquo;
                </p>
                <p className="text-sm text-slate-500 mt-2 font-semibold">— EhyaSoft Philosophy</p>
              </div>
            </div>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Team brainstorming session"
                  className="w-full h-48 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoe0awehHQ7tmkDq26s0QEcnYEbHfDTQ1B90NGN03bnaaPWntwKtUT4tJKhZrV1lIra0rRh0REVkf4BMQFwJxf_wEBLOW9VaDCCXWmP5l5aBKNoPGgRWs468_e1mGV1P7jJwgNyBLD46HSUjXqBgs_d8w64F_ViPZbg9Fij6Ek0He0Vo66uOJK2U_YGQkvES1Ut9rn_MBuBghJgxX2QWIHOw33wibG7QhSzCV_59o7WSuqk_c7YL8McLSbHAfIpmFrjFtsxZLBl3k"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Developer coding at workstation"
                  className="w-full h-64 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAhjlmFGkYCYTZ9Tt2hq2DagJ0cOYL0QRU5VQZfaUGeD1zQm1x5Vga0iCqjlKte8ZRsrSPDlEOLJJh1kES2UhDussTsUoRQ-PQlayB1BmsN0snZyRtFn9qgvZKW56oUpulUvecicjasprTrL10yxg92JIAORiNF9soxgsT705IQp9ntyCGlq85l6p1749wDM8b4M42g1einF3pUyWGWRWEnixbm3TCYPaqPsDuECH-akWC4HG7E364Ux5ag_MAtkKe8nb1vMLZSnw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Planning meeting"
                  className="w-full h-64 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBspAPk91u550tlZlL9tB3EsSLlEE-YKfpjQKGDuA8y25hWz9uQ2Nh9y-OqiWSZqW0rP-CkK1cDQC0SwDHgPqWHxibz2BVA98Hcm34fYto7W00tM7-3TkGfQM3L6FrA8OcsZG9EFQymP69hV5u6TtchRVb_BGWfO1dg88dFiEtuHsZIFGAG1mGVq8y1SSNrFqAej83guWS4hvHlgwvq5q1hDdEfn43DVNJFhh_jrThcgb3rrUm4C1XMtew_72fV_8fZsJl2AB2wODY"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Server room infrastructure"
                  className="w-full h-48 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlveB5MzbUxrkGfRN06oF5ZcoxZL6Vj-r2alF1Vjg-bovVvSb-u8Ks3XYEImglciyirZTFK_RUKOj30T2W0M7nOY4JyJHVE6LfDN7miCRI8Z-lw0A448TDCdm04Z8mhecVmslG-WVCUNVVLqyakBx4KzsDVSUcPXisgrh4ZRsrchp0-BFyChRXwVH6usCwIzqHXOpNrrPTLUYn4SwHk907P7WmwZni9nNgXwX9XuoSuIeLgSUehOC4aGMkr9N8YeLxoj14RT2T6UU"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
