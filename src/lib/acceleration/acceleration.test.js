import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'm/s²', to: 'm/s²', init: 10, resu: 10 },
  { from: 'g0', to: 'm/s²', init: 5, resu: 49.03325 , tolerance: PER_10000 }
];

describe('Test convertion Distance to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'm/s²', to: 'm/s²', init: 123, resu: 123 },
  { from: 'g0', to: 'g0', init: 15, resu: 15 , tolerance: PER_10000}
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: 'm/s²', to: 'g0', init: 10, resu: 1.01971 , tolerance: PER_10000}
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
