let pop = 2_500_000; let forestcv = 65; let pred = 2_375_234;
let pray= 2_234_543;
let maleRatio = 0.5;      
let males = pop * maleRatio;
let females = pop - males;
let sum = pop;
let chid = 0;
let year = 4.65e9;
let started = false;

let autoIntervalId = null; 

const canvas = document.getElementById('popChart');
if (!canvas) {
  console.warn('popChart canvas not found');
}
function initPopLoop(population){
 
    popChart.data.labels.length = 0;                
    popChart.data.datasets[0];
  popChart.data.datasets[1];
  popChart.data.datasets[2];
  popChart.data.datasets[3];
  popChart.data.datasets[4];
    popChart.update('none');
  
  pop = population;
  males = pop * maleRatio;
  females = pop - males;
  sum = pop;

  
  updatePills();
}
const popCtx = canvas ? canvas.getContext('2d') : null;

const popChart = new Chart(popCtx, {
  type: 'line',
  data: {
    labels: [],                
    datasets: [{
      label: 'Population',
      data: [],
      borderColor: 'rgba(191, 198, 114, 81)',
      tension: 0.3
    },{
      
      label: 'Males',
      data: [],
      borderColor: 'rgba(201, 18, 114, 1)',
      tension: 0.3
    },{
    
      label: 'Females',
      data: [],
      borderColor: 'rgba(21, 198, 14, 1)',
      tension: 0.3
    },{
     
      label: 'Predators',
      data: [],
      borderColor: 'rgba(131, 98, 114, 120)',
      tension: 0.3
    },{
     
      label: 'Preys',
      data: [],
      borderColor: 'rgba(81, 98, 114, 131)',
      tension: 0.3
    } ]
  },
  options: {
    
    scales: {
      x: { title: { display: true, text: 'Time' }},
      y: { title: { display: true, text: 'population' }}
    }
  }
});


const pill = id => document.getElementById(id);
const pillTotal   = pill('pillTotal');
const pillMales   = pill('pillMales');
const pillFemales = pill('pillFemales');
const pillYear    = pill('pillYear');
const pillMode    = pill('pillMode');
const pillPred = pill('predval');
const pillPrey = pill('preyval');
const pillForest = pill('forestval');
const pillPop = pill('popval');

const yearInput = document.getElementById('yearInput');
const popInput  = document.getElementById('popInput');

function fmt(n){ return Number(n).toLocaleString(); }
function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function updatePills(modeText){
  if (pillTotal)   pillTotal.textContent   = `${pop.toFixed(0)}`;
  if (pillMales)   pillMales.textContent   =  `${males.toFixed(0)}`;
  if (pillFemales) pillFemales.textContent =  `${females.toFixed(0)}`;
  if (pillYear)    pillYear.textContent    = fmt(year);
    if (pillPred)   pillPred.textContent   = `${pred.toFixed(0)}`;
    if (pillPrey)   pillPrey.textContent   = `${pray.toFixed(0)}`;
    if (pillForest)   pillForest.textContent   = `${forestcv.toFixed(1)}`;
  if (pillPop)   pillPop.textContent   = `${pop.toFixed(0)}`;
  if (pillMode && modeText) pillMode.textContent = modeText;
}


function resetChart(){
  initPopLoop(pop); 
}


function startScenario({ popStart, yearDelta }){
  initPopLoop(popStart);
  pray = popStart*0.98;
  predator= popStart*0.97;
  year += yearDelta;
  started = true;


  if (autoIntervalId){
    clearInterval(autoIntervalId);
    autoIntervalId = setInterval(updateData, 10000);
  }
  updatePills();
}
function initchart(){
  const c = [4,5,6,7,8];
  for (const r of c){
    popChart.data.labels.push(`${year}`); 
    popChart.data.datasets[1].data.push(1);
   if(males)popChart.data.datasets[0].data.push(2);
       
    popChart.data.datasets[2].data.push(3);
   popChart.data.datasets[3].data.push(4);
   popChart.data.datasets[4].data.push(5);
    popChart.data.datasets[0].data.length = 0;
      popChart.data.datasets[1].data.length = 0;
      popChart.data.datasets[2].data.length = 0;
      popChart.data.datasets[3].data.length = 0;
      popChart.data.datasets[4].data.length = 0;
       popChart.data.labels.length = 0;
  }
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
   'Rusyngorix':                { popStart: 4.78e6,  yearDelta: -2e6  },
   'Damaliscus hypsodon':       { popStart: 7.78e6,  yearDelta: -2e6  },
  'Impala':       { popStart: 4.78e6,  yearDelta: -2  },
  'Metridiochoerus':{popStart: 9.65e05, yearDelta: -3.4e6},
  'Wiwaxia':{popStart:6.3e05, yearDelta: -512e6},
  'Ceratosaurus': {popStart:4.1e7, yearDelta: -150e6}
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
function mkde(){ status = -1; updatePills('decline'); }
function mide(){ mkde(); } 
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
function fosterPd(){
chid=4;status=1;
}
function nudgePd(){
chid=4;status=-1;
}function steadyPd(){chid=4;status=0;}
function nudgePr(){
chid=3;status=-1;
}
function fosterPr(){chid=3;status=1;}function steadyPr(){chid=3;status=0;}
function increaseCV(){
  forestcv+=1.1;
}
function decreaseCV(){
  forestcv-=1.1;
}
function applyYearPop(){
  const y = Number(yearInput?.value);
  const p = Number(popInput?.value);
  if (!Number.isNaN(y)) year = Math.floor(y);
  if (!Number.isNaN(p)) pop  = Math.max(1, Math.floor(p));
  males = pop * maleRatio;
  females = pop - males;
  updatePills();

  let chid = 0; let chdmem = 0;
  if(popChart) {
   
    popChart.data.labels.push(`${year}`); 
    popChart.data.datasets[1].data.push(males);popChart.update('none');
   if(males)popChart.data.datasets[0].data.push(pop);popChart.update('none');
       
    popChart.data.datasets[2].data.push(females);popChart.update('none');
   popChart.data.datasets[3].data.push(pred);popChart.update('none');
   popChart.data.datasets[4].data.push(pray);popChart.update('none');
   if(chid==5) popChart.data.datasets[0].data.push(forestcv);
    if(chdmem!=chid){
       popChart.data.datasets[0].data.length = 0;
      popChart.data.datasets[1].data.length = 0;
      popChart.data.datasets[2].data.length = 0;
      popChart.data.datasets[3].data.length = 0;
      popChart.data.datasets[4].data.length = 0;
       popChart.data.labels.length = 0;
       
    }
     chdmem= chid;
    popChart.update();
    
  }
  
}

let predmem = pred; let preymem= pray; let forestcvmem=forestcv;
let alls = [males,females,pray,pred];
function updateData(){
  for(let i =0; i<4;i++){};
  let gm = 1 + ((-0.4 + Math.random())/3);
    let sm = 1 + ((-0.5 + Math.random())/3);
    let stm = 1 + ((-0.5 + Math.random())/6);
    let dm = 1 + ((-0.6 + Math.random())/3);
  let gm2 = 1 + ((-0.4 + Math.random())/3);
    let sm2 = 1 + ((-0.5 + Math.random())/3);
    let stm2 = 1 + ((-0.5 + Math.random())/6);
    let dm2 = 1 + ((-0.6 + Math.random())/3);
    if(status == 0 && chid==0){males*=stm; females*=stm2;}
    if(status == -1 &&chid==0 ){males*=dm;females*=dm2;}
    if(status == 10 &&chid==0){females*=sm;males*=sm2;}
    if(status == 1 && chid==0){females*=gm;males*=gm2;}
  if(chid!=1){males*=sm;}if(chid!=2){females*=sm;}if(chid!=3){pray*=sm;}if(chid!=4){pred*=sm;}
  if(chid!=5){forestcv*=sm;}
  if(predmem>pred)pop*dm;
   if(forestcvmem<forestcv&&forestcv<40){pop*dm; pred*dm;pray*dm; females*dm; males*dm;}
  const r = clamp(0.5 + (-0.5 + Math.random())/25, 0.05, 0.95);
  pop=males+females;

  year += 2;
  predmem=pred;preymem= pray;forestcvmem= forestcv;
  if (popChart){
    popChart.data.labels.push(`${year}`);
    popChart.data.datasets[0].data.push(pop);     
    
    
    
    popChart.data.datasets[1].data.push(males);
   
       
    popChart.data.datasets[2].data.push(females);
   popChart.data.datasets[3].data.push(pred);
   popChart.data.datasets[4].data.push(pray);popChart.update('none');
  }
  updatePills();
 
}
function applyChartTheme(isDark){
  if (!window.popChart) return;            

  const axisColor = isDark ? 'rgba(229,231,235,0.9)' : 'rgba(31,41,55,0.9)'; 
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  popChart.options.scales.x.ticks.color = axisColor;
  popChart.options.scales.y.ticks.color = axisColor;
  popChart.options.scales.x.grid.color = gridColor;
  popChart.options.scales.y.grid.color = gridColor;

  if (!popChart.options.plugins) popChart.options.plugins = {};
  if (!popChart.options.plugins.legend) popChart.options.plugins.legend = {};
  if (!popChart.options.plugins.legend.labels) popChart.options.plugins.legend.labels = {};
  popChart.options.plugins.legend.labels.color = axisColor;

  popChart.update('none');
}

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
applyChartTheme(document.documentElement.getAttribute('data-theme') === 'dark');
watchForTitle();

