import { Memory } from "./Memory.js";
import { Cache } from "./Cache.js";
import { Description } from "./Description.js";

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

const mind = new Mind("ABD_BOT");
// const simpleInput = mind.renderInput("abd", "person");
// console.log(simpleInput);
const abdMemory = new Memory.Item(
	"abd",
	new Memory.Factors(
		[
			new Memory.Unit(Description.Time.Future, "Abd"),
			new Memory.Unit(Description.Time.Past, "SUPER Abd"),
		],
		[
			new Memory.Form(
				new Memory.Unit(Description.Time.Past, "superhuman"),
				new Description.Properties({
					Color: "white",
					Mass: 100,
					Width: 100,
					Height: 200,
					Length: 50,
					Entity: Description.Entity.Living,
				})
			),
			new Memory.Form(
				new Memory.Unit(Description.Time.Future, "person"),
				new Description.Properties({
					Entity: Description.Entity.Living,
				})
			),
		]
	)
);
mind.createMemory(abdMemory);
console.log(mind.getMemory('abd'));

const simpleOutput = Cache.factor(mind.getMemory('abd')!.base);
console.log(simpleOutput);

mind.createMemory(
	new Memory.Item(
		"mom",
		new Memory.Factors(
			[new Memory.Unit(Description.Time.Current, "Mom", null, Description.Gender.Female)],
			[
				new Memory.Form(
					new Memory.Unit(Description.Time.Current, "person"),
					new Description.Properties({ Entity: Description.Entity.Living })
				),
				new Memory.Form(
					new Memory.Unit(Description.Time.Current, "US"),
					new Description.Properties({ Location: Description.Location.Current })
				),
			]
		)
	),
	[
		//add history here
	]
);
console.log(mind.getMemory('mom'))
const output2 = Cache.factor(mind.getMemory('mom')!.base);
console.log(output2);