export const metadata = {
  title: "Contacto | Wuan ERP",
  description:
    "Contáctanos para dudas, soporte o colaboraciones. Estamos aquí para ayudarte.",
};

const contactInfo = [
  {
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
    title: "Correo electrónico",
    value: "juanfrauca@outlook.com",
    href: "mailto:juanfrauca@outlook.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    iconBg: "bg-gray-500/20",
    iconColor: "text-gray-300",
    title: "GitHub",
    value: "github.com/ErpOpenSource",
    href: "https://github.com/ErpOpenSource",
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
    filled: true,
  },
  {
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
    title: "Discord",
    value: "Servidor de la comunidad",
    href: "#",
    icon: (
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    ),
    filled: true,
  },
];

const faqs = [
  {
    question: "¿WUAN-ERP es completamente gratuito?",
    answer:
      "Sí. WUAN-ERP es software libre licenciado bajo MIT. Puedes descargarlo, modificarlo y desplegarlo sin ningún costo.",
  },
  {
    question: "¿Ofrecen soporte empresarial?",
    answer:
      "Estamos desarrollando planes de soporte premium. Contáctanos para discutir las necesidades de tu empresa y armar una propuesta personalizada.",
  },
  {
    question: "¿Cómo reporto un bug?",
    answer:
      "Abre un issue en nuestro repositorio de GitHub con la mayor cantidad de detalles posible: versión, pasos para reproducir y logs relevantes.",
  },
  {
    question: "¿Puedo usar WUAN-ERP en producción?",
    answer:
      "El proyecto está en desarrollo activo. Recomendamos evaluar cada módulo antes de llevarlo a producción y seguir el changelog de versiones estables.",
  },
];

export default function ContactoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[50vw] w-[50vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 107, 26, 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="px-8 pb-16 pt-24">
        <div className="mx-auto max-w-7xl">
          <span
            className="mb-6 inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500"
            data-aos="fade-up"
          >
            Contacto
          </span>
          <h1
            className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hablemos.
          </h1>
          <p
            className="mb-0 max-w-xl text-lg leading-relaxed text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ya sea que tengas una duda técnica, quieras colaborar o explorar
            una integración empresarial, nuestro equipo está disponible para ti.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Form */}
          <div
            className="rounded-3xl border border-white/5 bg-[#161625] p-10"
            data-aos="fade-right"
          >
            <h2 className="mb-8 text-2xl font-bold">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Asunto
                </label>
                <select className="w-full rounded-xl border border-white/10 bg-[#161625] px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                  <option value="" className="bg-[#161625]">
                    Selecciona un motivo
                  </option>
                  <option value="soporte" className="bg-[#161625]">
                    Soporte técnico
                  </option>
                  <option value="colaboracion" className="bg-[#161625]">
                    Colaboración
                  </option>
                  <option value="empresa" className="bg-[#161625]">
                    Propuesta empresarial
                  </option>
                  <option value="otro" className="bg-[#161625]">
                    Otro
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  placeholder="Cuéntanos más sobre tu consulta..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-600 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-[0_10px_30px_rgba(255,107,26,0.3)]"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8" data-aos="fade-left">
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#161625] p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                  >
                    <svg
                      className={`h-5 w-5 ${item.iconColor}`}
                      fill={item.filled ? "currentColor" : "none"}
                      stroke={item.filled ? "none" : "currentColor"}
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {item.title}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {item.value}
                    </div>
                  </div>
                  <svg
                    className="ml-auto h-4 w-4 text-gray-600"
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
              ))}
            </div>

            {/* Response time */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-green-400">
                  Equipo activo
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Respondemos en menos de <strong className="text-white">48 horas</strong> los días hábiles.
                Para urgencias técnicas, abre un issue directamente en GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black/30 px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center" data-aos="fade-up">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
              Preguntas frecuentes
            </span>
            <h2 className="mb-4 text-3xl font-bold">
              Respuestas rápidas
            </h2>
            <div className="mx-auto h-1 w-20 bg-orange-600" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/5 bg-[#161625] p-8"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="mb-3 font-bold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
