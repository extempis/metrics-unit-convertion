const tab = {
  ref: 'rad',
  to_si: {
    rad: x => {
      return x;
    },
    '°': x => {
      return x * Math.PI / 180;
    }
  },
  from_si: {
    rad: x => {
      return x;
    },
    '°': x => {
      return x * 180 / Math.PI;
    }
  }
};

export default tab;
