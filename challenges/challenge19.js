// Puntos conseguidos: 300
// Velocidad: 2429 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function sortToys(toys, positions) {
  return toys.sort(
    (a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  );
}
