import Image from "next/image";
import BookingForm from "@/components/booking-form";

const whatsappUrl =
  "https://wa.me/5491126545255?text=Hola%20Essere%20Est%C3%A9tica%2C%20quiero%20hacer%20una%20consulta.";

const services = [
  {
    number: "01",
    title: "Depilación definitiva",
    description:
      "Sesiones orientadas a reducir el vello de forma progresiva, con seguimiento por zona y tipo de piel."
  },
  {
    number: "02",
    title: "Estética corporal",
    description:
      "Protocolos corporales adaptados a objetivos estéticos, tonificación, modelado y bienestar general."
  },
  {
    number: "03",
    title: "Electrodos",
    description:
      "Trabajo localizado con tecnología de electroestimulación para complementar planes corporales."
  },
  {
    number: "04",
    title: "Personal trainers",
    description:
      "Acompañamiento físico personalizado para crear hábitos, ganar fuerza y sostener resultados."
  }
];

const highlights = [
  {
    title: "Plan",
    description: "Objetivos claros desde la primera consulta."
  },
  {
    title: "Seguimiento",
    description: "Registro de avances y ajustes por evolución."
  },
  {
    title: "Bienestar",
    description: "Experiencia cómoda, cuidada y sin apuros."
  }
];

const testimonials = [
  {
    name: "Camila R.",
    treatment: "Depilación definitiva",
    quote:
      "Me sentí cómoda desde la primera consulta. Me explicaron el proceso con claridad y pude organizar las sesiones según mis horarios."
  },
  {
    name: "Florencia M.",
    treatment: "Estética corporal",
    quote:
      "El seguimiento fue muy cercano. Me gustó que no fuera un tratamiento suelto, sino un plan pensado para mi rutina."
  },
  {
    name: "Julieta S.",
    treatment: "Electrodos",
    quote:
      "El espacio es tranquilo, prolijo y la atención se siente personalizada. Eso para mí hizo toda la diferencia."
  }
];

const certifications = [
  "Formación en estética corporal integral",
  "Capacitación en aparatología estética y electroestimulación",
  "Especialización en protocolos de depilación definitiva",
  "Actualización en atención, higiene y seguridad del paciente"
];

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#turnos", label: "Turnos" },
  { href: "#contacto", label: "Contacto" }
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Essere Estética">
          <span className="brand-mark">E</span>
          <span>
            <strong>Essere</strong>
            <small>Estética</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <Image
            className="hero-image"
            src="/images/hero-clinica.png"
            alt="Interior moderno y luminoso de un centro de estética"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Estética integral familiar</p>
            <h1>Essere Estética</h1>
            <p className="hero-copy">
              Tratamientos corporales, depilación definitiva y bienestar físico con una atención cercana,
              profesional y pensada para acompañarte en cada etapa.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#turnos">
                Solicitar turno
              </a>
              <a className="button button-secondary" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        <section className="intro section-band" aria-labelledby="intro-title">
          <div className="section-inner intro-grid">
            <div>
              <p className="eyebrow">Cuidado, constancia y resultados</p>
              <h2 id="intro-title">Un espacio para sentirte bien en tu piel.</h2>
            </div>
            <p>
              Combinamos tecnología estética, rutinas corporales y acompañamiento personalizado para que cada
              tratamiento tenga un plan claro, realista y sostenible.
            </p>
          </div>
        </section>

        <section className="services section-inner" id="servicios" aria-labelledby="services-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Servicios principales</p>
              <h2 id="services-title">Tratamientos para objetivos reales</h2>
            </div>
            <p>
              Esta primera versión deja preparado el catálogo para sumar detalle, duración, sesiones sugeridas
              y precios.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-band" id="experiencia" aria-labelledby="experience-title">
          <div className="section-inner experience-grid">
            <div className="experience-copy">
              <p className="eyebrow">Método Essere</p>
              <h2 id="experience-title">Atención cercana con criterio profesional</h2>
              <p>
                Antes de iniciar, buscamos entender tus objetivos, disponibilidad y preferencias. Así podemos
                sugerir una frecuencia posible y combinar tratamientos cuando tiene sentido hacerlo.
              </p>
            </div>
            <div className="metric-list" aria-label="Puntos destacados">
              {highlights.map((highlight) => (
                <div key={highlight.title}>
                  <strong>{highlight.title}</strong>
                  <span>{highlight.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-inner" id="sobre-mi" aria-labelledby="about-title">
          <div className="about-card">
            <div className="about-portrait" aria-hidden="true">
              <span>E</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">Sobre mí</p>
              <h2 id="about-title">Acompañamiento estético con mirada integral</h2>
              <p>
                Soy la profesional a cargo de Essere Estética. Mi trabajo combina técnica, escucha y seguimiento
                personalizado para que cada persona pueda iniciar un tratamiento con información clara, expectativas
                realistas y una experiencia cuidada.
              </p>
              <p>
                Esta sección está cargada con información de prueba para validar el diseño. Más adelante podemos
                reemplazarla por biografía, matrícula, títulos reales, fotos y certificaciones verificadas.
              </p>
            </div>
            <div className="certification-list" aria-label="Títulos y certificaciones de ejemplo">
              {certifications.map((certification) => (
                <span key={certification}>{certification}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section-band" id="testimonios" aria-labelledby="testimonials-title">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Testimonios</p>
                <h2 id="testimonials-title">Experiencias de prueba para presentar el servicio</h2>
              </div>
              <p>
                Estos comentarios son textos de maqueta para visualizar la sección. Luego los reemplazamos por
                testimonios reales de clientes.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <p>“{testimonial.quote}”</p>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.treatment}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking section-inner" id="turnos" aria-labelledby="booking-title">
          <div className="booking-copy">
            <p className="eyebrow">Solicitud de turnos</p>
            <h2 id="booking-title">Contanos cuándo te queda cómodo venir</h2>
            <p>
              Dejanos tus datos y tu franja horaria preferida. Cuando sumemos el catálogo, este formulario va
              a permitir seleccionar tratamientos específicos.
            </p>
          </div>

          <BookingForm />
        </section>
      </main>

      <footer className="site-footer" id="contacto">
        <div className="section-inner footer-grid">
          <div>
            <a className="brand footer-brand" href="#inicio" aria-label="Essere Estética">
              <span className="brand-mark">E</span>
              <span>
                <strong>Essere</strong>
                <small>Estética</small>
              </span>
            </a>
            <p>Estética corporal, depilación definitiva y entrenamiento personalizado.</p>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href="mailto:turnos@essereestetica.com">turnos@essereestetica.com</a>
            <a href="#turnos">Solicitar turno online</a>
          </div>
          <div>
            <strong>Horarios</strong>
            <span>Lunes a sábados</span>
            <span>Mañana, mediodía y tarde</span>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
      >
        <span>WhatsApp</span>
      </a>
    </>
  );
}
