 let ship = sprites.create(img`
     . . . . . . . c d . . . . . . .
     . . . . . . . c d . . . . . . .
     . . . . . . . c d . . . . . . .
     . . . . . . . c b . . . . . . .
     . . . . . . . f f . . . . . . .
     . . . . . . . c 6 . . . . . . .
     . . . . . . . f f . . . . . . .
     . . . . . . . 8 6 . . . . . . .
     . . . . . . 8 8 9 8 . . . . . .
     . . . . . . 8 6 9 8 . . . . . .
     . . . . . c c c 8 8 8 . . . . .
     . . . . 8 8 6 6 6 9 8 8 . . . .
     . . 8 f f f c c e e f f 8 8 . .
     . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 .
     8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8
     8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8
 `, SpriteKind.Player)
 ship.setFlag(SpriteFlag.StayInScreen, true)
 info.setLife(3)
controller.moveSprite(ship)
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
  sprites.createProjectileFromSprite(img`
      2 4 4 5
      5 4 2 5
      5 4 2 2
      4 4 5 5
      2 4 2 5
      2 4 4 4
      5 2 5 2
      2 2 5 5
  `,ship,0,-200) 
  pause(150) 
})
game.onUpdateInterval(500, function() {
  let asteroid = sprites.create(img`
      . . . . . . . . c c c c . . . .
      . . . . c c c c c c c c c . . .
      . . . c f c c a a a a c a c . .
      . . c c f f f f a a a c a a c .
      . . c c a f f c a a f f f a a c
      . . c c a a a a b c f f f a a c
      . c c c c a c c b a f c a a c c
      c a f f c c c a b b 6 b b b c c
      c a f f f f c c c 6 b b b a a c
      c a a c f f c a 6 6 b b b a a c
      c c b a a a a b 6 b b a b b a .
      . c c b b b b b b b a c c b a .
      . . c c c b c c c b a a b c . .
      . . . . c b a c c b b b c . . .
      . . . . c b b a a 6 b c . . . .
      . . . . . . b 6 6 c c . . . . .
  `, SpriteKind.Enemy )
})