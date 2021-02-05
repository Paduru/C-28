const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, groundObject, launcherObject;
var mango1,
  mango2,
  mango3,
  mango4,
  mango5,
  mango6,
  mango7,
  mango8,
  mango9,
  mango10,
  mangos;
var world, boy, stone, slingshot;

function preload() {
  boy = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  mango1 = new Mango();
  mango2 = new Mango();
  mango3 = new Mango();
  mango4 = new Mango();
  mango5 = new Mango();
  mango6 = new Mango();
  mango7 = new Mango();
  mango8 = new Mango();
  mango9 = new Mango();
  mango10 = new Mango();

  mangos = [
    mango1,
    mango2,
    mango3,
    mango4,
    mango5,
    mango6,
    mango7,
    mango8,
    mango9,
    mango10,
  ];

  treeObj = new tree(1050, 600);
  groundObject = new ground(width / 2, 600, width, 20);

  stone = new Stone(250, 340);
  slingshot = new SlingShot(stone.body, { x: 240, y: 420 });

  Engine.run(engine);
}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy, 200, 340, 200, 300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);

  stone.display();

  slingshot.display();

  groundObject.display();
}

function mouseDragged() {
  Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

function detectcollision(stoneObj, mangoObj) {
  var fruitPos = mangoObj.body.position;
  var stonePos = stoneObj.body.position;

  var distance = dist(stonePos.x, stonePos.y, fruitPos.x, fruitPos.y);
  if (distance <= mangoObj.r + 25) {
    Body.setStatic(mangoObj.body, false);
  }
}
