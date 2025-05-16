// Parceiros JavaScript for Spocky Games

// DOM Elements
const parceiroCards = document.querySelectorAll('.parceiro-card');
const parceiroModalBg = document.getElementById('parceiro-modal-bg');
const parceiroModal = document.getElementById('parceiro-modal');
const parceiroModalClose = document.getElementById('parceiro-modal-close');
const parceiroModalContent = document.getElementById('parceiro-modal-content');

// Parceiros data
const parceirosData = {
  ecast: {
    name: "E-Cast",
    fullName: "E-Cast Gaming Network",
    logo: "/assets/images/ecast.png",
    description: "Soluções completas em streaming de áudio e vídeo para rádios, TVs e eventos ao vivo. Qualidade, estabilidade e tecnologia de ponta para sua transmissão.",
    longDescription: "A E-Cast é uma empresa especializada em soluções de streaming para criadores de conteúdo e empresas. Com anos de experiência no mercado, oferece serviços que vão desde a configuração básica até soluções completas para grandes eventos.<br><br>Parceira do Spocky Games desde 2023, a E-Cast fornece suporte técnico para as transmissões ao vivo e eventos especiais do canal.",
    website: "https://ecast.com.br",
    socialLinks: {
      youtube: "https://youtube.com/ecastgaming",
      twitter: "https://twitter.com/ecastgaming",
      instagram: "https://instagram.com/ecastgaming",
      discord: "https://discord.gg/ecastgaming"
    }
  },
  entretonic: {
    name: "Entretonic",
    fullName: "Entretonic Arcades & Fliperamas",
    logo: "/assets/images/entretonic.png",
    description: "Fliperamas e Arcades de alta qualidade. Vários anos no mercado, tecnologia de ponta e os melhores componentes do mercado. Aceitamos pedidos customizados.",
    longDescription: "A Entretonic é uma empresa especializada na fabricação e restauração de máquinas arcade e fliperamas. Com mais de 15 anos de experiência, utiliza componentes de alta qualidade e oferece suporte técnico permanente para seus produtos.<br><br>A parceria com o Spocky Games inclui a criação de conteúdo exclusivo sobre a história dos arcades e demonstrações de máquinas clássicas e modernas.",
    website: "https://entretonic.com.br",
    socialLinks: {
      youtube: "https://youtube.com/entretonicmedia",
      facebook: "https://facebook.com/entretonicmedia",
      instagram: "https://instagram.com/entretonicmedia"
    }
  }
};

// Open parceiro modal
function openParceiroModal(parceiroId) {
  const parceiroData = parceirosData[parceiroId];
  if (!parceiroData) return;
  
  let socialLinksHTML = '';
  if (parceiroData.socialLinks) {
    socialLinksHTML = '<div class="parceiro-social-links">';
    for (const [platform, url] of Object.entries(parceiroData.socialLinks)) {
      let icon = '';
      switch (platform) {
        case 'youtube':
          icon = '<i class="fab fa-youtube"></i>';
          break;
        case 'twitter':
          icon = '<i class="fab fa-twitter"></i>';
          break;
        case 'instagram':
          icon = '<i class="fab fa-instagram"></i>';
          break;
        case 'facebook':
          icon = '<i class="fab fa-facebook"></i>';
          break;
        case 'discord':
          icon = '<i class="fab fa-discord"></i>';
          break;
        default:
          icon = '<i class="fas fa-link"></i>';
      }
      
      socialLinksHTML += `<a href="${url}" target="_blank" rel="noopener" class="parceiro-social-link">${icon} ${platform}</a>`;
    }
    socialLinksHTML += '</div>';
  }
  
  let content = `
    <div class="parceiro-modal-header">
      <div class="parceiro-modal-logo">
        <img src="${parceiroData.logo}" alt="${parceiroData.fullName}">
      </div>
      <h2 class="parceiro-modal-title">${parceiroData.fullName}</h2>
    </div>
    <div class="parceiro-modal-body">
      <div class="parceiro-modal-description">
        ${parceiroData.longDescription}
      </div>
      ${socialLinksHTML}
      <div class="parceiro-modal-website">
        <a href="${parceiroData.website}" target="_blank" rel="noopener" class="website-btn">
          <i class="fas fa-globe"></i> Visitar Website
        </a>
      </div>
    </div>
  `;
  
  parceiroModalContent.innerHTML = content;
  parceiroModalBg.classList.add('active');
}

// Close parceiro modal
function closeParceiroModal() {
  parceiroModalBg.classList.remove('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Parceiro card click events
  if (parceiroCards) {
    parceiroCards.forEach(card => {
      card.addEventListener('click', () => {
        const parceiroId = card.getAttribute('data-parceiro');
        openParceiroModal(parceiroId);
      });
    });
  }
  
  // Modal close event
  if (parceiroModalClose) {
    parceiroModalClose.addEventListener('click', closeParceiroModal);
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === parceiroModalBg) {
      closeParceiroModal();
    }
  });
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeParceiroModal();
  }
});