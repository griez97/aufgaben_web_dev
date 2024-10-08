let fruits: string[] = ['🍇', '🍌', '🍒', '🍎']

const juice: string[] = fruits.map((item) => {
    return item + "🧃🥤";
});
console.log(juice);