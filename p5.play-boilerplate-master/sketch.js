var hr,mn,sc
var hrAngle
var mnAngle
var scAngle




function setup() {
  
  createCanvas(400,400);
  angleMode(DEGREES) 
}

function draw() {
  background(255,255,255); 
  translate(200,200);
  rotate(-90);
  hr=hour();
  mn=minute();
  sc=second();
  
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr % 12,0,12,0,360);




push();
rotate(scAngle)
stroke(55,55,55)
strokeWeight(7)
line(0,0,100,0)
pop();

push();
rotate(mnAngle)
stroke(55,55,55)
strokeWeight(7)
line(0,0,75,0)
pop();

push();
rotate(hrAngle)
stroke(55,55,55)
strokeWeight(7)
line(0,0,50,0)
pop();

stroke(55,55,55)
point(0,0)

strokeWeight(10);
noFill();





stroke(55,55,55)
arc(0,0,300,300,0,scAngle)
stroke(55,55,55)
arc(0,0,255,255,0,mnAngle)
stroke(55,55,55)
arc(0,0,215,215,0,hrAngle)

  
}

