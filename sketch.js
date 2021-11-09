function preload(){
  teapot=loadModel("dedo.stl",true);
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  background(0);
  push();
  translate(-width/2,-height/2);
  fill(255,255,0);
  //ellipse(random(width),random(height),100,100);
  pop();
  push();
  scale(3);
  rotateX(PI/2);
  rotateZ(frameCount*0.01);
  noStroke();
  ambientLight(80);
  directionalLight(0,0,255,0,1,0);
  model(teapot);
  pop();
  normalMaterial();
}
