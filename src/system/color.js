const { get, breaks, merge, dec, media } = require('./util');

const REG = /^color|bg$/;

const properties = {
  bg: 'backgroundColor',
};

const cx = obj => n => get(obj, `${n}${''}`, n);

export default props => {
  const keys = Object.keys(props).filter(key => REG.test(key));
  const bp = breaks(props);
  const palette = get(props, 'theme.colors', {});

  return keys.map(key => {
    const val = props[key];
    const prop = properties[key] || key;

    if (!Array.isArray(val)) {
      return {
        [prop]: cx(palette)(val),
      };
    }

    return val
      .map(cx(palette))
      .map(dec(prop))
      .map(media(bp))
      .reduce(merge, {});
  }).reduce(merge, {});
};
