
var trex ,trex_running,ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(25,150,10,10);
 trex.addAnimation("treximage",trex_running);
 trex.scale=0.5;
 ground=createSprite(10,180,400,20);
 ground.addAnimation("groundimage",ground1);
 invisibleground=createSprite(200,190,400,20);
invisibleground.visible=false;
}

function draw(){
  background("pink")
  ground.velocityX=-2;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyWentDown("space")&& trex.y>=150){
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5;
  trex.collide(invisibleground);
  drawSprites();
}
