let recording = false;    
let recordFrame = 0;     
let totalFrames = 300;   

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  frameRate(30); 
  setTimeout(() => {
    recording = true;
    saveGif('과제4유정윤', 10); 
  }, 2000);
}

function draw() {

  let c1 = color(100, 200, 255);
  let c2 = color(255, 170, 200);
  let bgColor = lerpColor(c1, c2, abs(sin(frameCount * 0.01)));
  background(bgColor);

  // 나비 몸통 위치
  let bodyX = 85;
  let bodyY = 80;

  // 날개 폭(길이)
  let wingWidth = 90 + 20 * sin(frameCount * 0.07);

  // 나비 얼굴
  let faceSize = 150;
  fill(230, 200, 255);
  square(10, 20, faceSize);

  // 나비 왼쪽 눈 
  fill(0, 0, 255);
  ellipse(60,50,10,10);

  // 나비 오른쪽 눈
  fill(255, 0, 0);
  ellipse(100,50,10,10);

  // 나비 더듬이
  stroke(75,0,0);
  line(60,55,bodyX,bodyY);
  line(100,55,bodyX,bodyY);

  // 나비 왼쪽 날개(삼각형: 윗쪽-중앙-아랫쪽)
  fill(255,255,0);
  triangle(15, 35, bodyX, bodyY, bodyX - wingWidth, 145);

  // 나비 오른쪽 날개(삼각형: 중앙-윗쪽-아랫쪽)
  fill(255,255,30);
  triangle(bodyX, bodyY, 145, 35, bodyX + wingWidth, 145);

  noStroke();
  // 나뭇가지
  fill(150,100,20);
  rect(455,100,50,190);

  // 나뭇잎
  fill(0,255,0);
  ellipse(450,80,200,60);
  ellipse(450,80,100,90);

  // 바닥 
  fill(10,30,110);
  rect(0,290,600,110);

  stroke(255,0,0);
  fill(250 - 150 * abs(sin(frameCount*0.07)));
  ellipse(250 + 20 * sin(frameCount * 0.08),300,40 + 10*sin(frameCount*0.09));

  stroke(0);
  fill(0,250,0 + 80 * abs(cos(frameCount * 0.21)));
  ellipse(300,270 + 10*sin(frameCount*0.10),70 + 10*sin(frameCount*0.067));

  fill(0,0,250 + 60 * abs(sin(frameCount * 0.065)));
  ellipse(360,280,50 + 10 * cos(frameCount * 0.06));

  fill(250,0,0 + 85 * abs(sin(frameCount * 0.086)));
  ellipse(415,280 + 12*cos(frameCount*0.13),60 + 12*cos(frameCount*0.16));

  fill(20,10,75 + 100 * abs(sin(frameCount * 0.11)));
  ellipse(460,290,30 + 7*sin(frameCount * 0.16));
}
