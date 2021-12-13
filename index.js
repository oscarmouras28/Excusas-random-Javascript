let who = ['Github','Gitpod','Mi pc','Freddy','Orlando'];
let what = ['crasheo','borro','buggeo','no guardo','me funcionaba'];
let when = ['el repositorio cuando terminamos','el codigo ayer','el html cuando termine','el css al llamarlo en el html','el proyecto mientras lo hacia'];


function randomizer(){
let Who = Math.floor(Math.random()*what.length)+0
let What = Math.floor(Math.random()*what.length)+0
let When = Math.floor(Math.random()*what.length)+0
let excuse = who[Who]+' '+what[What]+' '+when[When];
return excuse
}

console.log(randomizer());