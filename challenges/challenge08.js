// Puntos conseguidos: 200
// Velocidad: 1674 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-8

function checkPart(part) {
  // Check raw string
  // if(part === part.split("").reverse().join("")){
  //   return true
  // }
  // else{
  return [...part].some((x, i, array) => {
    let newString = array.filter((_, j) => j != i);
    return newString.join("") === newString.reverse().join("");
  });
  // }
}
