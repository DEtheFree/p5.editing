let x1 = 170;
let x2 = 200;
let y = 80; 
let L = 20;
let shape1;
let shape2;

function setup() {
  createCanvas(400, 400)
  
  shape1 = new Shape(300,L);
  shape2 = new Shape(200,60)

}

  function draw(){   
  
    
  let rx1 = random(20,80)
  let rx2 = random(50,110)
  let ry = random(0,40)
  
  
  
  let a = random(0, 255);
  let b = random(0, 255);
  let c = random(0, 255);
  let d = random(0, 70)


 if(mouseIsPressed){
    fill(a, b, c)
    ellipse(mouseX, mouseY, d, d);
    //rect(x, y, d / 3, d);
  }
    
    //clear is to insure that the eyes won't just draw a line of eyes
  clear();
    
  background(220);
  drawBody();
  drawFace();
  drawArm();
  drawLegs();
  drawClock();
    
  shape1.display();
    

    
  L++;
  if(L > 400){
  L = 0;
  }
    
line(80,50,rx2,rx1)
    
if(mouseX>180){
  x1=mouseX-22.5;
} else {
  x1=163;
}
  
if(mouseX>165){
   x2=mouseX+22.5;
}  else {
   x2=200
}
    
    
if(mouseY>70){
  y=mouseY;
} if(mouseY>100){
  y=80;
} else{
  y=mouseY;
}
    
}
function drawBody(){
  ellipse(200,200,80,160)
  circle(200,80,80)
      
}
function drawFace(){
  //ellipse(170,80,2,4) left eye
  //ellipse(215,80,2,4) right eye
  ellipse(x1,y,2,4) //must find way to put put where the eyes can and can't go.
      
  ellipse(x2+22.5,80,2,4)
  stroke(1)
  line(190,110,197,110)
      
}
function drawArm(){
  line(220,130,220,250)
  line(220,250,230,255)
  line(220,240,230,245)
  line(220,230,230,235)
      
}
function drawLegs(){
  stroke(1)
  line(175,264,175,380)
  line(225,264,225,380)
  line(200,380,225,380)
  line(150,380,175,380)
      
}
function drawClock(){
  circle(80,50,60)

  
}
