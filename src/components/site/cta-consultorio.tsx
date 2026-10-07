import { CTAButton, Reveal } from "@/components/site/primitives";
import { ParallaxImage } from "@/components/site/parallax";
import { site } from "@/content/site";

const WHATSAPP_CONTATO =
  "https://api.whatsapp.com/send?phone=55051993929951&text=Ol%C3%A1%2C%20encontrei%20o%20contato%20atrav%C3%A9s%20do%20site%20da%20Dra%20Samara%20e%20gostaria%20de%20agendar%20uma%20consulta";

/**
 * CTA final "Cada visão tem uma história." — foto da Dra. Samara no
 * consultório (parallax) com card translúcido à direita.
 * Usado na Home (com `id="contato"`, âncora do menu "Agendamento") e nas
 * páginas /catarata, /ceratocone, /distrofias e /olho-seco.
 *
 * md+ (>= 768px): composição aprovada do desktop, sem mudanças.
 * < md: card ancorado no rodapé da foto (imagem reenquadrada à esquerda para
 * não cortar a Dra.); abaixo de sm os botões empilham em largura total para
 * não espremer o texto em telas estreitas.
 */
export function ConsultorioCTA({ id }: { id?: string }) {
  return (
    <section
      {...(id ? { id } : {})}
      className="relative flex overflow-hidden bg-[var(--primary-deep)] py-16 text-[var(--primary-foreground)] max-md:min-h-[82svh] max-md:items-end max-md:py-8 md:py-20 lg:min-h-[560px] lg:items-center lg:py-0"
    >
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
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#7d6858] max-md:mt-2.5 max-md:text-[0.88rem]">
            Se você apresenta sintomas relacionados à córnea, recebeu um diagnóstico ou deseja
            avaliar a possibilidade de um tratamento cirúrgico, uma consulta especializada é o
            primeiro passo para compreender o seu caso e definir a melhor conduta.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 max-md:mt-4 max-md:gap-2 max-sm:flex-col sm:max-md:flex-nowrap">
            <CTAButton
              href={site.whatsappUrl}
              variant="primary"
              className="max-md:px-2.5 max-md:text-[0.85rem] max-sm:w-full sm:max-md:flex-1"
            >
              Agendar consulta
            </CTAButton>
            <CTAButton
              href={WHATSAPP_CONTATO}
              variant="light-solid"
              className="max-md:px-2.5 max-md:text-[0.85rem] max-sm:w-full sm:max-md:flex-1"
            >
              Entrar em contato
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
