var dog,sadDog,happyDog;
var food//,img
var database
var foodObj
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  // img = loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400)
database = firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
var button = createButton("ADD FOOD")
button.position(800,200)
var button1 = createButton("FEED DOG")
button1.position(720,200)

var name = createInput("name the dog")
name.position(500,100)

button.mousePressed(function(){
  addFood()
  food.updateFood(foodStock)
})

food = new Food()


}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
 function feed(){
   dog.addImage(happyDog)
   if (foodObj.readFood()<= 0 ){
foodObj.updateFood(foodObj.readFood()*0)
   }
   else{
     foodObj.updateFood(foodObj.readFood()-1)
   }

 }  


//function to add food in stock
function addFood(){
  food++
  database.ref("/").update({
    foodStock:food
  })

}

