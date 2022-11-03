const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img
var canvas
var balls = [] 
var angle

function preload(){

bg_img = loadImage("./assets/bg_img.png")



}

function setup() {
 canvas =  createCanvas(1000,750);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 45
  
  hand = new Hand(202, 520, 310, 310, angle)
}


function draw() 
{
  background(51);
 image(bg_img,0,0,width,height)

  Engine.update(engine);


 hand.display()







  
}

