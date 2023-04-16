"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Memory_js_1 = require("./Memory.js");
class Ai {
    memories;
    constructor(memories = []) {
        this.memories = memories;
    }
    ;
    createMemory(memory) {
        this.memories.push(memory);
    }
    getMemory(memoryName) {
        return this.memories.find(({ name }) => name == memoryName);
    }
}
const ai = new Ai();
ai.createMemory(new Memory_js_1.Memory.Item("abd", {
    who: [Memory_js_1.Memory.Position(Memory_js_1.Memory.Time.Current, "abd")],
    what: [Memory_js_1.Memory.Position(Memory_js_1.Memory.Time.Current, "person", Memory_js_1.Memory.Entity.Living)],
    where: [Memory_js_1.Memory.Position(Memory_js_1.Memory.Time.Current, "US", Memory_js_1.Memory.Location.Current)]
}, null, null));
console.log(ai.getMemory("abd"));
