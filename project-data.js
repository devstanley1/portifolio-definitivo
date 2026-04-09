const projectsData = [
  { 
    id: 'lionhard', 
    img: 'images/projects/proj_lionhard.png', 
    title: 'Lion Hard Academia', 
    desc: 'Sistema de landing page de alta conversão para a Lion Hard Academia, focado em captação de leads e atração de novos alunos. A página utiliza padrões agressivos de conversão baseados no design atlético (Dark Mode), ressaltando autoridade, metodologia de ponta e infraestrutura robusta. Além disso, traz integrações otimizadas para WhatsApp e Google Maps, oferecendo máxima praticidade ao futuro aluno da academia.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Desenvolvimento purista Web (Zero-Frameworks) para SEO Absoluto<br/>• Animations On Scroll (AOS) criando imersão física<br/>• CSS Variables e Flexbox/Grid Methods sofisticados<br/>• Compressão visual garantindo LCP em milissegundos', 
    tags: ['Landing Page', 'Conversão (CRO)', 'Design Atlético'], 
    url_live: 'https://lion-hard.vercel.app/', 
    url_github: 'https://github.com/devstanley1/LionHard' 
  },
  { 
    id: 'solaris', 
    img: 'images/projects/proj_solaris.png', 
    title: 'Solaris Energia', 
    desc: 'O Solaris é uma plataforma SaaS (Software as a Service) desenvolvida para transformar a gestão de empresas de energia solar. Com foco na otimização de fluxos, o sistema conta com acompanhamento de propostas, controle de faturamento, CRM para clientes e um painel interativo exibindo dados em tempo real. A arquitetura foi pensada para escalar, permitindo a administração total dos recursos visuais de faturamento e implantação.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• React.js e Context API para gerenciamento de estado<br/>• CSS3 Avançado com design moderno (Glassmorphism e Fluent Design)<br/>• Supabase (PostgreSQL, Authentication e Edge Functions)<br/>• Chart.js para renderização de gráficos complexos', 
    tags: ['React', 'SaaS', 'Supabase', 'Dashboard'], 
    url_live: 'https://solaris-coral.vercel.app/', 
    url_github: 'https://github.com/devstanley1/solaris' 
  },
  { 
    id: 'climapro', 
    img: 'images/projects/proj_climapro.png', 
    title: 'ClimaPro', 
    desc: 'Sistema robusto B2B voltado para o gerenciamento comercial e o acompanhamento de ordens de serviço em empresas de refrigeração e climatização. Oferece um controle financeiro completo, histórico detalhado de manutenções, fluxo de caixa e painel gerencial multiplataforma de status, promovendo uma redução massiva no tempo de operação dos técnicos de campo e administradores.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• React.js e Vite.js para inicialização e performance MRA<br/>• Supabase DB consolidando o backend relacional<br/>• Sistema de roteamento autenticado (React Router Dom)<br/>• Modularização de Componentes e UI Patterns avançados', 
    tags: ['React', 'SaaS', 'ERP', 'Logística'], 
    url_live: 'https://climapro.vercel.app/', 
    url_github: 'https://github.com/devstanley1/climapro' 
  },
  { 
    id: 'portfolio3d', 
    img: 'images/projects/proj_portfolio3d.png', 
    title: 'DEV·folio 3D', 
    desc: 'Uma experiência imersiva inédita diretamente no browser. Este portfólio conceitual utiliza computação gráfica para criar uma navegação de cenário "First-Person" / 3D interativo, aliando shaders customizados, objetos geométricos iluminados dinamicamente e física fluida para transformar a experiência de observação dos projetos. Perfeitamente otimizado para não impactar GPU Mobile.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Three.js (WebGL Pipeline) para a engine 3D<br/>• React Three Fiber (R3F) aliando WebGL na sintaxe React<br/>• Next.js e TypeScript na construção base do escopo<br/>• Framer Motion 3D responsável pelas animações suaves de câmera e cenário', 
    tags: ['Next.js', 'Three.js', 'WebGL', 'TypeScript'], 
    url_live: 'https://portfolio-3d-psi-dun.vercel.app/', 
    url_github: 'https://github.com/devstanley1/portfolio-3d' 
  },
  { 
    id: 'academia', 
    img: 'images/projects/proj_academia.png', 
    title: 'Infinitty Academia', 
    desc: 'Página de vendas focada extrema e unicamente na captação ultra-rápida de leads pelo meio digital. Desenhada para um ambiente comercial de luxo – uma academia High-End – a página utiliza blocos persuasivos em Z-Pattern focados na métrica visual do usuário e gatilhos mentais aplicados com copywritings de quebra de objeção.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Desenvolvimento Vanilla (HTML5, CSS3, e ES6+) garantindo 100% no Google Lighthouse<br/>• Animações In-Scroll Nativas otimizadas de framerate<br/>• Lógica de SEO embutida por Meta Tags e Marcações semânticas<br/>• Compressão visual agressiva para garantir LCP (Largest Contentful Paint) imediato', 
    tags: ['Landing Page', 'SEO', 'JavaScript Nativo'], 
    url_live: 'https://infinity-academia-bice.vercel.app/', 
    url_github: 'https://github.com/devstanley1/landing-page-academia' 
  },
  { 
    id: 'barbara', 
    img: 'images/projects/proj_ndi.png', 
    title: 'Dra. Bárbara Calixto', 
    desc: 'O ápice da elegância como página de vendas (Sales/Institutional Page) orientada à odontologia estética e de excelência. Projetada com requinte para extrair todo o aspecto premium visual do especialista com vídeos dinâmicos de fundo, cores como gold/champagne nas tipografias serifadas, e chamadas altamente objetivas impulsionadas pela conversão via Botões WhatsApp estáticos na sessão de tela mobile.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Mobile First Architecture – Desenvolvido partindo da escala reduzida<br/>• Intersection Observer API para revelações visuais por "Fade-In"<br/>• Automação de Deep-Links (WhatsApp Integrations)<br/>• Fontes personalizadas integradas em formato WOFF2 e Display Swap', 
    tags: ['Premium UI/UX', 'Mobile First', 'Sales Page'], 
    url_live: 'https://pagina-de-vendas-ndi.vercel.app/', 
    url_github: 'https://github.com/devstanley1/pagina-de-vendas-odontologia' 
  },
  { 
    id: 'cortex', 
    img: 'images/projects/proj_cortex.png', 
    title: 'Cortex — Agente de IA', 
    desc: 'O Cortex é um ecossistema IA projetado para aliar automação de fluxo de trabalho de times B2B ao poder dos Large Language Models (LLM). O painel agrupa gerenciamentos de usuários, automações complexas visuais baseadas em nós (node-flow) e um assistente conversacional capaz de atuar em processos diários e rotinas corporativas, funcionando como um colaborador cognitivo contínuo da empresa.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Construído utilizando React.js e gerenciamento de estado isolado<br/>• Comunicação e endpoints dinâmicos via APIs OpenAI Models<br/>• Protocolos com WebSocket e SSE (Server-Sent Events) para respostas stremadas<br/>• Design modular focado em extrema acessibilidade de painéis complexos', 
    tags: ['IA', 'OpenAI', 'SaaS', 'Automação'], 
    url_live: 'https://cortex-agent-ia.vercel.app/', 
    url_github: 'https://github.com/devstanley1/Cortex' 
  },
  { 
    id: 'konekt', 
    img: 'images/projects/proj_konekt.png', 
    title: 'Konekt — CRM Inteligente', 
    desc: 'Konekt re-imagina a logística do ambiente de Relacionamento ao Cliente, focando em funis assertivos (Omnichannel). O pipeline digital foi implementado para visualizar e agilizar progressões de tickets em formato de board Kanban, além de medir eficiências individuais (KPIs) usando algoritmos preditivos para qualificação automatizada de Leads recebidos pelo site.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Arquitetura React.js com manipulação de componentes DND (Drag & Drop)<br/>• Chart.js acoplado para visões financeiras diárias/mensais do dashboard<br/>• Autenticações em tokens JSON e rotas protegidas<br/>• Módulos de estilo avançado CSS Modules/BEM css', 
    tags: ['CRM', 'React.js', 'Painéis Analíticos'], 
    url_live: 'https://konekt-crm.vercel.app/', 
    url_github: 'https://github.com/devstanley1/konekt' 
  },
  { 
    id: 'wave', 
    img: 'images/projects/proj_wave.png', 
    title: 'Wave Music', 
    desc: 'Para amantes de inovação, o Wave Music é um hub e reprodutor multimídia construído com totalidade de tecnologias web standards. Extraindo e renderizando o aspecto binário das músicas para construir representações espetros harmônicas interativas dinamicamente na tela em 60 Frames por Segundo. Um teste fantástico do uso da memória emulada pela engine do Node/V8 nos navegadores Chromium.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Base calcada na manipulação profunda do Web Audio API<br/>• HTML5 Media API para controles customizados multimídia reproduzindo o arquivo de som<br/>• Javascript Canvas API 2D gerando as ondas harmônicas baseadas nos Buffers de frequência<br/>• Interações de Slider criadas do zero (vanilla)', 
    tags: ['Web Audio API', 'Algoritmos Audiovisuais', 'JS Nativo'], 
    url_live: 'https://wave-music-alpha.vercel.app/', 
    url_github: 'https://github.com/devstanley1/wave' 
  },
  { 
    id: 'fisiomanage', 
    img: 'images/projects/proj_fisio.png', 
    title: 'FisioManage', 
    desc: 'Um SaaS estruturado como ecossistema completo para a área de Fisioterapia e Bem-estar (Clínico e Ortopédico). A funcionalidade cobre agendamentos robustos usando calendários em grids horários, até prontuários complexos digitais completos e anexos do quadro de evolução do indivíduo. Criado com foco na minimização de cliques processuais (Design Frictionless).<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Aplicação fluida desenvolvida com o bundle (Vite + React.js)<br/>• Liderança no controle de estado síncrono mantido por Zustand<br/>• Armazenagem direta Real-Time por Supabase PostgreSQL e Edge-Auth<br/>• Ferramentas de calendário interativo com datas adaptáveis por timezone', 
    tags: ['Saúde (HealthTech)', 'SaaS UI', 'Zustand e Context'], 
    url_live: 'https://clinica-fisiovida.vercel.app/', 
    url_github: 'https://github.com/devstanley1/clinica-fisiot' 
  },
  { 
    id: 'contapro', 
    img: 'images/projects/proj_contapro.png', 
    title: 'ContaPro', 
    desc: 'Aplicativo de Backoffice/Serviços que se destina propriamente às agências e escritórios de contabilidade. Traz em sua essência as telas gerenciais voltadas a automações financeiras de notas promissórias e guias mensais automáticas. Organizado pela imensa quantidade de dados que manipulam na rotina, os datatables e fluxos visuais garantem fácil legibilidade dos gráficos em tabelão.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Vanilla TypeScript visando segurança forte em tipos nos contratos da UI<br/>• Gerenciamento massivo de Datatables em Frontend com lazyload e Paginação avançada<br/>• Componentes responsivos criativos (Drawer de navegação retrátil)<br/>• Exportações simuladas para extensões fiscais (PDF e CSVs)', 
    tags: ['Enterprise Software', 'Data Tables', 'Sistemas Fiscais'], 
    url_live: 'https://escritorio-contabilidade.vercel.app/', 
    url_github: 'https://github.com/devstanley1/escritorio-contabilidade' 
  },
  { 
    id: 'netflix', 
    img: 'images/projects/proj_netflix.png', 
    title: 'Netflix Investimentos', 
    desc: 'Estudo lúdico de UI em que a fluidez audiovisual da Netflix foi inteiramente fundida ao escopo complexo e sóbrio de análise de ações, tesouro direto e carteiras de investimento. Este app clone traz a arquitetura de "carrosséis horizontais virtuais", trailers auto-play para fundos de mercado e sistema gamificado de engajamento baseados em níveis de perfis de investimentos dinâmicos e persistidos.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• React.js implementando técnicas de Custom Hooks<br/>• Animações avançadas e Carrosséis Swiper Customizados com lazyload de assets<br/>• Operações com LocalStorage & Sync com banco de dados em Cloud (Supabase SDK)<br/>• Componentes Styled (In-JS Estilizações Modulares)', 
    tags: ['Fintech Gamificada', 'Clone Netflix UI', 'Carrosséis Custom'], 
    url_live: 'https://netflix-investimento.vercel.app/', 
    url_github: 'https://github.com/devstanley1/plataforma-de-investimento' 
  },
  { 
    id: 'burger', 
    img: 'images/projects/proj_burger.png', 
    title: 'Terraço Burger', 
    desc: 'A essência comercial de um Cardápio Automático materializada num aplicativo web Mobile First impecável. Possibilita todo o ciclo de consumo do cliente com a marca: desde a navegação atrativa e minimalista de hambúrgueres baseados em seções dinâmicas de rolagem inteligente, até o carrinho, checkout de balanço unificado e envio logístico integrado automaticamente via WhatsApp para a central do balcão (E-commerce Express).<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Progressive Web Apps (PWA) garantindo "Install to Home Screen"<br/>• Scripts lógicos robustos em Javascript para gestão do escopo de carrinho de compras<br/>• Interações síncronas de "Smooth Scroll" ligando Links do Header Sections ancoradas<br/>• Componentização fluida (SASS/CSS Puros Otimizados)', 
    tags: ['Delivery E-Commerce', 'Mobile UI', 'Web App'], 
    url_live: 'https://site-de-pedido.vercel.app/', 
    url_github: 'https://github.com/devstanley1/template-site-de-pedido' 
  },
  { 
    id: 'vendas', 
    img: 'images/projects/proj_landing.png', 
    title: 'Página de Vendas Exclusiva', 
    desc: 'Uma página inteiramente moldada em princípios de funil de alta conversão de negócios online focada no mercado de Cursos Front-end e Infoprodutos Masterclass. Este web-showcase traz as regras do formato "Vídeo da Oferta" principal do topo do funil visual seguido por seções minuciosamente descritas focadas em gatilhos de urgência, autoridade, métricas dos ganhos do aluno, garantias legais incondicionais e quebras de objeções pontuais.<br/><br/><strong>Tecnologias e Conceitos:</strong><br/>• Modelagem de UI de conversão seguindo princípios AIDA e AOT<br/>• Otimização nativa de reprodução autônoma multimídia, evitando blocos da DOM<br/>• Grid Systems de alta adaptabilidade de redimensionamento dos "Accordion (FAQ)"<br/>• Estilos CSS Vanilla arquitetados nos princípios BEM para código sem colisão e altamente escalável para outras ofertas', 
    tags: ['Sales Letter Web', 'Infoproduto UI', 'Conversões'], 
    url_live: 'https://landing-page-stanley-dev.vercel.app/', 
    url_github: 'https://github.com/devstanley1/landing-page' 
  }
];