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
		Location!: Location | string;
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

	export class Factors {
		constructor(
			public readonly units: Unit[] = [],
			public readonly forms: Form[] = [],
		) {}
		addUnits(...properties: Unit[]) {
			this.units.push(...properties);
		}
		addForms(...properties: Form[]) {
			this.forms.push(...properties);
		}
	}

	export class Unit {
		constructor(
			public time: Date | Time | null,
			public position: string | null
		) {}
	}


	export class Form extends Unit {
		constructor({ time, position }: Unit, public properties: Properties) {
			super(time, position);
		}
	}

	export class Item {
		history: Item[] = [];
		constructor(
			public name: string,
			public base: Factors = new Factors(),
			public link: Factors = new Factors(),
			public result: Factors = new Factors()
		) {}
		set(base?: Factors, link?: Factors, result?: Factors) {
			if (this.base && base) Object.assign(this.base, base);
			if (this.link && link) Object.assign(this.link, link);
			if (this.result && result) Object.assign(this.result, result);
		}
	}
}
