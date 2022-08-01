/* eslint-disable max-len */
// import UnsupportedOperationException from '@/unsupportedOperationException';

/**
 * El metodo debe retornar un booleano indicando si el parametro `cadena` cumple con alguna de las siguientes propiedades:
 * 1- Todos los caracteres aparecen la misma cantidad de veces.
 *     Ejemplos: "aabbcc", "abcdef", "aaaaaa"
 * 2- Todos los caracteres aparecen la misma cantidad de veces, a excepcion de 1, que aparece un vez mas o una vez menos.
 *     Ejemplos: "aabbccc", "aabbc", "aaaaccccc"
 * @param cadena la cadena a evaluar
 * @return booleano indicando si la cadena cumple con las propiedades
 */
export default function isValid(cadena: string): boolean {
  // throw new UnsupportedOperationException();
  let arrStr: string[] = cadena.split("").sort();
  let count: number = 0;
  let i: number = 1;
  let nums: number[] = [];
  let arr: number[] = [];

  while (count < arrStr.length && arr.length <= 2) {
    let current = arrStr[count];
    let next = arrStr[count + 1];
    if (current === next) {
      i++;
    } else {
      nums.push(i);
      i = 1;
    }
    arr = [...new Set(nums)];
    count++;
  }
  if (arr.length <= 2) {
    return true;
  }
  return false;
}
