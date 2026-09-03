import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

/**
 * Depoimentos de pacientes (estilo Doctoralia) — carrossel horizontal.
 * Avaliações reais do perfil no Doctoralia (2 "páginas" de 3 cards no desktop).
 */
const depoimentos = [
  {
    texto:
      "Agradeço muito pelo atendimento com paciência em escutar e para explicar! Desde a recepção até o atendimento, me senti super acolhida.",
    nome: "Jéssica",
  },
  {
    texto:
      "Ótimo atendimento, atenciosa, paciente, objetiva, me auxiliou em dúvidas que outros dois oftalmos não haviam conseguido sanar e nem me dar uma solução efetiva para o problema.",
    nome: "Tayná Gonzales",
  },
  {
    texto:
      "Excelente médica. Fiz a cirurgia refrativa com ela, ficou 100%. Atenciosa, respondeu todas as minhas dúvidas no pré e pós operatório.",
    nome: "Renato Miorim",
  },
  {
    texto:
      "Fiz cirurgia de anel intra-estromal no olho esquerdo e Crosslinking no olho direito, procedimento um sucesso total, recomendo muito a Dra, profissional exemplar!",
    nome: "Alexandre Tavares",
  },
  {
    texto:
      "Atendimento impecável! A Dra. Samara escuta com atenção, explica tudo com calma e transmite muita segurança. Atendimento humano, ético e de altíssima qualidade.",
    nome: "Renata Salgado",
  },
  {
    texto:
      "Meu marido fez a cirurgia e está muito bem. Eu também consultei e saí satisfeita com a explicação e a consulta. Estou feliz, amei conhecê-la.",
    nome: "Alzira de Fátima Ferreira",
  },
];

/** Marca "Doctoralia" no topo do card — aproximação do wordmark (sem o logo oficial). */
function DoctoraliaTag() {
  return (
    <span className="inline-flex items-center gap-1 text-[0.72rem] font-semibold tracking-tight text-[#00a8a0]">
      <span aria-hidden="true" className="text-[0.85rem] leading-none">
        ✦
      </span>
      Doctoralia
    </span>
  );
}

export function Depoimentos() {
  const [api, setApi] = useState<CarouselApi>();
  const [snaps, setSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnaps(api.scrollSnapList());
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: false, slidesToScroll: "auto" }}
      >
        <CarouselContent className="-ml-4">
          {depoimentos.map((d, i) => (
            <CarouselItem
              key={i}
              className="basis-[82%] pl-4 sm:basis-[52%] lg:basis-1/3"
            >
              <Reveal
                as="article"
                delay={i * 60}
                className="flex h-full flex-col rounded-xl border border-border bg-paper p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <DoctoraliaTag />
                  <span className="flex gap-0.5 text-[#e8a33d]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} strokeWidth={0} className="fill-current" />
                    ))}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-justify text-[0.82rem] leading-relaxed text-foreground">
                  {d.texto}
                </p>
                <p className="mt-4 text-[0.8rem] italic text-foreground">{d.nome}</p>
              </Reveal>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="-right-3 hidden h-9 w-9 border-border bg-paper text-[var(--primary-deep)] shadow-[var(--shadow-card)] hover:bg-[var(--gold)]/15 disabled:opacity-25 sm:flex lg:-right-20" />
      </Carousel>

      {snaps.length > 1 ? (
        <div className="mt-6 flex items-center gap-2 lg:mt-8">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o grupo ${i + 1} de depoimentos`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selected
                  ? "w-5 bg-[var(--primary)]"
                  : "w-2 bg-[var(--primary)]/25 hover:bg-[var(--primary)]/45",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
