class Hand {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.hands = loadImage("assets/hands.png");
      this.shooter = loadImage("assets/shooter.png");
    }
    display() {
      if (keyIsDown(DOWN_ARROW) && this.angle<25  ) {
        this.angle += 0.3;
        console.log(this.x,this.y,angle)
      }
  
      if (keyIsDown(UP_ARROW) && this.angle>=27 ) {
        this.angle -= 0.3;
        console.log(this.x,this.y,this.angle)
      }
  
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.hands, 0, 0, this.width, this.height);
      pop();
      image(this.shooter, 73, 365, 350, 350);
      noFill();
    }
  }