document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const navbar = document.querySelector(".navbar")
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const faqItems = document.querySelectorAll(".faq-item")
  const partnerCards = document.querySelectorAll(".partner-card")
  const modalOverlay = document.querySelector(".modal-overlay")
  const closeModal = document.querySelector(".close-modal")
  const filterButtons = document.querySelectorAll(".filter-button")
  let lastScrollTop = 0

  // Initialize AOS elements
  initAOS()

  // Event Listeners
  window.addEventListener("scroll", handleScroll)
  hamburger.addEventListener("click", toggleMenu)

  // Initialize FAQ accordions
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })

  // Initialize Partner Modal
  if (partnerCards.length > 0 && modalOverlay) {
    partnerCards.forEach((card) => {
      card.querySelector("button").addEventListener("click", () => {
        const partnerId = card.getAttribute("data-partner-id")
        openPartnerModal(partnerId)
      })
    })

    closeModal.addEventListener("click", closePartnerModal)
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closePartnerModal()
      }
    })
  }

  // Initialize Filter Buttons
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")
        filterContent(filter)

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
      })
    })
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent

      submitButton.disabled = true
      submitButton.textContent = "Enviando..."

      // Simulate API call
      setTimeout(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        contactForm.reset()
        submitButton.disabled = false
        submitButton.textContent = originalText
      }, 1500)
    })
  }

  // Functions
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Navbar hide/show on scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("hidden")
    } else {
      navbar.classList.remove("hidden")
    }

    lastScrollTop = scrollTop

    // Animate elements on scroll
    animateOnScroll()
  }

  function toggleMenu() {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
    document.body.classList.toggle("no-scroll")
  }

  function openPartnerModal(partnerId) {
    // In a real application, you would fetch partner data based on the ID
    // For now, we'll just show the modal with placeholder content
    const modalTitle = document.querySelector(".modal-title h2")
    const modalCategory = document.querySelector(".modal-category")
    const modalDescription = document.querySelector(".modal-description p")

    // Sample data - in a real app, this would come from an API or database
    const partnerData = {
      1: {
        name: "RetroMania Games",
        category: "Loja de Jogos",
        description:
          "RetroMania Games é uma loja especializada em jogos e consoles retrô, oferecendo produtos originais e importados para colecionadores e entusiastas. Com mais de 10 anos de experiência no mercado, a RetroMania se tornou referência em preservação da história dos videogames no Brasil. Além da venda de produtos, a loja também realiza eventos, torneios e workshops sobre restauração e manutenção de consoles antigos.",
      },
      2: {
        name: "Pixel Art Studio",
        category: "Design & Arte",
        description:
          "Pixel Art Studio é um estúdio de design especializado em pixel art e arte retrô para jogos e mídias digitais. Fundado em 2018 por um grupo de artistas apaixonados por estética retrô, o estúdio já colaborou com diversos desenvolvedores independentes e grandes estúdios. Seus trabalhos incluem sprites para jogos, ilustrações, logos e animações, sempre com o charme e a nostalgia dos pixels.",
      },
      3: {
        name: "Chiptune Records",
        category: "Música & Áudio",
        description:
          "Chiptune Records é uma produtora musical especializada em chiptune e trilhas sonoras inspiradas em jogos retrô. Fundada pelo músico e produtor João Silva em 2015, a Chiptune Records já lançou mais de 30 álbuns e colaborou com diversos desenvolvedores de jogos independentes. Além de produção musical, a empresa também oferece serviços de sound design e workshops sobre música 8-bit e 16-bit.",
      },
      4: {
        name: "GameBit Magazine",
        category: "Mídia & Conteúdo",
        description:
          "GameBit Magazine é uma revista digital especializada em jogos retrô, história dos videogames e cultura gamer. Criada em 2016, a publicação mensal conta com artigos, entrevistas, análises e reportagens especiais sobre o universo dos jogos clássicos. Com uma equipe de jornalistas e entusiastas apaixonados, a GameBit se tornou uma das principais fontes de informação sobre o mundo retrô no Brasil.",
      },
      5: {
        name: "Retro Game Fest",
        category: "Eventos",
        description:
          "Retro Game Fest é uma empresa organizadora de eventos e competições de jogos retrô em todo o Brasil. Desde 2017, a empresa realiza anualmente o maior festival de jogos retrô do país, reunindo colecionadores, jogadores, desenvolvedores e entusiastas. O evento conta com torneios, exposições, palestras, área de vendas e muito mais, celebrando a história e o legado dos videogames.",
      },
      6: {
        name: "8-Bit Brewery",
        category: "Bebidas & Alimentação",
        description:
          "8-Bit Brewery é uma cervejaria artesanal com rótulos inspirados em jogos clássicos e cultura retrô. Fundada em 2019 por amigos gamers e cervejeiros, a empresa produz cervejas artesanais com nomes, sabores e rótulos que homenageiam clássicos dos videogames. Além das cervejas, a 8-Bit Brewery também possui um brewpub temático em São Paulo, onde os clientes podem jogar em consoles retrô enquanto degustam as criações da casa.",
      },
    }

    // Update modal content
    if (partnerData[partnerId]) {
      const partner = partnerData[partnerId]
      modalTitle.textContent = partner.name
      modalCategory.textContent = partner.category
      modalDescription.textContent = partner.description
    }

    // Show modal
    modalOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  function closePartnerModal() {
    modalOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }

  function filterContent(filter) {
    // This function would filter content based on the selected category
    // For now, we'll just log the filter
    console.log("Filtering by:", filter)

    // In a real application, you would show/hide elements based on the filter
    // Example:
    // const items = document.querySelectorAll('.filterable-item');
    // items.forEach(item => {
    //     if (filter === 'all' || item.classList.contains(filter)) {
    //         item.style.display = 'block';
    //     } else {
    //         item.style.display = 'none';
    //     }
    // });
  }

  function initAOS() {
    // Find all elements with data-aos attribute
    const aosElements = document.querySelectorAll("[data-aos]")

    // Set initial state
    aosElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(50px)"
    })

    // Trigger initial check
    animateOnScroll()
  }

  function animateOnScroll() {
    const aosElements = document.querySelectorAll("[data-aos]")

    aosElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("aos-animate")
      }
    })
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
  }

  // Hero Logo Animation
  const heroLogo = document.querySelector(".hero-logo")
  if (heroLogo) {
    heroLogo.addEventListener("mouseover", () => {
      heroLogo.style.filter = "drop-shadow(0 0 15px var(--primary-color))"
    })

    heroLogo.addEventListener("mouseout", () => {
      heroLogo.style.filter = ""
    })
  }

  // Video Card Hover Effects
  const videoCards = document.querySelectorAll(".video-card")
  videoCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      const playButton = card.querySelector(".play-button")
      if (playButton) {
        playButton.style.opacity = "1"
      }
    })

    card.addEventListener("mouseout", () => {
      const playButton = card.querySelector(".play-button")
      if (playButton) {
        playButton.style.opacity = "0"
      }
    })
  })
})
