import { Memory } from "./Memory.js";
import { Description } from "./Description.js";

export namespace English {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
    ];
    const vowels = ["a", "e", "i", "o", "u"];
    export function clause<T>(clause: T, result?: string): string {
        return clause ? result || (clause as string) : "";
    }
    export function timedVerb(form: Memory.Form) {
        switch (form.time) {
            case Description.Time.Current:
                return `is${clause(form.occurrence)}`;
            case Description.Time.Future:
                return `will be${clause(form.occurrence)}`;
            case Description.Time.Past:
                return `was${clause(form.occurrence)}`;
        }
    }
    export function getGender(gender: Description.Gender) {
        switch(gender) {
            case Description.Gender.Female: return "female";
            case Description.Gender.Male: return "male";
            case Description.Gender.Unknown: return "object";
        }
    }
    export function timedNoun(text: string, time: Description.Time | Date | null) {
        switch (time) {
            case Description.Time.Current:
                return `${text} ${Description.Time.Current},`;
            case Description.Time.Future:
                return `${Description.Time.Future} ${text},`;
            case Description.Time.Past:
                return `${text}, in the ${Description.Time.Past},`;
        }
    }
    export function asNumber(value: string | number): string {
        return typeof value === "number" && value < numbers.length
            ? numbers[value]
            : String(value);
    }
    export function articleNouns(text: string | null) {
        return (
            (vowels.some((v) => (text as string).startsWith(v)) ? "an " : "a ") +
            text
        );
    }
}