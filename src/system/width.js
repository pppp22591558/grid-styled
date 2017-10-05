import { is, num, px, breaks, dec, media, merge } from './util';

const wx = n => !num(n) || n > 1 ? px(n) : `${n * 100}%`;

export default props => {
  const n = is(props.width) ? props.width : props.width || props.w;
  if (!is(n)) return null;

  if (!Array.isArray(n)) {
    return {
      width: wx(n),
    };
  }

  const bp = breaks(props);

  return n
    .map(wx)
    .map(dec('width'))
    .map(media(bp))
    .reduce(merge, {});
};
