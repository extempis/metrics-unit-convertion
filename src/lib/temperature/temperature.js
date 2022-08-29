const tab = {
  ref: 'K',
  to_si: {
    K: x => {
      return x;
    },
    '°C': x => {
      return x + 273.15;
    },
    '°F': x => {
      return (x - 32.0) * 5 / 9 + 273.15;
    }
  },
  from_si: {
    K: x => {
      return x;
    },
    '°C': x => {
      return x - 273.15;
    },
    '°F': x => {
      return (x - 273.15) * 9 / 5 + 32.0;
    }
  }
};

export default tab;
