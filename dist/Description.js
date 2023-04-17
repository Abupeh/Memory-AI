export var Description;
(function (Description) {
    let Time;
    (function (Time) {
        Time["Current"] = "recently";
        Time["Future"] = "will be";
        Time["Past"] = "past";
    })(Time = Description.Time || (Description.Time = {}));
    let Occurrence;
    (function (Occurrence) {
        Occurrence["Never"] = "never";
        Occurrence["Always"] = "always";
        Occurrence["Often"] = "often";
    })(Occurrence = Description.Occurrence || (Description.Occurrence = {}));
    let Entity;
    (function (Entity) {
        Entity["Living"] = "living";
        Entity["Place"] = "placed";
        Entity["Object"] = "non-living";
    })(Entity = Description.Entity || (Description.Entity = {}));
    let Location;
    (function (Location) {
        Location["Current"] = "current";
        Location["Above"] = "above";
        Location["Below"] = "below";
        Location["Behind"] = "behind";
        Location["Infront"] = "infront";
        Location["Right"] = "right";
        Location["Left"] = "left";
    })(Location = Description.Location || (Description.Location = {}));
    let Gender;
    (function (Gender) {
        Gender["Male"] = "he";
        Gender["Female"] = "she";
        Gender["Unknown"] = "it";
    })(Gender = Description.Gender || (Description.Gender = {}));
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
    Description.Properties = Properties;
})(Description || (Description = {}));
