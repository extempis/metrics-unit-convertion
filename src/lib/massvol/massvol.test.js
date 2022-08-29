import TestFunction from '../../helpertest/helpertest';

/*----------------------------------------------------------------------*/

const matrixToSI = [
  { from: 'Kg/m³', to: 'Kg/m³', init: 15, resu: 15 },
  { from: 'Kg/l', to: 'Kg/m³', init: 36, resu: 36e3 },
  { from: 't/m³', to: 'Kg/m³', init: 86, resu: 86e3 }
];

describe('Test convertion Masse Volumique to SI', () => {
  matrixToSI.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixSames = [
  { from: 'Kg/m³', to: 'Kg/m³', init: 15, resu: 15 },
  { from: 'Kg/l', to: 'Kg/l', init: 36, resu: 36 },
  { from: 't/m³', to: 't/m³', init: 86, resu: 86 }
];

describe('Test convertion : Same Unit', () => {
  matrixSames.forEach(TestFunction);
});
/*----------------------------------------------------------------------*/

/*----------------------------------------------------------------------*/
const matrixAllcase = [
  { from: 'Kg/m³', to: 'Kg/l', init: 3245, resu: 3.245 },
  { from: 'Kg/m³', to: 't/m³', init: 3245, resu: 3.245 },

  { from: 'Kg/l', to: 'Kg/m³', init: 3245, resu: 3245000 },
  { from: 'Kg/l', to: 't/m³', init: 3245, resu: 3245 },

  { from: 't/m³', to: 'Kg/l', init: 3245, resu: 3245 },
  { from: 't/m³', to: 'Kg/m³', init: 3245, resu: 3245000 }
];

describe('Test convertion All case', () => {
  matrixAllcase.forEach(TestFunction);
});

/*----------------------------------------------------------------------*/
