const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.Constraint;

var engine, world;

var drawline;



function preload() {


}
        `   `
function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    //Matter.Mouse.create
    //const Mouse = Matter.Mouse
    //Mouse.create

    canvasmouse.pixelRatio = pixelDensity();
    /*let options = {
        Mouse: canvasmouse
    };*/
    //mConstraint = MouseConstraint.create(engine,options);
    mConstraint = MouseConstraint.create();
    World.add(world,mConstraint);


    //made new pendulum and sling
    Engine.update(engine);
    roof=new Roof(width/3,height/4,width/7,20);
    diameter=40;
    ball1=new Pendulum(width/3-diameter*2,height/4+150,diameter);
    ball2=new Pendulum(width/3-diameter*1,height/4+150,diameter);
    ball3=new Pendulum(width/3,height/4+150,diameter);
    ball4=new Pendulum(width/3+diameter*1,height/4+150,diameter);
    ball5=new Pendulum(width/3+diameter*2,height/4+150,diameter);

    rope1=new Sling(ball1.body,roof.body,-diameter*2,0);
    rope2=new Sling(ball2.body,roof.body,-diameter*1,0);
    rope3=new Sling(ball3.body,roof.body,0,0);
    rope4=new Sling(ball4.body,roof.body,+diameter*1,0);
    rope5=new Sling(ball5.body,roof.body,+diameter*2,0);
    Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background("white");
  
  roof.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
		
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
    roof.display();
    
}
function drawline(constraint)
{
	pendulumbodyposition=constraint.bodyA.position;
	roofbodyposition=constraint.bodyB.position;
	roofbodyoffset=constraint.pointB;
	roofbodyx=roofbodyposition.x+roofbodyoffset.x;
	roofbodyy=roofbodyposition.y+roofbodyoffset.y;
	line(pendulumbodybodyposition.x,pendulumbodybodyposition.y,roofbodyx,roofbodyy);

}
function mouseDragged(){
    Matter.Body.setPosition(pendulum.body,{ x: mouseX, y: mouseY });

}




 
