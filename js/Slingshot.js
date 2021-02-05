class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.1,
      length: 50,
    };
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    this.pointB = pointB;
  }

  display() {
    if (this.chain.bodyA) {
      var pointA = this.chain.bodyA.position;
      // var pointB = this.chain.pointB.position;
      strokeWeight(4);
      line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
  }

  fly() {
    this.chain.bodyA = null;
  }
}
