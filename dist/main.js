import { Memory } from "./Memory.js";
class Mind {
    name;
    memories;
    constructor(name, memories = []) {
        this.name = name;
        this.memories = memories;
    }
    createMemory(memory, history = []) {
        memory.history = history;
        this.memories.push(memory);
    }
    getMemory(memoryName) {
        return this.memories.find(({ name }) => name == memoryName);
    }
    static renderInput(itemName, unit) {
        return new Memory.Item(itemName, new Memory.Factors([new Memory.Unit(null, unit)]));
    }
}
var Interactor;
(function (Interactor) {
    let Cache;
    (function (Cache) {
        // export function memory(memory: Memory.Item): string {}
        function factor(factor) {
            const units = factor.units.map(unit) || [];
            const forms = factor.forms.map(form) || [];
            return units
                .map((unit, index) => `${unit} ${forms[index] ?? ""}`)
                .join(". ");
        }
        Cache.factor = factor;
        function unit(unit) {
            return [
                unit.position && unit.position,
                unit.time && `${unit.position ? "f" : "F"}ounded in, ${unit.time},`,
            ].join(" ");
        }
        function form(form) {
            return [
                form.position &&
                    `${form.time == Memory.Time.Current ? "is" : "was"} a ${form.position}`,
                form.time != Memory.Time.Current && `during ${form.time},`,
                form.properties && `and was ${properties(form.properties)}`,
            ].join(" ");
        }
        function properties(properties) {
            return Object.entries(properties).map(([property, value]) => value).join(' ');
        }
    })(Cache = Interactor.Cache || (Interactor.Cache = {}));
})(Interactor || (Interactor = {}));
const mind = new Mind("ABD_BOT");
// const simpleInput = mind.renderInput("abd", "person");
// console.log(simpleInput);
const abdMemory = new Memory.Item("abd", new Memory.Factors([new Memory.Unit(Memory.Time.Current, "Abd")], [
    new Memory.Form(new Memory.Unit(Memory.Time.Current, "person"), new Memory.Properties({
        Entity: Memory.Entity.Living,
    })),
]));
const simpleOutput = Interactor.Cache.factor(abdMemory.base);
console.log(simpleOutput);
// mind.createMemory(
// 	new Memory.Item(
// 		"abd",
// 		new Memory.Factors(
// 			[new Memory.Unit(Memory.Time.Current, "abd")],
// 			[
// 				new Memory.Form(
// 					new Memory.Unit(Memory.Time.Current, "person"),
// 					new Memory.Properties({ Entity: Memory.Entity.Living })
// 				),
// 				new Memory.Form(
// 					new Memory.Unit(Memory.Time.Current, "US"),
// 					new Memory.Properties({ Location: Memory.Location.Current })
// 				),
// 			]
// 		)
// 	),
// 	[
// 		//add history here
// 	]
// );
// console.log(mind.getMemory("abd"));
// mind
// 	.getMemory("abd")
// 	?.base?.addForms(
// 		new Memory.Form(
// 			new Memory.Unit(Memory.Time.Current, "Canada"),
// 			new Memory.Properties({ Location: Memory.Location.Current })
// 		)
// 	);
