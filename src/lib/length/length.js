const tab = {
  ref: 'm',
  to_si: {
    m: x => {
      return x;
    },
    ft: x => {
      return x / 3.2808;
    },
    Nn: x => {
      return x * 1852;
    },
    Km: x => {
      return x * 1e3;
    },
    FL: x => {
      return x * 1e2 / 3.2808;
    }
  },
  from_si: {
    m: x => {
      return x;
    },
    ft: x => {
      return x * 3.2808;
    },
    Nn: x => {
      return x / 1852;
    },
    Km: x => {
      return x / 1e3;
    },
    FL: x => {
      return x * 3.2808 / 1e2;
    }
  }
};

export default tab;
