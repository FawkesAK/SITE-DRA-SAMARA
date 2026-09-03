import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Aperture, Eye, Glasses, Layers } from "lucide-react";
import { site } from "@/content/site";
import { imageUrl } from "@/content/images";
import {
  AuthorityMetrics,
  CTAButton,
  Figure,
  Reveal,
  Section,
  SectionHeader,
  SpecialtyCard,
} from "@/components/site/blocks";
import { ScienceCards } from "@/components/site/science";
import { Depoimentos } from "@/components/site/depoimentos";
import { InstagramStrip } from "@/components/site/instagram";
import { ParallaxImage } from "@/components/site/parallax";

/**
 * Rola até uma seção da Home e só então executa `onArrived` — usado pelos
 * CTAs que precisam abrir o modal "Formação médica" depois de posicionar a
 * seção "Ciência que chega à consulta". Usa o evento nativo `scrollend`
 * (o sinal mais confiável de que a animação de scroll terminou) com um
 * timeout de segurança como fallback para navegadores sem suporte.
 */
function scrollToSectionThenRun(sectionId: string, onArrived: () => void) {
  const el = document.getElementById(sectionId);
  if (!el) {
    onArrived();
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    el.scrollIntoView({ behavior: "auto", block: "start" });
    onArrived();
    return;
  }

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    window.removeEventListener("scrollend", finish);
    window.clearTimeout(fallbackId);
    onArrived();
  };
  const fallbackId = window.setTimeout(finish, 900);
  if ("onscrollend" in window) {
    window.addEventListener("scrollend", finish, { once: true });
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Samara Marafon | Oftalmologista em Porto Alegre" },
      {
        name: "description",
        content:
          "Oftalmologista em Porto Alegre, professora da UFRGS e chefe do Setor de Córnea do HCPA. Córnea, catarata, lentes intraoculares e cirurgia refrativa.",
      },
      { property: "og:title", content: "Dra. Samara Marafon | Oftalmologista em Porto Alegre" },
      {
        property: "og:description",
        content:
          "Sua visão cuidada por quem também ensina. Córnea, catarata e correção do grau em Porto Alegre.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const areas = [
  {
    title: "Córnea",
    text: "Ceratocone, doenças da superfície ocular, olho seco e alterações que exigem investigação especializada.",
    cta: "Saiba mais",
    to: "/cornea",
    file: "home_05_card_cornea.jpg",
    imgClassName: "object-center",
    icon: Eye,
  },
  {
    title: "Catarata",
    text: "Diagnóstico, avaliação do momento certo para operar e escolha da melhor lente intraocular de acordo com as necessidades visuais de cada paciente.",
    cta: "Entenda a cirurgia",
    to: "/catarata",
    file: "home_06_card_catarata.jpg",
    imgClassName: "object-center",
    highlight: true,
    icon: Aperture,
  },
  {
    title: "Cirurgia refrativa",
    text: "Avaliação das possibilidades de reduzir a dependência dos óculos por meio da cirurgia refrativa ou da cirurgia de catarata, quando indicada.",
    cta: "Conheça as possibilidades",
    to: "/cirurgia-refrativa",
    file: "home_07_card_correcao_grau.jpg",
    imgClassName: "object-[center_40%]",
    icon: Glasses,
  },
  {
    title: "Transplante de córnea",
    text: "Avaliação, acompanhamento e diferentes técnicas de transplante conforme a estrutura comprometida.",
    cta: "Saiba mais",
    to: "/cornea",
    hash: "transplante",
    file: "home_08_card_transplante.jpg",
    imgClassName: "object-center",
    icon: Layers,
  },
];

/**
 * "Biblioteca da Córnea" — cards em formato de pasta (aba "+ Explorar" no topo)
 * para os conteúdos educativos sobre doenças da córnea. Fotos macro de olho
 * (placeholder "INSERIR" até chegarem os arquivos reais). Ambos apontam para
 * a página /cornea.
 */
const biblioteca = [
  {
    titulo: "Ceratocone",
    file: "biblioteca_01_ceratocone.jpg",
    alt: "Foto macro de um olho — conteúdo sobre ceratocone",
    to: "/cornea",
  },
  {
    titulo: "Distrofias",
    file: "biblioteca_02_distrofias.jpg",
    alt: "Foto macro de um olho — conteúdo sobre distrofias da córnea",
    to: "/cornea",
  },
  {
    titulo: "Olho seco",
    file: "biblioteca_03_olho_seco.jpg",
    alt: "Foto macro de um olho — conteúdo sobre olho seco",
    to: "/cornea",
  },
];

function Home() {
  const heroPhoto = imageUrl("home_01_hero_dra_samara.jpg");
  const [scienceActiveId, setScienceActiveId] = useState<string | null>(null);
  const scienceTriggerRef = useRef<HTMLElement | null>(null);

  /**
   * Fonte única de verdade para abrir qualquer modal da seção "Ciência que
   * chega à consulta" — usada pelo próprio card e pelos CTAs externos, para
   * nunca haver uma segunda implementação/estado do mesmo modal. Guarda o
   * elemento que originou a abertura para restaurar o foco ao fechar (ver
   * `onCloseAutoFocus` em `ScienceCards`).
   */
  const openScienceModal = (id: string) => {
    setScienceActiveId(id);
  };
  const openFormacaoMedica = () => {
    scienceTriggerRef.current = document.activeElement as HTMLElement | null;
    openScienceModal("formacao-medica");
  };
  const scrollToScienceAndOpen = () => {
    scienceTriggerRef.current = document.activeElement as HTMLElement | null;
    scrollToSectionThenRun("formacoes", () => openScienceModal("formacao-medica"));
  };

  return (
    <>
      {/* 01 — Hero
          Mesma lógica em todas as larguras: foto full-bleed (absolute inset-0)
          com o texto sobreposto em faixa absoluta à esquerda — nunca empilha.
          Só a altura do container, a largura da faixa de texto, a tipografia
          e o object-position da foto mudam por breakpoint.
          Adaptado à identidade da Dra. Samara (terracota, tokens em styles.css):
          credencial no lugar do eyebrow, título bicolor (trechos em `text-primary`),
          dois CTAs empilhados, "feather" na borda esquerda da foto e faixa
          diagonal (`bg-gold` + `bg-primary`) no rodapé como transição. */}
      <section id="inicio" className="texture-paper relative overflow-hidden bg-background">
        <div className="relative mx-auto mt-[4.25rem] min-h-[clamp(560px,158vw,620px)] w-full max-w-[1920px] sm:mt-[4.5rem] sm:min-h-[clamp(520px,72vw,580px)] lg:aspect-[1.85/1] lg:min-h-[660px] lg:max-h-[calc(100svh+14rem)]">
          <Reveal className="absolute inset-y-0 left-0 z-10 flex w-[66%] flex-col justify-center px-4 py-6 sm:w-[58%] sm:px-6 lg:left-[clamp(64px,10vw,170px)] lg:top-1/2 lg:h-auto lg:w-[34%] lg:max-w-[480px] lg:min-w-[380px] lg:-translate-y-1/2 lg:px-0 lg:py-0 xl:top-[14.8%] xl:bottom-auto xl:max-w-[540px] xl:-mt-[2.25rem] xl:translate-y-0">
            <p className="eyebrow flex flex-wrap items-center gap-x-8 gap-y-1 text-[0.6rem] leading-snug text-muted-foreground sm:gap-x-10 sm:text-[0.65rem] lg:text-[0.7rem]">
              <span>CRM-RS 37669&nbsp;&nbsp;|&nbsp;&nbsp;RQE 29525</span>
              <span>Porto Alegre - RS</span>
            </p>
            <h1 className="mt-3 text-[clamp(1.6rem,6vw,2.4rem)] font-normal leading-[1.03] tracking-[-0.01em] sm:mt-4 sm:text-[clamp(2rem,4.4vw,2.75rem)] lg:mt-5 lg:text-[clamp(2.35rem,3.5vw,2.9rem)] lg:leading-[1.05] xl:text-[clamp(2.9rem,3vw,3.7rem)] xl:leading-[1]">
              Quando a córnea
              <br className="hidden lg:block" />{" "}
              <span className="text-primary">perde a transparência,</span>
              <br className="hidden lg:block" />{" "}
              enxergar deixa de
              <br className="hidden lg:block" />{" "}
              <span className="text-primary">ser simples.</span>
            </h1>
            <span
              aria-hidden="true"
              className="mt-4 block h-px w-12 bg-primary sm:mt-5 lg:mt-6 lg:w-14"
            />
            <p className="mt-3 text-[0.78rem] leading-[1.5] text-muted-foreground sm:mt-4 sm:text-[0.85rem] lg:mt-5 lg:max-w-[430px] lg:text-[0.98rem] lg:leading-[1.6]">
              Especialista em córnea, catarata e cirurgia refrativa, com atuação no
              diagnóstico e tratamento das doenças corneanas.
            </p>
            <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 lg:mt-8">
              <CTAButton
                href={site.whatsappUrl}
                className="h-11 rounded-md bg-primary px-7 text-[0.8rem] shadow-none hover:bg-[var(--primary-deep)] sm:h-12 sm:px-8 sm:text-[0.88rem]"
              >
                Agendar consulta
              </CTAButton>
              <CTAButton
                to="/"
                hash="especialidades"
                variant="secondary"
                className="h-11 rounded-md border-primary/45 px-7 text-[0.8rem] text-primary hover:border-primary hover:bg-primary/[0.06] sm:h-12 sm:px-8 sm:text-[0.88rem]"
              >
                Conheça as doenças da córnea
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="absolute inset-0 z-0">
            {heroPhoto ? (
              <img
                src={heroPhoto}
                alt="Dra. Samara Marafon em seu consultório de oftalmologia em Porto Alegre"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-[58%_center] sm:object-[68%_center] lg:object-[72%_center]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                <span className="optic-ring block h-8 w-8 rotate-45" aria-hidden="true" />
                <span className="eyebrow text-gold">Inserir</span>
                <span className="max-w-full truncate font-mono text-[11px] text-muted-foreground">
                  home_01_hero_dra_samara.jpg
                </span>
              </div>
            )}
            {/* Feather: funde a borda esquerda da foto com o fundo, como na referência. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, var(--background) 0%, color-mix(in srgb, var(--background) 72%, transparent) 34%, transparent 64%)",
              }}
            />
          </Reveal>

          {/* Faixa diagonal terracota no rodapé do hero — transição para a seção seguinte. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
            <div
              className="h-7 w-full bg-gold sm:h-9 lg:h-12"
              style={{ clipPath: "polygon(0 55%, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div className="h-2.5 w-full bg-primary sm:h-3" />
          </div>
        </div>
      </section>

      {/* 02 — Quando procurar um especialista em córnea
          Faixa terracota (tone="primary") na mesma linguagem da hero: fundo
          primário, texto creme. Título centralizado; no desktop, foto à esquerda
          e lista de "pílulas" com falas do paciente à direita — empilha no
          mobile (foto → lista). Rodapé com faixa diagonal (caramelo + areia)
          como transição para a seção seguinte, espelhando a faixa da hero.
          id="sobre" mantido (é a âncora do menu "Sobre"). */}
      <Section
        id="sobre"
        tone="primary"
        className="overflow-hidden py-16 pb-28 md:py-24 md:pb-36"
      >
        <SectionHeader
          title="Quando procurar um especialista em córnea"
          align="center"
          invert
          titleClassName="text-[1.9rem] leading-[1.15] sm:text-[2.2rem] md:text-[2.5rem]"
        />

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.82fr_1fr] lg:items-stretch lg:gap-14">
          <Reveal variant="image" className="lg:h-full">
            <Figure
              file="home_02_quando_procurar.jpg"
              alt="Dra. Samara Marafon durante avaliação no consultório"
              ratio="4/3.4"
              priority
              className="h-full rounded-2xl"
              imgClassName="object-[45%_center]"
            />
          </Reveal>

          <ul className="space-y-2.5 sm:space-y-3 lg:flex lg:h-full lg:flex-col lg:justify-between lg:space-y-0">
            {[
              "Minha visão ficou embaçada ou mudou de repente.",
              "Meus olhos vivem secos, irritados ou ardendo.",
              "Sinto dor ou desconforto ao usar lentes de contato.",
              "Recebi o diagnóstico de ceratocone.",
              "Disseram que tenho uma cicatriz na córnea.",
              "Disseram que posso precisar de um transplante de córnea.",
              "Quero reduzir minha dependência dos óculos.",
            ].map((frase, i) => (
              <Reveal
                key={frase}
                as="li"
                delay={i * 60}
                className="rounded-xl border border-[var(--primary-foreground)]/15 bg-[var(--primary-foreground)]/[0.07] px-5 py-3.5 text-[0.9rem] leading-snug text-[var(--primary-foreground)]/90 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--primary-foreground)]/35 hover:bg-[var(--primary-foreground)]/[0.14] hover:shadow-[var(--shadow-lift)] active:scale-[0.99] sm:text-[0.95rem]"
              >
                {frase}
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* 03 — Uma carreira dedicada à córnea
          Geometria da 1ª referência (desktop): fundo off-white liso (sem textura);
          coluna de texto começando em ~15% da largura da tela, ~27% de largura,
          centrada na vertical; foto começando em ~48% (folga entre texto e foto),
          sangrando até a borda direita, grande e horizontal, centrada na vertical
          com margem clara acima e abaixo — não ocupa a seção inteira. Mobile:
          texto → foto em fluxo. <section> cru para o posicionamento por % da
          viewport. id="especialidades" mantido (âncora do menu). */}
      <section
        id="especialidades"
        className="relative overflow-hidden bg-background text-foreground"
      >
        <div className="relative px-5 py-16 sm:px-8 md:py-20 lg:flex lg:items-center lg:px-0 lg:py-16 lg:min-h-[100svh]">
          {/* Coluna de texto — flui no mobile; no desktop começa em ~15%, ~30% de
              largura e fica centrada na vertical (alinhada à altura da foto) */}
          <div className="lg:ml-[15%] lg:w-[30%] lg:shrink-0">
            <Reveal>
              <h2 className="text-[clamp(1.85rem,5.8vw,2.2rem)] leading-[1.12] tracking-[-0.01em] sm:text-[2.45rem] md:text-[2.9rem] lg:text-[clamp(2.6rem,3.6vw,3.8rem)] lg:leading-[1.08]">
                <span className="text-[#4a3629]">Uma carreira</span>
                <br />
                <span className="text-primary">dedicada à córnea.</span>
              </h2>
            </Reveal>

            <Reveal
              delay={80}
              className="mt-6 space-y-5 text-justify text-[0.82rem] leading-[1.7] text-[#7d6858] sm:mt-7 sm:space-y-6 sm:text-[0.86rem] lg:mt-7 lg:space-y-6 lg:text-[1rem] lg:leading-[1.75]"
            >
              <p>
                Algumas áreas da oftalmologia exigem uma dedicação integral.{" "}
                <strong className="font-semibold text-[var(--primary-deep)] underline decoration-[var(--primary-deep)]/40 underline-offset-4">
                  A córnea
                </strong>{" "}
                está entre elas.
              </p>
              <p>
                Foi essa escolha que levou a{" "}
                <strong className="font-semibold text-[var(--primary-deep)]">Dra. Samara Marafon</strong> a
                dedicar sua carreira ao diagnóstico, tratamento e cirurgia das doenças corneanas.
              </p>
              <p>
                Sua <strong className="font-semibold text-[var(--primary-deep)]">formação</strong> inclui
                residência médica, fellowship em córnea, catarata e cirurgia refrativa, mestrado,
                aperfeiçoamento internacional e participação na formação de novos especialistas.
              </p>
              <p>
                Hoje, une a{" "}
                <strong className="font-semibold text-[var(--primary-deep)]">experiência</strong> do
                consultório, do centro cirúrgico, da pesquisa e da formação de novos especialistas
                para oferecer um cuidado individualizado, baseado em conhecimento científico e
                experiência prática.
              </p>
            </Reveal>

            <ul className="mt-8 flex flex-wrap gap-1.5 sm:mt-9 lg:mt-10 lg:gap-2 xl:flex-nowrap xl:gap-2.5">
              {["Atendimento Clínico", "Cirurgia", "Pesquisa", "Ensino"].map((tag, i) => (
                <Reveal
                  key={tag}
                  as="li"
                  delay={120 + i * 50}
                  className="whitespace-nowrap rounded border border-[var(--gold)]/45 bg-[var(--gold)]/[0.18] px-2.5 py-1 text-[0.7rem] font-medium text-[var(--primary-deep)] shadow-sm transition-colors duration-200 hover:bg-[var(--gold)]/30 lg:px-2 lg:py-1.5 lg:text-[0.82rem] xl:flex-auto xl:text-center"
                >
                  {tag}
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Foto — mobile / tablet: em fluxo, abaixo do texto (grande e horizontal) */}
          <Reveal variant="image" className="mt-10 lg:hidden">
            <Figure
              file="home_03_carreira_cornea.jpg"
              alt="Dra. Samara Marafon, oftalmologista especialista em córnea, em seu consultório"
              ratio="3/2"
              priority
              className="rounded-2xl"
              imgClassName="object-[46%_top]"
            />
          </Reveal>

          {/* Foto — desktop: começa em ~52% (folga confortável da coluna de texto),
              sangra à direita, grande, centrada na vertical com o mesmo espaço
              acima e abaixo. Altura acompanha a viewport (~74svh) sem ocupar a
              seção toda. */}
          <Reveal
            variant="image"
            className="absolute left-[52%] right-0 top-1/2 hidden h-[74svh] max-h-[720px] -translate-y-1/2 lg:block"
          >
            {imageUrl("home_03_carreira_cornea.jpg") ? (
              <img
                src={imageUrl("home_03_carreira_cornea.jpg")}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                className="h-full w-full rounded-l-2xl object-cover object-[46%_top]"
              />
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* 04 — Depoimentos (estilo Doctoralia)
          Fundo claro liso (mesmo tom das seções anteriores). À esquerda o título
          serif bicolor ("meus pacientes" em itálico + terracota) e o botão
          "Ver mais no Doctoralia"; à direita o carrossel de avaliações (2 páginas
          de 3 cards). A margem direita dos cards = a margem esquerda do texto
          (15%). Empilha no mobile (título → carrossel).
          id="catarata" mantido (âncora do menu). */}
      <section
        id="catarata"
        className="relative overflow-hidden bg-background py-16 text-foreground md:py-24"
      >
        <div className="px-5 sm:px-8 lg:flex lg:items-center lg:gap-12 lg:px-0">
          <div className="lg:ml-[15%] lg:w-[26%] lg:shrink-0">
            <Reveal>
              <h2 className="text-[clamp(1.9rem,5.8vw,2.3rem)] leading-[1.14] tracking-[-0.01em] sm:text-[2.4rem] md:text-[2.7rem] lg:text-[clamp(2.4rem,3.2vw,3.2rem)] lg:leading-[1.1]">
                <span className="text-[#4a3629]">Veja o que</span>
                <br />
                <span className="italic text-primary">meus pacientes</span>
                <br />
                <span className="text-[#4a3629]">têm a dizer:</span>
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-7 lg:mt-9">
              <CTAButton
                href="https://www.doctoralia.com.br/samara-b-marafon/oftalmologista/porto-alegre#profile-reviews"
                className="rounded-md bg-primary px-6 text-[0.82rem] shadow-none hover:bg-[var(--primary-deep)]"
              >
                Ver mais no Doctoralia
              </CTAButton>
            </Reveal>
          </div>

          <div className="mt-10 min-w-0 flex-1 lg:mr-[15%] lg:mt-0">
            <Depoimentos />
          </div>
        </div>
      </section>

      {/* 05 — Biblioteca da Córnea
          Título + subtítulo centralizados; dois cards em formato "pasta" (aba
          "+ Explorar" no topo) com foto macro de olho e o nome do tema.
          id="formacoes" mantido (âncora do menu "Formações"). */}
      <Section id="formacoes" tone="paper" className="py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.9rem,5.8vw,2.3rem)] leading-[1.14] tracking-[-0.01em] sm:text-[2.4rem] md:text-[2.7rem] lg:text-[clamp(2.4rem,3.2vw,3.2rem)] lg:leading-[1.1]">
            <span className="text-[#4a3629]">Biblioteca da </span>
            <span className="text-primary">Córnea</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.9rem] leading-[1.7] text-[#7d6858] sm:text-[0.95rem] lg:text-[1.02rem]">
            Conteúdos claros e baseados em evidência sobre as principais doenças da
            córnea e seus tratamentos.
          </p>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-[1160px] gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-16">
          {biblioteca.map((item, i) => (
            <Reveal as="li" key={item.titulo} delay={i * 90}>
              <Link
                to={item.to}
                className="group relative block pr-[11px] pt-[46px] drop-shadow-[0_18px_30px_-20px_rgba(80,40,25,0.6)] transition-transform duration-[450ms] ease-out hover:-translate-y-1"
              >
                {/* corpo/aba da pasta (fundo) — mesma silhueta do ícone: aba
                    curva à esquerda, cantos arredondados, leve gradiente. */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 340 340"
                  preserveAspectRatio="none"
                  className="absolute inset-0 -z-10 h-full w-full"
                >
                  <defs>
                    <linearGradient id={`pasta-fundo-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary-deep)" />
                      <stop offset="100%" stopColor="var(--primary)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,24 Q0,8 16,8 L104,8 Q118,8 125,20 L134,32 Q140,40 156,40 L324,40 Q340,40 340,56 L340,324 Q340,340 324,340 L16,340 Q0,340 0,324 Z"
                    fill={`url(#pasta-fundo-${i})`}
                    className="transition-opacity duration-300 group-hover:opacity-90"
                  />
                </svg>

                {/* rótulo na aba */}
                <span className="absolute left-[22px] top-[14px] z-10 flex items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[var(--primary-foreground)]">
                  <span aria-hidden="true" className="text-[0.8rem] leading-none">
                    +
                  </span>
                  Explorar
                </span>

                {/* folha da frente — tom mais claro, cantos arredondados,
                    guarda a foto e o rótulo */}
                <div className="relative rounded-[13px] bg-primary p-1.5 shadow-[0_2px_14px_-6px_rgba(80,40,25,0.4),inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[color-mix(in_oklab,var(--primary)_90%,black)]">
                  <Figure
                    file={item.file}
                    alt={item.alt}
                    ratio="4/3"
                    className="rounded-[9px] border-0"
                  />
                  <div className="px-1.5 pb-3 pt-3.5 text-[var(--primary-foreground)]">
                    <h3 className="font-display text-[1.45rem] leading-tight">
                      {item.titulo}
                    </h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 06 — Continue acompanhando (tira de posts do Instagram)
          Fundo areia. À esquerda a tira horizontal de posts (carrossel, mesmo
          padrão dos Depoimentos: seta à direita + dots); à direita o título
          serif bicolor e o botão contornado "Ver no Instagram". Empilha no
          mobile (título → tira). */}
      <section className="relative overflow-hidden bg-secondary/45 py-16 text-foreground md:py-24">
        <div className="px-5 sm:px-8 lg:flex lg:items-center lg:gap-12 lg:px-0">
          <div className="lg:order-2 lg:ml-10 lg:mr-[10%] lg:w-[26%] lg:shrink-0 lg:-translate-y-3">
            <Reveal>
              <h2 className="text-[clamp(1.9rem,5.8vw,2.3rem)] leading-[1.14] tracking-[-0.01em] sm:text-[2.4rem] md:text-[2.7rem] lg:text-[clamp(2.4rem,3.2vw,3.2rem)] lg:leading-[1.1]">
                <span className="text-[var(--gold)]">Continue acompanhando</span>{" "}
                <span className="text-[#4a3629]">conteúdos sobre</span>{" "}
                <span className="text-primary">saúde ocular.</span>
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-7 lg:mt-9">
              <CTAButton
                href={site.instagramUrl}
                variant="secondary"
                className="rounded-md px-6 text-[0.82rem] shadow-none"
              >
                Ver no Instagram
              </CTAButton>
            </Reveal>
          </div>

          <div className="mt-10 min-w-0 flex-1 lg:order-1 lg:ml-[15%] lg:mt-0">
            <InstagramStrip />
          </div>
        </div>
      </section>

      {/* CTA final — mesma lógica da seção da lente intraocular: mobile e
          desktop são composições irmãs (lg:hidden / hidden lg:flex). No
          mobile a imagem (retrato do olho, vertical, arquivo próprio) vira
          background da própria seção com o mesmo recorte-por-aspect-ratio +
          cor de fundo amostrada no ponto de corte; no desktop mantém-se o
          `FinalCTA` original (foto em paisagem, overlay full-bleed) sem
          nenhuma alteração. */}
      <div id="contato">
        <section
          className="relative overflow-hidden bg-[#605c2f] bg-no-repeat pb-6 pt-0 text-[var(--primary-foreground)] sm:pb-7 md:pb-7 md:pt-0 lg:hidden"
          style={{
            backgroundImage: `url(${imageUrl("home_13b_final_cta_olho_mobile.jpg")})`,
            backgroundPosition: "center top",
            backgroundSize: "100% auto",
          }}
        >
          <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
            <div aria-hidden="true" className="-mx-5 aspect-[941/836] w-[calc(100%+2.5rem)] sm:-mx-8 sm:w-[calc(100%+4rem)]" />

            <Reveal className="pt-3 sm:pt-4">
              <h2 className="text-[clamp(1.4rem,6.2vw,1.95rem)] leading-[1.18] text-[var(--primary-foreground)]">
                Cada visão tem uma história.
              </h2>
              <p className="mt-2.5 max-w-[480px] text-[clamp(0.86rem,3.8vw,0.96rem)] leading-[1.5] text-[var(--primary-foreground)]/75">
                Se você apresenta sintomas relacionados à córnea, recebeu um diagnóstico ou
                deseja avaliar a possibilidade de um tratamento cirúrgico, a consulta é o
                primeiro passo.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7">
                <CTAButton href={site.whatsappUrl} variant="light-solid" className="h-11 px-5 text-[0.92rem]">
                  Agendar consulta
                </CTAButton>
                <CTAButton href={site.whatsappUrl} variant="ghost-light" className="h-11 px-5 text-[0.92rem]">
                  Entrar em contato
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </section>

        <Section
          tone="deep"
          className="relative hidden overflow-hidden py-16 lg:flex lg:min-h-[560px] lg:items-center lg:py-0"
        >
          <ParallaxImage
            file="home_14_cta_consultorio.jpg"
            objectPosition="50% 25%"
            amplitude={13}
          />
          {/* card terracota translúcido — sobreposição necessária para leitura
              do texto sobre a foto clara do consultório */}
          <Reveal className="relative z-10 ml-auto max-w-md rounded-lg bg-[#dcc4bb]/88 p-8 shadow-[var(--shadow-lift)] lg:p-10">
            <h2 className="text-3xl leading-tight text-[#4a3629] sm:text-4xl">
              Cada visão tem uma história.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#7d6858]">
              Se você apresenta sintomas relacionados à córnea, recebeu um diagnóstico ou
              deseja avaliar a possibilidade de um tratamento cirúrgico, a consulta é o
              primeiro passo.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href={site.whatsappUrl} variant="primary">
                Agendar consulta
              </CTAButton>
              <CTAButton href={site.whatsappUrl} variant="light-solid">
                Entrar em contato
              </CTAButton>
            </div>
          </Reveal>
        </Section>
      </div>
      <p className="sr-only">
        Dra. Samara Marafon — oftalmologista em Porto Alegre. Atendimento em {site.clinica}.
      </p>
    </>
  );
}
