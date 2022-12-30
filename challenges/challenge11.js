// Puntos conseguidos: 180
// Velocidad: 2048 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3 (Más bajo es mejor)

function getCompleted(part, total) {
  let MCD = (a, b) => (b ? MCD(b, a % b) : a);

  const sec_time_part =
    +part.split(":")[0] * 60 * 60 +
    +part.split(":")[1] * 60 +
    +part.split(":")[2];

  const sec_time_total =
    +total.split(":")[0] * 60 * 60 +
    +total.split(":")[1] * 60 +
    +total.split(":")[2];

  MCD = MCD(sec_time_part, sec_time_total);
  return `${sec_time_part / MCD}/${sec_time_total / MCD}`;
}

// Solution by: @Achalogy (https://github.com/Achalogy)
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-11

// Puntos conseguidos: 220
// Velocidad: 2100 ops/s (Más alto es mejor)
// Complejidad cognitiva: 2 (Más bajo es mejor)

function getCompleted(part, total) {
  const MCD = (a, b) => {
    let c;
    while (b) {
      c = b;
      b = a % b;
      a = c;
    }
    return a;
  };

  part = part.split(":");
  total = total.split(":");

  let partRed = +part[0] * 3600 + +part[1] * 60 + +part[2];
  let totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2];
  const MCDof = MCD(partRed, totalRed);

  const partEnd = partRed / MCDof;
  const totalEnd = totalRed / MCDof;

  return partEnd + "/" + totalEnd;
}
