const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world
var bg;
var snow=[];
function preload(){
  bg=loadImage("snow2.jpg");
}




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(bg);
  Engine.update(engine);
if(keyCode===32){
 if(frameCount % 50===0){
snow.push(new Snow(random(800,10),20,20));
 } 
for(var a=0;a<snow.length;a++){
snow[a].display();
}
}


  drawSprites();
  

}