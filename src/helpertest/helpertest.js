import ConvertUnit from '../lib/index';

export const PER_10000 = 1 / 10000;

export default function TestFunction(props) {
  it(`should convert ${props.from} -> ${props.to}`, () => {
    const resu = ConvertUnit(props.init)
      .from(props.from)
      .to(props.to);
    if (props.tolerance !== undefined) {
      const error = Math.abs(props.resu - resu) / resu;
      expect(error).toBeLessThan(props.tolerance);
    } else {
      expect(resu).toEqual(props.resu);
    }
  });
}
