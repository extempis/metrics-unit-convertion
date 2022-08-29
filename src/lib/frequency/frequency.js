const tab = {
  ref: 'Hz',
  to_si: {
    Hz: x => {
      return x;
    },
    KHz: x => {
      return x * 1e3;
    },
    MHz: x => {
      return x * 1e6;
    },
    GHz: x => {
      return x * 1e9;
    }
  },
  from_si: {
    Hz: x => {
      return x;
    },
    KHz: x => {
      return x / 1e3;
    },
    MHz: x => {
      return x / 1e6;
    },
    GHz: x => {
      return x / 1e9;
    }
  }
};

export default tab;
