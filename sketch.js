var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSide1,boxSide2,boxSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxSide1=createSprite(width/2,650,200,20);
	boxSide1.shapeColor="red"
	boxSide2=createSprite(300,610,20,100);
	boxSide2.shapeColor="red"
	boxSide3=createSprite(500,610,20,100);
	boxSide3.shapeColor="red" 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  keyPressed();
  hasCollided(packageBody,boxSide1);
  drawSprites();
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}
function hasCollided(packageBody,boxSide1){
	packageBodyBottomEdge=packageBody.y+packageBody.height;
	boxSide1TopEdge=boxSide1.y;
	if(packageBodyBottomEdge>=boxSide1TopEdge){
	  return true
	}
	return false;
}



 // function hasCollided(bullet,wall){
//	bulletRightEdge=bullet.x+bullet.width;
	//wallLeftEdge=wall.x;
	//if(bulletRightEdge>=wallLeftEdge){
	 // return true
	//}
	//return false;
  //}
