const peppers = [
  {
    id: "biquinho", name: "Biquinho", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Suave", shu: "500 – 1.000 SHU", flavorProfile: ["Doce", "Frutada"],
    aroma: "Frutado, delicado e levemente floral.", taste: "Doçura limpa, acidez discreta e ardência quase imperceptível.",
    pairsWith: ["Queijos frescos", "Saladas", "Canapés"], danger: "Muito baixo. Acessível até para paladares sensíveis.",
    curiosity: "Seu formato termina em uma ponta que lembra um pequeno bico.",
    harmonization: ["Espumante brut", "Queijo de cabra", "Chocolate branco"], uses: ["Conservas", "Drinks"], image: "images/Biquinho.jpg"
  },
  {
    id: "cambuci", name: "Cambuci / Chapéu-de-Frade", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Suave", shu: "0 – 500 SHU", flavorProfile: ["Vegetal", "Doce"],
    aroma: "Verde, fresco e delicadamente herbáceo.", taste: "Suculenta, levemente adocicada e sem calor agressivo.",
    pairsWith: ["Carnes assadas", "Arroz", "Legumes"], danger: "Muito baixo. Pode ser consumida como um pequeno pimentão.",
    curiosity: "O formato achatado inspirou o nome Chapéu-de-Frade.",
    harmonization: ["Cachaça branca", "Queijos suaves", "Aves"], uses: ["Conservas", "Carnes"], image: "images/Cambuci.jpg"
  },
  {
    id: "dedo-de-moca", name: "Dedo-de-Moça", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Leve", shu: "5.000 – 15.000 SHU", flavorProfile: ["Frutada", "Aromática"],
    aroma: "Frutas vermelhas, ervas e leve frescor.", taste: "Calor progressivo, polpa frutada e final equilibrado.",
    pairsWith: ["Feijão", "Carnes", "Geleias"], danger: "Baixo. Retirar sementes e membranas reduz a sensação de calor.",
    curiosity: "É uma das pimentas mais presentes na cozinha cotidiana brasileira.",
    harmonization: ["Caipirinha", "Carne suína", "Goiabada"], uses: ["Molhos", "Carnes", "Conservas"], image: "images/Dedo-de-Moça.jpg"
  },
  {
    id: "malagueta", name: "Malagueta", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Forte", shu: "50.000 – 100.000 SHU", flavorProfile: ["Aromática", "Frutada"],
    aroma: "Vivo, direto e ligeiramente fermentado.", taste: "Ataque rápido, sabor limpo e ardência persistente.",
    pairsWith: ["Feijoada", "Moqueca", "Acarajé"], danger: "Alto. Use em pequenas doses e evite contato com os olhos.",
    curiosity: "Tornou-se símbolo da culinária brasileira apesar de sua origem africana.",
    harmonization: ["Cerveja lager", "Peixes gordos", "Coco"], uses: ["Molhos", "Carnes", "Frutos do mar"], image: "images/Malagueta.jpg"
  },
  {
    id: "pimenta-de-cheiro", name: "Pimenta-de-Cheiro", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Média", shu: "10.000 – 50.000 SHU", flavorProfile: ["Floral", "Aromática"],
    aroma: "Perfume tropical marcante, floral e cítrico.", taste: "Aroma exuberante com calor variável entre frutos.",
    pairsWith: ["Peixes", "Tacacá", "Caldos"], danger: "Moderado. A ardência pode variar bastante entre variedades.",
    curiosity: "Na Amazônia, seu perfume é tão valorizado quanto a picância.",
    harmonization: ["Cerveja de trigo", "Camarão", "Frutas amarelas"], uses: ["Frutos do mar", "Molhos"], image: "images/pimenta-de-cheiro.png"
  },
  {
    id: "cumari-do-para", name: "Cumari-do-Pará", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Média", shu: "30.000 – 50.000 SHU", flavorProfile: ["Cítrica", "Aromática"],
    aroma: "Cítrico, resinoso e intensamente perfumado.", taste: "Pequena, vibrante e de calor rápido com boa acidez.",
    pairsWith: ["Peixes de rio", "Farofas", "Caldos"], danger: "Moderado. O tamanho pequeno concentra bastante intensidade.",
    curiosity: "É uma joia amazônica frequentemente preservada em tucupi ou vinagre.",
    harmonization: ["Cachaça envelhecida", "Pirarucu", "Cupuaçu"], uses: ["Conservas", "Frutos do mar"], image: "images/Cumari-do-Pará.jpg"
  },
  {
    id: "murupi", name: "Murupi", origin: "Amazônia, Brasil", countryGroup: "Brasil",
    heatLevel: "Forte", shu: "60.000 – 100.000 SHU", flavorProfile: ["Cítrica", "Floral"],
    aroma: "Tropical, cítrico e muito perfumado.", taste: "Ardência longa, acidez viva e notas de frutas amarelas.",
    pairsWith: ["Tucupi", "Peixes", "Pato"], danger: "Alto. Seu perfume delicado esconde uma ardência potente.",
    curiosity: "Tradicionalmente cultivada por comunidades amazônicas.",
    harmonization: ["Cerveja sour", "Pato no tucupi", "Abacaxi"], uses: ["Molhos", "Frutos do mar"], image: "images/Murupi.jpg"
  },
  {
    id: "pimenta-bode", name: "Pimenta-Bode", origin: "Centro-Oeste, Brasil", countryGroup: "Brasil",
    heatLevel: "Média", shu: "15.000 – 30.000 SHU", flavorProfile: ["Frutada", "Aromática"],
    aroma: "Intenso, frutado e característico.", taste: "Polpa aromática, calor médio e final levemente adocicado.",
    pairsWith: ["Arroz com pequi", "Frango", "Conservas"], danger: "Moderado. Use aos poucos para preservar o aroma do prato.",
    curiosity: "É especialmente querida em Goiás, onde acompanha pratos regionais.",
    harmonization: ["Cerveja pilsen", "Pequi", "Queijo meia-cura"], uses: ["Conservas", "Carnes"], image: "images/Pimenta-Bode.jpg"
  },
  {
    id: "cumari-verdadeira", name: "Cumari Verdadeira", origin: "Sudeste, Brasil", countryGroup: "Brasil",
    heatLevel: "Média", shu: "30.000 – 50.000 SHU", flavorProfile: ["Aromática", "Terrosa"],
    aroma: "Silvestre, verde e discretamente terroso.", taste: "Picância aguda em um fruto minúsculo e cheio de personalidade.",
    pairsWith: ["Feijão tropeiro", "Carnes", "Farofas"], danger: "Moderado. Pequena no tamanho, intensa na concentração.",
    curiosity: "É uma pimenta nativa brasileira de difícil cultivo comercial.",
    harmonization: ["Cachaça de amburana", "Carne bovina", "Milho"], uses: ["Conservas", "Carnes"], image: "images/Cumari Verdadeira.jpg"
  },
  {
    id: "chifre-de-veado", name: "Chifre-de-Veado", origin: "Brasil", countryGroup: "Brasil",
    heatLevel: "Média", shu: "20.000 – 30.000 SHU", flavorProfile: ["Vegetal", "Frutada"],
    aroma: "Fresco, verde e levemente frutado.", taste: "Polpa fina, calor médio e boa persistência.",
    pairsWith: ["Linguiças", "Arroz", "Molhos rústicos"], danger: "Moderado. Recomenda-se provar uma pequena fatia primeiro.",
    curiosity: "Seu fruto longo e curvo lembra a galhada de um cervo.",
    harmonization: ["Cerveja amber", "Embutidos", "Tomate"], uses: ["Molhos", "Carnes"], image: "images/Chifre-de-Veado.jpg"
  },
  {
    id: "jalapeno", name: "Jalapeño", origin: "México", countryGroup: "México",
    heatLevel: "Leve", shu: "2.500 – 8.000 SHU", flavorProfile: ["Vegetal", "Cítrica"],
    aroma: "Verde, fresco e herbáceo.", taste: "Crocante, suculento e de ardência curta.",
    pairsWith: ["Tacos", "Queijos", "Guacamole"], danger: "Baixo. Geralmente confortável em preparações frescas.",
    curiosity: "Quando seco e defumado, transforma-se no chipotle.",
    harmonization: ["Tequila blanco", "Cheddar", "Abacate"], uses: ["Conservas", "Molhos", "Drinks"], image: "images/Jalapeño.jpg"
  },
  {
    id: "chipotle", name: "Chipotle", origin: "México", countryGroup: "México",
    heatLevel: "Leve", shu: "2.500 – 8.000 SHU", flavorProfile: ["Defumada", "Doce"],
    aroma: "Fumaça, madeira e frutas secas.", taste: "Defumado profundo, doçura concentrada e calor macio.",
    pairsWith: ["Chili", "Hambúrguer", "Feijão"], danger: "Baixo. A intensidade vem mais da fumaça que do calor.",
    curiosity: "É o jalapeño maduro submetido a um lento processo de defumação.",
    harmonization: ["Bourbon", "Chocolate amargo", "Carne bovina"], uses: ["Defumados", "Molhos", "Carnes"], image: "images/Chipotle.jpeg"
  },
  {
    id: "serrano", name: "Serrano", origin: "México", countryGroup: "México",
    heatLevel: "Média", shu: "10.000 – 25.000 SHU", flavorProfile: ["Vegetal", "Cítrica"],
    aroma: "Fresco, herbáceo e brilhante.", taste: "Mais firme e picante que o jalapeño, com acidez nítida.",
    pairsWith: ["Salsa verde", "Ceviche", "Pico de gallo"], danger: "Moderado. Seu calor aparece rápido em preparações cruas.",
    curiosity: "O nome remete às serras mexicanas onde é tradicionalmente cultivada.",
    harmonization: ["Mezcal jovem", "Coentro", "Limão"], uses: ["Molhos", "Frutos do mar"], image: "images/Serrano.jpg"
  },
  {
    id: "poblano", name: "Poblano", origin: "Puebla, México", countryGroup: "México",
    heatLevel: "Leve", shu: "1.000 – 2.000 SHU", flavorProfile: ["Vegetal", "Terrosa"],
    aroma: "Verde, terroso e suavemente tostado.", taste: "Carnudo, macio e delicado, ideal para rechear.",
    pairsWith: ["Queijos", "Milho", "Carnes"], danger: "Baixo. Uma excelente porta de entrada ao universo das pimentas.",
    curiosity: "Seco e maduro, o poblano recebe o nome de ancho.",
    harmonization: ["Cerveja escura", "Queijo Oaxaca", "Milho tostado"], uses: ["Carnes", "Molhos"], image: "images/Poblano.jpg"
  },
  {
    id: "ancho", name: "Ancho", origin: "México", countryGroup: "México",
    heatLevel: "Leve", shu: "1.000 – 2.000 SHU", flavorProfile: ["Doce", "Terrosa"],
    aroma: "Uva-passa, cacau e tabaco suave.", taste: "Doçura de frutas secas, calor discreto e final profundo.",
    pairsWith: ["Mole", "Cordeiro", "Chocolate"], danger: "Baixo. O sabor é mais marcante que a ardência.",
    curiosity: "É o poblano maduro, seco até concentrar seus açúcares naturais.",
    harmonization: ["Vinho tinto", "Cacau", "Carnes de cocção lenta"], uses: ["Molhos", "Carnes", "Defumados"], image: "images/Ancho.jpg"
  },
  {
    id: "espelette", name: "Espelette", origin: "País Basco, França", countryGroup: "França",
    heatLevel: "Leve", shu: "1.000 – 4.000 SHU", flavorProfile: ["Frutada", "Aromática"],
    aroma: "Frutas secas, feno e leve tostado.", taste: "Elegante, quente e adocicada, sem agressividade.",
    pairsWith: ["Ovos", "Peixes", "Piperade"], danger: "Baixo. É usada como especiaria de acabamento.",
    curiosity: "Possui denominação de origem protegida na região de Espelette.",
    harmonization: ["Vinho rosé", "Presunto cru", "Queijo de ovelha"], uses: ["Frutos do mar", "Carnes"], image: "images/Espelette.jpg"
  },
  {
    id: "shishito", name: "Shishito", origin: "Japão", countryGroup: "Ásia",
    heatLevel: "Suave", shu: "50 – 200 SHU", flavorProfile: ["Vegetal", "Doce"],
    aroma: "Verde, fresco e levemente tostado.", taste: "Delicado e herbáceo, especialmente quando grelhado.",
    pairsWith: ["Gergelim", "Missô", "Tempurá"], danger: "Muito baixo, embora cerca de um fruto em dez possa surpreender.",
    curiosity: "Seu nome faz referência à ponta que lembra a cabeça de um leão.",
    harmonization: ["Saquê", "Peixe grelhado", "Molho de soja"], uses: ["Conservas", "Frutos do mar"], image: "images/Shishito.jpg"
  },
  {
    id: "cayenne", name: "Cayenne", origin: "Guiana Francesa", countryGroup: "França",
    heatLevel: "Média", shu: "30.000 – 50.000 SHU", flavorProfile: ["Terrosa", "Aromática"],
    aroma: "Seco, quente e levemente mineral.", taste: "Ardência direta, limpa e versátil.",
    pairsWith: ["Sopas", "Ovos", "Ensopados"], danger: "Moderado. Em pó, dispersa-se rapidamente e exige dosagem cuidadosa.",
    curiosity: "Seu nome é associado à cidade de Caiena, na Guiana Francesa.",
    harmonization: ["Gengibre", "Chocolate", "Tomate"], uses: ["Molhos", "Carnes"], image: "images/Cayenne.webp"
  },
  {
    id: "thai-birds-eye", name: "Thai Bird’s Eye", origin: "Tailândia", countryGroup: "Ásia",
    heatLevel: "Forte", shu: "50.000 – 100.000 SHU", flavorProfile: ["Cítrica", "Vegetal"],
    aroma: "Verde, cítrico e penetrante.", taste: "Calor rápido e brilhante, com final limpo.",
    pairsWith: ["Curry", "Pad thai", "Sopas"], danger: "Alto. Pequenas quantidades alteram todo o prato.",
    curiosity: "É essencial ao equilíbrio entre doce, salgado, ácido e picante na cozinha tailandesa.",
    harmonization: ["Riesling", "Leite de coco", "Capim-limão"], uses: ["Molhos", "Frutos do mar"], image: "images/Thai Bird’s Eye.jpg"
  },
  {
    id: "habanero", name: "Habanero", origin: "México", countryGroup: "México",
    heatLevel: "Forte", shu: "100.000 – 350.000 SHU", flavorProfile: ["Frutada", "Cítrica"],
    aroma: "Maracujá, damasco e flores tropicais.", taste: "Frutada e luminosa antes de revelar calor intenso e longo.",
    pairsWith: ["Manga", "Frutos do mar", "Chocolate"], danger: "Muito alto. Use luvas e quantidades mínimas.",
    curiosity: "Apesar do nome ligado a Havana, é profundamente associada à península de Yucatán.",
    harmonization: ["Rum", "Manga", "Camarão"], uses: ["Molhos", "Drinks", "Frutos do mar"], image: "images/Habanero.jpg"
  },
  {
    id: "scotch-bonnet", name: "Scotch Bonnet", origin: "Caribe", countryGroup: "Caribe",
    heatLevel: "Forte", shu: "100.000 – 350.000 SHU", flavorProfile: ["Doce", "Frutada"],
    aroma: "Tropical, doce e perfumado.", taste: "Frutas maduras, calor intenso e final persistente.",
    pairsWith: ["Jerk chicken", "Peixes", "Frutas"], danger: "Muito alto. Pode causar irritação intensa na pele.",
    curiosity: "O formato lembra um tradicional chapéu escocês do tipo tam o’shanter.",
    harmonization: ["Rum envelhecido", "Abacaxi", "Porco"], uses: ["Molhos", "Carnes"], image: "images/Scotch Bonnet.jpg"
  },
  {
    id: "ghost-pepper", name: "Ghost Pepper / Bhut Jolokia", origin: "Assam, Índia", countryGroup: "Índia",
    heatLevel: "Extrema", shu: "800.000 – 1.041.427 SHU", flavorProfile: ["Defumada", "Frutada"],
    aroma: "Terroso, defumado e discretamente frutado.", taste: "Sabor suave no início; a ardência cresce e permanece por muitos minutos.",
    pairsWith: ["Curries", "Chutneys", "Molhos concentrados"], danger: "Extremo. Exige luvas, ventilação e dosagem profissional.",
    curiosity: "Foi a primeira pimenta a ultrapassar oficialmente um milhão de SHU.",
    harmonization: ["Iogurte", "Manga", "Arroz basmati"], uses: ["Pratos extremos", "Molhos"], image: "images/Ghost Pepper - Bhut Jolokia.jpg"
  },
  {
    id: "carolina-reaper", name: "Carolina Reaper", origin: "Carolina do Sul, EUA", countryGroup: "EUA",
    heatLevel: "Extrema", shu: "1.400.000 – 2.200.000 SHU", flavorProfile: ["Frutada", "Doce"],
    aroma: "Frutas vermelhas maduras e notas florais.", taste: "Doçura surpreendente seguida por calor avassalador e prolongado.",
    pairsWith: ["Molhos extremos", "Marinadas concentradas", "Desafios culinários"], danger: "Extremo. Não consumir inteira; proteção e supervisão são recomendadas.",
    curiosity: "Seu ferrão característico tornou-se uma assinatura visual da variedade.",
    harmonization: ["Laticínios integrais", "Frutas doces", "Cacau"], uses: ["Pratos extremos", "Molhos"], image: "images/Carolina Reaper.jpg"
  },
  {
    id: "pepper-x", name: "Pepper X", origin: "Carolina do Sul, EUA", countryGroup: "EUA",
    heatLevel: "Extrema", shu: "Média de 2.693.000 SHU", flavorProfile: ["Terrosa", "Aromática"],
    aroma: "Vegetal maduro, terroso e concentrado.", taste: "Calor massivo, profundo e de persistência excepcional.",
    pairsWith: ["Molhos profissionais", "Preparações experimentais"], danger: "Máximo. Destinada a formulações controladas, nunca ao consumo casual.",
    curiosity: "Foi reconhecida por alcançar média superior a 2,69 milhões de SHU.",
    harmonization: ["Gorduras lácteas", "Açúcares", "Amidos"], uses: ["Pratos extremos"], image: "images/Pepper X.jpg"
  }
];

const grid = document.querySelector("#pepperGrid");
const modal = document.querySelector("#pepperModal");
const modalContent = document.querySelector("#modalContent");
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const searchOverlay = document.querySelector("#searchOverlay");
const mainNav = document.querySelector(".main-nav");
const filters = {
  origin: document.querySelector("#originFilter"),
  flavor: document.querySelector("#flavorFilter"),
  use: document.querySelector("#useFilter")
};

let activeHeat = "Todas";
let searchTerm = "";
let favorites = new Set(JSON.parse(localStorage.getItem("pepperAtlasFavorites") || "[]"));

function renderPeppers() {
  const visible = peppers.filter(matchesFilters);

  grid.innerHTML = visible.map(pepperCard).join("");
  resultsCount.textContent = `${visible.length} ${visible.length === 1 ? "pimenta" : "pimentas"} no atlas`;
  emptyState.classList.toggle("show", visible.length === 0);
}

function matchesFilters(p) {
  const searchableText = [p.name, p.origin, ...p.flavorProfile].join(" ").toLowerCase();

  return (activeHeat === "Todas" || p.heatLevel === activeHeat)
    && (!filters.origin.value || p.countryGroup === filters.origin.value)
    && (!filters.flavor.value || p.flavorProfile.includes(filters.flavor.value))
    && (!filters.use.value || p.uses.includes(filters.use.value))
    && (!searchTerm || searchableText.includes(searchTerm));
}

function pepperCard(p) {
  const favoriteIcon = favorites.has(p.id) ? "♥" : "♡";
  const favoriteClass = favorites.has(p.id) ? "active" : "";

  return `
    <article class="pepper-card">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="country">${p.origin}</span>
        <button class="favorite ${favoriteClass}" data-favorite="${p.id}" aria-label="Favoritar ${p.name}">${favoriteIcon}</button>
      </div>
      <div class="card-content">
        <div class="card-heading"><h3>${p.name}</h3><span class="heat-badge">${p.heatLevel}</span></div>
        <div class="shu">${p.shu}</div>
        <p class="profile">${p.flavorProfile.join(" · ")} — ${p.taste}</p>
        <button class="details-button" data-details="${p.id}">Ver detalhes <span>→</span></button>
      </div>
    </article>`;
}

function openDetails(id) {
  const p = peppers.find(item => item.id === id);
  if (!p) return;

  modalContent.innerHTML = `
    <div class="modal-layout">
      <div class="modal-image"><img src="${p.image}" alt="${p.name}"></div>
      <div class="modal-copy">
        <p class="kicker">${p.origin} · ${p.heatLevel}</p>
        <h2>${p.name}</h2>
        <div class="modal-tags"><span>${p.shu}</span>${p.flavorProfile.map(item => `<span>${item}</span>`).join("")}</div>
        <div class="detail-grid">
          <div><h4>Perfil de sabor</h4><p>${p.taste}</p></div>
          <div><h4>Aroma</h4><p>${p.aroma}</p></div>
          <div><h4>Combina com</h4><p>${p.pairsWith.join(", ")}.</p></div>
          <div><h4>Harmonização</h4><p>${p.harmonization.join(", ")}.</p></div>
          <div><h4>Usos gastronômicos</h4><p>${p.uses.join(", ")}.</p></div>
          <div><h4>Curiosidade</h4><p>${p.curiosity}</p></div>
        </div>
        <p class="danger"><strong>Nível de cuidado:</strong> ${p.danger}</p>
      </div>
    </div>`;

  modal.showModal();
  document.body.classList.add("locked");
}

function renderBrazil() {
  const highlights = ["biquinho", "malagueta", "cumari-do-para", "murupi"];
  document.querySelector("#brazilGrid").innerHTML = highlights.map(id => {
    const p = peppers.find(item => item.id === id);

    return `
      <article class="brazil-card" data-details="${p.id}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div><span>${p.shu}</span><h3>${p.name}</h3><p>${p.aroma}</p></div>
      </article>`;
  }).join("");
}

function clearFilters() {
  activeHeat = "Todas";
  searchTerm = "";
  searchInput.value = "";
  Object.values(filters).forEach(filter => filter.value = "");
  document.querySelectorAll("[data-filter-heat]").forEach(button => {
    button.classList.toggle("active", button.dataset.filterHeat === "Todas");
  });
  renderPeppers();
}

function toggleFavorite(id) {
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  localStorage.setItem("pepperAtlasFavorites", JSON.stringify([...favorites]));
  renderPeppers();
  showToast("Favoritos atualizados");
}

function setHeatFilter(heat) {
  activeHeat = heat;
  document.querySelectorAll("[data-filter-heat]").forEach(button => {
    button.classList.toggle("active", button.dataset.filterHeat === activeHeat);
  });
  renderPeppers();
}

document.addEventListener("click", event => {
  const details = event.target.closest("[data-details]");
  const favorite = event.target.closest("[data-favorite]");
  const heatFilter = event.target.closest("[data-filter-heat]");
  const scaleFilter = event.target.closest("[data-heat]");

  if (details) openDetails(details.dataset.details);
  if (favorite) toggleFavorite(favorite.dataset.favorite);
  if (heatFilter) setHeatFilter(heatFilter.dataset.filterHeat);
  if (scaleFilter) {
    setHeatFilter(scaleFilter.dataset.heat);
    document.querySelector("#pimentas").scrollIntoView();
  }
});

Object.values(filters).forEach(filter => filter.addEventListener("change", renderPeppers));
document.querySelector("#clearFilters").addEventListener("click", clearFilters);
document.querySelector("#journeyButton").addEventListener("click", () => document.querySelector("#scoville").scrollIntoView());
document.querySelector("#modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("close", () => document.body.classList.remove("locked"));
modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });

document.querySelector("#menuButton").addEventListener("click", event => {
  mainNav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", mainNav.classList.contains("open"));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

document.querySelector("#searchButton").addEventListener("click", () => {
  searchOverlay.classList.add("open");
  document.body.classList.add("locked");
  setTimeout(() => searchInput.focus(), 250);
});

document.querySelector("#searchClose").addEventListener("click", closeSearch);
searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderPeppers();
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    closeSearch();
    document.querySelector("#pimentas").scrollIntoView();
  }
  if (event.key === "Escape") closeSearch();
});

function closeSearch() {
  searchOverlay.classList.remove("open");
  document.body.classList.remove("locked");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
renderBrazil();
renderPeppers();
