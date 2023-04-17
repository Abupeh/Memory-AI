import { Memory } from "./Memory.js";

namespace Statement {}

class Mind {
	constructor(public name: string, public memories: Memory.Item[] = []) {}
	createMemory(memory: Memory.Item, history: Memory.Item[] = []) {
		memory.history = history;
		this.memories.push(memory);
	}
	getMemory(memoryName: string): Memory.Item | undefined {
		return this.memories.find(({ name }) => name == memoryName);
	}

	static renderInput(itemName: string, unit: string): Memory.Item {
		return new Memory.Item(
			itemName,
			new Memory.Factors([new Memory.Unit(null, unit)])
		);
	}
}

namespace Interactor {
	export namespace Cache {
		// export function memory(memory: Memory.Item): string {}
		export function factor(factor: Memory.Factors): string {
			const units = factor.units.map(unit) || [];
			const forms = factor.forms.map(form) || [];
			return units
				.map((unit, index) => `${unit} ${forms[index] ?? ""}`)
				.join(". ");
		}
		function unit(unit: Memory.Unit): string {
			return [
				unit.position && unit.position,
				unit.time && `${unit.position ? "f" : "F"}ounded in, ${unit.time},`,
			].join(" ");
		}
		function form(form: Memory.Form): string {
			return [
				form.position &&
					`${form.time == Memory.Time.Current ? "is" : "was"} a ${
						form.position
					}`,
				form.time != Memory.Time.Current && `during ${form.time},`,
				form.properties && `and was ${properties(form.properties)}`,
			].join(" ");
		}
		function properties(properties: Memory.Properties): string {
			return Object.entries(properties).map(([property, value]: [string, string]) => value).join(' ')
		}
	}
}

const mind = new Mind("ABD_BOT");
// const simpleInput = mind.renderInput("abd", "person");
// console.log(simpleInput);
const abdMemory = new Memory.Item(
	"abd",
	new Memory.Factors(
		[new Memory.Unit(Memory.Time.Current, "Abd")],
		[
			new Memory.Form(
				new Memory.Unit(Memory.Time.Current, "person"),
				new Memory.Properties({
					Entity: Memory.Entity.Living,
				})
			),
		]
	)
);

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
