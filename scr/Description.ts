export namespace Description {
    export enum Time {
		Current = "recently",
		Future = "will be",
		Past = "past",
	}
	export enum Occurrence {
		Never = "never",
		Always = "always",
		Often = "often",
	}

	export enum Entity {
		Living = "living",
		Place = "placed",
		Object = "non-living",
	}
	export enum Location {
		Current = "current",
		Above = "above",
		Below = "below",
		Behind = "behind",
		Infront = "infront",
		Right = "right",
		Left = "left",
	}
    export enum Gender {
        Male = "he",
        Female = "she",
        Unknown = "it"
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

}