class Stone{
    constructor(x, y, width, height){
    var options = {
      isStatic:true,
      friction:1,
      density:1.2 
    }

    this.body = Bodies.rectangle(100, 350, 20, 40);
    this.image = loadImage("Plucking mangoes/stone.png");
    World.add(world, this.stone);
    }
    display(){
    imageMode(CENTER);
    }
    }