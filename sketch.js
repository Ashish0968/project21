var  wall,thickness;
var bullet,speed,weight ;

function setup() {
  createCanvas(1400,400);

  thickness = random(22,83)

  weight = random(400,1500);
  speed = random(223,321);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white" ;
  bullet.velocityX = speed ;
 

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);


}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)) 
  {
    bullet.velocityX = 0 ;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness) ;


    if (damage> 10){
      wall.shapeColor = color(255,0,0)
      
     }

    

    if(damage < 100){
      wall.shapeColor = color(0,255,0)
      
     }
   }

  drawSprites();
}


function hasCollided(Ibullet,Iwall){
  bulletRightEdge = Ibullet.x+Ibullet.width;
  wallLeftEdge = Iwall.x ;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true ;
  }
  return false ;
}