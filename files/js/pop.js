let pop = 2500000;    let males =pop/2; let femal = pop/2; let sum = males+femal;
function initPopLoop(population){
  
    pop = population;
    males = pop/2;
    femal =pop/2;
    console.log("Started new loop.");
}

//let title = "";


const popCtx = document.getElementById('popChart').getContext('2d');
const popChart = new Chart(popCtx, {
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
    scales: {
      x: { title: { display: true, text: 'Time in Earth age (years)' }},
      y: { title: { display: true, text: 'Population in number of individuals' }}
    }
  }
});

let year = 4.65e9;
  function ornicopora(){
    //document.getElementsByClassName("title").innerText = `Live Hamanumida Daedalus population`;
    
  
    initPopLoop(2.345e09);
    year-=450e06;
    setInterval(updateData, 5000);
}

    function rafatazmiachitrakootensis(){
     if(started.includes("f")){ 
        
initPopLoop(2.78e09);
      year-=560e06;
      setInterval(updateData, 5000);
 }
      started ="y";}

    function cyclomedusa(){
     if(started.includes("f")){ 

    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function kymbrella(){
     if(started.includes("f")){ 
        
    initPopLoop(2.78e08);
    year-=552e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function haplophrentis(){
       
     if(started.includes("f")){ 
    initPopLoop(2.78e05);
    year-=515e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function aegirocassis(){
       popChart.data.labels = [];
  popChart.data.datasets = [];
  popChart.update();
     if(started.includes("f")){ 
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function onychophora(){
     if(started.includes("f")){ 
        
     initPopLoop(2.345e09);
    year-=450e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function herrerasaurus(){
     if(started.includes("f")){ 
        
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function abrictosaurus(){
     if(started.includes("f")){ 
  
 initPopLoop(2e06);
     year-=250e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function caseosaurus(){
     if(started.includes("f")){ 
        
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function staurikosaurus(){
     if(started.includes("f")){ 
        
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function chindesaurus(){
     if(started.includes("f")){ 
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function tawahallae(){
     if(started.includes("f")){ 
        
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function tyrannosaurusrex(){
     if(started.includes("f")){ 
        
  
  initPopLoop(78e07);
    year-=75e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function triceratops(){
     if(started.includes("f")){ 
        
    initPopLoop(2.78e05);
    year-=85e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

let started = "f";
//herebeginsappendlet pop = 2500000;    let males =pop/2; let femal = pop/2; let sum = males+femal;
function initPopLoop(population){
 popChart.data.labels = [];
  popChart.data.datasets = [];
  popChart.update();

    pop = population;
    males = pop/2;
    femal =pop/2;

}

//let title = "";

function ornicopora(){
    //document.getElementsByClassName("title").innerText = `Live Hamanumida Daedalus population`;
      if(started.includes("f")){
    initPopLoop(2.345e09);
    year-=450e06;
    setInterval(updateData, 5000);
      }
      started ="y";
    
}

//hereendsappend
let lastTitle = "";
function watchForTitle() {
  setInterval(() => {
    const titleEl = document.getElementById("title"); 
   
    if (!titleEl) return; // safety check

    const text = titleEl.innerText;
    

    if (text.includes("Rafatazmia chitrakootensis") && !(lastTitle.length == text.length)) rafatazmiachitrakootensis();
    if (text.includes("Cyclomedusa") && !(lastTitle.length == text.length)) cyclomedusa();
    if (text.includes("Kymbrella") && !(lastTitle.length == text.length)) kymbrella();
    if (text.includes("Haplophrentis") && !(lastTitle.length == text.length)) haplophrentis();
    if (text.includes("Aegirocassis") && !(lastTitle.length == text.length)) aegirocassis();
    if (text.includes("Onychophora") && !(lastTitle.length == text.length)) onychophora();
    if (text.includes("Herrerasaurus") && !(lastTitle.length == text.length)) herrerasaurus();
    if (text.includes("Abrictosaurus") && !(lastTitle.length == text.length)) abrictosaurus();
    if (text.includes("Caseosaurus") && !(lastTitle.length == text.length)) caseosaurus();
    if (text.includes("Staurikosaurus") && !(lastTitle.length == text.length)) staurikosaurus();
    if (text.includes("Chindesaurus") && !(lastTitle.length == text.length)) chindesaurus();
    if (text.includes("Tawa hallae") && !(lastTitle.length == text.length)) tawahallae();
    if (text.includes("Tyrannosaurus rex") && !(lastTitle.length == text.length)) tyrannosaurusrex();
    if (text.includes("Triceratops") && !(lastTitle.length == text.length)) triceratops();
    lastTitle= text;
  }, 5000);
}

function updateData() {
    pop*= (1+(-0.5+Math.random())/3);

    males= (pop/2)*(1+(-0.5+Math.random())/3);
    femal= (pop/2)*(1+(-0.5+Math.random())/3);

    sum= males+femal;
    let malpt = males/sum;
    let fempt = femal/sum;

    year += 1;
    //document.getElementById("pop").innerText = `Population: ${pop.toFixed(0)} individuals.`;
    //document.getElementById("yr").innerText = `Earth year: ${year}`;
    //document.getElementById("mal").innerText = `Males ${(malpt*pop).toFixed(0)}`;
    //document.getElementById("fem").innerText = `Females: ${(fempt*pop).toFixed(0)}`;

  // Add to chart
  popChart.data.labels.push(`${year}`);
  popChart.data.datasets[0].data.push(pop);
  popChart.update();
}

watchForTitle();
