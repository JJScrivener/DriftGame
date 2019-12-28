function Car() {
  this.body = new Body() //the body of the car
  this.body.mass = 500 //mass of the car (kg)
  this.body.interia = 500 //mass moment of intertia of the car (kg*m^2)
  this.COG = createVector(0, 0) //the center of gravity for the car relative to the center of the car

  this.power = 1000 //output power (watts)
  this.bPower = 1500 //breaking power (watts)
  this.testSpeed = 10 //speed of the car used for testing (m/s)

  this.length = 4 //length of the car (meters)
  this.wheelBase = 2.5 //distance between the front and rear wheels (meters)
  this.width = 2 //width of the car (meters)
  this.wheelTrack = 1.5 //distance between the left and right wheels (meters)

  this.frontDrag = 0.24 // drag coefficient for forwards motion (unitless)
  this.frontArea = 2 // frontal area of the car (m^2)
  this.sideDrag = 0.3 // drag coefficient for sideways motion (unitless)
  this.sideArea = 4 // side area of the car (m^2)

  this.tyreRad = 0.8 //radius of the tyre (meters)
  this.tyreWidth = 0.4 //width of the tyre (meters)
  this.maxTurnAngle = Math.PI / 30 //max angle the wheels can turn to when turning the car (radians)
  this.currentTurnAngle = 0 //the current angle of the wheels (radians)

  this.update = function() {

    if(keyIsDown(UP_ARROW)){
      this.body.applyForce(createVector(500,0))
    }
    else if(keyIsDown(DOWN_ARROW)){
      this.body.applyForce(createVector(-500,0))
    }

    if(keyIsDown(LEFT_ARROW)){
      this.body.applyForce(createVector(0, -1), createVector(this.wheelBase/2, 0))
    }
    else if(keyIsDown(RIGHT_ARROW)){
      this.body.applyForce(createVector(0, 1), createVector(this.wheelBase/2, 0))
    }
    this.body.update()
  }

  this.show = function() {
    push()

    translate(this.body.pos.x, this.body.pos.y) //translate to the center of the car
    rotate(this.body.heading)
    rectMode(CENTER)
    noStroke()

    fill(255,100)
    rect(0, 0, this.length * this.body.ppm, this.width * this.body.ppm) //main body of the car

    rect(this.wheelBase/2 * this.body.ppm, -this.wheelTrack/2 * this.body.ppm, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //front left wheel
    rect(this.wheelBase/2 * this.body.ppm, this.wheelTrack/2 * this.body.ppm, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //front right wheel
    rect(-this.wheelBase/2 * this.body.ppm, -this.wheelTrack/2 * this.body.ppm, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //rear left wheel
    rect(-this.wheelBase/2 * this.body.ppm, this.wheelTrack/2 * this.body.ppm, this.tyreRad * this.body.ppm, this.tyreWidth * this.body.ppm) //rear right wheel

    pop()

  }
}

/*
this.update = function() {
  this.body.vel = createVector(0, 0)
  this.currentTurnAngle = 0

  if(keyIsDown(UP_ARROW)){
    this.body.setVel(createVector(this.testSpeed, 0).rotate(this.body.heading))
  }
  else if(keyIsDown(DOWN_ARROW)){
    this.body.setVel(createVector(-this.testSpeed, 0).rotate(this.body.heading))
  }

  if(keyIsDown(LEFT_ARROW)){
    this.currentTurnAngle = -this.maxTurnAngle * Math.cos(this.body.vel.heading() - this.body.heading)
  }
  else if(keyIsDown(RIGHT_ARROW)){
    this.currentTurnAngle = this.maxTurnAngle * Math.cos(this.body.vel.heading() - this.body.heading)
  }
  this.body.angleV = (this.body.vel.mag() *  Math.tan(this.currentTurnAngle)) / (this.wheelBase * this.body.ppm)
  this.body.update()
}
*/
