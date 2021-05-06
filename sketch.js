const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;
var rope;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  polygon = new Polygon(200,200, 50, 50);
  rope = new Rope(polygon.body, {x: 150 ,y: 200});

 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //second group
  block1_2 = new Block(640,170,30,40);
  block2_2 = new Block(670,170,30,40);
  block3_2 = new Block(700,170,30,40);
  block4_2 = new Block(730,170,30,40);
  block5_2 = new Block(760,170,30,40);

  //second row
  block6_2 = new Block(670,130,30,40);
  block7_2 = new Block(700,130,30,40);
  block8_2 = new Block(730,130,30,40);

  //thrice row 
  block9_2 = new Block(700,90,30,40);

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block9_2.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block6_2.display();
  block7_2.display();
  block8_2.display();

  fill("grey");
  block16.display();
 

  //second group
  fill("skyblue");
  block1_2.display();
  block2_2.display();
  block3_2.display();
  block4_2.display();
  block5_2.display();
  polygon.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });

} 


//create mouseReleased function here
function mouseReleased() {
 rope.fly();
}

//create keyPressed function here
function keyPressed() {
  if (keyCode === 32) {
    rope.attach(polygon.body);
  }
}
