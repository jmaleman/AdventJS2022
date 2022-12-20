// Puntos conseguidos: 160
// Velocidad: 343 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function createCube(size) {
  const u_ls = "/\\";
  const u_rs = "_\\";

  const d_ls = "\\/";
  const d_rs = "_/";

  let top = [];
  let down = [];

  function drawUp(n) {
    return " ".repeat(size - n) + u_ls.repeat(n) + u_rs.repeat(size);
  }

  function drawDown(n) {
    return " ".repeat(n - 1) + d_ls.repeat(size - (n - 1)) + d_rs.repeat(size);
  }

  for (let i = 1; i <= size; i++) {
    top.push(drawUp(i));
    down.push(drawDown(i));
  }

  return [...top, ...down].join("\n");
}
