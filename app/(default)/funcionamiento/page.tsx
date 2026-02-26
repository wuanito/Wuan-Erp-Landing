export const metadata = {
  title: "Funcionamiento | Wuan ERP",
  description:
    "Conoce la arquitectura, módulos y flujo de trabajo de WUAN-ERP. Software empresarial de código abierto.",
};

const steps = [
  {
    number: "01",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    title: "Solicitud del cliente",
    description:
      "El cliente envía una petición HTTP. Todo pasa primero por el API Gateway que autentica, filtra y enruta.",
  },
  {
    number: "02",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    title: "API Gateway reactivo",
    description:
      "Spring Cloud Gateway aplica JWT/OAuth2, rate limiting y logging automático antes de despachar el request.",
  },
  {
    number: "03",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    title: "Microservicio de dominio",
    description:
      "Cada módulo es un servicio independiente con su propia base de datos PostgreSQL y lógica de negocio aislada.",
  },
  {
    number: "04",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    title: "Observabilidad nativa",
    description:
      "OpenTelemetry traza cada request. Métricas en Prometheus, dashboards en Grafana, trazas en Tempo.",
  },
];

const modules = [
  {
    name: "API Gateway",
    color: "bg-orange-500",
    status: "active",
    href: "https://github.com/ErpOpenSource/erp-api-gateway",
    desc: "Punto único de entrada. Spring Cloud Gateway + WebFlux, JWT, rate limiting y logging automático.",
  },
  {
    name: "Observabilidad",
    color: "bg-cyan-500",
    status: "active",
    href: "https://github.com/ErpOpenSource/erp-observability-platform",
    desc: "OpenTelemetry Collector, Grafana Tempo, Prometheus y dashboards listos para producción.",
  },
  {
    name: "Autenticación",
    color: "bg-yellow-500",
    status: "soon",
    href: null,
    desc: "Servicio OAuth2 + JWT con soporte multi-tenant y gestión de roles y permisos.",
  },
  {
    name: "Ventas",
    color: "bg-blue-500",
    status: "soon",
    href: null,
    desc: "CRM, cotizaciones, pedidos y seguimiento de oportunidades en tiempo real.",
  },
  {
    name: "Inventario",
    color: "bg-green-500",
    status: "soon",
    href: null,
    desc: "Control de stock, almacenes, movimientos y trazabilidad de productos.",
  },
  {
    name: "Contabilidad",
    color: "bg-purple-500",
    status: "soon",
    href: null,
    desc: "Contabilidad general, facturación electrónica y reportes financieros automatizados.",
  },
];

const techStack = [
  { name: "Spring Boot", category: "Backend", color: "text-green-400" },
  { name: "Next.js", category: "Frontend", color: "text-white" },
  { name: "PostgreSQL", category: "Base de datos", color: "text-blue-400" },
  { name: "Kafka", category: "Mensajería", color: "text-orange-400" },
  { name: "Docker", category: "Infraestructura", color: "text-cyan-400" },
  { name: "Kubernetes", category: "Orquestación", color: "text-blue-500" },
  { name: "Grafana", category: "Observabilidad", color: "text-orange-500" },
  { name: "OpenTelemetry", category: "Trazabilidad", color: "text-purple-400" },
  { name: "GitHub Actions", category: "CI/CD", color: "text-gray-300" },
];

export default function FuncionamientoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-[5%] top-[5%] -z-10 h-[45vw] w-[45vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 107, 26, 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Hero — two columns ── */}
      <section className="px-8 pb-16 pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* Left: text */}
          <div data-aos="fade-right">
            <span className="mb-6 inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500">
              Arquitectura
            </span>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Cómo funciona{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B1A, #ff9a56)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                WUAN-ERP
              </span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400">
              Una plataforma de microservicios diseñada para escalar. El{" "}
              <strong className="text-white">API Gateway</strong> es el corazón:
              enruta, autentica y observa cada request antes de delegarlo al
              servicio de dominio correcto.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-500" />
                <span className="text-gray-400">Activo en GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full border border-dashed border-gray-600 bg-transparent" />
                <span className="text-gray-400">Próximamente</span>
              </div>
            </div>
          </div>

          {/* Right: animated SVG diagram */}
          <div
            className="relative flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="absolute h-64 w-64 rounded-full bg-orange-500/20 blur-[100px]" />
            <svg viewBox="0 0 400 400" className="relative w-full max-w-[450px]">
              <defs>
                <radialGradient id="gatewayGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Orbit ring — rotates slowly */}
              <circle
                cx="200"
                cy="200"
                r="125"
                fill="none"
                stroke="#FF6B1A"
                strokeWidth="0.5"
                strokeDasharray="8 16"
                opacity="0.25"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="40s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Inner ring */}
              <circle
                cx="200"
                cy="200"
                r="70"
                fill="none"
                stroke="#FF6B1A"
                strokeWidth="0.5"
                opacity="0.1"
              />

              {/* ── Active connection line: Gateway → OTel/Grafana (4 o'clock) ── */}
              <line
                x1="200"
                y1="200"
                x2="308"
                y2="263"
                stroke="#FF6B1A"
                strokeWidth="1"
                opacity="0.35"
              />

              {/* ── Coming-soon connection lines (dashed gray) ── */}
              <line x1="200" y1="200" x2="200" y2="75"  stroke="#444" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="308" y2="138" stroke="#444" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="200" y2="325" stroke="#444" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="92"  y2="263" stroke="#444" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="92"  y2="138" stroke="#444" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />

              {/* ── Animated pulse dot on active line ── */}
              <circle r="3" fill="#FF6B1A">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M200,200 L308,263"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Second pulse in reverse */}
              <circle r="2.5" fill="#FF6B1A" opacity="0.6">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="1.4s"
                  path="M308,263 L200,200"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.7;0"
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="1.4s"
                />
              </circle>

              {/* ── ACTIVE: OTel/Grafana — 4 o'clock ── */}
              <circle cx="308" cy="263" r="36" fill="#0D0D16" stroke="#FF6B1A" strokeWidth="1.5" />
              <text x="308" y="256" textAnchor="middle" fill="#FF6B1A" fontSize="8" fontFamily="monospace" fontWeight="bold">OTel</text>
              <text x="308" y="267" textAnchor="middle" fill="#FF6B1A" fontSize="8" fontFamily="monospace" fontWeight="bold">Grafana</text>
              <text x="308" y="278" textAnchor="middle" fill="#666" fontSize="7" fontFamily="monospace">:3000</text>

              {/* ── COMING SOON nodes ── */}

              {/* AUTH — 12 o'clock */}
              <g opacity="0.35">
                <circle cx="200" cy="75" r="32" fill="#0D0D16" stroke="#555" strokeWidth="1" strokeDasharray="5 3" />
                <text x="200" y="71" textAnchor="middle" fill="#666" fontSize="9" fontFamily="monospace" fontWeight="bold">AUTH</text>
                <text x="200" y="83" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">soon</text>
              </g>

              {/* SALES — 2 o'clock */}
              <g opacity="0.35">
                <circle cx="308" cy="138" r="32" fill="#0D0D16" stroke="#555" strokeWidth="1" strokeDasharray="5 3" />
                <text x="308" y="134" textAnchor="middle" fill="#666" fontSize="9" fontFamily="monospace" fontWeight="bold">SALES</text>
                <text x="308" y="146" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">soon</text>
              </g>

              {/* HR — 6 o'clock */}
              <g opacity="0.35">
                <circle cx="200" cy="325" r="32" fill="#0D0D16" stroke="#555" strokeWidth="1" strokeDasharray="5 3" />
                <text x="200" y="321" textAnchor="middle" fill="#666" fontSize="9" fontFamily="monospace" fontWeight="bold">HR</text>
                <text x="200" y="333" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">soon</text>
              </g>

              {/* INVENTORY — 8 o'clock */}
              <g opacity="0.35">
                <circle cx="92" cy="263" r="32" fill="#0D0D16" stroke="#555" strokeWidth="1" strokeDasharray="5 3" />
                <text x="92" y="259" textAnchor="middle" fill="#666" fontSize="7.5" fontFamily="monospace" fontWeight="bold">INVENT.</text>
                <text x="92" y="271" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">soon</text>
              </g>

              {/* ACCOUNTING — 10 o'clock */}
              <g opacity="0.35">
                <circle cx="92" cy="138" r="32" fill="#0D0D16" stroke="#555" strokeWidth="1" strokeDasharray="5 3" />
                <text x="92" y="133" textAnchor="middle" fill="#666" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ACCT.</text>
                <text x="92" y="145" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">soon</text>
              </g>

              {/* ── Central API Gateway ── */}
              <circle cx="200" cy="200" r="58" fill="url(#gatewayGlow)" />
              <circle cx="200" cy="200" r="52" fill="#0D0D16" stroke="#FF6B1A" strokeWidth="2">
                <animate attributeName="stroke-opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Outer pulse ring */}
              <circle cx="200" cy="200" r="52" fill="none" stroke="#FF6B1A" strokeWidth="1.5">
                <animate attributeName="r"       values="52;66;52" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3"  dur="3s" repeatCount="indefinite" />
              </circle>
              <text x="200" y="193" textAnchor="middle" fill="white"   fontSize="9" fontFamily="monospace" fontWeight="bold">API</text>
              <text x="200" y="206" textAnchor="middle" fill="white"   fontSize="9" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
              <text x="200" y="220" textAnchor="middle" fill="#FF6B1A" fontSize="8" fontFamily="monospace">:8080</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Flow steps ── */}
      <section className="bg-black/30 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Flujo de una petición
            </span>
            <h2 className="mb-4 text-3xl font-bold">Del cliente a la respuesta</h2>
            <div className="h-1 w-20 bg-orange-600" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/5 bg-[#161625] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/50"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${step.bgColor}`}
                >
                  <span className={`text-lg font-extrabold ${step.color}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-3 font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Módulos del sistema
            </span>
            <h2 className="mb-4 text-3xl font-bold">Un ERP completo, modular</h2>
            <div className="h-1 w-20 bg-orange-600" />
            <p className="mt-4 max-w-xl text-sm text-gray-400">
              Activa sólo los módulos que necesitas. Cada uno es un microservicio
              independiente con su propia base de datos y API.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, i) => (
              <div
                key={mod.name}
                className={`group relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  mod.status === "active"
                    ? "border-orange-500/30 bg-orange-500/5 hover:border-orange-500"
                    : "border-white/5 bg-[#161625] hover:border-white/10"
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Status badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${mod.color}`} />
                    <h3 className="font-bold">{mod.name}</h3>
                  </div>
                  {mod.status === "active" ? (
                    <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      Activo
                    </span>
                  ) : (
                    <span className="rounded-full border border-dashed border-white/10 px-3 py-1 text-xs text-gray-600">
                      Próximamente
                    </span>
                  )}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {mod.desc}
                </p>
                {mod.href && (
                  <a
                    href={mod.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 transition hover:text-orange-400"
                  >
                    Ver repositorio
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="bg-black/30 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Stack tecnológico
            </span>
            <h2 className="mb-4 text-3xl font-bold">Tecnología de primera línea</h2>
            <div className="h-1 w-20 bg-orange-600" />
          </div>

          <div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#161625] px-6 py-5 transition hover:border-white/10"
              >
                <div className="h-2 w-2 rounded-full bg-orange-500/60" />
                <div>
                  <div className={`text-sm font-bold ${tech.color}`}>
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-600">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
            ¿Listo para explorar el código?
          </h2>
          <p className="mb-10 text-gray-400">
            Toda la arquitectura está documentada y el código es completamente
            abierto. Levanta el entorno completo con un solo comando Docker
            Compose.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/ErpOpenSource"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-[0_10px_30px_rgba(255,107,26,0.3)]"
            >
              Ver en GitHub
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-bold text-white transition duration-300 hover:border-orange-500 hover:text-orange-400"
            >
              Contactar al equipo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
