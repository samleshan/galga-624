namespace SpriteKind {
    export const drink = SpriteKind.create()
    export const 队友 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    补给物.destroy()
    mySprite.startEffect(effects.halo, 1000)
    info.setLife(3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 . . 8 8 . . . . 
. . . . . . . 1 1 1 9 1 8 . . . 
. . . . . . 8 8 . . 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.drink, function (sprite, otherSprite) {
    dart = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 . 
. . . 2 2 2 2 4 4 4 4 2 2 2 2 . 
. . . 2 2 2 2 4 4 4 4 4 2 2 2 2 
. . 2 2 2 4 4 5 5 5 4 4 4 2 2 2 
. . 2 2 4 4 5 5 5 5 5 4 4 2 2 2 
5 5 5 5 5 5 5 5 5 5 5 5 4 4 2 2 
. . 2 2 4 4 5 5 5 5 5 4 4 2 2 2 
. . . 2 2 4 4 5 5 5 4 4 2 2 2 2 
. . . 2 2 2 4 4 4 4 4 2 2 2 2 . 
. . . . 2 2 2 4 4 4 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 2 2 . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    空投箱.destroy()
    mySprite.startEffect(effects.warmRadial, 1000)
    dart.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let 友军的复仇: Sprite = null
let mySprite2: Sprite = null
let bogey: Sprite = null
let 空投箱: Sprite = null
let dart: Sprite = null
let dart2: Sprite = null
let 补给物: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 6 . 9 8 . . . . . . . . 
. . . 6 2 6 8 8 8 . . . . . . . 
. . . 6 1 2 6 8 8 . . . . . . . 
. . . 6 6 6 6 6 6 6 6 6 9 9 . . 
. . . 8 8 1 8 1 8 8 6 1 1 1 9 . 
. . . . 8 6 6 6 6 6 8 8 6 6 6 6 
. . . . . . . . . . 8 8 8 . . . 
. . . . . . . . . . . 8 8 8 . . 
. . . . . . . . . . . . 8 9 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(mySprite, 200, 200)
let 是否 = 0
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . f 
. . . . . . 9 9 . . 4 4 4 . . f 
. . . . . 9 1 1 9 4 4 4 . . f f 
. . . . f f f f 2 2 f f 2 2 f . 
. . f f 2 2 2 2 f 4 4 4 f f f . 
. . . . . . . . . . 4 4 4 . . . 
. . . . . . . . . . . 4 4 4 . . 
. . . . . . . . . . . . f f f . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
forever(function () {
    if (是否 == 0) {
        if (1 < info.score()) {
            是否 = 1
            mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 2 . f f f f . . . . . 
. . . . . f 2 . . f f f . . . . 
. . . . . . 8 8 f 8 9 9 9 . . . 
. . . . . . . 8 8 f f f f 8 8 . 
. . . . . . . . f f f f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.队友)
            mySprite2.follow(mySprite)
            if (controller.A.isPressed()) {
                友军的复仇 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 . . 8 8 . . . . 
. . . . . . . 1 1 1 9 1 8 . . . 
. . . . . . 8 8 . . 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite2, 200, 0)
            }
        }
    } else {
    	
    }
})
forever(function () {
    补给物 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . 6 6 7 7 6 6 6 . . . . . 
. . . 6 7 6 6 6 6 6 7 6 . . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . 6 . . . . . . 6 . . . . . 
. . . . 6 . . . . 6 . . . . . . 
. . . . 6 . . . 6 . . . . . . . 
. . . . . 6 . . 6 . . . . . . . 
. . . . . . 8 8 . . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . 2 d d 2 . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    补给物.setPosition(160, 0)
    补给物.setVelocity(-50, 50)
    pause(10000 + 10000)
})
forever(function () {
    空投箱 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c c . . . . . . . 
. . . . c c b b c c c . . . . . 
. . . c b c c c c c b c . . . . 
. . c c c c c c c c c c c . . . 
. . . c . . . . . . c . . . . . 
. . . . c . . . . c . . . . . . 
. . . . c . . . c . . . . . . . 
. . . . . c . . c . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . e a a e . . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.drink)
    空投箱.setPosition(120, -5)
    空投箱.setVelocity(-25, 50)
    pause(15000 + 10000)
})
forever(function () {
	
})
game.onUpdateInterval(0 + 0, function () {
	
})
