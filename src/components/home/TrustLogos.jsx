export default function TrustLogos() {
  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAj-LWfeSokGLADtr6T3CKtgZ5CM7rcgBJKP6iEzlJSIOzw8gGiD4TLWj5Zl2_3P9SHICnbjdoT10G_cpg-o5xl_kLDP7A5lbvUWJ2F49llzW-XSeCjM9DeGDZdJEQrzpFiz01Q1XFoVzhN2HOQNK2Gll0PI6RCbTTh5k7WyocbqRLWIcqwK0h-TWptSH33snvhKx14rV_x6592Gz6aKAbRvcEAiGf74eZovO9iXguB9XknGuk9Tnm6anJtezNYH3RBUnPfER6kH3I",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0B9skghu91W4E06Jd29psJGr3B48Y6JqXmxLp1YDu2wCk36NARLYJr962wizFKSAr2jkN4I84PO6Y1XEfmaG4B1ygMRUr_JdLcGrdg1Hvk7lRx1eNHv1YPQ2ZpKAo1STACNDuYJFIaME5uPDUg76NC3o2YJhNfptaoTMz-eDDkfD0WMwfk-Brk1EfOYfk6URoNGBXe-xgNR3Y1yzfk3PaxdoVOgQUIhZvPuGVMrG4130pvMyXILDZ2yDPB1k2qjf1r0R3UYS1WyI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXAMq7OU7tuakbRHEXeLBYAJKVuMT_oSlVnf4mHz4B8R5ydWiVTl5KhuutenWkuQ2maQXMSlEfAvnAvUPNj78qBKQmREITqn3r7TRzYVgT2m7TB2ECeS1o1Mt2g6GNGrinp4ZvcuGviaZ8hFdRPtKcaxhJnTZxPNA9ATbrTPF3QltFZkGtH9CvZKQ0l8bjSaVYzTCGNzcb0tD2boreJbZNyhNWCKUx-neIR1gPCn71uD_inp3O90xFfJfsrWVO7_YFkwZ0363E9s4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD656NXc-INJwfAwbjbpQNv99sNb6Or7Vur4ARYCM6lUZQP1q2ThHL_iX32qO3GnOQ25Gv2-dCl-_s8ntqJ6nk52i4sc1QXcoIucHp_CTPGhvaKDZVPy5uFcu5kP1UyZGoEIG6ZUT2lZ-dBkp40f5JASPACN0e_P7EIPo_pbNAojJS8O0C1Xdm42o6MRk87Tcmo6J7teQ4rGpnL6lEjxoEzOBfnysfJmKhb-8QH66EHnZLUSHG7MS8nIXW4M_J_w6bIuzTEpBFF06A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCO022QiQtI4Y-HxHiicP6ejti9SO3nR-FsgUClviDkvQSH5Yo6XtTXUYMvuYPtmcNmh_z-y7iEm_7XWxAkwfCPGAsFexSNTfcHRsDPMm8WECfpdmLVz2xRTyqa4l-Bd2in9crQyx5ShE34jR0znvjCKW-plwrJwCBqHPxWQfkAHthySN_a9ufGsOoapGXPYnZiCG1ZTFzOqu59AQDnfNyw-WqhCDYTCysOQgI67gZaCOWfdweEWL3HCAoX2iZFdD6Q1U1HxJggf5s",
  ];

  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by startups and growing businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          {logos.map((src, index) => (
            <img key={index} alt="Client Logo" className="h-8" src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
