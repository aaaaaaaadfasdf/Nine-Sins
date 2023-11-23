function blueprint(){
  entities.push(
    new EnemyBullet(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/
      

    )
  );
  entities.push(
    new Enemy1(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,

    )
  );
  entities.push(
    new Enemy2(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*acceleration*/,
      0.4 /*Frequenz*/,
      1 /*Drag*/,

    )
  );
  entities.push(
    new Enemy3(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,
      0.4 /*Frequenz*/,
      1 /*Count*/
   
    )
  );
  entities.push(
    new Enemy4(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,
      0.4 /*Frequenz*/,
      1 /*Count*/,
      500*Scale /*Velocity Bullets*/,
      60*Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      7 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
);
  entities.push(
    new Enemy6(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,
      0.4 /*Frequenz*/,
      1 /*Count*/,
      500*Scale /*Velocity Bullets*/,
      60*Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */
    
    )
  );
  entities.push(
    new Enemy7(
      400 /*X pos*/,
      200 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,
      0.4 /*Frequenz*/,
      1 /*Count*/,
      500*Scale /*Velocity Bullets*/,
      60*Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      7 /* Bullet Numbre*/,
 
    )
  );
    entities.push(
      new Enemy8(
        400 /*X pos*/,
        200 /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        50*Scale /*Radius*/,
        500 /*Leben*/,
        3 /*Spawn time*/,
        3 /*visible Spawn time*/,
        100*Scale /*Velocity*/,
        0.4 /*Frequenz*/,
        1 /*Count*/,
        500*Scale /*Velocity Bullets*/,
        60*Scale /*Radius Bullets*/,
        10 /*time until despawn*/,
        0 /*Spawn time Bullet*/,
        0 /*visible spawn time */,
        7 /* Bullet Numbre*/,
        0.3 /* Spread*/
      )
  );
  






}