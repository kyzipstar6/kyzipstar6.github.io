
let pop = 2_500_000;
let maleRatio = 0.5;      
let males = pop * maleRatio;
let females = pop - males;
let sum = pop;

let year = 4.65e9;
let started = false;

let autoIntervalId = null; 

const canvas = document.getElementById('popChart');
if (!canvas) {
  console.warn('popChart canvas not found');
}
const popCtx = canvas ? canvas.getContext('2d') : null;

const popChart = popCtx ? new Chart(popCtx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      { label: 'Total Population', data: [], borderColor: 'rgba(17,24,39,1)', tension: 0.25 },
      { label: 'Males',            data: [], borderColor: 'rgba(59,130,246,1)', tension: 0.25 },
      { label: 'Females',          data: [], borderColor: 'rgba(244,63,94,1)',  tension: 0.25 }
    ]
  },
  options: {
    animation: false,
    parsing: false,
    normalized: true,
    scales: {
      x: { title: { display: true, text: 'Time in Earth age (years)' } },
      y: { title: { display: true, text: 'Population (individuals)' }, beginAtZero: false}
    },
    plugins: { legend: { position: 'bottom' } }
  }
}) : null;


const pill = id => document.getElementById(id);
const pillTotal   = pill('pillTotal');
const pillMales   = pill('pillMales');
const pillFemales = pill('pillFemales');
const pillYear    = pill('pillYear');
const pillMode    = pill('pillMode');

const yearInput = document.getElementById('yearInput');
const popInput  = document.getElementById('popInput');

function fmt(n){ return Number(n).toLocaleString(); }
function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function updatePills(modeText){
  if (pillTotal)   pillTotal.textContent   = fmt(pop);
  if (pillMales)   pillMales.textContent   = fmt(males);
  if (pillFemales) pillFemales.textContent = fmt(females);
  if (pillYear)    pillYear.textContent    = fmt(year);
  if (pillMode && modeText) pillMode.textContent = modeText;
function initPopLoop(population){
  if (popChart){
    popChart.data.labels.length = 0;                 // clear safely
    popChart.data.datasets[0].data.length = 0;
    popChart.data.datasets[1].data.length = 0;
    popChart.data.datasets[2].data.length = 0;
    popChart.update('none');
  }
  pop = population;
  males = pop * maleRatio;
  females = pop - males;
  sum = pop;
  updatePills();
}

function resetChart(){
  initPopLoop(pop);  // keep same pop, just clear the series
}

// ---------- Species scenarios (your watcher retained) ----------
function startScenario({ popStart, yearDelta }){
  initPopLoop(popStart);
  year += yearDelta;
  started = true;

  // honor current auto-update state (don’t stack intervals)
  if (autoIntervalId){
    clearInterval(autoIntervalId);
    autoIntervalId = setInterval(updateData, 5000);
  }
  updatePills();
}

const SPECIES = {
  'Rafatazmia chitrakootensis': { popStart: 2.78e9,  yearDelta: -560e6 },
  'Cyclomedusa':                { popStart: 2.78e5,  yearDelta: -115e6 },
  'Kymbrella':                  { popStart: 2.78e8,  yearDelta: -552e6 },
  'Haplophrentis':              { popStart: 2.78e5,  yearDelta: -515e6 },
  'Aegirocassis':               { popStart: 2.78e5,  yearDelta: -115e6 },
  'Onychophora':                { popStart: 2.345e9, yearDelta: -450e6 },
  'Herrerasaurus':              { popStart: 2.78e5,  yearDelta: -115e6 },
  'Abrictosaurus':              { popStart: 2e6,     yearDelta: -250e6 },
  'Caseosaurus':                { popStart: 2.78e5,  yearDelta: -115e6 },
  'Staurikosaurus':             { popStart: 2.78e5,  yearDelta: -115e6 },
  'Chindesaurus':               { popStart: 2.78e5,  yearDelta: -115e6 },
  'Tawa hallae':                { popStart: 2.78e5,  yearDelta: -115e6 },
  'Tyrannosaurus rex':          { popStart: 7.8e8,   yearDelta: -75e6  },
  'Triceratops':                { popStart: 2.78e5,  yearDelta: -85e6  },
};

let lastTitle = '';
function watchForTitle(){
  setInterval(() => {
    const titleEl = document.getElementById('title');
    if (!titleEl) return;
    const text = titleEl.innerText.trim();
    if (!text || text === lastTitle) return;

    const match = Object.keys(SPECIES).find(k => text.includes(k));
    if (match) startScenario(SPECIES[match]);

    lastTitle = text;
  }, 1000);
}


let status = 10;

function mkgr(){ status = 1;  updatePills('grow'); }
function mkst(){ status = 0;  updatePills('steady'); }
// you wrote "mide" in HTML spec; keep your original mkde and alias mide to it.
function mkde(){ status = -1; updatePills('decline'); }
function mide(){ mkde(); } // alias

// ---------- Auto-update toggle (5s like your original) ----------
function toggleAutoUpdate(btn){
  if (autoIntervalId){
    clearInterval(autoIntervalId);
    autoIntervalId = null;
    if (btn) btn.textContent = 'Auto-update: OFF';
  } else {
    autoIntervalId = setInterval(updateData, 5000);
    if (btn) btn.textContent = 'Auto-update: ON';
  }
}

// ---------- Manual Apply ----------
function applyYearPop(){
  const y = Number(yearInput?.value);
  const p = Number(popInput?.value);
  if (!Number.isNaN(y)) year = Math.floor(y);
  if (!Number.isNaN(p)) pop  = Math.max(1, Math.floor(p));
  // recompute split using current maleRatio
  males = pop * maleRatio;
  females = pop - males;
  updatePills();

  
  
    popChart.data.labels.push(`${year}`);
    popChart.data.datasets[0].data.push(pop);
    popChart.data.datasets[1].data.push(males);
    popChart.data.datasets[2].data.push(females);
    popChart.update();
  
}


function updateData(){
  let gm = 1 + ((-0.4 + Math.random())/3);
    let sm = 1 + ((-0.5 + Math.random())/3);
    let stm = 1 + ((-0.5 + Math.random())/10);
    let dm = 1 + ((-0.6 + Math.random())/3);
    if(status == 0)pop*=stm;
    if(status == -1)pop*=dm;
    if(status == 10)pop*=sm
    if(status == 1)pop*=gm;
  // jitter around 0.5 but keep males+females = pop
  const r = clamp(0.5 + (-0.5 + Math.random())/25, 0.05, 0.95);
  maleRatio = r;
  males = pop * r;
  females = pop - males;
  sum = pop;

  year += 1;

  if (popChart){
    popChart.data.labels.push(`${year}`);
    popChart.data.datasets[0].data.push(pop);     // numbers, not strings
    popChart.data.datasets[1].data.push(males);
    popChart.data.datasets[2].data.push(females);
    popChart.update('none');
  }
  updatePills();
}
// === Chart theming hook ===
function applyChartTheme(isDark){
  if (!window.popChart) return;            

  const axisColor = isDark ? 'rgba(229,231,235,0.9)' : 'rgba(31,41,55,0.9)'; // labels
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  // axes
  popChart.options.scales.x.ticks.color = axisColor;
  popChart.options.scales.y.ticks.color = axisColor;
  popChart.options.scales.x.grid.color = gridColor;
  popChart.options.scales.y.grid.color = gridColor;

  // legend
  if (!popChart.options.plugins) popChart.options.plugins = {};
  if (!popChart.options.plugins.legend) popChart.options.plugins.legend = {};
  if (!popChart.options.plugins.legend.labels) popChart.options.plugins.legend.labels = {};
  popChart.options.plugins.legend.labels.color = axisColor;

  popChart.update('none');
}

// apply current theme once on load (matches HTML script)

// expose for the HTML toggle script
window.applyChartTheme = applyChartTheme;

window.mkgr = mkgr;
window.mkst = mkst;
window.mkde = mkde;
window.mide = mide;
window.toggleAutoUpdate = toggleAutoUpdate;
window.applyYearPop = applyYearPop;
window.updateData = updateData;
window.resetChart = resetChart;


updatePills('steady');

watchForTitle();

applyChartTheme(document.documentElement.getAttribute('data-theme') === 'dark');
