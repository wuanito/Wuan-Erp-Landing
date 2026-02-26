import { Github } from 'lucide-react';

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden px-8 pb-32 pt-20">
      {/* Hero glow */}
      <div
        className="pointer-events-none absolute right-[5%] top-[10%] -z-10 h-[40vw] w-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 107, 26, 0.15) 0%, rgba(10, 10, 15, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left: text content */}
        <div data-aos="fade-right">
          <span className="mb-6 inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500">
            Erp Abierto
          </span>
          <h1 className="mb-6 text-6xl font-extrabold leading-tight md:text-7xl">
            WUAN-ERP <br />
            <span className="text-gradient">Open Source.</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400">
            Erp de codigo abierto para la gestión empresarial, diseñado para ser flexible, escalable y 
            fácil de usar. Con una comunidad activa y una amplia gama de módulos, WUAN-ERP es la solución 
            ideal para empresas de todos los tamaños que buscan optimizar sus operaciones y mejorar su eficiencia, 
            listo para que cada empresa pueda personalizarlo a su necesidad.
          </p>
          <div className="flex flex-wrap gap-4">
<a
  href="https://github.com/ErpOpenSource"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-[#24292F] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_20px_rgba(36,41,47,0.3)]"
>
  <span>Empecemos</span>
    <Github className="w-5 h-5" />

</a>
          </div>
        </div>

        {/* Right: animated logo */}
        <div
          className="relative flex items-center justify-center"
          data-aos="fade-left"
        >
          <div className="absolute h-64 w-64 rounded-full bg-orange-500/20 blur-[100px]" />
          <svg
            viewBox="0 0 200 200"
            className="animate-logo-spin relative w-full max-w-[450px]"
          >
            <defs>
              <linearGradient id="heroLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B1A" stopOpacity="1" />
                <stop offset="100%" stopColor="#0A0A0F" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Outer guide ring */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="#222" strokeWidth="0.5" />
            {/* Dashed rings */}
            <g opacity="0.9">
              <circle
                cx="100" cy="100" r="80"
                fill="none"
                stroke="#FF6B1A"
                strokeWidth="20"
                strokeDasharray="60 40"
              />
              <circle
                cx="100" cy="100" r="60"
                fill="none"
                stroke="#FF6B1A"
                strokeWidth="15"
                strokeDasharray="30 20"
                opacity="0.6"
              />
            </g>
            {/* Pulsing core */}
            <circle cx="100" cy="100" r="28" fill="#FF6B1A">
              <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}
