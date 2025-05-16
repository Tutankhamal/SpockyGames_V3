// Timeline JavaScript for Spocky Games

document.addEventListener("DOMContentLoaded", () => {
  // Timeline points click handler
  const timelinePoints = document.querySelectorAll(".timeline-point")

  // Verificar se os elementos modais existem no DOM
  const genModalBg = document.getElementById("gen-modal-bg")
  const genModalContent = document.getElementById("gen-modal-content")
  const genModalClose = document.getElementById("gen-modal-close")

  const consoleModalBg = document.getElementById("console-modal-bg")
  const consoleModalContent = document.getElementById("console-modal-content")
  const consoleModalClose = document.getElementById("console-modal-close")

  // Generation data
  const generations = {
    1: {
      title: "1ª Geração (1972-1977)",
      description:
        "A primeira geração de consoles de videogame marcou o início da indústria de jogos eletrônicos domésticos. Caracterizada por gráficos simples, geralmente em preto e branco, e jogabilidade rudimentar, esta era estabeleceu as bases para o que viria a se tornar uma das maiores indústrias de entretenimento do mundo.",
      consoles: [
        {
          name: "Magnavox Odyssey",
          year: 1972,
          manufacturer: "Magnavox",
          specs: {
            CPU: "Analógico (sem CPU)",
            Memória: "Nenhuma",
            Gráficos: "Preto e branco",
            Mídia: "Cartuchos de circuito",
          },
          games: ["Table Tennis", "Hockey", "Football", "Simon Says"],
          description:
            "O primeiro console de videogame comercial da história, criado por Ralph Baer. Utilizava circuitos analógicos e overlays plásticos coloridos que eram colocados na tela da TV.",
        },
        {
          name: "Atari Pong",
          year: 1975,
          manufacturer: "Atari",
          specs: {
            CPU: "Analógico (sem CPU)",
            Memória: "Nenhuma",
            Gráficos: "Preto e branco",
            Mídia: "Embutido",
          },
          games: ["Pong"],
          description:
            "Versão doméstica do famoso arcade Pong, que simulava uma partida de tênis de mesa. Foi um enorme sucesso comercial e ajudou a estabelecer a Atari como líder do mercado.",
        },
      ],
    },
    2: {
      title: "2ª Geração (1976-1984)",
      description:
        "A segunda geração trouxe avanços significativos, incluindo gráficos coloridos e processadores dedicados. O Atari 2600 dominou esta era, estabelecendo o modelo de negócios de consoles e jogos separados que persiste até hoje.",
      consoles: [
        {
          name: "Atari 2600",
          year: 1977,
          manufacturer: "Atari",
          specs: {
            CPU: "MOS 6507 @ 1.19 MHz",
            Memória: "128 bytes RAM",
            Gráficos: "Colorido (128 cores)",
            Mídia: "Cartuchos ROM",
          },
          games: ["Space Invaders", "Pac-Man", "Pitfall!", "Adventure"],
          description:
            "Um dos consoles mais icônicos e influentes da história, o Atari 2600 (originalmente chamado VCS) popularizou o conceito de jogos em cartucho intercambiáveis.",
        },
        {
          name: "Intellivision",
          year: 1979,
          manufacturer: "Mattel",
          specs: {
            CPU: "GI CP1610 @ 894.886 kHz",
            Memória: "1456 bytes RAM",
            Gráficos: "16 cores",
            Mídia: "Cartuchos ROM",
          },
          games: ["Astrosmash", "Advanced Dungeons & Dragons", "Night Stalker"],
          description:
            "Principal concorrente do Atari 2600, o Intellivision se destacava por seus gráficos superiores e controle inovador com teclado numérico.",
        },
      ],
    },
    3: {
      title: "3ª Geração (1983-1995)",
      description:
        "Conhecida como a era de 8 bits, a terceira geração surgiu após o crash dos videogames de 1983 e foi dominada pelo Nintendo Entertainment System (NES). Esta geração estabeleceu muitas das convenções de jogabilidade e design que persistem até hoje.",
      consoles: [
        {
          name: "Nintendo Entertainment System (NES)",
          year: 1983,
          manufacturer: "Nintendo",
          specs: {
            CPU: "Ricoh 2A03 @ 1.79 MHz",
            Memória: "2 KB RAM",
            Gráficos: "52 cores",
            Mídia: "Cartuchos ROM",
          },
          games: ["Super Mario Bros.", "The Legend of Zelda", "Metroid", "Mega Man"],
          description:
            "O NES revitalizou a indústria de videogames após o crash de 1983 e estabeleceu a Nintendo como líder do mercado. Introduziu franquias icônicas que continuam populares até hoje.",
        },
        {
          name: "Sega Master System",
          year: 1985,
          manufacturer: "Sega",
          specs: {
            CPU: "Zilog Z80 @ 3.58 MHz",
            Memória: "8 KB RAM",
            Gráficos: "64 cores",
            Mídia: "Cartuchos ROM, Cards",
          },
          games: ["Alex Kidd in Miracle World", "Phantasy Star", "Wonder Boy"],
          description:
            "Tecnicamente superior ao NES, o Master System teve sucesso limitado nos EUA, mas foi extremamente popular no Brasil e em partes da Europa.",
        },
      ],
    },
    4: {
      title: "4ª Geração (1987-1999)",
      description:
        "A era de 16 bits foi marcada pela intensa rivalidade entre Sega e Nintendo. Esta geração viu melhorias significativas em gráficos, som e complexidade dos jogos, além da introdução de gêneros como o RPG japonês ao mercado ocidental.",
      consoles: [
        {
          name: "Super Nintendo Entertainment System (SNES)",
          year: 1990,
          manufacturer: "Nintendo",
          specs: {
            CPU: "Ricoh 5A22 @ 3.58 MHz",
            Memória: "128 KB RAM",
            Gráficos: "32,768 cores",
            Mídia: "Cartuchos ROM",
          },
          games: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Chrono Trigger", "Final Fantasy VI"],
          description:
            "O SNES é considerado por muitos como um dos melhores consoles já criados, com uma biblioteca de jogos extraordinária que inclui alguns dos títulos mais aclamados de todos os tempos.",
        },
        {
          name: "Sega Genesis (Mega Drive)",
          year: 1988,
          manufacturer: "Sega",
          specs: {
            CPU: "Motorola 68000 @ 7.6 MHz",
            Memória: "64 KB RAM",
            Gráficos: "512 cores",
            Mídia: "Cartuchos ROM",
          },
          games: ["Sonic the Hedgehog", "Streets of Rage", "Phantasy Star IV", "Gunstar Heroes"],
          description:
            "Com o slogan 'Genesis does what Nintendon't', o console da Sega desafiou a dominância da Nintendo com marketing agressivo e jogos voltados para um público mais maduro.",
        },
      ],
    },
    5: {
      title: "5ª Geração (1993-2006)",
      description:
        "A era de 32/64 bits marcou a transição para gráficos 3D e mídia óptica. O PlayStation da Sony entrou no mercado e rapidamente se tornou líder, enquanto o Nintendo 64 manteve o uso de cartuchos.",
      consoles: [
        {
          name: "Sony PlayStation",
          year: 1994,
          manufacturer: "Sony",
          specs: {
            CPU: "MIPS R3000A @ 33.8 MHz",
            Memória: "2 MB RAM",
            Gráficos: "16.7 milhões de cores",
            Mídia: "CD-ROM",
          },
          games: ["Final Fantasy VII", "Metal Gear Solid", "Resident Evil", "Crash Bandicoot"],
          description:
            "O PlayStation revolucionou a indústria com sua mídia CD-ROM, que permitia jogos maiores e com melhores gráficos, além de atrair desenvolvedores terceiros com royalties mais baixos.",
        },
        {
          name: "Nintendo 64",
          year: 1996,
          manufacturer: "Nintendo",
          specs: {
            CPU: "NEC VR4300 @ 93.75 MHz",
            Memória: "4 MB RAM (expansível para 8 MB)",
            Gráficos: "16.7 milhões de cores",
            Mídia: "Cartuchos ROM",
          },
          games: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time", "GoldenEye 007", "Mario Kart 64"],
          description:
            "Embora limitado pela capacidade dos cartuchos, o N64 inovou com seu controle analógico e produziu alguns dos jogos 3D mais influentes da história.",
        },
      ],
    },
    6: {
      title: "6ª Geração (1998-2013)",
      description:
        "Esta geração viu a entrada da Microsoft no mercado de consoles com o Xbox, enquanto o PlayStation 2 se tornava o console mais vendido de todos os tempos. A conectividade online começou a se tornar um recurso padrão.",
      consoles: [
        {
          name: "Sony PlayStation 2",
          year: 2000,
          manufacturer: "Sony",
          specs: {
            CPU: "Emotion Engine @ 294 MHz",
            Memória: "32 MB RAM",
            Gráficos: "24 bits de cor",
            Mídia: "DVD-ROM, CD-ROM",
          },
          games: ["Grand Theft Auto: San Andreas", "Metal Gear Solid 3", "Final Fantasy X", "God of War"],
          description:
            "Com mais de 155 milhões de unidades vendidas, o PS2 é o console mais bem-sucedido da história. Sua capacidade de reproduzir DVDs ajudou a popularizá-lo como centro de entretenimento doméstico.",
        },
        {
          name: "Microsoft Xbox",
          year: 2001,
          manufacturer: "Microsoft",
          specs: {
            CPU: "Intel Pentium III @ 733 MHz",
            Memória: "64 MB RAM",
            Gráficos: "NVIDIA NV2A",
            Mídia: "DVD-ROM",
          },
          games: ["Halo: Combat Evolved", "Fable", "Forza Motorsport", "Star Wars: Knights of the Old Republic"],
          description:
            "A entrada da Microsoft no mercado de consoles trouxe hardware poderoso e o inovador serviço Xbox Live, estabelecendo padrões para jogos online em consoles.",
        },
      ],
    },
    7: {
      title: "7ª Geração (2005-2017)",
      description:
        "Marcada pela alta definição, controles de movimento e serviços online robustos, esta geração viu o Wii da Nintendo dominar em vendas com sua abordagem inovadora, enquanto Xbox 360 e PS3 competiam com hardware mais poderoso.",
      consoles: [
        {
          name: "Nintendo Wii",
          year: 2006,
          manufacturer: "Nintendo",
          specs: {
            CPU: "IBM PowerPC @ 729 MHz",
            Memória: "88 MB RAM",
            Gráficos: "ATI Hollywood",
            Mídia: "Discos ópticos Wii, GameCube",
          },
          games: ["Wii Sports", "Super Mario Galaxy", "The Legend of Zelda: Twilight Princess", "Mario Kart Wii"],
          description:
            "O Wii revolucionou a forma como interagimos com os jogos através de seu controle de movimento, atraindo jogadores casuais e expandindo significativamente o mercado.",
        },
        {
          name: "Sony PlayStation 3",
          year: 2006,
          manufacturer: "Sony",
          specs: {
            CPU: "Cell Broadband Engine @ 3.2 GHz",
            Memória: "256 MB RAM + 256 MB VRAM",
            Gráficos: "NVIDIA RSX",
            Mídia: "Blu-ray Disc, DVD, CD",
          },
          games: ["Uncharted 2: Among Thieves", "The Last of Us", "God of War III", "Gran Turismo 5"],
          description:
            "Inicialmente prejudicado por seu alto preço, o PS3 eventualmente se recuperou com exclusivos fortes e a inclusão de um reprodutor Blu-ray, ajudando a estabelecer o formato.",
        },
      ],
    },
    8: {
      title: "8ª Geração (2012-2020)",
      description:
        "Esta geração trouxe consoles mais poderosos capazes de gráficos em 4K, realidade virtual, e uma transição mais forte para distribuição digital e serviços de assinatura.",
      consoles: [
        {
          name: "Sony PlayStation 4",
          year: 2013,
          manufacturer: "Sony",
          specs: {
            CPU: "AMD Jaguar x86-64 @ 1.6 GHz",
            Memória: "8 GB GDDR5",
            Gráficos: "AMD Radeon (1.84 TFLOPS)",
            Mídia: "Blu-ray Disc, DVD",
          },
          games: ["God of War (2018)", "Bloodborne", "Horizon Zero Dawn", "Spider-Man"],
          description:
            "O PS4 dominou esta geração com foco em jogos exclusivos de alta qualidade e uma estratégia de marketing eficaz, vendendo mais de 110 milhões de unidades.",
        },
        {
          name: "Microsoft Xbox One",
          year: 2013,
          manufacturer: "Microsoft",
          specs: {
            CPU: "AMD Jaguar x86-64 @ 1.75 GHz",
            Memória: "8 GB DDR3",
            Gráficos: "AMD Radeon (1.31 TFLOPS)",
            Mídia: "Blu-ray Disc, DVD",
          },
          games: ["Halo 5: Guardians", "Forza Horizon 4", "Gears 5", "Sea of Thieves"],
          description:
            "Após um lançamento controverso focado em recursos de entretenimento em vez de jogos, o Xbox One se recuperou com serviços como o Game Pass e aquisições de estúdios.",
        },
      ],
    },
    9: {
      title: "9ª Geração (2020-Presente)",
      description:
        "A geração atual traz SSDs ultrarrápidos, ray tracing em tempo real, e suporte a 8K, além de maior compatibilidade com gerações anteriores e foco em serviços de assinatura.",
      consoles: [
        {
          name: "Sony PlayStation 5",
          year: 2020,
          manufacturer: "Sony",
          specs: {
            CPU: "AMD Zen 2 @ 3.5 GHz",
            Memória: "16 GB GDDR6",
            Gráficos: "AMD RDNA 2 (10.28 TFLOPS)",
            Mídia: "Ultra HD Blu-ray, Digital",
          },
          games: ["Demon's Souls", "Ratchet & Clank: Rift Apart", "Returnal", "Horizon Forbidden West"],
          description:
            "O PS5 se destaca por seu SSD ultrarrápido que praticamente elimina tempos de carregamento, além do controle DualSense com feedback háptico avançado e gatilhos adaptativos.",
        },
        {
          name: "Microsoft Xbox Series X",
          year: 2020,
          manufacturer: "Microsoft",
          specs: {
            CPU: "AMD Zen 2 @ 3.8 GHz",
            Memória: "16 GB GDDR6",
            Gráficos: "AMD RDNA 2 (12 TFLOPS)",
            Mídia: "Ultra HD Blu-ray, Digital",
          },
          games: ["Halo Infinite", "Forza Horizon 5", "Microsoft Flight Simulator", "Starfield"],
          description:
            "O Xbox Series X é tecnicamente o console mais poderoso da geração, com foco em retrocompatibilidade e no serviço Game Pass, que oferece centenas de jogos por uma assinatura mensal.",
        },
      ],
    },
    10: {
      title: "10ª Geração (Futuro)",
      description:
        "Ainda não anunciada oficialmente, a próxima geração de consoles provavelmente trará avanços em inteligência artificial, realidade virtual/aumentada, e possivelmente uma maior integração com serviços de streaming.",
      consoles: [
        {
          name: "Consoles Futuros",
          year: "????",
          manufacturer: "Diversos",
          specs: {
            CPU: "Arquiteturas avançadas",
            Memória: "Capacidades expandidas",
            Gráficos: "Ray tracing avançado, IA",
            Mídia: "Predominantemente digital",
          },
          games: ["Títulos ainda não anunciados"],
          description:
            "A próxima geração poderá trazer experiências mais imersivas com realidade virtual e aumentada, maior uso de inteligência artificial para criar mundos dinâmicos, e possivelmente uma transição completa para distribuição digital.",
        },
      ],
    },
  }

  // Open generation modal
  if (timelinePoints.length > 0) {
    timelinePoints.forEach((point) => {
      point.addEventListener("click", function () {
        const genId = this.getAttribute("data-gen")
        const genData = generations[genId]

        if (genData && genModalBg && genModalContent) {
          // Create generation card content
          let content = `
            <div class="generation-card">
              <div class="card-border"></div>
              <div class="generation-header">
                <h2 class="generation-title">${genData.title}</h2>
              </div>
              <div class="generation-content">
                <div class="generation-description">${genData.description}</div>
                <h3 class="consoles-title">Consoles Principais</h3>
                <div class="consoles-grid">
          `

          // Add consoles
          genData.consoles.forEach((console, index) => {
            content += `
              <div class="console-item" data-gen="${genId}" data-console="${index}">
                <div class="console-icon">🎮</div>
                <div class="console-name">${console.name}</div>
              </div>
            `
          })

          content += `
                </div>
              </div>
            </div>
          `

          genModalContent.innerHTML = content
          genModalBg.classList.add("active")

          // Add click event to console items
          const consoleItems = genModalContent.querySelectorAll(".console-item")
          consoleItems.forEach((item) => {
            item.addEventListener("click", function () {
              const genId = this.getAttribute("data-gen")
              const consoleIndex = this.getAttribute("data-console")
              const consoleData = generations[genId].consoles[consoleIndex]

              openConsoleModal(consoleData)
            })
          })
        }
      })
    })
  }

  // Open console modal
  function openConsoleModal(consoleData) {
    if (consoleModalBg && consoleModalContent) {
      // Create console card content
      let content = `
        <div class="console-card">
          <div class="card-border"></div>
          <div class="card-inner">
            <div class="card-header">
              <h2 class="card-title">${consoleData.name}</h2>
              <div class="card-type">${consoleData.year}</div>
            </div>
            <div class="card-image">
              <img src="/placeholder.svg?height=200&width=350" alt="${consoleData.name}">
            </div>
            <div class="card-description">${consoleData.description}</div>
            <div class="console-specs">
      `

      // Add specs
      for (const [key, value] of Object.entries(consoleData.specs)) {
        content += `
          <div class="spec-item">
            <div class="spec-label">${key}</div>
            <div class="spec-value">${value}</div>
          </div>
        `
      }

      content += `
            </div>
            <div class="console-games">
              <div class="games-title">Jogos Notáveis</div>
              <div class="games-list">
      `

      // Add games
      consoleData.games.forEach((game) => {
        content += `<div class="game-tag">${game}</div>`
      })

      content += `
              </div>
            </div>
            <div class="card-footer">
              <div class="card-year">Fabricante: ${consoleData.manufacturer}</div>
            </div>
          </div>
        </div>
      `

      consoleModalContent.innerHTML = content
      consoleModalBg.classList.add("active")
    }
  }

  // Close generation modal
  if (genModalClose && genModalBg) {
    genModalClose.addEventListener("click", () => {
      genModalBg.classList.remove("active")
    })

    // Close when clicking outside the modal
    genModalBg.addEventListener("click", (event) => {
      if (event.target === genModalBg) {
        genModalBg.classList.remove("active")
      }
    })
  }

  // Close console modal
  if (consoleModalClose && consoleModalBg) {
    consoleModalClose.addEventListener("click", () => {
      consoleModalBg.classList.remove("active")
    })

    // Close when clicking outside the modal
    consoleModalBg.addEventListener("click", (event) => {
      if (event.target === consoleModalBg) {
        consoleModalBg.classList.remove("active")
      }
    })
  }

  // Keyboard accessibility for modals
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (genModalBg) genModalBg.classList.remove("active")
      if (consoleModalBg) consoleModalBg.classList.remove("active")
    }
  })
})




// Correção para o modal da timeline
document.addEventListener("DOMContentLoaded", () => {
  // Timeline points click handler
  const timelinePoints = document.querySelectorAll(".timeline-point");
  
  // Verificar se os elementos modais existem no DOM
  const genModalBg = document.getElementById("gen-modal-bg");
  const genModalContent = document.getElementById("gen-modal-content");
  const genModalClose = document.getElementById("gen-modal-close");
  
  // Open generation modal
  if (timelinePoints.length > 0 && genModalBg && genModalContent) {
    timelinePoints.forEach((point) => {
      point.addEventListener("click", function () {
        const genId = this.getAttribute("data-gen");
        const genData = generations[genId];
        
        if (genData) {
          // Create generation card content
          let content = `
            <div class="generation-card">
              <div class="card-border"></div>
              <div class="generation-header">
                <h2 class="generation-title">${genData.title}</h2>
              </div>
              <div class="generation-content">
                <div class="generation-description">${genData.description}</div>
                <h3 class="consoles-title">Consoles Principais</h3>
                <div class="consoles-grid">
          `;
          
          // Add consoles
          genData.consoles.forEach((console, index) => {
            content += `
              <div class="console-item" data-gen="${genId}" data-console="${index}">
                <div class="console-icon">🎮</div>
                <div class="console-name">${console.name}</div>
              </div>
            `;
          });
          
          content += `
                </div>
              </div>
            </div>
          `;
          
          genModalContent.innerHTML = content;
          genModalBg.classList.add("active");
          
          // Add click event to console items
          const consoleItems = genModalContent.querySelectorAll(".console-item");
          consoleItems.forEach((item) => {
            item.addEventListener("click", function () {
              const genId = this.getAttribute("data-gen");
              const consoleIndex = this.getAttribute("data-console");
              const consoleData = generations[genId].consoles[consoleIndex];
              
              openConsoleModal(consoleData);
            });
          });
        }
      });
    });
  }
  
  // Close generation modal
  if (genModalClose && genModalBg) {
    genModalClose.addEventListener("click", () => {
      genModalBg.classList.remove("active");
    });
    
    // Close when clicking outside the modal
    genModalBg.addEventListener("click", (event) => {
      if (event.target === genModalBg) {
        genModalBg.classList.remove("active");
      }
    });
  }
});