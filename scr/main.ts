import { Memory } from "./Memory.js";

class Ai {
	constructor(public memories: Memory.Item[] = []) {}
	createMemory(memory: Memory.Item, history: Item[] = []) {
        memory.history = history;
		this.memories.push(memory);
	}
	getMemory(memoryName: string): Memory.Item | undefined {
		return this.memories.find(({ name }) => name == memoryName);
	}
}

const ai = new Ai();
ai.createMemory(
	new Memory.Item(
		"abd",
		{
			who: [new Memory.Unit(Memory.Time.Current, "abd")],
			what: [
				new Memory.Form(
					new Memory.Unit(Memory.Time.Current, "person"),
					new Memory.Properties({ Entity: Memory.Entity.Living })
				),
			],
			where: [
				new Memory.Site(
					new Memory.Unit(Memory.Time.Current, "US"),
					Memory.Location.Current
				),
			],
		},
	),
    [
        //add history here
    ]
);

console.log(ai.getMemory("abd"));
ai.getMemory('abd')?.set(
    {
        where: [
            new Memory.Site(
                new Memory.Unit(Memory.Time.Future, "Canada"),
                Memory.Location.Current
            )
        ]
    }
)
