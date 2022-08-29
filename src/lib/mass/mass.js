const tab = {
  ref: 'Kg',
  to_si: {
    Kg: x => {
      return x;
    },
    g: x => {
      return x / 1e3;
    },
    t: x => {
      return x * 1e3;
    },
    lbs: x => {
      return x / 2.20462262185;
    }
  },
  from_si: {
    Kg: x => {
      return x;
    },
    g: x => {
      return x * 1e3;
    },
    t: x => {
      return x / 1e3;
    },
    lbs: x => {
      return x * 2.20462262185;
    }
  }
};

export default tab;
