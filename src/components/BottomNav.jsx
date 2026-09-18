import { useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  {
    to: "/",
    label: "Inicio",
    icon: (
      <path
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: "/calendario",
    label: "Calendario",
    icon: (
      <path
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: "/equipos",
    label: "Equipos",
    icon: (
      <path
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: "/estadisticas",
    label: "Estadísticas",
    icon: (
      <path
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: "/reglas",
    label: "Reglas",
    icon: (
      <path
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function BottomNav() {
  // wrapperRef mide el espacio REAL disponible para el menu (el ancho
  // que le queda dentro de la pantalla del telefono).
  const wrapperRef = useRef(null);
  // measureRef es una copia oculta del menu, siempre CON las etiquetas
  // de texto, solo para saber cuanto ancho necesitaria si las mostramos.
  const measureRef = useRef(null);
  const [showLabels, setShowLabels] = useState(true);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const measure = measureRef.current;
    if (!wrapper || !measure) return;

    const checkFit = () => {
      const available = wrapper.clientWidth;
      const required = measure.scrollWidth;
      // Si el menu con etiquetas cabe en el espacio disponible, se
      // mantienen visibles. Si no caben, se ocultan (solo iconos).
      setShowLabels(required <= available);
    };

    checkFit();

    const ro = new ResizeObserver(checkFit);
    ro.observe(wrapper);
    window.addEventListener("resize", checkFit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", checkFit);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Medidor invisible: siempre con texto, para calcular si caben */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute top-0 left-0 flex items-center py-2 pointer-events-none"
        style={{
          visibility: "hidden",
          width: "max-content",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.to}
            className="flex flex-col items-center py-1"
            style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}
          >
            <div className="p-1">
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                strokeWidth="1.85"
                viewBox="0 0 24 24"
              >
                {tab.icon}
              </svg>
            </div>
            <span className="text-[10px] font-medium mt-1 whitespace-nowrap">
              {tab.label}
            </span>
          </div>
        ))}
      </div>

      {/* Menu real, visible */}
      <nav
        aria-label="Navegación principal"
        className="glass-card rounded-3xl py-2 flex items-center justify-around shadow-xl border border-white/90 backdrop-blur-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.88)",
          boxShadow:
            "rgba(11, 43, 27, 0.12) 0px 16px 36px -6px, rgba(16, 185, 129, 0.06) 0px 4px 12px, rgba(255, 255, 255, 0.95) 0px 1px 1px inset",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
          borderRadius: showLabels ? undefined : "1rem",
        }}
      >
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === "/"}
            className={`flex flex-col items-center group py-1 relative ${
              showLabels ? "" : "px-1.5"
            }`}
            style={
              showLabels
                ? { paddingLeft: "0.25rem", paddingRight: "0.25rem" }
                : undefined
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={
                    isActive
                      ? "p-1 rounded-xl bg-emerald-500/15 text-emerald-700 transition"
                      : "p-1 text-moss-muted group-hover:text-forest-900 transition"
                  }
                >
                  <svg
                    className="w-5 h-5 stroke-current"
                    fill="none"
                    strokeWidth={isActive ? "2" : "1.85"}
                    viewBox="0 0 24 24"
                  >
                    {tab.icon}
                  </svg>
                </div>
                {showLabels && (
                  <span
                    className={
                      isActive
                        ? "text-[10px] font-bold text-emerald-800 mt-1"
                        : "text-[10px] font-medium text-moss-muted group-hover:text-forest-900 mt-1"
                    }
                  >
                    {tab.label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
