
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var BO1, BO2, BO3, BO4, BO5;

var R1, R2, R3, R4, R5;
var roofObject;

var Diameter;

var background;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background("white");

	engine = Engine.create();
	world = engine.world;

	Diameter = 40;

	roofObject = new Roof(400,20,300,20);

	BO1 = new Bob(100,320,20);
	R1 = new Rope(BO1.body,roofObject.body,-Diameter*2,0);
	BO2 = new Bob(140,320,20);
	R2 = new Rope(BO2.body,roofObject.body,-Diameter,0);
	BO3 = new Bob(180,320,20);
	R3 = new Rope(BO3.body,roofObject.body,0,0);
	BO4 = new Bob(220,320,20);
	R4 = new Rope(BO4.body,roofObject.body,Diameter,0);
	BO5 = new Bob(260,320,20);
	R5 = new Rope(BO5.body,roofObject.body,Diameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
BO1.display();
BO2.display();
BO3.display();
BO4.display();
BO5.display();
roofObject.display();


R1.display();
R2.display();
R3.display();
R4.display();
R5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(BO1.body,BO1.body.position,{x:-50,y:-45}); 
	}
}




