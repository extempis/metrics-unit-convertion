import acceleration from './acceleration/acceleration';
import angle from './angle/angle';
import area from './area/area';
import frequency from './frequency/frequency';
import length from './length/length';
import mass from './mass/mass';
import massvol from './massvol/massvol';
import pressure from './pressure/pressure';
import speed from './speed/speed';
import temperature from './temperature/temperature';
import volume from './volume/volume';

const metrics = {
  acceleration,
  angle,
  area,
  frequency,
  length,
  mass,
  massvol,
  pressure,
  speed,
  temperature,
  volume
};

module.exports = function (param) {
  const value = param;
  let fromUnit;
  let measureTypeFrom;
  let withCoeff;
  let withUnit;

  // ---
  // Public API.
  // ---
  return {
    from: from,
    to: to,
    withFactor: withFactor
  };

  // ---
  // PUBLIC METHODS.
  // ---
  function from(u) {
    fromUnit = u;
    measureTypeFrom = searchUnit(u);
    return this;
  }

  function withFactor(k, u) {
    withCoeff = k;
    withUnit = u;
    return this;
  }

  function to(toUnit) {
    const measureTypeTo = searchUnit(toUnit);
    let coeff = 1;
    let resu;

    if (typeof value !== 'number' || measureTypeFrom === undefined || measureTypeTo === undefined) {
      return undefined;
    }
    const formulaFrom = metrics[measureTypeFrom].to_si[fromUnit];
    const formulaTo = metrics[measureTypeTo].from_si[toUnit];

    if (measureTypeFrom !== measureTypeTo) {
      const measureTypeComposed = searchUnit(withUnit);
      if (measureTypeComposed === undefined) {
        return undefined;
      }
      coeff = getSIFactor(measureTypeComposed);
    }
    resu = formulaFrom(value) * coeff;
    resu = formulaTo(resu);

    return resu;
  }

  // ---
  // PRIVATE METHODS.
  // ---
  function getSIFactor(mtype) {
    let coeff;
    const formulaComposed = metrics[mtype].to_si[withUnit];
    coeff = formulaComposed(withCoeff);
    if (withUnit.split('/')[0] === fromUnit) {
      coeff = 1 / coeff;
    }
    return coeff;
  }

  function searchUnit(u) {
    for (const [key, units] of Object.entries(metrics)) {
      const found = units.to_si[u];
      if (found !== undefined) {
        return key;
      }
    }
    return undefined;
  }
}
