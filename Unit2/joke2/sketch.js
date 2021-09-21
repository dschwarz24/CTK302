let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
    background ('pink') ;
    text ('What is Whitney Houston’s favorite type of coordination?', 100, 100) ;
    break ;

    case 1:
    background ('yellow') ;
    text ('HAAANNNNND EYEEEEEEE', 100, 100) ;

    break ;
  }

timer++ ;
if (timer > 3*60) {
  timer = 0 ;
  state++ ;
  if (state > 1) state = 0 ;
}


}

function mouseReleased(){
  state++ ;
  if (state > 1) {
    state = 0;
  }
}
