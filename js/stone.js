class Stone {
  constructor(x, y) {
    this.image = loadImage("images/stone.png");
    var options = {
      isStatic: false,
      restution: 0,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);
  }
  display() {
    var Stonepos = this.body.position;
    push();
    translate(Stonepos.x, Stonepos.y);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
}
