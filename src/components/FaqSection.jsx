export default function FaqSection({
  heading,
  intro,
  faqs,
  headingTag = "h2",
  groupName = "faq",
}) {
  const HeadingTag = headingTag;
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            FAQs
          </span>
          <HeadingTag className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
            {heading}
          </HeadingTag>
          {intro && <p className="text-slate-600 text-lg">{intro}</p>}
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              name={groupName}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6 open:bg-white open:shadow-md transition-all"
            >
              <summary className="flex justify-between items-start gap-4 cursor-pointer list-none">
                <h3 className="text-base md:text-lg font-bold text-slate-900">
                  {f.q}
                </h3>
                <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-open:rotate-45">
                  add
                </span>
              </summary>
              <p className="text-slate-600 leading-relaxed mt-4 text-sm md:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
