class PlayerArcher {
    constructor(x, y, width, height, angle) {
      var option={
        isStatic:true
      };

      this.body = Bodies.rectangle(x, y, width, height, option);
      this.image = loadImage("./assets/pArcher.png");
      this.angle = angle;
      //Matter.Body.setAngle(this.body,-PI/2);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      }

     display() {

      if(keyCode === UP_ARROW){
   
    if( move === "UP" && playerArcher1.body.angle < 1.77){
    
         playerArcher1.body.angle =playerArcher1.body.angle + 0.05;
        arrowP.body.angle =arrowP.body.angle + 0.05;
  }   
    else{
         playerArcher1.body.angle = playerArcher1.body.angle - 0.05;
         arrowP.body.angle =arrowP.body.angle - 0.05;
      
    } 
     }
      if(keyCode === DOWN_ARROW){
        
      if(move === "DOWN" && playerArcher1.body.angle >- 1.47){

        playerArcher1.body.angle  = playerArcher1.body.angle - 0.05;
        arrowP.body.angle =arrowP.body.angle - 0.05;
      
    }
      else{
           playerArcher1.body.angle = playerArcher1.body.angle + 0.05;
           arrowP.body.angle =arrowP.body.angle + 0.05;
    }
  }
      var pos = this.body.position;
      var angle = this.body.angle;
      fill("#676e6a");
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

    }
  }
  