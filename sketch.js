 //posição e tamho da bolinha
 let xbolinha = 300;
 let ybolinha =200;
 let diaetro =25;

 //velocidade da bolinha
 let velocidadexbolinha =6;
 let velocidadeybolinha =6;

 //variaveis da raquete 
 let xraquete =5;
 let yraquete =150;
 let raquetecomprimento=10;
 let raquetealtura =90;

 function setup(){
    createCanvas(600,400);
   } 

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete();
} 

function mostrabolinha(){
  fill ("gold")
  circle(xbolinha, ybolinha, diametro);
}

function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velociadadeybolinha;
} 

function verificacolisaoborda(){
  //cplisao da bolinha
  if (xbolinha>height|| ybolinha<0){
    velocidadexbolinha*=-1;
   }
  if ybolinha>height.|| ybolinha<0){
    velocidadeybolinha*=-1;
  }
}

function mostraraquete(){
  fill("deeppink") 
  rect(xraquete,yraquete,raquetecomprimento,raquetealtura,15);
}
fill("deeppink");
rect(xraquete,yraquete,raquetecomprimento,raquetealtura,15);

//movimenta a minha raquete
function movimenta raquete(){
  if (keylsdown(up_arrow){
      yraquete-=10;
      }
  if (keyIsDown(up_arrow){
      yraquete==10;
      }
}

//verifica a colisão entre a minha raquete e a bolinha 
function verificarcolisao(){
  if(
  xbolinha-raio<xraquete+raquetecomprimento&&
  ybolinha-raio<yraquetealtura&&
  ybolinha+raio>raquete
  ){
    velocidadexbolinha*=-1;
  }
}
