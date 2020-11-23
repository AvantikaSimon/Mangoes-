class Mango{
    constructor(x, y, radius){
    var options = {
      isStatic:true
    }    
    this.body = Bodies.ellipse(x, y, 25);
    this.image = loadImage("Plucking mangoes/mango.png");
    World.add(world, this.mango);
    }
    display(){
    imageMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(this.mango.position.x, this.mango.position.y, 25);
    }
    }