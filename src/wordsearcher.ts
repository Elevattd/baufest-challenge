/* eslint-disable max-len */
import UnsupportedOperationException from "@/unsupportedOperationException";

export default class WordSearcher {
  soup: string[][];

  constructor(soup: string[][]) {
    this.soup = soup;
  }

  /**
   * El objetivo de este ejercicio es implementar una función que determine si una palabra está en una sopa de letras.
   *
   * ### Reglas
   * - Las palabras pueden estar dispuestas direcciones horizontal o vertical, _no_ en diagonal.
   * - Las palabras pueden estar orientadas en cualquier sentido, esto es, de derecha a izquierda o viceversa, y de arriba
   * para abajo o viceversa.
   * - El cambio de dirección puede estar a media palabra, de modo que, por ejemplo, parte de la palabra
   * esté horizontal y de izquierda a derecha, parte esté vertical y de arriba hacia abajo, y otra parte horizontal
   * de derecha a la izquierda.
   *
   * @param word	Palabra a buscar en la sopa de letras.
   *
   * @return {@link Boolean}	true si la palabra se encuentra
   * en la sopa de letras.
   * */

  public isPresent(word: string): boolean {
    // throw new UnsupportedOperationException();
    let letters: string[] = word.split("");
    let lastRow: number = this.soup.length;
    let lastColumn: number = this.soup[0].length;
    let letterIndex: number = 0;
    for (let row = 0; row < lastRow; row++) {
      for (let column = 0; column < lastColumn; column++) {
        let foundWord = this.letterFound(letters, letterIndex, row, column);
        if (foundWord) {
          return true;
        }
      }
    }
    return false;
  }

  private letterFound(
    letters: string[],
    letterIndex: number,
    row: number,
    column: number
  ): boolean {
    let foundWord = false;
    if (letters[letterIndex] == this.soup[row][column]) {
      if (letterIndex === letters.length - 1) {
        return true;
      }
      letterIndex++;

      let lastRow = this.soup.length - 1;
      let lastColumn = this.soup[0].length - 1;
      if (row + 1 <= lastRow) {
        foundWord = this.letterFound(letters, letterIndex, row + 1, column);
      }
      if (row - 1 >= 0 && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row - 1, column);
      }
      if (column + 1 <= lastColumn && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row, column + 1);
      }
      if (row + 1 <= lastRow && column + 1 <= lastColumn && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row + 1, column + 1);
      }
      if (column - 1 >= 0 && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row, column - 1);
      }

      if (row - 1 >= 0 && column - 1 >= 0 && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row - 1, column - 1);
      }
      if (row + 1 <= lastRow && column - 1 >= 0 && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row + 1, column - 1);
      }
      if (row - 1 >= 0 && column + 1 <= lastColumn && !foundWord) {
        foundWord = this.letterFound(letters, letterIndex, row - 1, column + 1);
      }
    }
    return foundWord;
  }
}
