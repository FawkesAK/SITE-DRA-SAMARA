import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  CTAButton,
  FAQAccordion,
  Figure,
  Reveal,
  Section,
} from "@/components/site/blocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { imageUrl } from "@/content/images";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ceratocone")({
  head: () => ({
    meta: [
      { title: "Ceratocone: sintomas, diagnóstico e tratamentos | Dra. Samara Marafon" },
      {
        name: "description",
        content:
          "Guia completo sobre ceratocone: como reconhecer os sinais, confirmar o diagnóstico e entender tratamentos como lentes especiais, crosslinking, anel intracorneano e transplante de córnea.",
      },
      { property: "og:title", content: "Ceratocone: sintomas, diagnóstico e tratamentos" },
      {
        property: "og:description",
        content:
          "Entenda a doença que altera progressivamente o formato da córnea: sinais, diagnóstico e tratamentos.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/ceratocone" },
    ],
    links: [{ rel: "canonical", href: "/ceratocone" }],
  }),
  component: Page,
});

/* ------------------------------ Links WhatsApp ------------------------------ */

const WHATSAPP_AGENDAR = site.whatsappUrl;
const WHATSAPP_CONTATO =
  "https://api.whatsapp.com/send?phone=55051993929951&text=Oi,%20vim%20do%20site%20da%20Dra%20Samara%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta";

/* -------------------------------- Conteúdo -------------------------------- */

const indice = [
  { id: "o-que-e", label: "O que é o ceratocone?" },
  { id: "sintomas", label: "Quais são os sintomas?" },
  { id: "causas", label: "O que causa o ceratocone?" },
  { id: "diagnostico", label: "Como é feito o diagnóstico?" },
  { id: "tratamentos", label: "Quais são os tratamentos?" },
  { id: "crosslinking", label: "Crosslinking" },
  { id: "anel", label: "Anel intracorneano" },
  { id: "lentes", label: "Lentes de contato" },
  { id: "transplante", label: "Quando o transplante pode ser necessário?" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "especialista", label: "Quando procurar um especialista?" },
];

const sintomas = [
  "Visão embaçada, mesmo usando óculos.",
  "Imagens distorcidas ou “esticadas”.",
  "Aumento frequente da miopia ou do astigmatismo.",
  "Trocas repetidas de receita em pouco tempo.",
  "Dificuldade maior para enxergar à noite.",
  "Halos ao redor das luzes.",
  "Sensibilidade à luz.",
  "Reflexos e ofuscamento.",
  "Visão dupla ou múltiplas imagens em um único olho.",
  "Diferença importante de visão entre os dois olhos.",
];

const examesHeaders = ["Exame", "O que avalia", "Por que é importante"];
const examesRows = [
  [
    "Biomicroscopia",
    "Aspectos da córnea observados no consultório.",
    "Pode identificar sinais clínicos, cicatrizes e outras alterações.",
  ],
  [
    "Topografia da córnea",
    "Curvatura da superfície anterior.",
    "Mostra padrões de astigmatismo e irregularidade.",
  ],
  [
    "Tomografia da córnea",
    "Superfícies anterior e posterior, elevação e distribuição da espessura.",
    "Auxilia na detecção de alterações iniciais e no acompanhamento.",
  ],
  [
    "Paquimetria",
    "Espessura corneana.",
    "Identifica afinamento e auxilia no planejamento terapêutico.",
  ],
  [
    "Refração",
    "Grau necessário para corrigir a visão.",
    "Mostra miopia, astigmatismo e qualidade da correção.",
  ],
  [
    "Mapas epiteliais ou biomecânicos",
    "Distribuição do epitélio ou resposta mecânica da córnea.",
    "Podem complementar casos selecionados.",
  ],
];

const comparacaoHeaders = [
  "Tratamento",
  "Objetivo",
  "Quando pode ser considerado",
  "Limitações",
];
const comparacaoRows = [
  [
    "Óculos",
    "Corrigir o grau",
    "Casos iniciais e mais regulares.",
    "Podem não corrigir bem o astigmatismo irregular.",
  ],
  [
    "Lentes especiais",
    "Melhorar a qualidade visual",
    "Quando os óculos são insuficientes.",
    "Dependem de adaptação, higiene e tolerância. Não garantem melhora visual nem eliminam o grau.",
  ],
  [
    "Crosslinking",
    "Estabilizar uma córnea em progressão",
    "Quando há progressão documentada ou alto risco, conforme avaliação.",
    "Não tem como objetivo eliminar o grau; recuperação com desconforto nos primeiros dias.",
  ],
  [
    "Anel intracorneano",
    "Regularizar parcialmente a córnea",
    "Casos selecionados com baixa qualidade visual ou intolerância a lentes.",
    "Resultado variável; não substitui automaticamente lentes ou crosslinking.",
  ],
  [
    "Transplante",
    "Substituir tecido corneano comprometido",
    "Casos avançados, com cicatriz ou visão inadequada.",
    "Cirurgia de maior complexidade e recuperação prolongada.",
  ],
];

const pontosPrincipais = [
  "O ceratocone torna a córnea mais fina e irregular.",
  "Pode causar visão embaçada, distorção e mudanças frequentes no grau.",
  "Sua origem envolve predisposição biológica e fatores ambientais.",
  "Coçar os olhos deve ser evitado e alergias precisam ser controladas.",
  "Topografia e tomografia são fundamentais para diagnóstico e acompanhamento.",
  "Óculos e lentes corrigem a visão, mas não estabilizam necessariamente a doença.",
  "O crosslinking tem como principal objetivo reduzir a progressão.",
  "O anel intracorneano busca melhorar a regularidade da córnea em casos selecionados.",
  "Nem todo paciente precisará de transplante.",
  "O tratamento deve ser definido individualmente, de acordo com os exames e os objetivos do paciente.",
];

const procurarEspecialista = [
  "Visão embaçada ou distorcida sem explicação.",
  "Troca frequente do grau.",
  "Astigmatismo que aumenta rapidamente.",
  "Dificuldade para alcançar boa visão com óculos.",
  "Halos e ofuscamento intensos.",
  "Diferença crescente entre os olhos.",
  "Histórico familiar de ceratocone.",
  "Coceira ocular frequente.",
  "Intolerância às lentes de contato.",
  "Diagnóstico prévio sem acompanhamento recente.",
];

const procurarUrgencia = [
  "Queda súbita da visão.",
  "Dor ocular intensa.",
  "Córnea com aparência esbranquiçada.",
  "Vermelhidão importante.",
  "Sensibilidade intensa à luz.",
  "Secreção.",
  "Dor durante o uso de lentes de contato.",
];

const faq = [
  {
    q: "O ceratocone pode causar cegueira?",
    a: "Ele pode causar perda importante da qualidade visual, mas a cegueira total é incomum. Mesmo em casos avançados, existem recursos de reabilitação visual e tratamentos cirúrgicos. O diagnóstico e o acompanhamento adequados reduzem o risco de chegar a estágios mais complexos.",
  },
  {
    q: "O ceratocone tem cura?",
    a: "Não existe um tratamento que faça a córnea retornar biologicamente ao seu estado original. Entretanto, é possível estabilizar a progressão e melhorar a visão com diferentes estratégias.",
  },
  {
    q: "O ceratocone sempre piora?",
    a: "Não. Alguns casos permanecem estáveis. Outros progridem, especialmente em pessoas mais jovens. Apenas o acompanhamento com exames comparativos pode determinar o comportamento de cada córnea.",
  },
  {
    q: "Coçar os olhos realmente piora?",
    a: "O atrito frequente está associado à progressão e deve ser evitado. Quem apresenta coceira recorrente precisa investigar alergia ou olho seco e receber tratamento adequado.",
  },
  {
    q: "Quem tem ceratocone pode usar lentes?",
    a: "Sim. Lentes rígidas, híbridas ou esclerais podem proporcionar excelente visão. A escolha depende do formato da córnea, do conforto e da adaptação individual.",
  },
  {
    q: "As lentes impedem que o ceratocone progrida?",
    a: "Não. Elas melhoram a qualidade visual, mas não fortalecem a córnea. Quando há progressão, o especialista pode avaliar crosslinking.",
  },
  {
    q: "Quem tem ceratocone pode dirigir?",
    a: "Depende da qualidade visual obtida com a correção e dos critérios legais para habilitação. Algumas pessoas dirigem normalmente com óculos ou lentes; outras apresentam dificuldade maior à noite devido a halos e ofuscamento.",
  },
  {
    q: "Crosslinking melhora a visão?",
    a: "Pode ocorrer alguma melhora, mas seu objetivo principal é estabilizar a córnea. O paciente pode continuar precisando de óculos ou lentes.",
  },
  {
    q: "Crosslinking e anel podem ser feitos juntos?",
    a: "Em casos selecionados, sim. Entretanto, eles cumprem funções diferentes, e a melhor ordem depende da anatomia e da progressão da córnea.",
  },
  {
    q: "O anel de Ferrara substitui o crosslinking?",
    a: "Não. O anel busca regularizar a córnea; o crosslinking busca reduzir a progressão. Um não substitui automaticamente o outro.",
  },
  {
    q: "Quem tem ceratocone pode fazer LASIK?",
    a: "O LASIK convencional geralmente é contraindicado em córneas com ceratocone porque remove tecido e pode aumentar sua fragilidade. Procedimentos personalizados de superfície podem ser considerados apenas em situações cuidadosamente selecionadas, frequentemente associados à estabilização.",
  },
  {
    q: "O ceratocone passa de pai para filho?",
    a: "Pode existir predisposição familiar, mas a transmissão não é direta nem obrigatória. Familiares próximos podem se beneficiar de avaliação, especialmente quando apresentam astigmatismo crescente ou visão difícil de corrigir.",
  },
  {
    q: "Posso praticar exercícios físicos?",
    a: "Na maioria dos casos, sim. É importante evitar traumas diretos nos olhos e seguir orientações específicas durante a recuperação de procedimentos.",
  },
  {
    q: "Gravidez pode alterar o ceratocone?",
    a: "Mudanças hormonais podem influenciar propriedades da córnea em algumas pacientes. Quem possui diagnóstico ou suspeita deve manter acompanhamento individualizado durante a gestação e o pós-parto.",
  },
  {
    q: "Crianças podem ter ceratocone?",
    a: "Sim. Embora seja frequentemente percebido na adolescência, pode aparecer mais cedo. Casos pediátricos merecem atenção porque podem progredir rapidamente.",
  },
  {
    q: "Dor é um sintoma comum?",
    a: "O ceratocone geralmente provoca piora visual, não dor constante. Dor súbita, vermelhidão ou queda rápida da visão exigem avaliação urgente, pois podem indicar lesão, infecção, problema com lentes ou uma complicação chamada hidropsia corneana.",
  },
  {
    q: "O que é hidropsia corneana?",
    a: "É uma complicação incomum em que ocorre entrada súbita de líquido na córnea, causando edema, embaçamento acentuado, sensibilidade à luz e, algumas vezes, dor. Precisa de avaliação oftalmológica rápida.",
  },
];

/* -------------------------------- Helpers -------------------------------- */

function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "space-y-4 text-[0.95rem] leading-[1.78] text-[#574b40]",
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

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <Reveal>
      <h2
        id={id}
        className="mt-16 text-[clamp(1.65rem,4vw,2.15rem)] leading-[1.15] tracking-[-0.01em] text-[#4a3629] first:mt-0"
      >
        {children}
      </h2>
    </Reveal>
  );
}

function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="mt-9 text-[1.18rem] leading-snug text-primary">
      {children}
    </h3>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <Reveal className="my-8 overflow-x-auto rounded-sm border border-border">
      <Table>
        <TableHeader>
          <TableRow className="border-border bg-secondary/40 hover:bg-secondary/40">
            {headers.map((h) => (
              <TableHead
                key={h}
                className="h-auto py-3 align-bottom text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#4a3629]"
              >
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="border-border align-top">
              {row.map((cell, j) => (
                <TableCell
                  key={j}
                  className={cn(
                    "py-4 text-[0.85rem] leading-relaxed text-[#574b40]",
                    j === 0 && "font-medium text-[#4a3629]",
                  )}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Reveal>
  );
}

function ArticleFigure({ file, alt }: { file: string; alt: string }) {
  return (
    <Reveal variant="image" className="my-12">
      <Figure file={file} alt={alt} ratio="16/9" className="rounded-sm" />
    </Reveal>
  );
}

/* --------------------------------- Página -------------------------------- */

function Page() {
  const ctaPhoto = imageUrl("home_14_cta_consultorio.jpg");
  const autoraPhoto = imageUrl("home_01_hero_dra_samara.jpg");

  return (
    <>
      {/* HERO */}
      <section className="texture-dark relative overflow-hidden bg-[var(--primary-deep)] pb-14 pt-28 text-[var(--primary-foreground)] md:pb-20 md:pt-32">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Ceratocone</p>
            <p className="mt-3 text-[0.98rem] text-[var(--primary-foreground)]/70">
              Entenda a doença que altera progressivamente o formato da córnea
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.01em]">
              Ceratocone: sintomas, diagnóstico e tratamentos
            </h1>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-[var(--primary-foreground)]/80">
              <p>
                O ceratocone é uma doença que torna a córnea progressivamente mais fina e
                irregular, comprometendo a qualidade da visão.
              </p>
              <p>
                Neste guia, você entenderá como reconhecer seus sinais, confirmar o diagnóstico
                e conhecer o papel de tratamentos como lentes especiais, crosslinking, anel
                intracorneano e transplante de córnea.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-9 max-w-2xl rounded-lg border border-[var(--primary-foreground)]/15 bg-[var(--primary-foreground)]/[0.06] p-5 sm:p-6"
          >
            <p className="eyebrow text-gold">Neste guia</p>
            <ol className="mt-4 grid gap-x-10 gap-y-2.5 text-[0.9rem] sm:grid-cols-2">
              {indice.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[var(--primary-foreground)]/80 transition-colors hover:text-[var(--primary-foreground)]"
                  >
                    <span className="mr-1 text-gold">{i + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ARTIGO */}
      <section className="texture-paper relative bg-background py-16 text-foreground md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <article className="mx-auto max-w-[720px]">
            <H2 id="o-que-e">O que é o ceratocone?</H2>
            <Prose className="mt-5">
              <p>
                O ceratocone é uma doença da córnea, a estrutura transparente localizada na parte
                da frente do olho. Em uma córnea saudável, sua curvatura regular ajuda a direcionar
                a luz para dentro do olho e a formar uma imagem nítida.
              </p>
              <p>
                No ceratocone, a córnea sofre afinamento e aumento irregular de sua curvatura. Em
                vez de manter um formato arredondado e uniforme, passa a se projetar para a frente,
                assumindo uma configuração semelhante à de um cone. Essa mudança produz
                principalmente astigmatismo irregular, o que dificulta a correção completa da visão
                com óculos em casos mais avançados.
              </p>
              <p>
                Uma forma simples de entender é imaginar a córnea como a lente de uma câmera.
                Quando a superfície dessa lente é uniforme, a imagem pode ser focalizada com
                precisão. Quando ela se torna irregular, a luz passa a se dispersar em diferentes
                direções, deixando a visão embaçada, distorcida ou com imagens duplicadas.
              </p>
              <p>
                O ceratocone não é uma infecção e não é simplesmente um “grau alto”. Trata-se de
                uma alteração estrutural da córnea que precisa ser acompanhada ao longo do tempo.
              </p>
              <p>
                Frequentemente, os dois olhos são afetados, mas não necessariamente com a mesma
                intensidade. Um olho pode apresentar alterações mais evidentes do que o outro. A
                doença costuma ser identificada na adolescência ou no início da vida adulta,
                embora possa ser diagnosticada em outras idades.
              </p>
            </Prose>

            <ArticleFigure
              file="ceratocone_01_diagrama.jpg"
              alt="Ilustração comparando uma córnea saudável arredondada com uma córnea em formato de cone"
            />

            <H2 id="sintomas">Quais são os sintomas do ceratocone?</H2>
            <Prose className="mt-5">
              <p>
                Os sintomas variam conforme o formato da córnea, o estágio da doença e a velocidade
                de progressão. Nas fases iniciais, podem parecer apenas uma mudança comum do grau
                dos óculos.
              </p>
            </Prose>

            <H3>Sintomas mais comuns</H3>
            <Prose className="mt-4">
              <ul>
                {sintomas.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p>
                A irregularidade da córnea faz com que os raios de luz deixem de convergir
                adequadamente para um único ponto. Por isso, aumentar apenas o grau dos óculos nem
                sempre produz uma visão plenamente nítida.
              </p>
            </Prose>

            <H3>Como os sintomas podem evoluir?</H3>
            <Prose className="mt-4">
              <p>
                No início, óculos ou lentes gelatinosas podem oferecer boa correção. Com o aumento
                da irregularidade, o paciente pode perceber que a receita muda rapidamente ou que
                os óculos já não entregam a mesma qualidade visual.
              </p>
              <p>
                Em fases mais avançadas, pode haver intolerância às lentes, cicatrizes na córnea e
                queda mais significativa da visão. Isso não significa que todas as pessoas seguirão
                essa evolução: alguns casos permanecem estáveis, enquanto outros progridem e
                precisam de intervenção.
              </p>
            </Prose>

            <H3>Um sinal que merece atenção</H3>
            <Prose className="mt-4">
              <p>
                Uma troca isolada de grau não significa necessariamente ceratocone. Entretanto,
                mudanças frequentes no astigmatismo, especialmente em adolescentes e adultos
                jovens, justificam uma avaliação mais detalhada da córnea.
              </p>
            </Prose>

            <ArticleFigure
              file="ceratocone_02_visao.jpg"
              alt="Cena urbana com aparência distorcida e embaçada, simulando a visão no ceratocone"
            />

            <H2 id="causas">O que pode causar o ceratocone?</H2>
            <Prose className="mt-5">
              <p>
                Não existe uma causa única conhecida. Atualmente, o ceratocone é compreendido como
                uma condição multifatorial, resultante da interação entre predisposição biológica,
                características genéticas e fatores ambientais.
              </p>
              <p>É importante distinguir:</p>
              <ul>
                <li>
                  <strong>Causa:</strong> mecanismo diretamente responsável pelo desenvolvimento da
                  doença.
                </li>
                <li>
                  <strong>Fator de risco:</strong> característica ou hábito associado a uma
                  probabilidade maior de desenvolvimento ou progressão.
                </li>
              </ul>
            </Prose>

            <H3>Predisposição genética</H3>
            <Prose className="mt-4">
              <p>
                Pessoas com familiares que apresentam ceratocone podem ter risco aumentado. Ainda
                assim, ter um parente com a doença não significa que o diagnóstico ocorrerá
                obrigatoriamente, e muitos pacientes não relatam histórico familiar conhecido.
              </p>
            </Prose>

            <H3>Coçar os olhos</H3>
            <Prose className="mt-4">
              <p>
                O hábito repetido e intenso de coçar os olhos está associado ao ceratocone e à sua
                progressão. O atrito mecânico constante pode contribuir para enfraquecer uma córnea
                já predisposta. Por isso, controlar coceira, alergias e irritação ocular faz parte
                do acompanhamento.
              </p>
            </Prose>

            <H3>Alergias oculares</H3>
            <Prose className="mt-4">
              <p>
                Conjuntivite alérgica, coceira intensa e dermatite atópica aparecem com maior
                frequência em parte dos pacientes. A alergia não deve ser tratada apenas para
                melhorar o conforto: reduzir o impulso de coçar os olhos também pode ajudar a
                proteger a córnea.
              </p>
            </Prose>

            <H3>Condições associadas</H3>
            <Prose className="mt-4">
              <p>
                O ceratocone pode ocorrer com maior frequência em pessoas com algumas síndromes
                genéticas ou doenças do tecido conjuntivo. Essas associações não significam que
                toda pessoa com uma dessas condições terá ceratocone.
              </p>
            </Prose>

            <H3>Uso de telas causa ceratocone?</H3>
            <Prose className="mt-4">
              <p>
                Não há evidência de que celulares ou computadores causem diretamente ceratocone. O
                uso prolongado de telas pode favorecer ressecamento, ardor e vontade de esfregar os
                olhos, e esse atrito, sim, deve ser evitado.
              </p>
            </Prose>

            <ArticleFigure
              file="ceratocone_03_olho.jpg"
              alt="Close-up de um olho, com detalhe da córnea e da íris"
            />

            <H2 id="diagnostico">Como é feito o diagnóstico?</H2>
            <Prose className="mt-5">
              <p>
                O diagnóstico não depende apenas da leitura das letras na tabela de visão. Ele
                combina a história clínica, o exame oftalmológico e tecnologias que analisam
                detalhadamente a forma, a espessura e a regularidade da córnea.
              </p>
              <p>Durante a consulta, o especialista pode investigar:</p>
              <ul>
                <li>quando os sintomas começaram;</li>
                <li>quantas vezes o grau mudou;</li>
                <li>histórico de alergia e coceira;</li>
                <li>uso e tolerância às lentes de contato;</li>
                <li>ocorrência de ceratocone na família;</li>
                <li>diferença de visão entre os olhos.</li>
              </ul>
            </Prose>

            <H3>Principais exames</H3>
            <DataTable headers={examesHeaders} rows={examesRows} />
            <Prose>
              <p>
                A tomografia tornou-se particularmente relevante porque alterações na face
                posterior e na distribuição da espessura podem aparecer antes de sinais mais
                evidentes na superfície anterior. Nenhum número isolado, porém, deve ser
                interpretado fora do conjunto dos exames e da evolução clínica.
              </p>
            </Prose>

            <H3>Um único exame confirma progressão?</H3>
            <Prose className="mt-4">
              <p>
                Normalmente, a progressão é avaliada comparando exames realizados em momentos
                diferentes, idealmente no mesmo equipamento e com boa qualidade de captura. O
                especialista observa mudanças consistentes em parâmetros como curvatura, elevação,
                espessura e refração.
              </p>
              <p>
                Por isso, uma diferença pequena entre dois mapas não significa automaticamente que
                a doença piorou. A interpretação precisa considerar a precisão do aparelho, a
                qualidade do exame, a idade do paciente e o comportamento conjunto dos indicadores.
              </p>
            </Prose>

            <H3>O ceratocone sempre progride?</H3>
            <Prose className="mt-4">
              <p>
                Não. A evolução é variável. Algumas pessoas apresentam mudanças rápidas, sobretudo
                quando a doença começa mais cedo. Outras permanecem estáveis durante anos. Em
                geral, pacientes jovens exigem acompanhamento mais atento porque têm maior tempo de
                vida para uma possível progressão e podem apresentar evolução mais acelerada.
              </p>
              <p>
                A estabilidade não deve ser presumida apenas porque o paciente “está enxergando
                bem”. É possível manter boa acuidade visual e ainda apresentar mudanças mensuráveis
                na córnea. Da mesma forma, uma piora da visão pode estar relacionada a outros
                fatores, como olho seco, lente mal adaptada ou alteração do grau.
              </p>
              <p>O acompanhamento periódico serve justamente para diferenciar essas situações.</p>
            </Prose>

            <ArticleFigure
              file="ceratocone_04_olho.jpg"
              alt="Exame detalhado da córnea em close-up"
            />

            <H2 id="tratamentos">Quais são os tratamentos para ceratocone?</H2>
            <Prose className="mt-5">
              <p>O tratamento possui dois objetivos diferentes:</p>
              <ol>
                <li>Melhorar a qualidade da visão.</li>
                <li>Reduzir o risco de progressão da doença.</li>
              </ol>
              <p>
                Esses objetivos não são equivalentes. Uma lente de contato pode proporcionar
                excelente visão, mas não estabiliza necessariamente a estrutura da córnea. O
                crosslinking pode reduzir o risco de progressão, mas não foi criado principalmente
                para eliminar o grau ou substituir óculos e lentes.
              </p>
              <p>A escolha depende de fatores como:</p>
              <ul>
                <li>idade;</li>
                <li>estabilidade ou progressão;</li>
                <li>espessura da córnea;</li>
                <li>localização da irregularidade;</li>
                <li>qualidade da visão com óculos ou lentes;</li>
                <li>presença de cicatriz;</li>
                <li>tolerância às lentes;</li>
                <li>objetivos e rotina do paciente.</li>
              </ul>
            </Prose>

            <H3>Comparação geral</H3>
            <DataTable headers={comparacaoHeaders} rows={comparacaoRows} />

            <H3>Óculos e lentes gelatinosas</H3>
            <Prose className="mt-4">
              <p>
                Nos estágios iniciais, óculos podem corrigir satisfatoriamente miopia e
                astigmatismo. Lentes gelatinosas tóricas também podem funcionar quando a
                irregularidade ainda é pequena.
              </p>
              <p>
                Com a progressão, a córnea deixa de possuir uma superfície suficientemente regular.
                Nesse momento, simplesmente aumentar o grau pode não produzir nitidez adequada.
              </p>
              <p>
                Óculos e lentes gelatinosas corrigem a visão, mas não modificam a estrutura da
                doença nem impedem sua progressão.
              </p>
            </Prose>

            <H3 id="lentes">Lentes rígidas</H3>
            <Prose className="mt-4">
              <p>
                As lentes rígidas criam uma superfície óptica mais regular sobre a córnea. O espaço
                entre a lente e a córnea é preenchido pelo filme lacrimal, neutralizando parte das
                irregularidades e melhorando a qualidade visual.
              </p>
              <p>
                Podem oferecer visão significativamente melhor do que os óculos em casos moderados.
                Entretanto:
              </p>
              <ul>
                <li>exigem adaptação especializada;</li>
                <li>podem causar desconforto inicial;</li>
                <li>precisam ser higienizadas corretamente;</li>
                <li>não devem ser usadas durante dor, vermelhidão ou suspeita de infecção;</li>
                <li>não impedem, por si só, a progressão do ceratocone.</li>
              </ul>
            </Prose>

            <H3>Lentes esclerais</H3>
            <Prose className="mt-4">
              <p>
                As lentes esclerais possuem diâmetro maior e se apoiam na parte branca do olho,
                chamada esclera. Elas formam um reservatório de líquido sobre a córnea, sem tocar
                diretamente sua região central.
              </p>
              <p>
                Podem ser úteis quando existe grande irregularidade, intolerância a lentes rígidas
                menores ou necessidade de melhor estabilidade e conforto. Em muitos pacientes,
                proporcionam excelente reabilitação visual e podem postergar ou evitar a
                necessidade de transplante.
              </p>
              <p>Suas limitações incluem:</p>
              <ul>
                <li>custo;</li>
                <li>necessidade de adaptação individual;</li>
                <li>curva de aprendizado para colocar e retirar;</li>
                <li>cuidados rigorosos com higiene;</li>
                <li>
                  possíveis problemas de embaçamento ou baixa oxigenação em alguns casos.
                </li>
              </ul>
              <p>
                A lente precisa ser avaliada periodicamente. Uma adaptação inadequada pode provocar
                desconforto, lesão da superfície ocular ou baixa qualidade visual.
              </p>
            </Prose>

            <ArticleFigure
              file="ceratocone_05_coca_olhos.jpg"
              alt="Pessoa esfregando os olhos com as mãos"
            />

            <H2 id="crosslinking">Crosslinking corneano</H2>

            <H3>O que é?</H3>
            <Prose className="mt-4">
              <p>
                O crosslinking é um procedimento criado para aumentar a resistência biomecânica da
                córnea e reduzir a chance de progressão do ceratocone.
              </p>
              <p>
                Na técnica convencional, aplica-se riboflavina (vitamina B2) sobre a córnea e, em
                seguida, uma dose controlada de luz ultravioleta A. Essa interação induz novas
                ligações entre as fibras de colágeno, tornando o tecido mais resistente.
              </p>
            </Prose>

            <H3>Qual é o principal objetivo?</H3>
            <Prose className="mt-4">
              <p>
                Estabilizar a doença. O crosslinking não deve ser apresentado como uma cirurgia
                para “tirar o grau”. Algumas pessoas apresentam melhora da curvatura ou da visão
                após o procedimento, mas esse efeito é variável e não constitui seu objetivo
                principal.
              </p>
            </Prose>

            <H3>Quando pode ser indicado?</H3>
            <Prose className="mt-4">
              <p>
                A indicação mais consolidada é o ceratocone progressivo. A decisão também considera
                idade, exames, espessura da córnea e risco individual de evolução.
              </p>
              <p>
                Em pacientes muito jovens, o especialista pode adotar uma vigilância mais estreita
                e discutir intervenção em um estágio mais precoce, porque a progressão pode ser
                mais rápida.
              </p>
            </Prose>

            <H3>Epi-off e epi-on</H3>
            <Prose className="mt-4">
              <p>
                No protocolo epi-off, o epitélio, camada superficial da córnea, é removido para
                permitir maior penetração da riboflavina. É a técnica com evidência mais
                consolidada para estabilização.
              </p>
              <p>
                No epi-on ou transepitelial, o epitélio é preservado. A recuperação tende a ser
                mais confortável, mas a penetração da riboflavina e a eficácia podem variar
                conforme o protocolo. A escolha não deve ser feita apenas com base no desconforto
                pós-operatório.
              </p>
            </Prose>

            <H3>Como é a recuperação?</H3>
            <Prose className="mt-4">
              <p>Nos primeiros dias, pode haver:</p>
              <ul>
                <li>ardor;</li>
                <li>sensação de areia;</li>
                <li>lacrimejamento;</li>
                <li>sensibilidade à luz;</li>
                <li>visão embaçada.</li>
              </ul>
              <p>
                Geralmente, utiliza-se uma lente terapêutica até a cicatrização do epitélio no
                protocolo epi-off. A visão pode oscilar durante as primeiras semanas, e a
                estabilização dos exames leva mais tempo.
              </p>
            </Prose>

            <H3>Quais são as limitações e os riscos?</H3>
            <Prose className="mt-4">
              <p>
                Embora seja considerado um procedimento seguro quando bem indicado, pode haver
                infecção, atraso da cicatrização, opacidade corneana, dor e redução visual. Córneas
                muito finas exigem protocolos e cuidados específicos para proteger suas camadas
                internas.
              </p>
            </Prose>

            <ArticleFigure
              file="ceratocone_06_olho.jpg"
              alt="Detalhe da córnea após procedimento, em close-up"
            />

            <H2 id="anel">Anel intracorneano ou Anel de Ferrara</H2>

            <H3>O que é?</H3>
            <Prose className="mt-4">
              <p>
                Os segmentos de anel intracorneano são pequenos implantes inseridos dentro da
                córnea. O Anel de Ferrara é um dos modelos utilizados.
              </p>
              <p>
                Eles modificam a geometria corneana e podem reduzir parte da irregularidade,
                tornando a superfície mais regular e melhorando a capacidade de correção com óculos
                ou lentes.
              </p>
            </Prose>

            <H3>Para que serve?</H3>
            <Prose className="mt-4">
              <p>
                O objetivo principal é a reabilitação visual, e não necessariamente a estabilização
                biológica da doença.
              </p>
              <p>Pode ser considerado quando:</p>
              <ul>
                <li>a visão com óculos é insatisfatória;</li>
                <li>existe intolerância às lentes;</li>
                <li>a córnea apresenta características adequadas para o implante;</li>
                <li>não há cicatriz central importante;</li>
                <li>o especialista identifica possibilidade de ganho funcional.</li>
              </ul>
            </Prose>

            <H3>Anel e crosslinking são a mesma coisa?</H3>
            <Prose className="mt-4">
              <p>
                Não. Crosslinking busca aumentar a resistência da córnea e controlar a progressão.
                Já o anel intracorneano busca modificar o formato da córnea e melhorar sua
                regularidade. Em alguns casos, os procedimentos podem ser combinados ou realizados
                em momentos diferentes. A indicação e a sequência dependem das características da
                córnea.
              </p>
            </Prose>

            <H3>O anel elimina a necessidade de óculos?</H3>
            <Prose className="mt-4">
              <p>
                Não necessariamente. Alguns pacientes ainda precisam de óculos ou lentes após o
                procedimento. O resultado varia conforme a posição do cone, o grau de
                irregularidade e a resposta individual.
              </p>
            </Prose>

            <H3>Como é a recuperação?</H3>
            <Prose className="mt-4">
              <p>
                É comum ocorrer oscilação visual, sensibilidade à luz e desconforto nas primeiras
                semanas. A visão e a refração podem continuar se modificando durante os meses
                seguintes.
              </p>
              <p>
                Embora o anel possa ser removido, isso não significa que toda alteração provocada
                pelo procedimento seja completamente reversível. Também existem riscos como
                infecção, deslocamento, extrusão e necessidade de reposicionamento ou retirada.
              </p>
            </Prose>

            <ArticleFigure
              file="ceratocone_07_olho.jpg"
              alt="Close-up de um olho com implante de anel intracorneano"
            />

            <H2 id="transplante">Transplante de córnea</H2>

            <H3>Todo paciente com ceratocone precisará de transplante?</H3>
            <Prose className="mt-4">
              <p>
                Não. Atualmente, muitos pacientes conseguem manter visão funcional com óculos,
                lentes especiais, crosslinking ou outras intervenções.
              </p>
              <p>O transplante costuma ser reservado para situações como:</p>
              <ul>
                <li>cicatriz central relevante;</li>
                <li>córnea muito irregular;</li>
                <li>visão insuficiente mesmo com lentes bem adaptadas;</li>
                <li>intolerância às alternativas disponíveis;</li>
                <li>afinamento ou deformidade avançados;</li>
                <li>complicações específicas.</li>
              </ul>
            </Prose>

            <H3>Quais tipos podem ser utilizados?</H3>
            <Prose className="mt-4">
              <p>
                <strong>Transplante lamelar anterior profundo.</strong> No DALK, substituem-se as
                camadas anteriores comprometidas, preservando a camada mais interna da córnea do
                próprio paciente quando ela está saudável. Sua principal vantagem é reduzir
                determinados riscos ligados à rejeição endotelial. Entretanto, é uma cirurgia
                tecnicamente complexa e nem todo caso permite sua realização completa.
              </p>
              <p>
                <strong>Transplante penetrante.</strong> No transplante penetrante, todas as
                camadas da córnea são substituídas. Pode ser necessário quando existe cicatriz
                profunda, comprometimento de todas as camadas ou impossibilidade de realizar um
                transplante lamelar adequado.
              </p>
            </Prose>

            <H3>O transplante cura o ceratocone?</H3>
            <Prose className="mt-4">
              <p>
                Ele substitui a córnea alterada e pode melhorar significativamente a visão, mas não
                representa uma recuperação imediata nem garante independência de óculos ou lentes.
              </p>
              <p>A recuperação é prolongada, exige consultas frequentes e pode envolver:</p>
              <ul>
                <li>pontos;</li>
                <li>astigmatismo residual;</li>
                <li>uso de colírios;</li>
                <li>risco de rejeição;</li>
                <li>infecção;</li>
                <li>necessidade posterior de correção óptica.</li>
              </ul>
              <p>
                Por isso, o transplante não deve ser visto como a primeira opção, mas como uma
                alternativa importante quando os tratamentos menos invasivos já não oferecem
                resultado funcional adequado.
              </p>
            </Prose>

            <p className="mt-14 border-t border-border pt-6 text-[0.8rem] text-muted-foreground">
              8 minutos de leitura &nbsp;·&nbsp; Atualizado em julho de 2026
            </p>
          </article>
        </div>
      </section>

      {/* CTA — meio do artigo */}
      <section className="relative overflow-hidden bg-[var(--primary-deep)] py-16 text-[var(--primary-foreground)] md:py-20">
        {ctaPhoto ? (
          <img
            src={ctaPhoto}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[50%_30%] opacity-40"
          />
        ) : null}
        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="ml-auto max-w-md rounded-lg bg-[#9e4e3a]/90 p-8 shadow-[var(--shadow-lift)] lg:p-10">
            <h2 className="text-[clamp(1.6rem,4vw,2rem)] leading-tight text-[var(--primary-foreground)]">
              Ficou com alguma dúvida?
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--primary-foreground)]/80">
              Cada caso é único. Uma avaliação especializada é fundamental para entender o seu
              ceratocone e as possibilidades de tratamento.
            </p>
            <CTAButton href={WHATSAPP_AGENDAR} variant="light-solid" className="mt-6">
              Agendar consulta
            </CTAButton>
          </Reveal>
        </div>
      </section>

      {/* Continue aprendendo */}
      <Section tone="paper">
        <Reveal>
          <p className="eyebrow text-gold">Continue aprendendo</p>
          <h2 className="mt-3 text-[clamp(1.5rem,3.5vw,2rem)] text-[#4a3629]">
            Outros conteúdos sobre a córnea
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:max-w-[760px]">
          {[
            { titulo: "Olho seco", to: "/cornea" },
            { titulo: "Distrofia de córnea", to: "/cornea" },
          ].map((c, i) => (
            <Reveal as="article" key={c.titulo} delay={i * 80}>
              <Link
                to={c.to}
                className="group flex items-center justify-between rounded-lg border border-border bg-background px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <span className="font-display text-xl text-[#4a3629]">{c.titulo}</span>
                <span
                  aria-hidden="true"
                  className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Autora */}
      <Section tone="background">
        <Reveal className="flex flex-col gap-6 rounded-xl border border-border bg-paper p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <div className="shrink-0 sm:w-40">
            <Figure
              file="home_01_hero_dra_samara.jpg"
              alt="Retrato da Dra. Samara B. Marafon"
              ratio="1/1"
              className="rounded-lg"
              imgClassName={autoraPhoto ? "object-[50%_15%]" : undefined}
            />
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              Escrito por
            </p>
            <p className="mt-2 font-display text-2xl text-[#4a3629]">Dra. Samara B. Marafon</p>
            <p className="mt-2 max-w-md text-[0.9rem] leading-relaxed text-[#7d6858]">
              Oftalmologista especialista em córnea, catarata e lente de contato.
            </p>
            <p className="mt-2 text-[0.82rem] text-muted-foreground">
              CRM-RS 37669 &nbsp;|&nbsp; RQE 29525
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Quando procurar */}
      <Section tone="sand" id="especialista">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <h2 className="text-[clamp(1.6rem,4vw,2.15rem)] leading-tight text-[#4a3629]">
              Quando procurar um especialista em córnea?
            </h2>
          </Reveal>
          <Prose className="mt-5">
            <p>Procure avaliação quando perceber:</p>
            <ul>
              {procurarEspecialista.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>
              A avaliação é particularmente importante para crianças, adolescentes e adultos
              jovens, porque a doença pode progredir mais rapidamente nessas faixas etárias.
            </p>
          </Prose>

          <H3>Quando procurar atendimento com urgência?</H3>
          <Prose className="mt-4">
            <p>Busque avaliação rápida diante de:</p>
            <ul>
              {procurarUrgencia.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>
              Esses sinais não devem ser atribuídos automaticamente ao ceratocone, pois podem
              representar infecção ou outra condição que requer tratamento imediato.
            </p>
          </Prose>
        </div>
      </Section>

      {/* Principais pontos */}
      <Section tone="background">
        <Reveal className="mx-auto max-w-[760px] rounded-xl border border-[var(--gold)]/35 bg-[var(--gold)]/[0.08] p-7 sm:p-9">
          <h2 className="text-[clamp(1.4rem,3.5vw,1.9rem)] text-[#4a3629]">
            Principais pontos sobre o ceratocone
          </h2>
          <ul className="mt-5 space-y-2.5 text-[0.92rem] leading-relaxed text-[#574b40] [&_li]:relative [&_li]:pl-6">
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
      </Section>

      {/* CTA final */}
      <Section tone="deep" className="overflow-hidden">
        <Reveal className="mx-auto max-w-2xl rounded-lg bg-[#9e4e3a]/90 p-8 text-center shadow-[var(--shadow-lift)] sm:p-10 lg:p-12">
          <h2 className="text-[clamp(1.7rem,4vw,2.4rem)] leading-tight text-[var(--primary-foreground)]">
            Cada visão tem uma história.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[0.92rem] leading-relaxed text-[var(--primary-foreground)]/80">
            Se você apresenta sintomas relacionados à córnea, recebeu um diagnóstico ou deseja
            avaliar a possibilidade de um tratamento cirúrgico, uma consulta especializada é o
            primeiro passo para compreender o seu caso e definir a melhor conduta.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton href={WHATSAPP_AGENDAR} variant="light-solid">
              Agendar consulta
            </CTAButton>
            <CTAButton href={WHATSAPP_CONTATO} variant="ghost-light">
              Entrar em contato
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section tone="paper" id="faq">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <p className="eyebrow text-gold">Perguntas frequentes</p>
            <h2 className="mt-3 text-[clamp(1.6rem,4vw,2.15rem)] leading-tight text-[#4a3629]">
              Perguntas frequentes sobre ceratocone
            </h2>
          </Reveal>
          <div className="mt-8">
            <FAQAccordion items={faq} />
          </div>
        </div>
      </Section>
    </>
  );
}
