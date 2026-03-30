"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactHero() {
  const captchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [status, setStatus] = useState("idle");

  const renderCaptcha = useCallback(() => {
    if (
      !captchaContainerRef.current ||
      widgetIdRef.current !== null ||
      !window.grecaptcha?.render
    )
      return;

    widgetIdRef.current = window.grecaptcha.render(captchaContainerRef.current, {
      sitekey: SITE_KEY,
      callback: (token) => setCaptchaToken(token),
      "expired-callback": () => setCaptchaToken(null),
    });
    setCaptchaReady(true);
  }, []);

  useEffect(() => {
    if (window.grecaptcha?.render) {
      renderCaptcha();
      return;
    }

    window.onRecaptchaLoad = () => renderCaptcha();

    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      delete window.onRecaptchaLoad;
    };
  }, [renderCaptcha]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("captcha");
      return;
    }

    setStatus("loading");

    try {
      const formData = new FormData(e.target);
      const data = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        recaptchaToken: captchaToken,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setCaptchaToken(null);
        if (widgetIdRef.current !== null) {
          window.grecaptcha?.reset(widgetIdRef.current);
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero Title */}
      <div className="text-center mb-12 md:mb-20">
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
        <div id="contact-form" className="relative scroll-mt-32">
          {/* Decorative gradient blur */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 rounded-[2rem] blur-3xl -z-10" />

          <div className="glass-card rounded-3xl p-8 lg:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    name="fullName"
                    placeholder="John Doe"
                    type="text"
                    required
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
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
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
                  name="subject"
                  required
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
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center min-h-[78px] relative">
                {!captchaReady && (
                  <div className="w-[302px] h-[76px] rounded-md border border-slate-200 bg-slate-50 flex items-center gap-3 px-4 animate-pulse">
                    <div className="w-7 h-7 rounded border border-slate-300 bg-white shrink-0"></div>
                    <div className="h-4 w-32 bg-slate-200 rounded"></div>
                  </div>
                )}
                <div
                  ref={captchaContainerRef}
                  className={captchaReady ? "" : "absolute opacity-0 pointer-events-none"}
                ></div>
              </div>

              {/* Status Message */}
              {status === "captcha" && (
                <p className="text-red-600 font-medium text-sm text-center">Please complete the captcha verification.</p>
              )}
              {status === "success" && (
                <p className="text-green-600 font-medium text-sm text-center">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium text-sm text-center">Something went wrong. Please try again.</p>
              )}

              {/* Send Button */}
              <button
                className="w-full gradient-bg text-white font-black py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all vibrant-shadow disabled:opacity-60"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
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
                    101 N, Block N Model Town, Lahore, Punjab
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Narowal
                  </p>
                  <p className="text-slate-500">
                   Al-Karim Park (Butt Colony) 1KM Zafarwal Rd
                  </p>
                </div>
              </div> */}
             
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
                    soft@ehya.com.pk
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
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
              </div> */}
            </div>
          </div>

          {/* Follow Our Journey */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Follow Our Journey
            </h3>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="https://www.linkedin.com/company/ehya-education-services/" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* Facebook */}
              <a className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="https://web.facebook.com/ehyaedu" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              {/* <a className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="https://twitter.com/ehyaedu" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a> */}
              {/* Instagram */}
              <a className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="https://www.instagram.com/ehyaedu" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              {/* YouTube */}
              <a className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="https://www.youtube.com/channel/UCeudFNeP-vMFkCtGUumC6zg" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
