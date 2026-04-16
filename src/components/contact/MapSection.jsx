import {
  BUSINESS_ADDRESS_LINE,
  BUSINESS_CITY,
  BUSINESS_REGION,
  BUSINESS_COUNTRY,
  BUSINESS_HOURS_DISPLAY,
  MAPS_EMBED_URL,
  MAPS_DIRECTIONS_URL,
  BUSINESS_EMAIL,
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";

export default function MapSection() {
  return (
    <section
      id="find-us"
      className="w-full bg-slate-50 border-t border-slate-100 py-12 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Visit Our Office
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Find EhyaSoft in Lahore
            </h2>
            <address className="not-italic text-slate-700 text-base leading-relaxed mb-6">
              <strong className="block text-slate-900">EhyaSoft</strong>
              {BUSINESS_ADDRESS_LINE}
              <br />
              {BUSINESS_CITY}, {BUSINESS_REGION}
              <br />
              {BUSINESS_COUNTRY === "PK" ? "Pakistan" : BUSINESS_COUNTRY}
            </address>
            <dl className="text-sm text-slate-600 space-y-2 mb-6">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-900 w-20">Hours:</dt>
                <dd>{BUSINESS_HOURS_DISPLAY} (PKT)</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-900 w-20">Email:</dt>
                <dd>
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="hover:text-primary"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-900 w-20">WhatsApp:</dt>
                <dd>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-custom hover:shadow-xl transition-all"
            >
              <span className="material-symbols-outlined">directions</span>
              Get Directions
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10]">
            <iframe
              title="EhyaSoft office location on Google Maps — 101 N Block N Model Town, Lahore"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
