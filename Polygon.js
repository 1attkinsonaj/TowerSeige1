class Polygon{
    constructor(p_x,p_y, width, height){
        var options = {
            'restitution':0.8,
            'friction':5.0,
            'density':10
        }
        this.body = Bodies.rectangle(p_x, p_y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
       
    }
        

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
        // var pos= this.body.position;
        // push();
        // translate(pos.x, pos.y);
        // rotate(angle);
        // rectMode(CENTER);
        // rect(0,0,this.width, this.height);
        // pop();
    }
}