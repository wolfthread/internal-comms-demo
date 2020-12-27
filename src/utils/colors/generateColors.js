import hexColorCodes from './colors-hex-codes.json';

export const generateColors = (shades) => {
  const colors = hexColorCodes;
  let chosenShades = [];
  for (let shade of shades) {
    const thisShade = colors[shade].map((colorObj) => colorObj.hex);
    chosenShades = chosenShades.concat(thisShade);
  }
  return chosenShades;
};
