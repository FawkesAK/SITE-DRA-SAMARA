import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { Figure, Reveal } from "./primitives";

/**
 * Tira horizontal de posts do Instagram (estilo feed) — mesmo padrão de
 * carrossel usado em `Depoimentos`: itens à esquerda, seta à direita, dots
 * abaixo. As imagens dos posts ainda são placeholders "INSERIR".
 */
const posts = [
  {
    file: "home_ig_01.jpg",
    legenda: "Recebeu indicação de anel intraestromal e não sabe o que esperar?",
  },
  {
    file: "home_ig_02.jpg",
    legenda: "Especializar em córnea não foi a escolha mais óbvia. Foi a mais honesta.",
  },
  {
    file: "home_ig_03.jpg",
    legenda: "46% dos brasileiros ainda não sabem o que é ceratocone",
  },
  {
    file: "home_ig_04.jpg",
    legenda:
      "E foi assim que um simples hábito quase levou uma paciente ao transplante de córnea",
  },
];

export function InstagramStrip() {
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
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false, slidesToScroll: "auto" }}
        >
          <CarouselContent className="-ml-3">
            {posts.map((p, i) => (
              <CarouselItem
                key={i}
                className="basis-[66%] pl-3 sm:basis-[42%] lg:basis-[30%]"
              >
                <Reveal as="article" delay={i * 60}>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`Ver no Instagram: ${p.legenda}`}
                  >
                    <Figure
                      file={p.file}
                      alt={p.legenda}
                      ratio="4/5"
                      className="rounded-sm shadow-[var(--shadow-card)] transition-transform duration-[450ms] ease-out group-hover:-translate-y-1"
                    />
                  </a>
                </Reveal>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="-right-3 hidden h-9 w-9 border-border bg-paper text-[var(--primary-deep)] shadow-[var(--shadow-card)] hover:bg-[var(--gold)]/15 disabled:opacity-25 sm:flex lg:-right-16" />
        </Carousel>

        {/* esmaecimento do último post na direita (mesma cor de fundo areia da seção) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#e6dcd4] to-transparent sm:w-20"
        />
      </div>

      {snaps.length > 1 ? (
        <div className="mt-6 flex items-center gap-2 lg:mt-8">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o grupo ${i + 1} de posts`}
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
