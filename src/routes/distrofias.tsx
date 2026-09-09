import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Clock, CalendarDays, ChevronDown } from "lucide-react";
import { CTAButton, Figure, Reveal } from "@/components/site/blocks";
import { ParallaxImage } from "@/components/site/parallax";
import { imageUrl } from "@/content/images";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/distrofias")({
  head: () => ({
    meta: [
      { title: "Distrofias da córnea: tipos, sintomas, diagnóstico e tratamentos | Dra. Samara Marafon" },
      {
        name: "description",
        content:
          "Guia das distrofias da córnea: o que são, principais tipos (Fuchs, membrana basal epitelial, granular, lattice, macular), sintomas, causas genéticas, diagnóstico e tratamentos, de lubrificantes e PTK a transplantes endoteliais (DMEK, DSAEK).",
      },
      { property: "og:title", content: "Guia das Distrofias da Córnea" },
      {
        property: "og:description",
        content:
          "Entenda o que são distrofias da córnea, os principais tipos, sintomas, causas, diagnóstico e tratamentos, incluindo Fuchs e transplantes.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/distrofias" },
    ],
    links: [{ rel: "canonical", href: "/distrofias" }],
  }),
  component: Page,
});

/* ------------------------------ Links WhatsApp ------------------------------ */

const WHATSAPP_AGENDAR = site.whatsappUrl;
const WHATSAPP_CONTATO =
  "https://api.whatsapp.com/send?phone=55051993929951&text=Oi,%20vim%20do%20site%20da%20Dra%20Samara%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta";

/* -------------------------------- Conteúdo -------------------------------- */

const indice = [
  { id: "o-que-e", label: "O que são distrofias da córnea?" },
  { id: "principais", label: "Principais distrofias da córnea" },
  { id: "sintomas", label: "Quais são os sintomas?" },
  { id: "causas", label: "O que causa as distrofias da córnea?" },
  { id: "hereditarias", label: "Distrofias da córnea são hereditárias?" },
  { id: "diagnostico", label: "Como é feito o diagnóstico?" },
  { id: "tratamentos", label: "Tratamentos para distrofias da córnea" },
  { id: "especialista", label: "Quando procurar um especialista?" },
  { id: "faq", label: "Perguntas frequentes" },
];

const sintomas = [
  {
    t: "Visão embaçada",
    d: "pode ocorrer pela perda de transparência ou pelo inchaço da córnea.",
  },
  {
    t: "Dor recorrente",
    d: "mais comum quando existem pequenas erosões na superfície da córnea.",
  },
  {
    t: "Sensibilidade à luz",
    d: "pode aparecer quando a superfície está irritada ou há edema.",
  },
  {
    t: "Halos ao redor das luzes",
    d: "podem ocorrer principalmente na Distrofia de Fuchs.",
  },
  {
    t: "Visão pior ao acordar",
    d: "característica que pode aparecer na Distrofia de Fuchs devido ao maior edema após o sono.",
  },
  {
    t: "Sensação de areia nos olhos",
    d: "relacionada a alterações na superfície da córnea.",
  },
  {
    t: "Piora progressiva da visão",
    d: "pode acontecer em distrofias mais avançadas, quando há aumento da opacidade da córnea.",
  },
];

const examesHeaders = ["Exame", "O que avalia", "Por que é importante"];
const examesRows = [
  [
    "Microscopia especular",
    "Células do endotélio da córnea",
    "Especialmente importante nas distrofias endoteliais, como a Distrofia de Fuchs",
  ],
  [
    "Paquimetria",
    "Espessura da córnea",
    "Ajuda a identificar e acompanhar alterações relacionadas ao edema corneano",
  ],
  [
    "Tomografia da córnea",
    "Formato e espessura da córnea",
    "Auxilia na avaliação global e no planejamento de tratamentos ou cirurgias",
  ],
  [
    "OCT de segmento anterior",
    "Imagens das diferentes camadas da córnea",
    "Ajuda a determinar a localização e a profundidade de algumas alterações",
  ],
  [
    "Microscopia confocal",
    "Células e depósitos corneanos em alta resolução",
    "Permite observação detalhada em situações específicas",
  ],
  [
    "Testes genéticos",
    "Variantes associadas a determinadas distrofias",
    "Usados em casos selecionados, quando há dúvida diagnóstica ou necessidade de investigação familiar",
  ],
];

const procurarEspecialista = [
  "Diagnóstico prévio de distrofia.",
  "Histórico familiar conhecido.",
  "Piora progressiva da visão.",
  "Dor ocular recorrente.",
  "Erosões frequentes.",
  "Visão embaçada ao acordar.",
  "Halos.",
  "Edema da córnea.",
  "Alteração identificada em exame de rotina.",
  "Planejamento de cirurgia de catarata ou refrativa na presença de doença corneana.",
];

const procurarUrgencia = [
  "Dor intensa e persistente.",
  "Queda súbita da visão.",
  "Vermelhidão intensa.",
  "Trauma.",
  "Secreção.",
  "Suspeita de infecção.",
];

const faq = [
  {
    q: "Distrofia da córnea tem cura?",
    a: "Depende do que se entende por cura. É possível tratar sintomas, remover determinados depósitos ou substituir tecido comprometido. Entretanto, quando existe uma predisposição genética, o tratamento não necessariamente elimina essa alteração genética.",
  },
  {
    q: "Distrofia da córnea é hereditária?",
    a: "Muitas são. Entretanto, diferentes distrofias possuem padrões de herança diferentes e nem toda pessoa diagnosticada conhece outro familiar afetado.",
  },
  {
    q: "Distrofia de Fuchs pode causar cegueira?",
    a: "Fuchs pode provocar perda visual significativa se evoluir para edema corneano importante, mas atualmente existem tratamentos eficazes para doença endotelial avançada, incluindo transplantes endoteliais.",
  },
  {
    q: "Quem tem Fuchs precisa de transplante?",
    a: "Não. Muitas pessoas apresentam doença inicial e podem permanecer durante bastante tempo apenas em acompanhamento. O transplante é considerado quando o comprometimento funcional justifica a intervenção.",
  },
  {
    q: "Distrofia da córnea sempre piora?",
    a: "Não necessariamente. A velocidade e a intensidade de progressão variam conforme o tipo de distrofia e entre indivíduos.",
  },
  {
    q: "Distrofia da córnea pode causar dor?",
    a: "Sim. Especialmente as distrofias que comprometem a superfície e provocam erosões recorrentes podem causar episódios bastante dolorosos.",
  },
  {
    q: "Distrofia pode voltar após PTK?",
    a: "Pode, dependendo do tipo. A PTK remove tecido alterado, mas não necessariamente elimina a predisposição genética da doença.",
  },
  {
    q: "Distrofia pode voltar depois de transplante?",
    a: "Algumas distrofias podem apresentar recorrência no enxerto ao longo do tempo. Isso varia conforme a doença.",
  },
  {
    q: "Qual é a diferença entre distrofia e degeneração da córnea?",
    a: "Em termos gerais, distrofias formam um grupo de doenças classificadas por características clínicas e frequentemente genéticas específicas. Degenerações costumam estar mais relacionadas a idade, fatores ambientais, doenças sistêmicas ou processos adquiridos.",
  },
  {
    q: "Quem tem Fuchs pode fazer cirurgia de catarata?",
    a: "Pode. A questão principal é avaliar a reserva endotelial e o risco de descompensação da córnea antes da cirurgia.",
  },
];

/* -------------------------------- Helpers -------------------------------- */

/** Título de seção do artigo — terracota, sans pesada. */
function H2({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <h2
        id={id}
        className="mt-14 font-sans text-[clamp(1.6rem,3.5vw,2rem)] font-bold leading-tight tracking-[-0.01em] text-primary first:mt-0"
      >
        {children}
      </h2>
    </Reveal>
  );
}

function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="mt-8 font-sans text-[clamp(1.3rem,2.9vw,1.6rem)] font-bold leading-snug tracking-[-0.01em] text-primary"
    >
      {children}
    </h3>
  );
}

function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "space-y-4 text-[0.95rem] leading-[1.75] text-foreground/90",
        "[&_strong]:font-semibold [&_strong]:text-[#4a3629]",
        "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-2",
        "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_li]:pl-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Trecho destacado (fundo pêssego), como no material original. */
function Mark({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-[var(--gold)]/25 box-decoration-clone px-1 text-inherit">
      {children}
    </mark>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <Reveal className="my-7 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 align-bottom text-[0.8rem] font-bold text-primary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0 align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-4 text-[0.83rem] leading-relaxed text-foreground/85",
                    j === 0 && "font-semibold text-primary",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

/* --------------------------------- Sidebar -------------------------------- */

function Sidebar() {
  return (
    <aside className="mt-14 lg:mt-0 lg:sticky lg:top-28 lg:self-start">
      <ul className="space-y-2 text-[0.85rem] text-muted-foreground">
        <li className="flex items-center gap-2">
          <Clock size={15} strokeWidth={1.75} className="text-primary" />8 minutos de leitura
        </li>
        <li className="flex items-center gap-2">
          <CalendarDays size={15} strokeWidth={1.75} className="text-primary" />
          Atualizado em julho de 2026
        </li>
      </ul>

      <div className="mt-6 rounded-lg border border-border bg-paper p-5">
        <p className="font-sans text-[1.05rem] font-bold text-primary">Ficou com alguma dúvida?</p>
        <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">
          Cada caso é único. Uma avaliação especializada é fundamental.
        </p>
        <CTAButton
          href={WHATSAPP_AGENDAR}
          variant="primary"
          className="mt-4 h-10 w-full px-4 text-[0.85rem]"
        >
          Agendar consulta
        </CTAButton>
      </div>

      <div className="mt-7">
        <p className="text-[0.8rem] font-semibold text-foreground">Continue aprendendo</p>
        <ul className="mt-3 space-y-2">
          {[
            { titulo: "Ceratocone", file: "biblioteca_01_ceratocone.jpg", to: "/ceratocone" },
            { titulo: "Olho seco", file: "biblioteca_03_olho_seco.jpg", to: "/olho-seco" },
          ].map((r) => (
            <li key={r.titulo}>
              <Link
                to={r.to}
                className="group flex items-center gap-3 rounded-lg border border-border bg-paper p-2 transition-colors hover:bg-[var(--gold)]/10"
              >
                <span className="h-11 w-11 shrink-0 overflow-hidden rounded-md">
                  <Figure file={r.file} alt={r.titulo} ratio="1/1" className="rounded-md" />
                </span>
                <span className="text-[0.88rem] text-foreground">{r.titulo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 rounded-lg border border-border bg-paper p-5">
        <div className="flex items-start gap-3">
          <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Figure
              file="dra_samara_autora.jpg"
              alt="Dra. Samara B. Marafon"
              ratio="1/1"
              className="rounded-full"
              imgClassName="object-top"
            />
          </span>
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground">
              Escrito por
            </p>
            <p className="font-sans text-[0.95rem] font-bold text-[#4a3629]">
              Dra. Samara B. Marafon
            </p>
          </div>
        </div>
        <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground">
          Oftalmologista especialista em córnea, catarata e lente de contato.
        </p>
        <p className="mt-2 text-[0.76rem] text-muted-foreground">CRM-RS 37669 &nbsp;|&nbsp; RQE 29525</p>
        <Link
          to="/"
          hash="especialidades"
          className="mt-3 inline-block text-[0.8rem] font-medium text-primary transition-colors hover:text-[var(--primary-deep)]"
        >
          Conheça a trajetória →
        </Link>
      </div>
    </aside>
  );
}

/* --------------------------------- Página -------------------------------- */

function Page() {
  const heroPhoto = imageUrl("distrofias_hero.jpg") ?? imageUrl("biblioteca_02_distrofias.jpg");

  return (
    <>
      {/* HERO — foto de fundo, degradê preto de baixo pra cima, texto na parte inferior */}
      <section className="relative flex min-h-[64svh] items-end justify-center overflow-hidden bg-[#1a1a1a] pt-24 text-center text-[var(--primary-foreground)] md:min-h-[82svh]">
        {heroPhoto ? (
          <img
            src={heroPhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[50%_center]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
        <Reveal className="relative mx-auto max-w-2xl px-5 pb-[4vh] sm:px-8 sm:pb-[13vh] md:pb-[6vh]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,4.2rem)] leading-[1.05]">
            Guia das Distrofias da Córnea
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[0.98rem] text-[var(--primary-foreground)]/85">
            Entenda o que são distrofias da córnea, os principais tipos, sintomas, causas,
            diagnóstico e tratamentos, incluindo Fuchs e transplantes.
          </p>
          <span
            aria-hidden="true"
            className="mx-auto mt-10 block h-6 w-6 rotate-45 border-b border-r border-[var(--primary-foreground)]/50"
          />
        </Reveal>
      </section>

      {/* CORPO — artigo (esquerda) + sidebar sticky (direita) */}
      <section className="texture-paper relative bg-background py-14 text-foreground md:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-16">
            <article className="min-w-0">
              <Reveal>
                <h2 className="font-sans text-[clamp(1.6rem,3.5vw,2rem)] font-bold leading-tight tracking-[-0.01em] text-primary">
                  Distrofias da córnea: tipos, sintomas, diagnóstico e tratamentos
                </h2>
              </Reveal>
              <Prose className="mt-5">
                <p>
                  As distrofias da córnea são um grupo de doenças que provocam alterações em
                  diferentes camadas da córnea e podem interferir em sua transparência, conforto e
                  qualidade visual.
                </p>
                <p>
                  Algumas permanecem discretas por muitos anos, enquanto outras podem provocar
                  erosões, edema ou perda progressiva da visão, e entender qual camada está afetada é
                  fundamental para compreender o diagnóstico e o tratamento.
                </p>
              </Prose>

              {/* Neste guia */}
              <Reveal className="my-9 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/[0.1] p-5 sm:p-6">
                <p className="font-sans text-[1.05rem] font-bold text-primary">Neste guia:</p>
                <ol className="mt-3 grid gap-x-8 gap-y-2 text-[0.9rem] text-foreground/85 sm:grid-cols-2">
                  {indice.map((item, i) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="transition-colors hover:text-primary">
                        <span className="mr-1 font-semibold text-primary">{i + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* 1 — O que são */}
              <H2 id="o-que-e">O que são distrofias da córnea?</H2>
              <Prose className="mt-4">
                <p>
                  “Distrofia da córnea” não é o nome de uma única doença. É um termo utilizado para
                  agrupar diferentes condições que apresentam características clínicas e, em muitos
                  casos, genéticas específicas.
                </p>
                <p>
                  A córnea é a estrutura transparente localizada na parte da frente do olho. Sua
                  transparência depende de uma organização extremamente precisa das células, fibras e
                  quantidade de água em suas diferentes camadas.
                </p>
                <p>
                  Nas distrofias, alterações nessas estruturas podem provocar depósitos anormais,
                  defeitos celulares ou mudanças na organização dos tecidos, interferindo na maneira
                  como a luz atravessa a córnea.
                </p>
                <p>
                  Uma analogia simples é imaginar a córnea como um vidro extremamente transparente
                  formado por várias camadas. Uma alteração superficial pode provocar desconforto e
                  erosões; uma alteração no meio do “vidro” pode criar depósitos; e uma alteração na
                  camada interna pode fazer o vidro acumular água e perder transparência.
                </p>
                <p>
                  <Mark>
                    O termo “distrofia” descreve um grupo de doenças. O comportamento, a
                    hereditariedade, os sintomas e o tratamento podem ser completamente diferentes
                    entre uma distrofia e outra.
                  </Mark>
                </p>
              </Prose>

              {/* 2 — Principais distrofias */}
              <H2 id="principais">Principais distrofias da córnea</H2>

              <Reveal variant="image" className="my-10">
                <Figure
                  file="distrofias_fuchs_edema.jpg"
                  alt="Close-up de um olho com a córnea difusamente opaca e azulada por edema, aspecto de vidro fosco típico da descompensação endotelial avançada"
                  ratio="4/3"
                  className="rounded-md"
                />
              </Reveal>

              <H3>Distrofia de Fuchs</H3>
              <Prose className="mt-3">
                <p>
                  A Distrofia Endotelial de Fuchs compromete principalmente o endotélio, camada mais
                  interna da córnea. As células endoteliais ajudam a controlar a quantidade de água
                  no tecido corneano. Quando sua função diminui, a córnea pode acumular líquido e
                  desenvolver edema, perdendo gradativamente transparência.
                </p>
                <p>
                  Um dos sinais característicos é a presença de guttae, alterações da membrana de
                  Descemet associadas à perda e disfunção das células endoteliais. Em estágios
                  iniciais, uma pessoa pode possuir guttae sem edema importante ou grande impacto
                  visual.
                </p>
                <p>Quando a doença progride, podem surgir:</p>
                <ul>
                  <li>visão embaçada;</li>
                  <li>piora visual ao acordar;</li>
                  <li>halos ao redor das luzes;</li>
                  <li>sensibilidade à luz;</li>
                  <li>edema da córnea;</li>
                  <li>desconforto em fases mais avançadas.</li>
                </ul>
                <p>
                  A piora matinal pode ocorrer porque, durante o sono, a evaporação da lágrima
                  diminui, favorecendo maior hidratação da córnea. Inicialmente, a visão pode
                  melhorar ao longo do dia.
                </p>
                <p>
                  Quando o comprometimento passa a interferir significativamente na visão e na função
                  da córnea, técnicas de transplante endotelial, especialmente DMEK e DSAEK, podem
                  ser consideradas.
                </p>
              </Prose>

              <H3>Distrofia da membrana basal epitelial</H3>
              <Prose className="mt-3">
                <p>
                  Também conhecida como map-dot-fingerprint dystrophy, essa condição altera a
                  organização da membrana basal do epitélio. A adesão do epitélio à córnea pode ficar
                  inadequada, favorecendo episódios de erosão corneana recorrente. O paciente pode
                  apresentar dor súbita, geralmente ao acordar ou abrir os olhos, lacrimejamento,
                  sensibilidade à luz e sensação de que algo está arranhando o olho.
                </p>
                <p>
                  Nem todos apresentam sintomas, e muitos casos são identificados casualmente durante
                  o exame oftalmológico. A abordagem depende da frequência e da intensidade das
                  erosões. A classificação atual mantém essas alterações entre as distrofias
                  superficiais da córnea.
                </p>
              </Prose>

              <H3>Distrofia granular</H3>
              <Prose className="mt-3">
                <p>
                  A distrofia granular caracteriza-se pela formação de depósitos no estroma da
                  córnea. Essas opacidades podem inicialmente ser pequenas e separadas por regiões
                  transparentes. À medida que aumentam em número ou tamanho, podem interferir
                  progressivamente na passagem da luz e reduzir a qualidade visual. Ela integra o
                  grupo de distrofias associadas a alterações do gene TGFBI, conforme a classificação
                  IC3D.
                </p>
                <p>
                  Alguns pacientes também apresentam episódios de erosão corneana. Quando os
                  depósitos superficiais passam a comprometer significativamente a visão,
                  procedimentos como PTK podem ser considerados em casos selecionados. Nos quadros
                  mais avançados, transplante pode entrar na discussão terapêutica.
                </p>
              </Prose>

              <H3>Distrofia lattice</H3>
              <Prose className="mt-3">
                <p>
                  Na distrofia lattice, ocorre deposição de material amiloide na córnea, formando
                  linhas características que podem lembrar uma rede. A doença também pode provocar
                  erosões recorrentes, desconforto e perda progressiva da transparência corneana. Ela
                  está incluída entre as distrofias relacionadas ao TGFBI. Dependendo da profundidade
                  e da intensidade das alterações, o tratamento pode variar desde controle dos
                  sintomas superficiais até PTK ou transplante em casos mais avançados.
                </p>
              </Prose>

              <H3>Distrofia macular da córnea</H3>
              <Prose className="mt-3">
                <p>
                  Apesar do nome “macular”, não está relacionada à mácula da retina. É uma distrofia
                  da córnea em que depósitos podem se espalhar pelo estroma e comprometer
                  progressivamente sua transparência. Diferentemente de várias distrofias corneanas
                  dominantes, a distrofia macular apresenta padrão de herança autossômica recessiva.
                </p>
                <p>
                  As opacidades podem se tornar mais difusas ao longo do tempo, provocando redução
                  visual importante. Em estágios avançados, um transplante de córnea pode ser
                  considerado.
                </p>
              </Prose>

              <H3>Reis-Bücklers e Thiel-Behnke</H3>
              <Prose className="mt-3">
                <p>
                  Ambas pertencem ao grupo de distrofias associadas ao TGFBI e acometem regiões
                  anteriores da córnea. Podem provocar:
                </p>
                <ul>
                  <li>erosões recorrentes;</li>
                  <li>dor;</li>
                  <li>fotofobia;</li>
                  <li>lacrimejamento;</li>
                  <li>opacidades progressivas;</li>
                  <li>diminuição da visão.</li>
                </ul>
                <p>
                  Apesar de poderem parecer semelhantes clinicamente, apresentam diferenças no padrão
                  de alteração tecidual, na genética e no aspecto observado nos exames. A IC3D utiliza
                  características fenotípicas, histológicas e genéticas para diferenciá-las.
                </p>
              </Prose>

              <H3>Outras distrofias importantes</H3>
              <Prose className="mt-3">
                <ul>
                  <li>
                    <strong>Distrofia polimorfa posterior:</strong> envolve o endotélio e a membrana
                    de Descemet e pode apresentar manifestações bastante variáveis.
                  </li>
                  <li>
                    <strong>Distrofia endotelial hereditária congênita:</strong> pode provocar edema
                    corneano desde períodos muito precoces da vida.
                  </li>
                  <li>
                    <strong>Distrofia de Schnyder:</strong> condição estromal associada a depósitos
                    anormais, frequentemente incluindo cristais lipídicos em parte dos pacientes.
                  </li>
                </ul>
                <p>
                  A existência de tantas entidades reforça por que o termo “distrofia da córnea” não
                  deve ser interpretado isoladamente. O diagnóstico completo precisa indicar qual
                  distrofia está presente.
                </p>
              </Prose>

              {/* 3 — Sintomas */}
              <H2 id="sintomas">Quais são os sintomas das distrofias da córnea?</H2>
              <Prose className="mt-4">
                <p>
                  Não existe um conjunto único de sintomas. Eles dependem principalmente da camada e
                  do tipo de alteração. Entre os mais comuns estão:
                </p>
                <ul>
                  {sintomas.map((s) => (
                    <li key={s.t}>
                      <strong>{s.t}:</strong> {s.d}
                    </li>
                  ))}
                </ul>
                <p>
                  Algumas pessoas permanecem assintomáticas durante anos e descobrem a alteração em
                  uma consulta de rotina. Outras desenvolvem manifestações desde idades mais jovens,
                  dependendo da distrofia.
                </p>
              </Prose>

              {/* 4 — Causas */}
              <H2 id="causas">O que causa as distrofias da córnea?</H2>
              <Prose className="mt-4">
                <p>
                  Muitas distrofias possuem base genética conhecida ou fortemente estabelecida.
                  Entretanto, não existe um único gene responsável por todas elas. Diferentes
                  distrofias apresentam mutações e padrões de herança próprios. A própria
                  classificação IC3D utiliza evidências genéticas como um de seus pilares.
                </p>
                <p>É importante diferenciar três conceitos:</p>
                <ul>
                  <li>
                    <strong>Causa genética:</strong> alteração envolvida no surgimento da doença.
                  </li>
                  <li>
                    <strong>Fator agravante:</strong> algo que pode intensificar sintomas ou
                    manifestações, mas não criou a distrofia.
                  </li>
                  <li>
                    <strong>Doença adquirida:</strong> condição que surgiu por outro mecanismo e pode
                    até parecer uma distrofia, mas possui origem diferente.
                  </li>
                </ul>
                <p>
                  <Mark>
                    Celular, alimentação, computador ou lentes de contato não criam a mutação
                    genética responsável por uma distrofia corneana hereditária.
                  </Mark>
                </p>
              </Prose>

              {/* 5 — Hereditárias */}
              <H2 id="hereditarias">Distrofias da córnea são hereditárias?</H2>
              <Prose className="mt-4">
                <p>
                  Muitas são, mas o padrão varia. Algumas apresentam herança autossômica dominante,
                  em que uma cópia alterada do gene pode ser suficiente para transmitir a
                  predisposição. Outras, como a distrofia macular, possuem padrão autossômico
                  recessivo. Além disso, existe variação na expressão da doença: duas pessoas da
                  mesma família podem apresentar intensidades diferentes.
                </p>
                <p>
                  Por isso, a ausência de um diagnóstico conhecido nos pais não permite concluir
                  automaticamente que uma alteração corneana não seja genética. Em famílias com
                  diagnóstico estabelecido, a avaliação de parentes pode ser discutida conforme o
                  tipo de distrofia.
                </p>
              </Prose>

              {/* 6 — Diagnóstico */}
              <H2 id="diagnostico">Como é feito o diagnóstico?</H2>
              <Prose className="mt-4">
                <p>
                  O diagnóstico das distrofias da córnea começa com uma avaliação detalhada da córnea
                  e da história clínica do paciente. O oftalmologista observa características como
                  localização, profundidade e padrão das alterações, além de investigar sintomas e
                  histórico familiar.
                </p>
                <p>
                  A biomicroscopia na lâmpada de fenda é um dos principais exames dessa avaliação.
                  Ela permite observar as diferentes estruturas da córnea e identificar depósitos,
                  opacidades, edema e alterações da superfície. Dependendo do tipo de distrofia
                  suspeitada, outros exames podem complementar o diagnóstico.
                </p>
              </Prose>

              <DataTable headers={examesHeaders} rows={examesRows} />
              <Prose>
                <p>
                  Nenhum desses exames deve ser interpretado isoladamente. O diagnóstico é construído
                  a partir da combinação entre o aspecto clínico da córnea, a localização das
                  alterações, os sintomas, o histórico familiar e, quando necessário, exames
                  complementares.
                </p>
              </Prose>

              {/* Fuchs em detalhe */}
              <H2 className="mt-24 md:mt-28">Distrofia de Fuchs em detalhe</H2>
              <Prose className="mt-4">
                <p>
                  Entre as distrofias da córnea, Fuchs merece atenção especial pela frequência com
                  que aparece na prática clínica e por sua relação com catarata e transplante
                  endotelial.
                </p>
              </Prose>

              <H3>O que fazem as células endoteliais?</H3>
              <Prose className="mt-3">
                <p>
                  Elas funcionam como uma espécie de sistema de controle da hidratação da córnea. A
                  córnea precisa possuir quantidade adequada de água para permanecer transparente.
                </p>
                <p>
                  As células endoteliais humanas possuem capacidade limitada de regeneração. Conforme
                  sua quantidade ou função diminui, as células restantes precisam compensar a perda.
                  Quando essa reserva deixa de ser suficiente, surge edema.
                </p>
              </Prose>

              <H3>O que são guttae?</H3>
              <Prose className="mt-3">
                <p>
                  Guttae são excrescências da membrana de Descemet observadas em associação à
                  Distrofia de Fuchs. Uma pessoa pode apresentar guttae antes de desenvolver edema
                  importante ou sintomas significativos.
                </p>
                <p>
                  Portanto:{" "}
                  <Mark>ter guttae não significa automaticamente precisar de transplante.</Mark> A
                  necessidade de intervenção depende da função endotelial, do edema, da qualidade
                  visual e do impacto sobre a rotina.
                </p>
              </Prose>

              <H3>Por que a visão pode piorar pela manhã?</H3>
              <Prose className="mt-3">
                <p>
                  Durante a noite, os olhos permanecem fechados e há menor evaporação. Quando a
                  capacidade endotelial está comprometida, a córnea pode acumular mais água nesse
                  período. Nos estágios iniciais, a evaporação ao longo do dia pode diminuir parte
                  desse edema e a visão melhora progressivamente. Esse padrão matinal é clássico da
                  Fuchs sintomática.
                </p>
              </Prose>

              {/* 7 — Tratamentos */}
              <H2 id="tratamentos" className="mt-24 md:mt-28">
                Tratamentos para distrofias da córnea
              </H2>
              <Prose className="mt-4">
                <p>
                  O tratamento das distrofias da córnea varia conforme o tipo de distrofia, a camada
                  afetada, os sintomas e o grau de comprometimento da visão. Nem toda distrofia exige
                  tratamento imediato, e não existe uma única abordagem adequada para todos os casos.
                </p>
                <p>
                  Os <strong>lubrificantes oculares</strong> podem ser utilizados para proteger a
                  superfície da córnea e aliviar o desconforto, especialmente quando existem erosões
                  recorrentes.
                </p>
                <p>
                  Os <strong>hipertônicos</strong> podem auxiliar na redução do edema superficial em
                  algumas doenças que comprometem o endotélio da córnea.
                </p>
                <p>
                  A <strong>lente de contato terapêutica</strong> funciona como uma proteção para o
                  epitélio e pode ser indicada em determinados casos de erosão corneana recorrente.
                </p>
                <p>
                  Quando as alterações estão localizadas na superfície, procedimentos como o{" "}
                  <strong>desbridamento epitelial</strong> ou a{" "}
                  <strong>micropuntura estromal anterior</strong> podem ser considerados em casos
                  selecionados para favorecer uma melhor adesão do epitélio.
                </p>
                <p>
                  A <strong>ceratectomia fototerapêutica (PTK)</strong> utiliza laser para remover de
                  maneira controlada alterações superficiais da córnea e pode ser indicada em algumas
                  distrofias anteriores.
                </p>
                <p>
                  Quando a doença compromete o endotélio, como pode acontecer na Distrofia de Fuchs,
                  técnicas de <strong>transplante endotelial como DMEK e DSAEK</strong> permitem
                  substituir especificamente as camadas comprometidas.
                </p>
                <p>
                  Já o <strong>transplante penetrante de córnea</strong>, que substitui toda a
                  espessura da córnea, pode ser considerado em doenças mais extensas ou avançadas.
                </p>
                <p>
                  A escolha entre essas possibilidades é individualizada. O objetivo não é
                  simplesmente tratar o diagnóstico de “distrofia”, mas identificar qual estrutura da
                  córnea está comprometida e quanto essa alteração interfere na visão e na qualidade
                  de vida do paciente.
                </p>
              </Prose>

              <H3>Distrofias podem voltar depois do tratamento?</H3>
              <Prose className="mt-3">
                <p>
                  Algumas podem. Isso acontece porque determinados procedimentos removem depósitos ou
                  substituem tecido comprometido, mas não necessariamente modificam a alteração
                  genética que originou a doença. A possibilidade de recorrência varia muito conforme
                  a distrofia e o procedimento utilizado.
                </p>
              </Prose>

              {/* 8 — Quando procurar */}
              <H2 id="especialista" className="mt-24 md:mt-28">
                Quando procurar um especialista em córnea?
              </H2>
              <Prose className="mt-4">
                <p>Uma avaliação especializada é indicada quando há:</p>
                <ul>
                  {procurarEspecialista.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>
                  A avaliação permite determinar qual distrofia está presente, qual camada está
                  comprometida e se existe necessidade de tratamento ou apenas acompanhamento.
                </p>
              </Prose>

              <H3>Procure atendimento mais rapidamente diante de:</H3>
              <Prose className="mt-3">
                <ul>
                  {procurarUrgencia.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>Essas manifestações podem representar outras doenças além da distrofia.</p>
              </Prose>
            </article>

            <Sidebar />
          </div>
        </div>
      </section>

      {/* CTA final — mesmo tratamento da última seção da Home
          (mobile: card menor no rodapé, imagem reenquadrada à esquerda p/ não cortar a Dra.) */}
      <section className="relative flex overflow-hidden bg-[var(--primary-deep)] py-16 text-[var(--primary-foreground)] max-md:min-h-[82svh] max-md:items-end max-md:py-8 md:py-20 lg:min-h-[560px] lg:items-center lg:py-0">
        <ParallaxImage
          file="home_14_cta_consultorio.jpg"
          amplitude={19}
          imgClassName="max-md:top-0 max-md:h-full max-md:object-left md:object-[50%_25%]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="ml-auto max-w-md rounded-lg bg-[#dcc4bb]/88 p-8 shadow-[var(--shadow-lift)] max-md:p-5 lg:p-10">
            <h2 className="text-3xl leading-tight text-[#4a3629] max-md:text-2xl sm:text-4xl">
              Cada visão tem uma história.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#7d6858] max-md:mt-2.5 max-md:text-[0.82rem]">
              Se você apresenta sintomas relacionados à córnea, recebeu um diagnóstico ou deseja
              avaliar a possibilidade de um tratamento cirúrgico, uma consulta especializada é o
              primeiro passo para compreender o seu caso e definir a melhor conduta.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 max-md:mt-4 max-md:flex-nowrap max-md:gap-2">
              <CTAButton
                href={WHATSAPP_AGENDAR}
                variant="primary"
                className="max-md:flex-1 max-md:px-2.5 max-md:text-[0.78rem]"
              >
                Agendar consulta
              </CTAButton>
              <CTAButton
                href={WHATSAPP_CONTATO}
                variant="light-solid"
                className="max-md:flex-1 max-md:px-2.5 max-md:text-[0.78rem]"
              >
                Entrar em contato
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — acordeão com respostas recolhidas */}
      <section id="faq" className="bg-background py-14 md:py-20">
        <div className="mx-auto w-full max-w-[820px] px-5 sm:px-8">
          <Reveal>
            <h2 className="font-sans text-[clamp(2rem,4.6vw,2.8rem)] font-bold leading-tight text-primary">
              Perguntas frequentes sobre distrofias da córnea
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i, 6) * 40}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-sans text-[1.05rem] font-semibold leading-snug text-primary [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-primary/50 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-4 text-[0.92rem] leading-relaxed text-foreground/85">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
