var movingRect, fixedRect;
function setup() {
  createCanvas(1200,800);

  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect= createSprite(600, 200, 100, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  gameObject1= createSprite(200, 200, 100, 50);
  gameObject1.shapeColor="green";
  gameObject1.debug=true;

  gameObject2= createSprite(400, 200, 100, 50);
  gameObject2.shapeColor="green";
  gameObject2.debug=true;

  gameObject3= createSprite(800, 200, 100, 50);
  gameObject3.shapeColor="green";
  gameObject3.debug=true;

  gameObject4= createSprite(100, 400, 100, 50);
  gameObject4.shapeColor="blue";
  gameObject4.debug=true;
  gameObject4.velocityX=3;


  gameObject5= createSprite(1000, 400, 100, 50);
  gameObject5.shapeColor="yellow";
  gameObject5.debug=true;
  gameObject5.velocityX=-3;
  





}

function draw() {
  background("black");  

  //To find distance between the objects
console.log(fixedRect.x-movingRect.x)

movingRect.x=mouseX;
movingRect.y=mouseY;

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 }
 else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
 }


 if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
 }
 else{
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";
 }
 
 if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor="red";
  gameObject2.shapeColor="red";
 }
 else{
  movingRect.shapeColor="green";
  gameObject2.shapeColor="green";
 }


 if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor="red";
  gameObject3.shapeColor="red";
 }
 else{
  movingRect.shapeColor="green";
  gameObject3.shapeColor="green";
 }

 bounceOff(gameObject4,gameObject5);
  drawSprites();
} 

