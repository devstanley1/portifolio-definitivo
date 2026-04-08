const fs = require('fs');

const htmlPath = 'index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const projects = [
  { id: 'solaris', img: 'images/projects/proj_solaris.png', title: 'Solaris', desc: 'Plataforma de gestão inteligente para projetos de energia solar.', tags: ['SaaS', 'Dashboard', 'Supabase'], url_live: 'https://solaris-coral.vercel.app/', url_github: '' },
  { id: 'climapro', img: 'images/projects/proj_climapro.png', title: 'ClimaPro', desc: 'Sistema de gestão para empresas de climatização e ar-condicionado.', tags: ['SaaS', 'ERP', 'RBAC'], url_live: 'https://climapro.vercel.app/', url_github: '' },
  { id: 'portfolio3d', img: 'images/projects/proj_portfolio3d.png', title: 'DEV·folio 3D', desc: 'Portfólio interativo com experiências 3D usando Three.js e WebGL.', tags: ['Next.js', 'Three.js', 'TypeScript'], url_live: 'https://portfolio-3d-psi-dun.vercel.app/', url_github: '' },
  { id: 'academia', img: 'images/projects/proj_academia.png', title: 'Infinitty Academia', desc: 'Landing page de alta conversão para academia premium.', tags: ['Landing Page', 'Conversão', 'WhatsApp'], url_live: 'https://infinity-academia-bice.vercel.app/', url_github: '' },
  { id: 'barbara', img: 'images/projects/proj_ndi.png', title: 'Dra. Bárbara Calixto', desc: 'Página de vendas premium para clínica odontológica.', tags: ['Landing Page', 'Saúde', 'Premium'], url_live: 'https://pagina-de-vendas-ndi.vercel.app/', url_github: '' },
  { id: 'cortex', img: 'images/projects/proj_cortex.png', title: 'Cortex — Agente de IA', desc: 'Ecossistema com LLMs para automação de tarefas e gestão de dados CRM.', tags: ['IA', 'LLM', 'OpenAI'], url_live: 'https://cortex-agent-ia.vercel.app/', url_github: 'https://github.com/devstanley1/Cortex' },
  { id: 'konekt', img: 'images/projects/proj_konekt.png', title: 'Konekt — CRM Inteligente', desc: 'Plataforma CRM robusta com análise de IA em tempo real e integrações via API.', tags: ['CRM', 'IA', 'API'], url_live: 'https://konekt-crm.vercel.app/', url_github: 'https://github.com/devstanley1/konekt' },
  { id: 'wave', img: 'images/projects/proj_wave.png', title: 'Wave Music', desc: 'Player de música moderno com informações em tempo real e visualização de áudio.', tags: ['Web Audio API', 'JavaScript'], url_live: 'https://wave-music-alpha.vercel.app/', url_github: 'https://github.com/devstanley1/wave' },
  { id: 'fisiomanage', img: 'images/projects/proj_fisio.png', title: 'FisioManage', desc: 'Sistema de gerenciamento para clínicas de fisioterapia.', tags: ['SaaS', 'Saúde', 'Gestão'], url_live: 'https://clinica-fisiovida.vercel.app/', url_github: 'https://github.com/devstanley1/clinica-fisiot' },
  { id: 'contapro', img: 'images/projects/proj_contapro.png', title: 'ContaPro', desc: 'Sistema de gestão para escritórios de contabilidade com automação fiscal.', tags: ['Contabilidade', 'SaaS'], url_live: 'https://escritorio-contabilidade.vercel.app/', url_github: 'https://github.com/devstanley1/escritorio-contabilidade' },
  { id: 'netflix', img: 'images/projects/proj_netflix.png', title: 'Netflix Investimentos', desc: 'Plataforma de investimentos estilo Netflix com banco de dados Supabase.', tags: ['Fintech', 'Supabase', 'API'], url_live: 'https://netflix-investimento.vercel.app/', url_github: 'https://github.com/devstanley1/plataforma-de-investimento' },
  { id: 'burger', img: 'images/projects/proj_burger.png', title: 'Terraço Burger', desc: 'Sistema de pedidos digital para hamburgueria com cardápio interativo.', tags: ['E-commerce', 'Cardápio Digital'], url_live: 'https://site-de-pedido.vercel.app/', url_github: 'https://github.com/devstanley1/template-site-de-pedido' },
  { id: 'vendas', img: 'images/projects/proj_landing.png', title: 'Página de Vendas', desc: 'Landing page de alta conversão para curso de front-end.', tags: ['Landing Page', 'Educação'], url_live: 'https://landing-page-stanley-dev.vercel.app/', url_github: 'https://github.com/devstanley1/landing-page' }
];

let dataJs = 'const projectsData = ' + JSON.stringify(projects, null, 2) + ';';
fs.writeFileSync('project-data.js', dataJs);

html = html.replace(/<div class="project-image"(.*?)>([\s\S]*?)<\/div>\s*<div class="project-info">/g, (match, attrs, content) => {
  if (content.includes('solaris')) return renderImg('solaris');
  if (content.includes('climapro')) return renderImg('climapro');
  if (content.includes('portfolio-3d')) return renderImg('portfolio3d');
  if (content.includes('infinity-academia')) return renderImg('academia');
  if (content.includes('gina-de-vendas-ndi')) return renderImg('barbara');
  if (content.includes('🤖')) return renderImg('cortex'); 
  if (content.includes('🔗')) return renderImg('konekt'); 
  if (content.includes('🎵')) return renderImg('wave'); 
  if (content.includes('🏥')) return renderImg('fisiomanage');
  if (content.includes('📊')) return renderImg('contapro');
  if (content.includes('📈')) return renderImg('netflix');
  if (content.includes('🍔')) return renderImg('burger');
  if (content.includes('🚀')) return renderImg('vendas');
  return match;
});

function renderImg(id) {
  const p = projects.find(x => x.id === id);
  const isFeatured = id === 'portfolio3d' ? '<span class="featured-badge">⭐ Destaque</span>' : '';
  return '<div class="project-image" style="background: url(\'' + p.img + '\') center/cover no-repeat;">\n' +
         '  <div class="project-overlay">\n' +
         '    <a href="projeto.html?id=' + p.id + '" class="project-link">Mais Informações ↗</a>\n' +
         '  </div>\n' +
         '  <div class="project-emoji" style="display:none"></div>\n' + 
         '  ' + isFeatured + '\n' +
         '</div>\n' +
         '<div class="project-info">';
}

html = html.replace(/<div class="project-footer">[\s\S]*?<\/div>/g, '');

fs.writeFileSync(htmlPath, html);
console.log('Update HTML complete!');
