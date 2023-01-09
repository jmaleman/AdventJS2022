// https://adventjs.dev/es/challenges/2022/17

carryGifts(["game", "bike", "book", "toy"], 10);
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

carryGifts(["game", "bike", "book", "toy"], 7);
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

carryGifts(["game", "bike", "book", "toy"], 4);
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

carryGifts(["toy", "gamme", "toy", "bike"], 6);
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

// Puntos conseguidos: 10
// Velocidad: 1752 ops/s (Más alto es mejor)
// Complejidad cognitiva: 10 (Más bajo es mejor)

function carryGifts(gifts, maxWeight) {
  if (!gifts.every((gift) => maxWeight >= gift.length)) {
    return [];
  }
  let allBags = [];
  let bag = "";
  let maxWeightLimit = maxWeight;
  gifts.forEach((gift) => {
    if (maxWeightLimit >= gift.length) {
      maxWeightLimit -= gift.length;
      bag += gift + " ";
    } else {
      if (bag !== "") allBags.push(bag.trim());
      bag = "";
      maxWeightLimit = maxWeight;
      if (maxWeightLimit >= gift.length) {
        maxWeightLimit -= gift.length;
        bag += gift + " ";
      }
    }
  });
  if (bag !== "") allBags.push(bag.trim());
  return allBags;
}
