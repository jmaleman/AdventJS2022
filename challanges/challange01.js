// Puntos conseguidos: 118
// Velocidad: 2380 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function wrapping(gifts) {
  return gifts.map(function (gift) {
    let wrap = gift.length + 2;
    return "*".repeat(wrap).concat(`\n*${gift}*\n`).concat("*".repeat(wrap));
  });
}
