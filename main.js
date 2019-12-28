const upf = 1   //updates per frame
const fps = 30  //frames per second
const ppm = 10 //pixels per meter

var car

function setup() {
  createCanvas(1500, 750)

  car = new Car()
  car.body.ups = upf * fps
  car.body.ppm = ppm
  car.body.pos.x = width/2
  car.body.pos.y = height/2

}

function draw() {
  background(0)
  car.update()
  car.show()

}
