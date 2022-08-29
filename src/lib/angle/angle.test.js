import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'rad', to: 'rad', init: 0.12, resu: 0.12 },
  { from: '°', to: 'rad', init: 60, resu: 1.0472, tolerance: PER_10000 }
];

describe('Test convertion Angle to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

const matrixAllcase = [{ from: 'rad', to: '°', init: 0.56, resu: 32.085637, tolerance: PER_10000 }];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
