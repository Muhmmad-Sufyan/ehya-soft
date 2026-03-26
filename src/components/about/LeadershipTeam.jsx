export default function LeadershipTeam() {
  const team = [
    {
      name: "Marcus Sterling",
      role: "Founder & CEO",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF1yHpSnQpqzz8SXt3NdYC_idQvytMG8doNFJUfa2M24FXFLVJbWZEc4OxuWtKOPXmesT9TaeYkE1NnhxGK_PlMlnHcfPRUJxA0SA4q_3KGaPNwP2Z-JMKN7jgiuAPW-i_iAo930uhDD_U_WlmqwZ9R-fZab1qGH-a9k2AHcOSmGPk3MDhqAvspDAZhpiIEk4HRbajrHfkLiobVYiRCwh4UpHk3I5oafARMaae6wKHzGxXRHtGb6R1sSjLgeLWZvgfb_-MBA4EeJs",
    },
    {
      name: "Elena Rodriguez",
      role: "CTO",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbAFK6XODabPEIXmIN6qkZ0v4bMYvQXUKSYx916ueTsSk3-FDSF5qLOPNNwDXOdl_kT6q54c1NMxSpcrdohWmb9PEHLlOmqAg4LLX5PKNsOjutYre9XnOKSlK2vigNLPJAdCsxQCrtLnzhhvsONUmvI5lE6JetSaepHPrQWQOrecQhe8T8R7bU4CgAef5ozIIsQfZv5k8hZk6htJLdm3ErTRa4YqBXMxSwAHHKLU9Jc2Aezf1zftJn1ncQSmRM3zCiRYevGfoeLqI",
    },
    {
      name: "Julian Chen",
      role: "Lead Solutions Architect",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCfkJR8A6izZLhSlJF3uHTKaQiN3zx512cji_PDAAmzI9s6l2S2002sHOVA1nliYYyIxoKZjDQbPCMLwxB1sioQw2Uutmec2kejaTVPBGrDW5KP1oBVO6dM3upBRad9f0EbVCHOrTdDCsvPhpyWs66TsBwI_CkCQ_78fWOYRIfZn-05tvwmjAmEhNOZe1gTynyQ_GZat-4o7BRRwKl2lx8XkZWRkeY3yXixXxz2lxfO6WGEWoTaLPNbg24LXdjnwnXXDRz6_E2lB60",
    },
    {
      name: "Sarah Vance",
      role: "Head of Product Design",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAwpn_cHJVvMo2HV5CINFzCTuSRtTxYHEiGbHUm1UGy0_M9TW3fuN_SQWWVgrNhqrDIFuYLBBQey4fSzTkFcU7XP2s8ukkR2Vpqae0S9nWEQexO_TY8Ew_X3Wm6pRB4W2dHoGDPUqjgsDm0x_EEu1hSdcLyL5QxDkif8dCND76yS7Wik3HE7dvB9YUuZmyz96DnafySlyyY_aefsXLVXDeFg17ctLreXz6LzBKlgVLGJbCXpVHmM_dgGNoMQSgQm76oo1dbcW7sam8",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Meet the Team
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Our <span className="gradient-text">Leadership</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[3/4]">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={member.image}
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 font-medium">{member.role}</p>
                </div>
              </div>
              {/* Default Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-slate-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
