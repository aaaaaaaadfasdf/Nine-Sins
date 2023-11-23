
waves.push(W1);
function W1() {
  for (i = 0; i < 10; i++) {

    entities.push(
      new Enemy1(
        canvas.width * Math.random() - 50 * Scale/*X pos*/,
        canvas.height * Math.random() - 50 * Scale /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        50 * Scale /*Radius*/,
        10 /*Leben*/,
        .5 + i * 0.75 /*Spawn time*/,
        1/*visible Spawn time*/,
        300 * Scale /*Velocity*/,

      )
    );

  }

  entities.push(
    new Enemy1(
      canvas.width / 10 /*X pos*/,
      canvas.height / 10 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      10 /*Leben*/,
      .5 /*Spawn time*/,
      1/*visible Spawn time*/,
      300 * Scale /*Velocity*/,

    )
  );
  entities.push(
    new Enemy1(
      canvas.width / 10 * 9 /*X pos*/,
      canvas.height / 10 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      10 /*Leben*/,
      1 /*Spawn time*/,
      1 /*visible Spawn time*/,
      300 * Scale /*Velocity*/,

    )
  );
  entities.push(
    new Enemy1(
      canvas.width / 10 * 9 /*X pos*/,
      canvas.height / 10 * 9 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      10 /*Leben*/,
      1.5 /*Spawn time*/,
      1 /*visible Spawn time*/,
      300 * Scale /*Velocity*/,

    )
  );
  entities.push(
    new Enemy1(
      canvas.width / 10 /*X pos*/,
      canvas.height / 10 * 9 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      10 /*Leben*/,
      2 /*Spawn time*/,
      1 /*visible Spawn time*/,
      300 * Scale /*Velocity*/,

    )
  );






}


waves.push(W2);
function W2() {



  for (i = 0; i < 10; i++) {

    entities.push(
      new Enemy1(
        canvas.width * Math.random() - 50 * Scale/*X pos*/,
        canvas.height * Math.random() - 50 * Scale /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        50 * Scale /*Radius*/,
        10 /*Leben*/,
        2.5 + i * 1 /*Spawn time*/,
        1/*visible Spawn time*/,
        300 * Scale /*Velocity*/,

      )
    );

  }
  entities.push(


    new Enemy8(
      canvas.width / 10 * 9 /*X pos*/,
      canvas.height / 10 * 9 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      500 /*Leben*/,
      1.5 /*Spawn time*/,
      1.5 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1.5 /*Frequenz*/,
      1 /*Count*/,
      400 * Scale /*Velocity Bullets*/,
      30 * Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );



  entities.push(
    new Enemy6(
      canvas.width * Math.random() - 50 * Scale/*X pos*/,
      canvas.height * Math.random() - 50 * Scale /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      15 /*Spawn time*/,
      3 /*visible Spawn time*/,
      10*Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      500*Scale /*Velocity Bullets*/,
      120*Scale /*Radius Bullets*/,
      .1 /*time until despawn*/,
      2 /*Spawn time Bullet*/,
      2 /*visible spawn time */
    
    )
  );





if(false){
  for (i = 0; i < 10; i++) {

    entities.push(
      new Enemy3(
        50 * Scale /*X pos*/,
        i * (canvas.width - 50 * Scale * 2) * 0.1 + 50 * Scale /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        50 * Scale /*Radius*/,
        50 /*Leben*/,
        i * 0.1 + 3 /*Spawn time*/,
        3 /*visible Spawn time*/,
        1200 * Scale /*Velocity*/,
        2 /*Frequenz*/,
        1 /*Count*/

      )
    );
      }

  








  
  for (i = 0; i < 10; i++) {

    entities.push(
      new Enemy3(
        canvas.width / 10 * 9 /*X pos*/,
        i * (canvas.width - 50 * Scale * 2) * 0.1 + 50 * Scale /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        50 * Scale /*Radius*/,
        20 /*Leben*/,
        i * 0.1 + 9 /*Spawn time*/,
        3 /*visible Spawn time*/,
        1200 * Scale /*Velocity*/,
        2 /*Frequenz*/,
        1 /*Count*/

      )
    );

  }
}
}

waves.push(W3);
function W3() {



  entities.push(


    new Enemy8(
      canvas.width / 10 * 9 /*X pos*/,
      canvas.height / 10 * 9 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      500 /*Leben*/,
      1.5 /*Spawn time*/,
      1.5 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1.5 /*Frequenz*/,
      1 /*Count*/,
      400 * Scale /*Velocity Bullets*/,
      100 * Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );




  entities.push(


    new Enemy8(
      canvas.width / 10 * 1 /*X pos*/,
      canvas.height / 10 * 1 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      500 /*Leben*/,
      2.5 /*Spawn time*/,
      1.5 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1.5 /*Frequenz*/,
      1 /*Count*/,
      400 * Scale /*Velocity Bullets*/,
      100 * Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );






if(false){
  entities.push(
    new EnemyBullet(
      canvas.width / 2 /*X pos*/,
      canvas.height / 2 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      500 * Scale /*Radius*/,
      .1 /*Leben*/,
      2 /*Spawn time*/,
      2 /*visible Spawn time*/


    )
  );
  entities.push(
    new EnemyBullet(
      0 /*X pos*/,
      canvas.height / 2 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      500 * Scale /*Radius*/,
      0.1 /*Leben*/,
      4 /*Spawn time*/,
      2 /*visible Spawn time*/


    )
  );
  entities.push(
    new EnemyBullet(
      canvas.width /*X pos*/,
      canvas.height / 2 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      500 * Scale /*Radius*/,
      0.1 /*Leben*/,
      4 /*Spawn time*/,
      2 /*visible Spawn time*/

    ))

    for (i = 0; i < 3; i++) {

      entities.push(
        new EnemyBullet(
          0 /*X pos*/,
          canvas.height / 8 /*Y pos*/,
          600 * Scale /*X speed*/,
          0 /*Y speed*/,
          canvas.width / 4/*Radius*/,
          100 /*Leben*/,
          4 + i * 2 /*Spawn time*/,
          2 /*visible Spawn time*/
  
  
        )
      );
  
  
    }
  
    for (i = 0; i < 3; i++) {
  
      entities.push(
        new EnemyBullet(
          canvas.width /*X pos*/,
          canvas.height / 8 * 7 /*Y pos*/,
          -600 * Scale /*X speed*/,
          0 /*Y speed*/,
          canvas.width / 4/*Radius*/,
          100 /*Leben*/,
          4 + i * 2 /*Spawn time*/,
          2 /*visible Spawn time*/
  
  
        )
      );
  
  
    }
  


  }






}

waves.push(W4);
function W4() {

  for (i = 0; i < 10; i++) {

    entities.push(
      new Enemy1(
        canvas.width * Math.random() - 50 * Scale/*X pos*/,
        canvas.height * Math.random() - 50 * Scale /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        50 * Scale /*Radius*/,
        10 /*Leben*/,
        2 + i * 1.5 /*Spawn time*/,
        1/*visible Spawn time*/,
        200 * Scale /*Velocity*/,

      )
    );

  }
  entities.push(
    new Enemy8(
      canvas.width / 10 /*X pos*/,
      canvas.height / 10 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      50 /*Leben*/,
      5 /*Spawn time*/,
      4 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      500 * Scale /*Velocity Bullets*/,
      60 * Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );
  entities.push(
    new Enemy8(
      canvas.width / 10 /*X pos*/,
      canvas.height / 10 * 9 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      50 /*Leben*/,
      4 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      500 * Scale /*Velocity Bullets*/,
      60 * Scale /*Radius Bullets*/,
      100 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );
  entities.push(
    new Enemy8(
      canvas.width / 10 * 9 /*X pos*/,
      canvas.height / 10 * 9 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      50 /*Leben*/,
      2.5 /*Spawn time*/,
      1.5 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      500 * Scale /*Velocity Bullets*/,
      60 * Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );
  entities.push(
    new Enemy8(
      canvas.width / 10 * 9 /*X pos*/,
      canvas.height / 10 /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50 * Scale /*Radius*/,
      50 /*Leben*/,
      1 /*Spawn time*/,
      1 /*visible Spawn time*/,
      100 * Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      500 * Scale /*Velocity Bullets*/,
      60 * Scale /*Radius Bullets*/,
      10 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      1 /* Bullet Numbre*/,
      0.3 /* Spread*/
    )
  );




}


waves.push(W5);
function W5() {

  for (i = 0; i < 6; i++) {



    entities.push(
      new Enemy8(
        canvas.width * Math.random() - 50 * Scale/*X pos*/,
        canvas.height * Math.random() - 50 * Scale /*Y pos*/,
        0 /*X speed*/,
        0 /*Y speed*/,
        30 * Scale /*Radius*/,
        20 /*Leben*/,
        1 + i * 1.5 /*Spawn time*/,
        4 /*visible Spawn time*/,
        100 * Scale /*Velocity*/,
        .5 /*Frequenz*/,
        1 /*Count*/,
        300 * Scale /*Velocity Bullets*/,
        20 * Scale /*Radius Bullets*/,
        10 /*time until despawn*/,
        0 /*Spawn time Bullet*/,
        0 /*visible spawn time */,
        3 /* Bullet Numbre*/,
        1 /* Spread*/
      )
    );





  }



  
}

waves.push(W6);
function W6() {
  entities.push(
    new Enemy8(
      50*Scale/*X pos*/,
      50*Scale /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      0 /*Spawn time*/,
      3 /*visible Spawn time*/,
      0*Scale /*Velocity*/,
      2 /*Frequenz*/,
      1 /*Count*/,
      200*Scale /*Velocity Bullets*/,
      60*Scale /*Radius Bullets*/,
      100 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      7 /* Bullet Numbre*/,
      0.5 /* Spread*/
    )
);

entities.push(
  new Enemy8(
    canvas.width-50*Scale/*X pos*/,
    canvas.height-50*Scale /*Y pos*/,
    0 /*X speed*/,
    0 /*Y speed*/,
    50*Scale /*Radius*/,
    600 /*Leben*/,
    0 /*Spawn time*/,
    3 /*visible Spawn time*/,
    0*Scale /*Velocity*/,
    2 /*Frequenz*/,
    1 /*Count*/,
    200*Scale /*Velocity Bullets*/,
    40*Scale /*Radius Bullets*/,
    100 /*time until despawn*/,
    0 /*Spawn time Bullet*/,
    0 /*visible spawn time */,
    7 /* Bullet Numbre*/,
    0.5 /* Spread*/
  )
);

entities.push(
  new Enemy6(
    canvas.width-50*Scale/*X pos*/,
    50*Scale /*Y pos*/,
    0 /*X speed*/,
    0 /*Y speed*/,
    50*Scale /*Radius*/,
    500 /*Leben*/,
    10 /*Spawn time*/,
    3 /*visible Spawn time*/,
    100*Scale /*Velocity*/,
    1 /*Frequenz*/,
    1 /*Count*/,
    500*Scale /*Velocity Bullets*/,
    60*Scale /*Radius Bullets*/,
    .1 /*time until despawn*/,
    2 /*Spawn time Bullet*/,
    2 /*visible spawn time */
  
  )
);
}

waves.push(W7);
function W7() {
  entities.push(

    new Enemy4(
      20*Scale /*X pos*/,
      20*Scale  /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      200 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      200*Scale /*Velocity*/,
      1.5 /*Frequenz*/,
      1 /*Count*/,
      200*Scale /*Velocity Bullets*/,
      20*Scale /*Radius Bullets*/,
      20 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      4 /* Bullet Numbre*/,
      Math.PI/2 /* Spread*/
    )
);

entities.push(
  new Enemy4(
    20*Scale /*X pos*/,
    canvas.height-20*Scale  /*Y pos*/,
    0 /*X speed*/,
    0 /*Y speed*/,
    50*Scale /*Radius*/,
    200 /*Leben*/,
    3 /*Spawn time*/,
    3 /*visible Spawn time*/,
    200*Scale /*Velocity*/,
    1.5 /*Frequenz*/,
    1 /*Count*/,
    200*Scale /*Velocity Bullets*/,
    20*Scale /*Radius Bullets*/,
    20 /*time until despawn*/,
    0 /*Spawn time Bullet*/,
    0 /*visible spawn time */,
    4 /* Bullet Numbre*/,
    Math.PI/2 /* Spread*/
  )
);
entities.push(
  new Enemy4(
    canvas.width-20*Scale /*X pos*/,
    canvas.height-20*Scale  /*Y pos*/,
    0 /*X speed*/,
    0 /*Y speed*/,
    50*Scale /*Radius*/,
    200 /*Leben*/,
    3 /*Spawn time*/,
    3 /*visible Spawn time*/,
    200*Scale /*Velocity*/,
    1.5 /*Frequenz*/,
    1 /*Count*/,
    200*Scale /*Velocity Bullets*/,
    20*Scale /*Radius Bullets*/,
    20 /*time until despawn*/,
    0 /*Spawn time Bullet*/,
    0 /*visible spawn time */,
    4 /* Bullet Numbre*/,
    Math.PI/2 /* Spread*/
  )
);

entities.push(
  new Enemy4(
    canvas.width-20*Scale /*X pos*/,
    20*Scale  /*Y pos*/,
    0 /*X speed*/,
    0 /*Y speed*/,
    50*Scale /*Radius*/,
    200 /*Leben*/,
    3 /*Spawn time*/,
    3 /*visible Spawn time*/,
    200*Scale /*Velocity*/,
    1.5 /*Frequenz*/,
    1 /*Count*/,
    200*Scale /*Velocity Bullets*/,
    20*Scale /*Radius Bullets*/,
    20 /*time until despawn*/,
    0 /*Spawn time Bullet*/,
    0 /*visible spawn time */,
    4 /* Bullet Numbre*/,
    Math.PI/2 /* Spread*/
  )
);

}



waves.push(W8);
function W8() {

  entities.push(
    new Enemy6(
      canvas.width * Math.random() - 50 * Scale/*X pos*/,
      canvas.height * Math.random() - 50 * Scale /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,
      0.1 /*Frequenz*/,
      1 /*Count*/,
      500*Scale /*Velocity Bullets*/,
      60*Scale /*Radius Bullets*/,
      .1 /*time until despawn*/,
      1 /*Spawn time Bullet*/,
      2 /*visible spawn time */
    
    )
  );

  entities.push(
    new Enemy7(
      canvas.width * Math.random() - 50 * Scale/*X pos*/,
      canvas.height * Math.random() - 50 * Scale /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      100*Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      500*Scale /*Velocity Bullets*/,
      200*Scale /*Radius Bullets*/,
      .1 /*time until despawn*/,
      3 /*Spawn time Bullet*/,
      3 /*visible spawn time */,
      3 /* Bullet Numbre*/,
 
    )
  );
  

}

waves.push(W9);
function W9() {
  entities.push(
    new Enemy8(
      50*Scale/*X pos*/,
      50*Scale /*Y pos*/,
      0 /*X speed*/,
      0 /*Y speed*/,
      50*Scale /*Radius*/,
      500 /*Leben*/,
      3 /*Spawn time*/,
      3 /*visible Spawn time*/,
      0*Scale /*Velocity*/,
      1 /*Frequenz*/,
      1 /*Count*/,
      800*Scale /*Velocity Bullets*/,
      10*Scale /*Radius Bullets*/,
      100 /*time until despawn*/,
      0 /*Spawn time Bullet*/,
      0 /*visible spawn time */,
      25 /* Bullet Numbre*/,
      0.01 /* Spread*/
    )
);
entities.push(
  new Enemy8(
    canvas.width-50*Scale/*X pos*/,
    canvas.height-50*Scale /*Y pos*/,
    0 /*X speed*/,
    0 /*Y speed*/,
    50*Scale /*Radius*/,
    500 /*Leben*/,
    5.5 /*Spawn time*/,
    3 /*visible Spawn time*/,
    0*Scale /*Velocity*/,
    1 /*Frequenz*/,
    1 /*Count*/,
    800*Scale /*Velocity Bullets*/,
    10*Scale /*Radius Bullets*/,
    100 /*time until despawn*/,
    0 /*Spawn time Bullet*/,
    0 /*visible spawn time */,
    25 /* Bullet Numbre*/,
    0.01 /* Spread*/
  )
);





}