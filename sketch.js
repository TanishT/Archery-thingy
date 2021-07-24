const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;

let engine, world;
var canvas;
var player1, playerBase1, playerArcher1;
var computer1, computerBase1, computerArcher1;
var arrowC, arrowP;
var move ;
var angle,angleValue;
var UP;
var DOWN;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase1 = new PlayerBase(300, random(450, height - 300), 180, 150);
  player1 = new Player(285, playerBase1.body.position.y - 153, 50, 180);
  playerArcher1 = new PlayerArcher(340, playerBase1.body.position.y -180, 120, 120);
  angle = -PI/4;
 
  //Create Player Archer Object


  computerBase1 = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer1 = new Computer(
    width - 280,
    computerBase1.body.position.y - 153,
    50,
    180
  );
  computerArcher1 = new ComputerArcher(
    width - 340,
    computerBase1.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  arrowP = new PlayerArrow(playerArcher1.body.position.x, playerArcher1.body.position.y,120,20);
  arrowC = new ComputerArrow(computerArcher1.body.position.x,computerArcher1.body.position.y,120,20);
    
  
}

function draw() {
  background(180);

  //if (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){

    //Call shoot() function and pass angle of playerArcher
    arrowP.shoot(playerArcher1.body.angle);

  }

  

  arrowP.display();
  arrowC.display();

  playerBase1.display();
  player1.display();
  

  computerBase1.display();
  computer1.display();
  
  playerArcher1.display();
  computerArcher1.display();

  Engine.update(engine);

}
