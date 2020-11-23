
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boy_image
var stone1, stone1_image
var mango1, mango2, mango3, mango4
var tree1
var ground
var constraint1

function preload() {
boy_image = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	boy = Bodies.rectangle(140, 350, 20, 50);
	boy.setImage("boy", boy_image);
	World.add(world, boy);
	
	stone1 = new Stone();
	mango1 = new Mango(790, 50, 20, 30);
	mango2 = new Mango(765, 20, 20, 30);
	mango3 = new Mango(753, 86, 20, 30);
	mango4 = new Mango(760, 120, 20, 30);
	tree1 = new Tree();
	ground = new Ground();

	constraint1 = new constraint(boy.body, {x:145, y:355});

	Engine.run(engine);
  
}

function draw() {
  background("white");
Engine.update(engine);
  
detectCollision(stone1, mango1);
detectCollision(stone1, mango2);
detectCollision(stone1, mnago3);
detectCollision(stone1, mango4);

boy.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
tree1.display();
ground.display();

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
	}
	
	function mouseReleased() {
	constraint1.fly();
	}

function detectCollision(stone1, body2) {
if(stone.x = body2.position.x && stone.x >= body2.position.y){
Matter.Body.setStatic(body2.body, true);
Matter.Body.setPosition(stone1, {x:100, y:350});
}
}
