
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,left,right;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

var ball_options={
	isStatic:false,
	restitution:0.03,
	friction:0,
	density:1.2
}
	
	
	//Create the Bodies Here.
ball=Matter.Bodies.circle(500,200,20,ball_options);
World.add(world,ball);

ground=new Ground(width/2,670,width,20);
left=new Ground(1100,600,20,120);
right=new Ground(1000,600,20,120);

	Engine.run(engine);

	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  left.displsay();
  right.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}

