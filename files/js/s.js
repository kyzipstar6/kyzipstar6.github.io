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
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function haplophrentis(){
     if(started.includes("f")){ 
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function aegirocassis(){
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
  initPopLoop(2.78e07);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

    function triceratops(){
     if(started.includes("f")){ 
    initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
 }
      started ="y";}

//herebeginsappend//hereendsappend//hereendsappend
let lastTitle = "";
function watchForTitle() {
  setInterval(() => {
    let titleEl = document.getElementById("title"); 
   
    if (!titleEl) return; // safety check

    const text = titleEl.innerText;

    if (text.includes("Rafatazmia chitrakootensis") && !lastTitle.includes(titleEl)) rafatazmiachitrakootensis();
    if (text.includes("Cyclomedusa") && !lastTitle.includes(titleEl)) cyclomedusa();
    if (text.includes("Kymbrella") && !lastTitle.includes(titleEl)) kymbrella();
    if (text.includes("Haplophrentis") && !lastTitle.includes(titleEl)) haplophrentis();
    if (text.includes("Aegirocassis") && !lastTitle.includes(titleEl)) aegirocassis();
    if (text.includes("Onychophora") && !lastTitle.includes(titleEl)) onychophora();
    if (text.includes("Herrerasaurus") && !lastTitle.includes(titleEl)) herrerasaurus();
    if (text.includes("Abrictosaurus") && !lastTitle.includes(titleEl)) abrictosaurus();
    if (text.includes("Caseosaurus") && !lastTitle.includes(titleEl)) caseosaurus();
    if (text.includes("Staurikosaurus") && !lastTitle.includes(titleEl)) staurikosaurus();
    if (text.includes("Chindesaurus") && !lastTitle.includes(titleEl)) chindesaurus();
    if (text.includes("Tawa hallae") && !lastTitle.includes(titleEl)) tawahallae();
    if (text.includes("Tyrannosaurus rex") && !lastTitle.includes(titleEl)) tyrannosaurusrex();
    if (text.includes("Triceratops") && !lastTitle.includes(titleEl)) triceratops();
    lastTitle= titleEl;
  }, 5000);
}

function updateData() {
    pop*= (1+(0.5+Math.random())/3);

    males= (pop/2)*(1+(0.5+Math.random())/3);
    femal= (pop/2)*(1+(0.5+Math.random())/3);

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

    function cyclomedusa(){
      initPopLoop(2.78e05);
      year-=560e06;
      setInterval(updateData, 5000);
}

    function kymbrella(){
      initPopLoop(2.78e05);
      year-=565e06;
      setInterval(updateData, 5000);
}

    function haplophrentis(){
      initPopLoop(2.78e05);
      year-=546e06;
      setInterval(updateData, 5000);
}

    function aegirocassis(){
      initPopLoop(2.78e09);
      year-=485e06;
      setInterval(updateData, 5000);
}

    function onychophora(){
      initPopLoop(2.78e058);
      year-=545e06;
      setInterval(updateData, 5000);
}

    function herrerasaurus(){
      initPopLoop(6.78e06);
    year-=115e06;
    setInterval(updateData, 5000);
}

    function abrictosaurus(){
      initPopLoop(5.78e06);
    year-=115e06;
    setInterval(updateData, 5000);
}

    function caseosaurus(){
      initPopLoop(2.78e06);
    year-=115e06;
    setInterval(updateData, 5000);
}

    function staurikosaurus(){
      initPopLoop(2.78e08);
    year-=115e06;
    setInterval(updateData, 5000);
}

    function chindesaurus(){
      initPopLoop(2.78e07);
    year-=115e06;
    setInterval(updateData, 5000);
}

    function tawahallae(){
      initPopLoop(4.78e06);
      year-=115e06;
      setInterval(updateData, 5000);
}

    function tyrannosaurusrex() {
      initPopLoop(2.78e05);
      year-=115e06;
      setInterval(updateData, 5000);
}

    function triceratops(){
      initPopLoop(2.78e05);
    year-=115e06;
    setInterval(updateData, 5000);
}