class Box{
    constructor(x,y){
      var   Option = {
        restitution:0.8,
        friction:1.0,
        density:1.0
        } 
        this.Body=Bodies.rectangle(x,y,20,40,Option)
       
        this.width = 20;
        this.height = 40;
        Matter.World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      Pop();
    }
} 