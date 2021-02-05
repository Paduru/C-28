class Mango {
  constructor() {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
    };
    this.x = Math.round(random(900, 1200));
    this.y = Math.round(random(150, 250));
    this.r = Math.round(random(25, 50));
    this.image = loadImage("images/mango.png");
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
  }

  display() {
    var mangoPos = this.body.position;
    push();
    translate(mangoPos.x, mangoPos.y);
    // rectMode(CENTER);
    rotate(this.body.angle);
    fill(255, 0, 255);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
