decorateTree("B P R P");
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// Puntos conseguidos: 10
// Velocidad: 1233 ops/s (Más alto es mejor)
// Complejidad cognitiva: 6 (Más bajo es mejor)

function decorateTree(base) {
  const dict = {
    "P P": "P",
    "B B": "B",
    "R R": "R",
    "B P": "R",
    "P B": "R",
    "B R": "P",
    "R B": "P",
    "P R": "B",
    "R P": "B",
  };

  const regexp = /(?=(\w\s\w))/g;

  function getNewLevel(level) {
    const matches = level.matchAll(regexp);
    let newLevel = "";
    for (const match of matches) {
      newLevel += dict[match[1]] + " ";
    }
    return newLevel.trim();
  }
  const tree = [base];
  function recursive(currentLevel) {
    let level = Math.ceil(currentLevel.length / 2);
    if (level === 1) {
      return currentLevel;
    } else {
      let newLevel = getNewLevel(currentLevel);
      tree.push(newLevel);
      return recursive(newLevel);
    }
  }
  recursive(base);
  return tree.reverse();
}

// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-15

// Puntos conseguidos: 200
// Velocidad: 1177 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function decorateTree(base) {
  const dict = {
    PP: "P",
    BB: "B",
    RR: "R",
    BP: "R",
    PB: "R",
    BR: "P",
    RB: "P",
    PR: "B",
    RP: "B",
  };

  base = base.split(" ");
  let list = new Array(base.length).fill(base);
  return list
    .reduce(
      (total, x) =>
        total.concat([
          new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
            return dict[
              total
                .at(-1)
                .slice(i, i + 2)
                .join("")
            ];
          }),
        ]),
      [base]
    )
    .slice(0, base.length)
    .map((x) => x.join(" "))
    .reverse();
}
