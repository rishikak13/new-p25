class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.2 ,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			imageMode (CENTER);
            image (this.image,0 ,0,100,100);
			pop()
			
	}

}