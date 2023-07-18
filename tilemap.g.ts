// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010404040604060404040604040404020306060606060606060606060606060503060606060606060606060606060605030606060606060606060606060606050306060606060606060606060606060503060606060606060606060606060605030606060606060606060606060606050306060606060606060606060606060503060606060606060606060606060605030606060606060606060606060606050306060606060606060606060606060503060606060606060606060606060605090909090909090909090909090909090a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a080808080a0a0808080a0a080808080807070707070707070707070707070707`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.swamp.swampTile2,sprites.dungeon.hazardLava1,sprites.vehicle.roadIntersection1,sprites.dungeon.hazardWater], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
