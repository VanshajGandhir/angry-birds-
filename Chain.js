class Chain {
    constructor(objA,ptB){
        var options={
            bodyA:objA,
            pointB:ptB,
            stiffness:0.04,
            length:10
        }
        this.sling1Img=loadImage("sprites/sling1.png");
        
        this.sling3Img=loadImage("sprites/sling3.png");
        
        this.sling2Img=loadImage("sprites/sling2.png");

        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        image(this.sling1Img,200,20);
        image(this.sling2Img,172,20);
        stroke(80,39,14);
        push();
        if (this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.chain.pointB;
            if (pointA.x<220){      
                strokeWeight(7);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                image(this.sling3Img,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                image(this.sling3Img,pointA.x+25,pointA.y-10,15,30);   
            }
            pop();
        }
    }
    fly(){
        this.chain.bodyA = null;
        
    }
    attach(vansh){
        this.chain.bodyA  = vansh;
    }
    
}
