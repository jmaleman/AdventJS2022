// Puntos conseguidos: 10
// Velocidad: 2060 ops/s (Más alto es mejor)
// Complejidad cognitiva: 2 (Más bajo es mejor)

function fitsInOneBox(boxes) {
  let boxinbox = [];
  boxes.forEach((box, indexBox) => {
    let candidateBox = {
      l: false,
      w: false,
      h: false,
    };
    boxes.forEach((wrapBox, indexProposal) => {
      if (indexBox !== indexProposal && !boxinbox.includes(indexProposal)) {
        candidateBox["l"] = box["l"] < wrapBox["l"] ? true : false;
        candidateBox["w"] = box["w"] < wrapBox["w"] ? true : false;
        candidateBox["h"] = box["h"] < wrapBox["h"] ? true : false;
      }
    });
    if (Object.values(candidateBox).every((value) => value === true)) {
      boxinbox.push(indexBox);
    }
  });
  return boxinbox.length === boxes.length - 1 ? true : false;
}
