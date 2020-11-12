
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
Engine.update(engine);
	//Create the Bodies Here.
paper= new Paper(100,665,25,25);
box1=new Box(600,665,100,20);
box2=new Box(540,615,20,100);
box3=new Box(660,615,20,100);
ground=new Ground(400,690,800,20);
Engine.run(engine);
	
  
}


function draw() {
  
  background(0);
  ground.display();
paper.display();
box1.display();

box2.display();
box3.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){

	Body.applyForce(paper.body,paper.body.position,{x:95,y:-85});

}
if (keyCode === DOWN_ARROW){

	Body.applyForce(paper.body,paper.body.position,{x:-95,y:85});

}
}

