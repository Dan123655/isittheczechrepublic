import negation from "../types/types"
export const Popup = (countryName: string): string => {
    
    const negations: negation = [
        "No",
        "It is not",
        "Not really",
        "Not at all",
        "Definitely not",
        "Not this one",
        "Not this time",
        "No way it is",
        "Doesn't look like it",
        "You know it's not",
        "It's not",
        "Nope",
        "This one? Really?"
    ]
    if (countryName === "Czech Republic") {
        return "FINALLY!"
    } else {
        return negations[Math.floor(Math.random() * 11)]
    }
}
