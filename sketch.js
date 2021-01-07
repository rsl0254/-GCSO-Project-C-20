//defining variable sprites and properties that hold values/formulas
var car, wall;
var speed, weight, deformation;


function setup() {
  //creates canvas
  createCanvas(1600,400);

  //assigns random values for speed and weight
  speed = random(45,90);
  weight = random(400,1500);
  //assigns a specific formula to calculate deformation
  deformation = (0.5* weight* speed* speed)/22500;

  //creates a car sprite with velocityX that depends upon the random speed value
  car = createSprite(60,200,60,20);
  car.velocityX = speed;

  //creates a wall sprite with a specfic shapeColor
  wall = createSprite(1500,200,20,height/1);
  wall.shapeColor = color(255,255,255);

 
  
 


}

function draw() {
  background(0,0,0); 
   
  //conditional statement that informs the computer to stop in motion once collision is detected
  //algorithm that detects collision 
  if(wall.x-car.x <= car.width/2 + wall.width/2) {
    car.velocityX = 0;
  }
     //assigns a specific color to the car dependent upon the range of deformation
      if(deformation<100) {
      car.shapeColor = color(0,255,0);
      }
  
      if(deformation>180) {
      car.shapeColor = color(255,0,0);
      }
  
      if(deformation>=100 && deformation<=180) {
      car.shapeColor = color(230,230,0);
      }
  

  //displays car and wall sprites
  car.display();
  wall.display();

  //appearance on screen
  drawSprites();
}