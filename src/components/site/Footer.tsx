import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { site, nav } from "@/content/site";

export function Footer() {
  const links = nav.filter((n) => n.hash !== "inicio");
  return (
    <footer className="texture-paper bg-[var(--background)] text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-samara-sm.png"
                alt=""
                aria-hidden="true"
                className="h-10 w-auto shrink-0"
              />
              <span className="font-display text-xl text-[#4a3629]">Dra. Samara Marafon</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Médica oftalmologista em Porto Alegre. Córnea, catarata, cirurgia
              refrativa, transplantes, ensino e pesquisa.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {site.crm} · {site.rqe}
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3 text-sm md:mx-auto md:w-fit">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className="text-foreground/75 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground">
            <p className="eyebrow mb-4 text-gold">Atendimento</p>
            <address className="not-italic leading-relaxed">
              Neofocus Oftalmologia
              <br />
              R. Furriel Luíz Antônio de Vargas, 250 - Bela Vista
              <br />
              Porto Alegre - RS
              <br />
              Telefone: (51) 3273-2005
            </address>
            <p className="mt-4 leading-relaxed">WhatsApp: {site.whatsapp}</p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 underline underline-offset-4"
            >
              <Instagram size={15} strokeWidth={1.75} aria-hidden="true" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dra. Samara Marafon. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-primary">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-primary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
