const tab = {
  ref: 'm/s²',
  to_si: {
    g0: x => {
      return x * 9.80665;
    },
    'm/s²': x => {
      return x;
    }
  },
  from_si: {
    g0: x => {
      return x / 9.80665;
    },
    'm/s²': x => {
      return x;
    }
  }
};

export default tab;
