import { Memory } from "./Memory.js";

class Ai {
    constructor(public memories: Memory.Item[] = []) {};
    createMemory(memory: Memory.Item) {
        this.memories.push(memory);
    }
    getMemory(memoryName: string): Memory.Item | undefined {
        return this.memories.find(({ name }) => name == memoryName)
    }
}

const ai = new Ai();
ai.createMemory(new Memory.Item("abd", {
    who: [Memory.Position(Memory.Time.Current, "abd")],
    what: [Memory.Position(
        Memory.Time.Current, "person",
        Memory.Entity.Living
    )],
    where: [Memory.Position(
        Memory.Time.Current, "US",
        Memory.Location.Current        
    )]
}, null, null));
console.log(ai.getMemory("abd"))