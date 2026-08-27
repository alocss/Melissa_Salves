import Image from "next/image";
import { SiteExperience } from "@/components/SiteExperience";

function ArrowIcon({ direction = "up" }: { direction?: "up" | "down" }) {
  return direction === "down" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path d="M12 4v15m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
  );
}

const treatments = [
  [
    "Harmonização facial",
    "Planejamento definido de forma individual após avaliação.",
  ],
  [
    "Preenchimento com ácido hialurônico",
    "Possibilidades e expectativas discutidas durante a avaliação.",
  ],
  [
    "Toxina botulínica",
    "Indicação e plano definidos conforme objetivos e avaliação.",
  ],
  [
    "Bioestimuladores de colágeno",
    "Protocolo personalizado conforme as necessidades identificadas.",
  ],
  ["Skinbooster", "Procedimento disponível mediante avaliação profissional."],
  ["Microagulhamento", "Procedimento disponível mediante avaliação profissional."],
  [
    "Intradermoterapia",
    "Protocolos faciais e corporais definidos após avaliação.",
  ],
  [
    "Enzimas lipolíticas",
    "Possibilidade de cuidado corporal avaliada individualmente.",
  ],
];
const faq = [
  [
    "Como é definido o melhor procedimento?",
    "A escolha começa por uma avaliação individual. Queixas, objetivos, anatomia e histórico orientam um plano personalizado.",
  ],
  [
    "O resultado precisa mudar minha expressão?",
    "Não. A filosofia apresentada pela Dra. Mel prioriza equilíbrio, naturalidade e respeito aos traços de cada pessoa.",
  ],
  [
    "Onde acontecem os atendimentos?",
    "Há atendimentos em Lauro de Freitas, Salvador, Praia do Forte e Barra do Pojuca. Confirme agenda e endereço pelo WhatsApp.",
  ],
  [
    "Como faço para agendar?",
    "Use o botão de agendamento para conversar diretamente pelo WhatsApp e consultar datas disponíveis.",
  ],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melissa Salves",
    alternateName: "Dra. Mel Salves",
    jobTitle: "Biomédica esteta",
    sameAs: ["https://www.instagram.com/dramelsalves/"],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteExperience />
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Dra. Mel Salves — início"
        >
          <span>MS</span>
          <small>Dra. Mel Salves</small>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#metodo">Método</a>
          <a href="#procedimentos">Procedimentos</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/5571983591398"
          target="_blank"
          rel="noreferrer"
        >
          Agendar avaliação <ArrowIcon />
        </a>
      </header>
      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Precisão para
              <br />
              preservar o que
              <br />
              <em>é só seu.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                Protocolos personalizados, escuta atenta e escolhas seguras para
                resultados que respeitam sua expressão.
              </p>
              <a
                className="text-link"
                href="https://wa.me/5571983591398"
                target="_blank"
                rel="noreferrer"
              >
                Conversar com a Dra. Mel <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <Image
              src="/mel/portrait-hero.jpg"
              alt="Dra. Mel Salves em retrato profissional"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 46vw"
            />
            <div className="portrait-caption">
              <span>Melissa Salves</span>
              <span>Biomédica esteta</span>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            MS
          </div>
          <a className="scroll-cue" href="#metodo">
            Conheça o método <ArrowIcon direction="down" />
          </a>
        </section>
        <section className="manifesto" id="metodo">
        <div>
            <h2>
              Não existe um rosto padrão.
              <br />
              Existe uma leitura cuidadosa.
            </h2>
            <p>
              Antes de qualquer procedimento, há uma conversa. Cada plano nasce
              da escuta, da análise das proporções e do entendimento de
              objetivos reais — sem fórmulas repetidas.
            </p>
          </div>
        </section>
        <section className="method-study" aria-label="Filosofia de atendimento">
          <div className="study-image">
            <Image
              src="/mel/portrait-profile.jpg"
              alt="Retrato editorial da Dra. Mel"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>
          <div className="study-copy">
            <span className="large-letter" aria-hidden="true">
              M
            </span>
            <h2>
              Naturalidade
              <br />
              não é ausência.
              <br />É intenção.
            </h2>
            <p>
              Valorizar sem descaracterizar. Equilibrar sem padronizar. A
              técnica atua a favor da identidade — com ciência, responsabilidade
              e bom senso.
            </p>
            <div className="principles">
              <span>Escuta ativa</span>
              <span>Planejamento individual</span>
              <span>Atualização constante</span>
            </div>
          </div>
        </section>
        <section className="treatments" id="procedimentos">
          <div className="section-head">
            <h2>Procedimentos</h2>
            <p>
              Possibilidades de cuidado organizadas a partir da sua avaliação —
              nunca de uma solução pronta.
            </p>
          </div>
          <div className="treatment-list">
            {treatments.map(([name, text]) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="clinical-note">
            A indicação, contraindicações e expectativas de cada tratamento são
            discutidas durante a avaliação profissional.
          </p>
        </section>
        <section className="journey" aria-labelledby="journey-title">
          <h2 id="journey-title">
            Cuidado que começa
            <br />
            antes do procedimento.
          </h2>
          <ol>
            <li>
              <strong>Escuta</strong>
              <p>
                Entender o que incomoda, o que você deseja e o que faz sentido
                para sua rotina.
              </p>
            </li>
            <li>
              <strong>Leitura facial</strong>
              <p>
                Analisar proporções, movimento, pele e particularidades da sua
                anatomia.
              </p>
            </li>
            <li>
              <strong>Plano individual</strong>
              <p>
                Definir prioridades e protocolos com clareza, segurança e
                expectativas alinhadas.
              </p>
            </li>
            <li>
              <strong>Acompanhamento</strong>
              <p>
                Orientar o pós-procedimento e acompanhar a evolução de cada
                etapa.
              </p>
            </li>
          </ol>
        </section>
        <section className="about" id="sobre">
          <div className="about-collage">
            <div className="about-main">
              <Image
                src="/mel/portrait-about.jpg"
                alt="Dra. Mel Salves em ensaio profissional"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
              />
            </div>
            <div className="about-detail">
              <Image
                src="/mel/portrait-final.webp"
                alt="Dra. Mel Salves de perfil"
                fill
                sizes="30vw"
              />
            </div>
          </div>
          <div className="about-copy">
            <h2>Melissa Salves</h2>
            <p className="about-role">Biomédica esteta</p>
            <p>
              Sou apaixonada por cuidar da autoestima e do bem-estar das
              pessoas. Graduada em Biomedicina, com especialização em estética
              avançada aplicada à saúde.
            </p>
            <p>
              No meu atendimento, você encontra escuta ativa, protocolos
              personalizados e atualização constante — porque cada pessoa é
              única e merece um olhar individualizado.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/dramelsalves/"
              target="_blank"
              rel="noreferrer"
            >
              Acompanhar no Instagram <ArrowIcon />
            </a>
          </div>
        </section>
        <section className="locations">
          <p>Atendimentos em</p>
          <div>
            <span>Lauro de Freitas</span>
            <span>Salvador</span>
            <span>Praia do Forte</span>
            <span>Barra do Pojuca</span>
          </div>
        </section>
        <section className="faq" aria-labelledby="faq-title">
          <div>
            <h2 id="faq-title">
              Antes de
              <br />
              agendar.
            </h2>
            <p>Informação também faz parte de uma escolha segura.</p>
          </div>
          <div className="faq-list">
            {faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="final-cta">
          <div className="cta-photo">
            <Image
              src="/mel/portrait-final.webp"
              alt="Retrato da Dra. Mel Salves"
              fill
              sizes="(max-width: 760px) 100vw, 35vw"
            />
          </div>
          <div>
            <h2>Uma escolha segura começa por uma boa conversa.</h2>
            <p>
              Agende sua avaliação e descubra quais possibilidades realmente
              fazem sentido para você.
            </p>
            <a
              href="https://wa.me/5571983591398"
              target="_blank"
              rel="noreferrer"
            >
              Agendar pelo WhatsApp <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          <span>MS</span>
          <p>
            Dra. Mel Salves
            <br />
            <small>Biomédica esteta</small>
          </p>
        </div>
        <div>
          <p>
            <a href="tel:+5571983591398">(71) 98359-1398</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/dramelsalves/"
              target="_blank"
              rel="noreferrer"
            >
              @dramelsalves
            </a>
          </p>
        </div>
        <div>
          <p>
            Lauro de Freitas · Salvador
            <br />
            Praia do Forte · Barra do Pojuca
          </p>
        </div>
        <small>© {new Date().getFullYear()} Dra. Mel Salves</small>
      </footer>
    </>
  );
}
