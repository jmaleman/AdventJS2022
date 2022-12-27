// const leds = [0, 1, 1, 0, 1]
// const leds = [0, 0, 0, 1]
// const leds = [0, 0, 1, 0, 0]

// Puntos conseguidos: 10
// Velocidad: 1955 ops/s (Más alto es mejor)
// Complejidad cognitiva: 5 (Más bajo es mejor)

function countTime(leds) {
  let tt = 0; // total time
  let ct = 7; // cicle time
  let newLeds = leds;

  while (newLeds.some((x) => x === 0)) {
    newLeds = newLeds.map((x, i) => {
      return x === 0 && newLeds.at(i - 1) === 1 ? 1 : x;
    });
    tt += ct;
  }

  return tt;
}

// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-9

// Puntos conseguidos: 300
// Velocidad: 2197 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function countTime(leds) {
  let arr = leds.join("").split("1");
  conso;
  arr[0] += arr.pop();
  return Math.max(...arr.map((led) => led.length)) * 7;
}
