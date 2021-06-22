var dog,dogImg,dogImg1;
var database,foodS,foodObj;
var foodStock,feed,addFood;
var fedTime,lastFed;
var garden,washroom,bedroom;
var gameState,readState;

function preload()
{
  dogImg=loadImage("./images/dogImg.png");
  dogImg1=loadImage("./images/dogImg1.png");
  bedroom=loadImage("./images/Bed Room.png");
  washroom=loadImage("./images/Wash Room.png");
  garden=loadImage("./images/Garden.png");
}

function setup() {
	createCanvas(800,400);
  database=firebase.database();

  foodObj=new Food();

 dog=createSprite(500,300,150,150);
 dog.addImage(dogImg);
 dog.scale=0.13;

 foodStock=database.ref("Food");
 foodStock.on("value",readStock);

 feed=createButton("Feed the dog");
 feed.position(700,85);
 feed.mousePressed(feedDog);

 addFood=createButton("Add milk bottles");
 addFood.position(800,85);
 addFood.mousePressed(addMilk);

 readState=database.ref("gameState");
 readState.on("value",function(data){
   gameState=data.val();
 })

}

function draw() {  
  foodObj.display();
  fedTime=database.ref("feedTime");
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  drawSprites();

}
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}
// function writeStock(x){
//   if(x<=0){
//     x=0;
//   }
//   else{
//     x=x-1;
//   }
//   database.ref("/").update({
//     Food:x
//   })
// }

function feedDog(){
  dog.addImage(dogImg1);
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  database.ref("/").update({
    Food:foodObj.getFoodStock(),
    feedTime:hour()
  })
}

function addMilk(){
 foodS++;
 database.ref("/").update({
   Food:foodS
 })
}

