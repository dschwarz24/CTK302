let  img1, img2, img3 ;


function setup() {
  createCanvas(500, 500);
  img1 = loadImage ("assets/1D.jpg") ;
  img2 = loadImage ("assets/dog.jpg") ;
  img3 = loadImage ("assets//pasta.jpg") ;

  imageMode(CENTER) ;
}

function draw() {
  background ('green') ;
  image (img1, width/2, height/2, 100, 100) ;
  image (img2, width/2, height/2-120, 100, 100) ;
  image (img3, width/2, height/2+120, 100, 100) ;
}
