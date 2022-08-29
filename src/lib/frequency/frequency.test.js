import TestFunction from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'Hz', to: 'Hz', init: 10000, resu: 10000 },
  { from: 'KHz', to: 'Hz', init: 12.345, resu: 12.345e3 },
  { from: 'MHz', to: 'Hz', init: 1.28, resu: 1.28e6 },
  { from: 'GHz', to: 'Hz', init: 1.625, resu: 1.625e9 }
];

describe('Test convertion frequency to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: 'Hz', to: 'KHz', init: 12.345, resu: 12.345e-3 },
  { from: 'Hz', to: 'MHz', init: 1.28, resu: 1.28e-6 },
  { from: 'Hz', to: 'GHz', init: 1.625, resu: 1.625e-9 },

  { from: 'KHz', to: 'Hz', init: 12.345, resu: 12.345e3 },
  { from: 'KHz', to: 'MHz', init: 1.28, resu: 1.28e-3 },
  { from: 'KHz', to: 'GHz', init: 1.625, resu: 1.625e-6 },

  { from: 'MHz', to: 'KHz', init: 12.345, resu: 12.345e3 },
  { from: 'MHz', to: 'Hz', init: 1.28, resu: 1.28e6 },
  { from: 'MHz', to: 'GHz', init: 1.625, resu: 1.625e-3 },

  { from: 'GHz', to: 'KHz', init: 12.345, resu: 12.345e6 },
  { from: 'GHz', to: 'MHz', init: 1.28, resu: 1280 },
  { from: 'GHz', to: 'Hz', init: 1.625, resu: 1625e6 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
