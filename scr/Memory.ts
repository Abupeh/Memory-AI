export namespace Memory {
	export enum Time {
		Current,
		Future,
		Past,
		Never,
		Always,
		Often,
	}
	export enum Entity {
		Living,
		Place,
		Object,
	}
	export enum Location {
		Current,
		Above,
		Below,
		Behind,
		Infront,
		Right,
		Left,
	}

	interface Factors {
		who?: Unit[];
		what?: Form[];
		where?: Site[];
		why?: string;
	}

	export class Unit {
		constructor(
			public time: Date | Time | null,
			public position: string | null
		) {}
	}


	export class Properties {
		Color!: string;
		Shape!: string;
		Material!: string;
		Weight!: number;
		Height!: number;
		Length!: number;
		Width!: number;
		Depth!: number;
		Mass!: number;
		Brightness!: number;
		Transparency!: number;
		Hardness!: number;
		Roughness!: number;
		Entity!: Entity;
		get Volume(): number {
			return this.Height * this.Length * this.Width;
		}
		get Density(): number {
			return this.Mass / this.Volume;
		}
		constructor(properties: Partial<Properties>) {
			Object.assign(this, properties);
		}
	}

	export class Form extends Unit {
		constructor({ time, position }: Unit, public properties: Properties) {
			super(time, position);
		}
	}

	export class Site extends Unit {
		constructor(
			{ time, position }: Unit,
			public location: Location | string
		) {
			super(time, position);
		}
	}

	export class Item {
		history: Item[] = [];
		constructor(
			public name: string,
			public base: Factors | null = null,
			public link: Factors | null = null,
			public result: Factors | null = null
		) {}
		set(base?: Factors, link?: Factors, result?: Factors) {
			if(this.base && base) Object.assign(this.base, base);
			if(this.link && link) Object.assign(this.link, link);
			if(this.result && result) Object.assign(this.result, result);

		}
	}
}
