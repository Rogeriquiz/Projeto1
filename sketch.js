function setup() {
  createCanvas(1000, 800);
  background("#DF1EA8");
}

function draw() {

  fill ("purple");
  stroke ("lightblue");
  if (mouseIsPressed)
  rect(mouseX,mouseY,30,50);
  
}
