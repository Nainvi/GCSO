var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);

}

function draw() {
  background(255,255,255);  

  if(car.y-wall.y < wall.width/2+car.width/2 &&
    wall.y-car.y < wall.width/2+car.width/2){
    
    }
  drawSprites();
}