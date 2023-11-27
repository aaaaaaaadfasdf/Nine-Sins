let KeyPress = {
    a: false ,
    s: false ,
    d: false ,
    w: false
}

let Xmove = 0
let Ymove = 0
//66

window.addEventListener("keydown", function(e)
 {
  if (e.key == 'd' ) {
   KeyPress.d = true
   Xmove = 1
      } 
  if (e.key == 's' ) {
    KeyPress.s = true
    Ymove = 1
     } 
  if (e.key == 'a' ) {
    KeyPress.a = true
    Xmove = -1
      } 
  if (e.key == 'w' ) {
    KeyPress.w = true
    Ymove = -1
     } 

     Player.xPress = Xmove
     Player.yPress = Ymove
     
})

window.addEventListener("keyup", function(e)
{
  if (e.key == 'd' ) {
    KeyPress.d = false
    if(KeyPress.a == true){
        Xmove = -1
    }else{
        Xmove = 0
    }
    } 
  if (e.key == 's' ) {
    KeyPress.s = false
    if(KeyPress.w == true){
        Ymove = -1
    }else{
        Ymove = 0
    }
         }
  if (e.key == 'a' ) {
    KeyPress.a = false
    if(KeyPress.d == true){
        Xmove = 1
    }else{
        Xmove = 0
    }

    } 
   
  if (e.key == 'w' ) {
    KeyPress.w = false
    if(KeyPress.s == true){
        Ymove = 1
    }else{
        Ymove = 0
    }
    
        } 
  

        Player.xPress = Xmove
        Player.yPress = Ymove

});


let swellTF = 0
window.addEventListener("mousemove",function (e){

MousX = e.x
MousY = e.y

if(entities.length == 0){


  if(Difficulti.DifM == false){
  swellTF = 0
  for(i=0;i<activCard.length;i++){
    let y =
      canvas.height / 2+cardProp.yw/2 +
      (cardProp.yw + +cardProp.space - cardProp.space / activCard.length) *
        (-activCard.length / 2 + i);
    let   x = canvas.width / 2

    if(Math.abs(e.x-x)<cardProp.xw/2&&Math.abs(e.y-y)<cardProp.yw/2){
      cardProp.Xswell = x
      cardProp.Yswell = y
      cardProp.swelltrue = true
      
    }else{
      swellTF -=1
    }
  }
  if (swellTF == -cardProp.cardNumber){
    cardProp.swelltrue = false
  }


}else{
  swellTF =0
  let {x,y,xw,yw,space} = Difficulti
  for(i=0;i<4;i++){
if(Math.abs(x-e.x)<xw/2&&Math.abs(y+(yw+space-space/4)*(i-2)+yw/2-e.y)<yw/2){
  
  let {x,y,xw,yw,space} = Difficulti
  
  Difficulti.Xswell = x-xw/2
  Difficulti.Yswell = y+(yw+space-space/4)*(i-2)
  Difficulti.swelltrue = true
}else{
  swellTF -=1
}  if (swellTF == -4){
  Difficulti.swelltrue = false
}


}

 }
}

})


window.addEventListener("click",function (e){

      
  if(entities.length == 0 ){



  if(Difficulti.DifM == false){
    
    audioNight.play();

    for(g=0;g<activCard.length;g++){
      let y =
        canvas.height / 2+cardProp.yw/2 +
        (cardProp.yw + +cardProp.space - cardProp.space / activCard.length) *
          (-activCard.length / 2 + g);
      let   x = canvas.width / 2
  
      if(Math.abs(e.x-x)<cardProp.xw/2&&Math.abs(e.y-y)<cardProp.yw/2){
        
        activCard[g].main()

        wavecount++
        waves[wavecount]()
        startmenu = true;
        
     
        
      }
    }
   } else{
  let {x,y,xw,yw,space} = Difficulti


    for(g=0;g<4;g++){
      
 if(Math.abs(x-e.x)<xw/2&&Math.abs(y+(yw+space-space/4)*(g-2)+yw/2-e.y)<yw/2){
  audioNight.volume = 0.05
  audioNight.play();
  

  if(g==0){
   Player.lifes = Difficulti.Dif1
   EndDiff=1
  
 }else if(g==1){
  Player.lifes = Difficulti.Dif2
  EndDiff=2
 }else if(g==2){
  Player.lifes = Difficulti.Dif3
  EndDiff=3
 }else if(g==3){
  Player.lifes = Difficulti.Dif4
  EndDiff=4
 }
Difficulti.currentLives  = Player.lifes


W9()
 Difficulti.DifM=false



}

   }
  } 
  
  }})
  





