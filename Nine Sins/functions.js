function PlayerMoveKey(){
    Player.xv = Player.Vkonst*Player.xPress
    Player.yv = Player.Vkonst*Player.yPress
   
    Player.x += Player.xv*timeSec
    Player.y += Player.yv*timeSec
   }

   function ParReset(){

        Player.lifes--
        Player.IframesC = 0
        bullets =[] 
        bullets =[]
        entities =[]
        
        waves[wavecount]()
 

        Player.x = canvas.width/2
        Player.y = canvas.height/2
       

       
   }


   function Reset(){
   
    Player.lifes=Difficulti.currentLives
    bullets =[] 
    entities =[]
    wavecount = 0
    Difficulti.DifM= true
    


    Player.x = canvas.width/2
    Player.y = canvas.height/2

    Store.ResetDebuffs()
    for(i=0;i<cards.length;i++){

      if(cards[i].bool == true){
  
        cards[i].Restor();
  
      }
    }
    audioFlandre.pause()
    audioFlandre.currentTime=0
    Colors.ChangeTF=false
    Colors = Store.ColorsStore
}
   

function ColorChange(change){
for(const key in Colors){
    for(i=0;i<3;i++){
      if(Math.random()<change){
      Colors[key][i]=Math.random()*255
    }
      if(Colors[key][i]>255){
        Colors[key][i]=255
      }
      if(Colors[key][i]<0){
        Colors[key][i]=0
      }
    }
}

}    


function CardExecution(){

  for(i=0;i<cards.length;i++){

    if(cards[i].bool == true){

      cards[i].execution()

    }
  }
  
}

function Curser(timeCurser,Color){
  c.save()
  c.translate(MousX,MousY)

  
   c.fillStyle = "rgba(255,255,255)"//Color
  c.rotate(timeCurser*2)
  c.fillRect(-50*Scale,-5*Scale,100*Scale,10*Scale)
  c.fillRect(-5*Scale,-50*Scale,10*Scale,130*Scale)
  c.beginPath()

  c.arc(0,0,35*Scale,0,Math.PI*2,false)
  c.arc(0,5*Scale,30*Scale,0,Math.PI*2,true)


  
  c.fill()
  c.restore()
}

