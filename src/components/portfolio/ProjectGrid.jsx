const projects = [
  {
    title: "Fintech Revolution",
    tags: ["React", "Node.js"],
    description: "A complete digital banking overhaul that modernized legacy infrastructure and delivered a seamless user experience for millions of customers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTYfnib54-Dd59_lgzkjBlHzOM1Qd26GiJNAK32cUyScG-aw1PvD2MZ6D7GZ-z--WqQMDyMMgRmD2XoL0msaNyFGnvzWg44qvQ0UpI5Pwu687FC8oeuDrscoHz0TE5WVHWA_oMBwLzyBTsVdMHV_ptLaLVVQM5ldDbccJwnpdAL5kkNOyMvl8t0LfR_bt3Fd2BW3lthkP9_npbUShPeipA_n96Tpao91gobgmOmRiSVpu5YM0_XYoZhyGW2vq5MjCilPAvZE8T6Og",
  },
  {
    title: "HealthTech AI",
    tags: ["Python", "TensorFlow"],
    description: "Predictive diagnostics engine that leverages machine learning to identify health risks early and improve patient outcomes across clinical settings.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEOhzCwaQUhOh9A-HtbeZxRSbRp5e20OruoM74PQ_P8y8eJyu8MlWRjwvhlBrmc31YrZm7DtpDGtdtF1qSVa6SLzj2GKs4xlluWqcAmppxvnOGcVTIREXRdMVk-uJN22QqB6Xg-iWrBx064UB0gobCF1XgXe50lG5CYPKtms-l9TeDplC3pvz0f2njg6ZLqnSy84OVvmI5Tb80keG1gUH1rPDUFr5TMs7BS34lp_ZIvXiptXmU6p3MC0GN1YmDj8mnUB2_PwfPr8E",
  },
  {
    title: "E-Commerce Next",
    tags: ["Next.js", "Tailwind"],
    description: "High-performance retail experience built for speed, conversion, and scale with a modern tech stack and pixel-perfect design.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7V9iy-yV0O83H7axqvMRFTfqvXu-7Ubs9lWbsvC4_WSXpp3QyyeomA_Lb6oNUpyyWx3m9e7OnwzWSg1-MJ5pnqFsh8IfETXqZLFgIHro6f_BQ01wNqsTkyMhemJ_lR5mrqsasdZOJRA58oagyKQS9wTD084YPttY3CXjwfK_tgeYPVcvf8osJpdMALJLVgyGw8nCCJoIIku006MpP3zP7rOlkW9xHUinwwEEDbOHEUNYowdb1tLz2MIu5ZF7v0rT-Crs0OcU4CjE",
  },
  {
    title: "SaaS Dashboard",
    tags: ["Go", "Kubernetes"],
    description: "Cloud-native enterprise resource planning dashboard designed for real-time analytics and seamless team collaboration at scale.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRZyx0Ge9DCc9QOqIkAFX5F4yBdDTBLfwNv5DqF7eLjf1sZnQFRP0uCbFHLZppr8l_2ffrA0qgmIMDgB9ZuyyZgMYAQ23URzOld2LQnnKM-bz-bXGUhiIgY1UaJA0kDFdZRJqK0cg4zXDv89GI6P-1MuOBXBd0GIniykAJhfAgYB5h6xZeMdkRFv8zfOdk0-Iqt9hNxzx8CBibIpri6ugVOZzzxgZa0BJ1_QFABL9SNDbmnjXG4shWpThvkrAFM3qcJAuNqi9wPIM",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div
            className="aspect-[16/10] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                View Case Study
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
