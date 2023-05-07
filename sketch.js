const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {restitution:0.95}
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  ground =new Ground(200,390,800,20);
  zerben =new Ground(700, 390, 20, 400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  btn1 = createImg('up.png');
  btn1.position(200, 30);
  btn1.size(51, 50);
  btn1.mouseClicked(vForce);

  btn2 = createImg('right.png');
  btn2.position(20, 30);
  btn2.size(51, 50);
  btn2.mouseClicked(hForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  zerben.show();
  top_wall.show();
  left.show();

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
}

function vForce(){ 
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});

}

function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}