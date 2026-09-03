import { useEffect, useRef } from "react";
import { imageUrl } from "@/content/images";
import { cn } from "@/lib/utils";

/**
 * Imagem de fundo full-bleed com parallax no scroll.
 *
 * - A imagem é maior que a seção (144% da altura) e fica dentro de um
 *   contêiner `overflow: hidden` que NÃO se move. Quem viaja é só a imagem.
 * - O trajeto vai de `translateY(-amplitude%)` a `translateY(+amplitude%)`
 *   — percentual da própria altura da imagem — conforme a seção cruza a
 *   viewport, então partes diferentes da foto entram e saem do enquadramento.
 * - `object-fit: cover` (nunca distorce); `objectPosition` controla o foco.
 * - Só `transform: translate3d` (composição na GPU), com
 *   `requestAnimationFrame` + listener `passive` + `IntersectionObserver`
 *   (o cálculo só roda enquanto a seção está visível).
 * - Desligado em telas < 1024px, com `prefers-reduced-motion`, ou se o JS
 *   não rodar — nesses casos a imagem fica estática, sem perda visual.
 * - Sem `background-attachment: fixed` e sem dependências novas.
 */
export function ParallaxImage({
  file,
  alt = "",
  className,
  imgClassName,
  objectPosition,
  amplitude = 12,
}: {
  file: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  /** deslocamento em cada extremo, em % da altura da imagem (trajeto = 2× isso) */
  amplitude?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = imageUrl(file);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const belowDesktop = window.matchMedia("(max-width: 1023px)");
    let active = false;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // -1 = seção entrando pela base · 0 = centralizada · 1 = saindo pelo topo
      const progress =
        (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      img.style.transform = `translate3d(0, ${(clamped * amplitude).toFixed(2)}%, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const enable = () => {
      if (active || reduceMotion.matches || belowDesktop.matches) return;
      active = true;
      img.style.willChange = "transform";
      window.addEventListener("scroll", onScroll, { passive: true });
      apply();
    };

    const disable = () => {
      if (!active) return;
      active = false;
      window.removeEventListener("scroll", onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      img.style.transform = "";
      img.style.willChange = "";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) enable();
          else disable();
        }
      },
      { rootMargin: "150px 0px" },
    );
    io.observe(wrap);

    const onMediaChange = () => {
      if (reduceMotion.matches || belowDesktop.matches) disable();
    };
    reduceMotion.addEventListener?.("change", onMediaChange);
    belowDesktop.addEventListener?.("change", onMediaChange);

    return () => {
      io.disconnect();
      disable();
      reduceMotion.removeEventListener?.("change", onMediaChange);
      belowDesktop.removeEventListener?.("change", onMediaChange);
    };
  }, [amplitude]);

  return (
    <div
      ref={wrapRef}
      aria-hidden={alt ? undefined : true}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {src ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            // 144% da altura da seção, sobrando 22% de cada lado — folga
            // suficiente para o trajeto (±~13%) sem expor as bordas
            "absolute left-0 top-[-22%] h-[144%] w-full object-cover",
            imgClassName,
          )}
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-[var(--primary-foreground)]/30 bg-[var(--primary-deep)] p-6 text-center">
          <span className="eyebrow text-[var(--primary-foreground)]/70">Inserir</span>
          <span className="max-w-full truncate font-mono text-[11px] text-[var(--primary-foreground)]/60">
            {file}
          </span>
        </div>
      )}
    </div>
  );
}
