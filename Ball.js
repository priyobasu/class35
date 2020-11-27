class Ball{
    constructor(x,y,dia)
    {
        var options={
            
        'density':1.0,
        'frictionAir':0.005
        }
        this.body=Bodies.circle(x,y,dia,options);
        this.radius=dia/2;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("lime");
        ellipse(0,0,this.radius);
        pop();
    }
};