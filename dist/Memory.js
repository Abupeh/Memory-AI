import { Description } from "./Description.js";
export var Memory;
(function (Memory) {
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
        occurrence;
        gender;
        constructor(time = null, position = null, occurrence = null, gender = Description.Gender.Unknown) {
            this.time = time;
            this.position = position;
            this.occurrence = occurrence;
            this.gender = gender;
        }
    }
    Memory.Unit = Unit;
    class Form extends Unit {
        properties;
        constructor({ time, position, occurrence }, properties) {
            super(time, position, occurrence);
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
