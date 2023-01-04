// https://adventjs.dev/es/challenges/2022/16

// Puntos conseguidos: 200
// Velocidad: 1890 ops/s (Más alto es mejor)
// Complejidad cognitiva: 1 (Más bajo es mejor)

function fixLetter(letter) {
  let letter_edited = letter;

  // Eliminar espacios al inicio y al final
  letter_edited = letter.trim();
  // Dejar un espacio después de cada coma
  letter_edited = letter_edited.replace(/([,.?!])([^,.?!])/g, "$1 $2");
  // Eliminar múltiples espacios en blanco y dejar sólo uno
  letter_edited = letter_edited.replace(/ +/g, " ");
  // Quitar espacios antes de coma o punto
  letter_edited = letter_edited.replace(/ ([.|,|?])+/g, "$1");
  // Las preguntas sólo deben terminar con un signo de interrogación
  letter_edited = letter_edited.replace(/[?]+/g, "?");
  // La primera letra de cada oración debe estar en mayúscula
  letter_edited = letter_edited.at(0).toUpperCase() + letter_edited.slice(1);
  letter_edited = letter_edited.replace(/([:\?\.\!]\s+)(.)/g, (data) =>
    data.toUpperCase()
  );
  // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
  letter_edited = letter_edited.replace(/[S|s]anta [C|c]laus/g, "Santa Claus");
  // Poner un punto al final de la frase si no tiene puntuación
  letter_edited = letter_edited.replace(/([^.?!])$/g, "$1.");

  return letter_edited;
}
