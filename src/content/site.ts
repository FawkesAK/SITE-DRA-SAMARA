/**
 * Dados de contato e links oficiais.
 * Placeholders configuráveis — substituir pelos dados reais antes de publicar.
 */
export const site = {
  nome: "Dra. Samara Marafon",
  especialidade: "Oftalmologia",
  crm: "CRM-RS 16.740",
  rqe: "RQE 8.146",
  clinica: "Oftalmocentro",
  cidade: "Porto Alegre — RS",
  endereco: "Av. Dr. Nilo Peçanha, 724, 4º andar – Bairro Petrópolis",
  telefone: "{{TELEFONE}}",
  whatsapp: "(51) 99392-9951",
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=55051993929951&text=Oi,%20quero%20agendar%20uma%20consulta%20com%20a%20Dra%20Samara",
  instagramUrl: "https://www.instagram.com/oftalmosamara/",
  instagramHandle: "@oftalmosamara",
  googleMapsEmbed: "{{GOOGLE_MAPS_EMBED}}",
} as const;

/**
 * Navegação principal: site single-page — cada item aponta para uma âncora
 * dentro da Home (`/`), nunca para uma rota separada. IDs sem acentos,
 * minúsculos, únicos (ver seções correspondentes em `routes/index.tsx`).
 */
export const nav = [
  { label: "Início", hash: "inicio" },
  { label: "Sobre", hash: "sobre" },
  { label: "Especialidades", hash: "especialidades" },
  { label: "Catarata", hash: "catarata" },
  { label: "Formações", hash: "formacoes" },
  { label: "Atuação", hash: "atuacao" },
  { label: "Contato", hash: "contato" },
] as const;

export const metricas = [
  { valor: "93", label: "artigos científicos" },
  { valor: "13", label: "capítulos de livros" },
  { valor: "+300", label: "apresentações científicas" },
] as const;

export const etapas = [
  {
    titulo: "Entender o olho",
    texto: "Exames, córnea, retina, grau e demais estruturas.",
  },
  {
    titulo: "Entender a pessoa",
    texto: "Rotina, profissão, hábitos e necessidades visuais.",
  },
  {
    titulo: "Apresentar possibilidades",
    texto: "Benefícios, limitações e diferenças entre as alternativas.",
  },
  {
    titulo: "Decidir em conjunto",
    texto: "A indicação que melhor se ajusta àquele caso.",
  },
] as const;

export const instituicoes = [
  {
    nome: "UFRGS",
    logo: "logo_ufrgs.png",
    papel: "Professora Associada",
    detalhe: "Faculdade de Medicina",
  },
  {
    nome: "HCPA",
    logo: "logo_hcpa.png",
    papel: "HCPA",
    detalhe: "Chefe do Setor de Córnea e Superfície Ocular",
  },
  {
    nome: "Banco de Olhos do HCPA",
    logo: "logo_banco_de_olhos.png",
    papel: "Banco de Olhos HCPA",
    detalhe: "Diretoria Médica",
  },
  {
    nome: "Oftalmocentro",
    logo: "logo_oftalmocentro.png",
    papel: "Oftalmocentro",
    detalhe: "Sócia-diretora · Porto Alegre — RS",
  },
] as const;
