import TestFunction from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/
const matrixToSI = [
  { from: 'm³', to: 'm³', init: 15, resu: 15 },
  { from: 'Km³', to: 'm³', init: 56, resu: 56e9 },
  { from: 'l', to: 'm³', init: 63.2, resu: 0.0632 }
];

describe('Test convertion Volume to SI', () => {
  matrixToSI.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'm³', to: 'm³', init: 153, resu: 153 },
  { from: 'Km³', to: 'Km³', init: 56, resu: 56 },
  { from: 'l', to: 'l', init: 63.2, resu: 63.2 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: 'm³', to: 'Km³', init: 753.2, resu: 7.532e-7 },
  { from: 'm³', to: 'l', init: 753.2, resu: 753200 },

  { from: 'Km³', to: 'm³', init: 426.3, resu: 4263e8 },
  { from: 'Km³', to: 'l', init: 46.3, resu: 463e11 },

  { from: 'l', to: 'm³', init: 89633, resu: 89.633 },
  { from: 'l', to: 'Km³', init: 369, resu: 3.69e-10 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
