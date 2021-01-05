
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
//var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.09;
  
  ground= createSprite(300,550,2000,10) 
  ground.velocityX = -4
  ground.x=ground.width/2
  console.log(ground.x)
  
  score = 0
  
  obstaclesGroup = createGroup();
  foodsGroup = createGroup();
  
}


function draw() {
  background("white")
  
  if(keyDown("space")){
    monkey.velocityY = -20
  }
  
  if(foodsGroup.isTouching(monkey)){
       foodsGroup.destroyEach()
      score = score+1
       }
  monkey.velocityY = monkey.velocityY + 1.5
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  switch(score){
    case 10: monkey.scale= 0.12
                      break;
    case 20: monkey.scale= 0.18
            break;
    case 30: monkey.scale= 0.2
            break;
    case 40: monkey.scale= 0.22
            break;        
  }
  
  monkey.collide(ground);
  
  drawSprites()
  obstacles()
  food()
  
  stroke("blue")
  textSize(20)
  fill("blue")
  text("Score: "+ score, 500,50)
   
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
  
}

function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(650, 380, 10,20)
    banana.addImage(bananaImage)
    banana.y = Math.round(random(320,380));
    banana.velocityX = -5
    banana.scale = 0.2
    banana.lifetime = 400;
    foodsGroup.add(banana)
  }
  
}

function obstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(650,500,10,40);
   obstacle.velocityX = -6
   obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.lifetime = 400;
    obstaclesGroup.add(obstacle);
    }


}






