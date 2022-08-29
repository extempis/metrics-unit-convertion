const tab = {
  ref: 'm²',
  to_si: {
    'm²': x => {
      return x;
    },
    'Km²': x => {
      return x * 1e6;
    }
  },
  from_si: {
    'm²': x => {
      return x;
    },
    'Km²': x => {
      return x * 1e-6;
    }
  }
};

export default tab;
