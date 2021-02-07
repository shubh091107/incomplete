class Food{
    constructor(){
        this.food = createSprite(720,220,70,70)
        this.image = loadImage("Images/Milk.png")
        this.foodStock= 12
      }
    display(){
      var  x = 80 
      var  y=100
      imageMode(CENTER)
      image(this.image,720,220,70,70)
    }
    readFood(){
      var gf = database.ref("foodStock")
          gf.on("value",function(data){
              gf = data.val()
        })
        }
     updateFood(update){
      database.ref("/").update({
      foodStock: update
      })
}


}
        