export const lawyer = {
  name: "Dr. Carlos M.",
  oab: "OAB/BA nº 00.000",
  oabFooter: "OAB/BA nº 00.000 (fictício)",
} as const;

export const navigation = [
  { href: "#inicio", label: "Início" },
  { href: "#direitos", label: "Direitos" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#perguntas", label: "Perguntas Frequentes" },
  { href: "#contato", label: "Contato" },
] as const;

export const buttons = {
  whatsapp: "Entrar em contato pelo WhatsApp",
  whatsappContato: "Falar com o Dr. Carlos no WhatsApp",
} as const;

export const hero = {
  title:
    "Direito do Trabalho: Informação e Orientação Jurídica para Trabalhadores",
  subtitle:
    "Atuação em rescisão contratual, horas extras, FGTS, reconhecimento de vínculo e outras questões trabalhistas, com atendimento individualizado e respeito ao sigilo profissional.",
  microcopy: "Sigilo profissional • Contato pelo WhatsApp",
} as const;

export const direitos = {
  title: "Conheça Seus Direitos Trabalhistas",
  intro:
    "Veja algumas situações comuns na relação de trabalho e informações gerais sobre cada uma. Cada caso tem particularidades e deve ser analisado individualmente.",
  items: [
    {
      title: "Fui desligado e tenho dúvidas sobre os valores da rescisão.",
      body: "Na rescisão, podem ser devidos saldo de salário, aviso prévio, 13º salário proporcional e férias proporcionais acrescidas de 1/3. Conforme a modalidade do desligamento, também há o saque do FGTS e a multa de 40%. Conferir o termo de rescisão com atenção ajuda a entender cada valor recebido.",
    },
    {
      title: "Trabalhei sem carteira assinada.",
      body: "A legislação trabalhista reconhece o vínculo de emprego quando estão presentes seus requisitos (pessoalidade, habitualidade, subordinação e onerosidade), mesmo sem registro formal na carteira. Reconhecido o vínculo, podem ser discutidos direitos como 13º salário, férias, FGTS e aviso prévio.",
    },
    {
      title: "Faço horas extras ou enfrento situações abusivas no trabalho.",
      body: "A jornada de trabalho tem limites legais, e as horas excedentes devem ser remuneradas com adicional. Situações como assédio moral, acúmulo de função ou condições inadequadas de trabalho também podem ser objeto de discussão jurídica.",
    },
  ],
  prazo:
    "**Sobre prazos:** a Constituição Federal prevê que o trabalhador pode ajuizar ação trabalhista em até dois anos após o fim do contrato, podendo reclamar créditos dos últimos cinco anos. Esta é uma informação geral; a análise do prazo depende das particularidades de cada caso.",
} as const;

export const atuacao = {
  title: "Áreas de Atuação",
  subtitle: "Atuação em Direito do Trabalho, com atendimento individualizado.",
  items: [
    {
      title: "Rescisão Contratual",
      body: "Análise do contrato e do termo de rescisão, com orientação sobre aviso prévio, 13º salário, férias e FGTS.",
    },
    {
      title: "Horas Extras e DSR",
      body: "Orientação sobre jornada de trabalho, trabalho em dias de descanso e intervalos intrajornada.",
    },
    {
      title: "Assédio Moral e Condições de Trabalho",
      body: "Orientação jurídica em situações de assédio, cobranças abusivas e ambiente de trabalho inadequado.",
    },
    {
      title: "Reconhecimento de Vínculo Empregatício",
      body: "Questões envolvendo trabalho informal ou contratação como PJ em situação de possível irregularidade.",
    },
    {
      title: "Acidente de Trabalho e Doença Ocupacional",
      body: "Orientação jurídica em casos de lesão ou doença relacionada ao trabalho.",
    },
    {
      title: "Reclamação Trabalhista",
      body: "Acompanhamento e representação do trabalhador perante a Justiça do Trabalho.",
    },
  ],
  chamada:
    "**Tem dúvidas sobre a sua situação?** Entre em contato para conversar sobre o seu caso.",
} as const;

export const sobre = {
  title: "Sobre o Advogado",
  subtitle: "Atuação em Direito do Trabalho com atendimento individualizado.",
  paragraphs: [
    "O **Dr. Carlos M.** é advogado com atuação na área de Direito do Trabalho, voltada à orientação e à representação de trabalhadores.",
    "Graduado em Direito pela **Universidade Federal da Bahia (UFBA)**, atua há mais de 10 anos na advocacia. Cada caso é analisado individualmente, com explicação clara das possibilidades e dos limites de cada situação, em conformidade com o Código de Ética e Disciplina da OAB.",
  ],
  facts: [
    { value: "10+ anos", label: "de atuação na advocacia" },
    { value: "UFBA", label: "Bacharel em Direito" },
    { value: "OAB/BA nº 00.000", label: "inscrição (fictícia)" },
  ],
} as const;

export const atendimento = {
  title: "Como Funciona o Atendimento",
  subtitle: "Entenda as etapas, do primeiro contato ao acompanhamento do caso.",
  steps: [
    {
      title: "Contato inicial",
      body: "Você entra em contato pelo WhatsApp e apresenta, de forma resumida, a sua dúvida.",
    },
    {
      title: "Análise dos documentos",
      body: "Contrato, carteira de trabalho, holerites, termo de rescisão e outros documentos são analisados.",
    },
    {
      title: "Orientação",
      body: "O advogado explica as possibilidades jurídicas, os caminhos disponíveis e os limites do caso.",
    },
    {
      title: "Acompanhamento",
      body: "Havendo a contratação dos serviços, o advogado conduz o caso e mantém o cliente informado sobre o andamento.",
    },
  ],
  documentos: {
    title: "Documentos úteis para o primeiro contato",
    body: "Carteira de trabalho, contrato, holerites, termo de rescisão, extrato do FGTS e registros de jornada (quando houver).",
  },
} as const;

export const faq = {
  title: "Perguntas Frequentes",
  subtitle:
    "Informações gerais sobre dúvidas comuns. Não substituem a análise individual de cada caso.",
  items: [
    {
      question: "Qual é o prazo para entrar com uma ação trabalhista?",
      answer:
        "A Constituição Federal prevê prazo de até dois anos após o fim do contrato de trabalho para ajuizar a ação, podendo ser reclamados os créditos dos últimos cinco anos.",
    },
    {
      question: "Preciso ter carteira assinada para ter direitos trabalhistas?",
      answer:
        "Não necessariamente. Quando presentes os requisitos da relação de emprego, o vínculo pode ser reconhecido mesmo sem registro formal.",
    },
    {
      question: "O que é a multa de 40% do FGTS?",
      answer:
        "Nas dispensas sem justa causa, o empregador deve depositar uma multa de 40% sobre o saldo do FGTS do trabalhador.",
    },
    {
      question: "Quem pede demissão tem direito ao FGTS?",
      answer:
        "No pedido de demissão, não há saque do FGTS nem multa de 40%, mas são devidos saldo de salário, férias proporcionais acrescidas de 1/3 e 13º salário proporcional.",
    },
    {
      question: "O que levar no primeiro atendimento?",
      answer:
        "Carteira de trabalho, contrato, holerites, termo de rescisão, extrato do FGTS e registros de jornada, quando houver.",
    },
    {
      question: "O atendimento é sigiloso?",
      answer:
        "Sim. O sigilo profissional é um dever do advogado, previsto no Estatuto da Advocacia e no Código de Ética e Disciplina da OAB.",
    },
  ],
} as const;

export const contato = {
  title: "Entre em Contato",
  subtitle:
    "Dúvidas sobre contrato de trabalho, rescisão ou outras questões trabalhistas? Fale com o escritório.",
  text: "Se precisar de orientação ou quiser conversar sobre a sua situação, entre em contato pelo WhatsApp.",
  microcopy: "Sigilo profissional.",
  channelsLabel: "Outras formas de contato",
  formTitle: "Envie uma mensagem",
  formNote: "Formulário ilustrativo. Em um projeto real, o envio seria configurado pelo escritório.",
  form: {
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    submit: "Enviar mensagem",
  },
  channels: [
    { key: "instagram", label: "Instagram" },
    { key: "email", label: "E-mail" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "facebook", label: "Facebook" },
  ],
  details: [
    { text: "WhatsApp: (00) 00000-0000", link: true },
    { text: "Endereço: Rua Exemplo, 000 — Salvador/BA", link: false },
    { text: "OAB/BA nº 00.000", link: false },
  ],
} as const;

export const footer = {
  copyright: "© 2026 Dr. Carlos M. — Advogado | OAB/BA nº 00.000 (fictício)",
  legal:
    "Aviso legal: as informações deste site têm caráter meramente informativo e não constituem aconselhamento jurídico nem promessa de resultado. Cada caso exige análise individual.",
  study:
    "Aviso: este site foi desenvolvido como projeto de estudo. Nome, inscrição, telefone e endereço são fictícios.",
} as const;

export const metadataCopy = {
  title: "Dr. Carlos M. | Direito do Trabalho",
  description:
    "Informação e orientação jurídica para trabalhadores. Atuação em rescisão contratual, horas extras, FGTS e reconhecimento de vínculo. OAB/BA nº 00.000.",
} as const;
