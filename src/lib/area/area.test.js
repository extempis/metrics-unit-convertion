import TestFunction from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'm²', to: 'm²', init: 15, resu: 15 },
  { from: 'Km²', to: 'm²', init: 15, resu: 15e6 }
];

describe('Test convertion Surface to SI', () => {
  matrixToSI.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'm²', to: 'm²', init: 15, resu: 15 },
  { from: 'Km²', to: 'Km²', init: 156, resu: 156 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/
