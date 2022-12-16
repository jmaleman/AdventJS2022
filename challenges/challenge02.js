// Puntos conseguidos: 94
// Velocidad: 2033 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1.5 (Más bajo es mejor)

function countHours(year, holidays) {
  let extratime = 0;
  holidays.map(function (d) {
    let month = d.split("/")[0] - 1; // el mes es indexado como 0
    let day = d.split("/")[1];
    let date = new Date(year, month, day);
    if (date.getDay() != 6 && date.getDay() != 0) {
      extratime += 2;
    }
  });
  return extratime;
}
