import { ordenarPorPuntuacionPerdidasYNombre, ordenarPorPuntuacionYNombre } from '@/sorting/sorting';
import Jugador from '@/sorting/jugador';

test('sort1Completo', () => {
  const jugadores : Jugador[] = [{
    nombre: 'Matias',
    puntuacion: 100,
    perdidas: 0,
  }, {
    nombre: 'Alejandro',
    puntuacion: 100,
    perdidas: 0,
  }, {
    nombre: 'Enzo',
    puntuacion: 50,
    perdidas: 0,
  }, {
    nombre: 'Junior',
    puntuacion: 75,
    perdidas: 0,
  }, {
    nombre: 'Pablo',
    puntuacion: 150,
    perdidas: 0,
  }];

  const jugadoresResult = ordenarPorPuntuacionYNombre(jugadores);

  expect(jugadoresResult.length).toBe(5);
  expect(jugadoresResult[0].nombre).toBe('Pablo');
  expect(jugadoresResult[1].nombre).toBe('Alejandro');
  expect(jugadoresResult[2].nombre).toBe('Matias');
  expect(jugadoresResult[3].nombre).toBe('Junior');
  expect(jugadoresResult[4].nombre).toBe('Enzo');
});
test('sort1Vacio', () => {
  const jugadores : Jugador[] = [];
  const jugadoresResult = ordenarPorPuntuacionYNombre(jugadores);
  expect(jugadoresResult.length).toBe(0);
});
test('sort1Unico', () => {
  const jugadores : Jugador[] = [{
    nombre: 'Matias',
    puntuacion: 100,
    perdidas: 0,
  }];
  const jugadoresResult = ordenarPorPuntuacionYNombre(jugadores);
  expect(jugadoresResult.length).toBe(1);
  expect(jugadoresResult[0].nombre).toBe('Matias');
});
test('sort2Completo', () => {
  const jugadores : Jugador[] = [{
    nombre: 'Matias',
    puntuacion: 100,
    perdidas: 3,
  }, {
    nombre: 'Alejandro',
    puntuacion: 100,
    perdidas: 4,
  }, {
    nombre: 'Enzo',
    puntuacion: 75,
    perdidas: 5,
  }, {
    nombre: 'Junior',
    puntuacion: 75,
    perdidas: 30,
  }, {
    nombre: 'Pablo',
    puntuacion: 150,
    perdidas: 0,
  }];

  const jugadoresResult = ordenarPorPuntuacionPerdidasYNombre(jugadores);

  expect(jugadoresResult.length).toBe(5);
  expect(jugadoresResult[0].nombre).toBe('Pablo');
  expect(jugadoresResult[1].nombre).toBe('Matias');
  expect(jugadoresResult[2].nombre).toBe('Alejandro');
  expect(jugadoresResult[3].nombre).toBe('Enzo');
  expect(jugadoresResult[4].nombre).toBe('Junior');
});
test('sort2Vacio', () => {
  const jugadores : Jugador[] = [];
  const jugadoresResult = ordenarPorPuntuacionPerdidasYNombre(jugadores);
  expect(jugadoresResult.length).toBe(0);
});
test('sort2Unico', () => {
  const jugadores : Jugador[] = [{
    nombre: 'Matias',
    puntuacion: 100,
    perdidas: 0,
  }];
  const jugadoresResult = ordenarPorPuntuacionPerdidasYNombre(jugadores);
  expect(jugadoresResult.length).toBe(1);
  expect(jugadoresResult[0].nombre).toBe('Matias');
});
