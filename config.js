/* =========================================
  ARQUIVO DE CONFIGURAÇÃO - BELLAFLOR
  =========================================
  Edite este arquivo para alterar textos, cores e produtos do site.
  Não é necessário mexer no HTML.
*/

window.SITE_CONFIG = {
  
  // 1. CORES DO TEMA (Use códigos HEX)
  colors: {
    primary: "#881337",       // Cor principal (Marsala/Vinho)
    secondary: "#064E3B",     // Verde Botânico
    gold: "#B45309",          // Dourado
    accent: "#F59E0B"         // Laranja/Destaque
  },

  // 2. DADOS DE CONTATO & REDES SOCIAIS
  contact: {
    whatsapp: "5519998028205", // Apenas números (DDI + DDD + Numero)
    phoneDisplay: "(19) 99802-8205", // Como aparece na tela
    address: "Rua 13 de Maio, Centro<br>Artur Nogueira, SP",
    email: "contato@bellaflor.com.br",
    social: {
      instagram: "https://instagram.com", // Coloque o link real
      facebook: "https://facebook.com",
      pinterest: "https://pinterest.com"
    }
  },

  // 3. TEXTOS DO SITE
  texts: {
    topBar: "FRETE GRÁTIS PARA ARTUR NOGUEIRA E REGIÃO 🚚",
    
    logo: { 
      title: "BellaFlor", 
      subtitle: "Artur Nogueira" 
    },
    
    hero: {
      subtitle: "Arte Floral & Presentes",
      title: "Emoções que florescem",
      text: "Buquês autorais, cestas de café e presentes exclusivos. <br>Design floral sofisticado para os momentos mais importantes da sua vida.",
      // Imagem de fundo do banner principal
      bgImage: "url('https://images.unsplash.com/photo-1563241527-3af801d8e12f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
    },
    
    about: {
      title: "Design Floral com Alma",
      // Aceita HTML básico como <strong> para negrito
      desc1: "Localizada no coração de Artur Nogueira, a <strong>BellaFlor</strong> não é apenas uma floricultura, é um atelier de sentimentos. Desde 2018, transformamos as flores mais frescas de Holambra em arranjos autorais que contam histórias.",
      desc2: "Nossa missão é levar sofisticação e carinho em cada detalhe, desde a escolha da fita de cetim até a entrega pontual nas mãos de quem você ama.",
      img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      stat1: { val: "5k+", label: "Entregas" },
      stat2: { val: "100%", label: "Satisfação" }
    },

    // Perguntas Frequentes
    faq: [
      { q: "Vocês entregam em quais cidades?", a: "Entregamos principalmente em Artur Nogueira, Holambra, Cosmópolis e Engenheiro Coelho. Para outras regiões, consulte disponibilidade no WhatsApp." },
      { q: "Consigo agendar o horário da entrega?", a: "Sim! Trabalhamos com janelas de entrega (Manhã, Tarde). Para horários específicos (ex: exatamente às 10h), solicitamos uma pequena taxa de exclusividade." },
      { q: "Quais as formas de pagamento?", a: "Aceitamos Pix (com 5% de desconto), Cartão de Crédito e Débito (link de pagamento ou maquininha na entrega) e Transferência Bancária." },
      { q: "Posso personalizar o arranjo?", a: "Com certeza. Somos um atelier boutique. Chame no WhatsApp e montaremos algo exclusivo conforme seu gosto e orçamento." }
    ],

    footer: {
      desc: "Transformando sentimentos em gestos concretos através da arte floral.",
      copy: "&copy; 2024 BellaFlor Boutique. Todos os direitos reservados. Design Premium."
    }
  },

  // 4. CATÁLOGO DE PRODUTOS
  // Categorias disponíveis: 'romantico', 'cestas', 'orquideas', 'aniversario', 'maternidade', 'condolencias'
  products: [
    { 
      id: 1, 
      title: "Buquê Imperial 24 Rosas", 
      category: "romantico", 
      price: 389.90, 
      badge: "Luxo", 
      img: "https://images.unsplash.com/photo-1596541223131-d85188f5f4b4?auto=format&fit=crop&w=800&q=80", 
      desc: "O máximo da sofisticação. 24 rosas vermelhas tipo exportação, folhagens nobres de eucalipto, acabamento em papel kraft premium e laço de cetim duplo." 
    },
    { 
      id: 2, 
      title: "Cesta Amanhecer Parisiense", 
      category: "cestas", 
      price: 289.00, 
      badge: "Best Seller", 
      img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80", 
      desc: "Uma experiência gastronômica. Inclui croissants amanteigados, geleia francesa, suco integral, frutas selecionadas, frios, drip coffee e um mini buquê." 
    },
    { 
      id: 3, 
      title: "Orquídea Phalaenopsis Cascata", 
      category: "orquideas", 
      price: 185.00, 
      badge: "Durável", 
      img: "https://images.unsplash.com/photo-1566904692482-d856b3e32b00?auto=format&fit=crop&w=800&q=80", 
      desc: "Elegância pura em cerâmica branca. Orquídea branca de haste dupla formato cascata, ideal para decorar ambientes sofisticados." 
    },
    { 
      id: 4, 
      title: "Box de Girassóis 'Luz'", 
      category: "aniversario", 
      price: 155.00, 
      img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=800&q=80", 
      desc: "Energia vibrante. Hat Box rígida preta recheada com girassóis frescos e gipsófilas. O presente perfeito para desejar felicidade." 
    },
    { 
      id: 5, 
      title: "Kit Vinho & Romance Premium", 
      category: "romantico", 
      price: 320.00, 
      badge: "Presentão", 
      img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80", 
      desc: "Noite inesquecível. Vinho Tinto Reserva Chileno, caixa de bombons Lindt e um buquê com 6 rosas vermelhas aveludadas." 
    },
    { 
      id: 6, 
      title: "Coroa de Condolências 'Paz'", 
      category: "condolencias", 
      price: 450.00, 
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", 
      desc: "Homenagem digna e respeitosa. Flores brancas (Lírios, Rosas e Crisântemos) em grande porte. Faixa de homenagem inclusa. Entrega prioritária." 
    },
    { 
      id: 7, 
      title: "Mix do Campo Colorido", 
      category: "aniversario", 
      price: 98.90, 
      badge: "Oferta", 
      img: "https://images.unsplash.com/photo-1563241527-3af801d8e12f?auto=format&fit=crop&w=800&q=80", 
      desc: "Alegria rústica. Um mix encantador de astromélias, gérberas e margaridas em vaso de vidro. Cores vibrantes para alegrar o dia." 
    },
    { 
      id: 8, 
      title: "Terrário Moderno", 
      category: "orquideas", 
      price: 89.90, 
      img: "https://images.unsplash.com/photo-1463936575229-46994167ea3b?auto=format&fit=crop&w=800&q=80", 
      desc: "Design e natureza. Mini jardim de suculentas montado em vidro geométrico. Perfeito para escritórios e casas modernas." 
    },
    { 
      id: 9, 
      title: "Buquê de Lírios Rosa", 
      category: "maternidade", 
      price: 165.00, 
      badge: "Delicado", 
      img: "https://images.unsplash.com/photo-1525626294711-30c1e8785860?auto=format&fit=crop&w=800&q=80", 
      desc: "Perfeito para celebrar a vida. Lírios rosas perfumados combinados com gipsófilas. Embalagem em tons pastéis." 
    },
    { 
      id: 10, 
      title: "Vaso de Begônia", 
      category: "aniversario", 
      price: 65.00, 
      img: "https://images.unsplash.com/photo-1623838237583-42e7d825c942?auto=format&fit=crop&w=800&q=80", 
      desc: "Um clássico que nunca erra. Begônia florida em cachepot decorativo. Disponível em vermelho, rosa ou branco." 
    },
    { 
      id: 11, 
      title: "Cesta Chá da Tarde", 
      category: "cestas", 
      price: 199.90, 
      img: "https://images.unsplash.com/photo-1550523827-9c9636253450?auto=format&fit=crop&w=800&q=80", 
      desc: "Para um momento relaxante. Seleção de chás importados, biscoitos finos, bolo caseiro, caneca de porcelana e flores do campo." 
    },
    { 
      id: 12, 
      title: "Urso Teddy & Chocolates", 
      category: "romantico", 
      price: 140.00, 
      img: "https://images.unsplash.com/photo-1582299775347-199bd6838a6a?auto=format&fit=crop&w=800&q=80", 
      desc: "Fofura garantida. Urso de pelúcia antialérgico (30cm) abraçado a uma caixa de Ferrero Rocher 12 unidades." 
    },
    { 
      id: 13, 
      title: "Buquê Seco Boho Chic", 
      category: "aniversario", 
      price: 129.00, 
      badge: "Tendência", 
      img: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?auto=format&fit=crop&w=800&q=80", 
      desc: "Durabilidade e estilo. Arranjo com flores desidratadas, trigo e capim dos pampas. Ideal para decoração de interiores." 
    },
    { 
      id: 14, 
      title: "Rosas Brancas da Paz", 
      category: "condolencias", 
      price: 189.00, 
      img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80", 
      desc: "Para expressar solidariedade ou pedir desculpas. 12 Rosas brancas importadas em embalagem sóbria e elegante." 
    },
    { 
      id: 15, 
      title: "Cesta Happy Hour", 
      category: "cestas", 
      price: 260.00, 
      badge: "Masculino", 
      img: "https://images.unsplash.com/photo-1549488344-c7079f856fdd?auto=format&fit=crop&w=800&q=80", 
      desc: "Para eles. 2 Cervejas artesanais, mix de castanhas, salame, queijo provolone, azeitonas e pão italiano." 
    },
    { 
      id: 16, 
      title: "Tulipas Amarelas", 
      category: "aniversario", 
      price: 199.90, 
      badge: "Sazonal", 
      img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80", 
      desc: "Raras e belas. Maço com 10 tulipas amarelas frescas (verificar disponibilidade da estação). Símbolo de prosperidade." 
    },
    { 
      id: 17, 
      title: "Vaso de Antúrio Vermelho", 
      category: "orquideas", 
      price: 75.00, 
      img: "https://images.unsplash.com/photo-1612363351914-747684df6246?auto=format&fit=crop&w=800&q=80", 
      desc: "Resistência e cor. Planta de fácil cuidado, ideal para ambientes internos com pouca luz direta. Vaso incluso." 
    },
    { 
      id: 18, 
      title: "Box Baby Blue", 
      category: "maternidade", 
      price: 180.00, 
      img: "https://images.unsplash.com/photo-1516205651411-a41674526547?auto=format&fit=crop&w=800&q=80", 
      desc: "Boas-vindas ao bebê. Box redonda com hortênsias azuis e rosas brancas. Acompanha um mini cartão de nascimento." 
    },
    { 
      id: 19, 
      title: "Cone de Rosa Única", 
      category: "romantico", 
      price: 45.00, 
      img: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=800&q=80", 
      desc: "Um gesto singelo. Uma única rosa vermelha colombiana em embalagem de cone luxo preta. Impactante." 
    },
    { 
      id: 20, 
      title: "Cesta Diet & Light", 
      category: "cestas", 
      price: 230.00, 
      img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=800&q=80", 
      desc: "Saúde com sabor. Frutas, iogurte desnatado, granola sem açúcar, pão integral, queijo branco e chá verde." 
    }
  ]
};