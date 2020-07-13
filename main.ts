namespace SpriteKind {
    export const kitchen = SpriteKind.create()
}
function placeKitchen () {
    kitchen1 = sprites.create(img`
. . b b b b b b b b b b b b b b 
. b b b b b b b b b b b b b b b 
. b b c d d d d d d d d d d d d 
b b c d d f f f f f f f f f f f 
b c d d f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f d d d d f f f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f f f d d d d f f f f 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen1, tiles.getTileLocation(19, 4))
    kitchen2 = sprites.create(img`
b b b b b b b b b b b b b b . . 
b b b b b b b b b b b b b b b . 
d d d d d d d d d d d d d b b . 
f f f f f f f f f f f f d d b b 
f f f f f f f f f f f f f d d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f d d d d f f f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f f f d d d d f f f f f d b 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen2, tiles.getTileLocation(20, 4))
    kitchen3 = sprites.create(img`
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f d d d d f f f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f d 1 4 f f f f 4 1 d f 
b c d f f f d 1 4 4 4 4 1 d f f 
b c d f f f f d 1 1 1 1 d f f f 
b c d f f f f f d d d d f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen3, tiles.getTileLocation(19, 5))
    kitchen4 = sprites.create(img`
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d f f b b d d f f b b d d f 
b c d f f b b d d f f b b d d f 
b c d f f b b b b f f b b b b f 
b c d f f b b b b f f b b b b f 
b c d f f f f f f f f f f f f f 
b c d f f f f f f f f f f f f f 
b c d d f f f f f f f f f f f f 
b b c d d f f f f f f f f f f f 
b b b c d d d d d d d d d d d d 
. b b b b b b b b b b b b b b b 
. . b b b b b b b b b b b b b b 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen4, tiles.getTileLocation(19, 6))
    kitchen5 = sprites.create(img`
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f d d d d f f f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f d 1 4 f f f f 4 1 d f f d b 
f f f d 1 4 4 4 4 1 d f f f d b 
f f f f d 1 1 1 1 d f f f f d b 
f f f f f d d d d f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen5, tiles.getTileLocation(20, 5))
    kitchen6 = sprites.create(img`
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f b b d d f f b b d d f f d b 
f f b b d d f f b b d d f f d b 
f f b b b b f f b b b b f f d b 
f f b b b b f f b b b b f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f f d b 
f f f f f f f f f f f f f d d b 
f f f f f f f f f f f f d d b b 
d d d d d d d d d d d d d b b b 
b b b b b b b b b b b b b b b . 
b b b b b b b b b b b b b b . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.kitchen)
    tiles.placeOnTile(kitchen6, tiles.getTileLocation(20, 6))
}
let kitchen6: Sprite = null
let kitchen5: Sprite = null
let kitchen4: Sprite = null
let kitchen3: Sprite = null
let kitchen2: Sprite = null
let kitchen1: Sprite = null
namespace kitchen {
    //% block
    export function zone4_kitchen() {
        placeKitchen()
    }
}
