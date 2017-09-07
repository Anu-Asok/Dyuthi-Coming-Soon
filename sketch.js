var n = 80, lantern = [], mSize, bg, crowd, timer = 0, dyuthi, logo, gec, t = 0, wind;
function setup() {
  var x=window.innerWidth;
  var y=window.innerHeight;
  if(y<500)
    y=500;
  if (x<800){
    var myCanvas=createCanvas(x,y+1);
    mSize = width/15;
  }
  else{
    var myCanvas=createCanvas(x-15,y);
    mSize = width/25;
  }
  console.log(mSize);
  myCanvas.parent('can');
  for(var i=0;i<n;i++)
    lantern.push(new Lantern());
  for(var i=0;i<n;i++)
  {
    lantern[i].img = loadImage("data/"+int(random(4))+".png");
    lantern[i].w = (i+1)*mSize/n;
    lantern[i].vel.y = -lantern[i].w/100;
  }
  bg = loadImage("data/bg.png");
  dyuthi = loadImage("data/dyuthi.png");
  logo = loadImage("data/logo.png");
}

function draw() {
 

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
    if(this.vel.x>3)
      this.vel.x = 3;
    if(this.vel.x<-3)
      this.vel.x = -3;
    this.acc.mult(0);
    this.vel.x*=0.9;
  }
  this.applyForce = function(x)
  {
    this.acc.add(x);
  }
}
