import { articulos } from "../data/rules";

const icons = {
  roster: (
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  ),
  card: (
    <>
      <rect height="16" rx="2" width="12" x="6" y="4" />
      <path d="M10 8h4" />
      <path d="M10 12h4" />
    </>
  ),
  special: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5L8.5 10l1.5 4h4l1.5-4L12 7.5z" />
      <path d="M12 3v4.5M8.5 10L4 8.5M10 14l-2.5 4.5M14 14l2.5 4.5M15.5 10L20 8.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </>
  ),
};

export default function Reglas() {
  return (
    <>
      <section
        className="pt-2 pb-1"
        data-purpose="screen-title-banner"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <h2 className="text-2xl font-serif font-bold text-forest-950 tracking-tight">
          Reglamento Oficial
        </h2>
        <p className="text-xs text-moss-muted mt-1 font-medium leading-relaxed">
          Normas disciplinarias y de organización para todos los equipos participantes.
        </p>
      </section>

      <main
        className="space-y-4 flex-1 mt-3 z-10"
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        {articulos.map((articulo) => (
          <section key={articulo.numero} className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-forest-900">
                <svg
                  className="w-5 h-5 stroke-current text-emerald-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.85"
                  viewBox="0 0 24 24"
                >
                  {icons[articulo.icon]}
                </svg>
                <h3 className="font-serif font-bold text-lg text-forest-950 tracking-tight">
                  {articulo.titulo}
                </h3>
              </div>
              <span className="inline-flex items-center text-[10px] font-semibold text-emerald-800 bg-emerald-50/90 px-2 py-0.5 rounded-md border border-emerald-200/60 shadow-xs uppercase tracking-wide">
                {articulo.numero}
              </span>
            </div>
            <article className="glass-card rounded-2xl p-4 border border-white/90">
              <ul className="space-y-2.5 text-xs leading-relaxed text-slate-700">
                {articulo.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <div>
                      <strong className="font-semibold text-forest-900">
                        {item.strong}
                      </strong>{" "}
                      {item.text}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        ))}
      </main>
    </>
  );
}
