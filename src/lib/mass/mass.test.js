import TestFunction, { PER_10000 } from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'Kg', to: 'Kg', init: 0.12, resu: 0.12 },
  { from: 'g', to: 'Kg', init: 60, resu: 60e-3 },
  { from: 't', to: 'Kg', init: 60, resu: 60e3 },
  { from: 'lbs', to: 'Kg', init: 15, resu: 6.803885, tolerance: PER_10000 }
];

describe('Test convertion Masse to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'Kg', to: 'Kg', init: 153, resu: 153 },
  { from: 'g', to: 'g', init: 10006, resu: 10006 },
  { from: 't', to: 't', init: 256, resu: 256 },
  { from: 'lbs', to: 'lbs', init: 256, resu: 256 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

const matrixAllcase = [
  { from: 'Kg', to: 'g', init: 10006, resu: 10006e3 },
  { from: 'Kg', to: 't', init: 256, resu: 256e-3 },
  { from: 'Kg', to: 'lbs', init: 256, resu: 564.383, tolerance: PER_10000 },

  { from: 'g', to: 'Kg', init: 1234, resu: 1.234 },
  { from: 'g', to: 't', init: 14569, resu: 14569e-6 },
  { from: 'g', to: 'lbs', init: 256e3, resu: 564.383, tolerance: PER_10000 },

  { from: 't', to: 'g', init: 0.156, resu: 156e3 },
  { from: 't', to: 'Kg', init: 896, resu: 896e3 },
  { from: 't', to: 'lbs', init: 56, resu: 123458.86682, tolerance: PER_10000 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
