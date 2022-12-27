var cara_correndo, cara_correndoImg;
var zumbi, zumbiImg;
var parqueImg;
var edges;


function preload(){
  cara_correndoImg = loadImage("./assets/cara_correndo.png")
  zumbiImg = loadImage("assets/zumbi.png")
  parqueImg = loadImage("assets/parque.jpg")
}

function setup() {
  createCanvas(600,600);

  edges = createEdgeSprites()

  parque = createSprite(width/2, height/2)
  parque.addImage(parqueImg)
  parque.scale = 0.8

  cara_correndo = createSprite(450, 500)
  cara_correndo.addImage(cara_correndoImg)
  cara_correndo.scale = 0.09
}

function draw() {
  background(0); 

  if(keyDown(UP_ARROW)){
    cara_correndo.y = cara_correndo.y -3
  }

  if(keyDown(DOWN_ARROW)){
    cara_correndo.y = cara_correndo.y +3
  }
  
  if(keyDown(RIGHT_ARROW)){
    cara_correndo.x = cara_correndo.x +3
  }

  if(keyDown(LEFT_ARROW)){
    cara_correndo.x = cara_correndo.x -3
  }

  cara_correndo.collide(edges)

  zumbis()
 
  drawSprites();
}

function zumbis(){
  if(frameCount%30 === 0){
    x = random(400, 600)
    y = random(50, 550)

    zumbi = createSprite(x, y)
    zumbi.addImage(zumbiImg)
    zumbi.scale = 0.15
    zumbi.velocityX = -2
    zumbi.velocityY = random(-2,2)
  }
}