// Puntos conseguidos: 10
// Velocidad: 936 ops/s (Más alto es mejor)
// Complejidad cognitiva: 6 (Más bajo es mejor)

function getGiftsToRefill(a1, a2, a3) {
  let typeOfGifts = [];

  a1.forEach((gift) => {
    if (!typeOfGifts.includes(gift)) typeOfGifts.push(gift);
  });
  a2.forEach((gift) => {
    if (!typeOfGifts.includes(gift)) typeOfGifts.push(gift);
  });
  a3.forEach((gift) => {
    if (!typeOfGifts.includes(gift)) typeOfGifts.push(gift);
  });

  return typeOfGifts.filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  );
}
