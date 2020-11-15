const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  
  var options={
    isStatic: true
  }
  ground=Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);
  
  ball=Bodies.circle(400,250,20,{restitution:1});
  World.add(world,ball);
  

}

function draw() {
  background(0);  
Engine.update(engine);

rectMode(CENTER);
fill("green");
ellipseMode(CENTER);

rect(ground.position.x,ground.position.y, 800,10);
ellipse(ball.position.x,ball.position.y,40,40);




  
}
