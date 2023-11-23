/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
var c = canvas.getContext("2d");




canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if(canvas.width/canvas.height>2){
  canvas.width = canvas.height*2
}else{
  canvas.height = canvas.width/2
}




document.getElementById('canvas_div_no_cursor').style.cursor = "none";

var Scale = Math.sqrt(Math.PI/(2000*1000)*canvas.height*canvas.width)

var FramesPerSecond = 60
var time = 1000 / FramesPerSecond;
var timeSec = 1 / FramesPerSecond;

var waves = []
var wavecount = 0 // 0

var MousX = 0;
var MousY = 0;

var timeCount = 0; //total time Passed

var frameCount = 0; // total Frams passed

var BullProp = {
  speed: 1000,
  size: 10,
  Damage: 10,
};

var Player = {
  x: canvas.width/2,
  y: canvas.height/2,
  xv: 0,
  yv: 0,
  Vkonst:500*Scale,
  r: 10*Scale,
  Hp: 100,
  xPress: 0,
  yPress: 0,
  timeC:0,
  lifes:10,
  Iframes:1,
  IframesC:2,
  ParReset:false,

  collissison: function () {
    if (Player.x + Player.xv * timeSec - Player.r < 0) {
      Player.x = Player.r;
      Player.xv = 0;
    }
    if (Player.x + Player.xv * timeSec + Player.r > canvas.width) {
      Player.x = canvas.width - Player.r;
      Player.xv = 0;
    }

    if (Player.y + Player.yv * timeSec - Player.r < 0) {
      Player.y = Player.r;
      Player.yv = 0;
    }
    if (Player.y + Player.yv * timeSec + Player.r > canvas.height) {
      Player.y = canvas.height - Player.r;
      Player.yv = 0;
    }
  },
};

var audioNight = new Audio("Night_of_Nights_Flowering_nights.mp3")
var audioFlandre = new Audio("Flandre's Theme - U.N. Owen was her_.mp3")
var audioDeath = new Audio("mixkit-arcade-game-explosion-1699.wav")

audioNight.volume = 0.05
audioFlandre.volume = 0.05
audioDeath.volume= 0.05

var Colors = {
  EBullet: [0, 255, 0, 1], // Enemy basic
  EBasic: [255, 0, 0, 1], // Enemy dash
  ECarge: [255, 100, 233, 1], // Enemy carge
  ESpawn: [0, 255, 0, .5], // Enemy spawn
  ESpawnBullet: [255,255,255,.5],
//
  PColor: [255, 255, 255, 1],
  PBullet: [255, 255,  0,1],
  PHurt:[0, 0, 255, 1],
//

  BackGround: [0, 0, 0, .5],
  Change :0.01,
  ChangeTF:false

};



var entities = [];




bullets = [];
class Bullets {
  constructor(x, y, xv, yv, r, Velocity) {
    this.x = x; // X Position
    this.y = y; // Y Position
    this.yv = yv; //  X Velocity
    this.xv = xv; //  Y Velocity
    this.r = r*Scale; // colision Radius
    this.Velocity = Velocity*Scale;
  }
  timeStep() {
    this.x += this.xv * timeSec;
    this.y += this.yv * timeSec;
  }
  draw() {
    c.beginPath();
    c.fillStyle = "rgba(" + Colors.PBullet + ")";
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }
  collison(j) {
    if (
      this.x + this.r < 0 ||
      this.x - this.r > canvas.width ||
      this.y + this.r < 0 ||
      this.y - this.r > canvas.height
    ) {
      bullets.splice(j, 1);

      return -1;
    }

    if (entities.length != 0) {
      for (i = 0; i < entities.length; i++) {
        let xdis = this.x - entities[i].x;
        let ydis = this.y - entities[i].y;
        let distance = Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));

        if (
          entities[i].constructor.name != "EnemyBullet" &&
          entities[i].spawn <= 0 &&
          distance < entities[i].r + this.r
        ) {
          entities[i].Hp -= BullProp.Damage;
          if (entities[i].Hp < 0) {
            entities.splice(i, 1);
          }

          bullets.splice(j, 1);

          return -1;

        }
      }
      return 0;
    }
    return 0;
  }

  Direction() {
    let MousDisX = MousX - Player.x;
    let MousDisY = MousY - Player.y;
    
    let Alpha = Math.atan2(MousDisY, MousDisX);
    this.xv = Math.cos(Alpha) * this.Velocity;
    this.yv = Math.sin(Alpha) * this.Velocity;
  }
}

var EndDiff = 0;
var Difficulti={
  x: canvas.width/2,
  y: canvas.height/2,
  xw: 500,
  yw: 100,
  space: 30,
  Dif1: 50,
  Dif2: 15,
  Dif3: 5,
  Dif4: 1,
  DifM: true,
  swell: false,
  swellsize: 10,
  Xswell: 0,
  Yswell:0,
  swelltime:0,
  currentLives: 0,



}

var cardProp = {
  xw: 500,
  yw: 100,
  space: 60,
  swellsize: 20,
  Xswell : 0,
  Yswell : 0,
  swelltrue : false,
  swelltime: 0,
  cardNumber: 4
}



cards = []
class Card{
  constructor(text,description,value,bool){

    this.text = text;
    this.description = description;
    this.value = value
    this.restore = value
    this.bool = bool
  }

  main(){} 
  execution(){}
  Restor(){
  this.value = this.restore
  this.bool = false
}
}


var Store = {
  PlayerR: Player.r,
  ColorsBackGround : Colors.BackGround[3],
  FramesPerSecondS : FramesPerSecond,
  PlayerVkonst   : Player.Vkonst,
  cardPropNumber :cardProp.cardNumber,
  BullPropDamage:BullProp.Damage,
  ColorsStore :Object.assign({},Colors),
  ResetDebuffs(){

    Player.r =this.PlayerR
    Colors.BackGround[3]=this.ColorsBackGround
    FramesPerSecond = this.FramesPerSecondS
    time = 1000 / FramesPerSecond;
    timeSec = 1 / FramesPerSecond;
    Player.Vkonst=this.PlayerVkonst 
    cardProp.cardNumber = this.cardPropNumber
    BullProp.Damage = this.BullPropDamage
    console.log(Colors,this.ColorsStore)
    Colors =Object.assign({},this.ColorsStore) 
    
    

  }
}
console.log(Colors,Store.ColorsStore)

/**/
cards.push(new Card("12 donuts","makes your character bigger"))
cards[cards.length-1].main= function(){
  
  Player.r *=1.5
}


cards.push(new Card("washed","meany colores"))
cards[cards.length-1].main= function(){
 
  Colors.BackGround[3] *= 0.2
}

cards.push(new Card("washed","meany colores"))
cards[cards.length-1].main= function(){
 
  Colors.BackGround[3] *= 0.2
}

cards.push(new Card("this 3 should do \n something","does something"))
cards[cards.length-1].main= function(){
  for(const key in Colors){
    for(i=0;i<3;i++){
      
      
      Colors[key][i]=255-Colors[key][i]
    }
}
}

cards.push(new Card("shitty computer","half frames"))
cards[cards.length-1].main= function(){
  FramesPerSecond /=2
  time = 1000 / FramesPerSecond;
  timeSec = 1 / FramesPerSecond;
  
}
cards.push(new Card("100 energy drink","Speeds you up dramatically"))
cards[cards.length-1].main= function(){
  Player.Vkonst=2000*Scale
 
}
/*
cards.push(new Card("the better controls","invers controls"))
cards[cards.length-1].main= function(){
  Player.Vkonst*=-1
}
*/
cards.push(new Card("this 4 \n should do something","halfs card options"))
cards[cards.length-1].main= function(){
  if(cardProp.cardNumber >=2)
  cardProp.cardNumber = Math.round(cardProp.cardNumber/2)
}

cards.push(new Card("Do you like partying","canges RGB values constantly"))
cards[cards.length-1].main= function(){
Colors.Change *= 2
Colors.ChangeTF = true

}

cards.push(new Card("Do you like partying","canges RGB values constantly",))
cards[cards.length-1].main= function(){
Colors.Change *= 2
Colors.ChangeTF = true

}

cards.push(new Card("Simp for Enemies","Bullets do less Damage",0.01,false))
cards[cards.length-1].main= function(){
BullProp.Damage *=0.75

}



cards.push(new Card("blindess","Reduces your Vision",canvas.width,false))

cards[cards.length-1].main= function(){

  this.bool = true
  this.value*= 0.9


}
cards[cards.length-1].execution= function(){

  c.fillStyle = "rgba("+Colors.BackGround[0]+","+Colors.BackGround[1]+","+Colors.BackGround[2]+","+1+")"
  c.beginPath()
  c.arc(Player.x,Player.y,canvas.width*2,0,Math.PI*2,false)
  c.arc(Player.x,Player.y,this.value,0,Math.PI*2,true)
c.fill()







}



cards.push(new Card("Dark mist","???????????????",canvas.width/10,false))

cards[cards.length-1].main= function(){

  this.bool = true
  this.value*= 1.1


}
cards[cards.length-1].execution= function(){

  c.fillStyle = "rgba("+Colors.BackGround[0]+","+Colors.BackGround[1]+","+Colors.BackGround[2]+","+1+")"
  c.beginPath()

  c.arc(Player.x,Player.y,this.value,0,Math.PI*2,true)
  c.fill()





}



cards.push(new Card("Ants","???????????????",0.005,false))

cards[cards.length-1].main= function(){

  this.bool = true
  this.value*=2


}
cards[cards.length-1].execution= function(){


let x  = canvas.width/100
let y =  canvas.width/100
c.fillStyle = "rgba(255,255,255,1)" //"rgba("+Colors.PColor[0]+","+Colors.PColor[1]+","+Colors.PColor[2]+","+1+")"
for(i=0;i<100;i++){
  for(j=0;j<100;j++){
    if(Math.random()<this.value){
      c.fillRect(i*x,j*y,x,y)
    }
  
  }
    
}
  

}


cards.push(new Card("Ants but better","???????????????",0.005,false))

cards[cards.length-1].main= function(){

  this.bool = true
  this.value*=2


}
cards[cards.length-1].execution= function(){


let x  = canvas.width/100
let y =  canvas.width/100
c.fillStyle = "rgba("+1/Colors.PColor[0]*255+","+1/Colors.PColor[1]*255+","+1/Colors.PColor[2]*255+","+1+")"
for(i=0;i<100;i++){
  for(j=0;j<100;j++){
    if(Math.random()<this.value){
      c.fillRect(i*x,j*y,x,y)
    }
  
  }
    
}
  

}





cards.push(new Card("Not  Visual","XD XD XD XD XD",0.005,false))

cards[cards.length-1].main= function(){

  this.bool = true
audioFlandre.play()


}
cards[cards.length-1].execution= function(){



}


cards.push(new Card("Don't Take this card","Really don't!!!!!",0.005,false))

cards[cards.length-1].main= function(){





}
cards[cards.length-1].execution= function(){



}
  














cards.push(new Card("filler class"))
cards[cards.length-1].main= function(){
  
}

