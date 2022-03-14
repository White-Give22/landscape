let mosize;
let mosize2;
let mosize3;
let mosize4;
let mooncolor;
//let cm=['cy','cg','cb','cp'];
//let skyc=['scy','scb','scg','scp']
let cy;
let cy1 = 199;
let cy2 = 171;
let cy3 = 95;
let cg;
let cg1 = 150;
let cg2 = 184;
let cg3 = 106;
let cb;
let cb1 = 46;
let cb2 = 148;
let cb3 = 141;
let cp;
let cp1 = 97;
let cp2 = 72;
let cp3 = 102;

let scy;
let scy1 = 186;
let scy2 = 143;
let scy3 = 63;
let scb;
let scb1=91;
let scb2=139;
let scb3=168;
let scg;
let scg1=91;
let scg2=168;
let scg3=151;
let scp;
let scp1=156;
let scp2=116;
let scp3=194;

let mcb;
let mcb1=199;
let mcb2=225;
let mcb3=252;
let mcp;
let mcp1=255;
let mcp2=217;
let mcp3=239;
let mcy;
let mcy1=247;
let mcy2=247;
let mcy3=215;


function setup() {
  
  frameRate(10);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255, 217, 239);

  starbg();
  sun();
  mountain();
}

function starbg() {
  for (let i = 0; i < 15; i++) {
    fill(255);
    noStroke();
    let x = random(width);
    let y = random(height /2);
    ellipse(x, y, 2.5, 2.5);
  }
  for (let i = 0; i < 25; i++) {
    fill(255);
    noStroke();
    let x = random(width);
    let y = random(height /2);
    ellipse(x, y, 1.5, 1.5);
  }
}

function sun() {
  msize = random(10, 20);
  msize2 = random(50, 85);
  msize3 = random(100, 115);
  msize4 = random(115, 130);

  fill(247, 247, 215, msize4);
  ellipse(width * 0.2, height * 0.15, 85, 85);
  fill(247, 247, 215, msize3);
  ellipse(width * 0.2, height * 0.15, 100, 100);
  fill(247, 247, 215, msize2);
  ellipse(width * 0.2, height * 0.15, 115, 115);
  fill(247, 247, 215, msize);
  ellipse(width * 0.2, height * 0.15, 130, 130);
  fill(247, 247, 215);
  ellipse(width * 0.2, height * 0.15, 70, 70);
}

function mountain() {
  fill(238, 241, 251, 50);
  beginShape();
  vertex(width * 0, height);
  vertex(width * 0, height * 0.7);
  vertex(width * 0.15, height * 0.58);
  vertex(width * 0.3, height * 0.65);
  vertex(width * 0.5, height * 0.54);
  vertex(width * 0.65, height * 0.6);
  vertex(width * 0.9, height * 0.45);
  vertex(width, height * 0.5);
  vertex(width, height);
  endShape(CLOSE);

  fill(238, 241, 251, 100);
  beginShape();
  vertex(width * 0, height);
  vertex(width * 0, height * 0.7);
  vertex(width * 0.35, height * 0.55);
  vertex(width * 0.7, height * 0.7);
  vertex(width * 0.9, height * 0.75);
  vertex(width, height * 0.8);
  vertex(width, height);
  endShape(CLOSE);

  fill(238, 241, 251, 200);
  beginShape();
  vertex(width * 0, height);
  vertex(width * 0, height * 0.6);
  vertex(width * 0.15, height * 0.7);
  vertex(width * 0.3, height * 0.75);
  vertex(width * 0.5, height * 0.8);
  vertex(width * 0.62, height * 0.7);
  vertex(width * 0.9, height * 0.85);
  vertex(width, height * 0.75);
  vertex(width, height);
  endShape(CLOSE);

  fill(238, 241, 251);
  beginShape();
  vertex(width * 0, height);
  vertex(width * 0, height * 0.9);
  vertex(width * 0.2, height * 0.8);
  vertex(width * 0.4, height * 0.87);
  vertex(width * 0.6, height * 0.9);
  vertex(width * 0.7, height * 0.9);
  vertex(width * 0.8, height * 0.85);
  vertex(width * 0.92, height * 0.92);
  vertex(width, height * 0.95);
  vertex(width, height);
  endShape(CLOSE);
}
