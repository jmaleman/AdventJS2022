// Puntos conseguidos: 15
// Velocidad: 5 ops/s (Más alto es mejor)
// Complejidad cognitiva: 12 (Más bajo es mejor)

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const travels = [];
  let maxGiftsInTravel = 0;

  let cities = giftsCities.filter((city) => city <= maxGifts);

  if (cities.length === 0) {
    return maxGiftsInTravel;
  }

  if (maxCities === 1) {
    return Math.max(...cities);
  }

  function allCombinations(cities, loop) {
    if (loop === 0) return [[]];
    const combinations = [];
    for (let i = 0; i < cities.length; i++) {
      const next = cities.slice(i + 1);
      const subCombinations = allCombinations(next, loop - 1);
      subCombinations.forEach((subComb) => {
        const travel = [cities[i], ...subComb];
        const sumGiftsTravel = travel.reduce((accu, curr) => accu + curr, 0);
        if (sumGiftsTravel <= maxGifts) {
          combinations.push(travel);
          maxGiftsInTravel = Math.max(maxGiftsInTravel, sumGiftsTravel);
        }
      });
    }
    return combinations;
  }
  for (let i = 2; i <= maxCities; i++) {
    const travelCombinations = allCombinations(cities, i);
    travels.push(travelCombinations);
  }

  return maxGiftsInTravel;
}
