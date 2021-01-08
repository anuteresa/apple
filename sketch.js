
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject;
var apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12;
var world,girl;


function preload(){
  girl=loadImage("images/girl1.png");
  girl.scale=.05;
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	apple1=new apple(1100,100,30);
  apple2=new apple(1170,130,30);
	apple3=new apple(1010,140,30);
	apple4=new apple(1000,70,30);
	apple5=new apple(1100,70,30);
	apple6=new apple(1000,230,30);
	apple7=new apple(900,230,40);
	apple8=new apple(1140,150,40);
	apple9=new apple(1100,230,40);
	apple10=new apple(1200,200,40);
	apple11=new apple(1120,50,40);
	apple12=new apple(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background("white");
  
 
  image(girl ,200,340,200,300);
  
  

  treeObj.display();
  stoneObj.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  apple11.display();
  apple12.display();
  stoneObj.display();

  groundObject.display();
  
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}


  