function setup() {
  createCanvas(400, 400);
  // background(200);
  colorMode(HSB, 360, 100, 100);
  // rectMode(CENTER);
  noStroke();
  // slider = createSlider(0, 360, 0, 0.1);
  // slider.style("width", "300px");
}

function draw() {
  background(220);

  // let hue = slider.value();
  // background(hue, 100, 100);
  // translate(width / 2, height / 2);
  background(360 - mouseY, 100, 100);
  fill(360 - mouseX, 100, 100);
  // rotate(PI / 8);
  rectMode(CENTER);
  rect(width / 2, height / 2, mouseX * 1.5, mouseX * 1.5);

  fill(360 - mouseY, 100, 100);
  // ellipseMode(CENTER);
  ellipse(width / 2, height / 2, mouseX + 1);
}

function keyPressed() {
  if (key == "s") {
    saveCanvas("testCanvas", "png");
  }
}
