"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
var Memory;
(function (Memory) {
    let Time;
    (function (Time) {
        Time[Time["Current"] = 0] = "Current";
        Time[Time["Future"] = 1] = "Future";
        Time[Time["Past"] = 2] = "Past";
        Time[Time["Never"] = 3] = "Never";
        Time[Time["Always"] = 4] = "Always";
        Time[Time["Often"] = 5] = "Often";
    })(Time = Memory.Time || (Memory.Time = {}));
    let Entity;
    (function (Entity) {
        Entity[Entity["Living"] = 0] = "Living";
        Entity[Entity["Place"] = 1] = "Place";
        Entity[Entity["Object"] = 2] = "Object";
    })(Entity = Memory.Entity || (Memory.Entity = {}));
    let Location;
    (function (Location) {
        Location[Location["Current"] = 0] = "Current";
        Location[Location["Above"] = 1] = "Above";
        Location[Location["Below"] = 2] = "Below";
        Location[Location["Behind"] = 3] = "Behind";
        Location[Location["Infront"] = 4] = "Infront";
        Location[Location["Right"] = 5] = "Right";
        Location[Location["Left"] = 6] = "Left";
    })(Location = Memory.Location || (Memory.Location = {}));
    function Position(time, position, other) {
        return {
            time: time,
            position: position,
            entity: typeof other == typeof Entity ? other : null,
            location: typeof other == typeof Location ? other : null,
        };
    }
    Memory.Position = Position;
    class Item {
        name;
        base;
        link;
        result;
        constructor(name, base, link, result) {
            this.name = name;
            this.base = base;
            this.link = link;
            this.result = result;
        }
    }
    Memory.Item = Item;
})(Memory = exports.Memory || (exports.Memory = {}));
