// https://adventjs.dev/es/challenges/2022/18

function dryNumber(dry, numbers) {
  let sentence = "";
  for (let i = 1; i <= numbers; i++) sentence += i + " ";
  const regex = new RegExp(`([0-9]*[${dry}][0-9]*)`, "g");
  const found = sentence.match(regex);

  return found.map(Number);
}

// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-18

// Puntos conseguidos: 100
// Velocidad: 884 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function dryNumber(dry, numbers) {
  return Array.from(Array(numbers).keys())
    .filter((x) => `${x + 1}`.split("").includes(`${dry}`))
    .map((x) => x + 1);
}
