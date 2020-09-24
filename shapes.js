class Shape{
  constructor(_xPos, _yPos) {
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  
  display(){
     let x1 = random(0,60)
     let y1 = random(0,400)
     let x2 = random(-30,30)
    // let y2 = random(0,40)
    // let x3 = random(0,40)
    // let y3 = random(0,40)
    // let x4 = random(0,40)
    // let y4 = random(0,40)
    // quad(x1-this.xPos,y1-this.yPos,x2+this.xPos,y2-this.yPos,x3+this.xPos,y3+this.yPos,x4+this.xPos,y4-this.yPos);
    square(this.xPos+x2, this.yPos, x1)
    
  }

}



