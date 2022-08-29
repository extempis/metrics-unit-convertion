import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/
const matrixToSI = [
  { from: '1', to: '1', init: 123, resu: 123 },
  { from: '2', to: '1', init: 5, resu: 10 },
  { from: '3', to: '1', init: 3, resu: 9, tolerance: PER_10000 }
];

describe('Test convertion XXXXXXXX to SI', () => {
  matrixToSI.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: '1', to: '1', init: 123, resu: 123 },
  { from: '2', to: '2', init: 10, resu: 10 },
  { from: '3', to: '3', init: 9, resu: 9 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: '1', to: '1', init: 123, resu: 123 },
  { from: '1', to: '2', init: 10, resu: 5 },
  { from: '1', to: '3', init: 9, resu: 3 },

  { from: '2', to: '1', init: 123, resu: 246 },
  { from: '2', to: '2', init: 10, resu: 10 },
  { from: '2', to: '3', init: 9, resu: 6 },

  { from: '3', to: '1', init: 123, resu: 369 },
  { from: '3', to: '2', init: 10, resu: 15 },
  { from: '3', to: '3', init: 9, resu: 9 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
