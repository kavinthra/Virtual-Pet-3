class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("images/Milk.png")
    }
    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }
    getFedTime(lastFed){
        this.lastFed=lastFed;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }
    getFoodStock(){
        return this.foodStock;
    }
    bedroom(){
        background(bedroom,550,500);
    }
    garden(){
        background(garden,550,500);
    }
    washroom(){
        background(washroom,550,500);
    }
    display(){
    background(46,139,87);
    fill("white");
    stroke("black");
    if(lastFed>=12){
    text("Last Fed:"+lastFed%12+"p.m",350,30);

    }
     else if(lastFed==0){
    text("Last Fed:12 a.m",350,30);
    }
    else{
    text("Last Fed:"+lastFed+"a.m",350,30);
     }
        var x=80;
        var y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}