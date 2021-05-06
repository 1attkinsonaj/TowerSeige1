class Rope {
    constructor(p_polygon, p_point) {
        var options = {
            bodyA: p_polygon,
            pointB:  p_point,
            length: 10,
            stiffness: 0.03
        }

        this.rope = Constraint.create(options);
        this.point = p_point;
        World.add(world, this.rope);
    }

    display() {
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.point;
           stroke(98, 247, 0);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
           
        }

    }


    fly() {
        this.rope.bodyA = null;
        
    }

    attach(p_body) {
        this.rope.bodyA = p_body;
        
    }

}