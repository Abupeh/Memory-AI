import { English } from "./English.js";
export var Cache;
(function (Cache) {
    // export function memory(memory: Memory.Item): string {}
    function factor(factor) {
        const units = factor.units.map(unit) || [];
        const forms = factor.forms.map(form) || [];
        return units
            .map((unit, index) => forms.map(form => `${unit} ${form}. `).join(''))
            .join("");
    }
    Cache.factor = factor;
    function unit(unit) {
        return [
            English.clause(unit.position, `${unit.position} is ${English.articleNouns(English.getGender(unit.gender))}, `),
            English.clause(unit.time, English.timedNoun(`${unit.position ? "f" : "F"}ounded`, unit.time)),
        ].join("");
    }
    function form(form) {
        return [
            English.clause(form.position, `${form.gender} ${English.timedVerb(form)} ${English.articleNouns(form.position)}`),
            English.clause(properties(form.properties).trim(), `and ${English.timedVerb(form)} ${properties(form.properties)}`),
        ].join(" ");
    }
    function properties(properties) {
        return Object.entries(properties)
            .map(([property, value]) => English.clause(value, `${English.asNumber(value)} as ${English.articleNouns(property.toLowerCase())}`))
            .filter((v) => v.trim())
            .map((v, i, a) => `${v}${a.length - 1 == i ? "" : ","}${a.length - 2 == i ? " and" : ""}`)
            .join(" ");
    }
})(Cache || (Cache = {}));
