import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'Pa', to: 'Pa', init: 15, resu: 15 },
  { from: 'bar', to: 'Pa', init: 562, resu: 5.62e7 },
  { from: 'atm', to: 'Pa', init: 896.3, resu: 90817597.5 },
  { from: 'mbar', to: 'Pa', init: 23, resu: 23e2 },
  { from: 'hPa', to: 'Pa', init: 45.2, resu: 4520 }
];

describe('Test convertion Pressure to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'Pa', to: 'Pa', init: 15, resu: 15 },
  { from: 'bar', to: 'bar', init: 562, resu: 562 },
  { from: 'atm', to: 'atm', init: 896.3, resu: 896.3 },
  { from: 'mbar', to: 'mbar', init: 23, resu: 23 },
  { from: 'hPa', to: 'hPa', init: 45.2, resu: 45.2 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});

const matrixAllcase = [
  { from: 'Pa', to: 'bar', init: 23698, resu: 0.23698 },
  { from: 'Pa', to: 'atm', init: 5870369, resu: 57.93603, tolerance: PER_10000 },
  { from: 'Pa', to: 'mbar', init: 4567, resu: 45.67 },
  { from: 'Pa', to: 'hPa', init: 4567, resu: 45.67 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
