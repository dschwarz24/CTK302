function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background('#A6DCF9');


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    rect(200, 200, 200, 200);
  } else {
    // when the mouse isn't pressed!
    fill ('#00C458') ;
    ellipse(836, 339, 150, 150);
    ellipse(745, 400, 150, 150) ;
    ellipse(633, 450, 150, 150) ;
    ellipse(524, 432, 150, 150) ;
    ellipse(401, 404, 150, 150) ;
    ellipse(305, 422, 150, 150) ;
    ellipse(200, 455, 150, 150) ;
    ellipse(112, 439, 150, 150) ;
  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);



  text("", 80, 20);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
