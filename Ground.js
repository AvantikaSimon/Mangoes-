class Ground{
    constructor(x, y, width, height){
    var options = {
      isStatic:true
    }  
      
    this.body = Bodies.rectangle(400, 395, 800, 5);
    World.add(world, this.ground);
    }
    display(){
    rectMode(CENTER);
    rect(400, 395, 800, 5);
    }
    }