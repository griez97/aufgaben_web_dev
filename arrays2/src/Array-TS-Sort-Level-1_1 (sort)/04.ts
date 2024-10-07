let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(languages.sort());

function sortAlphabetically(a: string, b: string){
    return a.localeCompare(b);
}

let countries: string[] = [
    "France",
    "Germany", 
    "Sweden", 
    "Great Britain", 
    "Czech Republic", 
    "Switzerland",
    "Polska"
];

console.log(countries.sort(sortAlphabetically));
console.log(languages.sort(sortAlphabetically));
