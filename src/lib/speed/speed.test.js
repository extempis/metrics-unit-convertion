import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'm/s', to: 'm/s', init: 15, resu: 15 },
  { from: 'Km/h', to: 'm/s', init: 156, resu: 43.3333, tolerance: PER_10000 },
  { from: 'kt', to: 'm/s', init: 875, resu: 450.13888, tolerance: PER_10000 },
  { from: 'ft/min', to: 'm/s', init: 482, resu: 2.4485599, tolerance: PER_10000 }
];

describe('Test convertion Speed to SI', () => {
  matrixToSI.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'm/s', to: 'm/s', init: 15, resu: 15 },
  { from: 'Km/h', to: 'Km/h', init: 123, resu: 123 },
  { from: 'kt', to: 'kt', init: 456, resu: 456 },
  { from: 'ft/min', to: 'ft/min', init: 789, resu: 789, tolerance: PER_10000 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: 'm/s', to: 'Km/h', init: 423, resu: 1522.8 },
  { from: 'm/s', to: 'kt', init: 723, resu: 1405.39956, tolerance: PER_10000 },
  { from: 'm/s', to: 'ft/min', init: 853, resu: 167913.3912 },

  { from: 'Km/h', to: 'm/s', init: 512, resu: 142.2222, tolerance: PER_10000 },
  { from: 'Km/h', to: 'kt', init: 753, resu: 406.58747, tolerance: PER_10000 },
  { from: 'Km/h', to: 'ft/min', init: 753, resu: 41174.542 },

  { from: 'kt', to: 'm/s', init: 45.3, resu: 23.304333, tolerance: PER_10000 },
  { from: 'kt', to: 'Km/h', init: 12.8, resu: 23.705599, tolerance: PER_10000 },
  { from: 'kt', to: 'ft/min', init: 12.8, resu: 1296.238, tolerance: PER_10000 },

  { from: 'ft/min', to: 'm/s', init: 15469, resu: 78.5825, tolerance: PER_10000 },
  { from: 'ft/min', to: 'kt', init: 7513, resu: 74.18884, tolerance: PER_10000 },
  { from: 'ft/min', to: 'Km/h', init: 2712, resu: 49.59705, tolerance: PER_10000 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});
