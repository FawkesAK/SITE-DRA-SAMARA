import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type IndexItem = { id: string; label: string };

/**
 * Índice de leitura ativo para as páginas internas (guias).
 *
 * - Lista as seções da página (recebe o mesmo array `indice` que cada guia já usa).
 * - Destaca automaticamente a seção atual conforme o scroll (`IntersectionObserver`).
 * - Barra fina de progresso de leitura no topo (scroll do documento, throttle com rAF).
 * - Sem dependências novas. Só desktop (`hidden lg:block`) — no mobile a página
 *   mantém exatamente o comportamento atual (a caixa "Neste guia" no corpo do artigo).
 * - Respeita `prefers-reduced-motion` via o reset global em styles.css.
 */
export function ArticleIndex({ items }: { items: ReadonlyArray<IndexItem> }) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    // --- barra de progresso de leitura ---
    let raf = 0;
    const readProgress = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(readProgress);
    };
    readProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // --- seção ativa ---
    const visible = new Set<string>();
    const pickActive = () => {
      const firstVisible = els.find((el) => visible.has(el.id));
      if (firstVisible) {
        setActiveId(firstVisible.id);
        return;
      }
      // nenhuma seção na faixa de leitura: usa a última que já passou do topo
      let current = els[0]?.id ?? "";
      for (const el of els) {
        if (el.getBoundingClientRect().top - 140 <= 0) current = el.id;
        else break;
      }
      setActiveId(current);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        pickActive();
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    pickActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [items]);

  return (
    <nav aria-label="Índice do guia" className="hidden lg:block">
      <p className="eyebrow mb-2.5 text-[0.62rem] text-muted-foreground">Índice</p>
      <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${(progress * 100).toFixed(1)}%` }}
        />
      </div>
      <ul className="space-y-0.5 text-[0.78rem] leading-snug">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "block border-l-2 py-1 pl-3 transition-colors duration-200",
                  active
                    ? "border-primary font-medium text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
