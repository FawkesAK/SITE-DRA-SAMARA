import { Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/**
 * Tabela dos guias da Biblioteca da Córnea (exames, tratamentos, lentes).
 * Usada por /catarata, /ceratocone, /distrofias e /olho-seco.
 *
 * md+ (>= 768px): tabela tradicional, exatamente como no desktop aprovado.
 * < md: a mesma marcação vira uma pilha de cards (um por linha). A primeira
 * célula é o título do card e as demais recebem o nome da coluna como rótulo
 * (via `data-label`), para que nenhuma informação dependa de colunas
 * espremidas. O cabeçalho continua no DOM (sr-only) para leitores de tela.
 */
export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <Reveal className="my-7 overflow-x-auto rounded-lg border border-border max-md:overflow-visible max-md:rounded-none max-md:border-0">
      <table className="w-full border-collapse text-left max-md:block">
        <thead className="max-md:sr-only">
          <tr className="border-b border-border bg-secondary/25">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3.5 align-bottom text-[0.8rem] font-bold text-primary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-md:block max-md:space-y-3">
          {rows.map((row, i) => (
            <tr
              key={i}
              className="align-top even:bg-secondary/[0.07] max-md:block max-md:rounded-lg max-md:border max-md:border-border max-md:px-4 max-md:pb-3 max-md:pt-4 md:border-b md:border-border md:last:border-0"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  data-label={headers[j]}
                  className={cn(
                    "px-4 py-[1.1rem] text-[0.83rem] leading-relaxed text-foreground/85",
                    "max-md:block max-md:px-0 max-md:py-1.5 max-md:text-[0.9rem]",
                    j === 0
                      ? "font-semibold text-primary max-md:pb-1 max-md:pt-0 max-md:text-[1rem] max-md:leading-snug"
                      : "max-md:before:mb-0.5 max-md:before:block max-md:before:text-[0.7rem] max-md:before:font-semibold max-md:before:uppercase max-md:before:tracking-[0.08em] max-md:before:text-primary/75 max-md:before:content-[attr(data-label)]",
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
