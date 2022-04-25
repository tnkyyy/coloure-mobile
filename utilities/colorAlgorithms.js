// This file will provide algorithms used by the app to generate x number of hex colors and return them

// Conversion Utility

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToHSLObj(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = '0x' + H[1] + H[1];
    g = '0x' + H[2] + H[2];
    b = '0x' + H[3] + H[3];
  } else if (H.length == 7) {
    r = '0x' + H[1] + H[2];
    g = '0x' + H[3] + H[4];
    b = '0x' + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h: h, s: s, l: l };
}

// Other utility

export const pickTextColor = (bgColor) => {
  var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#101010' : '#d3d3d3';
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Random

export const randomColors = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    result.push(rgbToHex(r, g, b));
  }
  return result;
};

export const moderateRandomColors = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    const r = getRandomInt(64, 192);
    const g = getRandomInt(64, 192);
    const b = getRandomInt(64, 192);
    result.push(rgbToHex(r, g, b));
  }
  return result;
};

export const pastelRandomColors = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    const r = getRandomInt(150, 220);
    const g = getRandomInt(150, 220);
    const b = getRandomInt(150, 220);
    result.push(rgbToHex(r, g, b));
  }
  return result;
};

// Shades

export const shadeColors = (n, basis = moderateRandomColors(1)) => {
  let result = [];
  basis = basis[0];
  const originalHue = hexToHSLObj(basis)['h'];
  console.log(originalHue);
  const originalSat = hexToHSLObj(basis)['s'];
  console.log(originalSat);
  const originalLig = hexToHSLObj(basis)['l'];
  console.log(originalLig);
  let satDistance, ligDistance;
  satDistance = originalSat > 50 ? 100 - originalSat : originalSat;
  ligDistance = originalLig > 50 ? 100 - originalLig : originalLig;
  const satFactor = satDistance / n / getRandomArbitrary(1, 1.5);
  const ligFactor = ligDistance / n / getRandomArbitrary(1, 1.5);
  let acc = satFactor;
  let accL = ligFactor;
  if (originalSat > 50) {
    for (let i = 0; i < n; i++) {
      result.push(hslToHex(originalHue, originalSat - acc, originalLig - accL));
      acc += satFactor;
      accL += ligFactor;
    }
  } else {
    for (let i = 0; i < n; i++) {
      result.push(hslToHex(originalHue, originalSat + acc, originalLig + accL));
      acc += satFactor;
      accL += ligFactor;
    }
  }
  return result;
};
