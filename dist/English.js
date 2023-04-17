import { Description } from "./Description.js";
export var English;
(function (English) {
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
    function clause(clause, result) {
        return clause ? result || clause : "";
    }
    English.clause = clause;
    function timedVerb(form) {
        switch (form.time) {
            case Description.Time.Current:
                return `is${clause(form.occurrence)}`;
            case Description.Time.Future:
                return `will be${clause(form.occurrence)}`;
            case Description.Time.Past:
                return `was${clause(form.occurrence)}`;
        }
    }
    English.timedVerb = timedVerb;
    function getGender(gender) {
        switch (gender) {
            case Description.Gender.Female: return "female";
            case Description.Gender.Male: return "male";
            case Description.Gender.Unknown: return "object";
        }
    }
    English.getGender = getGender;
    function timedNoun(text, time) {
        switch (time) {
            case Description.Time.Current:
                return `${text} ${Description.Time.Current},`;
            case Description.Time.Future:
                return `${Description.Time.Future} ${text},`;
            case Description.Time.Past:
                return `${text}, in the ${Description.Time.Past},`;
        }
    }
    English.timedNoun = timedNoun;
    function asNumber(value) {
        return typeof value === "number" && value < numbers.length
            ? numbers[value]
            : String(value);
    }
    English.asNumber = asNumber;
    function articleNouns(text) {
        return ((vowels.some((v) => text.startsWith(v)) ? "an " : "a ") +
            text);
    }
    English.articleNouns = articleNouns;
})(English || (English = {}));
