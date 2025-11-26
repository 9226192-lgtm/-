function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100,200,255);
  fill(200,200,255)
  square(10, 20, 150)
  
  fill(0, 0, 255)
  ellipse(60,50,10,10)
  
  fill(255, 0, 0)
  ellipse(100,50,10,10)
  
  line(60,55,85,80)
  line(100,55,85,80)
  
  fill(255,255,0)
  triangle( 15, 35,85,80,35,145)
  triangle(85,80,145,35,115,145)
  
  noStroke()
  fill(150,100,20)
  rect(455,100,50,190)
  
  fill(0,255,0)
  ellipse(450,80,200,60)
  ellipse(450,80,100,90)
  
  fill(10,30,110)
  rect(0,290,600,110)
  
  stroke(255,0,0)
  fill(250)
  ellipse(250,300,40)
  
  stroke(0)
  
  fill(0,250,0)
  ellipse(300,270,70)
  
  fill(0,0,250)
  ellipse(360,280,50)
  
  fill(250,0,0)
  ellipse(415,280,60)
  
  fill(20,10,75)
  ellipse(460,290,30)
}
