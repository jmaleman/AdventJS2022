// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-14

// Puntos conseguidos: 300
// Velocidad: 2277 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function getOptimalPath(path) {
  const res = path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1]);
    });
  });
  return res[0];
}
