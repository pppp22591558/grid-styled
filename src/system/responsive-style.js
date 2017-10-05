import { get, is, arr, breaks, dec, media, merge } from './util';

const bool = val => n => n === true ? val : n;
const sx = scale => n => is(n) ? scale[n] || n : n;

export default (...args) => props => {
  // support for legacy API
  const [arg, _prop, _bool] = args;
  const argObj = typeof arg === 'string'
    ? { cssProperty: arg, prop: _prop, boolValue: _bool }
    : arg;
  const { cssProperty, boolValue, key } = argObj;
  let { prop } = argObj;

  prop = prop || cssProperty;
  const n = props[prop];
  if (!is(n)) return null;

  const bp = breaks(props);
  const scale = get(props, ['theme', key || prop].join('.'), {});

  if (!Array.isArray(n)) {
    return {
      [cssProperty]: sx(scale)(
        bool(boolValue)(n),
      ),
    };
  }

  const val = arr(n);
  return val
    .map(bool(boolValue))
    .map(sx(scale))
    .map(dec(cssProperty))
    .map(media(bp))
    .reduce(merge, {});
};
