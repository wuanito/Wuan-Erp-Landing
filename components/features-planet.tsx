const features = [
  {
    delay: 100,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
    title: "API Gateway Reactivo",
    description:
      "Spring Cloud Gateway + WebFlux como punto único de entrada. Enrutamiento por prefijo, timeouts configurables y filtros globales aplicados a todo el tráfico.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    delay: 200,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Observabilidad Nativa",
    description:
      "OpenTelemetry Collector, Grafana Tempo, Prometheus y Grafana listos desde eUna plataformal primer día. Métricas, trazas distribuidas y logs correlacionados en un solo docker compose up.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    delay: 300,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    title: "Trazabilidad End-to-End",
    description:
      "Cada request recibe un X-Request-Id único generado en el Gateway y propagado a todos los microservicios. Logs estructurados en JSON con Logstash Encoder, listos para Loki.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    ),
  },
  {
    delay: 150,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Arquitectura Modular",
    description:
      "Cada módulo del ERP es un microservicio independiente con su propio repositorio, pipeline de CI y puerto asignado. Añadir Sales, Inventory o HR no toca el resto del sistema.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
      />
    ),
  },
  {
    delay: 250,
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    title: "Docker First",
    description:
      "Build multi-stage, usuario non-root y red compartida erp-platform. Toda la plataforma arranca con un solo comando. Sin instalaciones manuales, sin estado local.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6"
      />
    ),
  },
  {
    delay: 350,
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    title: "CI/CD Integrado",
    description:
      "GitHub Actions en cada pull request: setup de JDK 21, build Maven y ejecución de tests. Cada módulo tiene su propio pipeline. Sin configuración extra.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function FeaturesPlanet() {
  return (
    <section id="soluciones" className="bg-black/30 px-8 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16" data-aos="fade-up">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
            Por qué este ERP es diferente
          </span>
          <h2 className="mb-4 text-3xl font-bold">Pilares del proyecto</h2>
          <div className="h-1 w-20 bg-orange-600" />
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-white/5 bg-[#161625] p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500"
              data-aos="fade-up"
              data-aos-delay={f.delay}
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${f.iconBg}`}
              >
                <svg
                  className={`h-6 w-6 ${f.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}