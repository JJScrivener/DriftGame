function Car() {
  this.body = new Body()
  this.power = 1000 //output power (watts)
  this.bPower = 1500 //breaking power (watts)

  this.length = 4 //length of the car (meters)
  this.wheelBase = 2.5 //distance between the front and rear wheels (meters)
  this.width = 2 //width of the car (meters)
  this.wheelTrack = 1.5 //distance between the left and right wheels (meters)

  this.frontDrag = 0.24 // drag coefficient for forwards motion (unitless)
  this.frontArea = 2 // frontal area of the car (m^2)
  this.sideDrag = 0.3 // drag coefficient for sideways motion (unitless)
  this.sideArea = 4 // side area of the car (m^2)

  this.sideGrip = 0.9 //coefficient of static friction for the tyre laterally (unitless)
  this.sideSlip = 0.68 //coefficient of kinetic friction for the tyre laterally (unitless)

  this.maxTurnAngle = Math.PI / 4 //max angle the wheels can turn to when turning the car (radians)
  this.currentTurnAngle = 0 //the current angle of the wheels (radians)

  this.FLT = new Point(this.body, createVector(this.wheelBase/2, -this.wheelTrack/2)) //location of the front left tyre
  this.FRT = new Point(this.body, createVector(this.wheelBase/2, this.wheelTrack/2)) //location of the front right tyre
  this.RLT = new Point(this.body, createVector(-this.wheelBase/2, -this.wheelTrack/2)) //location of the rear left tyre
  this.RRT = new Point(this.body, createVector(-this.wheelBase/2, this.wheelTrack/2)) //location of the rear right tyre
  this.tyreRad = 0.8 //radius of the tyre (meters)
  this.tyreWidth = 0.4 //width of the tyre (meters)

  this.update = function() {
    if(Math.abs(this.currentTurnAngle) <= this.maxTurnAngle){
      this.currentTurnAngle += 0.01
    }
    else{
      this.currentTurnAngle = -this.maxTurnAngle
    }
  }

  this.show = function() {
    push()

    translate(this.body.pos.x, this.body.pos.y)
    rotate(this.body.heading)

    rectMode(CENTER)
    noStroke()

    fill(255,100)
    rect(0, 0, this.length * this.body.ppm, this.width * this.body.ppm) //main body of the car

    fill(255,100)
    push()
    translate(this.FLT.posRel.x * this.body.ppm, this.FLT.posRel.y * this.body.ppm)
    rotate(this.currentTurnAngle)
    rect(0,0, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //front left tyre
    pop()
    push()
    translate(this.FRT.posRel.x * this.body.ppm, this.FRT.posRel.y * this.body.ppm)
    rotate(this.currentTurnAngle)
    rect(0,0, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //front right tyre
    pop()
    rect(this.RLT.posRel.x * this.body.ppm, this.RLT.posRel.y * this.body.ppm, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //rear left tyre
    rect(this.RRT.posRel.x * this.body.ppm, this.RRT.posRel.y * this.body.ppm, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //rear right tyre

    pop()
  }
}
