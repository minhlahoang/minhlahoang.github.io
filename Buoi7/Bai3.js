const case1 = "    hOang Bui   ";
const case2 = " hOANG      BUI   hOang     ";
const case3 = "   23traN    dUOng23     ";

const format = (words) => {
    return words
        .toLowerCase()
        .match(/[a-z]+/gi)
        .map((word) =>
            word
                .split("")
                .map((char, i) => (i === 0 ? char.toUpperCase() : char))
                .join("")
        )
        .join(" ");
};

console.log(format(case1));
console.log(format(case2));
console.log(format(case3));