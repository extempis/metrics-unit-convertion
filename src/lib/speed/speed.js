const tab = {
  ref: 'm/s',
  to_si: {
    'm/s': x => {
      return x;
    },
    'Km/h': x => {
      return x / 3.6;
    },
    kt: x => {
      return x / 1.9438444924574;
    },
    'ft/min': x => {
      return x / 196.8504;
    }
  },
  from_si: {
    'm/s': x => {
      return x;
    },
    'Km/h': x => {
      return x * 3.6;
    },
    kt: x => {
      return x * 1.9438444924574;
    },
    'ft/min': x => {
      return x * 196.8504;
    }
  }
};

export default tab;
