const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var n,coin;
var tyrannsorus;
var ditance=0;
function setup() {
  
	engine = Engine.create();
	world = engine.world;

  createCanvas(1400,700);
n=new Ground(700,690,1400,10);

tyrannsorus=new Ground(10,670,30,20);
f
}

function draw() {
  background(105,100,255);
  n.display();
  tyrannsorus.display(); 
  if(frameCount % 80 === 0) {
    coin=createSprite(100,random(650,530),20,20);
    coin.shapeColor="red";
    coin.lifetime=80;
    
  }
  drawSprites();
}