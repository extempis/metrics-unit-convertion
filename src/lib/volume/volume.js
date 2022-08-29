const tab = {
  ref: 'm³',
  to_si: {
    'm³': x => {
      return x;
    },
    'Km³': x => {
      return x * 1e9;
    },
    l: x => {
      return x * 1e-3;
    }
  },
  from_si: {
    'm³': x => {
      return x;
    },
    'Km³': x => {
      return x * 1e-9;
    },
    l: x => {
      return x * 1e3;
    }
  }
};

export default tab;
