controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f . f . . f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f f f f f f f . f . . . 
        . . . . . . f f f . . . f . . . 
        . . . . . . f f f . . . f . . . 
        . . . . . . f f f f . f f f . . 
        . . . . . . f f f . f . f . . . 
        . . . . . . f f f . . f f . . . 
        . . . . . f . . . f . . f . . . 
        . . . . f . . . . . f . . . . . 
        . . . f . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f . f . . f f . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f . . . . . . f 
        . . . . . f f f f f . . . . f f 
        . . . . . f f f f . f . . f f . 
        . . . . . f f f f . f f . f f . 
        . . . . . f f f f . . f f . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f . f f . . . . . . . 
        . . . . f . . . . f . . . . . . 
        . . . f . . . . . . f . . . . . 
        `],
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.fire)
    mySprite.startEffect(effects.fountain)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    effects.clearParticles(mySprite)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . f . . . . f . . . . . . . . 
    . . f . f . f f . . . . . . . . 
    . . f . . . . f . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . f f f f . . . . . . . . . 
    . . f . f f . f . . . . . . . . 
    . f . . f f . . f . . . . . . . 
    . . . f . . f . . . . . . . . . 
    . . . f . . f . . . . . . . . . 
    . . . f . . f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let demon1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . 2 . . 2 2 . . . . 
    . . . 2 . 2 . . . . . 2 . 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 . 2 2 2 . 2 . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 . . . 2 . . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    `, SpriteKind.Enemy)
demon1.follow(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . 2 . . 2 2 . . . . 
    . . . 2 . 2 . . . . . 2 . 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 . 2 2 2 . 2 . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 . . . 2 . . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    `, SpriteKind.Player)
mySprite2.follow(mySprite)
