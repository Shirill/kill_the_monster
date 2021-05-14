class Monster {
    constructor(x, y,width,height) {
      var options = { 
        density: 1, 
        frictionAir: 1};

       
        
    this.image=loadImage("images/Monster-01.png");
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      imageMode (CENTER);
      console.log("monster");
      image(this.image,this.body.position.x, this.body.position.y,this.width,this.height);
      pop();
    }
  }
  