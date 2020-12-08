const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	polygonimg = loadImage("sprites/polygon.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.    
    Polygon1 = new Polygon(200,399)
    box1 = new Box(200,399)


    Engine.run(engine);
}
function draw() {
    rectMode(CENTER);
    background("black");
Polygon1.display();
  box1.display();

}
/*function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
    elastic.fly();
    
  }  
*/
