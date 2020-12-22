/*mam dont know why its showing error plz check i have not even started properly yet
and its showing error...*/
var world
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  ground1 = new Ground(400, 370, 900, 20);
}

function draw() {
  engine = Engine.create();
  world = engine.world
  background(255,255,255);  
  drawSprites();
}
