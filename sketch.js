var speed, weight;

var car, wall;


function setup() {
  createCanvas(1600,400);
  



speed = random(55, 90);
weight = random(400,1500);

car = createSprite(50,200,50,50);
wall = createSprite(1300,200,50,height/2)


car.velocityX = speed;

}

function draw() {
  background("black");  
 
if (car.isTouching(wall)){
  car.velocityX = 0;
}




 
if (wall.x - car.x < (wall.width + car.width)/2 )
  {  
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22500;

      if (deformation > 180) {
          car.shapeColor = ("red");
      }

    
      if (deformation < 180 && deformation > 100) {
          car.shapeColor = ("yellow");
      }

      if (deformation < 100) {
          car.shapeColor = ("green");
      }

  } 
 
  drawSprites();
}