import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'm', to: 'm', init: 10, resu: 10 },
  { from: 'ft', to: 'm', init: 10000, resu: 3048, tolerance: PER_10000 },
  { from: 'Nn', to: 'm', init: 10, resu: 18520 },
  { from: 'Km', to: 'm', init: 10, resu: 10e3 },
  { from: 'FL', to: 'm', init: 100, resu: 3048, tolerance: PER_10000 }
];

describe('Test convertion Distance to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'm', to: 'm', init: 123, resu: 123 },
  { from: 'ft', to: 'ft', init: 158, resu: 158 },
  { from: 'Nn', to: 'Nn', init: 169, resu: 169 },
  { from: 'Km', to: 'Km', init: 205, resu: 205 },
  { from: 'FL', to: 'FL', init: 452, resu: 452 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: 'm', to: 'ft', init: 168, resu: 551.181, tolerance: PER_10000 },
  { from: 'm', to: 'Nn', init: 900099, resu: 486.0145, tolerance: PER_10000 },
  { from: 'm', to: 'Km', init: 56, resu: 56e-3 },
  { from: 'm', to: 'FL', init: 703, resu: 2306.43e-2, tolerance: PER_10000 },

  { from: 'ft', to: 'm', init: 569, resu: 173.431, tolerance: PER_10000 },
  { from: 'ft', to: 'Nn', init: 569744, resu: 93.767803, tolerance: PER_10000 },
  { from: 'ft', to: 'Km', init: 65705, resu: 20.026884, tolerance: PER_10000 },
  { from: 'ft', to: 'FL', init: 569744, resu: 569744e-2 },

  { from: 'Nn', to: 'ft', init: 5, resu: 30380.577, tolerance: PER_10000 },
  { from: 'Nn', to: 'm', init: 12, resu: 22224 },
  { from: 'Nn', to: 'Km', init: 85, resu: 157.42 },
  { from: 'Nn', to: 'FL', init: 5, resu: 30380.577e-2, tolerance: PER_10000 },

  { from: 'Km', to: 'ft', init: 168, resu: 551.181e3, tolerance: PER_10000 },
  { from: 'Km', to: 'Nn', init: 900099, resu: 486.0145e3, tolerance: PER_10000 },
  { from: 'Km', to: 'Km', init: 56, resu: 56 },
  { from: 'Km', to: 'FL', init: 5, resu: 164.041, tolerance: PER_10000 },

  { from: 'FL', to: 'ft', init: 650, resu: 650e2 },
  { from: 'FL', to: 'Nn', init: 500, resu: 8.2289, tolerance: PER_10000 },
  { from: 'FL', to: 'Km', init: 500, resu: 15.24, tolerance: PER_10000 },
  { from: 'FL', to: 'm', init: 500, resu: 15.2401e3, tolerance: PER_10000 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
