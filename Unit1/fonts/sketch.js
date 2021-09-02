var f1 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("assets/Bertha.ttf") ;
  f2 = loadFont ("assets/Oswald.ttf") ;
  textAlign (CENTER) ;


}

function draw() {
 background ("yellow") ;
 textFont (f1) ;
 textSize (48) ;
 text ("Hello World", width/2, 100) ;

 textFont (f2);
 textSize (24) ;
 text ("Go You Redbirds!", width/2, 160) ;
}
