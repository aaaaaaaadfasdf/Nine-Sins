let startmenu = true;
let activCard = [];
let timeCurser =0

update();


function update() {

  timeCurser += timeSec

 let startTime = new Date(); 

 if(Difficulti.DifM == true){

  startscreen()
  Curser(timeCurser,"rgba(255,0,0,1)")
  
 }else{
  if (entities.length == 0) {

    if(wavecount == 8){
      endScreen()
    }
     else if (startmenu == true) {
      menuStart();

    } else {
      menu();
      Curser(timeCurser,"rgba(255,255,255,1)")
      
    }
  } else {
    game();
    Curser(timeCurser,"rgba("+Colors.PColor+")")

  }}

 

  let endTime = new Date();
  let timeElapsed = endTime - startTime;
  //console.log(timeElapsed)
  setTimeout(update, time-timeElapsed);
}

function game(){
  Player.IframesC += timeSec
  frameCount ++
  timeCount = frameCount * timeSec;

  if(Colors.ChangeTF == true){
    ColorChange(Colors.Change)
  }
  c.fillStyle = "rgba(" + Colors.BackGround + ")";
  c.fillRect(0, 0, canvas.width, canvas.height);
  Player.timeC +=timeSec
  if (Player.timeC>1/10) {
    Player.timeC=0
    bullets.push(
      new Bullets(Player.x, Player.y, 0, 0, BullProp.size, BullProp.speed)
    );
    bullets[bullets.length-1].Direction();
  }

if(entities.length!=0){
  for (let i = entities.length - 1; i > -1; i--) {
    let entity = entities[i];

    if (entity.spawn > 0) {

      entity.Spawn(0);
      entity.spawn -= timeSec;
    }
  }


  for (let i = entities.length - 1; i > -1; i--) {
    let entity = entities[i];

    if (entity.spawn <= 0) {
      entity.collison(i);
      entity.draw();
      entity.timeStep();
      entity.main();
    } 
  }
}

  for (let i = 0; i < bullets.length; i++) {
    let bullet = bullets[i];

    i += bullet.collison(i);
    bullet.draw();
    bullet.timeStep();
  }

  PlayerMoveKey();
  Player.collissison();
if(Player.IframesC<Player.Iframes){


  c.fillStyle = "rgba(" + Colors.PHurt[0] + "," + Colors.PHurt[1] + "," + Colors.PHurt[2] + "," +   (timeCount%0.5)*2 + ")";

}else{
c.fillStyle = "rgba(" + Colors.PColor + ")";
}





let fontSize = 40; // Adjust this value to change the font size
let fontFamily = "Times New Roman";

c.font = fontSize + "px " + fontFamily;
c.fillText(
  "Lifes "+Player.lifes,
  canvas.width / 2 ,
  40,
  400);

  c.fillRect(
    Player.x - Player.r,
    Player.y - Player.r,
    Player.r * 2,
    Player.r * 2
  );




fontSize = 40; // Adjust this value to change the font size
 fontFamily = "Times New Roman";
c.font = fontSize + "px " + fontFamily;
c.fillStyle = "rgba("+Colors.PColor+",1)";
let a = wavecount+1
c.fillText(
  "Waves "+a,
  canvas.width / 2-2 ,
  80,
  400);

  
CardExecution()


if(Player.ParReset == true){
  
  if(Player.lifes <=1){
    Reset()
  }else{
  ParReset()
  }
  Player.ParReset  = false
}



}



function menuStart() {
  activCard = []
  startmenu = false;
  


  for (i = 0; i < cardProp.cardNumber; i++) {
    activCard.push(cards[Math.floor((cards.length - 1) * Math.random())]);
  }
}


function menu() {
  frameCount += 1;
  timeCount += frameCount * timeSec;
  c.fillStyle = "rgba(0,0,0,1)";
  c.fillRect(0, 0, canvas.width, canvas.height);


  

  if (cardProp.swelltrue == true) {
    if(cardProp.swelltime<1){
      cardProp.swelltime += timeSec * 10;
  }
    c.fillStyle = "rgba(100,100,100)";
    c.fillRect(
      cardProp.Xswell - cardProp.xw / 2 - (cardProp.swellsize * cardProp.swelltime) / 2,
      cardProp.Yswell - cardProp.yw / 2 - (cardProp.swellsize * cardProp.swelltime) / 2,
      cardProp.xw+(cardProp.swellsize * cardProp.swelltime),
      cardProp.yw+(cardProp.swellsize * cardProp.swelltime)
    );
  }else{
    cardProp.swelltime = 0
  }


  for (i = 0; i < activCard.length; i++) {
    let y =
      canvas.height / 2 +
      (cardProp.yw + +cardProp.space - cardProp.space / activCard.length) *
        (-activCard.length / 2 + i);
    c.fillStyle = "rgba(100,100,100,1)";
    c.fillRect(
      canvas.width / 2 - cardProp.xw / 2 + 10,
      y + 10,
      cardProp.xw,
      cardProp.yw
    );
    c.fillStyle = "rgba(255,255,255,1)";
    c.fillRect(canvas.width / 2 - cardProp.xw / 2, y, cardProp.xw, cardProp.yw);
    let fontSize = 24; // Adjust this value to change the font size
    let fontFamily = "Times New Roman";
    // Set the font
    c.font = fontSize + "px " + fontFamily;
    c.fillStyle = "rgba(0,0,0,1)";
    c.fillText(
      activCard[i].text,
      canvas.width / 2 - cardProp.xw / 2 + 10,
      y + (cardProp.yw / 5) * 2,
      cardProp.xw
    );
    c.fillText(
      activCard[i].description,
      canvas.width / 2 - cardProp.xw / 2 + 10,
      y + (cardProp.yw / 5) * 4,
      cardProp.xw
    );
  }
 

}



function startscreen(){
c.fillStyle = "rgba(0,0,0,.1)";
c.fillRect(0, 0, canvas.width, canvas.height);


c.fillStyle = "rgba(255,255,255,1)"
let fontSize = 80; // Adjust this value to change the font size
let fontFamily = "Times New Roman";

c.font = fontSize + "px " + fontFamily;
c.fillText("Nine Sins",(canvas.width-c.measureText("Nine Sins").width)/2,canvas.height/8)


c.fillStyle = "rgba(255,255,255,1)"
fontSize = 40; // Adjust this value to change the font size
 fontFamily = "Times New Roman";

c.font = fontSize + "px " + fontFamily;
let myString ="A forgotten prophecy unveils the imminent awakening of the Nine Sins,"
c.fillText(myString,(canvas.width-c.measureText(myString).width)/2,canvas.height*85/100)
myString ="but not mutch is known about them... this is a changee"
c.fillText(myString,(canvas.width-c.measureText(myString).width)/2,canvas.height*90/100)
myString ="{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}  "
c.fillText(myString,(canvas.width-c.measureText(myString).width)/2,canvas.height*95/100)

myString ="{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}  "
c.fillText(myString,(canvas.width-c.measureText(myString).width)/2,canvas.height*5/100)

let {x,y,xw,yw,space} = Difficulti
for(i=0;i<4;i++){
  c.fillStyle = "rgba(100,100,100)"
  c.fillRect(x-xw/2,y+(yw+space-space/4)*(i-2),xw,yw)
 
 
}
  
let {Xswell,Yswell,swellsize,swelltrue} = Difficulti
let t  = Difficulti.swelltime
if(swelltrue  == true ){

c.fillStyle = "rgba(255,255,255)"
c.fillRect(Xswell-swellsize*t,Yswell-swellsize*t,swellsize*2*t+xw,swellsize*2*t+yw)
if(Difficulti.swelltime<1){
Difficulti.swelltime+=timeSec*10
}
}else{
  Difficulti.swelltime=0 
}


for(i=0;i<4;i++){
 
  c.fillStyle = "rgba(0,0,0,1)"
  let fontSize = 40; // Adjust this value to change the font size
  let fontFamily = "Times New Roman";
  
  c.font = fontSize + "px " + fontFamily;
 let L = 0
  if(i==0){
     L = Difficulti.Dif1
  }else if(i==1){
     L = Difficulti.Dif2
  }else if(i==2){
     L = Difficulti.Dif3
  }else if(i==3){
     L = Difficulti.Dif4
  }

  c.fillText("You have "+ L +" lives",x-xw/2+40,y+(yw+space-space/4)*(i-2)+yw/2+20,xw,yw)
 
}


}


let aa =0
function endScreen(){
  c.fillStyle = "rgba(0,0,0,.01)";
c.fillRect(0, 0, canvas.width, canvas.height);


  aa++

audioDeath.volume /= 1+aa/1000
audioFlandre.volume /=1+aa/1000
audioNight.volume /=1+aa/1000


if(aa>2000){
    location.reload()
}


c.fillStyle = "rgba(255,255,255,.01)";
c.fillRect(0, 0, canvas.width, canvas.height*aa/2000);


c.fillStyle = "rgba(255,255,255,1)"
let fontSize = 160; // Adjust this value to change the font size
let fontFamily = "Times New Roman";

c.font = fontSize + "px " + fontFamily;
c.fillText("You Won",(canvas.width-c.measureText("You Won").width)/2,canvas.height*1/4)


c.fillStyle = "rgba(255,255,255,1)"
 fontSize = 60; // Adjust this value to change the font size
 fontFamily = "Times New Roman";

c.fillText("Difficulty "+EndDiff,(canvas.width-c.measureText("Difficulty"+EndDiff).width)/2,canvas.height*3/4)


}