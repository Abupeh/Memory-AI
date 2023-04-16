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

	interface Position {
		time: Date | Time | null;
		position: string | null;
	}
	type Act = Position & {
		entity: Entity | null;
	};
	type Site = Position & {
		location: Location | string | null;
	};

	interface Factors {
		who?: Position[];
		what?: Act[];
		where?: Site[];
		why?: string;
	}


    export function Position(time: Date | Time | null, position: string | null): Position;
    export function Position(time: Date | Time | null, position: string | null, entity: Entity | null): Act;
    export function Position(time: Date | Time | null, position: string | null, location: Location | null): Site;
    export function Position(time: Date | Time | null, position: string | null, other?: Entity | Location | null): Position | Act | Site {
        return {
            time: time,
            position: position,
            entity: typeof other == typeof Entity ? other as Entity : null,
            location: typeof other == typeof Location ? other as Location : null,
        }
    }



	export class Item {
		constructor(
            public name: string,
			public base: Factors | null,
			public link: Factors | null,
			public result: Factors | null
		) {}
	}
}
