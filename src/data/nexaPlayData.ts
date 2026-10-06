import { Plan, WhatsAppProof, InstagramProof, FaqItem } from '../types';

export const WHATSAPP_RAW = "47997144452";
export const WHATSAPP_FORMATTED = "47 9 9714-4452";
export const WHATSAPP_INTERNATIONAL = "5547997144452";

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encoded}`;
}

export const planStart: Plan = {
  id: "start",
  name: "Plano Start",
  subtitle: "Ideal para quem busca economia e curtir o essencial",
  price: "19",
  cents: "90",
  originalPrice: "R$ 35,00",
  billingPeriod: "/mês",
  badge: "Econômico",
  isHighlighted: false,
  screensCount: 1,
  screensDescription: "1 Tela Simultânea",
  resolutionDescription: "Qualidade SD e HD Estável",
  features: [
    "1 Acesso simultâneo (TV, celular ou computador)",
    "+ 40.000 Conteúdos (Canais abertos e fechados)",
    "Filmes e Séries essenciais inclusos",
    "Guia de Programação (EPG semanal)",
    "Servidor rápido com troca instantânea de canal",
    "Ativação rápida após confirmação",
    "Suporte padrão via WhatsApp"
  ],
  buttonText: "QUERO O PLANO START • R$ 19,90",
  whatsappMessage: "Olá! Gostaria de assinar o Plano Start do Nexa Play por R$ 19,90/mês!"
};

export const planPremium: Plan = {
  id: "premium",
  name: "Plano Premium VIP",
  subtitle: "A experiência definitiva em 4K sem travamentos para toda família",
  price: "49",
  cents: "90",
  originalPrice: "R$ 89,90",
  billingPeriod: "/mês",
  badge: "MAIS ESCOLHIDO 🔥",
  isHighlighted: true,
  screensCount: 4,
  screensDescription: "Até 4 Telas Simultâneas",
  resolutionDescription: "Ultra HD 4K & Full HD com HDR",
  features: [
    "4 Telas simultâneas (Sala, quartos e celular)",
    "+ 120.000 Conteúdos completos e atualizados diariamente",
    "Todos os Canais Ao Vivo + Premiere + Combate + HBO + Telecine",
    "Lançamentos de cinema + Séries completas de todos os streamings",
    "Tecnologia Turbo CDN Anti-Travamento exclusiva",
    "Guia EPG em tempo real com Replay de 7 dias",
    "Compatível com Smart TV, TV Box, Fire Stick e Celulares",
    "Suporte VIP Prioritário 24/7 no WhatsApp 47 9 9714-4452",
    "Garantia incondicional de 7 dias ou seu dinheiro de volta"
  ],
  buttonText: "ASSINAR PLANO PREMIUM VIP • R$ 49,90",
  whatsappMessage: "Olá! Gostaria de assinar o Plano Premium do Nexa Play por R$ 49,90/mês com acesso em 4 telas!"
};

export const specialDiscountPlan: Plan = {
  id: "special_2990",
  name: "Plano Premium VIP (Oferta Exclusiva)",
  subtitle: "Mesmos benefícios do Plano Premium de R$ 49,90 por preço promocional!",
  price: "29",
  cents: "90",
  originalPrice: "R$ 49,90",
  billingPeriod: "/mês",
  badge: "DESCONTO EXCLUSIVO R$ 20 OFF ⚡",
  isHighlighted: true,
  screensCount: 4,
  screensDescription: "Até 4 Telas Simultâneas",
  resolutionDescription: "Ultra HD 4K & Full HD",
  features: [
    "TUDO do Plano Premium por apenas R$ 29,90/mês fixos",
    "4 Telas simultâneas liberadas",
    "Canais 4K + Filmes + Séries completas",
    "Servidor CDN Turbo Anti-Travamentos",
    "Suporte VIP prioritário no WhatsApp 47 9 9714-4452",
    "Sem fidelidade e sem taxas extras"
  ],
  buttonText: "QUERO O PREMIUM POR R$ 29,90 AGORA!",
  whatsappMessage: "Olá! Quero aproveitar a Oferta Exclusiva de Recusa do Plano Premium do Nexa Play por apenas R$ 29,90/mês!"
};

export const whatsAppProofs: WhatsAppProof[] = [
  {
    id: "w1",
    clientName: "Carlos Eduardo Ferreira",
    clientCity: "Joinville - SC",
    lastSeen: "online",
    avatarInitials: "CE",
    highlightTag: "Futebol 4K Sem Travamento",
    messages: [
      {
        text: "Fala pessoal da Nexa Play! Cara, precisava vir aqui agradecer vocês.",
        isFromClient: true,
        time: "16:42"
      },
      {
        text: "O clássico ontem rodou 100% liso na minha Smart TV em 4K. Zero delay e sem travar nem 1 segundo! ⚽🔥",
        isFromClient: true,
        time: "16:43"
      },
      {
        text: "Minha assinatura anterior caía toda hora nos jogos grandes. Vocês ganharam um cliente fiel!",
        isFromClient: true,
        time: "16:44"
      },
      {
        text: "Que show Carlos! Aqui no Nexa Play usamos servidores CDN dedicados para futebol ao vivo. Obrigado pela confiança!",
        isFromClient: false,
        time: "16:45"
      }
    ]
  },
  {
    id: "w2",
    clientName: "Lucas Mendes",
    clientCity: "Balneário Camboriú - SC",
    lastSeen: "online",
    avatarInitials: "LM",
    highlightTag: "Ativação em 3 Minutos",
    messages: [
      {
        text: "Amigo, fiz o pagamento via PIX agora a pouco.",
        isFromClient: true,
        time: "11:15"
      },
      {
        text: "Caramba, em 3 minutos já me mandaram o login e senha e o app já abriu com todos os canais!",
        isFromClient: true,
        time: "11:19"
      },
      {
        text: "O suporte de vocês no 47 9 9714-4452 é muito rápido, parabéns pelo atendimento nota 10!",
        isFromClient: true,
        time: "11:20"
      }
    ]
  },
  {
    id: "w3",
    clientName: "Patrícia M. Alves",
    clientCity: "Curitiba - PR",
    lastSeen: "online",
    avatarInitials: "PA",
    highlightTag: "4 Telas para Família",
    messages: [
      {
        text: "Boa tarde! Peguei o Plano Premium com 4 telas pra testar...",
        isFromClient: true,
        time: "19:02"
      },
      {
        text: "Instalei na TV da sala, nos dois quartos dos meus filhos e no meu tablet. As crianças amaram os canais infantis e os filmes novos!",
        isFromClient: true,
        time: "19:04"
      },
      {
        text: "Cancelei a TV a cabo que me cobrava R$ 280,00 por mês. Vale cada centavo!",
        isFromClient: true,
        time: "19:05"
      }
    ]
  },
  {
    id: "w4",
    clientName: "Rafael Santos",
    clientCity: "Florianópolis - SC",
    lastSeen: "online",
    avatarInitials: "RS",
    highlightTag: "Renovação Anual",
    messages: [
      {
        text: "Fala equipe Nexa! Venceu meu primeiro mês hoje.",
        isFromClient: true,
        time: "14:10"
      },
      {
        text: "Já me manda a chave PIX que vou renovar logo por mais 6 meses. Não fico sem esse catálogo mais nem a pau kkk 🎬🍿",
        isFromClient: true,
        time: "14:11"
      }
    ]
  }
];

export const instagramProofs: InstagramProof[] = [
  {
    id: "ig1",
    username: "marcos_silva_tech",
    fullName: "Marcos Silva | Tech & Games",
    isVerified: true,
    avatarInitials: "MS",
    highlightTag: "Qualidade na OLED 65\"",
    messages: [
      {
        text: "Mano, sinceramente? O Nexa Play superou todas as expectativas aqui em casa 🔥",
        isFromClient: true,
        reaction: "❤️"
      },
      {
        text: "Coloquei na minha TV OLED 65\" e a nitidez dos canais esportivos e dos filmes é absurda. Sem aquele delay chato que outros apps têm.",
        isFromClient: true,
        reaction: "🔥"
      }
    ]
  },
  {
    id: "ig2",
    username: "dra_fernanda_m",
    fullName: "Fernanda Martins",
    isVerified: false,
    avatarInitials: "FM",
    highlightTag: "Fácil de Instalar na Smart TV",
    messages: [
      {
        text: "Oi gente! Passando pra dar os parabéns pela plataforma de vocês ✨",
        isFromClient: true
      },
      {
        text: "Eu não entendo nada de tecnologia e consegui instalar na minha Smart TV Samsung em menos de 2 minutos pelo tutorial do WhatsApp. Muito fácil e o catálogo é maravilhoso!",
        isFromClient: true,
        reaction: "👏"
      }
    ]
  },
  {
    id: "ig3",
    username: "rodrigo_fut_sp",
    fullName: "Rodrigo Santos ⚽",
    isVerified: true,
    avatarInitials: "RS",
    highlightTag: "Economia de R$ 350/mês",
    messages: [
      {
        text: "Irmão, economizando mais de 350 reais por mês que eu gastava com pacote de canais caros e streamings separados.",
        isFromClient: true,
        reaction: "🙌"
      },
      {
        text: "Nexa Play tem todos os jogos, filmes que saíram ontem do cinema e todas as séries que eu queria. Recomendo pra todo mundo!",
        isFromClient: true,
        reaction: "⭐"
      }
    ]
  },
  {
    id: "ig4",
    username: "carol_lifestyle",
    fullName: "Carolina Lima",
    isVerified: false,
    avatarInitials: "CL",
    highlightTag: "Funciona em Qualquer Lugar",
    messages: [
      {
        text: "Amei que consigo assistir no celular durante as viagens e meu marido assiste na TV de casa ao mesmo tempo sem travar nada! ✈️📱",
        isFromClient: true,
        reaction: "❤️"
      }
    ]
  }
];

export const faqList: FaqItem[] = [
  {
    question: "Como funciona a ativação após a assinatura?",
    answer: "A ativação é imediata! Assim que o pagamento (PIX ou cartão) é confirmado, você recebe instantaneamente pelo WhatsApp oficial (47 9 9714-4452) e por e-mail seu usuário, senha e link do aplicativo com passo a passo ilustrado para instalar na sua TV, celular ou TV Box."
  },
  {
    question: "Precisa de antena ou aparelho especial?",
    answer: "Não! Você não precisa de nenhuma antena nem aparelho caro. O Nexa Play funciona 100% via internet através do aplicativo direto na sua Smart TV (Samsung, LG, Android TV), TV Box, Fire Stick, Chromecast, smartphone Android/iPhone ou computador."
  },
  {
    question: "Qual a velocidade de internet recomendada?",
    answer: "Para canais em qualidade padrão e HD, uma conexão a partir de 15 Mbps é suficiente. Para canais e filmes em Full HD e 4K Ultra HDR, recomendamos 30 Mbps ou mais para carregamento instantâneo sem buffering."
  },
  {
    question: "Qual a diferença entre o Plano Start (R$ 19,90) e o Plano Premium (R$ 49,90)?",
    answer: "O Plano Start (R$ 19,90) dá direito a 1 tela simultânea com mais de 40.000 conteúdos em qualidade SD/HD e suporte padrão. Já o Plano Premium (R$ 49,90) libera até 4 telas simultâneas para toda a família, imagem em 4K Ultra HDR, +120.000 conteúdos completos, canais Premiere/Combate/HBO, filmes de cinema atualizados diariamente e suporte VIP prioritário 24/7."
  },
  {
    question: "Tenho garantia caso não goste?",
    answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar 100% satisfeito com a qualidade da imagem ou estabilidade, basta nos enviar uma mensagem no WhatsApp 47 9 9714-4452 que devolvemos todo o seu dinheiro na hora, sem burocracia."
  },
  {
    question: "Posso usar em mais de uma TV ou celular?",
    answer: "No Plano Start você pode cadastrar nos seus aparelhos e usar em 1 tela por vez. No Plano Premium você e sua família podem assistir simultaneamente em até 4 telas ao mesmo tempo em qualquer lugar do Brasil ou do mundo."
  }
];
