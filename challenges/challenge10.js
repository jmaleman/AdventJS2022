// Puntos conseguidos: 10
// Velocidad: 2108 ops/s (Más alto es mejor)
// Complejidad cognitiva: 12 (Más bajo es mejor)

function checkJump(heights) {
  const highest = heights.indexOf(Math.max(...heights));
  if (highest === 0) return false;
  const left = heights.slice(0, highest + 1);
  const goUpSome = left.some((_, i) => {
    if (i !== left.length - 1) {
      return left[i] < left[i + 1];
    }
  });

  const goUpEvery = left.every((_, i) => {
    if (i !== left.length - 1) {
      return left[i] <= left[i + 1];
    } else {
      return true;
    }
  });

  const right = heights.slice(highest, heights.length);
  const goDownSome = right.some((_, i) => {
    if (i !== right.length - 1) {
      return right[i] > right[i + 1];
    }
  });

  const goDownEvery = right.every((_, i) => {
    if (i !== right.length - 1) {
      return right[i] >= right[i + 1];
    } else {
      return true;
    }
  });

  return goUpSome && goDownSome && goUpEvery && goDownEvery;
}

// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-10

// Puntos conseguidos: 160
// Velocidad: 1756 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function checkJump(heights) {
  const left = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const conditionLeft = left.slice(1).every((l, i) => l >= left[i]);
  const conditionRight = heights.slice(1).every((h, i) => h <= heights[i]);

  return conditionLeft && conditionRight && !!left.length && heights.length > 1;
}
