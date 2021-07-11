class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
        
      }
      this.image = loadImage("block.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255
      World.add(world, this.body);
      
    }
    display(){

      if (this.body.speed > 2.5){
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5
        tint(255, this.visibility)
        image(this.image, this.body.position.x, this.body.position.y, this.width,this.height)
        pop();
      }
      else{
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.width, this.height); 
      }

    }
}