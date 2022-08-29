const tab = {
  ref: 'Kg/m³',
  to_si: {
    'Kg/m³': x => {
      return x;
    },
    'Kg/l': x => {
      return x * 1e3;
    },
    't/m³': x => {
      return x * 1e3;
    }
  },
  from_si: {
    'Kg/m³': x => {
      return x;
    },
    'Kg/l': x => {
      return x / 1e3;
    },
    't/m³': x => {
      return x / 1e3;
    }
  }
};

export default tab;
