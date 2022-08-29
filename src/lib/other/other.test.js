import ConvertUnit from '../index';
import { PER_10000 } from '../../helpertest/helpertest';

describe('Test convertion trial error', () => {
  it(`should return undefined => from unit is not implemented`, () => {
    const resu = ConvertUnit(555)
      .from('ddddd')
      .to('m');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => to unit is not implemented`, () => {
    const resu = ConvertUnit(555)
      .from('m')
      .to('dddd');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => value to convert is not a number`, () => {
    const resu = ConvertUnit('555')
      .from('m')
      .to('lbs');
    expect(resu).toEqual(undefined);
  });
});

// WithFactor special case
describe('Test convertion WithFactor error', () => {
  it(`should return undefined => withFactor has no parameters`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor()
      .to('Kg');
    expect(resu).toEqual(undefined);
  });

  it(`should return undefined => withFactor has just one parameter`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor(1)
      .to('Kg');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => withFactor has undefined factor parameter`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor(undefined, 'u')
      .to('Kg');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => withFactor has unknow unit`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor(1, 'u')
      .to('Kg');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => withFactor has unknow to unit`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor(1, 'Kg/m³')
      .to('u');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => withFactor : first parameter is not a number`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor('11', 'u')
      .to('Kg');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => withFactor : second parameter is not a string`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .withFactor(11, 111)
      .to('Kg');
    expect(resu).toEqual(undefined);
  });
  it(`should return undefined => cross measurement without withFactor called`, () => {
    const resu = ConvertUnit(12)
      .from('l')
      .to('Kg');
    expect(resu).toEqual(undefined);
  });
});

// WithFactor special case
describe('Test convertion WithFactor', () => {
  it(`should return conversion with factor : neutral factor`, () => {
    let resu = ConvertUnit(12)
      .from('l')
      .withFactor(1, 'Kg/l')
      .to('Kg');
    expect(resu).toEqual(12);

    resu = ConvertUnit(12)
      .from('Kg')
      .withFactor(1, 'Kg/l')
      .to('l');
    expect(resu).toEqual(12);
  });

  it(`should return conversion with factor : real factor`, () => {
    let resu = ConvertUnit(12)
      .from('l')
      .withFactor(748.9, 'Kg/m³')
      .to('Kg');
    expect(resu).toEqual(8.9868);

    resu = ConvertUnit(12)
      .from('m³')
      .withFactor(748.9, 'Kg/m³')
      .to('Kg');
    expect(resu).toEqual(8986.8);

    resu = ConvertUnit(12)
      .from('m³')
      .withFactor(748.9, 'Kg/m³')
      .to('lbs');
    const error = Math.abs(19812.502578031 - resu) / resu;
    expect(error).toBeLessThan(PER_10000);

    resu = ConvertUnit(12)
      .from('l')
      .withFactor(0.7489, 'Kg/l')
      .to('Kg');
    expect(resu).toEqual(8.9868);
  });
});
