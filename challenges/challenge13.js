// Puntos conseguidos: 10
// Velocidad: 1977 ops/s (Más alto es mejor)
// Complejidad cognitiva: 5 (Más bajo es mejor)

function getFilesToBackup(lastBackup, changes) {
  let files = [];
  changes.forEach((x) => {
    if (x[1] > lastBackup) {
      if (!files.includes(x[0])) files.push(x[0]);
    }
  });
  return files.sort((a, b) => a - b);
}

// Puntos conseguidos: 300
// Velocidad: 2269 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function getFilesToBackup(lastBackup, changes) {
  function isModified(x) {
    return x[1] > lastBackup;
  }

  return [
    ...new Set(
      changes
        .filter(isModified)
        .map((x) => x[0])
        .sort((a, b) => a - b)
    ),
  ];
}
