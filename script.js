(function(){
"use strict";

const CURRENCY_DB = {
  USD:{name:"Dólar Americano", c:"US"}, EUR:{name:"Euro", c:"EU"}, GBP:{name:"Libra Esterlina", c:"GB"},
  JPY:{name:"Iene Japonês", c:"JP"}, CNY:{name:"Yuan Chinês", c:"CN"}, CHF:{name:"Franco Suíço", c:"CH"},
  CAD:{name:"Dólar Canadense", c:"CA"}, AUD:{name:"Dólar Australiano", c:"AU"}, NZD:{name:"Dólar Neozelandês", c:"NZ"},
  BRL:{name:"Real Brasileiro", c:"BR"}, ARS:{name:"Peso Argentino", c:"AR"}, MXN:{name:"Peso Mexicano", c:"MX"},
  INR:{name:"Rupia Indiana", c:"IN"}, KRW:{name:"Won Sul-Coreano", c:"KR"}, RUB:{name:"Rublo Russo", c:"RU"},
  ZAR:{name:"Rand Sul-Africano", c:"ZA"}, SEK:{name:"Coroa Sueca", c:"SE"}, NOK:{name:"Coroa Norueguesa", c:"NO"},
  DKK:{name:"Coroa Dinamarquesa", c:"DK"}, PLN:{name:"Zloty Polonês", c:"PL"}, TRY:{name:"Lira Turca", c:"TR"},
  THB:{name:"Baht Tailandês", c:"TH"}, SGD:{name:"Dólar de Singapura", c:"SG"}, HKD:{name:"Dólar de Hong Kong", c:"HK"},
  IDR:{name:"Rupia Indonésia", c:"ID"}, MYR:{name:"Ringgit Malaio", c:"MY"}, PHP:{name:"Peso Filipino", c:"PH"},
  VND:{name:"Dong Vietnamita", c:"VN"}, ILS:{name:"Novo Shekel Israelense", c:"IL"}, AED:{name:"Dirham dos Emirados Árabes", c:"AE"},
  SAR:{name:"Riyal Saudita", c:"SA"}, QAR:{name:"Riyal Catariano", c:"QA"}, KWD:{name:"Dinar Kuwaitiano", c:"KW"},
  BHD:{name:"Dinar Bahreinita", c:"BH"}, OMR:{name:"Rial Omanense", c:"OM"}, JOD:{name:"Dinar Jordaniano", c:"JO"},
  EGP:{name:"Libra Egípcia", c:"EG"}, NGN:{name:"Naira Nigeriana", c:"NG"}, KES:{name:"Shilling Queniano", c:"KE"},
  GHS:{name:"Cedi Ganês", c:"GH"}, MAD:{name:"Dirham Marroquino", c:"MA"}, TND:{name:"Dinar Tunisiano", c:"TN"},
  DZD:{name:"Dinar Argelino", c:"DZ"}, PKR:{name:"Rupia Paquistanesa", c:"PK"}, BDT:{name:"Taka de Bangladesh", c:"BD"},
  LKR:{name:"Rupia do Sri Lanka", c:"LK"}, NPR:{name:"Rupia Nepalesa", c:"NP"}, MMK:{name:"Kyat de Myanmar", c:"MM"},
  KHR:{name:"Riel Cambojano", c:"KH"}, LAK:{name:"Kip Laosiano", c:"LA"}, BND:{name:"Dólar do Brunei", c:"BN"},
  MOP:{name:"Pataca de Macau", c:"MO"}, TWD:{name:"Novo Dólar Taiwanês", c:"TW"}, MNT:{name:"Tugrik Mongol", c:"MN"},
  KZT:{name:"Tenge Cazaque", c:"KZ"}, UZS:{name:"Som Usbeque", c:"UZ"}, AZN:{name:"Manat Azeri", c:"AZ"},
  GEL:{name:"Lari Georgiano", c:"GE"}, AMD:{name:"Dram Armênio", c:"AM"}, BYN:{name:"Rublo Bielorrusso", c:"BY"},
  UAH:{name:"Hryvnia Ucraniana", c:"UA"}, RON:{name:"Leu Romeno", c:"RO"}, BGN:{name:"Lev Búlgaro", c:"BG"},
  CZK:{name:"Coroa Tcheca", c:"CZ"}, HUF:{name:"Forint Húngaro", c:"HU"}, ISK:{name:"Coroa Islandesa", c:"IS"},
  RSD:{name:"Dinar Sérvio", c:"RS"}, ALL:{name:"Lek Albanês", c:"AL"}, MKD:{name:"Dinar Macedônio", c:"MK"},
  BAM:{name:"Marco Bósnio", c:"BA"}, MDL:{name:"Leu Moldávio", c:"MD"}, CLP:{name:"Peso Chileno", c:"CL"},
  COP:{name:"Peso Colombiano", c:"CO"}, PEN:{name:"Sol Peruano", c:"PE"}, UYU:{name:"Peso Uruguaio", c:"UY"},
  PYG:{name:"Guarani Paraguaio", c:"PY"}, BOB:{name:"Boliviano", c:"BO"}, VES:{name:"Bolívar Venezuelano", c:"VE"},
  GTQ:{name:"Quetzal Guatemalteco", c:"GT"}, HNL:{name:"Lempira Hondurenha", c:"HN"}, NIO:{name:"Córdoba Nicaraguense", c:"NI"},
  CRC:{name:"Colón Costarriquenho", c:"CR"}, PAB:{name:"Balboa Panamenho", c:"PA"}, DOP:{name:"Peso Dominicano", c:"DO"},
  JMD:{name:"Dólar Jamaicano", c:"JM"}, TTD:{name:"Dólar de Trinidad e Tobago", c:"TT"}, BBD:{name:"Dólar de Barbados", c:"BB"},
  BSD:{name:"Dólar das Bahamas", c:"BS"}, BZD:{name:"Dólar de Belize", c:"BZ"}, XCD:{name:"Dólar do Caribe Oriental", c:"AG"},
  AWG:{name:"Florim Arubano", c:"AW"}, ANG:{name:"Florim das Antilhas Holandesas", c:"CW"}, SRD:{name:"Dólar Surinamês", c:"SR"},
  GYD:{name:"Dólar Guianense", c:"GY"}, FJD:{name:"Dólar Fijiano", c:"FJ"}, PGK:{name:"Kina da Papua-Nova Guiné", c:"PG"},
  WST:{name:"Tala Samoano", c:"WS"}, TOP:{name:"Pa'anga Tonganesa", c:"TO"}, VUV:{name:"Vatu de Vanuatu", c:"VU"},
  SBD:{name:"Dólar das Ilhas Salomão", c:"SB"}, XPF:{name:"Franco CFP", c:"PF"}, XOF:{name:"Franco CFA (África Ocidental)", c:"SN"},
  XAF:{name:"Franco CFA (África Central)", c:"CM"}, CDF:{name:"Franco Congolês", c:"CD"}, RWF:{name:"Franco Ruandês", c:"RW"},
  ETB:{name:"Birr Etíope", c:"ET"}, TZS:{name:"Shilling Tanzaniano", c:"TZ"}, UGX:{name:"Shilling Ugandense", c:"UG"},
  ZMW:{name:"Kwacha Zambiano", c:"ZM"}, MWK:{name:"Kwacha Malauiano", c:"MW"}, MZN:{name:"Metical Moçambicano", c:"MZ"},
  AOA:{name:"Kwanza Angolano", c:"AO"}, NAD:{name:"Dólar Namibiano", c:"NA"}, BWP:{name:"Pula Botsuanesa", c:"BW"},
  SZL:{name:"Lilangeni Suazilandês", c:"SZ"}, LSL:{name:"Loti Lesotense", c:"LS"}, MUR:{name:"Rupia Mauriciana", c:"MU"},
  SCR:{name:"Rupia Seichelense", c:"SC"}, MGA:{name:"Ariary Malgaxe", c:"MG"}, SLL:{name:"Leone Serra-Leonês", c:"SL"},
  LRD:{name:"Dólar Liberiano", c:"LR"}, GMD:{name:"Dalasi Gambiano", c:"GM"}, GNF:{name:"Franco Guineense", c:"GN"},
  CVE:{name:"Escudo Cabo-Verdiano", c:"CV"}, STN:{name:"Dobra de São Tomé e Príncipe", c:"ST"}, SOS:{name:"Shilling Somali", c:"SO"},
  SDG:{name:"Libra Sudanesa", c:"SD"}, SSP:{name:"Libra Sul-Sudanesa", c:"SS"}, LYD:{name:"Dinar Líbio", c:"LY"},
  IQD:{name:"Dinar Iraquiano", c:"IQ"}, IRR:{name:"Rial Iraniano", c:"IR"}, AFN:{name:"Afegane", c:"AF"},
  LBP:{name:"Libra Libanesa", c:"LB"}, SYP:{name:"Libra Síria", c:"SY"}, YER:{name:"Rial Iemenita", c:"YE"},
  BTN:{name:"Ngultrum Butanês", c:"BT"}, MVR:{name:"Rufiyaa Maldivo", c:"MV"}, KGS:{name:"Som Quirguiz", c:"KG"},
  TJS:{name:"Somoni Tajique", c:"TJ"}, TMT:{name:"Manat Turcomeno", c:"TM"}, CUP:{name:"Peso Cubano", c:"CU"},
  HTG:{name:"Gourde Haitiano", c:"HT"}, KYD:{name:"Dólar das Ilhas Cayman", c:"KY"}, BMD:{name:"Dólar das Bermudas", c:"BM"},
  FKP:{name:"Libra das Malvinas", c:"FK"}, GIP:{name:"Libra de Gibraltar", c:"GI"}, SHP:{name:"Libra de Santa Helena", c:"SH"},
  ERN:{name:"Nakfa Eritreu", c:"ER"}, DJF:{name:"Franco Djibutiano", c:"DJ"}, KMF:{name:"Franco Comorense", c:"KM"},
  MRU:{name:"Ouguiya Mauritana", c:"MR"}, TVD:{name:"Dólar de Tuvalu", c:"TV"}
};
const ZERO_DECIMAL = new Set(["BIF","CLP","DJF","GNF","ISK","JPY","KMF","KRW","PYG","RWF","UGX","VND","VUV","XAF","XOF","XPF","MMK"]);
const CACHE_TTL = 5 * 60 * 1000;
const HISTORY_LIMIT = 15;
const TICKER_PAIRS = ["BRL","EUR","GBP","JPY","ARS","CNY","CHF"];

let fromCode = "USD";
let toCode = "BRL";
const ratesCache = new Map();
let history = [];
let toastTimer = null;

const $ = (id) => document.getElementById(id);
const amountInput   = $("amountInput");
const resultDisplay = $("resultDisplay");
const rateInfoEl    = $("rateInfo");
const updatedInfoEl = $("updatedInfo");
const errorBanner   = $("errorBanner");
const loadingBar    = $("loadingBar");
const convertBtn    = $("convertBtn");
const copyBtn       = $("copyBtn");
const swapBtn       = $("swapBtn");
const historyList   = $("historyList");
const clearHistoryBtn = $("clearHistoryBtn");
const themeToggle   = $("themeToggle");
const toastEl       = $("toast");
const toastMsgEl    = $("toastMsg");
const tickerTrack   = $("tickerTrack");

function flag(countryCode){
  if(!countryCode) return "🌐";
  const points = countryCode.toUpperCase().split("").map(ch => 127397 + ch.charCodeAt(0));
  try{ return String.fromCodePoint(...points); }catch(e){ return "🌐"; }
}

function currencyInfo(code){
  return CURRENCY_DB[code] || {name: code, c: ""};
}

function formatCurrencyValue(value, code){
  const digits = ZERO_DECIMAL.has(code) ? 0 : 2;
  try{
    return new Intl.NumberFormat("pt-BR", {
      style:"currency", currency: code,
      minimumFractionDigits: digits, maximumFractionDigits: digits
    }).format(value);
  }catch(e){
    return value.toLocaleString("pt-BR", {minimumFractionDigits:digits, maximumFractionDigits:digits}) + " " + code;
  }
}

function formatRateValue(rate){
  return new Intl.NumberFormat("pt-BR", {minimumFractionDigits:2, maximumFractionDigits:6}).format(rate);
}

function formatDateTime(value){
  const d = new Date(value);
  if(isNaN(d.getTime())) return "—";
  return d.toLocaleString("pt-BR", {dateStyle:"short", timeStyle:"medium"});
}

function debounce(fn, ms){
  let t = null;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function showToast(msg){
  toastMsgEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
}

function showError(msg){
  errorBanner.textContent = "⚠ " + msg;
  errorBanner.classList.remove("hidden");
}
function hideError(){ errorBanner.classList.add("hidden"); }

function setLoading(isLoading){
  loadingBar.classList.toggle("active", isLoading);
  convertBtn.disabled = isLoading;
}

function withTimeout(promise, ms){
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("Tempo de resposta excedido")), ms))
  ]);
}

async function fetchRatesNetwork(base){
  try{
    const res = await withTimeout(fetch(`https://open.er-api.com/v6/latest/${base}`), 8000);
    if(!res.ok) throw new Error("status " + res.status);
    const json = await res.json();
    if(json.result !== "success" || !json.rates) throw new Error("resposta inválida");
    return {base, rates: json.rates, time: json.time_last_update_utc};
  }catch(primaryErr){
    try{
      const res2 = await withTimeout(fetch(`https://api.frankfurter.app/latest?from=${base}`), 8000);
      if(!res2.ok) throw new Error("status " + res2.status);
      const json2 = await res2.json();
      if(!json2.rates) throw new Error("resposta inválida");
      json2.rates[base] = 1;
      return {base, rates: json2.rates, time: json2.date};
    }catch(fallbackErr){
      throw new Error("As fontes de cotação estão indisponíveis no momento.");
    }
  }
}

function saveCachedRates(base, entry){
  try{ localStorage.setItem("fxc_rates_" + base, JSON.stringify(entry)); }catch(e){}
}
function loadCachedRates(base){
  try{
    const raw = localStorage.getItem("fxc_rates_" + base);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

async function getRatesFor(base){
  const cached = ratesCache.get(base);
  const now = Date.now();
  if(cached && (now - cached.fetchedAt) < CACHE_TTL) return cached;
  const fresh = await fetchRatesNetwork(base);
  const entry = Object.assign({}, fresh, {fetchedAt: now});
  ratesCache.set(base, entry);
  saveCachedRates(base, entry);
  return entry;
}

async function performConversion(opts){
  opts = opts || {};
  const raw = amountInput.value;
  const amount = parseFloat(String(raw).replace(",", "."));

  if(!raw || isNaN(amount) || amount <= 0){
    resultDisplay.textContent = formatCurrencyValue(0, toCode);
    rateInfoEl.textContent = "Informe um valor para converter.";
    updatedInfoEl.textContent = "";
    return;
  }

  setLoading(true);
  try{
    const data = await getRatesFor(fromCode);
    const rate = fromCode === toCode ? 1 : data.rates[toCode];
    if(rate == null) throw new Error(`A moeda ${toCode} não está disponível na fonte de dados.`);

    const result = amount * rate;
    resultDisplay.textContent = formatCurrencyValue(result, toCode);
    resultDisplay.classList.remove("flash");
    requestAnimationFrame(() => resultDisplay.classList.add("flash"));

    rateInfoEl.innerHTML = `1 ${fromCode} = <strong>${formatRateValue(rate)}</strong> ${toCode}`;
    updatedInfoEl.textContent = "Cotação atualizada em " + formatDateTime(data.time);
    hideError();

    if(opts.addToHistory){
      pushHistory({from: fromCode, to: toCode, amount, result, rate, at: Date.now()});
      showToast("Conversão adicionada ao histórico");
    }
  }catch(err){
    showError(err.message || "Não foi possível obter as cotações agora.");
    const cached = loadCachedRates(fromCode);
    if(cached){
      const rate = fromCode === toCode ? 1 : cached.rates[toCode];
      if(rate != null){
        const result = amount * rate;
        resultDisplay.textContent = formatCurrencyValue(result, toCode);
        rateInfoEl.innerHTML = `1 ${fromCode} = <strong>${formatRateValue(rate)}</strong> ${toCode} <span style="color:var(--text-muted)">(cache)</span>`;
        updatedInfoEl.textContent = "Última cotação salva em " + formatDateTime(cached.time);
      }
    }else{
      resultDisplay.textContent = "—";
      rateInfoEl.textContent = "Cotação indisponível.";
      updatedInfoEl.textContent = "";
    }
  }finally{
    setLoading(false);
  }
}

const debouncedConvert = debounce(() => performConversion({addToHistory:false}), 350);

function updateCurrencyButton(side, code){
  const info = currencyInfo(code);
  $(side + "Flag").textContent = flag(info.c);
  $(side + "Code").textContent = code;
}

function renderDropdownList(side, filterText){
  const f = (filterText || "").trim().toLowerCase();
  const listEl = $(side + "List");
  const entries = Object.entries(CURRENCY_DB)
    .filter(([code, info]) => !f || code.toLowerCase().includes(f) || info.name.toLowerCase().includes(f))
    .sort((a, b) => a[0].localeCompare(b[0]));

  if(!entries.length){
    listEl.innerHTML = '<p class="empty-state">Nenhuma moeda encontrada.</p>';
    return;
  }
  listEl.innerHTML = entries.map(([code, info]) => `
    <button type="button" class="dropdown-item" data-code="${code}" role="option">
      <span class="flag">${flag(info.c)}</span>
      <span class="dcode">${code}</span>
      <span class="dname">${info.name}</span>
    </button>`).join("");
}

function closeAllDropdowns(except){
  document.querySelectorAll(".dropdown-panel").forEach(p => { if(p !== except) p.classList.add("hidden"); });
  document.querySelectorAll(".currency-select").forEach(b => b.setAttribute("aria-expanded","false"));
}

function selectCurrency(side, code){
  if(side === "from") fromCode = code; else toCode = code;
  updateCurrencyButton(side, code);
  performConversion({addToHistory:false});
  loadTicker();
}

function setupDropdown(side){
  const btn = $(side + "Btn");
  const panel = $(side + "Panel");
  const search = $(side + "Search");
  const list = $(side + "List");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const willOpen = panel.classList.contains("hidden");
    closeAllDropdowns(willOpen ? panel : null);
    panel.classList.toggle("hidden", !willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
    if(willOpen){
      renderDropdownList(side, "");
      search.value = "";
      setTimeout(() => search.focus(), 30);
    }
  });

  panel.addEventListener("click", (e) => e.stopPropagation());

  search.addEventListener("input", () => renderDropdownList(side, search.value));

  list.addEventListener("click", (e) => {
    const item = e.target.closest(".dropdown-item");
    if(!item) return;
    selectCurrency(side, item.dataset.code);
    panel.classList.add("hidden");
    btn.setAttribute("aria-expanded","false");
  });
}

document.addEventListener("click", () => closeAllDropdowns(null));
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeAllDropdowns(null); });

swapBtn.addEventListener("click", () => {
  [fromCode, toCode] = [toCode, fromCode];
  updateCurrencyButton("from", fromCode);
  updateCurrencyButton("to", toCode);
  swapBtn.classList.add("spin");
  setTimeout(() => swapBtn.classList.remove("spin"), 380);
  performConversion({addToHistory:false});
});

function pushHistory(entry){
  history.unshift(entry);
  if(history.length > HISTORY_LIMIT) history.length = HISTORY_LIMIT;
  saveHistory();
  renderHistory();
}

function saveHistory(){
  try{ localStorage.setItem("fxconverter_history", JSON.stringify(history)); }catch(e){}
}

function loadHistory(){
  try{
    history = JSON.parse(localStorage.getItem("fxconverter_history") || "[]");
  }catch(e){ history = []; }
}

function renderHistory(){
  if(!history.length){
    historyList.innerHTML = '<p class="empty-state">Suas conversões aparecerão aqui.</p>';
    return;
  }
  historyList.innerHTML = history.map((h, i) => `
    <div class="history-item">
      <div class="hi-main">
        <span class="hi-amount">${formatCurrencyValue(h.amount, h.from)}</span>
        <span class="hi-arrow">→</span>
        <span class="hi-result">${formatCurrencyValue(h.result, h.to)}</span>
      </div>
      <div class="hi-meta">
        <span>${formatDateTime(h.at)}</span>
        <button class="hi-del" data-idx="${i}" aria-label="Remover esta conversão">✕</button>
      </div>
    </div>`).join("");
}

historyList.addEventListener("click", (e) => {
  const del = e.target.closest(".hi-del");
  if(!del) return;
  history.splice(Number(del.dataset.idx), 1);
  saveHistory();
  renderHistory();
});

clearHistoryBtn.addEventListener("click", () => {
  history = [];
  saveHistory();
  renderHistory();
  showToast("Histórico limpo");
});

copyBtn.addEventListener("click", async () => {
  const text = resultDisplay.textContent.trim();
  if(!text || text === "—") return;
  try{
    await navigator.clipboard.writeText(text);
    showToast("Resultado copiado!");
  }catch(e){
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); showToast("Resultado copiado!"); }catch(_){ showToast("Não foi possível copiar."); }
    ta.remove();
  }
});

async function loadTicker(){
  try{
    const data = await getRatesFor("USD");
    let prev = {};
    try{ prev = JSON.parse(localStorage.getItem("fxconverter_ticker_prev") || "{}"); }catch(e){}

    const items = TICKER_PAIRS.map(code => {
      const rate = data.rates[code];
      const prevRate = prev[code];
      let arrowClass = "t-flat", arrow = "•";
      if(rate != null && prevRate != null && prevRate !== 0){
        const delta = rate - prevRate;
        if(Math.abs(delta / prevRate) > 0.0001){
          arrowClass = delta > 0 ? "t-up" : "t-down";
          arrow = delta > 0 ? "▲" : "▼";
        }
      }
      return {code, rate, arrow, arrowClass};
    }).filter(it => it.rate != null);

    if(!items.length) return;

    const htmlItems = items.map(it => `
      <span class="ticker-item">
        ${flag(currencyInfo(it.code).c)} 1 USD = <b>${formatRateValue(it.rate)}</b>
        <span class="tcode">${it.code}</span>
        <span class="${it.arrowClass}">${it.arrow}</span>
      </span>`).join("");
    tickerTrack.innerHTML = htmlItems + htmlItems;

    const toSave = {};
    items.forEach(it => toSave[it.code] = it.rate);
    localStorage.setItem("fxconverter_ticker_prev", JSON.stringify(toSave));
  }catch(e){
    tickerTrack.innerHTML = '<span class="ticker-item">Não foi possível carregar as cotações em destaque agora.</span>';
  }
}

function initTheme(){
  const saved = localStorage.getItem("fxconverter_theme") || "dark";
  if(saved === "light") document.documentElement.classList.add("light");
  themeToggle.textContent = saved === "light" ? "☀️" : "🌙";
}
themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.classList.toggle("light");
  localStorage.setItem("fxconverter_theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});

amountInput.addEventListener("input", debouncedConvert);
convertBtn.addEventListener("click", () => performConversion({addToHistory:true}));

function init(){
  initTheme();
  setupDropdown("from");
  setupDropdown("to");
  updateCurrencyButton("from", fromCode);
  updateCurrencyButton("to", toCode);
  loadHistory();
  renderHistory();
  performConversion({addToHistory:false});
  loadTicker();

  setInterval(() => {
    ratesCache.clear();
    performConversion({addToHistory:false});
    loadTicker();
  }, CACHE_TTL);
}

document.addEventListener("DOMContentLoaded", init);
})();
