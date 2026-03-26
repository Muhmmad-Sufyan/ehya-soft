import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfLLLxk8xLqX2ixOM1CUBzJkO7dM5GQmRsRmbw5syFdyi-cStKMPqdxNlsf2ZCNb-3zB756jzW5hPYdeNT0LbsqwiZ4VBJdKxiXbJnzq6lzx6BfAftsIDxYZDjRov_wozfPD6OwH8l3K83lL8dSwoqNagiZxphqjTn00yekBJV7l-Uny_v2S8peANbWKEj3C9ka9xmyEUtG_txXjxsl0hmGdYS2CDwDkGTZqrbZQ2VvGefchqk4ilijaJXkite6uk-rD2FDgyp71I",
      tags: ["React Native", "Firebase"],
      title: "NeoBank \u2013 Revolutionizing Personal Finance",
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDruEW34PUPij1Z2L9sAGLcNtupBCiWN4DLbazYoJXqZD7_mkWztjAaS0Zilz98vi0nEG0YgJv7hXMvxlZCiCIs7bRaH2vxNg9uwc4vEoRQFd9V5dcepNE1rd7s4Hj563uPd_0GwaEopy-aSEu1kccz5H1jMCgSN-7Xwao3j7e-TR-AqLydemhmmUpMeXaKA_dApIo6qaGT298LeHpbaldWLbex8x_x29vajjdwGOF4cpB-HqaX5Aa_wtIsI5hzaSHEA87ZajQMSIM",
      tags: ["Next.js", "Shopify Plus"],
      title: "LuxeCommerce \u2013 High-End Retail Experience",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Selected Works</h2>
            <p className="text-slate-600 max-w-xl">
              A glimpse into the high-end digital products we&apos;ve brought to life for our global clients.
            </p>
          </div>
          <Link className="font-bold flex items-center gap-2 group gradient-text" href="/portfolio">
            View all projects
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-video mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                <img alt="Project Portfolio" className="w-full h-full object-cover" src={project.image} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-primary font-bold rounded-full">View Case Study</span>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-blue-50 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
