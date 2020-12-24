class Chain{
   //constructor
   constructor(bodyA,bodyB){
        var options={
            //bird and log respectively
            bodyA:bodyA,
            bodyB:bodyB,
            //stiffness
            stiffness:0.04,
            //height
            length:10
        }
        //creating constraint
        this.chain=Constraint.create(options);
        //adding chain to world
        World.add(world,this.chain);
        }

        display(){
            //position of point a and point b
            var pointA=this.chain.bodyA.position;
            var pointB=this.chain.bodyB.position;
            //stroke width
            strokeWeight(4);
            //creating line
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
}