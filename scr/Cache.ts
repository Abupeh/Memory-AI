import { Memory } from "./Memory.js";
import { English } from "./English.js";
import { Description } from "./Description.js";

export namespace Cache {
	// export function memory(memory: Memory.Item): string {}
	export function factor(factor: Memory.Factors): string {
		const units = factor.units.map(unit) || [];
		const forms = factor.forms.map(form) || [];
		return units
			.map((unit, index) => forms.map(form => `${unit} ${form}. `).join(''))
			.join("");
	}
	function unit(unit: Memory.Unit): string {
		return [
			English.clause(unit.position, `${unit.position} is ${English.articleNouns(English.getGender(unit.gender))}, `),
			English.clause(
				unit.time,
				English.timedNoun(`${unit.position ? "f" : "F"}ounded`, unit.time)
			),
		].join("");
	}
	function form(form: Memory.Form): string {
		return [
			English.clause(
				form.position,
				`${form.gender} ${English.timedVerb(form)} ${English.articleNouns(form.position)}`
			),
			English.clause(
				properties(form.properties).trim(),
				`and ${English.timedVerb(form)} ${properties(form.properties)}`
			),
		].join(" ");
	}

	function properties(properties: Description.Properties): string {
		return Object.entries(properties)
			.map(([property, value]: [string, string]) =>
				English.clause(
					value,
					`${English.asNumber(value)} as ${English.articleNouns(
						property.toLowerCase()
					)}`
				)
			)
			.filter((v) => v.trim())
			.map(
				(v, i, a) =>
					`${v}${a.length - 1 == i ? "" : ","}${
						a.length - 2 == i ? " and" : ""
					}`
			)
			.join(" ");
	}
}
