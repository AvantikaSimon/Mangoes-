class Tree{
constructor(x, y, width, height){
var options = {
  isStatic:true
}
this.body = Bodies.rectangle(750, 200, 40, 350);
this.image = loadImage("Plucking mangoes/tree.png");
World.add(world, this.tree);
}
display(){
imageMode(CENTER);
}
}