let codingLanguages: string[] = [
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

function sortAlphabeticallyReversed(a: string, b: string){
    return b.localeCompare(a);
}

console.log(codingLanguages.sort().reverse());

console.log(codingLanguages.sort(sortAlphabeticallyReversed));

//period