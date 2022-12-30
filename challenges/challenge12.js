// Puntos conseguidos: 260
// Velocidad: 2800 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function selectSleigh(distance, sleighs) {
  const sleigh = sleighs.reverse().find((x) => x.consumption * distance <= 20);

  return sleigh !== undefined ? sleigh.name : null;
}
