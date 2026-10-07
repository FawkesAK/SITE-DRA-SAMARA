import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Clock, CalendarDays, ChevronDown } from "lucide-react";
import { CTAButton, Figure, Reveal } from "@/components/site/blocks";
import { imageUrl } from "@/content/images";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Guia da Catarata (Biblioteca da Córnea) — mesma estrutura do guia de
 * Ceratocone (hero → lead → "Neste guia" → artigo + sidebar → quando procurar
 * → principais pontos → CTA → FAQ). Copy-fonte: docs/copy/catarata.md.
 * Substitui a página de serviço herdada do modelo da Dra. Diane.
 */
export const Route = createFileRoute("/catarata")({
  head: () => ({
    meta: [
      { title: "Catarata: sintomas, diagnóstico e cirurgia | Dra. Samara Marafon" },
      {
        name: "description",
        content:
          "Guia completo sobre catarata: como reconhecer os sinais, quando operar, como é a cirurgia, quais são os tipos de lente intraocular e por que a saúde da córnea faz diferença no resultado.",
      },
      { property: "og:title", content: "Catarata: sintomas, diagnóstico e cirurgia" },
      {
        property: "og:description",
        content:
          "Entenda por que o cristalino perde a transparência e como a cirurgia devolve a nitidez da visão.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/catarata" },
    ],
    links: [{ rel: "canonical", href: "/catarata" }],
  }),
  component: Page,
});

/* ------------------------------ Links WhatsApp ------------------------------ */

const WHATSAPP_AGENDAR = site.whatsappUrl;

/* -------------------------------- Conteúdo -------------------------------- */

const indice = [
  { id: "o-que-e", label: "O que é a catarata?" },
  { id: "sintomas", label: "Quais são os sintomas?" },
  { id: "causas", label: "O que causa a catarata?" },
  { id: "diagnostico", label: "Como é feito o diagnóstico?" },
  { id: "tratamento", label: "Qual é o tratamento?" },
  { id: "cirurgia", label: "Cirurgia de catarata" },
  { id: "lentes-intraoculares", label: "Lentes intraoculares" },
  { id: "cornea", label: "Catarata e córnea" },
  { id: "especialista", label: "Quando procurar um oftalmologista?" },
  { id: "faq", label: "Perguntas frequentes" },
];

const sintomas = [
  "Visão embaçada ou “enevoada”, como se houvesse uma neblina constante.",
  "Cores menos vivas, amareladas ou desbotadas.",
  "Sensibilidade à luz e ofuscamento com o sol ou com faróis.",
  "Halos ao redor das luzes, principalmente à noite.",
  "Dificuldade para dirigir no período noturno.",
  "Necessidade de mais luz para ler.",
  "Trocas frequentes do grau dos óculos.",
  "Visão dupla em um único olho.",
  "Sensação de que os óculos “nunca estão bons”.",
  "Melhora temporária da visão de perto, sem precisar dos óculos de leitura.",
];

const examesHeaders = ["Exame", "O que avalia", "Por que é importante"];
const examesRows = [
  [
    "Biomicroscopia (lâmpada de fenda)",
    "Cristalino, córnea e demais estruturas da frente do olho.",
    "Confirma a catarata, seu tipo e sua intensidade.",
  ],
  [
    "Biometria",
    "Medidas do olho, como comprimento e curvatura.",
    "Define o grau da lente intraocular que será implantada.",
  ],
  [
    "Topografia ou tomografia da córnea",
    "Formato, curvatura e regularidade da córnea.",
    "Identifica astigmatismo, ceratocone ou cirurgias refrativas prévias que interferem no cálculo e na escolha da lente.",
  ],
  [
    "Microscopia especular",
    "Quantidade e qualidade das células endoteliais da córnea.",
    "Avalia se a córnea tolera bem a cirurgia, especialmente em casos de distrofia de Fuchs.",
  ],
  [
    "Mapeamento de retina",
    "Retina e nervo óptico.",
    "Identifica alterações que podem limitar a visão após a cirurgia.",
  ],
  [
    "Tomografia de coerência óptica (OCT)",
    "Camadas da mácula, a região central da retina.",
    "Detecta alterações sutis que podem influenciar o prognóstico e a escolha da lente.",
  ],
];

const lentesHeaders = ["Tipo de lente", "O que busca", "Quando pode ser considerada", "Limitações"];
const lentesRows = [
  [
    "Monofocal",
    "Visão nítida em uma distância, geralmente para longe.",
    "Na maioria dos pacientes; é a lente mais utilizada.",
    "Normalmente exige óculos para perto (e às vezes para distância intermediária).",
  ],
  [
    "Multifocal / trifocal",
    "Visão para longe, intermediária e perto.",
    "Para quem deseja maior independência dos óculos e tem olho saudável para essa lente.",
    "Maior chance de halos e ofuscamento noturnos; nem todo olho é candidato.",
  ],
  [
    "Tórica",
    "Correção do astigmatismo da córnea junto com a catarata.",
    "Quando há astigmatismo regular significativo.",
    "Depende de posicionamento preciso; pode existir em versões monofocal, multifocal ou de foco estendido.",
  ],
  [
    "Foco estendido (EDOF)",
    "Boa visão para longe e para distâncias intermediárias, como o computador.",
    "Para quem deseja reduzir a dependência de óculos no dia a dia.",
    "Pode ainda exigir óculos para leitura de letras pequenas; halos leves são possíveis.",
  ],
];

const pontosPrincipais = [
  "A catarata é a perda da transparência do cristalino, a lente natural do olho.",
  "Na maioria das pessoas, está relacionada ao envelhecimento, mas pode ser antecipada por diabetes, corticoides, trauma e outros fatores.",
  "Causa visão enevoada, cores apagadas, ofuscamento e dificuldade para dirigir à noite.",
  "Não existe colírio ou tratamento clínico que reverta a catarata.",
  "O único tratamento definitivo é a cirurgia, que substitui o cristalino por uma lente intraocular.",
  "Não é preciso esperar a catarata “amadurecer”; a cirurgia é indicada quando ela passa a interferir na qualidade de vida.",
  "A escolha da lente intraocular deve ser individual, de acordo com os exames e a rotina de cada paciente.",
  "Nem todo paciente ficará totalmente livre dos óculos, pois isso depende da lente e das características do olho.",
  "A saúde da córnea influencia o cálculo da lente e o resultado da cirurgia.",
  "A catarata não volta, mas a cápsula pode opacificar e é tratada com laser no consultório.",
];

const procurarEspecialista = [
  "Visão embaçada ou enevoada que não melhora com a troca dos óculos.",
  "Cores mais apagadas ou amareladas.",
  "Ofuscamento e halos ao redor das luzes.",
  "Dificuldade crescente para dirigir à noite.",
  "Necessidade de mais luz para ler.",
  "Trocas frequentes de grau.",
  "Diferença de visão entre os dois olhos.",
  "Diagnóstico de catarata sem acompanhamento recente.",
  "Diabetes ou uso prolongado de corticoides.",
  "Catarata associada a ceratocone, distrofia de Fuchs ou cirurgia refrativa anterior.",
];

const procurarUrgencia = [
  "Queda súbita da visão.",
  "Dor ocular intensa.",
  "Olho muito vermelho.",
  "Aparecimento repentino de flashes de luz, “moscas volantes” ou uma sombra no campo de visão.",
  "Piora da visão, dor ou secreção nos dias seguintes a uma cirurgia de catarata.",
  "Trauma ocular.",
];

const faq = [
  {
    q: "Catarata pode causar cegueira?",
    a: "Sim. Sem tratamento, a catarata pode levar a uma perda importante da visão e é uma das principais causas de cegueira reversível no mundo. A boa notícia é que essa perda pode ser recuperada com a cirurgia, desde que as demais estruturas do olho estejam saudáveis.",
  },
  {
    q: "Preciso esperar a catarata “amadurecer” para operar?",
    a: "Não. Essa orientação é antiga. Hoje, a cirurgia é indicada quando a catarata passa a interferir na qualidade de vida, e cataratas muito avançadas podem tornar o procedimento mais complexo.",
  },
  {
    q: "Colírios ou vitaminas podem tratar a catarata?",
    a: "Não. Até o momento, nenhum colírio, suplemento ou tratamento natural é capaz de reverter ou impedir a progressão da catarata. O único tratamento eficaz é a cirurgia.",
  },
  {
    q: "A cirurgia de catarata dói?",
    a: "A cirurgia é feita com anestesia local, e o paciente costuma sentir apenas uma leve pressão ou desconforto. No pós-operatório, é comum sensação de areia e sensibilidade à luz nos primeiros dias.",
  },
  {
    q: "Quanto tempo dura a cirurgia?",
    a: "Em geral, menos de 20 minutos. O paciente costuma ir para casa no mesmo dia.",
  },
  {
    q: "Os dois olhos podem ser operados no mesmo dia?",
    a: "Normalmente, os olhos são operados em dias diferentes. Esse intervalo permite avaliar a recuperação e o resultado do primeiro olho antes de operar o segundo.",
  },
  {
    q: "Quanto tempo leva a recuperação?",
    a: "Muitas pessoas notam melhora nos primeiros dias, mas a visão vai clareando aos poucos ao longo das semanas seguintes. Atividades leves costumam ser retomadas rapidamente, seguindo as orientações do médico sobre esforço físico, piscina, mar e maquiagem.",
  },
  {
    q: "Vou precisar de óculos depois da cirurgia?",
    a: "Depende da lente escolhida. Com lentes monofocais, geralmente são necessários óculos para perto. Lentes multifocais, trifocais ou de foco estendido podem reduzir bastante a dependência dos óculos, mas não garantem independência total para todas as atividades.",
  },
  {
    q: "A lente intraocular precisa ser trocada?",
    a: "Não. A lente é definitiva e foi feita para durar a vida toda. A troca é rara e reservada a situações específicas.",
  },
  {
    q: "A catarata pode voltar?",
    a: "Não, porque o cristalino é removido. Porém, a cápsula que sustenta a lente pode ficar opaca com o tempo, causando visão embaçada. Esse quadro é tratado com YAG laser no consultório, em poucos minutos e sem cortes.",
  },
  {
    q: "Quem tem diabetes pode operar catarata?",
    a: "Sim. O controle adequado da glicemia e a avaliação cuidadosa da retina antes e depois da cirurgia são fundamentais, porque o diabetes pode aumentar o risco de inchaço na retina após o procedimento.",
  },
  {
    q: "Quem tem glaucoma pode operar catarata?",
    a: "Sim. Em muitos casos, a cirurgia pode até ajudar no controle da pressão ocular. O planejamento deve considerar o estágio do glaucoma, a escolha da lente e o acompanhamento da pressão após a cirurgia.",
  },
  {
    q: "Quem já fez LASIK ou PRK pode operar catarata?",
    a: "Sim. Como a córnea foi modificada, o cálculo da lente exige fórmulas específicas. Informar o médico sobre a cirurgia anterior e levar os dados dela, se disponíveis, ajuda no planejamento.",
  },
  {
    q: "Quem tem ceratocone pode operar catarata?",
    a: "Sim, mas o planejamento é diferente. A irregularidade da córnea torna o cálculo da lente menos previsível, e muitos pacientes continuam precisando de lentes de contato especiais após a cirurgia. A avaliação por um especialista em córnea é especialmente importante nesses casos.",
  },
  {
    q: "Catarata pode aparecer em pessoas jovens?",
    a: "Sim. Embora seja mais comum após os 60 anos, a catarata pode surgir mais cedo em pessoas com diabetes, uso prolongado de corticoides, trauma ocular, alta miopia ou outras condições. Também pode estar presente desde o nascimento.",
  },
  {
    q: "Depois da cirurgia, posso dirigir?",
    a: "A liberação depende da recuperação da visão e da avaliação no pós-operatório. Muitas pessoas voltam a dirigir em poucos dias, mas a decisão deve ser feita com o médico.",
  },
];

/* -------------------------------- Helpers -------------------------------- */

/** Título de seção do artigo — terracota, sans pesada. */
function H2({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <Reveal
      className={cn(
        "mt-16 border-t border-border/80 pt-9 first:mt-0 first:border-0 first:pt-0",
        className,
      )}
    >
      <h2
        id={id}
        className="font-sans text-[clamp(1.7rem,3.7vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.015em] text-primary"
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
      className="mt-9 border-l-2 border-primary/50 pl-3.5 font-sans text-[clamp(1.15rem,2.5vw,1.34rem)] font-semibold leading-snug tracking-[-0.005em] text-[#4a3629]"
    >
      {children}
    </h3>
  );
}

function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-[68ch] space-y-4 text-[0.95rem] leading-[1.75] text-foreground/90",
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
          <tr className="border-b border-border bg-secondary/25">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3.5 align-bottom text-[0.8rem] font-bold text-primary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border align-top even:bg-secondary/[0.07] last:border-0"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-[1.1rem] text-[0.83rem] leading-relaxed text-foreground/85",
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

function ArticleFigure({
  file,
  alt,
  ratio = "16/10",
  imgClassName,
}: {
  file: string;
  alt: string;
  ratio?: string;
  imgClassName?: string;
}) {
  return (
    <Reveal variant="image" className="my-11">
      <Figure
        file={file}
        alt={alt}
        ratio={ratio}
        className="rounded-md shadow-[var(--shadow-lift)]"
        {...(imgClassName ? { imgClassName } : {})}
      />
    </Reveal>
  );
}

/* --------------------------------- Sidebar -------------------------------- */

function Sidebar() {
  return (
    <aside className="mt-14 lg:mt-0 lg:sticky lg:top-28 lg:self-start">
      <ul className="space-y-2 text-[0.85rem] text-muted-foreground">
        <li className="flex items-center gap-2">
          <Clock size={15} strokeWidth={1.75} className="text-primary" />9 minutos de leitura
        </li>
        <li className="flex items-center gap-2">
          <CalendarDays size={15} strokeWidth={1.75} className="text-primary" />
          Atualizado em outubro de 2026
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
            {
              titulo: "Ceratocone",
              file: "biblioteca_01_ceratocone.jpg",
              to: "/ceratocone" as const,
            },
            {
              titulo: "Distrofias da córnea",
              file: "biblioteca_02_distrofias.jpg",
              to: "/distrofias" as const,
            },
            { titulo: "Olho seco", file: "biblioteca_03_olho_seco.jpg", to: "/olho-seco" as const },
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
        <p className="mt-2 text-[0.76rem] text-muted-foreground">
          CRM-RS 37669 &nbsp;|&nbsp; RQE 29525
        </p>
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

/**
 * Ilustrações ainda não produzidas (diagrama, simulação da visão, etapas da
 * cirurgia, tipos de lente): só renderizam quando a chave existir em
 * content/images.ts — até lá, nenhum box/placeholder aparece no layout.
 */
function Illustration({ file, alt, ratio = "3/2" }: { file: string; alt: string; ratio?: string }) {
  if (!imageUrl(file)) return null;
  return (
    <Reveal variant="image" className="-mx-3 my-12 sm:-mx-8 sm:my-14">
      <Figure file={file} alt={alt} ratio={ratio} className="rounded-md" />
    </Reveal>
  );
}

function Page() {
  const heroPhoto = imageUrl("catarata_hero.jpg");

  return (
    <>
      {/* HERO — foto de fundo, degradê preto de baixo pra cima, texto na parte inferior */}
      <section className="relative flex min-h-[64svh] items-end justify-center overflow-hidden bg-[#1a1a1a] pt-24 text-center text-[var(--primary-foreground)] md:min-h-[82svh]">
        {heroPhoto ? (
          <img
            src={heroPhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
        <Reveal className="relative mx-auto max-w-2xl px-5 pb-[4vh] sm:px-8 sm:pb-[13vh] md:pb-[6vh]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,4.2rem)] leading-[1.05]">Catarata</h1>
          <p className="mx-auto mt-4 max-w-lg text-[0.98rem] text-[var(--primary-foreground)]/85">
            Entenda por que o cristalino perde a transparência e como a cirurgia devolve a nitidez
            da visão
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
                  Catarata: sintomas, diagnóstico e cirurgia
                </h2>
              </Reveal>
              <Prose className="mt-5">
                <p>
                  A catarata é a perda progressiva da transparência do cristalino, a lente natural
                  que fica dentro do olho, logo atrás da íris. Com o tempo, a visão fica mais
                  embaçada, as cores perdem o brilho e tarefas simples, como ler, dirigir à noite ou
                  reconhecer rostos, passam a exigir mais esforço. É uma das causas mais comuns de
                  baixa visão no mundo e, ao mesmo tempo, uma das mais tratáveis.
                </p>
                <p>
                  Neste guia, você entenderá como reconhecer seus sinais, como é feito o
                  diagnóstico, qual é o momento adequado para operar, como funciona a cirurgia e
                  quais são os tipos de lente intraocular. Também verá por que a avaliação da córnea
                  faz parte desse planejamento.
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
              <H2 id="o-que-e">O que é a catarata?</H2>
              <Prose className="mt-4">
                <p>
                  Dentro do olho existe uma lente natural chamada cristalino. Ela fica atrás da
                  íris, a parte colorida do olho, e, junto com a córnea, é responsável por focalizar
                  a luz sobre a retina para formar uma imagem nítida.
                </p>
                <p>
                  Na juventude, o cristalino é transparente e flexível. Ao longo dos anos, as
                  proteínas que o compõem se modificam e se agrupam, e a lente vai perdendo sua
                  transparência. Essa opacificação é o que chamamos de catarata.
                </p>
                <p>
                  Uma forma simples de entender é imaginar uma janela de vidro que, com o tempo, vai
                  ficando fosca. A paisagem continua lá fora, mas chega aos olhos cada vez mais
                  apagada, sem contraste e com menos detalhes. Trocar o grau dos óculos pode ajudar
                  por um período, mas não devolve a transparência ao vidro.
                </p>
                <p>
                  <Mark>
                    A catarata não é uma película que cresce sobre o olho, nem algo que se “raspa”.
                    É o próprio cristalino que perde a transparência e, por isso, o tratamento
                    consiste em substituí-lo.
                  </Mark>
                </p>
                <p>
                  Na maioria das pessoas, a catarata está relacionada ao envelhecimento natural do
                  olho e se desenvolve lentamente, ao longo de anos. Costuma afetar os dois olhos,
                  mas nem sempre no mesmo ritmo: é comum um olho estar mais comprometido do que o
                  outro.
                </p>
              </Prose>

              {/* Diagrama cristalino normal × catarata */}
              <Illustration
                file="catarata_diagrama.jpg"
                ratio="4/3"
                alt="Comparação em corte lateral: um cristalino transparente ao lado de um cristalino opaco, com catarata"
              />

              {/* 2 — Sintomas */}
              <H2 id="sintomas">Quais são os sintomas da catarata?</H2>
              <Prose className="mt-4">
                <p>
                  Os sintomas costumam aparecer de forma gradual, e muitas pessoas se adaptam a eles
                  sem perceber o quanto a visão mudou. Muitas vezes, é só depois da cirurgia que o
                  paciente percebe o quanto as cores e os detalhes haviam se apagado.
                </p>
              </Prose>

              <H3>Sintomas mais comuns</H3>
              <Prose className="mt-3">
                <ul>
                  {sintomas.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p>
                  A opacidade do cristalino espalha a luz em vez de focalizá-la em um único ponto.
                  Por isso, mais do que o grau, o que se perde é a qualidade da imagem: contraste,
                  nitidez e definição das cores.
                </p>
              </Prose>

              <H3>Como os sintomas podem evoluir?</H3>
              <Prose className="mt-3">
                <p>
                  No início, a catarata pode causar apenas uma leve perda de contraste ou um
                  ofuscamento maior à noite, e os óculos ainda corrigem bem a visão. Com a
                  progressão, a troca de lentes passa a trazer pouco benefício, e a dificuldade
                  começa a interferir em atividades do dia a dia, como dirigir, ler, trabalhar ou
                  caminhar com segurança.
                </p>
                <p>
                  A velocidade dessa evolução varia muito. Em algumas pessoas, a catarata permanece
                  discreta por muitos anos; em outras, especialmente em determinados tipos de
                  catarata ou na presença de fatores de risco, a piora pode ser mais rápida.
                </p>
              </Prose>

              <H3>Um sinal que merece atenção</H3>
              <Prose className="mt-3">
                <p>
                  Algumas pessoas percebem que voltaram a ler sem os óculos de perto. Essa “melhora”
                  pode parecer uma boa notícia, mas muitas vezes é causada pela mudança do grau
                  provocada pela própria catarata e costuma vir acompanhada de piora da visão para
                  longe. Vale uma avaliação.
                </p>
              </Prose>

              {/* Simulação da visão com catarata (foto vertical → recorte 4:3 centralizado) */}
              <ArticleFigure
                file="catarata_visao.jpg"
                alt="Rua à noite vista com catarata: imagem enevoada, amarelada e com halos ao redor das luzes"
                ratio="4/3"
                imgClassName="object-[50%_55%]"
              />

              {/* 3 — Causas */}
              <H2 id="causas">O que pode causar a catarata?</H2>
              <Prose className="mt-4">
                <p>
                  A causa mais comum é o envelhecimento natural do cristalino. Porém, diversos
                  fatores podem antecipar o seu aparecimento ou acelerar a sua progressão.
                </p>
                <p>É importante distinguir:</p>
                <ul>
                  <li>
                    <strong>Causa:</strong> mecanismo diretamente responsável pela opacificação do
                    cristalino.
                  </li>
                  <li>
                    <strong>Fator de risco:</strong> característica, condição ou hábito associado a
                    uma probabilidade maior de desenvolvimento ou progressão.
                  </li>
                </ul>
              </Prose>

              <H3>Envelhecimento</H3>
              <Prose className="mt-3">
                <p>
                  É a principal causa. Alterações no cristalino começam a surgir a partir da
                  meia-idade, mas a maioria das pessoas só percebe impacto na visão anos depois. Ter
                  alguma opacidade no cristalino não significa, necessariamente, precisar operar.
                </p>
              </Prose>

              <H3>Diabetes</H3>
              <Prose className="mt-3">
                <p>
                  O diabetes está associado ao aparecimento mais precoce da catarata e à sua
                  progressão mais rápida. O bom controle da glicemia faz parte do cuidado com os
                  olhos, e o exame de retina é indispensável no planejamento cirúrgico de quem tem
                  diabetes.
                </p>
              </Prose>

              <H3>Uso de corticoides</H3>
              <Prose className="mt-3">
                <p>
                  O uso prolongado de corticoides (em comprimidos, colírios, inalatórios ou pomadas
                  ao redor dos olhos) pode favorecer um tipo específico de catarata. Nenhum
                  tratamento deve ser interrompido por conta própria; a decisão deve ser feita com o
                  médico que o prescreveu.
                </p>
              </Prose>

              <H3>Trauma e cirurgias oculares anteriores</H3>
              <Prose className="mt-3">
                <p>
                  Pancadas no olho, perfurações e algumas cirurgias intraoculares, como as de
                  retina, podem levar ao desenvolvimento de catarata, às vezes anos depois do
                  evento.
                </p>
              </Prose>

              <H3>Radiação ultravioleta e tabagismo</H3>
              <Prose className="mt-3">
                <p>
                  A exposição prolongada ao sol sem proteção e o tabagismo estão associados a maior
                  risco de catarata. Óculos de sol com proteção UV e o abandono do cigarro são
                  medidas simples de proteção.
                </p>
              </Prose>

              <H3>Catarata congênita e em pessoas jovens</H3>
              <Prose className="mt-3">
                <p>
                  A catarata também pode estar presente ao nascimento ou surgir na infância, por
                  causas genéticas, infecções durante a gestação ou alterações metabólicas. Em
                  crianças, o diagnóstico precoce é essencial porque a visão ainda está em
                  desenvolvimento.
                </p>
              </Prose>

              <H3>Colírio dissolve catarata?</H3>
              <Prose className="mt-3">
                <p>
                  Não. Até o momento, não existe colírio, suplemento, exercício ou tratamento
                  natural capaz de reverter ou dissolver a catarata. Promessas nesse sentido devem
                  ser vistas com cautela. O único tratamento eficaz é a cirurgia.
                </p>
              </Prose>

              {/* TROCAR IMAGEM AQUI: foto provisória (mesma do guia de Ceratocone) —
                  substituir em content/images.ts pela chave catarata_consultorio.jpg */}
              <ArticleFigure
                file="catarata_consultorio.jpg"
                alt="Dra. Samara Marafon examinando um paciente na lâmpada de fenda"
                ratio="3/2"
                imgClassName="object-[50%_18%]"
              />

              {/* 4 — Diagnóstico */}
              {/* faixa tonalizada (identidade — areia ~13%) para quebrar a monotonia do bloco */}
              <div className="my-12 rounded-[24px] bg-secondary/[0.13] px-4 pb-4 pt-8 sm:px-8 sm:pb-8 sm:pt-12 [&>*:first-child]:!mt-0">
                <H2 id="diagnostico">Como é feito o diagnóstico?</H2>
                <Prose className="mt-4">
                  <p>
                    Nem todo embaçamento é catarata. Muitas vezes, a névoa vem da superfície ocular:
                    olho seco, irregularidade na córnea ou até o uso inadequado de colírios. Por
                    isso, antes de pensar em cirurgia, é preciso entender de onde ela vem.
                  </p>
                  <p>
                    O diagnóstico da catarata é feito no consultório, com o exame do cristalino na
                    lâmpada de fenda após a dilatação da pupila. Mas confirmar que existe catarata é
                    apenas o primeiro passo: também é preciso entender o quanto ela explica a queda
                    da visão e avaliar todas as estruturas do olho que influenciam o resultado da
                    cirurgia.
                  </p>
                  <p>Durante a consulta, o especialista pode investigar:</p>
                  <ul>
                    <li>quando a visão começou a mudar;</li>
                    <li>quais atividades se tornaram mais difíceis;</li>
                    <li>dificuldade para dirigir à noite ou ofuscamento;</li>
                    <li>uso de medicamentos, especialmente corticoides;</li>
                    <li>doenças como diabetes, hipertensão ou glaucoma;</li>
                    <li>
                      cirurgias oculares anteriores, inclusive cirurgia refrativa (LASIK, PRK);
                    </li>
                    <li>uso de lentes de contato;</li>
                    <li>expectativas em relação ao uso de óculos após a cirurgia.</li>
                  </ul>
                </Prose>

                <H3>Principais exames</H3>
                <DataTable headers={examesHeaders} rows={examesRows} />
                <Prose>
                  <p>
                    A catarata explica a baixa visão quando a opacidade do cristalino é compatível
                    com os sintomas e as demais estruturas do olho estão saudáveis. Quando existe
                    outra condição associada, na córnea, na retina ou no nervo óptico, ela precisa
                    ser identificada antes da cirurgia, porque pode influenciar o resultado
                    esperado.
                  </p>
                </Prose>

                <H3>Qual é o momento certo de operar?</H3>
                <Prose className="mt-3">
                  <p>
                    Não é preciso esperar a catarata “amadurecer”. Essa recomendação vem de uma
                    época em que as técnicas cirúrgicas eram outras. Hoje, cataratas muito avançadas
                    tendem a tornar a cirurgia tecnicamente mais complexa.
                  </p>
                  <p>
                    Em geral, a cirurgia é indicada quando a catarata passa a interferir na
                    qualidade de vida: dificuldade para dirigir, ler, trabalhar, praticar atividades
                    ou realizar tarefas com segurança. Não existe um número mágico de visão que
                    defina essa decisão. Ela é construída em conjunto, considerando os exames, os
                    sintomas e a rotina de cada pessoa.
                  </p>
                  <p>
                    Em algumas situações, a cirurgia pode ser recomendada mesmo com sintomas leves,
                    como quando a catarata dificulta o tratamento ou o acompanhamento de outras
                    doenças oculares.
                  </p>
                </Prose>

                <H3>Se eu ainda enxergo bem, preciso me preocupar?</H3>
                <Prose className="mt-3">
                  <p>
                    Uma catarata inicial, que não atrapalha a rotina, pode ser apenas acompanhada
                    com consultas periódicas e, quando necessário, ajuste do grau dos óculos. O
                    acompanhamento serve justamente para identificar o momento em que a cirurgia
                    passa a trazer benefício real.
                  </p>
                </Prose>
              </div>

              {/* 5 — Tratamento */}
              {/* faixa tonalizada (identidade — areia ~13%) para quebrar a monotonia do bloco */}
              <div className="my-12 rounded-[24px] bg-secondary/[0.13] px-4 pb-4 pt-8 sm:px-8 sm:pb-8 sm:pt-12 [&>*:first-child]:!mt-0">
                <H2 id="tratamento">Qual é o tratamento para catarata?</H2>
                <Prose className="mt-4">
                  <p>
                    Nas fases iniciais, a troca dos óculos, uma iluminação adequada e o uso de
                    óculos de sol podem melhorar o conforto visual. Porém, essas medidas não
                    interrompem a progressão da catarata.
                  </p>
                  <p>
                    <Mark>
                      O único tratamento capaz de devolver a transparência à visão é a cirurgia, que
                      substitui o cristalino opaco por uma lente intraocular artificial.
                    </Mark>
                  </p>
                  <p>A cirurgia tem dois objetivos que caminham juntos:</p>
                  <ol>
                    <li>Remover a opacidade que embaça a visão.</li>
                    <li>
                      Corrigir, por meio da lente intraocular escolhida, parte ou a totalidade do
                      grau do paciente.
                    </li>
                  </ol>
                  <p>O planejamento depende de fatores como:</p>
                  <ul>
                    <li>intensidade da catarata;</li>
                    <li>saúde da córnea, da retina e do nervo óptico;</li>
                    <li>presença de astigmatismo;</li>
                    <li>cirurgias refrativas anteriores;</li>
                    <li>medidas do olho obtidas na biometria;</li>
                    <li>profissão, hobbies e rotina visual;</li>
                    <li>expectativa em relação ao uso de óculos;</li>
                    <li>tolerância a halos e ofuscamento noturnos.</li>
                  </ul>
                </Prose>

                <H3>Comparação geral das lentes intraoculares</H3>
                <Prose className="mt-3">
                  <p>
                    Existem diferentes tipos de lente intraocular. O quadro abaixo apresenta, de
                    forma geral, as principais categorias e suas características. A indicação de
                    cada uma depende das particularidades de cada olho e é definida na avaliação.
                  </p>
                </Prose>
                <DataTable headers={lentesHeaders} rows={lentesRows} />

                {/* 6 — Cirurgia */}
                <H2 id="cirurgia" className="mt-24 md:mt-28">
                  Cirurgia de catarata
                </H2>

                {/* Etapas da cirurgia de catarata */}
                <Illustration
                  file="catarata_cirurgia_passos.jpg"
                  ratio="1672/941"
                  alt="Cinco etapas da cirurgia de catarata: microincisão na córnea, fragmentação do cristalino opaco com ultrassom, aspiração dos fragmentos, implante da lente intraocular no lugar do cristalino e resultado com a visão mais nítida após a recuperação"
                />

                <H3>O que é?</H3>
                <Prose className="mt-3">
                  <p>
                    A cirurgia de catarata consiste na remoção do cristalino opaco e na sua
                    substituição por uma lente intraocular artificial, que permanece dentro do olho
                    de forma definitiva.
                  </p>
                </Prose>

                <H3>Como é feita?</H3>
                <Prose className="mt-3">
                  <p>
                    A técnica mais utilizada é a facoemulsificação. Por meio de uma incisão muito
                    pequena na córnea, o cirurgião abre a cápsula que envolve o cristalino,
                    fragmenta o seu conteúdo com ultrassom e o aspira. Em seguida, uma lente
                    dobrável é implantada dentro dessa mesma cápsula, onde se abre e se posiciona.
                  </p>
                  <p>
                    Em geral, a incisão é tão pequena que se fecha sozinha, sem necessidade de
                    pontos.
                  </p>
                </Prose>

                <H3>Como é a anestesia?</H3>
                <Prose className="mt-3">
                  <p>
                    A cirurgia é feita com anestesia local, e o paciente permanece confortável
                    durante o procedimento. Costuma durar menos de 20 minutos, e a alta acontece no
                    mesmo dia, com poucos cuidados no pós-operatório.
                  </p>
                </Prose>

                <H3>Os dois olhos são operados juntos?</H3>
                <Prose className="mt-3">
                  <p>
                    Normalmente, os olhos são operados em dias diferentes, com um intervalo definido
                    pelo cirurgião. Isso permite avaliar a recuperação e o resultado do primeiro
                    olho antes de operar o segundo.
                  </p>
                </Prose>

                <H3>Como é a recuperação?</H3>
                <Prose className="mt-3">
                  <p>Nos primeiros dias, pode haver:</p>
                  <ul>
                    <li>visão embaçada ou oscilante;</li>
                    <li>sensação de areia ou corpo estranho;</li>
                    <li>sensibilidade à luz;</li>
                    <li>leve vermelhidão;</li>
                    <li>lacrimejamento.</li>
                  </ul>
                  <p>
                    Muitas pessoas percebem melhora já nos primeiros dias, mas a visão vai clareando
                    aos poucos ao longo das semanas seguintes. Durante a recuperação, utilizam-se
                    colírios conforme a prescrição, e é importante evitar coçar ou pressionar o
                    olho, ambientes com poeira, piscina e mar pelo período orientado.
                  </p>
                  <p>
                    O grau definitivo dos óculos, quando necessário, costuma ser prescrito algumas
                    semanas após a cirurgia, quando o olho estiver estável.
                  </p>
                </Prose>

                <H3>Quais são as limitações e os riscos?</H3>
                <Prose className="mt-3">
                  <p>
                    A cirurgia de catarata é um dos procedimentos mais realizados e seguros da
                    medicina quando bem indicada e planejada. Ainda assim, como qualquer cirurgia,
                    não é isenta de riscos, como inflamação, aumento da pressão ocular, inchaço da
                    córnea ou da retina e, raramente, infecção ou descolamento de retina.
                  </p>
                  <p>
                    O resultado visual também depende da saúde das demais estruturas do olho. Quando
                    há doenças na córnea, na retina ou no nervo óptico, a melhora pode ser menor do
                    que a esperada. Por isso, a avaliação completa antes da cirurgia é tão
                    importante.
                  </p>
                </Prose>

                <H3>A catarata pode voltar?</H3>
                <Prose className="mt-3">
                  <p>
                    A catarata não volta, porque o cristalino foi removido. Porém, meses ou anos
                    depois, a cápsula que sustenta a lente intraocular pode ficar opaca, causando
                    sintomas parecidos com os da catarata. Essa condição é chamada de opacificação
                    da cápsula posterior.
                  </p>
                  <p>
                    O tratamento é simples: um procedimento rápido com laser (YAG laser), feito no
                    consultório, sem cortes, que devolve a transparência ao eixo visual.
                  </p>
                </Prose>

                {/* 7 — Lentes intraoculares */}
                <H2 id="lentes-intraoculares" className="mt-24 md:mt-28">
                  Lentes intraoculares
                </H2>

                {/* Tipos de lente intraocular */}
                <Illustration
                  file="catarata_lentes.jpg"
                  ratio="1672/941"
                  alt="Quatro tipos de lente intraocular: monofocal, com foco único para longe ou perto; multifocal, com múltiplos focos para diferentes distâncias; tórica, que corrige catarata e astigmatismo; e EDOF, que amplia a faixa de foco com transição suave"
                />

                <H3>O que é uma lente intraocular?</H3>
                <Prose className="mt-3">
                  <p>
                    É uma lente artificial, pequena e dobrável, implantada dentro do olho no lugar
                    do cristalino. Ela é definitiva, não precisa ser trocada e não é percebida pelo
                    paciente no dia a dia.
                  </p>
                </Prose>

                <H3>Como o grau da lente é definido?</H3>
                <Prose className="mt-3">
                  <p>
                    O grau é calculado a partir das medidas da biometria, das informações da córnea
                    e de fórmulas específicas. Esse cálculo é bastante preciso, mas pode ser mais
                    desafiador em olhos muito longos ou muito curtos e em pacientes que já fizeram
                    cirurgia refrativa.
                  </p>
                </Prose>

                <H3>Como escolher a lente?</H3>
                <Prose className="mt-3">
                  <p>
                    Não existe uma lente melhor para todos. Existe a lente escolhida para aquele
                    olhar específico, e não uma lente padrão de catálogo. A escolha considera os
                    exames, a presença de astigmatismo, a saúde da córnea e da retina, as atividades
                    do dia a dia e o quanto o paciente deseja e aceita depender de óculos.
                  </p>
                  <p>
                    Lentes que oferecem visão em várias distâncias podem proporcionar mais
                    independência dos óculos, mas costumam vir acompanhadas de algum grau de halos e
                    ofuscamento noturnos. Para algumas pessoas, essa troca vale a pena; para outras,
                    não. Essa conversa faz parte do planejamento.
                  </p>
                </Prose>

                <H3>Vou ficar livre dos óculos?</H3>
                <Prose className="mt-3">
                  <p>
                    Depende do tipo de lente escolhido e das características de cada olho. Com
                    lentes monofocais, é comum precisar de óculos para perto. Com lentes
                    multifocais, trifocais ou de foco estendido, muitas pessoas reduzem bastante a
                    dependência dos óculos, mas isso não pode ser garantido para todos os casos e
                    todas as atividades.
                  </p>
                </Prose>

                <H3>O astigmatismo pode ser corrigido na cirurgia?</H3>
                <Prose className="mt-3">
                  <p>
                    Sim. Quando o astigmatismo da córnea é regular e significativo, as lentes
                    tóricas podem corrigi-lo no mesmo procedimento. Em córneas irregulares, como no
                    ceratocone, a avaliação precisa ser mais cuidadosa, porque nem todo astigmatismo
                    pode ser corrigido pela lente.
                  </p>
                </Prose>

                {/* 8 — Catarata e córnea */}
                <H2 id="cornea" className="mt-24 md:mt-28">
                  Catarata e córnea: por que essa avaliação faz diferença
                </H2>
                <Prose className="mt-4">
                  <p>
                    A córnea é a primeira lente do olho e responde pela maior parte do seu poder de
                    foco. Por isso, a saúde e o formato da córnea influenciam diretamente o cálculo
                    da lente intraocular, a escolha do tipo de lente e o resultado final da cirurgia
                    de catarata.
                  </p>
                  <p>Algumas situações exigem um planejamento especialmente cuidadoso:</p>
                </Prose>

                <H3>Ceratocone</H3>
                <Prose className="mt-3">
                  <p>
                    No <Link to="/ceratocone">ceratocone</Link>, a córnea é irregular, e as medidas
                    usadas para calcular a lente podem ser menos previsíveis. A escolha da lente
                    precisa considerar o estágio da doença, a regularidade da córnea e o fato de que
                    muitos pacientes continuarão precisando de lentes de contato especiais após a
                    cirurgia. Lentes multifocais, em geral, não são indicadas em córneas muito
                    irregulares.
                  </p>
                </Prose>

                <H3>Distrofia de Fuchs</H3>
                <Prose className="mt-3">
                  <p>
                    Na <Link to="/distrofias">distrofia de Fuchs</Link>, as células endoteliais,
                    responsáveis por manter a córnea transparente, estão reduzidas. A cirurgia de
                    catarata pode sobrecarregar ainda mais essas células. A microscopia especular e
                    a tomografia ajudam a avaliar o risco e, em alguns casos, a planejar a cirurgia
                    de catarata em conjunto com um transplante da camada interna da córnea (DMEK),
                    muitas vezes no mesmo procedimento. Em outros casos, como em córneas com
                    cirurgias antigas, pode ser mais seguro fazer o transplante primeiro, esperar a
                    córnea cicatrizar no seu próprio tempo e só depois operar a catarata, com mais
                    precisão.
                  </p>
                </Prose>

                <H3>Olho seco</H3>
                <Prose className="mt-3">
                  <p>
                    Um filme lacrimal instável altera as medidas da córnea e pode levar a erros no
                    cálculo da lente. Tratar o <Link to="/olho-seco">olho seco</Link> antes dos
                    exames pré-operatórios melhora a precisão do planejamento e o conforto após a
                    cirurgia.
                  </p>
                </Prose>

                <H3>Cirurgia refrativa prévia</H3>
                <Prose className="mt-3">
                  <p>
                    Quem já fez LASIK, PRK ou ceratotomia radial pode operar catarata normalmente,
                    mas a córnea modificada exige fórmulas especiais de cálculo. Levar os dados da
                    cirurgia anterior, quando disponíveis, ajuda no planejamento.
                  </p>
                  <p>
                    <Mark>
                      Quando a córnea não está saudável, a cirurgia de catarata precisa ser
                      planejada pensando nela também. A avaliação por um especialista em córnea
                      ajuda a reduzir surpresas e a alinhar expectativas.
                    </Mark>
                  </p>
                </Prose>
              </div>
            </article>

            <Sidebar />
          </div>
        </div>
      </section>

      {/* Quando procurar — bloco 2 colunas alternadas */}
      <section id="especialista" className="bg-paper py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-12">
            <Reveal variant="image" className="order-2 md:order-1 md:h-full">
              <Figure
                file="catarata_especialista.jpg"
                alt="Dra. Samara Marafon ajustando o refrator no consultório"
                ratio="4/3"
                imgClassName="object-left"
                className="rounded-md md:h-full md:w-full md:[aspect-ratio:auto]!"
              />
            </Reveal>
            <div className="order-1 md:order-2">
              <Reveal>
                <h2 className="font-sans text-[clamp(1.6rem,3.5vw,2rem)] font-bold leading-tight tracking-[-0.01em] text-primary">
                  Quando procurar um oftalmologista?
                </h2>
              </Reveal>
              <Prose className="mt-4">
                <p>Procure avaliação quando perceber:</p>
                <ul>
                  {procurarEspecialista.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>
                  A partir dos 40 anos, consultas oftalmológicas periódicas ajudam a identificar a
                  catarata e outras condições, mesmo antes de os sintomas atrapalharem a rotina.
                </p>
              </Prose>
            </div>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
            <div>
              <Reveal>
                <h2 className="font-sans text-[clamp(1.6rem,3.5vw,2rem)] font-bold leading-tight tracking-[-0.01em] text-primary">
                  Quando procurar atendimento com urgência?
                </h2>
              </Reveal>
              <Prose className="mt-4">
                <p>Busque avaliação rápida diante de:</p>
                <ul>
                  {procurarUrgencia.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>
                  Esses sinais não devem ser atribuídos automaticamente à catarata, que costuma
                  evoluir de forma lenta. Eles podem indicar outras condições que precisam de
                  tratamento imediato.
                </p>
              </Prose>
            </div>
            <Reveal variant="image" className="md:h-full">
              <Figure
                file="catarata_urgencia.jpg"
                alt="Detalhe de uma consulta médica sobre a mesa do consultório"
                ratio="4/3"
                className="rounded-md md:h-full md:w-full md:[aspect-ratio:auto]!"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principais pontos */}
      <section className="bg-background py-6 md:py-8">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.1] p-7 sm:p-9">
            <h2 className="font-sans text-[clamp(1.6rem,3.5vw,2rem)] font-bold text-primary">
              Principais pontos sobre a catarata
            </h2>
            <ul className="mt-5 space-y-2.5 text-[0.92rem] leading-relaxed text-foreground/90 [&_li]:relative [&_li]:pl-6">
              {pontosPrincipais.map((p) => (
                <li key={p}>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.55em] block h-1.5 w-1.5 rounded-full bg-primary"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ — acordeão com respostas recolhidas */}
      <section id="faq" className="bg-background py-14 md:py-20">
        <div className="mx-auto w-full max-w-[820px] px-5 sm:px-8">
          <Reveal>
            <h2 className="font-sans text-[clamp(2rem,4.6vw,2.8rem)] font-bold leading-tight text-primary">
              Perguntas frequentes sobre catarata
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
