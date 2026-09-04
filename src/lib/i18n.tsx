import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Categoria, Formato, Status } from "@/lib/catalog";

export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

const STORAGE_KEY = "anevena.lang";

const pt = {
  htmlLang: "pt-BR",
  numberLocale: "pt-BR",
  nav: {
    produtos: "Produtos",
    disponibilidade: "Disponibilidade",
    comoFunciona: "Como funciona",
    paraEmpresas: "Para empresas",
    sobre: "Sobre",
    contato: "Contato",
    cta: "Consultar disponibilidade",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },
  common: {
    falarComAnevena: "Falar com a Anevena",
    consultarDisponibilidade: "Consultar disponibilidade",
    tagline: "Planta certa. Volume certo. Prazo combinado.",
    doisFluxos: "Dois fluxos. Um compromisso.",
  },
  footer: {
    tagline: "Planta certa. Volume certo. Prazo combinado.",
    navegacao: "Navegação",
    contatoComercial: "Contato comercial",
    instagram: "Instagram — em breve",
    linkedin: "LinkedIn — em breve",
    termos: "Termos de Uso",
    privacidade: "Política de Privacidade",
  },
  home: {
    heroAlt: "Estufa comercial com lotes uniformes de plântulas em bandejas",
    heroTitle1: "Previsibilidade que se planta.",
    heroTitle2: "Confiança que se colhe.",
    heroSub: "Plantas e plântulas profissionais, no volume certo e no prazo combinado.",
    heroCta2: "Conhecer o catálogo",
    tick1: "Planta certa.",
    tick2: "Volume certo.",
    tick3: "Prazo combinado.",
    promessaTitle: "Abastecimento não deveria ser uma incerteza.",
    promessaP1:
      "Quem depende de plantas para produzir, revender ou executar um projeto não pode descobrir na última hora que o lote não está disponível.",
    promessaP2: "A Anevena organiza o abastecimento para reduzir essa incerteza.",
    promessas: [
      { titulo: "Planta certa", texto: "Espécie, padrão e condição adequados ao pedido." },
      { titulo: "Volume certo", texto: "Disponibilidade e capacidade compatíveis com sua demanda." },
      { titulo: "Prazo combinado", texto: "Planejamento e logística tratados como compromisso." },
    ],
    chegarViva: "Chegar viva",
    chegarVivaTexto: "A qualidade da entrega também faz parte do produto.",
    conceitoEyebrow: "Conceito Anevena",
    conceitoTitle1: "Dois fluxos.",
    conceitoTitle2: "Um compromisso.",
    conceitoP1:
      "A Anevena existe no ponto onde capacidade de produção encontra necessidade de mercado.",
    conceitoP2:
      "É nesse encontro que disponibilidade, volume e prazo precisam convergir. O V central da nossa marca representa exatamente esse compromisso.",
    producao: "Produção",
    cliente: "Cliente",
    fluxo: "Produção → V ← Cliente",
    catalogoTitle: "O que você precisa plantar?",
    catalogoCards: [
      { para: "Garden centers, paisagistas, viveiristas e revendedores.", cta: "Ver ornamentais" },
      { para: "Produtores, viveiristas e projetos comerciais.", cta: "Ver frutíferas" },
      {
        para: "Restauração florestal, compensação ambiental, paisagismo e projetos ambientais.",
        cta: "Ver nativas",
      },
    ],
    formatosEyebrow: "Formatos de entrega",
    formatosItens: [
      {
        texto: "Para clientes que realizam sua própria aclimatação.",
        publico: ["Viveiristas", "Produtores", "Operações profissionais"],
      },
      {
        texto: "Produto preparado para continuidade do cultivo ou revenda.",
        publico: ["Garden centers", "Paisagistas", "Revendedores", "Projetos"],
      },
    ],
    escalaTitle: "Operação em escala.",
    escalaTexto:
      "Indicadores operacionais em consolidação. Os dados abaixo são atualizados conforme a programação de abastecimento vigente.",
    indicadores: [
      { unidade: "mil", label: "plantas em programação" },
      { unidade: "", label: "espécies disponíveis" },
      { unidade: "", label: "lotes ativos" },
      { unidade: "dias", label: "prazo médio" },
    ],
    logisticaAlt: "Expedição de lotes de plantas em doca de carregamento",
    comoFuncionaEyebrow: "Como funciona",
    comoFuncionaTitle: "Do pedido à expedição, um processo com etapas visíveis.",
    comoFuncionaCta: "Ver as cinco etapas",
    ctaTitle: "Qual é a sua próxima necessidade?",
    ctaTexto:
      "Informe espécie, quantidade e prazo. Nós verificamos a melhor programação de abastecimento.",
  },
  produtos: {
    eyebrow: "Catálogo",
    title: "O que você precisa plantar?",
    description:
      "Ornamentais, frutíferas e nativas — com espécie, formato, disponibilidade e prazo por lote.",
  },
  disponibilidade: {
    eyebrow: "Programação vigente",
    title: "O que está disponível agora.",
    description:
      "Volumes e prazos indicativos por lote. A confirmação é feita por consulta comercial.",
  },
  comoFunciona: {
    eyebrow: "Processo",
    title: "Cinco etapas até o lote na sua operação.",
    description: "Cada etapa existe para reduzir improviso e tornar o abastecimento previsível.",
    etapas: [
      { titulo: "Consulte", texto: "Encontre espécies e disponibilidade." },
      { titulo: "Planeje", texto: "Defina volume e janela de entrega." },
      { titulo: "Confirme", texto: "Receba proposta e condições comerciais." },
      { titulo: "Acompanhe", texto: "Acompanhe preparação e expedição." },
      { titulo: "Receba", texto: "Receba o lote no prazo combinado." },
    ],
    ctaTexto: "Pronto para verificar sua próxima necessidade?",
  },
  paraEmpresas: {
    eyebrow: "Públicos atendidos",
    title: "Quem depende de volume não pode depender de improviso.",
    description: "Cada operação tem uma exigência diferente de espécie, padrão, volume e prazo.",
    publicos: [
      {
        titulo: "Viveiristas e produtores",
        texto: "Compram plântulas e mudas em volume.",
        valoriza: ["Genética", "Uniformidade", "Sanidade", "Disponibilidade", "Escala", "Prazo"],
      },
      {
        titulo: "Garden centers e revendedores",
        texto: "Reposição contínua com variedade de espécies.",
        valoriza: ["Disponibilidade", "Variedade", "Reposição", "Prazo"],
      },
      {
        titulo: "Paisagistas",
        texto: "Execução de projeto com padrão definido.",
        valoriza: ["Espécie", "Padrão", "Quantidade", "Capacidade de entrega"],
      },
      {
        titulo: "Projetos ambientais",
        texto: "Espécies nativas para restauração e compensação.",
        valoriza: ["Restauração", "Compensação", "Reflorestamento", "Volume programado"],
      },
    ],
    ctaTexto: "Informe espécie, quantidade e prazo. Nós verificamos a melhor programação.",
  },
  sobre: {
    eyebrow: "Sobre",
    title: "Abastecimento precisa funcionar.",
    p1: "A Anevena nasceu para organizar uma relação que ainda depende demais de improviso: o abastecimento profissional de plantas.",
    p2: "Conectamos capacidade produtiva, disponibilidade e demanda para entregar uma experiência comercial mais previsível.",
    p3: "Nossa função é simples de explicar e difícil de executar:",
    b1: "a planta certa,",
    b2: "no volume certo,",
    b3: "no prazo combinado.",
    imgAlt: "Equipe carregando lotes uniformes de plantas para expedição",
  },
  contato: {
    eyebrow: "Consulta comercial",
    title: "Qual é a sua próxima necessidade?",
    texto:
      "Informe espécie, quantidade e prazo. Nós verificamos a melhor programação de abastecimento.",
  },
  termos: {
    eyebrow: "Legal",
    title: "Termos de Uso",
    p1: "As informações de disponibilidade, volume e prazo apresentadas neste site são indicativas e estão sujeitas a confirmação comercial.",
    p2: "O envio de uma consulta não constitui pedido, reserva de lote ou compromisso de fornecimento. Condições comerciais são formalizadas em proposta específica.",
    p3: "Conteúdo, marca e materiais deste site pertencem à Anevena e não podem ser reproduzidos sem autorização.",
  },
  privacidade: {
    eyebrow: "Legal",
    title: "Política de Privacidade",
    p1: "Os dados informados no formulário de consulta são utilizados exclusivamente para atendimento comercial: verificação de disponibilidade, elaboração de proposta e contato.",
    p2: "Não comercializamos dados de contato. As informações são mantidas apenas pelo tempo necessário ao relacionamento comercial.",
    p3: "Para solicitar correção ou exclusão dos seus dados, escreva para comercial@anevena.com.br.",
  },
  catalogo: {
    buscaPlaceholder: "Qual planta você procura?",
    buscaLabel: "Buscar planta",
    todos: "Todos",
    qtdMinima: "Qtd. mínima",
    prazoAte: "Prazo até",
    dias: "dias",
    resultado: "resultado",
    resultados: "resultados",
    vazio:
      "Nenhum lote corresponde aos filtros. Fale com a equipe comercial para verificar programação futura.",
    thEspecie: "Espécie",
    thCategoria: "Categoria",
    thFormato: "Formato",
    thDisponibilidade: "Disponibilidade",
    thPrazo: "Prazo",
    thAcao: "Ação",
    prazoEstimado: "Prazo estimado",
    consultar: "Consultar",
    solicitarLote: "Solicitar este lote",
    sobConsulta: "Sob consulta",
    aDefinir: "A definir",
    unidades: "un.",
    diasLabel: "dias",
  },
  form: {
    especie: "Espécie",
    quantidade: "Quantidade",
    prazo: "Prazo desejado",
    nome: "Nome",
    empresa: "Empresa",
    telefone: "Telefone / WhatsApp",
    email: "E-mail",
    errEspecie: "Informe a espécie",
    errQuantidade: "Informe a quantidade",
    errNome: "Informe seu nome",
    errTelefone: "Informe um telefone válido",
    errEmail: "E-mail inválido",
    sucesso: "Recebemos sua necessidade.",
    sucessoSub: "Nossa equipe comercial entrará em contato.",
    submit: "Consultar disponibilidade",
  },
  whatsapp: {
    padrao: "Olá. Vim pelo site da Anevena e gostaria de consultar disponibilidade.",
    produto: (nome: string, qtd: number) =>
      `Olá. Gostaria de consultar disponibilidade de ${nome}, aproximadamente ${qtd} unidades.`,
  },
  categorias: {
    Ornamentais: "Ornamentais",
    Frutíferas: "Frutíferas",
    Nativas: "Nativas",
  } as Record<Categoria, string>,
  formatos: {
    "Plântula in vitro": "Plântula in vitro",
    "Planta aclimatada": "Planta aclimatada",
  } as Record<Formato, string>,
  status: {
    Disponível: "Disponível",
    "Sob consulta": "Sob consulta",
    "Programação futura": "Programação futura",
  } as Record<Status, string>,
  produtoNomes: {
    "ipe-amarelo": "Ipê-amarelo",
    "ipe-roxo": "Ipê-roxo",
    jatoba: "Jatobá",
    "aroeira-pimenteira": "Aroeira-pimenteira",
    bananeira: "Bananeira Prata-anã",
    abacaxi: "Abacaxi Pérola",
    mirtilo: "Mirtilo",
    morango: "Morangueiro",
    spathiphyllum: "Lírio-da-paz",
    zamioculca: "Zamioculca",
    philodendron: "Philodendron",
    agapanto: "Agapanto",
  } as Record<string, string>,
};

export type Dict = typeof pt;

const en: Dict = {
  htmlLang: "en",
  numberLocale: "en-US",
  nav: {
    produtos: "Products",
    disponibilidade: "Availability",
    comoFunciona: "How it works",
    paraEmpresas: "For business",
    sobre: "About",
    contato: "Contact",
    cta: "Check availability",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  common: {
    falarComAnevena: "Talk to Anevena",
    consultarDisponibilidade: "Check availability",
    tagline: "Right plant. Right volume. Agreed deadline.",
    doisFluxos: "Two flows. One commitment.",
  },
  footer: {
    tagline: "Right plant. Right volume. Agreed deadline.",
    navegacao: "Navigation",
    contatoComercial: "Sales contact",
    instagram: "Instagram — coming soon",
    linkedin: "LinkedIn — coming soon",
    termos: "Terms of Use",
    privacidade: "Privacy Policy",
  },
  home: {
    heroAlt: "Commercial greenhouse with uniform batches of seedlings in trays",
    heroTitle1: "Predictability you can plant.",
    heroTitle2: "Trust you can harvest.",
    heroSub: "Professional plants and seedlings, in the right volume and on the agreed date.",
    heroCta2: "Explore the catalog",
    tick1: "Right plant.",
    tick2: "Right volume.",
    tick3: "Agreed deadline.",
    promessaTitle: "Supply should not be a source of uncertainty.",
    promessaP1:
      "Anyone who depends on plants to produce, resell or deliver a project cannot find out at the last minute that the batch is unavailable.",
    promessaP2: "Anevena organizes supply to reduce that uncertainty.",
    promessas: [
      { titulo: "Right plant", texto: "Species, standard and condition matched to the order." },
      { titulo: "Right volume", texto: "Availability and capacity aligned with your demand." },
      { titulo: "Agreed deadline", texto: "Planning and logistics treated as a commitment." },
    ],
    chegarViva: "Arrive alive",
    chegarVivaTexto: "Delivery quality is part of the product too.",
    conceitoEyebrow: "The Anevena concept",
    conceitoTitle1: "Two flows.",
    conceitoTitle2: "One commitment.",
    conceitoP1: "Anevena exists where production capacity meets market demand.",
    conceitoP2:
      "That is where availability, volume and deadline must converge. The V at the center of our brand stands for exactly that commitment.",
    producao: "Production",
    cliente: "Client",
    fluxo: "Production → V ← Client",
    catalogoTitle: "What do you need to plant?",
    catalogoCards: [
      { para: "Garden centers, landscapers, nurseries and resellers.", cta: "See ornamentals" },
      { para: "Growers, nurseries and commercial projects.", cta: "See fruit species" },
      {
        para: "Forest restoration, environmental offsetting, landscaping and environmental projects.",
        cta: "See native species",
      },
    ],
    formatosEyebrow: "Delivery formats",
    formatosItens: [
      {
        texto: "For clients who handle their own acclimatization.",
        publico: ["Nurseries", "Growers", "Professional operations"],
      },
      {
        texto: "Product ready for continued growing or resale.",
        publico: ["Garden centers", "Landscapers", "Resellers", "Projects"],
      },
    ],
    escalaTitle: "Operating at scale.",
    escalaTexto:
      "Operational indicators are being consolidated. The figures below follow the current supply schedule.",
    indicadores: [
      { unidade: "k", label: "plants scheduled" },
      { unidade: "", label: "species available" },
      { unidade: "", label: "active batches" },
      { unidade: "days", label: "average lead time" },
    ],
    logisticaAlt: "Plant batches being shipped from a loading dock",
    comoFuncionaEyebrow: "How it works",
    comoFuncionaTitle: "From order to shipping, a process with visible stages.",
    comoFuncionaCta: "See the five stages",
    ctaTitle: "What do you need next?",
    ctaTexto: "Tell us species, quantity and deadline. We check the best supply schedule.",
  },
  produtos: {
    eyebrow: "Catalog",
    title: "What do you need to plant?",
    description:
      "Ornamental, fruit and native species — with format, availability and lead time per batch.",
  },
  disponibilidade: {
    eyebrow: "Current schedule",
    title: "What is available right now.",
    description:
      "Indicative volumes and lead times per batch. Confirmation is made through a sales inquiry.",
  },
  comoFunciona: {
    eyebrow: "Process",
    title: "Five stages until the batch reaches your operation.",
    description: "Every stage exists to reduce improvisation and make supply predictable.",
    etapas: [
      { titulo: "Inquire", texto: "Find species and availability." },
      { titulo: "Plan", texto: "Define volume and delivery window." },
      { titulo: "Confirm", texto: "Receive proposal and commercial terms." },
      { titulo: "Track", texto: "Follow preparation and shipping." },
      { titulo: "Receive", texto: "Get the batch on the agreed date." },
    ],
    ctaTexto: "Ready to check your next requirement?",
  },
  paraEmpresas: {
    eyebrow: "Who we serve",
    title: "Those who depend on volume cannot depend on improvisation.",
    description:
      "Every operation has different requirements for species, standard, volume and deadline.",
    publicos: [
      {
        titulo: "Nurseries and growers",
        texto: "Buy seedlings and young plants in volume.",
        valoriza: ["Genetics", "Uniformity", "Plant health", "Availability", "Scale", "Lead time"],
      },
      {
        titulo: "Garden centers and resellers",
        texto: "Continuous restocking with a variety of species.",
        valoriza: ["Availability", "Variety", "Restocking", "Lead time"],
      },
      {
        titulo: "Landscapers",
        texto: "Project delivery with a defined standard.",
        valoriza: ["Species", "Standard", "Quantity", "Delivery capacity"],
      },
      {
        titulo: "Environmental projects",
        texto: "Native species for restoration and offsetting.",
        valoriza: ["Restoration", "Offsetting", "Reforestation", "Scheduled volume"],
      },
    ],
    ctaTexto: "Tell us species, quantity and deadline. We check the best schedule.",
  },
  sobre: {
    eyebrow: "About",
    title: "Supply has to work.",
    p1: "Anevena was created to organize a relationship that still relies too much on improvisation: the professional supply of plants.",
    p2: "We connect production capacity, availability and demand to deliver a more predictable commercial experience.",
    p3: "Our role is simple to explain and hard to execute:",
    b1: "the right plant,",
    b2: "in the right volume,",
    b3: "on the agreed date.",
    imgAlt: "Team loading uniform plant batches for shipping",
  },
  contato: {
    eyebrow: "Sales inquiry",
    title: "What do you need next?",
    texto: "Tell us species, quantity and deadline. We check the best supply schedule.",
  },
  termos: {
    eyebrow: "Legal",
    title: "Terms of Use",
    p1: "Availability, volume and lead time information shown on this site is indicative and subject to commercial confirmation.",
    p2: "Submitting an inquiry does not constitute an order, a batch reservation or a supply commitment. Commercial terms are formalized in a specific proposal.",
    p3: "Content, brand and materials on this site belong to Anevena and may not be reproduced without authorization.",
  },
  privacidade: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    p1: "Data submitted through the inquiry form is used exclusively for commercial service: availability checks, proposals and contact.",
    p2: "We do not sell contact data. Information is kept only for as long as the commercial relationship requires.",
    p3: "To request correction or deletion of your data, write to comercial@anevena.com.br.",
  },
  catalogo: {
    buscaPlaceholder: "Which plant are you looking for?",
    buscaLabel: "Search plant",
    todos: "All",
    qtdMinima: "Min. qty",
    prazoAte: "Lead time up to",
    dias: "days",
    resultado: "result",
    resultados: "results",
    vazio:
      "No batch matches these filters. Talk to our sales team to check the upcoming schedule.",
    thEspecie: "Species",
    thCategoria: "Category",
    thFormato: "Format",
    thDisponibilidade: "Availability",
    thPrazo: "Lead time",
    thAcao: "Action",
    prazoEstimado: "Estimated lead time",
    consultar: "Inquire",
    solicitarLote: "Request this batch",
    sobConsulta: "On request",
    aDefinir: "To be defined",
    unidades: "units",
    diasLabel: "days",
  },
  form: {
    especie: "Species",
    quantidade: "Quantity",
    prazo: "Desired deadline",
    nome: "Name",
    empresa: "Company",
    telefone: "Phone / WhatsApp",
    email: "Email",
    errEspecie: "Enter the species",
    errQuantidade: "Enter the quantity",
    errNome: "Enter your name",
    errTelefone: "Enter a valid phone number",
    errEmail: "Invalid email",
    sucesso: "We received your request.",
    sucessoSub: "Our sales team will get in touch.",
    submit: "Check availability",
  },
  whatsapp: {
    padrao: "Hello. I came from the Anevena website and would like to check availability.",
    produto: (nome: string, qtd: number) =>
      `Hello. I would like to check availability of ${nome}, approximately ${qtd} units.`,
  },
  categorias: {
    Ornamentais: "Ornamentals",
    Frutíferas: "Fruit species",
    Nativas: "Native species",
  },
  formatos: {
    "Plântula in vitro": "In vitro seedling",
    "Planta aclimatada": "Acclimatized plant",
  },
  status: {
    Disponível: "Available",
    "Sob consulta": "On request",
    "Programação futura": "Upcoming schedule",
  },
  produtoNomes: {
    "ipe-amarelo": "Golden trumpet tree",
    "ipe-roxo": "Pink trumpet tree",
    jatoba: "Brazilian copal",
    "aroeira-pimenteira": "Brazilian pepper tree",
    bananeira: "Prata-anã banana",
    abacaxi: "Pérola pineapple",
    mirtilo: "Blueberry",
    morango: "Strawberry",
    spathiphyllum: "Peace lily",
    zamioculca: "ZZ plant",
    philodendron: "Philodendron",
    agapanto: "Agapanthus",
  },
};

const es: Dict = {
  htmlLang: "es",
  numberLocale: "es-ES",
  nav: {
    produtos: "Productos",
    disponibilidade: "Disponibilidad",
    comoFunciona: "Cómo funciona",
    paraEmpresas: "Para empresas",
    sobre: "Nosotros",
    contato: "Contacto",
    cta: "Consultar disponibilidad",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  common: {
    falarComAnevena: "Hablar con Anevena",
    consultarDisponibilidade: "Consultar disponibilidad",
    tagline: "Planta correcta. Volumen correcto. Plazo acordado.",
    doisFluxos: "Dos flujos. Un compromiso.",
  },
  footer: {
    tagline: "Planta correcta. Volumen correcto. Plazo acordado.",
    navegacao: "Navegación",
    contatoComercial: "Contacto comercial",
    instagram: "Instagram — próximamente",
    linkedin: "LinkedIn — próximamente",
    termos: "Términos de Uso",
    privacidade: "Política de Privacidad",
  },
  home: {
    heroAlt: "Invernadero comercial con lotes uniformes de plántulas en bandejas",
    heroTitle1: "Previsibilidad que se planta.",
    heroTitle2: "Confianza que se cosecha.",
    heroSub: "Plantas y plántulas profesionales, en el volumen correcto y en el plazo acordado.",
    heroCta2: "Conocer el catálogo",
    tick1: "Planta correcta.",
    tick2: "Volumen correcto.",
    tick3: "Plazo acordado.",
    promessaTitle: "El abastecimiento no debería ser una incertidumbre.",
    promessaP1:
      "Quien depende de plantas para producir, revender o ejecutar un proyecto no puede descubrir a última hora que el lote no está disponible.",
    promessaP2: "Anevena organiza el abastecimiento para reducir esa incertidumbre.",
    promessas: [
      { titulo: "Planta correcta", texto: "Especie, estándar y condición adecuados al pedido." },
      { titulo: "Volumen correcto", texto: "Disponibilidad y capacidad acordes con su demanda." },
      { titulo: "Plazo acordado", texto: "Planificación y logística tratadas como compromiso." },
    ],
    chegarViva: "Llegar viva",
    chegarVivaTexto: "La calidad de la entrega también es parte del producto.",
    conceitoEyebrow: "Concepto Anevena",
    conceitoTitle1: "Dos flujos.",
    conceitoTitle2: "Un compromiso.",
    conceitoP1:
      "Anevena existe en el punto donde la capacidad de producción encuentra la necesidad del mercado.",
    conceitoP2:
      "Es en ese encuentro donde disponibilidad, volumen y plazo deben converger. La V central de nuestra marca representa exactamente ese compromiso.",
    producao: "Producción",
    cliente: "Cliente",
    fluxo: "Producción → V ← Cliente",
    catalogoTitle: "¿Qué necesita plantar?",
    catalogoCards: [
      { para: "Garden centers, paisajistas, viveristas y revendedores.", cta: "Ver ornamentales" },
      { para: "Productores, viveristas y proyectos comerciales.", cta: "Ver frutales" },
      {
        para: "Restauración forestal, compensación ambiental, paisajismo y proyectos ambientales.",
        cta: "Ver nativas",
      },
    ],
    formatosEyebrow: "Formatos de entrega",
    formatosItens: [
      {
        texto: "Para clientes que realizan su propia aclimatación.",
        publico: ["Viveristas", "Productores", "Operaciones profesionales"],
      },
      {
        texto: "Producto preparado para continuar el cultivo o la reventa.",
        publico: ["Garden centers", "Paisajistas", "Revendedores", "Proyectos"],
      },
    ],
    escalaTitle: "Operación a escala.",
    escalaTexto:
      "Indicadores operativos en consolidación. Los datos se actualizan según la programación de abastecimiento vigente.",
    indicadores: [
      { unidade: "mil", label: "plantas programadas" },
      { unidade: "", label: "especies disponibles" },
      { unidade: "", label: "lotes activos" },
      { unidade: "días", label: "plazo promedio" },
    ],
    logisticaAlt: "Expedición de lotes de plantas en muelle de carga",
    comoFuncionaEyebrow: "Cómo funciona",
    comoFuncionaTitle: "Del pedido a la expedición, un proceso con etapas visibles.",
    comoFuncionaCta: "Ver las cinco etapas",
    ctaTitle: "¿Cuál es su próxima necesidad?",
    ctaTexto:
      "Indique especie, cantidad y plazo. Verificamos la mejor programación de abastecimiento.",
  },
  produtos: {
    eyebrow: "Catálogo",
    title: "¿Qué necesita plantar?",
    description:
      "Ornamentales, frutales y nativas — con especie, formato, disponibilidad y plazo por lote.",
  },
  disponibilidade: {
    eyebrow: "Programación vigente",
    title: "Lo que está disponible ahora.",
    description:
      "Volúmenes y plazos indicativos por lote. La confirmación se realiza por consulta comercial.",
  },
  comoFunciona: {
    eyebrow: "Proceso",
    title: "Cinco etapas hasta el lote en su operación.",
    description:
      "Cada etapa existe para reducir la improvisación y hacer previsible el abastecimiento.",
    etapas: [
      { titulo: "Consulte", texto: "Encuentre especies y disponibilidad." },
      { titulo: "Planifique", texto: "Defina volumen y ventana de entrega." },
      { titulo: "Confirme", texto: "Reciba propuesta y condiciones comerciales." },
      { titulo: "Acompañe", texto: "Siga la preparación y la expedición." },
      { titulo: "Reciba", texto: "Reciba el lote en el plazo acordado." },
    ],
    ctaTexto: "¿Listo para verificar su próxima necesidad?",
  },
  paraEmpresas: {
    eyebrow: "Públicos atendidos",
    title: "Quien depende del volumen no puede depender de la improvisación.",
    description: "Cada operación exige algo distinto en especie, estándar, volumen y plazo.",
    publicos: [
      {
        titulo: "Viveristas y productores",
        texto: "Compran plántulas y plantas en volumen.",
        valoriza: ["Genética", "Uniformidad", "Sanidad", "Disponibilidad", "Escala", "Plazo"],
      },
      {
        titulo: "Garden centers y revendedores",
        texto: "Reposición continua con variedad de especies.",
        valoriza: ["Disponibilidad", "Variedad", "Reposición", "Plazo"],
      },
      {
        titulo: "Paisajistas",
        texto: "Ejecución de proyecto con estándar definido.",
        valoriza: ["Especie", "Estándar", "Cantidad", "Capacidad de entrega"],
      },
      {
        titulo: "Proyectos ambientales",
        texto: "Especies nativas para restauración y compensación.",
        valoriza: ["Restauración", "Compensación", "Reforestación", "Volumen programado"],
      },
    ],
    ctaTexto: "Indique especie, cantidad y plazo. Verificamos la mejor programación.",
  },
  sobre: {
    eyebrow: "Nosotros",
    title: "El abastecimiento tiene que funcionar.",
    p1: "Anevena nació para organizar una relación que todavía depende demasiado de la improvisación: el abastecimiento profesional de plantas.",
    p2: "Conectamos capacidad productiva, disponibilidad y demanda para entregar una experiencia comercial más previsible.",
    p3: "Nuestra función es simple de explicar y difícil de ejecutar:",
    b1: "la planta correcta,",
    b2: "en el volumen correcto,",
    b3: "en el plazo acordado.",
    imgAlt: "Equipo cargando lotes uniformes de plantas para expedición",
  },
  contato: {
    eyebrow: "Consulta comercial",
    title: "¿Cuál es su próxima necesidad?",
    texto:
      "Indique especie, cantidad y plazo. Verificamos la mejor programación de abastecimiento.",
  },
  termos: {
    eyebrow: "Legal",
    title: "Términos de Uso",
    p1: "La información de disponibilidad, volumen y plazo presentada en este sitio es indicativa y está sujeta a confirmación comercial.",
    p2: "El envío de una consulta no constituye pedido, reserva de lote ni compromiso de suministro. Las condiciones comerciales se formalizan en una propuesta específica.",
    p3: "El contenido, la marca y los materiales de este sitio pertenecen a Anevena y no pueden reproducirse sin autorización.",
  },
  privacidade: {
    eyebrow: "Legal",
    title: "Política de Privacidad",
    p1: "Los datos informados en el formulario de consulta se utilizan exclusivamente para atención comercial: verificación de disponibilidad, elaboración de propuesta y contacto.",
    p2: "No comercializamos datos de contacto. La información se conserva solo el tiempo necesario para la relación comercial.",
    p3: "Para solicitar corrección o eliminación de sus datos, escriba a comercial@anevena.com.br.",
  },
  catalogo: {
    buscaPlaceholder: "¿Qué planta busca?",
    buscaLabel: "Buscar planta",
    todos: "Todos",
    qtdMinima: "Cant. mínima",
    prazoAte: "Plazo hasta",
    dias: "días",
    resultado: "resultado",
    resultados: "resultados",
    vazio:
      "Ningún lote coincide con los filtros. Hable con el equipo comercial para verificar la programación futura.",
    thEspecie: "Especie",
    thCategoria: "Categoría",
    thFormato: "Formato",
    thDisponibilidade: "Disponibilidad",
    thPrazo: "Plazo",
    thAcao: "Acción",
    prazoEstimado: "Plazo estimado",
    consultar: "Consultar",
    solicitarLote: "Solicitar este lote",
    sobConsulta: "Bajo consulta",
    aDefinir: "A definir",
    unidades: "un.",
    diasLabel: "días",
  },
  form: {
    especie: "Especie",
    quantidade: "Cantidad",
    prazo: "Plazo deseado",
    nome: "Nombre",
    empresa: "Empresa",
    telefone: "Teléfono / WhatsApp",
    email: "Correo electrónico",
    errEspecie: "Indique la especie",
    errQuantidade: "Indique la cantidad",
    errNome: "Indique su nombre",
    errTelefone: "Indique un teléfono válido",
    errEmail: "Correo electrónico inválido",
    sucesso: "Recibimos su necesidad.",
    sucessoSub: "Nuestro equipo comercial se pondrá en contacto.",
    submit: "Consultar disponibilidad",
  },
  whatsapp: {
    padrao: "Hola. Vengo del sitio de Anevena y me gustaría consultar disponibilidad.",
    produto: (nome: string, qtd: number) =>
      `Hola. Me gustaría consultar disponibilidad de ${nome}, aproximadamente ${qtd} unidades.`,
  },
  categorias: {
    Ornamentais: "Ornamentales",
    Frutíferas: "Frutales",
    Nativas: "Nativas",
  },
  formatos: {
    "Plântula in vitro": "Plántula in vitro",
    "Planta aclimatada": "Planta aclimatada",
  },
  status: {
    Disponível: "Disponible",
    "Sob consulta": "Bajo consulta",
    "Programação futura": "Programación futura",
  },
  produtoNomes: {
    "ipe-amarelo": "Ipê amarillo",
    "ipe-roxo": "Ipê morado",
    jatoba: "Jatobá",
    "aroeira-pimenteira": "Aroeira pimentera",
    bananeira: "Banano Prata-anã",
    abacaxi: "Piña Pérola",
    mirtilo: "Arándano",
    morango: "Fresa",
    spathiphyllum: "Espatifilo",
    zamioculca: "Zamioculca",
    philodendron: "Filodendro",
    agapanto: "Agapanto",
  },
};

const dicts: Record<Lang, Dict> = { pt, en, es };

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  qtd: (n: number | null) => string;
  prazo: (d: number | null) => string;
  nomeProduto: (slug: string, fallback: string) => string;
}

const I18nContext = createContext<Ctx | null>(null);

function detectLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en" || stored === "es") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "pt";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("en")) return "en";
  return "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = dicts[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(() => {
    const t = dicts[lang];
    return {
      lang,
      setLang,
      t,
      qtd: (n) =>
        n === null
          ? t.catalogo.sobConsulta
          : `${n.toLocaleString(t.numberLocale)} ${t.catalogo.unidades}`,
      prazo: (d) => (d === null ? t.catalogo.aDefinir : `${d} ${t.catalogo.diasLabel}`),
      nomeProduto: (slug, fallback) => t.produtoNomes[slug] ?? fallback,
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function makeFallback(lang: Lang): Ctx {
  const t = dicts[lang];
  return {
    lang,
    setLang: () => {},
    t,
    qtd: (n) =>
      n === null
        ? t.catalogo.sobConsulta
        : `${n.toLocaleString(t.numberLocale)} ${t.catalogo.unidades}`,
    prazo: (d) => (d === null ? t.catalogo.aDefinir : `${d} ${t.catalogo.diasLabel}`),
    nomeProduto: (slug, fallback) => t.produtoNomes[slug] ?? fallback,
  };
}

const fallbackCtx = makeFallback("pt");

export function useI18n(): Ctx {
  return useContext(I18nContext) ?? fallbackCtx;
}
