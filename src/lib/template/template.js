const tab = {
  ref: '',
  to_si: {
    '1': x => {
      return x * 1;
    },
    '2': x => {
      return x * 2;
    },
    '3': x => {
      return x * 3;
    }
  },
  from_si: {
    '1': x => {
      return x / 1;
    },
    '2': x => {
      return x / 2;
    },
    '3': x => {
      return x / 3;
    }
  }
};

export default tab;
