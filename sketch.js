const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;

var dustbinObj;
var ground;
var ball;



function setup() {
  rectMode(CENTER);
	createCanvas(1600, 700);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2,671,width,20);
  dustbinObj = new Dustbin(1200,650);
  ball=new  PaperBall(200,450,40);
  var render=Render.create({
	  element:document.body,engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
 
  ground.display();
  dustbinObj.display();
  ball.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}


