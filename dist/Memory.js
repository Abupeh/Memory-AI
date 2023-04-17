export var Memory;
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
    class Properties {
        Color;
        Shape;
        Material;
        Weight;
        Height;
        Length;
        Width;
        Depth;
        Mass;
        Brightness;
        Transparency;
        Hardness;
        Roughness;
        Entity;
        Location;
        get Volume() {
            return this.Height * this.Length * this.Width;
        }
        get Density() {
            return this.Mass / this.Volume;
        }
        constructor(properties) {
            Object.assign(this, properties);
        }
    }
    Memory.Properties = Properties;
    class Factors {
        units;
        forms;
        constructor(units = [], forms = []) {
            this.units = units;
            this.forms = forms;
        }
        addUnits(...properties) {
            this.units.push(...properties);
        }
        addForms(...properties) {
            this.forms.push(...properties);
        }
    }
    Memory.Factors = Factors;
    class Unit {
        time;
        position;
        constructor(time, position) {
            this.time = time;
            this.position = position;
        }
    }
    Memory.Unit = Unit;
    class Form extends Unit {
        properties;
        constructor({ time, position }, properties) {
            super(time, position);
            this.properties = properties;
        }
    }
    Memory.Form = Form;
    class Item {
        name;
        base;
        link;
        result;
        history = [];
        constructor(name, base = new Factors(), link = new Factors(), result = new Factors()) {
            this.name = name;
            this.base = base;
            this.link = link;
            this.result = result;
        }
        set(base, link, result) {
            if (this.base && base)
                Object.assign(this.base, base);
            if (this.link && link)
                Object.assign(this.link, link);
            if (this.result && result)
                Object.assign(this.result, result);
        }
    }
    Memory.Item = Item;
})(Memory || (Memory = {}));
