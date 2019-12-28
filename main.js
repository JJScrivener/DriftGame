const upf = 100   //updates per frame
const fps = 30  //frames per second
const ppm = 10 //pixels per meter

var car

function setup() {
  createCanvas(1500, 750)

  car = new Car()
  car.body.ups = upf * fps
  car.body.ppm = ppm
  car.body.pos.x = width/2
  car.body.pos.y = height/2 + car.body.ppm*car.wheelBase/Math.tan(car.maxTurnAngle)

}

function draw() {
  background(0)
  stroke(255,0,0)
  fill(0)
  ellipse(width/2, height/2, 2*car.body.ppm*car.wheelBase/Math.tan(car.maxTurnAngle), 2*car.body.ppm*car.wheelBase/Math.tan(car.maxTurnAngle))

  for(let i = 0; i < upf; i++){
    car.update()
  }

  car.show()

}
