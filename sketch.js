let mosize;
let mosize2;
let mosize3;
let mosize4;
let mooncolor;
let bgc = 0;
let snowflakecount=500;
let sfsize=10;
let gravity =1;
let sf=[];

let cmt1;
let cmt2;
let cmt3;

let cm1 = ["199", "150", "46", "97"];
let cm2 = ["171", "184", "148", "72"];
let cm3 = ["95", "106", "141", "102"];

let bgco1;
let bgco2;
let bgco3;

let bgc1 = ["205", "255", "205", "225", "0"];
let bgc2 = ["221", "214", "250", "194", "0"];
let bgc3 = ["247", "212", "240", "255", "0"];

let mco1;
let mco2;
let mco3;

let mc1 = ["240", "97", "105"];
let mc2 = ["86", "64", "150"];
let mc3 = ["55", "173", "83"];

function setup() {
  frameRate(10);
  noStroke();
  cmt1 = int(random(cm1.length));

  bgco1 = int(random(bgc1.length));

  mco1 = int(random(mc1.length));
}

function draw() {
  createCanvas(windowWidth, windowHeight);

  background(bgc1[bgco1], bgc2[bgco1], bgc3[bgco1]);


  //console.log(int(random(cmt1)));
  //starbg();
  moon();
  mountain();
}

//function starbg() {
//  for (let i = 0; i < 15; i++) {
//    fill(255);
//    noStroke();
//    let x = random(width);
//    let y = random(height);
//    ellipse(x, y, 5, 5);
//  }
 // for (let i = 0; i < 25; i++) {
//    fill(255);
//    noStroke();
 //   let x = random(width);
//    let y = random(height * 0.6);
//    ellipse(x, y, 2, 2);
//  }
//}

//function snow(){
//    for (let i = 0; i < snowflakecount; i++) {
//     fill(255);
//     let x = random(width);
//     let y = random(height);
//      ellipse(x,y,)
//    
//  }
//}


function moon() {
  msize = random(10, 20);
  msize2 = random(50, 85);
  msize3 = random(100, 115);
  msize4 = random(115, 130);

  fill(mc1[mco1], mc2[mco1], mc3[mco1], msize4);
  ellipse(width * 0.2, height * 0.15, 85, 85);
  fill(mc1[mco1], mc2[mco1], mc3[mco1], msize3);
  ellipse(width * 0.2, height * 0.15, 100, 100);
  fill(mc1[mco1], mc2[mco1], mc3[mco1], msize2);
  ellipse(width * 0.2, height * 0.15, 115, 115);
  fill(mc1[mco1], mc2[mco1], mc3[mco1], msize);
  ellipse(width * 0.2, height * 0.15, 130, 130);
  fill(mc1[mco1], mc2[mco1], mc3[mco1]);
  ellipse(width * 0.2, height * 0.15, 70, 70);
}

function mountain() {
  fill(cm1[cmt1], cm2[cmt1], cm3[cmt1], 50);
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

  fill(cm1[cmt1], cm2[cmt1], cm3[cmt1], 100);
  beginShape();
  vertex(width * 0, height);
  vertex(width * 0, height * 0.7);
  vertex(width * 0.35, height * 0.55);
  vertex(width * 0.7, height * 0.7);
  vertex(width * 0.9, height * 0.75);
  vertex(width, height * 0.8);
  vertex(width, height);
  endShape(CLOSE);

  fill(cm1[cmt1], cm2[cmt1], cm3[cmt1], 200);
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

  fill(cm1[cmt1], cm2[cmt1], cm3[cmt1]);
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

function mousePressed() {
  if (mouseX > width * 0.15 && mouseX < width * 0.25){
      if (mouseY > height * 0.15 && mouseY < height * 0.25){
  cmt1 = int(random(cm1.length));

  bgco1 = int(random(bgc1.length));

  mco1 = int(random(mc1.length));
  }
}
}
