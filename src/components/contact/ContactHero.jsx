"use client";

export default function ContactHero() {
  return (
    <>
      {/* Hero Title */}
      <div className="text-center mb-20">
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6">
          Let&apos;s build the <span className="gradient-text">future</span> together.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Our global team is ready to turn your vision into reality. Reach out
          and let&apos;s start a conversation.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT: Contact Form */}
        <div className="relative">
          {/* Decorative gradient blur */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 rounded-[2rem] blur-3xl -z-10" />

          <div className="glass-card rounded-3xl p-8 lg:p-10">
            <form className="space-y-6">
              {/* Full Name + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-bold text-slate-700 mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    id="fullName"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-slate-700 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div>
                <label
                  className="block text-sm font-bold text-slate-700 mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                  id="subject"
                >
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Question</option>
                  <option value="support">Support</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  className="block text-sm font-bold text-slate-700 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                />
              </div>

              {/* Send Button */}
              <button
                className="w-full gradient-bg text-white font-black py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all vibrant-shadow"
                type="submit"
              >
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Contact Details */}
        <div className="space-y-12">
          {/* Our Global Presence */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Our Global Presence
            </h3>
            <div className="space-y-6">
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    San Francisco
                  </p>
                  <p className="text-slate-500">
                    101 Montgomery St
                  </p>
                </div>
              </div> */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Lahore
                  </p>
                  <p className="text-slate-500">
                    101 N Block, Plot 101 N, Model Town Extension Block N Model Town, Lahore, 54700
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Direct Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Email
                  </p>
                  <p className="text-slate-500">
                    hello@ehya.com.pk
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Phone
                  </p>
                  <p className="text-slate-500">
                    (042) 35164921
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Our Journey */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Follow Our Journey
            </h3>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary">
                  share
                </span>
              </button>
              <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary">
                  public
                </span>
              </button>
              <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary">
                  video_library
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
