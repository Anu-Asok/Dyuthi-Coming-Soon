var n = 80, lantern = [], mSize = 100, bg, crowd, timer = 0, people, dyuthi, logo;

function setup() {
  var x=window.innerWidth;
  var y=window.innerHeight
  if (x<1000){
    var myCanvas=createCanvas(x,y+1);
    mSize = width/8;
  }
  else{
    var myCanvas=createCanvas(x-15,y);
    mSize = width/16;
  }
  myCanvas.parent('can');
  for(var i=0;i<n;i++)
    lantern.push(new Lantern());
  for(var i=0;i<n;i++)
  {
    lantern[i].img = loadImage("data/"+int(random(4))+".png");
    lantern[i].w = (i+1)*mSize/n
    lantern[i].vel.y = -lantern[i].w/100;
  }
  bg = loadImage("data/bg.png");
  people = loadImage("data/people.png");
  dyuthi = loadImage("data/dyuthi.png");
  logo = loadImage("data/logo.png")
  frameRate(30);
}

function draw() {
  image(bg,0,0,width,height);

  var wind = mouseX - width/2;
  wind/=50000;
  if(wind>0.01)
    wind = 0.01;
  if(wind<-0.01)
    wind = -0.01;

  for(var i=0;i<n;i++)
  {
    lantern[i].display();
    lantern[i].upperbound();
    lantern[i].update();
    lantern[i].acc.set(wind*lantern[i].w,0);
  }
  var x=window.innerWidth;
  if (x<1000){
    var ratio=x/1000+0.2;
    image(dyuthi, width/2 - dyuthi.width*ratio/2 ,height/2 - dyuthi.height*ratio/2,dyuthi.width*ratio,dyuthi.height*ratio);
    image(logo, 10 ,55,logo.width*ratio,logo.height*ratio);
  }else{
    image(dyuthi, width/2 - dyuthi.width/2 ,height/2 - dyuthi.height/2,dyuthi.width,dyuthi.height);
    image(logo, 0 ,13,logo.width,logo.height);
    image(people, 0,height - people.height,people.width,people.height);
  }
  noStroke();
  setTimeout(function(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("page-top").style.display = "block";
  },3000);
}

function Lantern()
{
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.w = random(0,100);
  this.v = 0;
  this.img;

  this.display = function() {
    image(this.img,this.pos.x, this.pos.y, this.w, this.w);
  }

  this.upperbound = function()
  {
    if(this.pos.y < -this.w)
      this.pos.y = height + this.w;
    if(this.pos.x>width+this.w)
      this.pos.x = -this.w
    if(this.pos.x<-this.w)
      this.pos.x = width+this.w;
  }

  this.update = function()
  {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    if(this.vel.x>2)
      this.vel.x = 2;
    if(this.vel.x<-2)
      this.vel.x = -2;
    this.acc.mult(0);
    this.vel.x*=0.9;
  }
}
