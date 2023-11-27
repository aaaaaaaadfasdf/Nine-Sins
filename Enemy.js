class Entity {
    constructor(x, y, xv, yv, r, Hp, spawn, spawnD) {
      this.x = x; // X Position
      this.y = y; // Y Position
      this.yv = yv; //  X Velocity
      this.xv = xv; //  Y Velocity
      this.r = r; // colision Radius
      this.Hp = Hp;
      this.spawn = spawn;
      this.spawnD = spawnD;
    }
    timeStep() {
      this.x += this.xv * timeSec;
      this.y += this.yv * timeSec;
    }
  
    collison(i) {
   
     
      
      let xdis = this.x - Player.x;
      let ydis = this.y - Player.y;
      let distance = Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));
      if (distance < Player.r + this.r&&Player.IframesC>Player.Iframes) {

        audioDeath.currentTime = .5
        audioDeath.play()
        Player.ParReset=true
        
      }
      if (entities[i].constructor.name == "EnemyBullet") {
       
        if (
          this.x + this.r < 0 ||
          this.x - this.r > canvas.width ||
          this.y + this.r < 0 ||
          this.y - this.r > canvas.height
        ) {
          entities.splice(i, 1);
  
          return -1;
        }
  
        entities[i].Hp-=timeSec
            if (entities[i].Hp < 0) {
        entities.splice(i, 1);
        return -1;
            }
  
  
  
  
      } else {
        if (this.x - this.r + this.xv * timeSec < 0) {
          this.x = this.r;
          this.xv = 0;
        } else if (this.y - this.r + this.yv * timeSec < 0) {
          this.y = this.r;
          this.yv = 0;
        } else if (this.x + this.r + this.xv * timeSec > canvas.width) {
          this.x = canvas.width - this.r;
          this.xv = 0;
        } else if (this.y + this.r + this.yv * timeSec > canvas.height) {
          this.y = canvas.height - this.r;
          this.yv = 0;
        }
      }
    }
    draw() {
      c.beginPath();
      c.fillStyle = "rgba(" + Colors.EBasic + ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
    }
    Spawn() {
      if (this.spawnD > this.spawn) {
 c.fillStyle = "rgba(" + Colors.ESpawn + ")";


        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2,false);
        c.arc(
          this.x,
          this.y,
          this.r * Math.max(this.spawn / this.spawnD, 0),
          0,
          Math.PI * 2,
          true
        );
        c.fill();




      }
    }
  }
  
  class EnemyBullet extends Entity {
    constructor(x, y, xv, yv, r, Hp, spawn, spawnD) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD); }
  
  
      draw() {
        c.beginPath();
        c.fillStyle = "rgba(" + Colors.EBullet + ")";
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fill();
     
    }
    main() {}
    Spawn() {
      if (this.spawnD > this.spawn) {
     
        c.fillStyle = "rgba(" + Colors.ESpawnBullet + ")";
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2,false);
        c.arc(
          this.x,
          this.y,
          this.r * Math.max(this.spawn / this.spawnD, 0),
          0,
          Math.PI * 2,
          true
        );
        c.fill();
      }
    }
  }

  class Enemy1 extends Entity {
    constructor(x, y, xv, yv, r, Hp, spawn, spawnD,Vkonst) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
     this.Vkonst = Vkonst
    }
    main() {
      let xdis = this.x - Player.x;
      let ydis = this.y - Player.y;
      let distance = Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));
      this.xv = (-xdis / distance) * this.Vkonst;
      this.yv = (-ydis / distance) * this.Vkonst;
    }
  }
  
  class Enemy2 extends Entity {
    constructor(x, y, xv, yv, r, Hp, spawn, spawnD, acceleration, drag) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
      this.acceleration = acceleration;
      this.drag = drag;
    }
    main() {
      let xdis = this.x - Player.x;
      let ydis = this.y - Player.y;
      let distance = Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));
      this.xv += (-xdis / distance) * this.acceleration * timeSec;
      this.yv += (-ydis / distance) * this.acceleration * timeSec;
      this.xv *= this.drag;
      this.yv *= this.drag;
    }
  }
  
  class Enemy3 extends Entity {
    constructor(x, y, xv, yv, r, Hp, spawn, spawnD, Vkonst, frequenz, count) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
      this.Vkonst = Vkonst;
      this.frequenz = frequenz;
      this.count = count;
    }
  
    draw() {
      c.beginPath();
      c.fillStyle = "rgba(" + Colors.EBasic + ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
  
      var a = (this.count * 2) / this.frequenz - 0.5;
      c.beginPath();
      c.fillStyle =
        "rgba(" +
        Colors.ECarge[0] +
        "," +
        Colors.ECarge[1] +
        "," +
        Colors.ECarge[2] +
        "," +
        a +
        ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
    }
  
    main() {
      this.count += timeSec;
  
      if (this.count > this.frequenz) {
        let xdis = this.x - Player.x;
        let ydis = this.y - Player.y;
        let distance = Math.sqrt(Math.pow(xdis, 2) + Math.pow(ydis, 2));
        this.xv = (-xdis / distance) * this.Vkonst;
        this.yv = (-ydis / distance) * this.Vkonst;
        this.count = 0;
      }
      if (this.count > this.frequenz / 2) {
        this.xv = 0;
        this.yv = 0;
      }
    }
  }
  class Enemy4 extends Entity {
    constructor(
      x,
      y,
      xv,
      yv,
      r,
      Hp,
      spawn,
      spawnD,
      Vkonst,
      frequenz,
      count,
      VBullet,
      rBullet,
      HpBullet,
      spawnBullet,
      spawnDBullet,
      HowManyBull,
      spread,
      BulletType,
    

    ) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
      this.Vkonst = Vkonst;
      this.frequenz = frequenz;
      this.count = count;
      this.VBullet = VBullet;
      this.HpBullet = HpBullet;
      this.rBullet = rBullet;
      this.spawnBullet = spawnBullet;
      this.spawnDBullet = spawnDBullet;
      this.HowManyBull= HowManyBull;
      this.spread = spread;
    }
  
    draw() {
      c.beginPath();
      c.fillStyle = "rgba(" + Colors.EBasic + ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
  
      var a = (this.count * 2) / this.frequenz - 0.5;
      c.beginPath();
      c.fillStyle =
        "rgba(" +
        Colors.ECarge[0] +
        "," +
        Colors.ECarge[1] +
        "," +
        Colors.ECarge[2] +
        "," +
        a +
        ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
    }
  
    main() {
      this.count += timeSec;


      if(Math.abs(this.x)<this.r+10&& Math.abs(this.y)<this.r+10){
        this.xv = 0
        this.yv = this.Vkonst
      }else  if(Math.abs(this.x)<this.r+10&& Math.abs(this.y-canvas.height)<this.r+10){
        this.xv = this.Vkonst
        this.yv = 0
      }else  if(Math.abs(this.x-canvas.width)<this.r+10&& Math.abs(this.y-canvas.height)<this.r+10){
        this.xv = 0
        this.yv =- this.Vkonst
      }else  if(Math.abs(this.x-canvas.width)<this.r+10&& Math.abs(this.y)<this.r+10){
        this.xv = -this.Vkonst
        this.yv = 0
      }

  

  
      if (this.count > this.frequenz) {
       
       

  
  let Alpha = 0
  
  Alpha-= this.spread*(this.HowManyBull+1)/2
  
  for(i=0;i<this.HowManyBull;i++){
   Alpha+= this.spread
  entities.push(
          
          new EnemyBullet(
            this.x,
            this.y,
            -Math.cos(Alpha)*this.VBullet,
            -Math.sin(Alpha)*this.VBullet,
 
            this.rBullet,
            this.HpBullet,
            this.spawnBullet,
            this.spawnDBullet
            
          )
        );
  }
  
  
        this.count = 0;
      }
     
    }
  }

  
  class Enemy6 extends Entity {
    constructor(
      x,
      y,
      xv,
      yv,
      r,
      Hp,
      spawn,
      spawnD,
      Vkonst,
      frequenz,
      count,
      VBullet,
      rBullet,
      HpBullet,
      spawnBullet,
      spawnDBullet
    ) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
      this.Vkonst = Vkonst;
      this.frequenz = frequenz;
      this.count = count;
      this.VBullet = VBullet;
      this.HpBullet = HpBullet;
      this.rBullet = rBullet;
      this.spawnBullet = spawnBullet;
      this.spawnDBullet = spawnDBullet;
    }
  
    draw() {
      c.beginPath();
      c.fillStyle = "rgba(" + Colors.EBasic + ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
  
      var a = (this.count * 2) / this.frequenz - 0.5;
      c.beginPath();
      c.fillStyle =
        "rgba(" +
        Colors.ECarge[0] +
        "," +
        Colors.ECarge[1] +
        "," +
        Colors.ECarge[2] +
        "," +
        a +
        ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
    }
  
    main() {
      this.count += timeSec;
  
      if (this.count > this.frequenz) {
        this.xv = Math.random() * this.Vkonst - this.Vkonst / 2;
        this.yv = Math.random() * this.Vkonst - this.Vkonst / 2;
       
  
        entities.push(
          new EnemyBullet(
            Player.x+Math.random()*100,
            Player.y+Math.random()*100,
            0,
            0,
            this.rBullet,
            this.HpBullet,
            this.spawnBullet,
            this.spawnDBullet
            
          )
        );
  
  
  
        this.count = 0;
      }
      if (this.count > this.frequenz / 2) {
        this.xv = 0;
        this.yv = 0;
      }
    }
  }
  
  class Enemy7 extends Entity {
    constructor(
      x,
      y,
      xv,
      yv,
      r,
      Hp,
      spawn,
      spawnD,
      Vkonst,
      frequenz,
      count,
      VBullet,
      rBullet,
      HpBullet,
      spawnBullet,
      spawnDBullet,
      HowManyBull
    ) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
      this.Vkonst = Vkonst;
      this.frequenz = frequenz;
      this.count = count;
      this.VBullet = VBullet;
      this.HpBullet = HpBullet;
      this.rBullet = rBullet;
      this.spawnBullet = spawnBullet;
      this.spawnDBullet = spawnDBullet;
      this.HowManyBull= HowManyBull;
    }
  
    draw() {
      c.beginPath();
      c.fillStyle = "rgba(" + Colors.EBasic + ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
  
      var a = (this.count * 2) / this.frequenz - 0.5;
      c.beginPath();
      c.fillStyle =
        "rgba(" +
        Colors.ECarge[0] +
        "," +
        Colors.ECarge[1] +
        "," +
        Colors.ECarge[2] +
        "," +
        a +
        ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
    }
  
    main() {
      this.count += timeSec;
  
      if (this.count > this.frequenz) {
        this.xv = Math.random() * this.Vkonst - this.Vkonst / 2;
        this.yv = Math.random() * this.Vkonst - this.Vkonst / 2;
       
  for (i=0;i<this.HowManyBull;i++){
        entities.push(
          new EnemyBullet(
            Math.random()*canvas.width,
            Math.random()*canvas.height,
            0,
            0,
            this.rBullet,
            this.HpBullet,
            this.spawnBullet,
            this.spawnDBullet
            
          )
        );
  }
  
  
        this.count = 0;
      }
      if (this.count > this.frequenz / 2) {
        this.xv = 0;
        this.yv = 0;
      }
    }
  }
  
  class Enemy8 extends Entity {
    constructor(
      x,
      y,
      xv,
      yv,
      r,
      Hp,
      spawn,
      spawnD,
      Vkonst,
      frequenz,
      count,
      VBullet,
      rBullet,
      HpBullet,
      spawnBullet,
      spawnDBullet,
      HowManyBull,
      spread
    ) {
      super(x, y, xv, yv, r, Hp, spawn, spawnD);
      this.Vkonst = Vkonst;
      this.frequenz = frequenz;
      this.count = count;
      this.VBullet = VBullet;
      this.HpBullet = HpBullet;
      this.rBullet = rBullet;
      this.spawnBullet = spawnBullet;
      this.spawnDBullet = spawnDBullet;
      this.HowManyBull= HowManyBull;
      this.spread = spread;
    }
  
    draw() {
      c.beginPath();
      c.fillStyle = "rgba(" + Colors.EBasic + ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
  
      var a = (this.count * 2) / this.frequenz - 0.5;
      c.beginPath();
      c.fillStyle =
        "rgba(" +
        Colors.ECarge[0] +
        "," +
        Colors.ECarge[1] +
        "," +
        Colors.ECarge[2] +
        "," +
        a +
        ")";
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      c.fill();
    }
  
    main() {
      this.count += timeSec;
  
      if (this.count > this.frequenz) {
        this.xv = Math.random() * this.Vkonst - this.Vkonst / 2;
        this.yv = Math.random() * this.Vkonst - this.Vkonst / 2;
       
  let Xdis = this.x-Player.x
  let Ydis = this.y-Player.y
  
  let Alpha = Math.atan2(Ydis, Xdis);
  
  Alpha-= this.spread*(this.HowManyBull+1)/2
  
  for(i=0;i<this.HowManyBull;i++){
   Alpha+= this.spread
  entities.push(
          
          new EnemyBullet(
            this.x,
            this.y,
            -Math.cos(Alpha)*this.VBullet,
            -Math.sin(Alpha)*this.VBullet,
            this.rBullet,
            this.HpBullet,
            this.spawnBullet,
            this.spawnDBullet
            
          )
        );
  }
  
  
        this.count = 0;
      }
      if (this.count > this.frequenz / 2) {
        this.xv = 0;
        this.yv = 0;
      }
    }
  }