import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/
const matrixToSI = [
  { from: '°C', to: 'K', init: -273.15, resu: 0 },
  { from: 'K', to: 'K', init: 10000, resu: 10000 },
  { from: '°F', to: 'K', init: 169, resu: 349.26111, tolerance: PER_10000 }
];

describe('Test convertion Temperature to SI', () => {
  matrixToSI.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: '°C', to: '°C', init: 153, resu: 153 },
  { from: 'K', to: 'K', init: 10006, resu: 10006 },
  { from: '°F', to: '°F', init: 256, resu: 256 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: '°C', to: 'K', init: 25, resu: 298.15 },
  { from: '°C', to: '°F', init: 27, resu: 80.6 },
  { from: 'K', to: '°C', init: 300, resu: 26.85, tolerance: PER_10000 },
  { from: 'K', to: '°F', init: 400, resu: 260.33, tolerance: PER_10000 },
  { from: '°F', to: '°C', init: 75, resu: 23.88888, tolerance: PER_10000 },
  { from: '°F', to: 'K', init: 650, resu: 616.4833, tolerance: PER_10000 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixSomeValues = [
  { from: '°C', to: 'K', init: 20, resu: 293.15 },
  { from: '°C', to: 'K', init: 59, resu: 332.15 },
  { from: 'K', to: '°C', init: 0, resu: -273.15 }
];

describe('Test convertion some Temperature', () => {
  matrixSomeValues.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/
