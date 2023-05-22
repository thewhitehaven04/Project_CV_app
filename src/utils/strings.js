/** @param {String} str */
const toCamelCase = (str) => {
  const spaceSeparatedTokens = str.split(' ');
  const capitals = spaceSeparatedTokens
    .slice(1)
    .map((token) => token.substring(0, 1).toUpperCase() + token.substring(1));
  return spaceSeparatedTokens[0].toLowerCase().concat(...capitals);
};

export { toCamelCase };