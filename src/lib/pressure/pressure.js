const tab = {
  ref: 'Pa',
  to_si: {
    Pa: x => {
      return x;
    },
    bar: x => {
      return x * 1.0e5;
    },
    atm: x => {
      return x * 101325;
    },
    mbar: x => {
      return x * 1.0e2;
    },
    hPa: x => {
      return x * 1e2;
    }
  },
  from_si: {
    Pa: x => {
      return x;
    },
    bar: x => {
      return x / 1.0e5;
    },
    atm: x => {
      return x / 101325;
    },
    mbar: x => {
      return x / 1.0e2;
    },
    hPa: x => {
      return x / 1e2;
    }
  }
};

export default tab;
