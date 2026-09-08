import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Clock, CalendarDays } from "lucide-react";
import { CTAButton, Figure, Reveal } from "@/components/site/blocks";
import { ParallaxImage } from "@/components/site/parallax";
import { imageUrl } from "@/content/images";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/olho-seco")({
  head: () => ({
    meta: [
      { title: "Olho seco: sintomas, diagnóstico e tratamentos | Dra. Samara Marafon" },
      {
        name: "description",
        content:
          "Guia do olho seco: o que é, sintomas, causas, tipos, diagnóstico e tratamentos, de lágrimas artificiais e higiene palpebral à luz pulsada (IPL), plug lacrimal, lentes esclerais e soro autólogo.",
      },
      { property: "og:title", content: "Olho seco: sintomas, diagnóstico e tratamentos" },
      {
        property: "og:description",
        content:
          "Entenda por que o filme lacrimal perde a estabilidade, quais são os tipos de olho seco e por que o tratamento correto muda de pessoa para pessoa.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/olho-seco" },
    ],
    links: [{ rel: "canonical", href: "/olho-seco" }],
  }),
  component: Page,
});

/* ------------------------------ Links WhatsApp ------------------------------ */

const WHATSAPP_AGENDAR = site.whatsappUrl;
const WHATSAPP_CONTATO =
  "https://api.whatsapp.com/send?phone=55051993929951&text=Oi,%20vim%20do%20site%20da%20Dra%20Samara%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta";

/* -------------------------------- Conteúdo -------------------------------- */

const indice = [
  { id: "o-que-e", label: "O que é olho seco?" },
  { id: "sintomas", label: "Quais são os sintomas?" },
  { id: "causas", label: "O que causa o olho seco?" },
  { id: "tipos", label: "Tipos de olho seco" },
  { id: "fatores", label: "Fatores associados ao olho seco" },
  { id: "diagnostico", label: "Como é feito o diagnóstico?" },
  { id: "exames", label: "Principais exames" },
  { id: "tratamentos", label: "Tratamentos para olho seco" },
  { id: "telas", label: "Olho seco e uso de telas" },
  { id: "lentes-de-contato", label: "Olho seco e lentes de contato" },
];

const sintomas = [
  "Ardência.",
  "Sensação de areia ou corpo estranho.",
  "Ressecamento.",
  "Vermelhidão.",
  "Irritação.",
  "Sensibilidade à luz.",
  "Cansaço ocular.",
  "Dificuldade para permanecer muito tempo diante de telas.",
  "Desconforto com lentes de contato.",
  "Visão embaçada ou flutuante.",
  "Lacrimejamento.",
];

const fatoresAssociados = [
  "Envelhecimento.",
  "Alterações hormonais.",
  "Disfunção das glândulas de Meibômio.",
  "Blefarite.",
  "Lentes de contato.",
  "Determinadas medicações.",
  "Doenças autoimunes.",
  "Procedimentos oculares.",
  "Uso prolongado de dispositivos digitais.",
  "Baixa umidade.",
  "Exposição a ar-condicionado e ambientes secos.",
];

const examesHeaders = ["Exame", "O que avalia", "Por que é importante"];
const examesRows = [
  ["TBUT", "Tempo até o filme lacrimal se romper", "Avalia estabilidade da lágrima"],
  ["Schirmer", "Produção lacrimal", "Auxilia na investigação de deficiência aquosa"],
  [
    "Coloração da córnea/conjuntiva",
    "Alterações da superfície ocular",
    "Identifica áreas de dano epitelial",
  ],
  [
    "Meibografia",
    "Estrutura das glândulas de Meibômio",
    "Auxilia na avaliação de disfunção glandular",
  ],
  [
    "Expressão das glândulas",
    "Qualidade e facilidade de saída da secreção",
    "Ajuda a avaliar MGD",
  ],
  [
    "Interferometria",
    "Características da camada lipídica",
    "Pode complementar a análise do filme lacrimal",
  ],
  [
    "Osmolaridade",
    "Concentração da lágrima",
    "Pode contribuir para avaliação da homeostase lacrimal",
  ],
  [
    "Avaliação palpebral",
    "Margem, piscada e fechamento das pálpebras",
    "Identifica fatores que podem favorecer evaporação",
  ],
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
            { titulo: "Distrofia de córnea", file: "biblioteca_02_distrofias.jpg", to: "/cornea" },
            { titulo: "Ceratocone", file: "biblioteca_01_ceratocone.jpg", to: "/ceratocone" },
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
              file="home_01_hero_dra_samara.jpg"
              alt="Dra. Samara B. Marafon"
              ratio="1/1"
              className="rounded-full"
              imgClassName="object-[50%_12%]"
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
      </div>
    </aside>
  );
}

/* --------------------------------- Página -------------------------------- */

function Page() {
  const heroPhoto = imageUrl("olho_seco_hero.jpg") ?? imageUrl("biblioteca_03_olho_seco.jpg");

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
        <Reveal className="relative mx-auto max-w-2xl px-5 pb-[13vh] sm:px-8 md:pb-[6vh]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,4.2rem)] leading-[1.05]">Guia do Olho Seco</h1>
          <p className="mx-auto mt-4 max-w-lg text-[0.98rem] text-[var(--primary-foreground)]/85">
            Entenda o que é olho seco, seus sintomas, causas, diagnóstico e tratamentos, de lágrimas
            artificiais à IPL e lentes esclerais.
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
                  Olho seco: sintomas, diagnóstico e tratamentos
                </h2>
              </Reveal>
              <Prose className="mt-5">
                <p>
                  Olho seco é uma doença da superfície ocular em que o filme lacrimal perde sua
                  estabilidade e deixa de proteger adequadamente os olhos, provocando sintomas como
                  ardência, sensação de areia e visão flutuante.
                </p>
                <p>
                  Entenda por que isso acontece, quais são os diferentes tipos de olho seco, como
                  identificar a causa e por que o tratamento correto pode ser muito diferente de uma
                  pessoa para outra.
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

              {/* 1 — O que é */}
              <H2 id="o-que-e">O que é olho seco?</H2>
              <Prose className="mt-4">
                <p>
                  Olho seco não significa simplesmente “produzir pouca lágrima”. A definição
                  internacional mais recente do TFOS DEWS III descreve o olho seco como uma doença
                  multifatorial e sintomática, caracterizada pela perda da homeostase, isto é, do
                  equilíbrio do filme lacrimal e/ou da superfície ocular. Instabilidade da lágrima,
                  evaporação excessiva, inflamação, alterações da superfície ocular e mecanismos
                  neurossensoriais podem participar da doença.
                </p>
                <p>Para entender isso, primeiro é preciso compreender a lágrima.</p>
                <p>
                  Ela forma uma película extremamente fina sobre a córnea e a conjuntiva. Essa
                  película ajuda a:
                </p>
                <ul>
                  <li>lubrificar os olhos;</li>
                  <li>proteger a superfície ocular;</li>
                  <li>reduzir o atrito das pálpebras;</li>
                  <li>contribuir para a defesa contra agentes externos;</li>
                  <li>
                    manter uma superfície óptica regular para que a luz entre adequadamente no olho.
                  </li>
                </ul>
                <p>
                  Por isso, a lágrima também participa da qualidade da visão. Alterações no filme
                  lacrimal podem produzir uma visão que oscila ou embaça mesmo quando o grau dos
                  óculos está correto.
                </p>
                <p>
                  Uma forma simples de imaginar é pensar no para-brisa de um carro. Não basta haver
                  água sobre o vidro: ela precisa formar uma camada uniforme. Quando essa película se
                  rompe rapidamente, a superfície deixa de ser regular. É algo parecido com o que
                  acontece no olho seco.
                </p>
              </Prose>

              <H3>Pouca lágrima x lágrima de baixa qualidade</H3>
              <Prose className="mt-3">
                <p>
                  Uma pessoa pode ter olho seco porque produz pouca porção aquosa da lágrima. Outra
                  pode produzir uma quantidade aparentemente suficiente, mas a lágrima evapora rápido
                  demais. E muitos pacientes apresentam uma combinação dos dois mecanismos.
                </p>
                <p>
                  Por isso, duas pessoas com a mesma queixa de “olho seco” podem precisar de
                  tratamentos completamente diferentes. A subclassificação do mecanismo da doença faz
                  parte justamente da lógica diagnóstica recomendada pelo TFOS.
                </p>
              </Prose>

              {/* 2 — Sintomas */}
              <H2 id="sintomas">Quais são os sintomas?</H2>
              <Prose className="mt-4">
                <p>
                  Os sintomas podem variar bastante entre pacientes e até oscilar ao longo do mesmo
                  dia. Entre os mais frequentes estão:
                </p>
                <ul>
                  {sintomas.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p>
                  Sintomas de irritação, sensação de corpo estranho, secura e ardor estão entre as
                  manifestações frequentemente relatadas em estudos sobre doença do olho seco.
                </p>
              </Prose>

              {/* 3 — Causas */}
              <H2 id="causas">O que causa olho seco?</H2>
              <Prose className="mt-4">
                <p>
                  Não existe uma única causa. A doença pode surgir a partir de mecanismos diferentes
                  e frequentemente vários deles coexistem no mesmo paciente. O modelo moderno de olho
                  seco reconhece especialmente a interação entre instabilidade do filme lacrimal,
                  evaporação, hiperosmolaridade, inflamação, lesão da superfície e alterações
                  neurossensoriais.
                </p>
              </Prose>

              <H3>Por que a visão pode ficar embaçada?</H3>
              <Prose className="mt-3">
                <p>
                  A córnea é uma das principais estruturas responsáveis pelo poder óptico do olho.
                  Sobre ela existe uma fina camada de lágrima que precisa permanecer relativamente
                  uniforme entre as piscadas.
                </p>
                <p>
                  Quando o filme lacrimal se rompe rapidamente, a superfície óptica fica irregular.
                  Por isso, alguns pacientes percebem que enxergam embaçado e, depois de piscar
                  algumas vezes, a visão melhora temporariamente.
                </p>
                <p>Esse comportamento pode ser uma pista importante durante a investigação.</p>
              </Prose>

              <H3>Se o olho é seco, por que ele lacrimeja?</H3>
              <Prose className="mt-3">
                <p>
                  Parece contraditório, mas não é. Quando a superfície ocular fica irritada, o
                  organismo pode responder produzindo uma grande quantidade de lágrima reflexa. Essa
                  lágrima pode escorrer pelo rosto, mas não necessariamente possui estabilidade
                  suficiente para manter a superfície ocular adequadamente protegida.
                </p>
                <p>
                  Portanto: <Mark>lacrimejamento não exclui olho seco.</Mark>
                </p>
              </Prose>

              {/* 4 — Tipos */}
              <H2 id="tipos">Tipos de olho seco</H2>

              <H3>Deficiência aquosa</H3>
              <Prose className="mt-3">
                <p>
                  Ocorre quando existe produção insuficiente da porção aquosa da lágrima. Pode estar
                  relacionada a alterações da glândula lacrimal e a determinadas doenças sistêmicas,
                  incluindo algumas doenças autoimunes.
                </p>
              </Prose>

              <H3>Olho seco evaporativo</H3>
              <Prose className="mt-3">
                <p>
                  Nesse caso, o problema principal é a lágrima desaparecer da superfície ocular
                  rápido demais. Uma das causas mais importantes é a disfunção das glândulas de
                  Meibômio. Essas pequenas glândulas localizadas nas pálpebras produzem componentes
                  lipídicos que ajudam a reduzir a evaporação da lágrima. Quando sua secreção é
                  inadequada ou as glândulas ficam obstruídas, o filme lacrimal pode se tornar menos
                  estável. A evaporação excessiva tem papel central na fisiopatologia do olho seco.
                </p>
              </Prose>

              <H3>Olho seco misto</H3>
              <Prose className="mt-3">
                <p>
                  É extremamente comum que exista uma combinação dos dois mecanismos. O paciente pode
                  apresentar simultaneamente menor produção lacrimal e maior evaporação. Por isso,
                  classificar rigidamente todo paciente em uma única categoria nem sempre representa
                  a realidade clínica.
                </p>
              </Prose>

              {/* 5 — Fatores associados */}
              <H2 id="fatores">Fatores associados ao olho seco</H2>
              <Prose className="mt-4">
                <p>
                  Diversos fatores podem contribuir para o aparecimento ou agravamento dos sintomas.
                  Entre eles:
                </p>
                <ul>
                  {fatoresAssociados.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Prose>

              {/* 6 — Diagnóstico */}
              <H2 id="diagnostico">Como é feito o diagnóstico?</H2>
              <Prose className="mt-4">
                <p>
                  Não existe um único exame capaz de contar toda a história. O diagnóstico começa
                  pela conversa. O oftalmologista procura entender:
                </p>
                <ul>
                  <li>quais sintomas existem;</li>
                  <li>quando aparecem;</li>
                  <li>se pioram durante o dia;</li>
                  <li>quantidade de tempo diante de telas;</li>
                  <li>uso de lentes de contato;</li>
                  <li>medicações;</li>
                  <li>doenças sistêmicas;</li>
                  <li>cirurgias prévias;</li>
                  <li>exposição ambiental;</li>
                  <li>tratamentos já utilizados.</li>
                </ul>
                <p>
                  A avaliação clínica procura combinar sintomas + sinais da superfície ocular +
                  investigação do mecanismo predominante.
                </p>
              </Prose>

              <H3 id="exames">Principais exames</H3>
              <DataTable headers={examesHeaders} rows={examesRows} />
              <Prose>
                <p>A avaliação deve integrar sintomas, sinais e subclassificação.</p>
              </Prose>

              {/* 7 — Tratamentos */}
              <H2 id="tratamentos">Tratamentos para olho seco</H2>
              <Prose className="mt-4">
                <p>
                  Não existe um único “melhor tratamento para olho seco”. Essa é uma das informações
                  mais importantes deste guia. O tratamento depende de qual mecanismo está alterado.
                  Um paciente com deficiência aquosa pode exigir uma abordagem diferente de outro
                  cujo problema predominante seja a disfunção das glândulas de Meibômio.
                </p>
              </Prose>

              <H3>Lágrimas artificiais</H3>
              <Prose className="mt-3">
                <p>
                  São provavelmente o tratamento mais conhecido. Sua função é complementar
                  temporariamente o filme lacrimal e melhorar a lubrificação. Entretanto, nem toda
                  lágrima artificial é igual. As formulações podem variar em:
                </p>
                <ul>
                  <li>viscosidade;</li>
                  <li>composição lipídica;</li>
                  <li>agentes umectantes;</li>
                  <li>conservantes;</li>
                  <li>tempo de permanência sobre a superfície.</li>
                </ul>
                <p>A escolha pode depender do subtipo do olho seco e da frequência de uso.</p>
                <p>
                  Lubrificantes continuam entre os pilares do manejo do olho seco, mas o tratamento
                  moderno não deve se limitar automaticamente a “usar colírio”.
                </p>
              </Prose>

              <H3>Géis e pomadas</H3>
              <Prose className="mt-3">
                <p>
                  Possuem maior viscosidade e permanecem mais tempo sobre o olho. Podem ser úteis
                  principalmente quando se busca lubrificação mais prolongada, inclusive em
                  determinadas situações noturnas. Em contrapartida, podem deixar a visão
                  temporariamente embaçada.
                </p>
              </Prose>

              <H3>Higiene palpebral</H3>
              <Prose className="mt-3">
                <p>
                  Quando existe blefarite ou alteração das glândulas de Meibômio, o tratamento das
                  pálpebras pode ser tão importante quanto o colírio. A higiene busca reduzir
                  resíduos, crostas e alterações da margem palpebral que podem interferir na
                  qualidade do filme lacrimal. Em condições crônicas, não costuma ser uma intervenção
                  de poucos dias.
                </p>
              </Prose>

              <H3>Compressas mornas</H3>
              <Prose className="mt-3">
                <p>
                  O aquecimento das pálpebras pode ajudar a tornar a secreção das glândulas de
                  Meibômio mais fluida. Mas existe uma limitação prática: a temperatura precisa ser
                  adequada e permanecer suficiente por determinado período. Por isso, colocar uma
                  toalha morna rapidamente sobre os olhos nem sempre reproduz o mesmo efeito de
                  sistemas de aquecimento controlado.
                </p>
              </Prose>

              <H3>Colírios anti-inflamatórios</H3>
              <Prose className="mt-3">
                <p>Inflamação e olho seco podem alimentar um ciclo:</p>
                <p>
                  instabilidade lacrimal → irritação → inflamação → maior alteração da superfície →
                  ainda mais instabilidade.
                </p>
                <p>
                  Em pacientes selecionados, medicamentos anti-inflamatórios ou imunomoduladores
                  podem ser utilizados para interromper parte desse ciclo. Entre as opções utilizadas
                  na prática clínica estão determinadas formulações de ciclosporina e, em situações
                  específicas, corticosteroides por períodos controlados.
                </p>
                <p>
                  <Mark>
                    Corticoide ocular não deve ser utilizado por conta própria. Uso inadequado pode
                    provocar complicações importantes e requer acompanhamento oftalmológico.
                  </Mark>
                </p>
              </Prose>

              <H3>Luz pulsada para olho seco</H3>
              <Prose className="mt-3">
                <p>
                  A luz intensa pulsada (IPL) vem sendo utilizada principalmente em pacientes com
                  olho seco associado à disfunção das glândulas de Meibômio. Estudos randomizados
                  demonstraram melhora de determinados sinais e sintomas em pacientes selecionados
                  com MGD. Seu mecanismo provavelmente envolve mais de uma ação, incluindo efeitos
                  sobre inflamação, vascularização palpebral e função glandular.
                </p>
                <p>
                  Isso não significa, porém, que IPL seja “tratamento para qualquer olho seco”. Um
                  paciente predominantemente aquodeficiente, por exemplo, pode ter necessidades
                  completamente diferentes.
                </p>
              </Prose>

              <H3>Quantas sessões são necessárias?</H3>
              <Prose className="mt-3">
                <p>
                  Os protocolos variam conforme equipamento, quadro clínico e estratégia utilizada.
                  Por isso, não existe um número universal válido para todos os pacientes.
                </p>
              </Prose>

              <H3>Plug lacrimal</H3>
              <Prose className="mt-3">
                <p>
                  A lágrima normalmente é drenada por pequenas aberturas nas pálpebras chamadas
                  pontos lacrimais. O plug funciona como uma pequena barreira nessa drenagem,
                  ajudando a manter a lágrima mais tempo sobre os olhos. Pode ser considerado em
                  determinados pacientes, especialmente quando a conservação da lágrima é desejável.
                </p>
                <p>
                  Entretanto, se existir inflamação importante ou outros mecanismos ainda não
                  tratados, simplesmente reter a lágrima nem sempre é a primeira medida. O manejo
                  precisa considerar o contexto completo.
                </p>
              </Prose>

              <H3>Lentes esclerais</H3>
              <Prose className="mt-3">
                <p>
                  As lentes esclerais são maiores do que lentes de contato convencionais. Elas se
                  apoiam sobre a esclera (a parte branca do olho) e mantêm um reservatório de líquido
                  entre a lente e a córnea. Isso pode:
                </p>
                <ul>
                  <li>proteger a superfície;</li>
                  <li>melhorar conforto;</li>
                  <li>ajudar na qualidade visual;</li>
                  <li>reduzir exposição da córnea em determinados casos.</li>
                </ul>
                <p>
                  Costumam ser consideradas principalmente em doenças de superfície ocular mais
                  importantes ou situações em que terapias convencionais não foram suficientes.
                  Exigem adaptação especializada e cuidados rigorosos com manuseio e higiene.
                </p>
              </Prose>

              <H3>Soro autólogo</H3>
              <Prose className="mt-3">
                <p>
                  É produzido a partir do próprio sangue do paciente após processamento específico. O
                  objetivo não é simplesmente “lubrificar”, mas fornecer componentes biológicos que
                  podem auxiliar a superfície ocular em determinadas situações. Costuma ser reservado
                  a casos selecionados e exige preparo, armazenamento e orientação adequados. O TFOS
                  inclui derivados sanguíneos entre as estratégias possíveis para quadros mais
                  complexos.
                </p>
              </Prose>

              <H3>Tratamentos para casos graves</H3>
              <Prose className="mt-3">
                <p>
                  Quando existe comprometimento importante da superfície ocular, podem ser
                  necessárias estratégias adicionais. Dependendo do caso, podem ser consideradas:
                </p>
                <ul>
                  <li>membrana amniótica;</li>
                  <li>lentes esclerais;</li>
                  <li>soro autólogo;</li>
                  <li>oclusão dos pontos lacrimais;</li>
                  <li>tratamento de alterações palpebrais;</li>
                  <li>terapias anti-inflamatórias ou imunomoduladoras;</li>
                  <li>investigação e tratamento de doenças sistêmicas associadas.</li>
                </ul>
                <p>
                  Isso mostra por que “olho seco” pode representar desde uma condição relativamente
                  simples até uma doença complexa da superfície ocular.
                </p>
              </Prose>

              {/* 8 — Uso de telas */}
              <H2 id="telas">Olho seco e uso de telas</H2>
              <Prose className="mt-4">
                <p>
                  Ficar diante de um computador ou celular pode piorar sintomas. Um dos principais
                  motivos é o comportamento da piscada. Durante tarefas de alta atenção visual,
                  podemos piscar menos ou realizar piscadas incompletas. Menos piscadas significam
                  mais tempo para a lágrima evaporar antes de ser novamente distribuída pela
                  superfície ocular.
                </p>
                <p>Algumas medidas podem ajudar:</p>
                <ul>
                  <li>fazer pausas regulares;</li>
                  <li>piscar conscientemente durante períodos prolongados de tela;</li>
                  <li>posicionar a tela ligeiramente abaixo da linha dos olhos;</li>
                  <li>evitar vento direto no rosto;</li>
                  <li>revisar o uso excessivo de ar-condicionado;</li>
                  <li>tratar previamente doenças da superfície ocular.</li>
                </ul>
                <p>
                  Essas medidas ajudam a controlar fatores agravantes, mas não substituem o
                  tratamento quando existe doença estabelecida.
                </p>
              </Prose>

              {/* 9 — Lentes de contato */}
              <H2 id="lentes-de-contato">Olho seco e lentes de contato</H2>
              <Prose className="mt-4">
                <p>
                  Lentes de contato interagem diretamente com o filme lacrimal. Em alguns pacientes,
                  isso pode aumentar:
                </p>
                <ul>
                  <li>evaporação;</li>
                  <li>sensação de ressecamento;</li>
                  <li>desconforto;</li>
                  <li>intolerância ao longo do dia.</li>
                </ul>
                <p>
                  Isso não significa que toda pessoa com olho seco precise abandonar as lentes. Podem
                  ser necessários:
                </p>
                <ul>
                  <li>mudança do material;</li>
                  <li>ajuste do tempo de uso;</li>
                  <li>troca da modalidade;</li>
                  <li>tratamento prévio da superfície ocular;</li>
                  <li>adaptação de outra categoria de lente.</li>
                </ul>
              </Prose>

              <H3>Quando suspender e procurar avaliação?</H3>
              <Prose className="mt-3">
                <p>
                  Dor, vermelhidão intensa, secreção ou queda de visão durante o uso de lentes não
                  devem ser considerados simplesmente “olho seco”. Esses sinais podem indicar outras
                  condições e exigem avaliação oftalmológica.
                </p>
              </Prose>
            </article>

            <Sidebar />
          </div>
        </div>
      </section>

      {/* CTA final — mesmo tratamento da última seção da Home */}
      <section className="relative flex overflow-hidden bg-[var(--primary-deep)] py-16 text-[var(--primary-foreground)] md:py-20 lg:min-h-[560px] lg:items-center lg:py-0">
        <ParallaxImage
          file="home_14_cta_consultorio.jpg"
          objectPosition="50% 25%"
          amplitude={19}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="ml-auto max-w-md rounded-lg bg-[#dcc4bb]/88 p-8 shadow-[var(--shadow-lift)] lg:p-10">
            <h2 className="text-3xl leading-tight text-[#4a3629] sm:text-4xl">
              Cada visão tem uma história.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#7d6858]">
              Se você apresenta sintomas relacionados à córnea, recebeu um diagnóstico ou deseja
              avaliar a possibilidade de um tratamento cirúrgico, uma consulta especializada é o
              primeiro passo para compreender o seu caso e definir a melhor conduta.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href={WHATSAPP_AGENDAR} variant="primary">
                Agendar consulta
              </CTAButton>
              <CTAButton href={WHATSAPP_CONTATO} variant="light-solid">
                Entrar em contato
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
