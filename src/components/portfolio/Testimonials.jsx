const testimonials = [
  {
    name: "Marcus Chen",
    role: "CTO NexaPay",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCF4QuNFVINyfwDs9Lzi8AvNOkhFANoBmbF5V93z8WtgwW4OR018S9Km975ZUUaPxnysYVBVO46txSyg1RV718rALImxXuKTqtyldMGM_ncrGUal0FyUUFQYUQuoXLEkXG4XsdkiwN_DODSPoezu7IdLxkILdLJ6l1oRBDtD3aIiFwgBikWREuFOtLLn1sqIK4azgpKipMqxOlb6aypZXYb6OU9O8uFKmSyOHOy-Tg6N-2zhiA0bWlY8faUv6e3waFJQlFWw6EtGa4",
    quote:
      "EhyaSoft transformed our legacy system into a modern powerhouse. Their engineering rigor and design sensibility are unmatched in the industry.",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Product VitalCore",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDe5QNmUtTUZAkwQQoWq7ahBnfgIkbnv_sRbLcfnuqTVgHvZy9osgHkDhBoEqk6JTxQ7SG61Apr7vlkttg1Pu0seDXIobmzxliFS-dDGmMF0cHwUmBPrr_ar2wpQ6WykuSvp_mCqhtQjQh2ZA7W1Js3VFxCkTq05nEm0WSPWoyvHLpyZKq5rhN4HPeRSJOm3_BRcvTiDURytNyeUoUj0UWd5u6_UtgWZUMUUjvX9DG7rghemRa2zefqbTyDFodLqIciwZ2YhYMX1m4",
    quote:
      "The design aesthetic they brought to our medical platform was revolutionary. Patient engagement increased by 340% within the first quarter.",
  },
  {
    name: "David Kim",
    role: "Founder VelocityX",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQFH2DSPRIvI7kEcjeyqaEx-1Ka0NAB97Gj-0dM7_Ke4n-3anOj0GlOHra1RqsN82yO46fxgKbG4XKsKnAMduIyY1ZjZgDz2tFcjXJrvFb8A04DpXcoPxc3fs-PA0xEjsm_MVhX2IB1lQ3dpROZvk2E8yOrBn8PX64wiiVVKzpkdg-H3fpOWz3nv0jLrcnZ7YawEyY-EdmqzAsN_5sxD-UxnCtdg-j-R_WRMTQpeFI8HeJM7iScJzn86j7YlKHAsy0qfNOBiv0t8",
    quote:
      "Scale was our biggest challenge. EhyaSoft built an architecture that handles 10x our projected load without breaking a sweat.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-yellow-400 text-xl"
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-12 md:py-20 px-6 mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
              Testimonials
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">
              What our clients say
            </h3>
          </div>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <StarRating />
              <p className="text-slate-600 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
