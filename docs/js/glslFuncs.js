// xxx: アロー関数内の変数は`let` ？

const stepNaN = (a, x) =>
  Number.isNaN(x) || Number.isNaN(a) || x > a ? x : Number.NaN;

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);

const saturate = (x) => clamp(x, 0.0, 1.0);

const remap = (a, b, x, c, d) => {
  if (x < a) return c;
  if (x > b) return d;
  let y = (x - a) / (b - a);
  return c + (d - c) * y;
};
const smoothstep = (a, b, x) => {
  let y = saturate((x - a) / (b - a));
  return y * y * (3.0 - 2.0 * y);
};

const ssign = (x) => (x >= 0.0 ? 1.0 : -1.0);

const radians = (deg) => (deg * Math.PI) / 180.0;
const degrees = (rad) => (rad * 180.0) / Math.PI;

const inversesqrt = (x) => 1.0 / Math.sqrt(x);
const rsqrt = (x) => inversesqrt(x);

const rcbrt = (x) => 1.0 / Math.cbrt(x);
const rcp = (x) => 1.0 / x;

const fma = (x, y, z) => x * y + z;

const step = (a, x) => (x < a ? 0.0 : 1.0);

const mix = (a, b, x) => a + (b - a) * x;
const lerp = (a, b, x) => mix(a, b, x);

const over = (x, y) => 1.0 - (1.0 - x) * (1.0 - y);

// xxx: あとで変数考える
const tri = (a, x) => {
  x = x / (2.0 * Math.PI);
  x = x % 1.0;
  x = x > 0.0 ? x : x + 1.0;
  if (x < a) {
    x = x / a;
  } else {
    x = 1.0 - (x - a) / (1.0 - a);
  }
  return -1.0 + 2.0 * x;
};

const sqr = (a, x) => (Math.sin(x) > a ? 1.0 : -1.0);

const frac = (x) => x - Math.floor(x);
const fract = (x) => frac(x);

const exp2 = (x) => pow(2.0, x);
const exp10 = (x) => pow(10.0, x);

const mod = (x, y) => x - y * Math.floor(x / y);

const cellnoise = (x) => {
  let n, m;
  n = Math.floor(x) | 0;
  n = (n << 13) ^ n;
  n &= 0xffffffff;
  m = n;
  n = n * 15731;
  n &= 0xffffffff;
  n = n * m;
  n &= 0xffffffff;
  n = n + 789221;
  n &= 0xffffffff;
  n = n * m;
  n &= 0xffffffff;
  n = n + 1376312589;
  n &= 0xffffffff;
  n = (n >> 14) & 65535;
  return n / 65535.0;
};

const voronoi = (x) => {
  const i = Math.floor(x);
  const f = x - i;

  const x0 = cellnoise(i - 1);
  const d0 = Math.abs(f - (-1 + x0));

  const x1 = cellnoise(i);
  const d1 = Math.abs(f - x1);

  const x2 = cellnoise(i + 1);
  const d2 = Math.abs(f - (1 + x2));

  let r = d0;
  r = d1 < r ? d1 : r;
  r = d2 < r ? d2 : r;
  return r;
};

const noise = (x) => {
  const i = Math.floor(x) | 0;
  const f = x - i;
  const w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  const a = (2.0 * cellnoise(i + 0) - 1.0) * (f + 0.0);
  const b = (2.0 * cellnoise(i + 1) - 1.0) * (f - 1.0);
  return 2.0 * (a + (b - a) * w);
};

//export {stepNaN, clamp, saturate, remap, smoothstep, ssign, radians, degrees, inversesqrt, rsqrt, rcbrt, rcp, fma, step, mix, lerp, over, tri, sqr, fract, exp2, exp10, mod, cellnoise, voronoi, noise};

export { stepNaN };
