/* eslint-disable max-len */
// import UnsupportedOperationException from "@/unsupportedOperationException";
import Jugador from "./jugador";

/**
 * Se debe ordenar primero por puntuación de manera descendente, luego por nombre de manera ascendente.
 * @param jugadores la lista de jugadores a ordenar
 * @return la lista ordenada de jugadores
 */
export function ordenarPorPuntuacionYNombre(jugadores: Jugador[]): Jugador[] {
  // throw new UnsupportedOperationException();
  let jugadoresResult: Jugador[] = jugadores.sort((a, b) => {
    if (a.puntuacion < b.puntuacion) {
      return 1;
    }
    if (a.puntuacion > b.puntuacion) {
      return -1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });

  return jugadoresResult;
}

/**
 * Se debe ordenar primero por puntuación de manera descendente. Cuando 2 jugadores tienen igual cantidad de puntos,
 * el que tiene menos perdidas se lo considerara el mayor. Luego a igual puntos y perdidas se seguirá usando el
 * nombre de manera ascendente.
 * @param jugadores la lista de jugadores a ordenar
 * @return la lista ordenada de jugadores
 */
export function ordenarPorPuntuacionPerdidasYNombre(
  jugadores: Jugador[]
): Jugador[] {
  // throw new UnsupportedOperationException();
  let jugadoresResult: Jugador[] = jugadores.sort((a, b) => {
    if (a.puntuacion < b.puntuacion) {
      return 1;
    }
    if (a.puntuacion > b.puntuacion) {
      return -1;
    }
    if (a.perdidas > b.perdidas) {
      return 1;
    }
    if (a.perdidas < b.perdidas) {
      return -1;
    }
    if (a.nombre < b.nombre) {
      return 1;
    }
    if (a.nombre > b.nombre) {
      return -1;
    }
    return 0;
  });

  return jugadoresResult;
}
