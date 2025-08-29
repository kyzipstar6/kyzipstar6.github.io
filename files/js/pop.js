
  
  let pop = 2500000;
  let males = pop / 2;
  let females = pop / 2;
  let sum = males + females;
  let year = 4.65e9;
  let started = false;         
  let intervalId = null;      

  
  const canvas = document.getElementById('popChart');
  if (!canvas) {
    console.warn('popChart canvas not found');
  }
  const popCtx = canvas ? canvas.getContext('2d') : null;

  const popChart = popCtx ? new Chart(popCtx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Population',
        data: [],
        borderColor: 'rgba(241, 198, 114, 1)',
        tension: 0.3
      }]
    },
    options: {
      animation: false,
      parsing: false,
      normalized: true,
      scales: {
        x: { title: { display: true, text: 'Time in Earth age (years)' }},
        y: { title: { display: true, text: 'Population (individuals)' }, beginAtZero: true }
      }
    }
  }) : null;

  // ----- Helpers -----
  function initPopLoop(population) {
  popChart.data.labels.length = 0;
  popChart.data.datasets[0].data.length = 0;  // clear, don’t replace
  popChart.update();

  pop = population;
  males = pop / 2;
  femal = pop / 2;
  }

  function startScenario({ popStart, yearDelta }) {
    initPopLoop(popStart);
    year += yearDelta;
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(updateData, 5000);
    started = true;
  }

  // Centralized catalog (DRY)
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

  // Watch title changes and trigger scenario once per change
  let lastTitle = '';
  function watchForTitle() {
    setInterval(() => {
      const titleEl = document.getElementById('title');
      if (!titleEl) return;

      const text = titleEl.innerText.trim();
      if (!text || text === lastTitle) return;

      // find first matching key
      const match = Object.keys(SPECIES).find(k => text.includes(k));
      if (match) {
        started = false;          // allow new start for a new title
        if (!started) startScenario(SPECIES[match]);
      }
      lastTitle = text;
    }, 1000);
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }
  let status = 0;
  function updateData() {
    // evolve population; keep it >= 0
    const popGrowth = 1 + clamp((-0.5 + Math.random()) / 3, -0.9, 0.9);
    let gm = 1 + ((0.6 + Math.random()/3);
    let sm = 1 + ((0.5 + Math.random()/3);
    let dm = 1 + ((0.4 + Math.random()/3);
    if(status == 0)pop*=sm;
    if(status == -1)pop*=dm;
    if(status == 1)pop*=gm;
    
    const maleRatio = clamp(0.5 + (-0.5 + Math.random()) / 6, 0.05, 0.95);
    males = pop * maleRatio;
    females = pop - males;
    sum = pop;

    year += 1;

    if (popChart) {
      popChart.data.labels.push(`${year}`);
      popChart.data.datasets[0].data.push(pop);
      popChart.update();
    }
  }
  function mkgr() {status = 1;}
  function mkdec() {status = -1;}

  
  watchForTitle();

