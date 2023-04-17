import { Description } from "./Description.js";

export namespace Memory {
	export class Factors {
		constructor(
			public readonly units: Unit[] = [],
			public readonly forms: Form[] = []
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
			public time: Date | Description.Time | null = null,
			public position: string | null = null,
			public occurrence: Description.Occurrence | null = null,
			public gender: Description.Gender = Description.Gender.Unknown
		) {}
	}

	export class Form extends Unit {
		constructor(
			{ time, position, occurrence }: Unit,
			public properties: Description.Properties
		) {
			super(time, position, occurrence);
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
