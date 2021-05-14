class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 1};
        
    this.image=loadImage("images/Superhero-01.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      //var angle = this.body.angle;
      push();
     
      imageMode (CENTER);
      image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
    }
  }
  