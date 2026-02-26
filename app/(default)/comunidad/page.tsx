import Image from "next/image";

export const revalidate = 3600; // refresca stats cada hora

export const metadata = {
  title: "Comunidad | Wuan ERP",
  description:
    "Únete a la comunidad de WUAN-ERP. Colabora, aprende y construye junto a desarrolladores de todo el mundo.",
};

// ─── GitHub API ───────────────────────────────────────────────────────────────

interface GHRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
}

interface GHContributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

function fmt(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
  return String(n);
}

async function getGitHubStats() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  try {
    // 1. Todos los repos públicos de la org
    const reposRes = await fetch(
      "https://api.github.com/orgs/ErpOpenSource/repos?per_page=100&type=public",
      { headers, next: { revalidate: 3600 } },
    );
    const repos: GHRepo[] = reposRes.ok ? await reposRes.json() : [];

    const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
    const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);
    const repoCount = repos.length;

    // 2. Repo principal (más stars)
    const mainRepo = [...repos].sort(
      (a, b) => b.stargazers_count - a.stargazers_count,
    )[0];

    // 3. Contribuidores del repo principal
    let contributors: GHContributor[] = [];
    let totalContributors = 0;

    if (mainRepo) {
      const contribRes = await fetch(
        `https://api.github.com/repos/ErpOpenSource/${mainRepo.name}/contributors?per_page=50&anon=false`,
        { headers, next: { revalidate: 3600 } },
      );
      if (contribRes.ok) {
        contributors = await contribRes.json();
        totalContributors = contributors.length;
      }
    }

    return {
      stars: totalStars,
      forks: totalForks,
      repoCount,
      contributors: contributors.slice(0, 14),
      extraContributors: Math.max(0, totalContributors - 14),
    };
  } catch {
    return {
      stars: 0,
      forks: 0,
      repoCount: 0,
      contributors: [],
      extraContributors: 0,
    };
  }
}

// ─── Static data ──────────────────────────────────────────────────────────────

const channels = [
  {
    delay: 100,
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
    title: "Discord",
    description:
      "Chatea en tiempo real con otros desarrolladores, resuelve dudas y comparte tus avances en nuestros canales temáticos.",
    cta: "Unirse al servidor",
    href: "#",
    icon: (
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    ),
  },
  {
    delay: 200,
    iconBg: "bg-gray-500/20",
    iconColor: "text-gray-300",
    title: "GitHub",
    description:
      "Reporta bugs, propone mejoras y envía pull requests. Todo el código está abierto y esperando tu contribución.",
    cta: "Ver organización",
    href: "https://github.com/ErpOpenSource",
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
  },
  {
    delay: 300,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
    title: "Foro de discusión",
    description:
      "Comparte ideas, tutoriales y preguntas en nuestro foro. Un espacio asíncrono para debates más profundos.",
    cta: "Ir al foro",
    href: "#",
    icon: (
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Haz Fork del repositorio",
    description:
      "Clona el repositorio principal en tu cuenta de GitHub y configura el entorno local con Docker Compose.",
  },
  {
    number: "02",
    title: "Elige una tarea",
    description:
      "Revisa los issues etiquetados como `good first issue` o `help wanted` y comenta cuál quieres trabajar.",
  },
  {
    number: "03",
    title: "Desarrolla y prueba",
    description:
      "Crea tu rama feature, desarrolla el cambio, asegúrate de que pasan los tests y sigue la guía de estilo.",
  },
  {
    number: "04",
    title: "Envía tu Pull Request",
    description:
      "Abre un PR con descripción clara. El equipo lo revisará y te dará feedback en menos de 48 horas.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ComunidadPage() {
  const { stars, forks, repoCount, contributors, extraContributors } =
    await getGitHubStats();

  const stats = [
    { value: fmt(contributors.length + extraContributors) || "—", label: "Contribuidores" },
    { value: fmt(stars) || "—", label: "GitHub Stars" },
    { value: fmt(forks) || "—", label: "Forks" },
    { value: String(repoCount) || "—", label: "Repositorios" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 107, 26, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="px-8 pb-20 pt-24">
        <div className="mx-auto max-w-7xl text-center">
          <span
            className="mb-6 inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500"
            data-aos="fade-up"
          >
            Comunidad
          </span>
          <h1
            className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Construido por personas,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B1A, #ff9a56)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              para personas.
            </span>
          </h1>
          <p
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            WUAN-ERP crece gracias a una comunidad global de desarrolladores,
            diseñadores y empresas que creen en el software libre. Únete y forma
            parte del cambio.
          </p>

          {/* Stats — datos reales de GitHub */}
          <div
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/5 bg-[#161625] p-6"
              >
                <div className="mb-1 text-3xl font-extrabold text-orange-500">
                  {s.value}
                </div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="bg-black/30 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Espacios de colaboración
            </span>
            <h2 className="mb-4 text-3xl font-bold">
              Encuentra tu canal ideal
            </h2>
            <div className="h-1 w-20 bg-orange-600" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {channels.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/5 bg-[#161625] p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500"
                data-aos="fade-up"
                data-aos-delay={c.delay}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg}`}
                >
                  <svg
                    className={`h-6 w-6 ${c.iconColor}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {c.icon}
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold">{c.title}</h3>
                <p className="mb-8 text-sm leading-relaxed text-gray-400">
                  {c.description}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-400"
                >
                  {c.cta}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 0m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to contribute */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Guía rápida
            </span>
            <h2 className="mb-4 text-3xl font-bold">Cómo contribuir</h2>
            <div className="h-1 w-20 bg-orange-600" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="mb-4 text-5xl font-extrabold text-orange-500/20">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-8 bg-orange-500/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors — avatares reales de GitHub */}
      <section className="bg-black/30 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Nuestros héroes
            </span>
            <h2 className="mb-4 text-3xl font-bold">Contribuidores activos</h2>
            <div className="mx-auto h-1 w-20 bg-orange-600" />
          </div>

          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {contributors.map((c) => (
              <a
                key={c.login}
                href={c.html_url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${c.login} — ${c.contributions} contribuciones`}
                className="group relative"
              >
                <Image
                  src={c.avatar_url}
                  alt={c.login}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full ring-2 ring-transparent transition duration-200 group-hover:ring-orange-500"
                />
                {/* tooltip username */}
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-0.5 text-[10px] text-gray-300 opacity-0 transition group-hover:opacity-100">
                  {c.login}
                </span>
              </a>
            ))}

            {extraContributors > 0 && (
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/20 text-xs text-gray-500 transition hover:border-orange-500 hover:text-orange-500">
                +{extraContributors}
              </div>
            )}
          </div>

          <div
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://github.com/ErpOpenSource"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-[0_10px_30px_rgba(255,107,26,0.3)]"
            >
              Unirse como contribuidor
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
