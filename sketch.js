var fixedRect, movingRect;
var bike,car;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car= createSprite(400,400,50,20);
  bike=createSprite(1000,400,50,20);
  bike.shapeColor ="white";
  car.shapeColor ="orange";
  car.velocityX =1;
  bike.velocityX=-1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if (isTouching(car,movingRect)){
   
movingRect.shapeColor = "red";
car.shapeColor = "red";
  }
 else{
 movingRect.shapeColor = "yellow";
 car.shapeColor = "white";

 }

 bounceOff(car,bike);
  
  drawSprites();
}
 






