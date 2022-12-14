// Puntos conseguidos: 132
// Velocidad: 3154 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function distributeGifts(packOfGifts, reindeers) {
  let cap_packgifts = 0;
  let cap_reindeers = 0;

  packOfGifts.forEach((g) => {
    cap_packgifts += g.length;
  });

  reindeers.forEach((r) => {
    cap_reindeers += r.length * 2;
  });

  return Math.floor(cap_reindeers / cap_packgifts);
}
